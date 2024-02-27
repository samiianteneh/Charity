import React from "react";
import BackGroungIMG from "../assets/pic 1.jpg";
import ImageSlider from "./ImageSlider";

function HomePage() {
  return (
    <div className="w-full mx-4">
      <div className="">
        {/* <img src={BackGroungIMG} alt="img" className="w-full max-h-96" /> */}
      </div>
      <div className="flex justify-between  ">
        <div className=" w-3/5">
          {" "}
          <ImageSlider />
        </div>
        <div className=" w-2/5">
          <div>
            <div className="font-bold text-center"> Latest Charity Events</div>
            <></>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
