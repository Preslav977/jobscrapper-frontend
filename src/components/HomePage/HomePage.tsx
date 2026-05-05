import { useState } from "react";
import { useFetchCompanies } from "../../api/useFetchCompanies/useFetchCompanies";
import type { CompanyJobs } from "../../interfaces/CompanyJobsType/CompanyJobsType";
import { RenderJobs } from "../RenderJobs/RenderJobs";

export function HomePage() {
  const { data } = useFetchCompanies();

  const [filteredJobs, setFilteredJobs] = useState<CompanyJobs>(data!);

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
      <form action="">
        <input type="text" name="" id="" />
        <button type="submit">Search</button>
      </form>
      <label htmlFor="Companies"></label>
      <select
        onChange={filterJobsByCompany}
        name="companies"
        id="companies"
        defaultValue={data?.length}
      >
        <optgroup label="Companies">
          <option
            style={{
              display: "none",
            }}
            value={data?.length}
            selected
          >
            {data?.length}
          </option>
          {data?.map((companies) => (
            <option key={companies.id} value={companies.name}>
              {companies.name}
            </option>
          ))}
        </optgroup>
      </select>

      <RenderJobs />
    </>
  );
}
