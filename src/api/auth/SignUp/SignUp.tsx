import type { FormSignUp } from "../../../interfaces/FormInterface/FormInterfaces";
import type { GenericArrayErrorInterfaces } from "../../../interfaces/GenericErrorInterface/GenericErrorInterface";
import { localhostURL } from "../../../utility/localhostURL";

export async function signUp(data: FormSignUp): Promise<FormSignUp> {
  const { email, password, confirmPassword } = data;

  const response = await fetch(`${localhostURL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      confirmPassword,
    }),
  });

  if (response.status >= 400) {
    const errorData = (await response.json()) as GenericArrayErrorInterfaces[];

    throw new Error(errorData[0]?.msg);
  }

  return response.json() as Promise<FormSignUp>;
}
