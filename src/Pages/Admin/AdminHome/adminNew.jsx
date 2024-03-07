import React from "react";
import Layout from "../../../Layout/layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardHeader from "../../../Layout/dashboardHeader";
import { Doughnut } from "react-chartjs-2";

function AdminNew() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Ongoing Orders", "Completed Orders"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const handleLogout = () => {
    dispatch(logoutUser());
    window.location.href = "/login";
  };
  return (
    <Layout>
      <div className="font-poppins grid grid-rows-3 grid-flow-col gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="row-span-1 py-1 rounded-[20px] ">
          <DashboardHeader />
          <div className="grid grid-cols-4 gap-[12px] p-[10px] h-[70px]">
            <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]"></div>
            <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]"></div>
            <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]"></div>
            <div className="col-span-1 border-navyBlue bg-navyBlue border-[1px] rounded-[10px]"></div>
          </div>
        </div>
        {/* <div className="row-span-2">
          <div className="grid grid-cols-2">
            <div className="col-span-1 border-navyBlue border-[1px] rounded-[20px] mx-2">
              <Doughnut data={data} />
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
}

export default AdminNew;
