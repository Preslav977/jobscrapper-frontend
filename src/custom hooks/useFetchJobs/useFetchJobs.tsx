import { useQuery } from "@tanstack/react-query";
import type { Jobs } from "../../interfaces/JobsInterface/JobsInterface";
import { localhostURL } from "../../utility/localhostURL";

async function fetchJobs(query?: string): Promise<Jobs[]> {
  const response = await fetch(
    query
      ? `${localhostURL}/companies/get/jobs/search?query=${query}`
      : `${localhostURL}/companies/get/jobs`,
    {
      mode: "cors",
      headers: {
        Authorization: sessionStorage.getItem("token")!,
      },
    },
  );

  return response.json() as Promise<Jobs[]>;
}

export const useFetchJobs = (query?: string) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["jobs", query],
    queryFn: () => fetchJobs(query),
    initialData: [],
  });

  return { isPending, isError, data, error };
};
