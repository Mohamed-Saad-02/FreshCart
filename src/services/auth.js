import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function signUp(userData) {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/v1/auth/signup`,
      userData
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
}

export async function signIn(userData) {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/v1/auth/signin`,
      userData
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
}

export async function forgetPassword(userData) {
  const { data } = await axios.post(
    `${BASE_URL}/api/v1/auth/forgotPasswords`,
    userData
  );

  return data;
}

export async function verifyResetCode(userData) {
  const { data } = await axios.post(
    `${BASE_URL}/api/v1/auth/verifyResetCode`,
    userData
  );

  return data;
}

export async function resetPassword(userData) {
  const { data } = await axios.put(
    `${BASE_URL}/api/v1/auth/resetPassword`,
    userData
  );

  return data;
}
