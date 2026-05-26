import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { useCreateCompany } from "../../custom hooks/useCreateCompany/useCreateCompany";
import type { Company } from "../../interfaces/CompanyJobsInterface/CompanyJobsInterface";
import { companySchema } from "../../schemas/companySchema/companySchema";
import styles from "./CreateCompany.module.css";

export function CreateCompany() {
  const { mutate, error } = useCreateCompany();

  const { register, control, handleSubmit } = useForm({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      URL: "",
      logo: null,
      jobs: [],
      steps: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const onSubmitt = (data: Omit<Company, "jobs">) => {
    const formData = new FormData();

    if (data.file) {
      formData.append("file", data.file);
      console.log(data.file);
      console.log(formData);
    }

    const formPayload = {
      name: data.name,
      logo: null,
      URL: data.URL,
      scrapMode: data.scrapMode,
      // instructions: data.instructions,
      // jobs: [],
      // steps: data.steps,
      // companyID: data.id,
    };

    formData.append("companyDetails", JSON.stringify(formPayload));

    // console.log(formData);

    mutate({ formData });
  };

  const onInvalid = (errors: any) => {
    console.error(`Form Validation Failed! Fields causing trouble:`, errors);
  };

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

          void handleSubmit(onSubmitt, onInvalid)(event);

          // console.log("submit");
        }}
      >
        <fieldset>
          <legend>Company (Name, URL, Logo, scrapMode):</legend>
          <label className={styles.formLabel} htmlFor="name">
            Name
            <input
              placeholder="Company"
              type="text"
              id="name"
              {...register("name")}
            />
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
          Logo
          <input type="file" {...register("file")} id="file" />
          <label className={styles.formLabel} htmlFor="scrapMode">
            ScrapMode
            <select {...register("scrapMode")}>
              <option value="DIRECT">Direct</option>
              <option value="NAVIGATION">NAVIGATION</option>
              <option value="FETCH">Fetch</option>
              <option value="JSON">JSON</option>
            </select>
          </label>
        </fieldset>
        <fieldset>
          <legend>Scrap Instructions (Choose Class or Attribute):</legend>
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

              <label className={styles.formLabel} htmlFor={field.key}>
                <select
                  {...register(
                    `instructions.0.extractionInstructions.${field.key}.extractType`,
                  )}
                >
                  <option value="text">Text</option>
                  <option value="elementAttribute">Attribute</option>
                </select>
              </label>

              {/* <label className={styles.formLabel} htmlFor="attribute">
                <input
                  type="text"
                  placeholder="CSS attribute [attribute]"
                  {...register(
                    `instructions.0.extractionInstructions.${field.key}.attr`,
                  )}
                />
              </label> */}
            </div>
          ))}
        </fieldset>
        {/* <fieldset>
          <legend>
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

              <label className={styles.formLabel} htmlFor="select">
                <input
                  type="text"
                  placeholder="Select CSS .className"
                  {...register(`steps.${index}.select`)}
                />
              </label>

              <label htmlFor="Select CSS option" className={styles.formLabel}>
                <input
                  type="text"
                  placeholder="Select option (Bulgaria)"
                  {...register(`steps.${index}.selectOption`)}
                />
              </label>
              <label className={styles.formLabel} htmlFor="URL">
                <input
                  placeholder="Fetch URL (https://www.example.com/careers)"
                  type="text"
                  {...register(`steps.${index}.url`)}
                />
              </label>

              <button type="button" onClick={() => remove(index)}>
                Remove Step
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              append({
                order: fields.length + 1,
                action: "",
                select: "",
                selectOption: "",
                url: "",
                companyID: 0,
              })
            }
          >
            Add Step
          </button>
        </fieldset> */}

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
