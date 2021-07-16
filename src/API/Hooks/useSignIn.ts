import { LoginInputs } from "../../Components/Login/LoginForm";
import { useQuery } from "react-query";
import { signIn } from "../Endpoints/SignIn";
import { UserType } from "../../Types/User.type";

export const useSignIn = (body: LoginInputs): [UserType, boolean, boolean] => {
  const { data, isLoading, isError } = useQuery("user", () => signIn(body));

  const User = data?.data.User ?? ({} as UserType);
  const Token = data?.data.AuthorizationToken;

  localStorage.setItem("token", Token?.Token ?? "");

  return [User, isLoading, isError];
};
