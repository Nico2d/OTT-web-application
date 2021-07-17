import { useMutation, useQueryClient } from "react-query";
import { signIn } from "../Endpoints/SignIn";

export const useSignIn = () => {
  // const queryClient = useQueryClient();

  const mutate = useMutation(signIn, {
    onSuccess: (data) => {
      // queryClient.setQueryData("user", data);

      console.log("[Success]:", data);
      const Token = data.data.AuthorizationToken; //mutate.data?.data.AuthorizationToken;

      localStorage.setItem("token", Token?.Token ?? "");
    },
    onError: () => {
      alert("there was an error");
    },
  });

  // const User = mutate.data?.data.User ?? ({} as UserType);
  // const Token = mutate.data?.data.AuthorizationToken;

  // localStorage.setItem("token", Token?.Token ?? "");

  console.log("error: ", mutate.error);

  return [mutate];
};
