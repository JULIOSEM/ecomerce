import { ILoginUser } from "@/interfaces/Interfaces";

export const validateLoginForm = (userData: ILoginUser) => {
  const errors: { email?: string; password?: string } = {};

  // Validación del correo electrónico
  if (!userData.email) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "El correo electrónico no es válido.";
  }

  // Validación de la contraseña
  if (!userData.password) {
    errors.password = "La contraseña es obligatoria.";
  } else if (userData.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres.";
  }

  return errors;
};