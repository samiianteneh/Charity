import React from "react";
import TestimonialSlider from "./testimoialSlider";

function Testimonials() {
  return (
    <div>
      <div className="inline-block relative my-20 mx-16 right-0">
        <span className="text-green-600 text-4xl font-bold">Testimonials</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform translate-y-full"></span>
      </div>
      <TestimonialSlider />
    </div>
  );
}

export default Testimonials;
