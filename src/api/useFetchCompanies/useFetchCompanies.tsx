import { useQuery } from "@tanstack/react-query";
import type { CompanyType } from "../../interfaces/JobsType/JobsType";
import { localhostURL } from "../../utility/localhostURL";

async function fetchCompanies(): Promise<CompanyType[]> {
  const response = await fetch(`${localhostURL}/companies`, {
    mode: "cors",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
  });

  return response.json() as Promise<CompanyType[]>;
}

export const useFetchCompanies = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["companies"],
    queryFn: () => fetchCompanies(),
  });

  return { isPending, isError, data, error };
};
