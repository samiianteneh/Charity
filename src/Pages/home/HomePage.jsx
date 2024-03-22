import React from "react";
import ImageSlider from "./ImageSlider";
// import CharityDisplay from "../Events/charityDisplay";

function HomePage() {
  return (
    <div className="py-10 ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* <div className="w-full md:w-full mb-4 md:mb-0"> */}
        <div className="w-full  my-4 md:my-0">
          <ImageSlider />
        </div>
        {/* <div className="w-full md:w-2/5">
          <div className="text-center font-bold mb-4">
            <CharityDisplay />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HomePage;
