import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function getProducts() {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/v1/products?fields=title,price,imageCover,description,ratingsAverage`
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
}

export async function getProductDetail(id) {
  const { data } = await axios.get(`${BASE_URL}/api/v1/products/${id}`);
  return data;
}
