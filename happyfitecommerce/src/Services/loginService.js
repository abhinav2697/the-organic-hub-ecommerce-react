import axios from "axios";

export const loginService = async (userData) => {
  try {
    return await axios.post("/api/auth/login", {
      email: userData.email,
      password: userData.password,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error && error.response) {
        return error.response.data;
      }
    }

    return { message: "Something went wrong!" };
  }
};