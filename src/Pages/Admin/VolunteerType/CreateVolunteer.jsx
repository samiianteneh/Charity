import React, { useEffect, useRef } from "react";
import closeIcon from "../../../assets/icons/system-solid-29-cross.gif";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createVolunteerType } from "../../../Store";

const CreateVolunteer = ({ closeModal }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data, "datadatadata");
    dispatch(createVolunteerType(data));
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
          <h2 className="text-lg font-semibold text-gray-500">
            Add Volunteer Type
          </h2>
          <img src={closeIcon} onClick={closeModal} className="w-10 h-10" />
        </div>
        <div className="max-h-[90%] overflow-auto text-justify font-light">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[90%] md:max-w-md mx-auto"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-[11px] font-medium">
                Volunteer Type
              </label>
              <input
                type="text"
                placeholder="Type here"
                id="name"
                {...register("name", {
                  required: "Volunteer type is required",
                })}
                className=" font-light text-[12px] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-[11px] font-medium">
                Description
              </label>
              <textarea
                type="text"
                placeholder="Type here"
                id="description"
                {...register("description")}
                className=" font-light text-[12px] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
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
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateVolunteer;
