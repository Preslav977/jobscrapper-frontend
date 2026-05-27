import type { Company } from "../CompanyInterface/CompanyInterface";

export type extractInstructions = {
  container: { extractType: string; selector?: string; attr?: string };
  title: { extractType: string; selector?: string; attr?: string };
  location: { extractType: string; selector?: string; attr?: string };
  remoteOrHybrid: {
    extractType: string;
    selector?: string;
    attr?: string;
  };
  datePosted: { extractType: string; selector?: string; attr?: string };
  description: { extractType: string; selector?: string; attr?: string };
  anchorHref: { extractType: string; selector?: string; attr?: string };
};

export interface Instructions {
  extractionInstructions: extractInstructions;
  company?: Company;
  companyID?: number;
}
