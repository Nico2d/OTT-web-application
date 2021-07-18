export type SignInRespond = {
  AuthorizationToken: {
    Token: string;
    TokenExpires: string;
  };
  User: UserType;
};

export type UserType = {
  Username: string;
  FullName: string;
  id: number;
};
