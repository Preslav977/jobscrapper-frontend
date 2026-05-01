import { createContext } from "react";
import type { FormSignUp } from "../interfaces/FormTypes/FormTypes";

type userDetailsContext = {
  userDetails: FormSignUp | null;
  setUserDetails: (user: FormSignUp) => void;
};

export const userDetailsContext = createContext<userDetailsContext | null>(
  null,
);
