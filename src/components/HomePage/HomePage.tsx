import { useMemo, useState } from "react";
import { useFetchJobs } from "../../api/useFetchJobs/useFetchJobs";
import type { Jobs } from "../../interfaces/CompanyJobsInterface/CompanyJobsInterface";
import { RenderJobs } from "../RenderJobs/RenderJobs";
import { SelectJobsByCompany } from "../SelectJobsByCompany/SelectJobsByCompany";

export function HomePage() {
  const { isPending, isError, data, error } = useFetchJobs();

  const [selectedCompany, setSelectedCompany] =
    useState<string>("All companies");

  // function handleCompanySelect(e: React.ChangeEvent<HTMLSelectElement>) {
  //   const companyName = e.currentTarget.value;

  //   setSelectedCompany(companyName);
  // }

  const filteredJobs = useMemo(() => {
    if (selectedCompany === "All companies") return data;

    const jobs = structuredClone(data);

    return jobs.filter((jobs: Jobs) => jobs.company.name === selectedCompany);
  }, [selectedCompany, data]);

  if (isPending) return <p>Loading jobs, please wait...</p>;

  if (isError) return <p>{error?.message}</p>;

  return (
    <>
      <RenderJobs filteredJobs={filteredJobs} />

      <SelectJobsByCompany
        filteredJobs={filteredJobs}
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
      />
    </>
  );
}
