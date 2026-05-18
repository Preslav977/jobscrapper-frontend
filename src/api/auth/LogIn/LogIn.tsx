import type {
  BearerToken,
  FormLogin,
} from "../../../interfaces/FormInterface/FormInterfaces";
import type { UserDetailsInterface } from "../../../interfaces/UserDetailsInterface/UserDetailsInterface";
import { localhostURL } from "../../../utility/localhostURL";

export async function loginAndFetchUserDetails(credentials: FormLogin) {
  const { email, password } = credentials;

  const loginResponse = await fetch(`${localhostURL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (loginResponse.status > 400) {
    throw new Error("Email or Password is incorrect!");
  }

  const { token } = (await loginResponse.json()) as BearerToken;

  const userResponse = await fetch(`${localhostURL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const user = (await userResponse.json()) as UserDetailsInterface;

  return { token, user };
}
