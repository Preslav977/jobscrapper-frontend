import * as z from "zod";
import { instructionsSchema } from "../intrusctionsSchema/InstructionsSchema";
import { jobsSchema } from "../jobsSchema.tsx/jobsSchema";
import { stepsSchema } from "../stepsSchema/stepsSchema";

const MAX_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/png", "image/jpeg"];

export const companySchema = z.object({
  name: z.string().min(1, "Company name should be at least 1 character"),
  URL: z.string(),
  file: z
    .custom<FileList>((val) => val instanceof FileList, "Expected file upload")
    .optional()
    .transform((files) => (files && files.length > 0 ? files[0] : null))
    .refine((file) => {
      if (!file) return true;
      return file.size <= MAX_SIZE;
    }, "File must be less than 5MB")
    .refine((file) => {
      if (!file) return true;
      return ACCEPTED_TYPES.includes(file.type);
    }, "Invalid file type. Only JPEG, PNG are allowed"),
  logo: z.nullish(z.string().optional()),
  scrapMode: z.string(),
  jobs: z.array(jobsSchema),
  instructions: z.array(instructionsSchema),
  steps: z.array(stepsSchema),
});
