const queryClient = new QueryClient({});

declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
  }
}

window.__TANSTACK_QUERY_CLIENT__ = queryClient;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Outlet } from "react-router";
import { isUserLoggedInContext } from "./context/isUserLoggedInContext";
import { userDetailsContext } from "./context/userDetailsContext";
import type { UserDetailsInterface } from "./interfaces/UserDetailsInterface/UserDetailsInterface";

export function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  const [userDetails, setUserDetails] = useState<UserDetailsInterface | null>(
    null,
  );

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <userDetailsContext.Provider value={{ userDetails, setUserDetails }}>
          <isUserLoggedInContext.Provider
            value={{ isUserLoggedIn, setIsUserLoggedIn }}
          >
            <Outlet />
          </isUserLoggedInContext.Provider>
        </userDetailsContext.Provider>
      </QueryClientProvider>
    </main>
  );
}
