import { useMutation } from "react-query";
import { signIn } from "../Endpoints/signIn/signIn";

export const useSignIn = () => {
  const mutate = useMutation(signIn, {
    onSuccess: (data) => {
      const Token = data.data.AuthorizationToken.Token;
      localStorage.setItem("token", Token);
    },
    onError: ({ response }) => {},
  });

  return [mutate];
};
