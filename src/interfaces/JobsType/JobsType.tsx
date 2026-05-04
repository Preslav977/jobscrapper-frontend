export type ScrapMode = "NAVIGATION" | "FETCH";

export type CompanyType = {
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
  company: CompanyType;
  companyID: number;
};
