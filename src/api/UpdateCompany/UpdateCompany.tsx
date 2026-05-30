import type { Company } from "../../interfaces/CompanyInterface/CompanyInterface";
import type { GenericArrayErrorInterfaces } from "../../interfaces/GenericErrorInterface/GenericErrorInterface";
import { localhostURL } from "../../utility/localhostURL";

export async function UpdateCompany({
  id,
  companyID,
  formData,
}: {
  id: number;
  companyID: number;
  formData: FormData;
}): Promise<Company> {
  const response = await fetch(
    `${localhostURL}/companies/${id}/relations/${companyID}`,
    {
      method: "PUT",
      headers: {
        Authorization: sessionStorage.getItem("token")!,
      },
      body: formData,
    },
  );

  if (response.status >= 400) {
    const errorData = (await response.json()) as GenericArrayErrorInterfaces[];

    throw new Error(errorData[0].msg || "Token has expired. Login again!");
  }

  return response.json() as Promise<Company>;
}
