import { useMemo, useState } from "react";
import { useFetchJobs } from "../../api/useFetchJobs/useFetchJobs";
import type { Jobs } from "../../interfaces/CompanyJobsInterface/CompanyJobsInterface";

export function useJobSearch() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data: allJobs, isPending, error } = useFetchJobs(searchQuery);

  const [selectedCompany, setSelectedCompany] =
    useState<string>("All companies");

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

  return {
    filteredJobs,
    isPending,
    error,
    selectedCompany,
    setSelectedCompany,
    setSearchQuery,
  };
}
