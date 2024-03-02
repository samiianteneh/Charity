import React from "react";
import { charity } from "../Constant/charity";

function CharityDisplay() {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Latest Charity Events
      </h2>
      <div className="max-h-96 overflow-y-auto">
        {charity?.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">{item.charity}</h3>
            <p className="text-gray-600 mb-2">Date: {item.date}</p>
            <p className="text-gray-600 mb-2">Location: {item.location}</p>
            <p className="text-gray-600 mb-2">
              Charity Address: {item.charityAddress}
            </p>
            {item.is_show === 1 && (
              <p className="text-green-600 font-semibold">
                This event is currently active
              </p>
            )}
            {item.is_show === 0 && (
              <p className="text-red-600 font-semibold">
                This event is not currently active
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharityDisplay;
