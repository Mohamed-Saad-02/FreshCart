import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function getCategories() {
  const { data } = await axios.get(`${BASE_URL}/api/v1/categories`);
  return data;
}

export async function getCategoriesColl(id) {
  const { data } = await axios.get(
    `${BASE_URL}/api/v1/products?category=${id}&fields=title,price,imageCover,description,ratingsAverage`
  );
  return data;
}
