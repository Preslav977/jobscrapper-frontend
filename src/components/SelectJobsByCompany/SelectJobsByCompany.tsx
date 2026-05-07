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
      <label htmlFor="Companies"></label>
      <select onChange={onChange} value={value} name="Companies" id="Companies">
        <optgroup label="Companies">
          <option value="All Companies" selected>
            All companies
          </option>
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
