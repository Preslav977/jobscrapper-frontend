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

  return response.json() as Promise<UserDetailsInterface>;
}
