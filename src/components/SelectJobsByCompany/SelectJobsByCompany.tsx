import { useRef, useState } from "react";
import { useFetchJobs } from "../../api/custom hooks/useFetchJobs/useFetchJobs";
import type { SelectJobsByCompanyInterface } from "../../interfaces/SelectJobsByCompanyInterface/SelectJobsByCompanyInterface";
import styles from "./SelectJobsByCompany.module.css";

export function SelectJobsByCompany({
  filteredJobs,
  selectedCompany,
  setSelectedCompany,
}: SelectJobsByCompanyInterface) {
  const { data: allJobs } = useFetchJobs();

  const companyNamesSet = new Set(allJobs.map((job) => job.company.name));

  const companyNamesArray = ["All companies", ...companyNamesSet];

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
    <div className={styles.selectWrapper}>
      <div className={styles.selectContainer}>
        <div
          className={styles.selectTrigger}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedCompany}
          <span>⌄</span>
        </div>

        {isOpen && (
          <div className={styles.dropDownMenu}>
            <div
              onMouseEnter={() => startScrolling(-1)}
              onMouseLeave={stopScrolling}
              className={styles.scrollArrowUp}
            >
              ⌃
            </div>

            <ul ref={listRef} className={styles.optionsList}>
              {companyNamesArray.map((company) => (
                <li
                  key={company}
                  onClick={() => {
                    setSelectedCompany(company);
                    setIsOpen(false);
                  }}
                >
                  {company}
                </li>
              ))}
            </ul>

            <div
              className={styles.scrollArrowDown}
              onMouseEnter={() => startScrolling(1)}
              onMouseLeave={stopScrolling}
            >
              ⌄
            </div>
          </div>
        )}
      </div>
      <div>
        <p className={styles.jobsLengthPara}>
          {filteredJobs.length} <span>jobs</span>
        </p>
      </div>
    </div>
  );
}
