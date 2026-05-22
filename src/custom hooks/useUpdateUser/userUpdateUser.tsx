import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { updateUser } from "../../api/updateUser/updateUser";
import { userDetailsContext } from "../../context/userDetailsContext";

const handleUpdateUser = ({
  formData,
  id,
}: {
  formData: FormData;
  id: number;
}) => updateUser({ formData, id });

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
