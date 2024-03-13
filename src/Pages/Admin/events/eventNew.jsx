import React, { useState } from "react";
import DashboardHeader from "../../../Layout/dashboardHeader";
import Layout from "../../../Layout/layout";
import { charity } from "../../../Constant/charity";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import add from "../../../assets/icons/wired-outline-49-plus-circle.png";
import CreateEvent from "./CreateEvent";
import EventTable from "./EventTable";
import { IoMdAddCircle } from "react-icons/io";

const EventNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tab 1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const activeEvents = charity.filter((items) => items?.is_active == 1);
  const inActiveEvents = charity.filter((items) => items?.is_active == 0);
  return (
    <Layout>
      <div className="font-poppins gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="py-1 rounded-[20px] ">
          <DashboardHeader />
          <div className="container mx-auto mt-8">
            <div className="px-5 py-4 m-2 ">
              <button
                className="flex bg-green-600 items-center justify-center gap-2 rounded-[5px] border-[1px] py-2 px-3"
                onClick={() => openModal()}
              >
                <IoMdAddCircle className="fill-white " size={20} />
                <p className="font-normal text-[14px] text-white"> Add Event</p>
              </button>
            </div>
            <div className="w-[95%]  mx-auto mt-8">
              <div className="flex   items-center justify-center gap-10 ">
                <button
                  className={`${
                    activeTab === "Tab 1"
                      ? "border-2 text-[14px] font-normal rounded-2xl border-[#43a440] text-[#43a440]"
                      : "text-gray-500 text-[14px] font-normal  border-b-2"
                  } py-2 px-4 focus:outline-none hover:text-[#43a440]`}
                  onClick={() => handleTabClick("Tab 1")}
                >
                  Active{" "}
                </button>
                <button
                  className={`${
                    activeTab === "Tab 2"
                      ? "border-2 text-[14px] font-normal rounded-2xl border-[#43a440] text-[#43a440]"
                      : "text-gray-500 text-[14px] font-normal border-b-2"
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
                    <EventTable charity={activeEvents} type="active" />
                  </div>
                )}
                {activeTab === "Tab 2" && (
                  <div className="">
                    {" "}
                    <EventTable charity={inActiveEvents} type="inActive" />
                  </div>
                )}
              </div>
            </div>
            {isOpen && <CreateEvent closeModal={closeModal} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventNew;
