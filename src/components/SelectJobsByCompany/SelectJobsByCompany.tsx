import type { SelectJobsByCompanyInterface } from "../../interfaces/SelectJobsByCompanyInterface/SelectJobsByCompanyInterface";

export function SelectJobsByCompany({
  data,
  onChange,
}: SelectJobsByCompanyInterface) {
  return (
    <>
      <label htmlFor="Companies"></label>
      <select
        onChange={onChange}
        name="companies"
        id="companies"
        defaultValue={"All Companies"}
      >
        <optgroup label="Companies">
          <option value="All Companies" selected>
            All companies
          </option>
          {data.map((companies) => (
            <option key={companies.id} value={companies.company.name}>
              {companies.company.name}
            </option>
          ))}
        </optgroup>
      </select>
    </>
  );
}
