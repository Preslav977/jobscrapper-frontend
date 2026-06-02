import { createContext, use, type SetStateAction } from "react";
import type { UserDetailsInterface } from "../interfaces/UserDetailsInterface/UserDetailsInterface";

interface userDetailsContext {
  userDetails: UserDetailsInterface | null;
  setUserDetails: React.Dispatch<SetStateAction<UserDetailsInterface | null>>;
}

export const userDetailsContext = createContext<userDetailsContext | null>(
  null,
);

export const useUserDetails = () => {
  const userDetails = use(userDetailsContext);

  if (!userDetails) {
    throw new Error("userDetails has to used within <userDetailsContext>");
  }

  return userDetails;
};
