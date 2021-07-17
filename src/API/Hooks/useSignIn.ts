import { useMutation } from "react-query";
import { signIn } from "../Endpoints/SignIn";

export const useSignIn = () => {
  const mutate = useMutation(signIn, {
    onSuccess: (data) => {
      const Token = data.data.AuthorizationToken;
      localStorage.setItem("token", Token?.Token ?? "");
    },
    onError: ({ response }) => {},
  });

  return [mutate];
};
