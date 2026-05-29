import * as z from "zod";
import { companySchema } from "../../schemas/companySchema/companySchema";

export function serializeFormData(data: z.output<typeof companySchema>) {
  const formData = new FormData();

  if (data.file) {
    formData.append("file", data.file);
  }

  const formPayload = {
    name: data.name,
    URL: data.URL,
    scrapMode: data.scrapMode,
    jobs: data.jobs,
    instructions: data.instructions,
    steps: data.steps,
  };

  formData.append("companyDetails", JSON.stringify(formPayload));

  console.log(formPayload);

  return formData;
}
