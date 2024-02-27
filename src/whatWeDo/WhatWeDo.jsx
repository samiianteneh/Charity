import React from "react";
import Support from "../assets/ElderlyEt-aoA5sfie.jpg";
import SmallBusiness from "../assets/donate to support small buisness.jpeg";
import IDPs from "../assets/DebreBirhanIDPs1-ZwFfOvEI.jpg";

function WhatWeDo() {
  return (
    <div className="px-36 justify-center items-center my-16">
      <div className="text-start mt-5">
        <div className="inline-block relative">
          <span className="text-green-600 text-4xl font-bold">
            Our Campaign
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform translate-y-full"></span>
        </div>
      </div>
      <div className="text-start my-5">
        <div className="inline-block relative">
          <span className="text-gray-800 text-xl">
            Giving help to those who need it
          </span>
        </div>
      </div>
      <div className="flex justify-between my-10 ">
        <div className="items-center justify-center mx-5 max-w-1/3">
          <div className="bg-gray-300 max-w-72">
            <img src={Support} alt="Support A Family" className="h-40 w-full" />
            <span className="text-center">Support A Family</span>
          </div>
          <div className="my-5">
            We work with local non-profits and youth associations to ensure
            elderly people get a proper meal, health and basic necessities
          </div>
          <div>Read More ....</div>
        </div>
        <div className="items-center justify-center mx-5 max-w-1/3">
          <div className="bg-gray-300 max-w-72">
            <img
              src={SmallBusiness}
              alt="Support A Family for Small Business"
              className="h-40 w-full"
            />
            <span className="text-center">
              Donate to Sponsor Small Business
            </span>
          </div>
          <div className="my-5">
            {" "}
            NGH supports families that are impacted by conflicts and inflation
            to elvate the burdon and help them to begin a better life
          </div>
          <div>Read More ....</div>
        </div>
        <div className="items-center justify-center mx-5 max-w-1/3">
          <div className="bg-gray-300 max-w-72">
            <img
              src={IDPs}
              alt="IDPs in debre birhan"
              className="h-40 w-full"
            />
            <span className="text-center">Donate to Help IDPs</span>
          </div>
          <div className="my-5">
            {" "}
            With millions displaced from their home and land, internally
            diplaced people aren't getting the proper support and help
            goverment,
          </div>
          <div>Read More ....</div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
