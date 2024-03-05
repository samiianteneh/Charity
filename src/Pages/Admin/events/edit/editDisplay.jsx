import { Switch } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function EditDisplay({ data }) {
  const [isActive, setIsActive] = useState(data?.[0]?.is_active);
  const navigate = useNavigate();

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        id: data?.[0]?.eventId,
        name: e.name,
        description: e.description,
        address: e.address,
        date: e.date,
        location: e.location,
        isActive: isActive ? 1 : 0,
      })
      .then((Event_edit_response) => {
        console.log(Event_edit_response?.data);
        alert("Event Successfully edited");
        navigate(-1);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-[#43a440]">Edit Page</h2>
      <div className="overflow-x-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full px-4 border-collapse border border-gray-300"
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
              {/* <Switch
                defaultChecked={isActive}
                onChange={toggleIsActive}
                checkedChildren="Active"
                unCheckedChildren="In active"
              /> */}
            </div>
          </div>
          <div className="py-2 flex items-center">
            <label htmlFor="name" className="mr-2 w-[30%]">
              Charity Name :
            </label>
            <input
              className="w-[70%] h-10 pl-2 border-[1px] border-black rounded bg-white dark:text-black"
              type="text"
              placeholder="Type here"
              id="name"
              defaultValue={data?.[0]?.charity}
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                  message: "Please enter a valid name.",
                },
              })}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <div className="py-2 flex items-center">
            <label htmlFor="address" className="mr-2 w-[30%]">
              Charity Address :
            </label>
            <input
              className="w-[70%] h-10 pl-2 border-[1px] border-black rounded bg-white dark:text-black"
              type="text"
              placeholder="Type here"
              id="address"
              defaultValue={data?.[0]?.charityAddress}
              {...register("address", {
                required: "Address is required",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s',-]+$/,
                  message: "Please enter a valid address.",
                },
              })}
            />
          </div>
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}

          <div className="py-2 flex items-center">
            <label htmlFor="date" className="mr-2 w-[30%]">
              Date :
            </label>
            <input
              className="w-[70%] h-10 pl-2 border-[1px] border-black rounded bg-white dark:text-black"
              type="date"
              id="date"
              defaultValue={data?.[0]?.date}
              {...register("date", {
                required: "Date is required",
              })}
            />
          </div>
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}

          <div className="py-2 flex items-center">
            <label htmlFor="location" className="mr-2 w-[30%]">
              Location :
            </label>
            <input
              className="w-[70%] h-10 pl-2 border-[1px] border-black rounded bg-white dark:text-black"
              type="text"
              placeholder="Type here"
              id="location"
              defaultValue={data?.[0]?.location}
              {...register("location", {
                required: "Location is required",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s',-]+$/,
                  message: "Please enter a valid location.",
                },
              })}
            />
          </div>
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}

          <div className="py-2 flex items-center">
            <label htmlFor="description" className="mr-2 w-[30%]">
              Description :
            </label>
            <textarea
              className="w-[70%] h-20 pl-2 border-[1px] border-black rounded bg-white dark:text-black"
              type="text"
              placeholder="Type here"
              id="description"
              defaultValue={data?.[0]?.description}
              {...register("description", {
                required: "Description is required",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s',.-]+$/, // Updated pattern to allow symbols
                  message: "Please enter a valid description.",
                },
              })}
            ></textarea>
          </div>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}

          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditDisplay;
