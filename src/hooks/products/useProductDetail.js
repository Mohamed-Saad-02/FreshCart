import { getProductDetail } from "../../services/products";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function useProductDetail() {
  const { id } = useParams();

  const {
    isLoading,
    data = {},
    error,
  } = useQuery({
    queryKey: [`product-${id}`],
    queryFn: () => getProductDetail(id),
  });

  return { isLoading, data, error };
}

export { useProductDetail };
