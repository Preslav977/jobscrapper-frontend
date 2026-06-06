import { Link } from "react-router";
import { useIsUserLoggedIn } from "../../context/isUserLoggedInContext";
import { useUserDetails } from "../../context/userDetailsContext";
import { useFetchCompanies } from "../../custom hooks/useFetchCompanies/useFetchCompanies";
import { DeleteCompanyButton } from "../DeleteCompanyButton/DeleteCompanyButton";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";
import { LoadingComponent } from "../LoadingComponent/LoadingComponent";
import styles from "./RenderCompanies.module.css";

export function RenderCompanies() {
  const { data: companies, isPending, error } = useFetchCompanies();

  const { isUserLoggedIn } = useIsUserLoggedIn();

  const { userDetails } = useUserDetails();

  if (isPending) return <LoadingComponent loading={"Loading..."} />;

  if (error) return <ErrorComponent error={error} />;

  return (
    <div className={styles.companiesWrapper}>
      {companies.map((company) => (
        <div className={styles.companiesContainer} key={company.id}>
          <Link to={`/company/${company.id}`}>
            <img
              className={styles.companiesLogo}
              src={company.logo ? company.logo : `Company ${company.name} Logo`}
              alt={`${company.name} Logo`}
            />
            <h2 className={styles.companiesName}>{company.name}</h2>
          </Link>

          {isUserLoggedIn && userDetails?.role === "ADMIN" ? (
            <div className={styles.companiesButtons}>
              <Link
                className={styles.companiesEditLink}
                to={`/updateCompany/${company.id}/companyID/${company.instructions[0].companyID}`}
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
          <p className={styles.noCompaniesFoundPara}>No company found</p>
        </div>
      )}
    </div>
  );
}
