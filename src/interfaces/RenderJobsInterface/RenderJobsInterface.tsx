import type { Jobs } from "../JobsInterface/JobsInterface";

export interface RenderJobsInterface {
  filteredJobs: Jobs[];
  isPending: boolean;
  error: Error | null;
}
