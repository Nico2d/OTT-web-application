import axios from "../../axiosConfig";
import { LoginInputs } from "../../Components/Login/LoginForm";
import { UserType } from "../../Types/User.type";

type SignInRespond = {
  AuthorizationToken: {
    Token: string;
    TokenExpires: string;
  };
  User: UserType;
};

export const signIn = async (body: LoginInputs) => {
  return await axios.post<SignInRespond>("/Authorization/SignIn", { body });
};
