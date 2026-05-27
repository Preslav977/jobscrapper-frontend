import type { Company } from "../CompanyInterface/CompanyInterface";

export interface Steps {
  id?: number;
  order: number;
  action: string;
  selector?: string;
  selectOption?: string;
  url?: string;
  company?: Company;
  companyID: number;
}
