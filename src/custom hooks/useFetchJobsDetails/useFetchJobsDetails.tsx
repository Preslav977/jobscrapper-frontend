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

  if (response.status >= 400) {
    throw new Error(
      `Incorrect URL, check if is spelled correctly, status: ${response.status} || "Token has expired. Login again!"`,
    );
  }

  return response.json() as Promise<Jobs>;
}

export const useFetchJobsDetails = (id: number) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["jobsDetails", id],
    queryFn: () => fetchJobsDetails(id),
  });

  return { isPending, isError, data, error };
};
