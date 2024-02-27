import React from "react";

import ImageOverlay from "./ImageOverlay";

function WhoWeAre() {
  return (
    <div className="px-36 justify-center items-center my-5">
      <div className="flex justify-between ">
        <div className=" mx-5 w-3/5">
          <ImageOverlay />
        </div>
        <div className=" mx-5 w-2/5">
          <div className="text-end my-5">
            <div className="inline-block relative">
              <span className="text-green-600 text-3xl font-bold">
                Who we are
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform translate-y-full"></span>
            </div>
          </div>
          <div className="text-end my-5">
            <div className="inline-block relative">
              <span className="text-gray-800 text-xl">
                We’re Non-Profit Charity & NGO Organization
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
