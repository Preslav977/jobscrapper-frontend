import { useQuery } from "@tanstack/react-query";
import type { Jobs } from "../../interfaces/JobsInterface/JobsInterface";
import { localhostURL } from "../../utility/localhostURL";

async function fetchJobsDetails(id: number): Promise<Jobs> {
  const response = await fetch(`${localhostURL}/companies/jobs/${id}`, {
    mode: "cors",
    headers: {
      Authorization: sessionStorage.getItem("token")!,
    },
  });

  return response.json() as Promise<Jobs>;
}

export const useFetchJobsDetails = (id: number) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["jobsDetails", id],
    queryFn: () => fetchJobsDetails(id),
  });

  return { isPending, isError, data, error };
};
