import { Link } from "react-router";
import { ErrorComponent } from "../../components/ErrorComponent/ErrorComponent";
import { LoadingComponent } from "../../components/LoadingComponent/LoadingComponent";
import type { RenderJobsInterface } from "../../interfaces/RenderJobsInterface/RenderJobsInterface";
import styles from "./RenderJobs.module.css";

export function RenderJobs({
  filteredJobs,
  isPending,
  error,
}: RenderJobsInterface) {
  if (isPending) return <LoadingComponent loading={"Loading..."} />;

  if (error) return <ErrorComponent error={error} />;

  return (
    <div className={styles.jobsWrapper}>
      {filteredJobs.map((jobs) => (
        <div key={jobs.id}>
          <div className={styles.jobsContainer}>
            <Link to={`/jobs/${jobs.id}`}>
              <img
                className={styles.jobsCompanyLogo}
                src={jobs.company.logo ? jobs.company.logo : "Companies logos"}
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
      {filteredJobs.length === 0 && (
        <div className={styles.noJobsContainer}>
          <p className={styles.noJobsFoundPara}>No jobs found</p>
          <p className={styles.noJobsFoundExplainingPara}>
            We couldn't find any jobs that match your search. Try adjusting your
            filters or check back later.
          </p>
        </div>
      )}
    </div>
  );
}
