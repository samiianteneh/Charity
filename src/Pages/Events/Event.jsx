import React from "react";
import CharityDisplay from "./charityDisplay";

function Event() {
  return (
    <div className="font-poppins font-light px-5 md:px-10 lg:px-20 xl:px-36 justify-center items-center my-5">
      <CharityDisplay />
      <div className="flex flex-col md:flex-row gap-12 justify-between items-center"></div>
    </div>
  );
}

export default Event;
