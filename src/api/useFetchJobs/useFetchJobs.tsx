import { useQuery } from "@tanstack/react-query";
import type { Jobs } from "../../interfaces/CompanyJobsType/CompanyJobsType";
import { localhostURL } from "../../utility/localhostURL";

async function fetchJobs(): Promise<Jobs[]> {
  const response = await fetch(`${localhostURL}/companies/get/jobs`, {
    mode: "cors",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
  });

  return response.json() as Promise<Jobs[]>;
}

export const useFetchJobs = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => fetchJobs(),
  });

  return { isPending, isError, data, error };
};
