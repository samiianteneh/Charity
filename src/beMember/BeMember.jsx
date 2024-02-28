import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function BeMember() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Prevent multiple submissions
      const submitButton = document.getElementById("submitBtn");
      submitButton.disabled = true;

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
        }
      );

      console.log(response.data);
      alert("Registration successful!");
      reset(); // Reset form fields
      submitButton.disabled = false; // Re-enable submit button
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="text-center md:text-end my-5">
        <div className="inline-block relative">
          <span className="text-green-600 text-3xl font-bold">
            Registration Form
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform translate-y-full"></span>
        </div>
        <div className="text-start my-5 px-5 md:px-36 ">
          <div className="inline-block relative">
            <span className="text-gray-800 text-xl"> </span>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[90%] md:max-w-md mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="name"
            {...register("name", {
              required: "Full name is required",
              pattern: {
                value: /^[A-Za-z]+ [A-Za-z]+$/,
                message:
                  "Please enter your first and last name separated by a space.",
              },
            })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Type your phone number"
            id="phone"
            {...register("phone", {
              required: "Phone Number is required",
              pattern: {
                value: /^[+]?[0-9]{1,4}[-\s.]?[0-9]{1,12}$/,
                message: "Please enter a valid phone number with country code.",
              },
            })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />

          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
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
        <button
          id="submitBtn"
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default BeMember;
