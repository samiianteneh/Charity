import React, { useEffect } from "react";
import { charity } from "../../Constant/charity";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../../Store";

function CharityDisplay() {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.eventReducer.events);
  console.log(events, "eventsevents");

  useEffect(() => {
    dispatch(getEvent());
  }, [dispatch]);
  const filerdCharity = events?.filter((item) => {
    return item?.is_active == 1;
  });
  console.log(filerdCharity, "filerdCharity");
  return (
    <div className="container mx-auto font-poppins">
      <h2 className="text-2xl font-bold text-center mb-8">
        Latest Charity Events
      </h2>

      <div
        className="max-h-96 overflow-y-auto"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          cursor: "pointer",
        }}
      >
        {filerdCharity?.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4  ">
            <h3 className="text-xl font-semibold mb-2 text-[14px]">
              {item?.name}
            </h3>
            <div className="justify-items-stretch grid">
              <p className="text-gray-600 mb-2 font-normal grid ">
                <span>
                  <span className="text-green-600 font-extrabold">
                    Date:{""}{" "}
                  </span>
                  {item?.date.slice(0, 10)}
                </span>
                <span className="gap-2 ">
                  <span className="text-green-600 font-extrabold">
                    Event Address:{" "}
                  </span>
                  {item?.eventAddress}
                </span>
              </p>
              <p className="text-gray-600 mb-2 font-normal  ">
                <span className="text-green-600 font-extrabold">
                  Location:{" "}
                </span>
                {item?.charityAddress}
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
