import type { GenericErrorInterface } from "../../interfaces/GenericErrorInterface/GenericErrorInterface";
import { localhostURL } from "../../utility/localhostURL";

export async function DeleteCompany({ id }: { id: number }) {
  const response = await fetch(`${localhostURL}/companies/${id}`, {
    method: "PUT",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
    body: JSON.stringify(id),
  });

  if (response.status >= 400) {
    const errorData = (await response.json()) as GenericErrorInterface;

    throw new Error(errorData.message || "Token has expired. Login again!");
  }

  return response.json() as Promise<[]>;
}
