import React from "react";
import { FaHome, FaThList } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { MdEvent } from "react-icons/md";

function Sidebar() {
  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    localStorage.removeItem("userID");

    window.location.href = "/";
  };

  return (
    <div className="flex  md:flex-col md:h-screen">
      <div className="flex items-center md:justify-start">
        <div className="p-5 w-6/12 md:w-10/12 border rounded m-4 bg-gray-500">
          Full Name
        </div>
      </div>

      <div className="pt-10 text-4xl gap-3 flex md:flex-col md:ml-5">
        <NavLink to="/admin" activeClassName="active">
          <div className="flex gap-10 py-2">
            <FaHome className="text-[#43a440]" />
            <div className="text-2xl hidden md:block">Home</div>
          </div>
        </NavLink>

        <NavLink to="/member" activeClassName="active">
          <div className="flex gap-10 py-2">
            <FaThList className="text-[#43a440]" />
            <div className="text-2xl hidden md:block">Member List</div>
          </div>
        </NavLink>

        <NavLink to="/events" activeClassName="active">
          <div className="flex gap-10 py-2">
            <MdEvent className="text-[#43a440]" />
            <div className="text-2xl hidden md:block">Events</div>
          </div>
        </NavLink>
        <NavLink to="/transactions" activeClassName="active">
          <div className="flex gap-10 py-2">
            <GrTransaction className="text-[#43a440]" />
            <div className="text-2xl hidden md:block">Transaction</div>
          </div>
        </NavLink>

        <div className="md:flex gap-10 py-2">
          <button className="" onClick={Logout}>
            <FiLogOut className="text-[#43a440]" />
            <div className="text-2xl hidden md:block">Logout</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
