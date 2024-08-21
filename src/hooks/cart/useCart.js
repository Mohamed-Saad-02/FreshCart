import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/cart";

function useCart() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    retry: true,
    retryDelay: 5000,
  });

  return { isLoading, data, error };
}

export { useCart };
