import { UserType } from "../../../Types/User.type";

export type SignInRespond = {
  AuthorizationToken: {
    Token: string;
    TokenExpires: string;
  };
  User: UserType;
};
