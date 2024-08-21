import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "../../services/wishlist";

function useWishlist() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });

  return { isLoading, data, error };
}

export { useWishlist };
