import type z from "zod";
import { useCreateCompany } from "../../custom hooks/useCreateCompany/useCreateCompany";
import { serializeFormData } from "../../helper/serializeFormData/serializeFormData";
import type { companySchema } from "../../schemas/companySchema/companySchema";
import { CreateCompanyForm } from "../CreateCompanyForm/CreateCompanyForm";

export function CreateCompanyPage() {
  const { mutate } = useCreateCompany();

  const emptyValues: z.input<typeof companySchema> = {
    name: "",
    URL: "",
    scrapMode: "NAVIGATION",
    file: undefined,
    logo: null,
    jobs: [],
    instructions: [],
    steps: [],
  };

  const handleCreate = (data: z.output<typeof companySchema>) => {
    const formData = serializeFormData(data);

    mutate({ formData });
  };

  return (
    <CreateCompanyForm defaultValues={emptyValues} onSubmit={handleCreate} />
  );
}
