import { useContext } from "react";
import { useFetchCompanies } from "../../api/useFetchCompanies/useFetchCompanies";
import { filteredJobsContext } from "../../context/filteredJobsContext";
import { SelectJobsByCompany } from "../SelectJobsByCompany/SelectJobsByCompany";

export function HomePage() {
  const { data } = useFetchCompanies();

  const { filteredJobs, setFilteredJobs } = useContext(filteredJobsContext)!;

  function filterJobsByCompany(e: React.ChangeEvent<HTMLSelectElement>) {
    const event = e.currentTarget.value;

    const filterJobs = data?.find((company) => company.name === event);

    const companyJobs = filterJobs?.jobs;

    setFilteredJobs(companyJobs!);
  }

  return (
    <>
      <h3>JobScraper</h3>
      <p>Discover your future job. All in one place.</p>

      <SelectJobsByCompany
        filteredJobs={filteredJobs}
        onChange={filterJobsByCompany}
      />

      {/* <RenderJobs /> */}
    </>
  );
}
