import React, { useState } from "react";
import DashboardHeader from "../../../Layout/dashboardHeader";
import Layout from "../../../Layout/layout";
import { charity } from "../../../Constant/charity";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import add from "../../../assets/icons/wired-outline-49-plus-circle.png";
import CreateEvent from "./CreateEvent";
import EventTable from "./EventTable";
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
      <div className="font-poppins grid grid-rows-3 grid-flow-col gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="row-span-1 py-1 rounded-[20px] ">
          <DashboardHeader />
          <div className="container mx-auto mt-8">
            <img
              onClick={() => openModal()}
              className="text-xl font-semibold mb-4 text-[#43a440] w-10"
              src={add}
            />
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
