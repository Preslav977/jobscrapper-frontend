import type { Company } from "../CompanyJobsInterface/CompanyJobsInterface";

export interface Steps {
  id: number;
  order: number;
  action: string;
  selector?: string;
  selectOption?: string;
  url?: string;
  company: Company;
  companyID: number;
}
