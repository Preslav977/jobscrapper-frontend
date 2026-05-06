import type { CompanyJobs } from "../CompanyJobsType/CompanyJobsType";

export type SelectJobsByCompanyType = {
  filteredJobs: CompanyJobs;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
