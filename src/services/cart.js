import axios from "axios";
import { BASE_URL, userToken } from "../utils/constants";

export async function getCart() {
  const { data } = await axios.get(`${BASE_URL}/api/v1/cart`, {
    headers: { token: userToken },
  });
  return data;
}

export async function removeCart() {
  const { data } = await axios.delete(`${BASE_URL}/api/v1/cart`, {
    headers: { token: userToken },
  });
  return data;
}

export async function addToCart(productId) {
  const { data } = await axios.post(
    `${BASE_URL}/api/v1/cart`,
    { productId },
    { headers: { token: userToken } }
  );
  return data;
}

export async function removeFromCart(productId) {
  const { data } = await axios.delete(`${BASE_URL}/api/v1/cart/${productId}`, {
    headers: { token: userToken },
  });
  return data;
}

export async function updateQuantityPro(productId, count) {
  const { data } = await axios.put(
    `${BASE_URL}/api/v1/cart/${productId}`,
    { count },
    { headers: { token: userToken } }
  );
  return data;
}
