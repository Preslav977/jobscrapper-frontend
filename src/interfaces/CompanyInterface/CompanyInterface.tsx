import type { Instructions } from "../InstructionsInterface/InstructionsInterface";
import type { Jobs } from "../JobsInterface/JobsInterface";
import type { Steps } from "../StepsInterface/StepsInterface";

export interface Company {
  id: number;
  name: string;
  URL: string;
  logo?: string | null;
  file: FileList | null;
  scrapMode: string;
  jobs: Jobs[];
  instructions: Instructions[];
  steps: Steps[];
}
