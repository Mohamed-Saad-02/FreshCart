import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { removeCart as deleteCart } from "../../services/cart";

function useRemoveCart() {
  const queryClient = useQueryClient();

  const { isPending: isRemoving, mutate: removeCart } = useMutation({
    mutationFn: deleteCart,
    onSuccess: (data) => {
      queryClient.setQueryData(["cart"], data);
      toast.success("Success Removed");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isRemoving, removeCart };
}

export default useRemoveCart;
