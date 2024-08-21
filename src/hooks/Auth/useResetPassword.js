import { useMutation } from "@tanstack/react-query";
import { resetPassword as handleResetPassword } from "../../services/auth";
import toast from "react-hot-toast";

function useResetPassword() {
  const { isPending, mutate: resetPassword } = useMutation({
    mutationFn: handleResetPassword,
    onSuccess: () => toast.success("Password Reset Success"),
    onError: () => toast.error("This Email not found"),
  });

  return { isPending, resetPassword };
}

export { useResetPassword };
