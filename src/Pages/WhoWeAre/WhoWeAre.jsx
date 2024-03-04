import React from "react";

import ImageOverlay from "./ImageOverlay";

function WhoWeAre() {
  return (
    <div className="font-poppins font-light px-5 md:px-10 lg:px-20 xl:px-36 justify-center items-center my-5">
      <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
        <div className="mx-auto md:mx-0 md:w-3/5 order-2 md:order-1">
          <ImageOverlay />
        </div>
        <div className="mx-auto md:mx-0 md:w-2/5 order-1 md:order-2">
          <div className="text-center md:text-start my-5">
            <div className="inline-block relative">
              <span className="text-green-600 text-3xl font-bold">
                Who we are
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform translate-y-full"></span>
            </div>
          </div>
          <div className="text-center md:text-end my-5">
            <div className="inline-block relative text-justify md:text-justify">
              <span className="text-gray-800 md:text-lg sm:text-xs">
                Welcome to Noah Giving Hands. The situation in Ethiopia,
                particularly concerning the internal displacement of millions of
                people due to various challenges such as violence, conflict, and
                environmental disasters, is profoundly troubling. It's
                heart-wrenching to witness families compelled to abandon their
                homes in pursuit of safety, often lacking access to fundamental
                necessities.
              </span>
              <br />
              <br />
              <span className="text-gray-800 md:text-lg sm:text-xs">
                Noah Giving Hands assumes a pivotal role in extending aid to
                those impacted by these adversities. Our initiatives encompass
                providing shelter, sustenance, healthcare, and assistance to
                internally displaced persons (IDPs), aiming to significantly
                mitigate their distress and provide avenues for a brighter
                future.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
