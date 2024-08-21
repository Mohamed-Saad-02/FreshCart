import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/categories";

function useCategories() {
  const {
    isLoading,
    data = {},
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { isLoading, data, error };
}

export default useCategories;
