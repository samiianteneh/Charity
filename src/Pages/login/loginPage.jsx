import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        if (response.data) {
          console.log(response?.data, "@#$#@");
          localStorage.setItem("token", "234567uhbvcfr567ujy6tfjiuyg-okjh");
          localStorage.setItem("name", "Samii");
          localStorage.setItem("role", "admin");
          localStorage.setItem("userID", "1111-1111-1111-1111");
          window.location.href = "/admin";
        }
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[90%] md:max-w-md mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Type your password"
              id="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,}$/,
                  message:
                    "Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be at least 8 characters long",
                },
              })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#43a440] text-white py-2 px-4 rounded-md hover:bg-[#296c27]"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
