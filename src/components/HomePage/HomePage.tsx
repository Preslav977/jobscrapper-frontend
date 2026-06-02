import { Link } from "react-router";
import { useIsUserLoggedIn } from "../../context/isUserLoggedInContext";
import { useJobSearch } from "../../custom hooks/useJobSearch/useJobSearch";
import { ErrorComponent } from "../ErrorComponent/ErrorComponen";
import { RenderJobs } from "../RenderJobs/RenderJobs";
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

  function handleSearchSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;

    setSearchQuery(query);
  }

  if (isPending) return <p>Loading...</p>;

  if (error) return <ErrorComponent error={error} />;

  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePageButtonWrapper}>
        <div className={styles.homePageButtonContainer}>
          <Link className={styles.homePageAnchor} to={""}>
            Explore <span className={styles.homePageAnchorArrowDown}>⌄</span>
          </Link>

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
          <RenderJobs filteredJobs={filteredJobs} />
        </>
      </div>
    </div>
  );
}
