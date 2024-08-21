import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../../services/cart";
import toast from "react-hot-toast";

function useRemoveProductCart() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteProduct } = useMutation({
    mutationFn: removeFromCart,

    onSuccess: (data) => {
      queryClient.setQueryData(["cart"], data);
      toast.success("Success Delete");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProduct };
}

export default useRemoveProductCart;
