import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";

function Sidebar() {
  return (
    <div className="flex  md:hidden">
      <div className="pt-10 text-4xl gap-3 flex md:flex-col md:ml-5">
        <NavLink to="/" activeClassName="active">
          <div className="flex gap-10 py-2">
            <FaHome className="" />
          </div>
        </NavLink>
        <NavLink to="/adminHome" activeClassName="active">
          <div className="flex gap-10 py-2">
            <LuLayoutDashboard className="" />
          </div>
        </NavLink>

        <NavLink to="/members" activeClassName="active">
          <div className="flex gap-10 py-2">
            <MdOutlineManageAccounts className="" />
          </div>
        </NavLink>

        <NavLink to="/events" activeClassName="active">
          <div className="flex gap-10 py-2">
            <RiCalendarEventLine className="" />
          </div>
        </NavLink>
        <NavLink to="/settings" activeClassName="active">
          <div className="flex gap-10 py-2">
            <FiSettings className="" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
