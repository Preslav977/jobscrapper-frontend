import { useState } from "react";
import { signUp } from "../../api/useFetchJobs/auth/SignUp/SignUp";
import type { FormSignUp } from "../../interfaces/FormInterface/FormTypes";

export function useSignUp() {
  const [emailTakenErr, setEmailTakenErr] = useState<string>("");

  const handleSignUp = async (data: FormSignUp) => {
    try {
      setEmailTakenErr("");

      const result = await signUp(data);

      console.log(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setEmailTakenErr(error.message);
      }
    }
  };

  return { handleSignUp, emailTakenErr };
}
