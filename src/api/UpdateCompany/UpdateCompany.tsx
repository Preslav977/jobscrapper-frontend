import type { Company } from "../../interfaces/CompanyInterface/CompanyInterface";
import type { CreateCompanyError } from "../../interfaces/CreateCompanyError/CreateCompanyError";
import { localhostURL } from "../../utility/localhostURL";

export async function UpdateCompany({
  id,
  formData,
}: {
  id: number;
  formData: FormData;
}): Promise<Company> {
  const response = await fetch(`${localhostURL}/companies/relations/${id}`, {
    method: "PUT",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
    body: formData,
  });

  if (response.status >= 400) {
    const errorData = (await response.json()) as CreateCompanyError[];

    throw new Error(errorData[0].msg || "Token has expired. Login again!");
  }

  return response.json() as Promise<Company>;
}
