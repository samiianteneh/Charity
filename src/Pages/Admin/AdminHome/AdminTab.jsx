import React, { useEffect, useState } from "react";
import Layout from "../../../Layout/layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardHeader from "../../../Layout/dashboardHeader";
import { personalInfo } from "../../../Constant/personalInfo";
import { charity } from "../../../Constant/charity";
import { moneyCollected } from "../../../Constant/moneyCollected";
import { useDispatch, useSelector } from "react-redux";
import { getBalances } from "../../../Store/BalanceCollection/balanceAction";
import { getEvent } from "../../../Store";
import { BiSolidShow } from "react-icons/bi";
import { MdVolunteerActivism } from "react-icons/md";
import Settings from "../Settings/settings";
import VolunteerType from "../VolunteerType/volunteerType";
import { CalendarDays } from "lucide-react";
import { GiCash } from "react-icons/gi";
import { FaGlobeAfrica } from "react-icons/fa";
import Countries from "./Countries";
import EventDashboard from "./EventDashboard";
import CashCollected from "./cashCollected";

function AdminTab() {
  const dispatch = useDispatch();
  const [counts, setCounts] = useState({});
  useEffect(() => {
    const countryCounts = {};
    personalInfo.forEach((entry) => {
      const country = entry.country;
      countryCounts[country] = (countryCounts[country] || 0) + 1;
    });
    setCounts(countryCounts);
  }, []);
  // const balance = useSelector((state) => state.BalanceReducer.balance);
  // console.log(balance, "balancebalance");

  const events = useSelector((state) => state.eventReducer.events);
  // console.log(events, "eventsevents");

  useEffect(() => {
    dispatch(getEvent());
  }, [dispatch]);

  ChartJS.register(ArcElement, Tooltip, Legend);
  const activeCharity = events?.filter((charity) => charity?.is_active == 1);
  const inActiveCharity = events?.filter((charity) => charity?.is_active == 0);
  // useEffect(() => {
  //   dispatch(getBalances());
  // }, [dispatch]);

  const calculateYearlyTotal = (data) => {
    const yearlyTotal = {};
    data.forEach(({ date, amount }) => {
      const year = new Date(date).getFullYear();
      yearlyTotal[year] = (yearlyTotal[year] || 0) + amount;
    });
    return yearlyTotal;
  };

  // Calculate total amount collected for each year
  const yearlyTotal = calculateYearlyTotal(moneyCollected);
  const [selectedTab, setSelectedTab] = useState("countries");

  const handleButtonClick = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <Layout>
      <div className="font-poppins gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className=" py-1 rounded-[20px] ">
          <DashboardHeader />
          <div className=" flex items-center justify-start gap-5 p-4 ">
            <button
              className="flex bg-green-600 items-center justify-center gap-2 rounded-[5px] border-[1px] py-2 px-3"
              onClick={() => handleButtonClick("countries")}
            >
              <FaGlobeAfrica className="fill-white " size={18} />
              <p className="font-normal text-[12px] text-white"> Countries</p>
            </button>
            <button
              className="flex bg-green-600 items-center justify-center gap-2 rounded-[5px] border-[1px] py-2 px-3"
              onClick={() => handleButtonClick("events")}
            >
              <CalendarDays size={18} color="#f6f6f6" />
              <p className="font-normal text-[12px] text-white">Events</p>
            </button>
            <button
              className="flex bg-green-600 items-center justify-center gap-2 rounded-[5px] border-[1px] py-2 px-3"
              onClick={() => handleButtonClick("cashCollected")}
            >
              <GiCash className="fill-white " size={18} />
              <p className="font-normal text-[12px] text-white">
                Cash Collected
              </p>
            </button>
          </div>

          <div className="m-4">
            {selectedTab === "countries" && <Countries />}
            {selectedTab === "events" && <EventDashboard />}
            {selectedTab === "cashCollected" && <CashCollected />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminTab;
