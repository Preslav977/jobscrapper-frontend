import { useFetchJobs } from "../../api/useFetchJobs/useFetchJobs";

export function RenderJobs() {
  const { isPending, isError, data, error } = useFetchJobs();

  console.log(isPending, isError, data, error);

  return <></>;
}
