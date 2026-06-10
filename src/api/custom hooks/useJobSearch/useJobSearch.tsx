import { useMemo, useState } from "react";
import { useFetchJobs } from "../useFetchJobs/useFetchJobs";

export function useJobSearch() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    data: allJobs,
    isPending,
    error,
    isError,
  } = useFetchJobs(searchQuery);

  const [selectedCompany, setSelectedCompany] =
    useState<string>("All companies");

  const filteredJobs = useMemo(() => {
    let jobs = allJobs;

    if (selectedCompany !== "All companies") {
      jobs = jobs.filter((jobs) => jobs.company.name.includes(selectedCompany));
    } else {
      return allJobs;
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();

      jobs = jobs.filter(
        (jobs) =>
          jobs.title.toLowerCase().includes(query) ||
          jobs.location.toLowerCase().includes(query) ||
          jobs.remoteOrHybrid.toLowerCase().includes(query),
      );
    }

    return jobs;
  }, [selectedCompany, allJobs, searchQuery]);

  return {
    filteredJobs,
    isPending,
    error,
    isError,
    selectedCompany,
    setSelectedCompany,
    setSearchQuery,
  };
}
