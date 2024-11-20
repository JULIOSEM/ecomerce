"use client";

import { IRegisterUser } from '@/interfaces/Interfaces';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation';
import React from 'react';
import withReactContent from 'sweetalert2-react-content';
import { postSignup } from '@/lib/server/fetchUsers';
import { registerValidationSchema } from '@/utils/validation';

const MySwal = withReactContent(Swal);

export default function SignupForm() {
  const router = useRouter();

  const initialValues: IRegisterUser = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };

  const handleSubmit = async (values: IRegisterUser, { resetForm }: { resetForm: () => void }) => {
    const success = await postSignup(values);
    if (success) {
      MySwal.fire({
        title: "Success!",
        text: "Profile created! Enjoy ;)",
        icon: "success",
        confirmButtonText: "Cool",
      });
      router.push("/home");
    } else {
      MySwal.fire({
        title: "Ups!",
        text: "This email is already in use!",
        icon: "error",
      });
    }
    resetForm();
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center relative pt-16 pb-8"
      style={{
        backgroundImage: "url('https://i.ytimg.com/vi/QXG-c94IA6I/maxresdefault.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
      <div className="w-full max-w-lg bg-black bg-opacity-60 p-10 rounded-3xl shadow-2xl text-white relative z-10">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-blue-500 text-gradient">
          Create your profile and start shopping!
        </h1>
  
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border border-gray-700 rounded-lg p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-xs mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="w-full border border-gray-700 rounded-lg p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-xs mt-1"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
                  Address
                </label>
                <Field
                  type="text"
                  name="address"
                  id="address"
                  className="w-full border border-gray-700 rounded-lg p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-600 text-xs mt-1"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-700 rounded-lg p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-xs mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full border border-gray-700 rounded-lg p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-600 text-xs mt-1"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={!isValid || !dirty}
                className="w-full py-3 px-6 mt-6 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-l"
              >
                CREATE MY PROFILE
              </button>
              <p className="text-center mt-6 text-sm text-gray-400">
                Do you already have an account?{' '}
                <Link href="/auth-signin">
                  <span className="text-indigo-400 hover:underline">
                    LOG IN
                  </span>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}  