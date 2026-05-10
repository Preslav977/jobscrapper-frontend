import { useJobSearch } from "../../custom hooks/useJobSearch/useJobSearch";
import { RenderJobs } from "../RenderJobs/RenderJobs";
import { SearchJobsForm } from "../SearchJobsForm/SearchJobsForm";
import { SelectJobsByCompany } from "../SelectJobsByCompany/SelectJobsByCompany";

export function HomePage() {
  const {
    filteredJobs,
    isPending,
    error,
    selectedCompany,
    setSelectedCompany,
    setSearchQuery,
  } = useJobSearch();

  function handleCompanySelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const companyName = e.currentTarget.value;

    setSelectedCompany(companyName);
  }

  function handleSearchSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;

    setSearchQuery(query);
  }

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

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
