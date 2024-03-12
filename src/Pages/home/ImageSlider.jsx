import React, { useState, useEffect } from "react";
import IMG1 from "../../assets/pic 1.jpg";
import IMG2 from "../../assets/pic 2.jpg";
import IMG3 from "../../assets/pic 3.jpg";
import Donate from "./Donate";

function ImageSlider() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  function handleClick() {
    setIsOpen(true);
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [IMG1, IMG2, IMG3]; // Add more image URLs as needed
  const totalImages = images.length;

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000); // Slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentImageIndex]); // Reset interval on image change

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className=" font-poppins relative image-slider">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="w-full h-auto md:max-h-96"
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white py-4 bg-black bg-opacity-50 px-4 md:px-8">
        <div className="font-extrabold text-4xl md:text-5xl ">
          Building a Brighter Future Together
        </div>
        <div className="max-w-[100%] md:max-w-[100%] text-left hidden md:block py-4 font-light">
          Building An Ethiopia where every man, woman, and child starts to live
          a healthy, fulfilling life of self-reliance and dignity.
        </div>
        <button
          onClick={() => handleClick()}
          className=" flex max-w-[100%] md:max-w-[75%] text-left  md:block border-green-600 border-[2px] rounded-md px-2 items-center justify-center w-[120px] text-green-600 font-medium py-4"
        >
          Donate
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 text-center mt-2 ">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer mx-1 ${
              currentImageIndex === index ? "font-bold" : ""
            }`}
          >
            <span
              className={`text-gray-100 ${
                currentImageIndex === index ? "text-xl" : "text-base"
              }`}
            >
              -
            </span>
          </span>
        ))}
      </div>
      {isOpen && <Donate closeModal={closeModal} />}
    </div>
  );
}

export default ImageSlider;
