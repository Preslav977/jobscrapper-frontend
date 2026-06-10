import { Link } from "react-router";
import { DeleteCompanyButton } from "../../components/DeleteCompanyButton/DeleteCompanyButton";
import { ErrorComponent } from "../../components/ErrorComponent/ErrorComponent";
import { LoadingComponent } from "../../components/LoadingComponent/LoadingComponent";
import { useIsUserLoggedIn } from "../../context/isUserLoggedInContext";
import { useUserDetails } from "../../context/userDetailsContext";
import { useFetchCompanies } from "../../custom hooks/useFetchCompanies/useFetchCompanies";
import styles from "./RenderCompanies.module.css";

export function RenderCompanies() {
  const { data: companies, isPending, error, isError } = useFetchCompanies();

  const { isUserLoggedIn } = useIsUserLoggedIn();

  const { userDetails } = useUserDetails();

  if (isPending)
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loadingContainer}>
          <img className="loading" src="./loading.svg" alt="Loading" />
          <LoadingComponent loading={"Loading companies, please wait..."} />
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
      <div className={styles.jobHomeAnchorWrapper}>
        <div className={styles.jobHomeAnchorContainer}>
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
        </div>
      </div>
      <div className={styles.companiesWrapper}>
        {companies.map((company) => (
          <div className={styles.companiesContainer} key={company.id}>
            <Link to={`/company/${company.id}`}>
              <img
                className={styles.companiesLogo}
                src={
                  company.logo ? company.logo : `Company ${company.name} Logo`
                }
                alt={`${company.name} Logo`}
              />
              <h2 className={styles.companiesName}>{company.name}</h2>
            </Link>

            {isUserLoggedIn && userDetails?.role === "ADMIN" ? (
              <div className={styles.companiesButtons}>
                <Link
                  className={styles.companiesEditLink}
                  to={`/updateCompany/${company.id}/companyID/${company.id}`}
                >
                  Edit Company
                </Link>

                <DeleteCompanyButton id={company.id} />
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
        {companies.length === 0 && (
          <div className={styles.noCompaniesContainer}>
            <img
              className={styles.noCompaniesFoundSVG}
              src="./magnifying-glass.svg"
              alt="No companies has been found"
            />
            <p className={styles.noCompaniesFoundPara}>No companies found</p>
          </div>
        )}
      </div>
    </>
  );
}
