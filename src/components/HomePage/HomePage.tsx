import { useMemo, useState } from "react";
import { useFetchJobs } from "../../api/useFetchJobs/useFetchJobs";
import type { Jobs } from "../../interfaces/CompanyJobsInterface/CompanyJobsInterface";
import { RenderJobs } from "../RenderJobs/RenderJobs";
import { SearchJobsForm } from "../SearchJobsForm/SearchJobsForm";
import { SelectJobsByCompany } from "../SelectJobsByCompany/SelectJobsByCompany";

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    isPending,
    isError,
    data: allJobs,
    error,
  } = useFetchJobs(searchQuery);

  const [selectedCompany, setSelectedCompany] =
    useState<string>("All companies");

  function handleCompanySelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const companyName = e.currentTarget.value;

    setSelectedCompany(companyName);
  }

  function handleSearchSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;

    setSearchQuery(query);
  }

  const filteredJobs = useMemo(() => {
    if (selectedCompany === "All companies") return allJobs;

    return allJobs.filter(
      (jobs: Jobs) =>
        jobs.company.name.includes(selectedCompany) ||
        jobs.title === searchQuery ||
        jobs.location === searchQuery ||
        jobs.remoteOrHybrid === searchQuery,
    );
  }, [selectedCompany, allJobs, searchQuery]);

  if (isPending) return <p>Loading jobs, please wait...</p>;

  if (isError) return <p>{error?.message}</p>;

  return (
    <>
      <SelectJobsByCompany
        value={selectedCompany}
        onChange={handleCompanySelect}
      />
      <SearchJobsForm onSubmit={handleSearchSubmit} />
      <RenderJobs filteredJobs={filteredJobs} />
    </>
  );
}
