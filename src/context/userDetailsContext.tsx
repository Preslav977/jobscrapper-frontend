import { createContext, type SetStateAction } from "react";
import type { FormSignUp } from "../interfaces/FormInterface/FormInterfaces";

type userDetailsContext = {
  userDetails: FormSignUp | null;
  setUserDetails: React.Dispatch<SetStateAction<FormSignUp>>;
};

export const userDetailsContext = createContext<userDetailsContext | null>(
  null,
);
