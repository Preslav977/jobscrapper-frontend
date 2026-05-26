import * as z from "zod";

const MAX_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/png", "image/jpeg"];

export const companySchema = z.object({
  name: z.string(),
  URL: z.string(),
  file: z
    .any()
    .refine(
      (files) => files instanceof FileList,
      "Expected a file upload container",
    )
    .transform((files) => files[0] as File)
    .refine((file) => file.size <= MAX_SIZE, "File size must be less than 5MB")
    .refine(
      (file) => ACCEPTED_TYPES.includes(file.type),
      "Invalid file type. Only JPEG, PNG, and WebP are allowed",
    ),
  logo: z.nullish(z.string().optional()),
  scrapMode: z.string(),
  jobs: z.array(z.object()),
  instructions: z.array(
    z.object({
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
        // companyID: z.number(),
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
