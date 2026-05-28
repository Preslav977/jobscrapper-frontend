import { useParams } from "react-router";
import type z from "zod";
import { useFetchCompanyDetails } from "../../custom hooks/useFetchCompanyDetails/useFetchCompanyDetails";
import { useUpdateCompany } from "../../custom hooks/useUpdateCompany/useUpdateCompany";
import { serializeFormData } from "../../helper/serializeFormData/serializeFormData";
import type { companySchema } from "../../schemas/companySchema/companySchema";
import { CreateCompanyForm } from "../CreateCompanyForm/CreateCompanyForm";

export function UpdateCompanyPage() {
  const { id } = useParams();

  const companyId = Number(id);

  const { data: company, isPending, error } = useFetchCompanyDetails(companyId);
  const { mutate: updateCompany } = useUpdateCompany();

  if (isPending) return <p>Loading...</p>;

  const handleUpdate = (data: z.output<typeof companySchema>) => {
    const formData = serializeFormData(data);

    updateCompany({ id: companyId, formData });
  };

  return (
    <CreateCompanyForm
      defaultValues={company!}
      onSubmit={handleUpdate}
      error={error}
    />
  );
}
