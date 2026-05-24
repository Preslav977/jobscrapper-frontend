import type { Company } from "../../interfaces/CompanyJobsInterface/CompanyJobsInterface";
import { localhostURL } from "../../utility/localhostURL";

export async function createCompany({
  formData,
}: {
  formData: FormData;
}): Promise<Company> {
  const response = await fetch(`${localhostURL}/company/relations`, {
    method: "POST",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
    body: formData,
  });

  if (response.status >= 400) {
    console.log("Error");
  }

  return response.json() as Promise<Company>;
}
