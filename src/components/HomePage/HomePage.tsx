import { useMemo, useState } from "react";
import { useFetchJobs } from "../../api/useFetchJobs/useFetchJobs";
import { useSearchJobs } from "../../api/useFetchJobs/useSearchJobs";
import type { Jobs } from "../../interfaces/CompanyJobsInterface/CompanyJobsInterface";
import { RenderJobs } from "../RenderJobs/RenderJobs";
import { SearchJobsForm } from "../SearchJobsForm/SearchJobsForm";
import { SelectJobsByCompany } from "../SelectJobsByCompany/SelectJobsByCompany";

export function HomePage() {
  const { isPending, isError, data: allJobs, error } = useFetchJobs();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data: searchJobs } = useSearchJobs(searchQuery);

  console.log(searchJobs);

  const [selectedCompany, setSelectedCompany] =
    useState<string>("All companies");

  function handleCompanySelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const companyName = e.currentTarget.value;

    setSelectedCompany(companyName);
  }

  function handleSearchSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;

    console.log("Search query:", query);

    setSearchQuery(query);
  }

  const filteredJobs = useMemo(() => {
    if (selectedCompany === "All companies") return allJobs;

    return allJobs.filter((jobs: Jobs) =>
      jobs.company.name.includes(selectedCompany),
    );
  }, [selectedCompany, allJobs]);

  if (isPending) return <p>Loading jobs, please wait...</p>;

  if (isError) return <p>{error?.message}</p>;

  return (
    <>
      <SelectJobsByCompany
        filteredJobs={allJobs}
        value={selectedCompany}
        onChange={handleCompanySelect}
      />
      <SearchJobsForm
        value={searchQuery}
        setValue={setSearchQuery}
        onSubmit={handleSearchSubmit}
      />
      <RenderJobs filteredJobs={filteredJobs} />
    </>
  );
}
