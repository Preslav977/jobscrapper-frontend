import type { SelectJobsByCompanyType } from "../../interfaces/SelectJobsByCompanyType/SelectJobsByCompanyType";

export function SelectJobsByCompany({
  filteredJobs,
  onChange,
}: SelectJobsByCompanyType) {
  console.log(filteredJobs);
  return (
    <>
      <label htmlFor="Companies"></label>
      <select
        onChange={onChange}
        name="companies"
        id="companies"
        defaultValue={filteredJobs.length}
      >
        <optgroup label="Companies">
          <option
            style={{
              display: "none",
            }}
            value={filteredJobs.length}
            selected
          >
            {filteredJobs.length}
          </option>
          {/* {filteredJobs.map((companies) => (
            <option key={companies.id} value={companies}>
              {companies.name}
            </option>
          ))} */}
        </optgroup>
      </select>
    </>
  );
}
