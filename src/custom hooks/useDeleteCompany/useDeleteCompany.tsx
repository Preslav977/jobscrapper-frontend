import { useMutation } from "@tanstack/react-query";
import { DeleteCompany } from "../../api/DeleteCompany/DeleteCompany";
import { useNavigate } from "react-router";

const handleDeleteCompany = (id: number) => DeleteCompany({ id });

export function useDeleteCompany() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: handleDeleteCompany,

    onSuccess: () => {
      void navigate("/");
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
}
