import type { Instructions } from "../CompanyInstructionsInterface/CompanyInstructionsInterface";
import type { Steps } from "../CompanyStepsInterface/CompanyStepsInterface";

export interface Company {
  id?: number;
  name: string;
  URL: string;
  logo?: string | null;
  file: FileList | null;
  scrapMode: string;
  jobs: Jobs[];
  instructions: Instructions[];
  steps: Steps[];
}

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
