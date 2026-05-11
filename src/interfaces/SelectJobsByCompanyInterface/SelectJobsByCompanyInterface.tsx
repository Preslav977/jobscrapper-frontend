import type { SetStateAction } from "react";

export interface SelectJobsByCompanyInterface {
  selectedCompany: string;
  setSelectedCompany: React.Dispatch<SetStateAction<string>>;
}
