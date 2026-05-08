export interface SearchJobsFormInterface {
  value: string;
  setValue: (value: string) => void;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}
