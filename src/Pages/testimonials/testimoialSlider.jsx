import React, { useState, useEffect } from "react";
import { Testimonials } from "../../Constant/testimonial";

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
    <div class=" font-poppins container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center ">
        <img
          src={Testimonials[currentTestimonialIndex].image}
          alt={Testimonials[currentTestimonialIndex].name}
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        />
      </div>
      <div class="text-center lg:w-2/3 w-full">
        <div className="testimonial-slide">
          <div className="testimonial-content">
            <div class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {Testimonials[currentTestimonialIndex].name}
            </div>
            <p className="text-green-600 hover:text-green-600 mb-4 font-light">
              <a href={`mailto:${Testimonials[currentTestimonialIndex].Email}`}>
                {Testimonials[currentTestimonialIndex].Email}
              </a>
            </p>
            <p className="font-light mb-8 leading-relaxed ">
              {Testimonials[currentTestimonialIndex].Testimony}
            </p>
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
