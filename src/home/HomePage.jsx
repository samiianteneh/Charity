import React from "react";
import BackGroungIMG from "../assets/pic 1.jpg";
import ImageSlider from "./ImageSlider";
import CharityDisplay from "./charityDisplay";

function HomePage() {
  return (
    <div className="py-10 mx-4">
      {/* <div className="">
        <img src={BackGroungIMG} alt="img" className="w-full max-h-96" />
      </div> */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-3/5 mb-4 md:mb-0">
          <ImageSlider />
        </div>
        <div className="w-full md:w-2/5 md:mx-4">
          <div className="text-center font-bold mb-4">
            <CharityDisplay />
          </div>
          {/* Add your latest charity events content here */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
