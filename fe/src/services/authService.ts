import axios from "axios";

const mainUrl = "http://localhost:5000/api";

export const registerService = async (name: any, email: any, password: any) => {
  try {
    // const response = await fetch(mainUrl + "/users/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, password }),
    // });
    const { data } = await axios.post("`${mainUrl}1`users/register", {
      name,
      email,
      password,
    });
    console.log(data);

    // if (!response.ok) throw new Error("Đăng ký thất bại!");

    // const data = await response.json();
    // return data;
  } catch (error) {
    console.log(1);
  }
};
