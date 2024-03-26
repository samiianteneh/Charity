import { useEffect, useState } from "react";
import closeIcon from "../../../assets/icons/system-solid-29-cross.gif";
import { useForm } from "react-hook-form";
import { Switch } from "antd";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../Store";

function PostDelete({ closeModal, data }) {
  console.log(data, "datadatapost");
  const dispatch = useDispatch();
  const [image, setFile] = useState(null);
  console.log(image, "imageUrl");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
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
  } = useForm();

  const onSubmit = (e) => {
    e.image = image;
    dispatch(updatePost(data?.id, e));
    setFile(null);
    closeModal();
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
                defaultValue={data?.name}
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

export default PostDelete;
