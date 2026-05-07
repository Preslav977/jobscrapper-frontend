type ScrapeMode = "NAVIGATION | DIRECT";

export interface Company {
  id: number;
  name: string;
  logo?: string | null;
  scrapMode: ScrapeMode;
  jobs: Jobs[];
}

export interface Jobs {
  id: number;
  title: string;
  location: string;
  remoteOrHybrid: string;
  datePosted: string;
  description: string;
  anchorHref: string;
  company: Company;
  companyID: number;
}
