import { createContext } from "react";

type isUserLoggedInContextType = {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (userLoggedIn: boolean) => void;
};

export const isUserLoggedInContext =
  createContext<isUserLoggedInContextType | null>(null);
