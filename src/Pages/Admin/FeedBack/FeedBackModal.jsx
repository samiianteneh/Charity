import React, { useEffect } from "react";
import closeIcon from "../../../assets/icons/system-solid-29-cross.gif";
import axios from "axios";
import { useForm } from "react-hook-form";

function FeedBackModal({ closeModal, data }) {
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

  const onSubmit = async (data) => {
    try {
      // Prevent multiple submissions
      const submitButton = document.getElementById("submitBtn");
      submitButton.disabled = true;

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          id: data.id,
        }
      );

      console.log(response.data);
      closeModal();

      submitButton.disabled = false; // Re-enable submit button
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="font- poppins fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg min-w-[75%] md:min-w-[50%] modal-content">
        <div className="flex justify-between items-center mt-4 py-2">
          <h2 className="text-lg font-semibold ">FeedBack Detail</h2>
        </div>
        <div className="flex justify-between border border-gray-400 rounded-lg items-center mt-4 py-2 px-4 bg-gray-100">
          <div className="flex flex-col">
            <h2 className="md:text-lg text-3xl font-serif text-gray-800">
              Name: {data?.name}
            </h2>
            <h2 className="md:text-lg text-3xl font-serif text-gray-800">
              Email: {data?.email}
            </h2>
            <hr className="w-full border-gray-400 my-2" />
            <div className="flex flex-col items-start">
              <h2 className="md:text-lg text-3xl font-serif text-gray-800">
                Message:
              </h2>
              <p className=" md:text-lg text-3xl font-normal text-gray-700">
                {data?.message}
              </p>
            </div>
          </div>
        </div>

        <div className="max-h-[90%] pt-10 overflow-auto text-justify font-light">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[90%] md:max-w-md mx-auto"
          >
            <div className="mb-4 hidden">
              <label htmlFor="name" className="block text-sm font-medium">
                Event Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                id="name"
                defaultValue={data?.id}
                className="font-light text-sm w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              id="submitBtn"
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-900"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedBackModal;
