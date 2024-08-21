import axios from "axios";
import { BASE_URL, userToken } from "../utils/constants";

export async function createCashOrder(cartId, shippingAddress) {
  const { data } = await axios.post(
    `${BASE_URL}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,
    { shippingAddress },
    { headers: { token: userToken } }
  );
  return data;
}
