import { useQuery } from "@tanstack/react-query";
import type { Company } from "../../interfaces/CompanyJobsType/CompanyJobsType";
import { localhostURL } from "../../utility/localhostURL";

async function fetchCompanies(): Promise<Company[]> {
  const response = await fetch(`${localhostURL}/companies`, {
    mode: "cors",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
  });

  return response.json() as Promise<Company[]>;
}

export const useFetchCompanies = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["companies"],
    queryFn: () => fetchCompanies(),
  });

  return { isPending, isError, data, error };
};
