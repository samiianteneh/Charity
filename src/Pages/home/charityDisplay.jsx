import React from "react";
import { charity } from "../../Constant/charity";

function CharityDisplay() {
  const filerdCharity = charity?.filter((item) => {
    return item?.is_active == 1;
  });

  return (
    <div className="container mx-auto font-poppins">
      <h2 className="text-2xl font-bold text-center mb-8">
        Latest Charity Events
      </h2>

      <div
        className="max-h-96 overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          cursor: "pointer",
        }}
      >
        {filerdCharity?.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4  ">
            <h3 className="text-xl font-semibold mb-2 text-[14px]">
              {item?.charity}
            </h3>
            <div className="justify-items-stretch grid">
              <p className="text-gray-600 mb-2 font-normal grid ">
                <span>
                  <span className="text-green-600 font-extrabold">
                    Date:{""}{" "}
                  </span>
                  {item?.date}
                </span>
                <span className="gap-2 ">
                  <span className="text-green-600 font-extrabold">
                    Event Address:{" "}
                  </span>
                  {item?.charityAddress}
                </span>
              </p>
              <p className="text-gray-600 mb-2 font-normal  ">
                <span className="text-green-600 font-extrabold">
                  Location:{" "}
                </span>
                {item?.location}
              </p>

              <p className="text-gray-600 mb-2 font-normal  ">
                <span className="text-green-600 font-extrabold">
                  Description:{" "}
                </span>
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharityDisplay;
