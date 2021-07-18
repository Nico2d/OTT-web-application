import { createContext, useContext } from "react";
import { UserType } from "../Types/User.type";

type UserContextTypes = {
  user: UserType;
  setUser: (user: UserType) => void;
};

export const UserContext = createContext<UserContextTypes>({
  user: {} as UserType,
  setUser: () => {},
});

export const useUserContext = () => useContext(UserContext);
