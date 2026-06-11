import { useParams } from "react-router";
import type z from "zod";
import { useFetchCompanyDetails } from "../../api/custom hooks/useFetchCompanyDetails/useFetchCompanyDetails";
import { CreateCompanyForm } from "../../components/CreateCompanyForm/CreateCompanyForm";
import { ErrorComponent } from "../../components/ErrorComponent/ErrorComponent";
import { LoadingComponent } from "../../components/LoadingComponent/LoadingComponent";
import { serializeFormData } from "../../helper/serializeFormData/serializeFormData";
import { useUpdateCompany } from "../../mutations/useUpdateCompany/useUpdateCompany";
import type { companySchema } from "../../schemas/companySchema/companySchema";
import styles from "./UpdateCompanyPage.module.css";

export function UpdateCompanyPage() {
  const { id, companyID } = useParams();

  const {
    data: company,
    isPending,
    error,
    isError,
  } = useFetchCompanyDetails(Number(id));

  const { mutate: updateCompany } = useUpdateCompany();

  if (isPending)
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loadingContainer}>
          <img className="loading" src="/loading.svg" alt="Loading" />
          <LoadingComponent
            loading={"Loading updating company, please wait..."}
          />
        </div>
      </div>
    );

  if (isError)
    return (
      <div className={styles.errorsWrapper}>
        <div className={styles.errorContainer}>
          <img className={styles.errorSVG} src="./error.svg" alt="Error" />
          <ErrorComponent error={error ? error.message : null} />
        </div>
      </div>
    );

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
      isPending={isPending}
      isError={isError}
      error={error}
    />
  );
}
