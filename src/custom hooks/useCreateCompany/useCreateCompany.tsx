import { useMutation } from "@tanstack/react-query";
import { createCompany } from "../../api/createCompany/createCompany";

const handleCreateCompany = ({ formData }: { formData: FormData }) =>
  createCompany({ formData });

export function useCreateCompany() {
  return useMutation({
    mutationFn: handleCreateCompany,

    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
}
