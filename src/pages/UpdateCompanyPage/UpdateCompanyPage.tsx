import { useParams } from "react-router";
import type z from "zod";
import { CreateCompanyForm } from "../../components/CreateCompanyForm/CreateCompanyForm";
import { useFetchCompanyDetails } from "../../custom hooks/useFetchCompanyDetails/useFetchCompanyDetails";
import { useUpdateCompany } from "../../custom hooks/useUpdateCompany/useUpdateCompany";
import { serializeFormData } from "../../helper/serializeFormData/serializeFormData";
import type { companySchema } from "../../schemas/companySchema/companySchema";

export function UpdateCompanyPage() {
  const { id, companyID } = useParams();

  const {
    data: company,
    isPending,
    error,
  } = useFetchCompanyDetails(Number(id));
  const { mutate: updateCompany } = useUpdateCompany();

  if (isPending) return <p>Loading...</p>;

  const initialFormValues: z.input<typeof companySchema> = {
    id: company!.id,
    name: company!.name,
    URL: company!.URL,
    scrapMode: company!.scrapMode,
    file: undefined,
    logo: company!.logo || null,
    jobs: company!.jobs || [],
    instructions: company!.instructions || [],
    steps: company!.steps || [],
  };

  const handleUpdate = (data: z.output<typeof companySchema>) => {
    const formData = serializeFormData(data);

    updateCompany({ id: Number(id), companyID: Number(companyID), formData });
  };

  return (
    <CreateCompanyForm
      defaultValues={initialFormValues}
      onSubmit={handleUpdate}
      error={error}
    />
  );
}
