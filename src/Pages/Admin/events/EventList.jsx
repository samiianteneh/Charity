import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import add from "../../../assets/icons/wired-outline-49-plus-circle.png";
import CreateEvent from "./CreateEvent";
import { charity } from "../../../Constant/charity";
import EventTable from "./EventTable";
import { useDispatch, useSelector } from "react-redux";

function EventList() {
  const activeEvents = charity.filter((items) => items?.is_active == 1);
  const inActiveEvents = charity.filter((items) => items?.is_active == 0);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const events = useSelector((state) =>
    console.log("sdbfjsbf", state.eventReducer.events)
  );

  console.log("firstevents", events);
  useEffect(() => {
    dispatch(getEvent());
  }, [dispatch]);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      {" "}
      <img
        onClick={() => openModal()}
        className="text-xl font-semibold mb-4 text-[#43a440] w-10"
        src={add}
      />{" "}
      <div className="w-[95%]  mx-auto mt-8">
        <div className="flex   items-center justify-center gap-10 ">
          <button
            className={`${
              activeTab === "Tab 1"
                ? "border-2 rounded-2xl border-[#43a440] text-[#43a440]"
                : "text-gray-500  border-b-2"
            } py-2 px-4 focus:outline-none hover:text-[#43a440]`}
            onClick={() => handleTabClick("Tab 1")}
          >
            Active{" "}
          </button>
          <button
            className={`${
              activeTab === "Tab 2"
                ? "border-2 rounded-2xl border-[#43a440] text-[#43a440]"
                : "text-gray-500 border-b-2"
            } py-2 px-4 focus:outline-none hover:text-[#43a440]`}
            onClick={() => handleTabClick("Tab 2")}
          >
            InActive{" "}
          </button>
        </div>
        <div className="mt-4">
          {activeTab === "Tab 1" && (
            <div className="">
              {" "}
              <EventTable charity={activeEvents} />
            </div>
          )}
          {activeTab === "Tab 2" && (
            <div className="">
              <EventTable charity={inActiveEvents} />
            </div>
          )}
        </div>
      </div>
      {isOpen && <CreateEvent closeModal={closeModal} />}
    </div>
  );
}

export default EventList;
