import React, { useState } from "react";
import Layout from "../../../Layout/layout";
import DashboardHeader from "../../../Layout/dashboardHeader";
import Settings from "./settings";
import VolunteerType from "../VolunteerType/volunteerType";
import { BiSolidShow } from "react-icons/bi";
import { MdVolunteerActivism } from "react-icons/md";

const SettingsTab = () => {
  const [selectedTab, setSelectedTab] = useState("ShowAdmins");

  const handleButtonClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <Layout>
      <div className="font-poppins gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="row-span-1 py-1 rounded-[20px] ">
          <DashboardHeader />

          <div className=" flex items-center justify-start gap-5 py-4 m-2 text-[13px] border-gray-300 border-b">
            <button
              className="flex bg-green-600 items-center justify-center gap-2 rounded-[5px] border-[1px] py-2 px-3"
              onClick={() => handleButtonClick("ShowAdmins")}
            >
              <BiSolidShow className="fill-white " size={18} />
              <p className="font-normal text-[12px] text-white"> Show Admins</p>
            </button>
            <button
              className="flex bg-green-600 items-center justify-center gap-2 rounded-[5px] border-[1px] py-2 px-3"
              onClick={() => handleButtonClick("VolunteerType")}
            >
              <MdVolunteerActivism className="fill-white " size={18} />
              <p className="font-normal text-[12px] text-white">
                Volunteer Type
              </p>
            </button>
          </div>

          <div className="m-4">
            {selectedTab === "ShowAdmins" && <Settings />}
            {selectedTab === "VolunteerType" && <VolunteerType />}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SettingsTab;
