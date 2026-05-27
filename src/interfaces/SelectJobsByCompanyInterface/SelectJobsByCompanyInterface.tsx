import type { SetStateAction } from "react";
import type { Jobs } from "../JobsInterface/JobsInterface";

export interface SelectJobsByCompanyInterface {
  filteredJobs: Jobs[];
  selectedCompany: string;
  setSelectedCompany: React.Dispatch<SetStateAction<string>>;
}
