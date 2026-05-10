import { useFetchJobs } from "../../custom hooks/useFetchJobs/useFetchJobs";
import type { SelectJobsByCompanyInterface } from "../../interfaces/SelectJobsByCompanyInterface/SelectJobsByCompanyInterface";

export function SelectJobsByCompany({
  value,
  onChange,
}: SelectJobsByCompanyInterface) {
  const { data: allJobs } = useFetchJobs();

  const companyNamesSet = new Set(allJobs.map((job) => job.company.name));

  const companyNamesArray = [...companyNamesSet];

  return (
    <>
      <label htmlFor="companies"></label>
      <select onChange={onChange} value={value} name="companies" id="companies">
        <optgroup label="companies">
          <option
            style={{
              display: "none",
            }}
            value={companyNamesArray.length}
          >
            {companyNamesArray.length} companies
          </option>
          <option value="All companies">All companies</option>
          {companyNamesArray.map((companies) => (
            <option key={companies} value={companies}>
              {companies}
            </option>
          ))}
        </optgroup>
      </select>
    </>
  );
}
