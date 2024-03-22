import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../../Store";
import { useForm } from "react-hook-form";
import closeIcon from "../../../assets/icons/system-solid-29-cross.gif";
import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { API_BASE_URL } from "../../../Config/endpoint";

const CreatePost = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);
  const [image, setFile] = useState(null);

  console.log(imageUrl, "imageUrl");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createPost({ ...data, image }));
    // reset();
    setImageUrl(null);
    closeModal();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="font- poppins fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg min-w-[75%] md:min-w-[50%] modal-content">
        <div className="flex justify-between items-center mt-4 py-2">
          <h2 className="text-lg font-semibold ">Create Post</h2>
          <img src={closeIcon} onClick={closeModal} className="w-10 h-10" />
        </div>
        <div className="max-h-[90%] overflow-auto text-justify font-light">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[90%] md:max-w-md mx-auto"
          >
            <div className="mb-4">
              <label htmlFor="post" className="block text-sm font-medium">
                Post
              </label>
              <input
                type="text"
                placeholder="Type here"
                id="name"
                {...register("name", {
                  required: "Post Name is required",
                })}
                pattern="^[a-zA-Z\s]+$"
                className="font-light text-[12px] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            {/* <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium">
                Post Date
              </label>
              <input
                type="date"
                id="date"
                {...register("date", {
                  required: "Date is required",
                })}
                min={new Date().toISOString().split("T")[0]} // Set minimum date to today
                className="font-light text-[12px] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div> */}

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
                className="font-light text-[12px] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="file" className="block text-sm font-medium">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleFileChange}
                className="font-light text-[12px] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Upload Image
              </label>
              <Form.Item label="Profile Picture">
                <Upload beforeUpload={beforeUpload}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </div> */}
            <button
              id="submitBtn"
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-900"
            >
              Add Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
