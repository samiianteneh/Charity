import React from "react";
import Layout from "../../../Layout/layout";
import DashboardHeader from "../../../Layout/dashboardHeader";

const Transaction = () => {
  return (
    <Layout>
      <div className="font-poppins grid grid-rows-3 grid-flow-col gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="row-span-1 py-1 rounded-[20px] ">
          <DashboardHeader />
          Transaction
        </div>
      </div>
    </Layout>
  );
};

export default Transaction;
