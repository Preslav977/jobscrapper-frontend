import * as z from "zod";

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
      }),
    }),
  ),
  steps: z.array(
    z.object({
      order: z.number(),
      action: z.string(),
      selector: z.string().optional(),
      selectOption: z.string().optional(),
      url: z.string().optional(),
    }),
  ),
});
