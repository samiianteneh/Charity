import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../Constant/sidebarData";
import { CiLogout } from "react-icons/ci";
import { LogOut } from "lucide-react";

export default function DashboardHeader() {
  const [selectedSidebarKey, setSelectedSidebarKey] = useState("dashboard");

  const handleSidebarItemClick = (key) => {
    setSelectedSidebarKey(key);
  };
  const selectedItem = DASHBOARD_SIDEBAR_LINKS.find(
    (item) => item.key === selectedSidebarKey
  );
  const selectedLabel = selectedItem?.label;
  const selectedIcon = selectedItem?.icon;
  const handleButtonClick = () => {};

  return (
    <div className="flex border-b-[1px] border-blueGreen mb-[20px] justify-between">
      <div className="font-poppins font-normal text-gray-800  p-4 justify-center ">
        <div className="flex justify-center items-center  font-normal text-gray-500 gap-[10px]">
          {selectedIcon} {selectedLabel}
        </div>
      </div>
      <div className="flex items-center justify-center gap-[20px] px-[20px]">
        <button className="flex items-center justify-center gap-2 text-[14px] font-normal text-white bg-green-500 py-2 px-4 rounded-[5px]">
          Logout
          <LogOut size={16} />
        </button>
      </div>
    </div>
  );
}
