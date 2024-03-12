import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const submitButton = document.getElementById("submitBtn");
      submitButton.disabled = true;

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        }
      );

      console.log(response.data);
      alert("Message Sent successfully!");
      reset(); // Reset form fields
      submitButton.disabled = false; // Re-enable submit button
    } catch (error) {
      console.error("Error during sending message:", error);
      alert("message failed. Please try again.");
    }
  };

  return (
    <section className=" font-poppins text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
              Photo booth tattooed prism, portland taiyaki hoodie neutra
              typewriter
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-green-500 leading-relaxed">example@email.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <div className="inline-block relative mb-5">
          <span className="text-green-600 text-3xl font-bold ">Contact Us</span>
        </div>

        <p className="leading-relaxed mb-5 text-gray-600 font-light text-sm ">
          "Compassion in Action: Together, We Change Lives."
        </p>
        <div className="relative mb-4">
          <label for="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label for="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          Submit
        </button>
        <p className="text-xs text-gray-500 mt-3">
          "Reach out, join hands, and make a difference. We're here to listen
          and collaborate towards brighter tomorrows. Get in touch today."
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
