import { useMutation } from "@tanstack/react-query";
import { UpdateCompany } from "../../api/UpdateCompany/UpdateCompany";

const handleUpdateCompany = ({
  id,
  formData,
}: {
  id: number;
  formData: FormData;
}) => UpdateCompany({ id, formData });

export function useUpdateCompany() {
  return useMutation({
    mutationFn: handleUpdateCompany,

    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
}
