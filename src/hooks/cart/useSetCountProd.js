import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuantityPro } from "../../services/cart";
import toast from "react-hot-toast";

function useSetCountProd() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateProduct } = useMutation({
    mutationFn: (data) => updateQuantityPro(...data),
    onSuccess: (data) => {
      queryClient.setQueryData(["cart"], data);
      toast.success("Success Update");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateProduct };
}

export default useSetCountProd;
