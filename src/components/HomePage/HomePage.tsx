import { RenderJobs } from "../RenderJobs/RenderJobs";

export function HomePage() {
  return (
    <>
      <h3>JobScraper</h3>
      <p>Discover your future job. All in one place.</p>
      <form action="">
        <input type="text" name="" id="" />
        <button type="submit">Search</button>
      </form>
      <select name="" id="">
        <option value=""></option>
      </select>

      <RenderJobs />
    </>
  );
}
