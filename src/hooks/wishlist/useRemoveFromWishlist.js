import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { removeFromWishlist } from "../../services/wishlist";

function useRemoveFromWishlist() {
  const queryClient = useQueryClient();

  const { isPending: isRemoving, mutate: removeProduct } = useMutation({
    mutationFn: removeFromWishlist,
    onSuccess: () => queryClient.refetchQueries({ queryKey: ["wishlist"] }),
    onError: (err) => toast.error(err.message),
  });

  return { isRemoving, removeProduct };
}

export { useRemoveFromWishlist };
