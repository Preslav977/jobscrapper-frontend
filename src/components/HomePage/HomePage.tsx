import { useMemo, useState } from "react";
import { useFetchJobs } from "../../api/useFetchJobs/useFetchJobs";
import type { Jobs } from "../../interfaces/CompanyJobsInterface/CompanyJobsInterface";
import { RenderJobs } from "../RenderJobs/RenderJobs";
import { SelectJobsByCompany } from "../SelectJobsByCompany/SelectJobsByCompany";

export function HomePage() {
  const { isPending, isError, data: allJobs, error } = useFetchJobs();

  const [selectedCompany, setSelectedCompany] =
    useState<string>("All companies");

  function handleCompanySelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const companyName = e.currentTarget.value;

    setSelectedCompany(companyName);
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
      <RenderJobs filteredJobs={filteredJobs} />
    </>
  );
}
