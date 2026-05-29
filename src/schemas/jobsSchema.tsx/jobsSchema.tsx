import * as z from "zod";

export const jobsSchema = z.object({
  id: z.number(),
  title: z.string(),
  location: z.string().optional(),
  remoteOrHybrid: z.string().optional(),
  datePosted: z.string().optional(),
  // description: z.string().optional(),
  // scrapedText: z.string().optional(),
  rawHTML: z.string().optional(),
  anchorHref: z.string().optional(),
  companyID: z.number(),
});
