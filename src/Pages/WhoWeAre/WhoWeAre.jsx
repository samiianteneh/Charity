import React, { useState } from "react";

import ImageOverlay from "./ImageOverlay";
import { set } from "react-hook-form";
import English from "./English";
import Amharic from "./Amharic";

function WhoWeAre() {
  const [language, setLanguage] = useState(false);

  const languageChange = () => {
    setLanguage(!language);
  };
  return (
    <div className="font-poppins font-light px-5 md:px-10 lg:px-20 xl:px-36 justify-center items-center my-5">
      <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
        <div className="mx-auto md:mx-0 md:w-2/5 order-2 md:order-1">
          <ImageOverlay />
        </div>
        <div className="mx-auto md:mx-0 md:w-3/5 order-1 md:order-2">
          <div className="text-center md:text-start my-5">
            <div className="inline-block relative mb-5">
              <span className="text-green-600 text-3xl font-bold ">
                Who we are
              </span>
              {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform translate-y-full"></span> */}
            </div>
          </div>
          <div>
            <div className="flex justify-end">
              <button
                onClick={languageChange}
                className="bg-green-600 text-xl text-white p-2 rounded-lg font-bold "
              >
                {language ? "English" : "አማርኛ"}
              </button>
            </div>
            <div>{language ? <Amharic /> : <English />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
