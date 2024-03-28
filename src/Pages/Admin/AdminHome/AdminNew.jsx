import React, { useEffect, useState } from "react";
import Layout from "../../../Layout/layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardHeader from "../../../Layout/dashboardHeader";
import { personalInfo } from "../../../Constant/personalInfo";
// import { charity } from "../../../Constant/charity";
import { moneyCollected } from "../../../Constant/moneyCollected";
import { useDispatch, useSelector } from "react-redux";
import { getBalances, getEvent, getUsers } from "../../../Store";
function AdminNew() {
  const dispatch = useDispatch();
  const personalInfos = useSelector((state) => state.userReducer.users);
  console.log(personalInfos, "userssssar");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const [counts, setCounts] = useState({});

  useEffect(() => {
    const countryCounts = {};
    personalInfos.forEach((entry) => {
      const country = entry.country;
      countryCounts[country] = (countryCounts[country] || 0) + 1;
    });
    setCounts(countryCounts);
  }, [personalInfos]);
  const balance = useSelector((state) => state.BalanceReducer.balance);
  console.log(balance?.allBalance, "balancebalance");

  const events = useSelector((state) => state.eventReducer.events);

  useEffect(() => {
    dispatch(getEvent());
  }, [dispatch]);

  ChartJS.register(ArcElement, Tooltip, Legend);
  const activeCharity = events?.filter((charity) => charity?.isActive == 1);
  const inActiveCharity = events?.filter((charity) => charity?.isActive == 0);

  useEffect(() => {
    dispatch(getBalances());
  }, [dispatch]);

  const calculateYearlyTotal = (data) => {
    const yearlyTotal = {};
    data?.forEach(({ createdAt, amount }) => {
      const year = new Date(createdAt).getFullYear();
      yearlyTotal[year] = (yearlyTotal[year] || 0) + amount;
    });
    return yearlyTotal;
  };

  // Calculate total amount collected for each year
  const yearlyTotal = calculateYearlyTotal(balance?.allBalance);
  return (
    <Layout>
      <div className="font-poppins grid grid-rows-3 grid-flow-col gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="row-span-1 py-1 rounded-[20px] ">
          <DashboardHeader />
          <div className="grid grid-cols-3 gap-[12px] p-[10px] h-[70px]">
            <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]">
              <div className="container mx-auto mt-8 ml-10">
                <h2 className="text-xl font-semibold mb-4 text-[#43a440]">
                  Country
                </h2>
                <div className="flex ml-2">
                  <ul className="list-disc pl-4">
                    {Object.keys(counts).map((country) => (
                      <li key={country} className="text-gray-800">
                        <span className="font-semibold">{country}</span>{" "}
                        {counts[country]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]">
              <div className="container mx-auto mt-8 ml-10">
                <h2 className="text-xl font-semibold mb-4 text-[#43a440]">
                  Events
                </h2>
              </div>
              <div className=" ml-2">
                <table>
                  <thead>
                    <tr>
                      <td className="px-3"> No of Active Charity event :</td>
                      <td className="px-3">{activeCharity?.length}</td>
                    </tr>
                    <tr>
                      <td className="px-3"> No of InActive Charity event :</td>
                      <td className="px-3">{inActiveCharity?.length}</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]">
              <div className="container mx-auto mt-8 ml-10">
                <h2 className="text-xl font-semibold mb-4 text-[#43a440]">
                  Chash Collected
                </h2>
              </div>
              <div className=" ml-2">
                <ul>
                  {Object.entries(yearlyTotal).map(([year, total]) => (
                    <li key={year}>
                      {year}: {total}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
