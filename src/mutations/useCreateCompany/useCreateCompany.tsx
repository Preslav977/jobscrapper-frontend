import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { CreateCompany } from "../../api/CreateCompany/CreateCompany";

const handleCreateCompany = ({ formData }: { formData: FormData }) =>
  CreateCompany({ formData });

export function useCreateCompany() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: handleCreateCompany,

    onSuccess: () => {
      void navigate("/");
    },
  });
}
