import { useMutation } from "@tanstack/react-query";
import { UpdateCompany } from "../../api/UpdateCompany/UpdateCompany";

const handleUpdateCompany = ({
  id,
  companyID,
  formData,
}: {
  id: number;
  companyID: number;
  formData: FormData;
}) => UpdateCompany({ id, companyID, formData });

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
