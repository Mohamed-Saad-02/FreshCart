import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function getWishlist() {
  const { data } = await axios.get(`${BASE_URL}/api/v1/wishlist`, {
    headers: { token: localStorage.getItem("access_token") },
  });

  return data;
}

export async function addToWishlist(productId) {
  const { data } = await axios.post(
    `${BASE_URL}/api/v1/wishlist`,
    { productId },
    { headers: { token: localStorage.getItem("access_token") } }
  );
  return data;
}

export async function removeFromWishlist(productId) {
  const { data } = await axios.delete(
    `${BASE_URL}/api/v1/wishlist/${productId}`,
    { headers: { token: localStorage.getItem("access_token") } }
  );
  return data;
}
