import { useContext, type ReactNode } from "react";
import { Navigate } from "react-router";
import { useIsUserLoggedIn } from "../../context/isUserLoggedInContext";
import { userDetailsContext } from "../../context/userDetailsContext";

export function ProtectRoutes({
  children,
  requireAdmin,
}: {
  children: ReactNode;
  requireAdmin: boolean;
}) {
  const { isUserLoggedIn } = useIsUserLoggedIn();

  const { userDetails } = useContext(userDetailsContext)!;

  if (!isUserLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  if (requireAdmin && userDetails?.role !== "ADMIN") {
    return <Navigate to={"/login"} />;
  }

  return children;
}
