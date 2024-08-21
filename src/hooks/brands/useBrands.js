import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../../services/brands";

function useBrands() {
  const {
    isLoading,
    data = {},
    error,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  return { isLoading, data, error };
}

export { useBrands };
