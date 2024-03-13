import React, { useEffect, useRef } from "react";
import closeIcon from "../../../assets/icons/system-solid-29-cross.gif";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userRegistration } from "../../../Store";
import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function CreateAdmin({ closeModal }) {
  const dispatch = useDispatch();
  const role = useRef("admin");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(userRegistration(data, role.current));
    closeModal();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".modal-content")) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="font-poppins font-normal fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg min-w-[40%] md:min-w-[30%] modal-content">
        <div className="flex justify-between items-center mt-4 py-2">
          <h2 className="text-lg font-semibold text-gray-500">Add Admin</h2>
          <img src={closeIcon} onClick={closeModal} className="w-10 h-10" />
        </div>
        <div className="max-h-[90%] overflow-auto text-justify font-light">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[90%] md:max-w-md mx-auto"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-[13px] font-medium">
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
                className=" font-light text-[12px] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-[13px] font-medium">
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
                className=" font-light text-[12px] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />

              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-[13px] font-medium">
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
                className=" font-light text-[12px] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-[13px] font-medium">
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
                className=" font-light text-[12px] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Upload Image
              </label>
              <Form>
                <Form.Item label="Profile Picture">
                  <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Form>
            </div>
            <button
              id="submitBtn"
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-900"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
