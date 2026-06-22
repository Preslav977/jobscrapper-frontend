import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: handleUpdateCompany,

    onSuccess: (_, data) => {
      void navigate("/companies");

      void queryClient.invalidateQueries({ queryKey: ["company", data.id] });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
}
