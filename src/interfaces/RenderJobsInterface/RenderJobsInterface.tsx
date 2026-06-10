import type { Jobs } from "../JobsInterface/JobsInterface";

export interface RenderJobsInterface {
  filteredJobs: Jobs[];
  isPending: boolean;
  isError: boolean;
  error: Error | null;
}
