import type { Company } from "../../interfaces/CompanyJobsInterface/CompanyJobsInterface";
import type { CreateCompanyError } from "../../interfaces/CreateCompanyError/CreateCompanyError";
import { localhostURL } from "../../utility/localhostURL";

export async function CreateCompany({
  formData,
}: {
  formData: FormData;
}): Promise<Company> {
  const response = await fetch(`${localhostURL}/companies/relations`, {
    method: "POST",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
    body: formData,
  });

  if (response.status >= 400) {
    const errorData = (await response.json()) as CreateCompanyError[];

    console.log(errorData);

    throw new Error(errorData[0].msg || "Token has expired. Login again!");
  }

  return response.json() as Promise<Company>;
}
