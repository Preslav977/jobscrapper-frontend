import type { RenderJobsInterface } from "../RenderJobsInterface/RenderJobsInterface";

export interface SelectJobsByCompanyInterface extends RenderJobsInterface {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
