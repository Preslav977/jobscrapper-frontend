import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../api/auth/SignUp/SignUp";

export function useSigUpMutation() {
  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
}
