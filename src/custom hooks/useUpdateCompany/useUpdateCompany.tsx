import { useMutation } from "@tanstack/react-query";
import { UpdateCompany } from "../../api/UpdateCompany/UpdateCompany";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  return useMutation({
    mutationFn: handleUpdateCompany,

    onSuccess: () => {
      void navigate("/");
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
}
