import React from "react";

const Counts = () => {
  return (
    <section className="text-gray-600 body-font bg-green-600 font-poppins">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              2.7K
            </h2>
            <p className="leading-relaxed text-gray-200">Users</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              1.8K
            </h2>
            <p className="leading-relaxed text-gray-200">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              53
            </h2>
            <p className="leading-relaxed text-gray-200">Countries</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              4
            </h2>
            <p className="leading-relaxed text-gray-200">continents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
