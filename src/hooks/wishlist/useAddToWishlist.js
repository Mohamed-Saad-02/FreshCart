import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addToWishlist } from "../../services/wishlist";

function useAddToWishlist() {
  const queryClient = useQueryClient();

  const { isPending: isAdding, mutate: addProduct } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.refetchQueries({ queryKey: ["wishlist"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addProduct };
}

export { useAddToWishlist };
