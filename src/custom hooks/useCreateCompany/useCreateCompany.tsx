import { useMutation } from "@tanstack/react-query";
import { CreateCompany } from "../../api/CreateCompany/CreateCompany";

const handleCreateCompany = ({ formData }: { formData: FormData }) =>
  CreateCompany({ formData });

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
