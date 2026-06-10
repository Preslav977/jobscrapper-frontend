import { Link } from "react-router";
import { ErrorComponent } from "../../components/ErrorComponent/ErrorComponent";
import { LoadingComponent } from "../../components/LoadingComponent/LoadingComponent";
import type { RenderJobsInterface } from "../../interfaces/RenderJobsInterface/RenderJobsInterface";
import styles from "./RenderJobs.module.css";

export function RenderJobs({
  filteredJobs,
  isPending,
  isError,
  error,
}: RenderJobsInterface) {
  if (isPending)
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loadingContainer}>
          <img className="loading" src="./loading.svg" alt="Loading" />
          <LoadingComponent loading={"Loading jobs, please wait..."} />
        </div>
      </div>
    );

  if (isError)
    return (
      <div className={styles.errorWrapper}>
        <div className={styles.errorContainer}>
          <img className={styles.errorSVG} src="./error.svg" alt="Error" />
          <ErrorComponent error={error ? error.message : null} />
        </div>
      </div>
    );

  return (
    <>
      <div className={styles.jobsWrapper}>
        {filteredJobs.map((jobs) => (
          <div key={jobs.id}>
            <div className={styles.jobsContainer}>
              <Link to={`/jobs/${jobs.id}`}>
                <div className={styles.jobsCompanyNameAndLogoContainer}>
                  <img
                    className={styles.jobsCompanyLogo}
                    src={
                      jobs.company.logo
                        ? jobs.company.logo
                        : `${jobs.company.name} Logo`
                    }
                    alt={jobs.company.name + "Logo"}
                  />
                  <p className={styles.jobsCompanyName}>{jobs.company.name}</p>
                </div>
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
            <img
              className={styles.noJobsFoundSVG}
              src="./magnifying-glass.svg"
              alt="No jobs has been found"
            />
            <p className={styles.noJobsFoundPara}>No jobs found</p>
            <p className={styles.noJobsFoundExplainingPara}>
              We couldn't find any jobs that match your search. Try adjusting
              your filters or check back later.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
