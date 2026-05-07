import type React from "react";
import { useState } from "react";
import { useFetchJobs } from "../../api/useFetchJobs/useFetchJobs";
import type { Jobs } from "../../interfaces/CompanyJobsInterface/CompanyJobsInterface";
import { RenderJobs } from "../RenderJobs/RenderJobs";
import { SelectJobsByCompany } from "../SelectJobsByCompany/SelectJobsByCompany";

export function HomePage() {
  const { isPending, isError, data, error } = useFetchJobs();

  const [selectedCompany, setSelectedCompany] =
    useState<string>("All companies");

  function handleCompanySelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const companyName = e.currentTarget.value;

    setSelectedCompany(companyName);

    // if (!data) return [];

    const filteredJobs = data!.filter(
      (item: Jobs) => item.company.name === companyName,
    );

    return filteredJobs;
  }

  if (isPending) return <p>Loading jobs, please wait...</p>;

  if (isError) return <p>{error?.message}</p>;

  return (
    <>
      <RenderJobs data={data ? data : []} />

      <SelectJobsByCompany
        data={data ? data : []}
        onChange={handleCompanySelect}
      />
    </>
  );
}
