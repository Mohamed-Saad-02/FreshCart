import { useQuery } from "@tanstack/react-query";
import { getBrandsColl } from "../../services/brands";
import { useParams } from "react-router-dom";

function useBrandsColl() {
  const { id } = useParams();

  const {
    isLoading,
    data = {},
    error,
  } = useQuery({
    queryKey: [`brandsColl-${id}`],
    queryFn: () => getBrandsColl(id),
  });

  return { isLoading, data, error };
}

export { useBrandsColl };
