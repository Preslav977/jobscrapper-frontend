import { Link } from "react-router";
import { useJobSearch } from "../../api/custom hooks/useJobSearch/useJobSearch";
import { useIsUserLoggedIn } from "../../context/isUserLoggedInContext";
import { useUserDetails } from "../../context/userDetailsContext";
import { RenderJobs } from "../../pages/RenderJobs/RenderJobs";
import { SearchJobsForm } from "../SearchJobsForm/SearchJobsForm";
import { SelectJobsByCompany } from "../SelectJobsByCompany/SelectJobsByCompany";
import styles from "./HomePage.module.css";

export function HomePage() {
  const {
    filteredJobs,
    isPending,
    error,
    selectedCompany,
    setSelectedCompany,
    setSearchQuery,
  } = useJobSearch();

  const { isUserLoggedIn } = useIsUserLoggedIn();

  const { userDetails } = useUserDetails();

  function handleSearchSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;

    setSearchQuery(query);
  }

  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePageButtonWrapper}>
        <div className={styles.homePageButtonContainer}>
          {isUserLoggedIn && userDetails?.role === "ADMIN" ? (
            <Link className={styles.homePageAnchor} to={"/companies"}>
              Companies
            </Link>
          ) : (
            <Link className={styles.homePageAnchor} to={"/"}>
              Explore <span className={styles.homePageAnchorArrowDown}>⌄</span>
            </Link>
          )}

          {!isUserLoggedIn ? (
            <Link className={styles.homePageAnchor} to={"/login"}>
              Log In
            </Link>
          ) : (
            <Link className={styles.homePageAnchor} to={"/dashboard"}>
              Dashboard
            </Link>
          )}
        </div>
      </div>
      <div className={styles.homePageContainer}>
        <h2 className={styles.homePageHeader}>JobScraper</h2>
        <p className={styles.homePagePara}>
          Discover your future job. All in one place.
        </p>
        <SearchJobsForm onSubmit={handleSearchSubmit} />
        <SelectJobsByCompany
          filteredJobs={filteredJobs}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
        <>
          <RenderJobs
            filteredJobs={filteredJobs}
            isPending={isPending}
            error={error}
          />
        </>
      </div>
    </div>
  );
}
