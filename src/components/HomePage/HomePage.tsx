import { useFetchJobs } from "../../api/useFetchJobs/useFetchJobs";
import { RenderJobs } from "../RenderJobs/RenderJobs";

export function HomePage() {
  const { data } = useFetchJobs();

  return (
    <>
      <RenderJobs data={data} />
    </>
  );
}
