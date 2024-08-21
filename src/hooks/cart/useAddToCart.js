import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../services/cart";
import toast from "react-hot-toast";

function useAddToCart() {
  const queryClient = useQueryClient();

  const { isPending: isAdding, mutate: addProduct } = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.refetchQueries({ queryKey: ["cart"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addProduct };
}

export { useAddToCart };
