import * as z from "zod";
import type { companySchema } from "../../schemas/companySchema/companySchema";

export interface CompanyFormProps {
  defaultValues: z.input<typeof companySchema>;
  onSubmit: (data: z.output<typeof companySchema>) => void;
  isLoading?: boolean;
}
