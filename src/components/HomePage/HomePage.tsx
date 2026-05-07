import type React from "react";
import { useState } from "react";
import { useFetchJobs } from "../../api/useFetchJobs/useFetchJobs";
import type { Jobs } from "../../interfaces/CompanyJobsType/CompanyJobsType";
import { RenderJobs } from "../RenderJobs/RenderJobs";

export function HomePage() {
  const { data } = useFetchJobs();

  const [selectedCompany, setSelectedCompany] = useState<string>("");

  const [filteredJobs, setFilteredJobs] = useState<Jobs[]>(data);

  function handleCompanySelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const companyName = e.currentTarget.value;

    setSelectedCompany(companyName);

    if (!selectedCompany) return data;

    const filteredJobs = data.find(
      (company) => company.company.name === selectedCompany,
    )!;

    setFilteredJobs(filteredJobs?.company.jobs);
  }

  return (
    <>
      <RenderJobs filteredJobs={filteredJobs} />
    </>
  );
}
