import React from "react";
import { FaDonate, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { MdOutlineManageAccounts, MdPostAdd } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";

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
        <NavLink to="/donators" activeClassName="active">
          <div className="flex gap-10 py-2">
            <FaDonate className="" />
          </div>
        </NavLink>
        <NavLink to="/events" activeClassName="active">
          <div className="flex gap-10 py-2">
            <RiCalendarEventLine className="" />
          </div>
        </NavLink>
        <NavLink to="/posts" activeClassName="active">
          <div className="flex gap-10 py-2">
            <MdPostAdd className="" />
          </div>
        </NavLink>

        <NavLink to="/feedBack" activeClassName="active">
          <div className="flex gap-10 py-2">
            <VscFeedback className="" />
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
