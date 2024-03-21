import React from "react";
import firstImg from "../../assets/1st overflow.jpg";
import secondImg from "../../assets/2nd overflow.jpg";
import thirdImg from "../../assets/3rd overflow.jpg";

function ImageOverlay() {
  return (
    <div className="relative overflow-hidden mt-10">
      <img
        src={firstImg}
        alt="Background"
        className="pb-20 pt-20 pr-0 ml-10 rounded-2xl w-[80%] "
      />

      <img
        src={secondImg}
        alt="Foreground"
        className="absolute bottom-0 right-[20px] w-2/5 z-8 rounded-2xl"
      />
      <img
        src={thirdImg}
        alt="Foreground"
        className="absolute top-0 left-[-20px] w-3/5 z-8 rounded-2xl"
      />
    </div>
  );
}

export default ImageOverlay;
