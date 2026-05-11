import { useRef, useState } from "react";
import { useFetchJobs } from "../../custom hooks/useFetchJobs/useFetchJobs";
import type { SelectJobsByCompanyInterface } from "../../interfaces/SelectJobsByCompanyInterface/SelectJobsByCompanyInterface";

export function SelectJobsByCompany({
  value,
  onChange,
}: SelectJobsByCompanyInterface) {
  const { data: allJobs } = useFetchJobs();

  const companyNamesSet = new Set(allJobs.map((job) => job.company.name));

  const companyNamesArray = [...companyNamesSet];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const listRef = useRef<HTMLUListElement>(null);

  const scrollInterval = useRef<number>(null);

  const startScrolling = (direction: number) => {
    scrollInterval.current = setInterval(() => {
      if (listRef.current) {
        listRef.current.scrollTop += direction * 5;
      }
    }, 10);
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval.current!);
  };

  return (
    <>
      <label htmlFor="companies"></label>
      <select onChange={onChange} value={value} name="companies" id="companies">
        <option>^</option>
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
