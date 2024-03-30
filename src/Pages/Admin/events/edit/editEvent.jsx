import React, { useEffect, useState } from "react";
import closeIcon from "../../../../assets/icons/system-solid-29-cross.gif";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Switch } from "antd";
import { useDispatch } from "react-redux";
import { updateEvent } from "../../../../Store";

function EventEdit({ closeModal, data }) {
  // console.log(data, "datadata");
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(data?.isActive);
  // const [image, setFile] = useState(null);
  // console.log(image, "imageUrl");

  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   setFile(selectedFile);
  // };
  const toggleIsActive = () => {
    setIsActive(!isActive);
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (e) => {
    e.isActive = isActive ? 1 : 0;
    dispatch(updateEvent(data?.id, e));
    closeModal();
  };

  return (
    <div className="font- poppins fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg min-w-[75%] md:min-w-[50%] modal-content">
        <div className="flex justify-between items-center mt-4 py-2">
          <h2 className="text-lg font-semibold ">Update Event</h2>
          <img src={closeIcon} onClick={closeModal} className="w-10 h-10" />
        </div>
        <div className="max-h-[90%] overflow-auto text-justify font-light">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[90%] md:max-w-md mx-auto"
          >
            <div className="py-2 flex items-center">
              <label htmlFor="is_active" className="mr-2 w-[30%]">
                Active :
              </label>
              <div className="">
                <Switch
                  className="bg-slate-500"
                  defaultChecked={isActive}
                  onChange={toggleIsActive}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Event Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                id="name"
                defaultValue={data?.name}
                {...register("name", {
                  required: "Name is required",
                })}
                // pattern="^[a-zA-Z\s]+$"
                className="font-light text-sm w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium">
                Event Date
              </label>
              <input
                type="date"
                id="date"
                defaultValue={data?.date ? data.date.slice(0, 10) : ""}
                {...register("date", {
                  required: "Date is required",
                })}
                // min={new Date().toISOString().split("T")[0]} // Set minimum date to today
                className="font-light text-sm w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />

              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="event_time" className="block text-sm font-medium">
                Event Time
              </label>
              <input
                type="time"
                id="event_time"
                defaultValue={data.event_time}
                {...register("event_time", {
                  required: "Time is required",
                })}
                className="font-light text-sm w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />

              {errors.event_time && (
                <p className="text-red-500 text-sm">
                  {errors.event_time.message}
                </p>
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
                defaultValue={data?.charityAddress}
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
                htmlFor="event_price"
                className="block text-sm font-medium"
              >
                Ticket Price
              </label>
              <input
                type="number"
                placeholder="Enter ticket price"
                id="event_price"
                defaultValue={data?.event_price}
                {...register("event_price", {
                  required: "Ticket Price is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a valid ticket price (numbers only)",
                  },
                })}
                min="0" // Optional: specify minimum value if necessary
                className="font-light text-sm w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.event_price && (
                <p className="text-red-500 text-sm">
                  {errors.event_price.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="charityAddress"
                className="block text-sm font-medium"
              >
                Aid Address
              </label>
              <input
                type="text"
                placeholder="Enter Aid address"
                id="charityAddress"
                defaultValue={data?.charityAddress}
                {...register("charityAddress", {
                  required: "Aid address is required",
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
                defaultValue={data?.description}
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
            {/* <div className="mb-4">
              <label htmlFor="file" className="block text-sm font-medium">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleFileChange}
                className="font-light text-[12px] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div> */}
            <button
              id="submitBtn"
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-900"
            >
              Update
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

export default EventEdit;
