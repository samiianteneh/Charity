import React, { useEffect } from "react";
import closeIcon from "../../assets/icons/system-solid-29-cross.gif";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_BASE_URL } from "../../config/endpoint";

function Donate({ closeModal }) {
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
    axios
      .post(`${API_BASE_URL}/payment/process`, {
        donation_ammount: e.donation_ammount,
      })
      .then((response) => {
        console.log(response);
        if (response?.data?.success === true) {
          // alert(response?.data?.clientSecret?.session?.url);
          window.location.href = response?.data?.clientSecret?.session?.url;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="font-poppins fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-[75%] min-w-[25%] modal-content">
        <div className="flex justify-between items-center mt-4 py-2">
          <h2 className="text-lg font-semibold ">Donation</h2>
          <img src={closeIcon} onClick={closeModal} className="w-10 h-10" />
        </div>
        <div className="max-h-80  overflow-auto text-justify font-light">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full px-4 border-collapse border border-gray-300"
          >
            <div className="py-2 flex items-center">
              <label htmlFor="donation_ammount" className="mr-2 w-[30%]">
                amount :
              </label>
              <input
                className="w-[70%] h-10 pl-2 border-[1px] border-black rounded bg-white dark:text-black"
                type="text"
                placeholder="Type here"
                id="donation_ammount"
                {...register("donation_ammount", {
                  required:
                    "Please enter the amount of amount before submitting",
                  pattern: {
                    value: /^[0-9]+$/,
                    message:
                      "Please enter a valid amount of amount (only digits)..",
                  },
                })}
              />
            </div>
            {errors.donation_ammount && (
              <p className="text-red-500 text-sm">
                {errors.donation_ammount.message}
              </p>
            )}
            <div className=" flex justify-between">
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Close
              </button>

              <button
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className="flex justify-center mt-4"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donate;
