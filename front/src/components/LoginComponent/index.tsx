"use client";
import { UserContext } from "@/context/user";
import { ILoginUser } from "@/interfaces/Interfaces";
import { postSignIn } from "@/lib/server/fetchUsers";
import { validateLoginForm } from "@/utils/validateLoginForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLoading } from "react-icons/ai";
import Swal from "sweetalert2";

const LoginComponent: React.FC = () => {
  const initialState: ILoginUser = {
    email: "",
    password: "",
  };

  const { signIn } = useContext(UserContext);
  const [userData, setUserData] = useState<ILoginUser>(initialState);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);  // Estado de carga
  const [showPassword, setShowPassword] = useState(false);  // Estado para mostrar/ocultar la contraseña
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formErrors = validateLoginForm(userData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true); // Hacer visible el spinner de carga

    try {
      const success = await signIn(userData);
      // Guardar la sesión del usuario
      if (success) {
        Swal.fire({
          icon: "success",
          title: "Login successful",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        router.push("/home"); // Redirige a la página principal
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Card container */}
      <div
    className="   bg-white p-8 rounded-lg shadow-xl max-w-md w-full  "
    style={{
      backgroundImage: "url('')", // Imagen de fondo (opcional)
      backgroundSize: 'cover', // Ajuste para que la imagen cubra todo el contenedor
      backgroundPosition: 'center', // Centrar la imagen de fondo
    }} >
        <h1 className=" text-4xl mb-6 font-bold justify-center items-center text-white    ">Sign in to</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Email field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={userData.email}
              placeholder="email@example.com"
              onChange={handleChange}
              className="w-full px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          {/* Password field */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"} // Mostrar/ocultar la contraseña
              name="password"
              value={userData.password}
              placeholder="******"
              onChange={handleChange}
              className="w-full px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            {/* Icono para mostrar/ocultar la contraseña */}
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-cyan-600 hover:bg-cyan-700 flex justify-center items-center"
          >
            {loading ? (
              <AiOutlineLoading className="animate-spin h-5 w-5 mr-2" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      <Link href={"/auth-signup"}> Dont have an account? Sign up</Link>
      </div>
    </div>
  );
};

export default LoginComponent;