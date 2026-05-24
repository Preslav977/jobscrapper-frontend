import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { useCreateCompany } from "../../custom hooks/useCreateCompany/useCreateCompany";
import { companySchema } from "../../schemas/companySchema/companySchema";

export function CreateCompany() {
  const { mutate, error } = useCreateCompany();

  const { register, control } = useForm({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      URL: "",
      scrapMode: "",
      steps: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate({
      formData: new FormData(event.target),
    });
  };

  const extractionFields = [
    { key: "container", label: "Container" },
    { key: "title", label: "Title" },
    { key: "location", label: "Location" },
    { key: "remoteOrHybrid", label: "Remote/Hybrid" },
    { key: "datePosted", label: "Date Posted" },
    { key: "description", label: "Job Description" },
    { key: "anchorHref", label: "Anchor Href" },
  ] as const;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          Name
          <input type="text" id="name" {...register("name")} />
        </label>
        <label htmlFor="URL">
          URL
          <input type="text" {...register("URL")} id="URL" />
        </label>
        <label htmlFor="file">
          Logo
          <input type="file" {...register("file")} id="file" />
        </label>
        <label htmlFor="scrapMode">
          ScrapMode
          <input type="text" {...register("scrapMode")} id="scrapMode" />
        </label>
        Instructions
        <>
          {extractionFields.map((field) => (
            <div key={field.key}>
              <label htmlFor={field.key}>{field.label}</label>

              <input
                {...register(
                  `instructions.0.extractInstructions.${field.key}.selector`,
                )}
              ></input>

              <input
                {...register(
                  `instructions.0.extractInstructions.${field.key}.selector`,
                )}
              ></input>

              <select
                {...register(
                  `instructions.0.extractInstructions.${field.key}.extractType`,
                )}
              >
                <option value="text">Text</option>
                <option value="elementAttribute">Attribute</option>
              </select>

              <input
                placeholder="Attribute (e.g., href)"
                {...register(
                  `instructions.0.extractInstructions.${field.key}.attr`,
                )}
              />
            </div>
          ))}
        </>
        {fields.map((field, index) => (
          <div key={field.id}>
            <input
              type="hidden"
              {...register(`steps.${index}.order`)}
              value={index + 1}
            />

            <input type="text" {...register(`steps.${index}.action`)} />

            <input type="text" {...register(`steps.${index}.select`)} />

            <input type="text" {...register(`steps.${index}.selectOption`)} />

            <input type="text" {...register(`steps.${index}.url`)} />

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
        ></button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
