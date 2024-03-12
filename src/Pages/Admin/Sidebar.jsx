import React from "react";
import { FaHome, FaThList } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { MdEvent } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="flex  md:hidden">
      <div className="pt-10 text-4xl gap-3 flex md:flex-col md:ml-5">
        <NavLink to="/dashboard/adminHome" activeClassName="active">
          <div className="flex gap-10 py-2">
            <FaHome className="" />
            <div className="text-2xl hidden md:block">Homes</div>
          </div>
        </NavLink>

        <NavLink to="/dashboard/members" activeClassName="active">
          <div className="flex gap-10 py-2">
            <MdOutlineManageAccounts className="" />
          </div>
        </NavLink>

        <NavLink to="/dashboard/events" activeClassName="active">
          <div className="flex gap-10 py-2">
            <RiCalendarEventLine className="" />
          </div>
        </NavLink>
        <NavLink to="/dashboard/settings" activeClassName="active">
          <div className="flex gap-10 py-2">
            <FiSettings className="" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
