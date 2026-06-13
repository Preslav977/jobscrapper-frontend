import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { signUp } from "../../api/auth/SignUp/SignUp";

export function useSigUpMutation() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      void navigate("/login");
    },
  });
}
