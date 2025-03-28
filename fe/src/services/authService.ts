import instance from "./instance";

export const registerService = async (name: string, email: string, password: string) => {
  try {
    const { data } = await instance.post(`users/register`, {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    return error;
  }
};