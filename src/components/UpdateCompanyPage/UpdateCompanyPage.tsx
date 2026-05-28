import { useParams } from "react-router";
import type z from "zod";
import { useFetchCompanyDetails } from "../../custom hooks/useFetchCompanyDetails/useFetchCompanyDetails";
import { useUpdateCompany } from "../../custom hooks/useUpdateCompany/useUpdateCompany";
import { serializeFormData } from "../../helper/serializeFormData/serializeFormData";
import type { companySchema } from "../../schemas/companySchema/companySchema";
import { CreateCompanyForm } from "../CreateCompanyForm/CreateCompanyForm";

export function UpdateCompanyPage() {
  const { id, companyID } = useParams();

  const Id = Number(id);

  const companyId = Number(companyID);

  const { data: company, isPending, error } = useFetchCompanyDetails(Id);
  const { mutate: updateCompany } = useUpdateCompany();

  if (isPending) return <p>Loading...</p>;

  const initialFormValues: z.input<typeof companySchema> = {
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

    console.log(formData);

    updateCompany({ id: Id, companyID: companyId, formData });
  };

  return (
    <CreateCompanyForm
      defaultValues={initialFormValues}
      onSubmit={handleUpdate}
      error={error}
    />
  );
}
