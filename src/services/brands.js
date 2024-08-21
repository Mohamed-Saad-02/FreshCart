import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function getBrands() {
  const { data } = await axios.get(`${BASE_URL}/api/v1/brands`);
  return data;
}

export async function getBrandsColl(id) {
  const { data } = await axios.get(
    `${BASE_URL}/api/v1/products?brand=${id}&fields=title,price,imageCover,description,ratingsAverage`
  );
  return data;
}
