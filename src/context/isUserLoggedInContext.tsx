import { createContext, use, type SetStateAction } from "react";

type isUserLoggedInContextType = {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<SetStateAction<boolean>>;
};

export const isUserLoggedInContext =
  createContext<isUserLoggedInContextType | null>(null);

export const useIsUserLoggedIn = () => {
  const isUserLoggedIn = use(isUserLoggedInContext);

  if (!isUserLoggedIn) {
    throw new Error(
      "useIsUserLoggedIn has to used within <isUserLoggedInContext>",
    );
  }

  return isUserLoggedIn;
};
