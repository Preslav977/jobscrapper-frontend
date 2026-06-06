import { Link, useParams } from "react-router";
import { useFetchJobsDetails } from "../../custom hooks/useFetchJobsDetails/useFetchJobsDetails";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";
import { LoadingComponent } from "../LoadingComponent/LoadingComponent";
import styles from "./RenderJobsDetails.module.css";

export function RenderJobsDetails() {
  const { id } = useParams();

  const { isPending, isError, data, error } = useFetchJobsDetails(Number(id));

  if (isPending) return <LoadingComponent loading={"Loading..."} />;

  if (isError) return <ErrorComponent error={error} />;

  return (
    <div className={styles.jobDetailsWrapper}>
      <div className={styles.jobDetailsContainer}>
        <div className={styles.jobDetailsLogoHeaderContainer}>
          <img
            className={styles.jobCompanyLogo}
            src={data?.company.logo ? data.company.logo : ""}
            alt={`${data?.company.name} logo`}
          />
          <h4 className={styles.jobCompanyHeader}>{data?.company.name}</h4>
        </div>

        <div className={styles.jobAnchorHrContainer}>
          <Link className={styles.jobHomeAnchor} to={"/"}>
            {" "}
            <img
              className={styles.jobHomeAnchorImg}
              src="/arrow-left.svg"
              alt="Back to homepage"
            />{" "}
            Back to jobs
          </Link>

          <hr />

          <div className={styles.jobDescription}>
            <h5 className={styles.jobTitleHeader}>{data?.title}</h5>
            <div className={styles.jobDescriptionImgContainer}>
              {data?.location ? (
                <span className={styles.jobDescriptionSpanContainer}>
                  {data.location}
                  <img
                    className={styles.jobHomeAnchorImg}
                    src="/location.svg"
                    alt={data.location}
                  />
                </span>
              ) : (
                ""
              )}

              {data?.remoteOrHybrid ? (
                <span className={styles.jobDescriptionSpanContainer}>
                  {data.remoteOrHybrid}
                  <img
                    className={styles.jobHomeAnchorImg}
                    src="/remote_hybrid.svg"
                    alt={data.remoteOrHybrid}
                  />
                </span>
              ) : (
                ""
              )}

              {data?.datePosted ? (
                <span className={styles.jobDescriptionSpanContainer}>
                  {data.datePosted}
                  <img
                    className={styles.jobHomeAnchorImg}
                    src="/date_posted.svg"
                    alt={data.datePosted}
                  />
                </span>
              ) : (
                ""
              )}
            </div>
            <div className={styles.jobAnchorHrefContainer}>
              <a href={data?.anchorHref}>Visit Job Page</a>
            </div>
            <ul className={styles.jobUlHeader}>
              <span>Responsibilities</span>
              <hr />
              {data?.formattedData.responsibilities.map((res) => (
                <li key={res} className={styles.jobList}>
                  {res.replace("*", "")}
                </li>
              ))}
            </ul>

            <ul className={styles.jobUlHeader}>
              <span>Requirements</span>
              <hr />
              {data?.formattedData.requirements.map((req) => (
                <li key={req} className={styles.jobList}>
                  {req.replace("*", "")}
                </li>
              ))}
            </ul>

            <ul className={styles.jobUlHeader}>
              <span>Benefits</span>
              <hr />
              {data?.formattedData.benefits.map((ben) => (
                <li key={ben} className={styles.jobList}>
                  {ben.replace("*", "")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
