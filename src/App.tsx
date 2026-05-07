import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import { isUserLoggedInContext } from "./context/isUserLoggedInContext";
import { userDetailsContext } from "./context/userDetailsContext";
import type { FormSignUp } from "./interfaces/FormTypes/FormTypes";

export function App() {
  const queryClient = new QueryClient();

  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  const [userDetails, setUserDetails] = useState<FormSignUp | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <userDetailsContext.Provider value={{ userDetails, setUserDetails }}>
        <isUserLoggedInContext.Provider
          value={{ isUserLoggedIn, setIsUserLoggedIn }}
        >
          <Outlet />
        </isUserLoggedInContext.Provider>
      </userDetailsContext.Provider>
    </QueryClientProvider>
  );
}
