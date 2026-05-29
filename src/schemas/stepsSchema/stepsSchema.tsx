import * as z from "zod";

export const stepsSchema = z.object({
  id: z.number().optional(),
  order: z.number(),
  action: z.string(),
  selector: z.string().optional(),
  selectOption: z.string().optional(),
  url: z.string().optional(),
  companyID: z.number().optional(),
});
