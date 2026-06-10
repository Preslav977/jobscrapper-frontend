import { useQuery } from "@tanstack/react-query";
import type { Company } from "../../interfaces/CompanyInterface/CompanyInterface";
import { localhostURL } from "../../utility/localhostURL";

async function fetchCompanies(): Promise<Company[]> {
  const response = await fetch(`${localhostURL}/companies`, {
    mode: "cors",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
  });

  if (response.status >= 400) {
    throw new Error(
      `Incorrect URL, check if is spelled correctly, status: ${response.status}`,
    );
  }

  return response.json() as Promise<Company[]>;
}

export const useFetchCompanies = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["companies"],
    queryFn: () => fetchCompanies(),
    initialData: [],
  });

  return { isPending, isError, data, error };
};
