import { ILoginUser, IRegisterUser } from "@/interfaces/Interfaces";


export const postSignup = async (user: IRegisterUser) => {
   
   const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });
   const data = await response.json();
   return data;

}

export const postSignIn = async (userCredential: ILoginUser) => {
  try {
    console.log("Enviando solicitud de inicio de sesión", userCredential);
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
    console.log(result)
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};