import { ILoginUser, IRegisterUser } from "@/interfaces/Interfaces";

export const postSignup = async (user: IRegisterUser) => {
  try {
    const response = await fetch("http://localhost:5000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      // Lanza un error si el servidor devuelve un código de error
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to register");
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const postSignIn = async (userCredential: ILoginUser) => {
  try {
    const response = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredential),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
