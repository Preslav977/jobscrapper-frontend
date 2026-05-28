import { useQuery } from "@tanstack/react-query";
import type { Company } from "../../interfaces/CompanyInterface/CompanyInterface";
import { localhostURL } from "../../utility/localhostURL";

async function fetchCompanyDetails(id: number): Promise<Company> {
  const response = await fetch(`${localhostURL}/companies/${id}`, {
    mode: "cors",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
  });

  return response.json() as Promise<Company>;
}

export const useFetchCompanyDetails = (id: number) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["id"],
    queryFn: () => fetchCompanyDetails(id),
  });

  return { isPending, isError, data, error };
};
