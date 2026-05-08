import type { SearchJobsFormInterface } from "../../interfaces/SearchJobsFormInterface/SearchJobsFormInterface";

export function SearchJobsForm({ value, onSubmit }: SearchJobsFormInterface) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void onSubmit(e);
        }}
      >
        <label htmlFor="query"></label>
        <input
          value={value}
          type="text"
          name="query"
          placeholder="Search jobs..."
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
