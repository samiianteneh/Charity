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
            <div className="inline-block relative mb-5">
              <span className="text-green-600 text-3xl font-bold ">
                Who we are
              </span>
              {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform translate-y-full"></span> */}
            </div>
          </div>
          <div className="text-center md:text-end my-5">
            <div className="inline-block relative text-justify md:text-justify">
              <span className="text-gray-800 md:text-lg sm:text-xs">
                Thank you for visiting Noah Giving Hands' website. We share your
                concern for the plight of internally displaced persons (IDPs) in
                Ethiopia. The challenges they face due to violence, conflict,
                and environmental disasters are indeed distressing. At Noah
                Giving Hands, we are dedicated to providing aid and support to
                these vulnerable communities.
              </span>
              <br />
              <br />
              <span className="text-gray-800 md:text-lg sm:text-xs">
                Our initiatives focus on addressing the immediate needs of IDPs,
                including shelter, food, water, healthcare, and other essential
                services. We believe in offering comprehensive assistance to
                help alleviate their suffering and restore dignity to their
                lives.
              </span>
              <br />
              <br />
              <span className="text-gray-800 md:text-lg sm:text-xs">
                Through our collective efforts and the generosity of supporters
                like you, we strive to make a positive impact and contribute to
                the well-being of those affected by these crises. Together, we
                can make a difference and bring hope to those in need.
              </span>
              <br />
              <br />
              <span className="text-gray-800 md:text-lg sm:text-xs">
                Please explore our website to learn more about our mission,
                projects, and how you can get involved in supporting our cause.
                Thank you for your interest and compassion towards the people of
                Ethiopia.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
