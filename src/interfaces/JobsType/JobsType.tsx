export type ScrapMode = "NAVIGATION" | "FETCH";

export type Company = {
  id: number;
  name: string;
  logo?: string | null;
  scrapMode: ScrapMode;
  URL: string;
};

export type JobsType = {
  id: number;
  title: string;
  location: string;
  remoteOrHybrid: string;
  datePosted: string;
  description: string;
  anchorHref: string;
  company: Company;
  companyID: number;
};
