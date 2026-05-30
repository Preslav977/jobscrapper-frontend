import type { GenericArrayErrorInterfaces } from "../../interfaces/GenericErrorInterface/GenericErrorInterface";
import type { UserDetailsInterface } from "../../interfaces/UserDetailsInterface/UserDetailsInterface";
import { localhostURL } from "../../utility/localhostURL";

export async function UpdateUser({
  formData,
  id,
}: {
  formData: FormData;
  id: number;
}) {
  const response = await fetch(`${localhostURL}/users/${id}`, {
    method: "PUT",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
    body: formData,
  });

  if (response.status >= 400) {
    const errorData = (await response.json()) as GenericArrayErrorInterfaces[];

    throw new Error(errorData[0]?.msg || "Token has expired. Login again!");
  }

  return response.json() as Promise<UserDetailsInterface>;
}
