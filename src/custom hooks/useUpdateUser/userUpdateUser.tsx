import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { UpdateUser } from "../../api/UpdateUser/UpdateUser";
import { userDetailsContext } from "../../context/userDetailsContext";

const handleUpdateUser = ({
  formData,
  id,
}: {
  formData: FormData;
  id: number;
}) => UpdateUser({ formData, id });

export function useUpdateUser() {
  const { setUserDetails } = useContext(userDetailsContext)!;

  return useMutation({
    mutationFn: handleUpdateUser,
    onSuccess: (data) => {
      setUserDetails(data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
}
