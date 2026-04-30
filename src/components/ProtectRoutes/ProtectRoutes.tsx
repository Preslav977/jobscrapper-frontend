import { useContext, type ReactNode } from "react";
import { Navigate } from "react-router";
import { isUserLoggedInContext } from "../../context/isUserLoggedInContext";

export function ProtectRoutes({
  children,
  requireAdmin = false,
}: {
  children: ReactNode;
  requireAdmin: boolean;
}) {
  const userLoggedIn = useContext(isUserLoggedInContext);

  if (!userLoggedIn?.isUserLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  if (requireAdmin) {
    return <Navigate to={"/"} />;
  }

  return children;
}
