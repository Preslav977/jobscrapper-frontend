const queryClient = new QueryClient({
  /* ... */
});

// This code is only for TypeScript
declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
  }
}

// This code is for all users
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { isUserLoggedInContext } from "./context/isUserLoggedInContext";
import { userDetailsContext } from "./context/userDetailsContext";
import type { UserDetailsInterface } from "./interfaces/UserDetailsInterface/UserDetailsInterface";

export function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  const [userDetails, setUserDetails] = useState<UserDetailsInterface | null>(
    null,
  );

  return (
    <QueryClientProvider client={queryClient}>
      <userDetailsContext.Provider value={{ userDetails, setUserDetails }}>
        <isUserLoggedInContext.Provider
          value={{ isUserLoggedIn, setIsUserLoggedIn }}
        >
          <Outlet />
          <Footer />
        </isUserLoggedInContext.Provider>
      </userDetailsContext.Provider>
    </QueryClientProvider>
  );
}
