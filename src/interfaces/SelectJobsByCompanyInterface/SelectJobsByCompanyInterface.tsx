import type { RenderJobsInterface } from "../RenderJobsInterface/RenderJobsInterface";

export interface SelectJobsByCompanyInterface extends RenderJobsInterface {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
