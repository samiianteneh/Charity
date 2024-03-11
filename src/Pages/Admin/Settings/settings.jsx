import React from "react";
import DashboardHeader from "../../../Layout/dashboardHeader";
import Layout from "../../../Layout/layout";

const Settings = () => {
  return (
    <Layout>
      <div className="font-poppins grid grid-rows-3 grid-flow-col gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="row-span-1 py-1 rounded-[20px] ">
          <DashboardHeader />
          Settings
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
