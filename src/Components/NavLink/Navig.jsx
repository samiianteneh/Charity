import React, { useState } from "react";
import Dropdown from "../dropDown/DropDown";
import logo from "../../assets/logo.png";
import Donate from "../../Pages/home/Donate";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navig() {
  const dropdownItems = ["Who We Are", "What We Do", "Testimonials"];
  const tokens = localStorage.getItem("token");

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  function handleClick() {
    setIsOpen(true);
  }

  return (
    <div className="py-4">
      <header className="text-gray-600 py-4   w-full bg-white z-10 top-0">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-stretch">
          <img
            src={logo}
            className="w-20 md:w-40 md:border-r md:pr-4 md:border-gray-400"
            alt="Noah Giving Hands logo"
          />
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
            <a
              href="#home"
              className="mr-3 text-green-600 hover:text-green-800 hover:font-semibold transition duration-300 ease-in-out transform hover:scale-105 text-md font-normal px-1"
            >
              Home
            </a>
            <a
              href="#event"
              className="mr-3 text-green-600 hover:text-green-800 hover:font-semibold transition duration-300 ease-in-out transform hover:scale-105 text-md font-normal px-1"
            >
              Events
            </a>
            <a
              href="#post"
              className="mr-3 text-green-600 hover:text-green-800 hover:font-semibold transition duration-300 ease-in-out transform hover:scale-105 text-md font-normal px-1"
            >
              Posts
            </a>
            <Dropdown
              title={
                <div className="flex items-center justify-center">
                  <span>About Us</span> <RiArrowDropDownLine size={25} />
                </div>
              }
              items={dropdownItems}
            />

            <a
              href="#contactUs"
              className="mr-3 text-green-600 hover:text-green-800 hover:font-semibold transition duration-300 ease-in-out transform hover:scale-105 text-md font-normal px-1"
            >
              Contact Us
            </a>
            <a
              href="/donation"
              className="mr-5 inline-flex items-center bg-green-600 border-0 text-white py-1 px-2 focus:outline-none shadow-md  hover:bg-green-900 rounded text-base mt-4 md:mt-0"
            >
              Donate
            </a>

            {/* <button
              onClick={() => handleClick()}
              className="mr-5 inline-flex items-center bg-green-600 border-0 text-white py-1 px-2 focus:outline-none shadow-md  hover:bg-green-900 rounded text-base mt-4 md:mt-0"
            >
              Donate
            </button> */}
          </nav>
          {tokens ? (
            <a
              href="/adminHome"
              className="border-[1px] border-green-600 rounded-[5px] py-1 px-2 mr-5 text-green-600 hover:text-green-800 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-md font-normal "
            >
              Admin Page
            </a>
          ) : (
            ""
          )}
          <a
            href="#member"
            className="mr-5 inline-flex items-center bg-green-600 border-0 text-white py-1 px-2 focus:outline-none shadow-md  hover:bg-green-900 rounded text-base mt-4 md:mt-0"
          >
            Become a volenteer
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </header>
      {isOpen && <Donate closeModal={closeModal} />}
    </div>
  );
}

export default Navig;
