"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { loginValidationSchema } from "@/utils/validation";
import { ILoginUser } from "@/interfaces/Interfaces";

const MySwal = withReactContent(Swal);

export default function LoginComponent() {
  const router = useRouter();
  const { signIn } = useContext(UserContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: ILoginUser,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Enviando valores a signIn:", values);
    const success = await signIn(values);
    console.log("Resultado de signIn:", success);
    if (success) {
      MySwal.fire({
        title: "Success!",
        text: "Successfully logged in!",
        icon: "success",
        confirmButtonText: "Cool",
      });
      router.push("/home");
    } else {
      MySwal.fire({
        title: "Ups!",
        text: "Incorrect email or password",
        icon: "warning",
      });
    }
    resetForm();
  };

return (
  <div
    className="flex justify-center items-center min-h-screen bg-cover bg-center relative"
    style={{
      backgroundImage: "url('https://ipadizate.com/hero/2021/10/wallpaper-iPhone-13-Pro-sierra-blue.jpg?width=768&aspect_ratio=16:9&format=nowebp')",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
    <div className="w-full max-w-lg bg-opacity-80 bg-blue-900 p-10 text-white border border-blue-600 rounded-2xl shadow-xl relative z-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Welcome back, Sign In!
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-white mb-1">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border border-blue-300 text-black rounded p-2 focus:border-blue-500 focus:ring focus:ring-blue-300"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-white mb-1">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="w-full border border-blue-300 text-black rounded p-2 focus:border-blue-500 focus:ring focus:ring-blue-300"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={!isValid || !dirty}
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-sm text-white rounded py-2 mt-4 shadow-lg"
              >
                START SHOPPING
              </button>
              <p className="text-center mt-4">Don't have an account?</p>
              <p className="text-center text-blue-300 mt-1">
                <Link href="/auth-signup" className="hover:underline">
                  CREATE YOUR PROFILE
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);
}
