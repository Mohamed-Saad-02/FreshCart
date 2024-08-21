import { useQuery } from "@tanstack/react-query";
import { getCategoriesColl } from "../../services/categories";

function useCategoriesColl(id) {
  const {
    isLoading,
    data = {},
    error,
  } = useQuery({
    queryKey: [`categoriesColl-${id}`],
    queryFn: () => getCategoriesColl(id),
  });

  return { isLoading, data, error };
}

export { useCategoriesColl };
