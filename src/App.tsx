import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import { isUserLoggedInContext } from "./context/isUserLoggedInContext";

export function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  return (
    <>
      <isUserLoggedInContext.Provider
        value={{ isUserLoggedIn, setIsUserLoggedIn }}
      >
        <Outlet />
      </isUserLoggedInContext.Provider>
    </>
  );
}
