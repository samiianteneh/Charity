import React, { useEffect, useState } from "react";
import { charity } from "../../Constant/charity";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../../Store";
import DetailModal from "../whatWeDo/DetailModal";
import CharityModal from "./CharityModal";

function CharityDisplay() {
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
  const dispatch = useDispatch();

  const events = useSelector((state) => state.eventReducer.events);
  console.log(charity, "charitycharity");

  useEffect(() => {
    dispatch(getEvent());
  }, [dispatch]);
  const filerdCharity = events?.filter((item) => {
    return item?.isActive == 1;
  });
  console.log(filerdCharity, "filerdCharity");

  return (
    <div className="container mx-auto font-poppins">
      <h2 className="text-2xl font-bold text-center mb-8">
        Latest Charity Events
      </h2>

      <div
        className="max-h-96 overflow-x-auto flex"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          cursor: "pointer",
        }}
      >
        {filerdCharity?.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 mb-4 max-w-96 min-w-80 mx-3  "
          >
            <h3 className="text-xl font-semibold mb-4 text-[24px]">
              {item?.name}
            </h3>
            <div className="justify-items-stretch grid text-lg">
              <p className="text-gray-600  font-normal grid ">
                <span className="mb-3 w-full">
                  <span className="text-green-600 font-extrabold ">
                    Date:{""}{" "}
                  </span>
                  {item?.date.slice(0, 10)}
                </span>
                <span className="gap-2 mb-3 w-full">
                  <span className="text-green-600 font-extrabold">
                    Event Address:{" "}
                  </span>
                  {item?.eventAddress}
                </span>
              </p>
              <p className="text-gray-600 mb-2 font-normal"></p>{" "}
              <button
                onClick={() => handleClick(item)}
                className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0 mt-4"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {isOpen && <CharityModal closeModal={closeModal} data={datas} />}
    </div>
  );
}

export default CharityDisplay;
