import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCashOrder } from "../../services/order";

function useCreateCashOrder() {
  const cartId = useQueryClient().getQueryData(["cart"])?.data._id;

  const { isPending: isChecking, mutate: checkout } = useMutation({
    mutationFn: (data) => createCashOrder(cartId, data),
    onSuccess: (data) => (window.location.href = data.session.url),
  });

  return { isChecking, checkout };
}

export default useCreateCashOrder;
