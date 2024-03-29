import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../Constant/sidebarData";
import { CiLogout } from "react-icons/ci";
import { LogOut } from "lucide-react";
import { logoutUser } from "../Store";
import { useDispatch } from "react-redux";
import Sidebar from "../Pages/Admin/Sidebar";
import Breadcrumb from "../Components/breadCrumb";

export default function DashboardHeader() {
  const dispatch = useDispatch();
  let labeled;
  for (let i = 0; i < DASHBOARD_SIDEBAR_LINKS.length; i++) {
    labeled = DASHBOARD_SIDEBAR_LINKS[i];
  }
  const [selectedSidebarKey, setSelectedSidebarKey] = useState("dashboard");

  const handleSidebarItemClick = (key) => {
    setSelectedSidebarKey(key);
  };
  const selectedItem = DASHBOARD_SIDEBAR_LINKS.find(
    (item) => item.key === selectedSidebarKey
  );
  const selectedLabel = selectedItem?.label;
  const selectedIcon = selectedItem?.icon;
  const handleLogout = () => {
    dispatch(logoutUser());
    window.location.href = "/login";
  };

  // console.log(
  //   "first",

  //   DASHBOARD_SIDEBAR_LINKS?.map((keys) => keys.key)
  // );

  for (let i = 0; i < DASHBOARD_SIDEBAR_LINKS.length; i++) {
    const labeled = DASHBOARD_SIDEBAR_LINKS[i];
    // console.log(DASHBOARD_SIDEBAR_LINKS[i], labeled, "ncdsjcbjsdcb");
  }

  // console.log(
  //   DASHBOARD_SIDEBAR_LINKS?.map((keys) => keys.key),
  //   "firstdashboard"
  // );
  // console.log(
  //   DASHBOARD_SIDEBAR_LINKS?.map((keys) => keys.key),
  //   "firstdashboard"
  // );

  return (
    <div>
      <div className="flex border-b-[1px] border-blueGreen mb-[20px] justify-between items-center ">
        <div className="hidden md:block font-poppins font-normal text-gray-800  p-4 justify-center">
          {" "}
          <Breadcrumb selectedSidebarKey={selectedSidebarKey}></Breadcrumb>
        </div>
        <div className="hidden md:block">
          {" "}
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 text-[13px] font-normal text-white bg-green-600 py-2 px-4 rounded-[5px]"
          >
            Logout
            <LogOut size={16} />
          </button>
        </div>
      </div>
      <div className="flex border-b-[1px] border-blueGreen mb-[20px]  justify-between  items-center md:hidden w-[90%]">
        <Sidebar
          className="font-poppins font-normal text-gray-800  p-4 justify-center w-auto"
          selectedSidebarKey={selectedSidebarKey}
          handleSidebarItemClick={handleSidebarItemClick}
        />

        <button
          onClick={handleLogout}
          className=" text-[13px] font-normal text-white bg-green-600 py-2 px-4 rounded-[5px]"
        >
          <LogOut size={16} />
        </button>
      </div>
    </div>
  );
}
