import { Link } from "react-router";
import { useFetchJobs } from "../../api/useFetchJobs/useFetchJobs";
import type { RenderJobsType } from "../../interfaces/RenderJobsType/RenderJobsType";
import styles from "./RenderJobs.module.css";

export function RenderJobs({ data }: RenderJobsType) {
  const { isPending, isError, error } = useFetchJobs();

  if (isPending) return <p>Loading jobs, please wait...</p>;

  if (isError) return <p>{error?.message}</p>;

  return (
    <>
      {data?.map((jobs) => (
        <div key={jobs.id}>
          <div className={styles.jobsContainer}>
            <Link to={`/jobs/${jobs.id}`}>
              <img
                className={styles.jobsCompanyLogo}
                src={jobs.company.logo ? jobs.company.logo : ""}
                alt="Company Logo"
              />
              <h2 className={styles.jobsTitle}>{jobs.title}</h2>
              <div className={styles.jobsDescriptionWrapper}>
                <p>{jobs.location}</p>
                <p>{jobs.remoteOrHybrid}</p>
                <p>{jobs.datePosted}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
