import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { loginAndFetchUserDetails } from "../../api/auth/LogIn/LogIn";
import { useIsUserLoggedIn } from "../../context/isUserLoggedInContext";
import { useUserDetails } from "../../context/userDetailsContext";

export function useLoginMutation() {
  const navigate = useNavigate();

  const { setIsUserLoggedIn } = useIsUserLoggedIn();

  const { setUserDetails } = useUserDetails();

  return useMutation({
    mutationFn: loginAndFetchUserDetails,
    onSuccess: ({ token, user }) => {
      sessionStorage.setItem("token", `Bearer ${token}`);

      setUserDetails(user);

      setIsUserLoggedIn(true);

      void navigate("/companies");
    },
  });
}
