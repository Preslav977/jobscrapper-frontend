import * as z from "zod";

export const instructionsSchema = z.object({
  id: z.number().optional(),
  extractionInstructions: z.object({
    container: z.object({
      extractType: z.string(),
      selector: z.string().optional(),
      attr: z.string().optional(),
    }),
    title: z.object({
      extractType: z.string(),
      selector: z.string().optional(),
      attr: z.string().optional(),
    }),
    location: z.object({
      extractType: z.string(),
      selector: z.string().optional(),
      attr: z.string().optional(),
    }),
    remoteOrHybrid: z.object({
      extractType: z.string(),
      selector: z.string().optional(),
      attr: z.string().optional(),
    }),
    datePosted: z.object({
      extractType: z.string(),
      selector: z.string().optional(),
      attr: z.string().optional(),
    }),
    description: z.object({
      extractType: z.string(),
      selector: z.string().optional(),
      attr: z.string().optional(),
    }),
    anchorHref: z.object({
      extractType: z.string(),
      selector: z.string().optional(),
      attr: z.string().optional(),
    }),
  }),
  companyID: z.number().optional(),
});
