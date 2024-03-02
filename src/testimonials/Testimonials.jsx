import React from "react";
import TestimonialSlider from "./testimoialSlider";

function Testimonials() {
  return (
    <div>
      <div className="inline-block relative mb-20 mx-16 right-0">
        <div className="text-center md:text-end my-5">
          <div className="inline-block relative">
            <span className="text-green-600 text-3xl font-bold">
              Testimonies{" "}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform translate-y-full"></span>
          </div>
        </div>
      </div>
      <TestimonialSlider />
    </div>
  );
}

export default Testimonials;
