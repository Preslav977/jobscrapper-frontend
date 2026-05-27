import type { Company } from "../CompanyInterface/CompanyInterface";

export type FormattedJobsType = {
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  other: string[];
};

export interface Jobs {
  id: number;
  title: string;
  location: string;
  remoteOrHybrid: string;
  datePosted: string;
  description: string;
  anchorHref: string;
  rawHTML: string;
  formattedData: FormattedJobsType;
  company: Company;
  companyID: number;
}
