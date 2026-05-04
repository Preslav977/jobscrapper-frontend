import { useQuery } from "@tanstack/react-query";
import type { JobsType } from "../../interfaces/JobsType/JobsType";
import { localhostURL } from "../../utility/localhostURL";

async function fetchJobs(): Promise<JobsType[]> {
  const response = await fetch(`${localhostURL}/companies/get/jobs`, {
    mode: "cors",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
  });

  return response.json() as Promise<JobsType[]>;
}

export const useFetchJobs = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  return { isPending, isError, data, error };
};
