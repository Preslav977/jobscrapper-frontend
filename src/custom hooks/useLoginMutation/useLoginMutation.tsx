import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { loginAndFetchUserDetails } from "../../api/auth/LogIn/LogIn";
import { isUserLoggedInContext } from "../../context/isUserLoggedInContext";
import { userDetailsContext } from "../../context/userDetailsContext";

export function useLoginMutation() {
  const navigate = useNavigate();

  const { setIsUserLoggedIn } = useContext(isUserLoggedInContext)!;

  const { setUserDetails } = useContext(userDetailsContext)!;

  return useMutation({
    mutationFn: loginAndFetchUserDetails,
    onSuccess: ({ token, user }) => {
      sessionStorage.setItem("token", `Bearer ${token}`);

      setUserDetails(user);

      setIsUserLoggedIn(true);

      void navigate("/dashboard");
    },
  });
}
