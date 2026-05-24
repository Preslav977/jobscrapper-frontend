import type { Instructions } from "../CompanyInstructionsInterface/CompanyInstructionsInterface";
import type { Steps } from "../CompanyStepsInterface/CompanyStepsInterface";

type ScrapeMode = "NAVIGATION | DIRECT";

export interface Company {
  id: number;
  name: string;
  logo?: string | null;
  scrapMode: ScrapeMode;
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
