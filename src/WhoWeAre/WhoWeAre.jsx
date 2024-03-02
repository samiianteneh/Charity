import React from "react";

import ImageOverlay from "./ImageOverlay";

function WhoWeAre() {
  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-36 justify-center items-center my-5">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="mx-auto md:mx-0 md:w-3/5 order-2 md:order-1">
          {" "}
          {/* Changed order */}
          <ImageOverlay />
        </div>
        <div className="mx-auto md:mx-0 md:w-2/5 order-1 md:order-2">
          {" "}
          {/* Changed order */}
          <div className="text-center md:text-end my-5">
            <div className="inline-block relative">
              <span className="text-green-600 text-3xl font-bold">
                Who we are
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform translate-y-full"></span>
            </div>
          </div>
          <div className="text-center md:text-end my-5">
            <div className="inline-block relative text-justify md:text-end">
              <span className="text-gray-800 text-3xl pr-10">
                Welcome to Noah Giving Hands.
              </span>
              <br />
              <span className="text-gray-800 text-xl ">
                The situation in Ethiopia, marked by internal displacement of
                millions due to violence, conflict, and environmental disasters,
                is deeply concerning. Families forced to flee their homes lack
                access to basic necessities, highlighting the urgent need for
                assistance.
              </span>
              <br />
              <span className="text-gray-800 text-xl">
                Noah Giving Hands plays a crucial role in providing aid to those
                affected. We offer shelter, sustenance, healthcare, and support
                to internally displaced persons (IDPs), aiming to alleviate
                their suffering and pave the way for a better future.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
