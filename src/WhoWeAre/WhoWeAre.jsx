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
            <div className="inline-block relative">
              <span className="text-gray-800 text-xl">
                As a non-profit charity and NGO organization, we focus on aiding
                internally displaced persons (IDPs) without political
                affiliations. Our mission addresses the challenges faced by IDPs
                due to conflict, natural disasters, or persecution. Despite the
                substantial numbers of IDPs, they often lack sufficient support
                from governmental sources. Private donors play a crucial role in
                bridging this gap and ensuring these vulnerable populations
                receive necessary aid. We emphasize the importance of private
                contributions to alleviate IDP suffering and foster resilience
                within affected communities.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
