import { createContext, type SetStateAction } from "react";
import type { CompanyJobs } from "../interfaces/CompanyJobsType/CompanyJobsType";

type filteredJobsType = {
  filteredJobs: CompanyJobs;
  setFilteredJobs: React.Dispatch<SetStateAction<CompanyJobs>>;
};

export const filteredJobsContext = createContext<filteredJobsType | null>(null);
