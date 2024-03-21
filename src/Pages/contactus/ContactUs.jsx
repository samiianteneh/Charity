import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createFeedback } from "../../Store";
import contactUs from "../../assets/contactUs.png";

const ContactUs = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createFeedback(data));
    reset();
  };

  return (
    <section className="text-gray-600 font-poppins relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <img src={contactUs} alt="Contact Us Image" />
        </div>

        <div class="lg:w-2/6 md:w-1/2 bg-[#f0f0f0] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div className="inline-block relative mb-5">
            <span className="text-green-600 text-3xl font-bold ">Feedback</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                id="name"
                {...register("name")}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-sm font-light"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                id="email"
                {...register("email")}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-sm font-light"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message here"
                {...register("message")}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 outline-none text-gray-700  px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-sm font-light"
              ></textarea>
            </div>
            <button
              id="submitBtn"
              type="submit"
              className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-[15px] font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
