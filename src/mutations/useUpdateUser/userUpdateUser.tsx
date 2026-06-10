import { useMutation } from "@tanstack/react-query";
import { UpdateUser } from "../../api/UpdateUser/UpdateUser";
import { useUserDetails } from "../../context/userDetailsContext";

const handleUpdateUser = ({
  formData,
  id,
}: {
  formData: FormData;
  id: number;
}) => UpdateUser({ formData, id });

export function useUpdateUser() {
  const { setUserDetails } = useUserDetails();

  return useMutation({
    mutationFn: handleUpdateUser,
    onSuccess: (data) => {
      setUserDetails(data);
    },
    onError: (error: Error) => {
      // console.log(error);
    },
  });
}
