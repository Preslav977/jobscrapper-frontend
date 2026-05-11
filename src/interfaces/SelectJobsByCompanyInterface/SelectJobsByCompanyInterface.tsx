import type { SetStateAction } from "react";
import type { Jobs } from "../CompanyJobsInterface/CompanyJobsInterface";

export interface SelectJobsByCompanyInterface {
  filteredJobs: Jobs[];
  selectedCompany: string;
  setSelectedCompany: React.Dispatch<SetStateAction<string>>;
}
