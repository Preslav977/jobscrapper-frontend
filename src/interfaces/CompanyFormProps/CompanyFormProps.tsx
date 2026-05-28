import * as z from "zod";
import type { companySchema } from "../../schemas/companySchema/companySchema";
import type { Company } from "../CompanyInterface/CompanyInterface";

export interface CompanyFormProps {
  defaultValues: z.input<typeof companySchema> | Company;
  onSubmit: (data: z.output<typeof companySchema>) => void;
  isLoading?: boolean;
  error: Error | null;
}
