import { useMutation } from "@tanstack/react-query";
import { forgetPassword as handleForgetPassword } from "../../services/auth";
import toast from "react-hot-toast";

function useForgetPassword() {
  const { isPending, mutate: forgetPassword } = useMutation({
    mutationFn: handleForgetPassword,
    onSuccess: (data) => toast.success(data.message),
    onError: () => toast.error("This Email not found"),
  });

  return { isPending, forgetPassword };
}

export { useForgetPassword };
