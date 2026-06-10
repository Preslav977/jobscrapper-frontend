import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();

  return useMutation({
    mutationFn: handleUpdateCompany,

    onSuccess: () => {
      void navigate("/companies");
    },
    onError: (error: Error) => {
      // console.log(error);
    },
  });
}
