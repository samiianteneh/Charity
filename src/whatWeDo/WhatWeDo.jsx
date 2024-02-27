import React, { useState } from "react";

import DetailModal from "./DetailModal";
import ChildComponent from "./ChildComponent";
import { ourWorks } from "../Constant/data";

function WhatWeDo() {
  const [isOpen, setIsOpen] = useState(false);
  const [datas, setDatas] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  function handleClick(data) {
    setDatas(data);
    openModal();
  }

  return (
    <div className="justify-center items-center my-16">
      <div className="text-start mt-5 px-5 md:px-36">
        <div className="inline-block relative">
          <span className="text-green-600 text-4xl font-bold">
            Our Campaign
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform translate-y-full"></span>
        </div>
      </div>
      <div className="text-start my-5 px-5 md:px-36 ">
        <div className="inline-block relative">
          <span className="text-gray-800 text-xl">
            Giving help to those who need it
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  justify-center px-5 md:px-20 my-10">
        {ourWorks?.map((work, index) => (
          <div
            key={index}
            className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-3 my-5 "
          >
            <div className="bg-gray-300">
              <img
                src={work?.image}
                alt="Support A Family"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{work?.title}</h3>
                <p className="text-gray-700">{work?.intro}</p>
                <div className="mt-4">
                  <button onClick={() => handleClick(work)}>
                    Read More ....
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isOpen && <DetailModal closeModal={closeModal} data={datas} />}
    </div>
  );
}

export default WhatWeDo;
