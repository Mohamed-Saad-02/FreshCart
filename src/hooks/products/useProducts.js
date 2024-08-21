import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products";

function useProducts() {
  const {
    isLoading,
    data = {},
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { isLoading, data, error };
}

export default useProducts;
