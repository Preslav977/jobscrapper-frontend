import { createContext, type SetStateAction } from "react";
import type { UserDetailsInterface } from "../interfaces/UserDetailsInterface/UserDetailsInterface";

interface userDetailsContext {
  userDetails: UserDetailsInterface | null;
  setUserDetails: React.Dispatch<SetStateAction<UserDetailsInterface | null>>;
}

export const userDetailsContext = createContext<userDetailsContext | null>(
  null,
);
