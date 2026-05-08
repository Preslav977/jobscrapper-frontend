import type { SelectJobsByCompanyInterface } from "../../interfaces/SelectJobsByCompanyInterface/SelectJobsByCompanyInterface";

export function SelectJobsByCompany({
  filteredJobs,
  value,
  onChange,
}: SelectJobsByCompanyInterface) {
  const companyNamesSet = new Set(filteredJobs.map((job) => job.company.name));

  const companyNamesArray = [...companyNamesSet];

  return (
    <>
      <label htmlFor="companies"></label>
      <select
        onChange={onChange}
        value={value}
        name="companies"
        id="companies"
        defaultValue={companyNamesArray.length}
      >
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
