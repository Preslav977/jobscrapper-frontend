import type z from "zod";
import { CreateCompanyForm } from "../../components/CreateCompanyForm/CreateCompanyForm";
import { serializeFormData } from "../../helper/serializeFormData/serializeFormData";
import { useCreateCompany } from "../../mutations/useCreateCompany/useCreateCompany";
import type { companySchema } from "../../schemas/companySchema/companySchema";

export function CreateCompanyPage() {
  const { mutate, error, isPending, isError } = useCreateCompany();

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
    <CreateCompanyForm
      defaultValues={emptyValues}
      onSubmit={handleCreate}
      isPending={isPending}
      isError={isError}
      error={error}
    />
  );
}
