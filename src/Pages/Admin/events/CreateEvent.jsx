import React, { useEffect } from "react";
import closeIcon from "../../../assets/icons/system-solid-29-cross.gif";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, getEvent } from "../../../Store/Event/eventActions.js";

function CreateEvent({ closeModal }) {
  const dispatch = useDispatch();

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     // Prevent multiple submissions
  //     const submitButton = document.getElementById("submitBtn");
  //     submitButton.disabled = true;

  //     const response = await axios.post(
  //       "https://jsonplaceholder.typicode.com/users",
  //       {
  //         name: data.name,
  //         date: data.date,
  //         eventAddress: data.eventAddress,
  //         charityAddress: data.charityAddress,
  //         description: data.description,
  //       }
  //     );

  //     console.log(response.data);
  //     alert("Registration successful!");
  //     reset(); // Reset form fields
  //     submitButton.disabled = false; // Re-enable submit button
  //   } catch (error) {
  //     console.error("Error during registration:", error);
  //     alert("Registration failed. Please try again.");
  //   }
  // };
  const onSubmit = (data) => {
    dispatch(createEvent(data));
    reset();
  };

  return (
    <div className="font- poppins fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg min-w-[75%] md:min-w-[50%] modal-content">
        <div className="flex justify-between items-center mt-4 py-2">
          <h2 className="text-lg font-semibold ">Create Event</h2>
          <img src={closeIcon} onClick={closeModal} className="w-10 h-10" />
        </div>
        <div className="max-h-[90%] overflow-auto text-justify font-light">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[90%] md:max-w-md mx-auto"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Event Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                id="name"
                {...register("name", {
                  required: "Name is required",
                })}
                pattern="^[a-zA-Z\s]+$"
                className="font-light text-sm w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium">
                Date
              </label>
              <input
                type="date"
                id="date"
                {...register("date", {
                  required: "Date is required",
                })}
                min={new Date().toISOString().split("T")[0]} // Set minimum date to today
                className="font-light text-sm w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="eventAddress"
                className="block text-sm font-medium"
              >
                Event Address
              </label>
              <input
                type="text"
                placeholder="Enter event address"
                id="eventAddress"
                {...register("eventAddress", {
                  required: "Event address is required",
                })}
                pattern="^[a-zA-Z0-9\s\,\.\-]+$"
                className="font-light text-sm w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.eventAddress && (
                <p className="text-red-500 text-sm">
                  {errors.eventAddress.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="charityAddress"
                className="block text-sm font-medium"
              >
                Charity Address
              </label>
              <input
                type="text"
                placeholder="Enter charity address"
                id="charityAddress"
                {...register("charityAddress", {
                  required: "Charity address is required",
                })}
                pattern="^[a-zA-Z0-9\s\,\.\-]+$"
                className="font-light text-sm w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.charityAddress && (
                <p className="text-red-500 text-sm">
                  {errors.charityAddress.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register("description", {
                  required: "Description is required",
                })}
                className="font-light text-sm w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
            <button
              id="submitBtn"
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-900"
            >
              Register
            </button>
          </form>
        </div>

        {/* <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Close
        </button> */}
      </div>
    </div>
  );
}

export default CreateEvent;
