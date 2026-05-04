import { useQuery } from "@tanstack/react-query";
import type { JobsType } from "../../interfaces/JobsType/JobsType";
import { localhostURL } from "../../utility/localhostURL";

async function fetchCompanyOrJobs(url: string): Promise<JobsType[]> {
  const response = await fetch(`${localhostURL}/${url}`, {
    mode: "cors",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
  });

  return response.json() as Promise<JobsType[]>;
}

export const useFetchCompanyOrJobs = (url: string) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["jobs", url],
    queryFn: () => fetchCompanyOrJobs(url),
  });

  return { isPending, isError, data, error };
};
