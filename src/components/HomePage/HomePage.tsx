import { useFetchCompanies } from "../../api/useFetchCompanies/useFetchCompanies";
import { RenderJobs } from "../RenderJobs/RenderJobs";

export function HomePage() {
  const { data } = useFetchCompanies();

  return (
    <>
      <h3>JobScraper</h3>
      <p>Discover your future job. All in one place.</p>
      <form action="">
        <input type="text" name="" id="" />
        <button type="submit">Search</button>
      </form>
      <select name="companies" id="companies" defaultValue="All Companies">
        {data?.map((companies) => (
          <option key={companies.id} value={companies.name}>
            {companies.name}
          </option>
        ))}
      </select>

      <RenderJobs />
    </>
  );
}
