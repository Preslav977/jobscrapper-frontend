import { useDeleteCompany } from "../../custom hooks/useDeleteCompany/useDeleteCompany";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";
import styles from "./DeleteCompanyButton.module.css";

export function DeleteCompanyButton({ id }: { id: number }) {
  const { mutate, error, isError } = useDeleteCompany();

  function deleteCompany() {
    mutate(Number(id));
  }

  if (isError)
    return (
      <div className={styles.errorWrapper}>
        <div className={styles.errorContainer}>
          <img className={styles.errorSVG} src="./error.svg" alt="Error" />
          <ErrorComponent error={error ? error.message : null} />
        </div>
      </div>
    );

  return (
    <button className={styles.deleteCompanyButton} onClick={deleteCompany}>
      Delete Company
    </button>
  );
}
