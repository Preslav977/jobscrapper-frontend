import { createContext, type SetStateAction } from "react";

type isUserLoggedInContextType = {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<SetStateAction<boolean>>;
};

export const isUserLoggedInContext =
  createContext<isUserLoggedInContextType | null>(null);
