import React, { useState, useEffect } from "react";
// import { Testimonials } from "../Constant/testimonial";
import { Testimonials } from "../Constant/testimonial";

function TestimonialSlider() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialsLength = Testimonials.length;

  useEffect(() => {
    const intervalId = setInterval(goToNextTestimonial, 5000);
    return () => clearInterval(intervalId);
  }, [currentTestimonialIndex]);

  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonialsLength - 1 ? 0 : prevIndex + 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonialIndex(index);
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center pb-20">
      <div className="w-full flex items-center justify-center md:w-1/2 mx-6 mb-4 md:mb-0">
        <img
          src={Testimonials[currentTestimonialIndex].image}
          alt={Testimonials[currentTestimonialIndex].name}
          className="w-[80%] h-auto md:h-96 rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 px-5">
        <div className="testimonial-slide">
          <div className="testimonial-content">
            <h2 className="font-bold text-xl mb-2">
              {Testimonials[currentTestimonialIndex].name}
            </h2>
            <p className="text-gray-600 hover:text-green-600 mb-4">
              <a href={`mailto:${Testimonials[currentTestimonialIndex].Email}`}>
                {Testimonials[currentTestimonialIndex].Email}
              </a>
            </p>
            <p>{Testimonials[currentTestimonialIndex].Testimony}</p>
          </div>
        </div>
        <div className="testimonial-dots mt-4">
          {Testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`cursor-pointer mx-1 w-3 h-3 rounded-full inline-block ${
                currentTestimonialIndex === index
                  ? "bg-green-600"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;
