import type { SearchJobsFormInterface } from "../../interfaces/SearchJobsFormInterface/SearchJobsFormInterface";
import styles from "./SearchJobsForm.module.css";

export function SearchJobsForm({ onSubmit }: SearchJobsFormInterface) {
  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          void onSubmit(e);
        }}
      >
        <label htmlFor="query"></label>
        <div className={styles.formContent}>
          <input
            type="text"
            name="query"
            aria-label="query"
            placeholder="Search jobs..."
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}
