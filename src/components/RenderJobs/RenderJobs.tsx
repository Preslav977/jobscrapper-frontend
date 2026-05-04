import { Link } from "react-router";
import { useFetchJobs } from "../../api/useFetchJobs/useFetchJobs";
import styles from "./RenderJobs.module.css";

export function RenderJobs() {
  const { isPending, isError, data, error } = useFetchJobs();

  if (isPending) return <p>Loading jobs, please wait...</p>;

  if (isError) return <p>{error?.message}</p>;

  return (
    <>
      {data?.map((jobs) => (
        <div className={styles.jobsContainer} key={jobs.id}>
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
      ))}
    </>
  );
}
