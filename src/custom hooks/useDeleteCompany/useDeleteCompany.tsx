import { useMutation } from "@tanstack/react-query";
import { DeleteCompany } from "../../api/DeleteCompany/DeleteCompany";

const handleDeleteCompany = (id: number) => DeleteCompany({ id });

export function useDeleteCompany() {
  return useMutation({
    mutationFn: handleDeleteCompany,

    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
}
