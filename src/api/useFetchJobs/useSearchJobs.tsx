import { useQuery } from "@tanstack/react-query";
import type { Jobs } from "../../interfaces/CompanyJobsInterface/CompanyJobsInterface";
import { localhostURL } from "../../utility/localhostURL";

async function searchJobs(query: string): Promise<Jobs[]> {
  const response = await fetch(
    `${localhostURL}/companies/get/jobs/search?query=${query}`,
    {
      mode: "cors",
      headers: {
        Authorization: sessionStorage.getItem("token")!,
      },
    },
  );

  return response.json() as Promise<Jobs[]>;
}

export const useSearchJobs = (query: string) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => searchJobs(query),
    initialData: [],
  });

  return { isPending, isError, data, error };
};
