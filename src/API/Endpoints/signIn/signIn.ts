import axios from "../../../axiosConfig";
import { LoginInputs } from "../../../Components/Login/LoginForm";
import { SignInRespond } from "./signIn.types";

export const signIn = async (body: LoginInputs) => {
  const res = await axios.post<SignInRespond>("/Authorization/SignIn", body);

  return res;
};
