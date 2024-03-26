import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { userRegistration } from "../../Store/Users/userActions";
import { useDispatch, useSelector } from "react-redux";
import { country } from "../../Constant/country";
import signIn from "../../assets/signIn.png";
import { getVolunteerType } from "../../Store";
function BeMember() {
  const dispatch = useDispatch();

  const volunteer_type = useSelector((state) => state.settingReducer.settings);
  const role = "volenteer";

  useEffect(() => {
    dispatch(getVolunteerType());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(userRegistration(data, role));
    reset();
  };

  return (
    <section className="text-gray-600 font-poppins relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/6 md:w-1/2 bg-[#f0f0f0] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div className="inline-block relative mb-5">
            <span className="text-green-600 text-3xl font-bold ">
              Be a Voulentary
            </span>
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
                {...register("fullName", {
                  required: "Full name is required",
                  pattern: {
                    value: /^[A-Za-z]+ [A-Za-z]+$/,
                    message:
                      "Please enter your first and last name separated by a space.",
                  },
                })}
                className="font-light text-sm w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
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
                    message:
                      "Please enter a valid phone number with country code.",
                  },
                })}
                className="font-light text-sm w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
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
                className="font-light text-sm w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-medium">
                Country
              </label>
              <select
                id="country"
                {...register("country", { required: "Country is required" })}
                className="w-full px-4 py-3 text-sm font-light rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              >
                <option value="">Select a country</option>
                {country.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="volenteerTypeId"
                className="block text-sm font-medium"
              >
                Volunteer Type
              </label>
              <select
                id="volenteerTypeId"
                {...register("volenteerTypeId", {
                  required: "Volunteer type is required",
                })}
                className="w-full px-4 py-3 text-sm font-light rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              >
                <option value="">Select a volunteer type</option>
                {volunteer_type.map((volenteerTypeId) => (
                  <option key={volenteerTypeId.id} value={volenteerTypeId.id}>
                    {volenteerTypeId.name}
                  </option>
                ))}
              </select>
              {errors.volunteer_type && (
                <p className="text-red-500 text-sm">
                  {errors.volunteer_type.message}
                </p>
              )}
            </div>
            <button
              id="submitBtn"
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-900"
            >
              Register
            </button>
          </form>
        </div>
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <img src={signIn} alt="Be a Member Image" className="w-auto h-auto" />
        </div>
      </div>
    </section>
  );
}

export default BeMember;
