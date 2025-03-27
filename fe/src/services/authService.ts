import instance from "./instance";
import { isAxiosError } from "axios";

export const registerService = async (name: string, email: string, password: string) => {
  try {
    const { data } = await instance.post(`users/register`, {
      name,
      email,
      password,
    });
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message);
    } else {
      console.log("An unexpected error occurred");
    }
  }
};