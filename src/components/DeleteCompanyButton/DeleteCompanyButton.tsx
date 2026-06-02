import { useDeleteCompany } from "../../custom hooks/useDeleteCompany/useDeleteCompany";
import { ErrorComponent } from "../ErrorComponent/ErrorComponen";
import styles from "./DeleteCompanyButton.module.css";

export function DeleteCompanyButton({ id }: { id: number }) {
  const { mutate, error } = useDeleteCompany();

  function deleteCompany() {
    mutate(Number(id));
  }

  if (error) return <ErrorComponent error={error} />;

  return (
    <button className={styles.deleteCompanyButton} onClick={deleteCompany}>
      Delete Company
    </button>
  );
}
