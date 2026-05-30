import { useDeleteCompany } from "../../custom hooks/useDeleteCompany/useDeleteCompany";
import styles from "./DeleteCompanyButton.module.css";

export function DeleteCompanyButton({ id }: { id: number }) {
  const { mutate, error } = useDeleteCompany();

  function deleteCompany() {
    mutate(Number(id));
  }

  return (
    <button className={styles.deleteCompanyButton} onClick={deleteCompany}>
      Delete Company
    </button>
  );
}
