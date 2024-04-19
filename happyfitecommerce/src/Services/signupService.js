import axios from "axios";

export const signupService = async (userData) => {
  try {
    const { firstName, lastName, email, password } = userData;

    const response = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error && error.response) {
        return error.response.data;
      }
    }

    return { message: "Something went wrong!" };
  }
};