import { Link } from "react-router";
import type { RenderJobsInterface } from "../../interfaces/RenderJobsInterface/RenderJobsInterface";
import styles from "./RenderJobs.module.css";

export function RenderJobs({ filteredJobs }: RenderJobsInterface) {
  return (
    <>
      {filteredJobs.map((jobs) => (
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
