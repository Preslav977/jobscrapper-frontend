import * as z from "zod";

export const companySchema = z.object({
  name: z.string(),
  URL: z.string(),
  file: z.instanceof(File),
  logo: z.string(),
  scrapMode: z.string(),
  jobs: z.array(z.object()),
  instructions: z.array(
    z.object({
      extractInstructions: z.object({
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
        companyID: z.number(),
      }),
    }),
  ),
  steps: z.array(
    z.object({
      order: z.number(),
      action: z.string(),
      select: z.string().optional(),
      selectOption: z.string().optional(),
      url: z.string().optional(),
      companyID: z.number(),
    }),
  ),
});
