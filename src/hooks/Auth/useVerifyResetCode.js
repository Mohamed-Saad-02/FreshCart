import { useMutation } from "@tanstack/react-query";
import { verifyResetCode } from "../../services/auth";
import toast from "react-hot-toast";

function useVerifyResetCode() {
  const { isPending, mutate: resetCode } = useMutation({
    mutationFn: verifyResetCode,
    onError: () => toast.error("Code not valid"),
  });

  return { isPending, resetCode };
}

export { useVerifyResetCode };
