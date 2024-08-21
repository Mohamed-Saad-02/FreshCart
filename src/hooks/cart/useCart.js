import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/cart";

function useCart() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return { isLoading, data, error };
}

export { useCart };
