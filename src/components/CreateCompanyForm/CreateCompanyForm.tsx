import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import type { CompanyFormProps } from "../../interfaces/CompanyFormProps/CompanyFormProps";
import { companySchema } from "../../schemas/companySchema/companySchema";
import styles from "./CreateCompanyForm.module.css";

export function CreateCompanyForm({
  defaultValues,
  onSubmit,
  isLoading,
}: CompanyFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(companySchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const extractionFields = [
    { id: 0, key: "container", label: "Container" },
    { id: 1, key: "title", label: "Title" },
    { id: 2, key: "location", label: "Location" },
    { id: 3, key: "remoteOrHybrid", label: "Remote/Hybrid" },
    { id: 4, key: "datePosted", label: "Date Posted" },
    { id: 5, key: "description", label: "Job Description" },
    { id: 6, key: "anchorHref", label: "Anchor Href" },
  ] as const;

  return (
    <div className={styles.formWrapper}>
      <form
        encType="multipart/form-data"
        className={styles.formContainer}
        onSubmit={(event) => {
          event.preventDefault();

          void handleSubmit(onSubmit)(event);
        }}
      >
        <fieldset className={styles.formFieldset}>
          <legend className={styles.formLegend}>
            Company (Name, URL, Logo, scrapMode):
          </legend>
          <label className={styles.formLabel} htmlFor="name">
            Name
            <input
              placeholder="Company"
              type="text"
              id="name"
              {...register("name", {
                required: true,
                min: 1,
              })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {/* <span className={styles.formValidationError}>
              {errors.name?.message || error?.message}
            </span> */}
          </label>
          <label className={styles.formLabel} htmlFor="URL">
            URL
            <input
              placeholder="https://www.example.com"
              type="text"
              {...register("URL")}
              id="URL"
            />
          </label>
          <label className={styles.formLabel} htmlFor="file">
            <input type="file" {...register("file")} id="file" />
            <span className={styles.formValidationError}>
              {errors.file?.message}
            </span>
          </label>
          <label className={styles.formLabelNoFullWidth} htmlFor="scrapMode">
            ScrapMode:
            <select {...register("scrapMode")}>
              <option value="DIRECT">Direct</option>
              <option value="NAVIGATION">NAVIGATION</option>
              <option value="FETCH">Fetch</option>
              <option value="JSON">JSON</option>
            </select>
          </label>
        </fieldset>
        <fieldset className={styles.formFieldset}>
          <legend className={styles.formLegend}>
            Scrap Instructions (Choose Class or Attribute):
          </legend>
          {extractionFields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.key} className={styles.formLabel}>
                {field.label}:
                <input
                  type="text"
                  {...register(
                    `instructions.0.extractionInstructions.${field.key}.selector`,
                  )}
                  id={field.key}
                  placeholder="CSS selector .className"
                />
              </label>

              <label
                className={styles.formLabelNoFullWidth}
                htmlFor={field.key}
              >
                <select
                  {...register(
                    `instructions.0.extractionInstructions.${field.key}.extractType`,
                  )}
                >
                  <option value="text">Text</option>
                  <option value="element">Element</option>
                  <option value="elementAttribute">ElementAttribute</option>
                </select>
              </label>

              <label className={styles.formLabel} htmlFor="attribute">
                <input
                  type="text"
                  placeholder="CSS attribute [attribute]"
                  {...register(
                    `instructions.0.extractionInstructions.${field.key}.attr`,
                  )}
                />
              </label>
            </div>
          ))}
        </fieldset>
        <fieldset className={styles.formFieldset}>
          <legend className={styles.formLegend}>
            Scrap Steps (Order, Action, Select, Select Option, URL):
          </legend>
          {fields.map((field, index) => (
            <div key={field.id}>
              <input
                type="hidden"
                {...register(`steps.${index}.order`)}
                value={index + 1}
              />

              <label className={styles.formLabel} htmlFor="action">
                <input
                  placeholder="click, clickEvaluate, clickMore, Fetch"
                  type="text"
                  {...register(`steps.${index}.action`)}
                />
              </label>

              <label className={styles.formLabel} htmlFor="selector">
                <input
                  type="text"
                  placeholder="Select CSS .className"
                  {...register(`steps.${index}.selector`)}
                />
              </label>

              <label htmlFor="selectOption" className={styles.formLabel}>
                <input
                  type="text"
                  placeholder="Select option (Bulgaria)"
                  {...register(`steps.${index}.selectOption`)}
                />
              </label>
              <label className={styles.formLabel} htmlFor="url">
                <input
                  placeholder="Fetch URL (https://www.example.com/careers)"
                  type="text"
                  {...register(`steps.${index}.url`)}
                />
              </label>
              <div className={styles.stepButtons}>
                <button type="button" onClick={() => remove(index)}>
                  Remove Step
                </button>
              </div>
            </div>
          ))}
          <div className={styles.stepButtons}>
            <button
              type="button"
              onClick={() =>
                append({
                  order: fields.length + 1,
                  action: "",
                  selector: "",
                  selectOption: "",
                  url: "",
                })
              }
            >
              Add Step
            </button>
          </div>
        </fieldset>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
