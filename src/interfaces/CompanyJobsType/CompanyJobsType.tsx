type ScrapeMode = "NAVIGATION | DIRECT";

export type Company = {
  id: number;
  name: string;
  logo?: string | null;
  scrapMode: ScrapeMode;
  jobs: Jobs[];
};

export type Jobs = {
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
