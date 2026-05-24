import * as z from "zod";

export const companySchema = z.object({
  name: z.string(),
  logo: z.string(),
  scrapMode: z.string(),
  jobs: z.array(z.object()),
  instructions: z.array(z.object()),
  steps: z.array(z.object()),
});
