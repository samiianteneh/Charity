import React, { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between relative">
      <div className="text-lg font-semibold">Your Logo</div>
      <div className="hidden md:flex">
        <ul className="flex">
          <li className="ml-4">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li className="ml-4">
            <a
              href="#WhoWeAre"
              className="text-gre hover:text-2xlm hover:text-green-500 px-3 font-bold text-xl"
            >
              Who We Are
            </a>
          </li>
          <li className="ml-4">
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li className="ml-4">
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button className="text-3xl" onClick={toggleNav}>
          -
        </button>
        {showNav && (
          <ul className="absolute top-full left-0 w-full bg-gray-800 p-4">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className=" h-10 hidden md:flex">
        <a
          href="#home"
          className="text-gre hover:text-2xlm hover:text-green-500 px-3 font-bold text-xl"
        >
          Home
        </a>
        <a
          href="#WhoWeAre"
          className="text-gre hover:text-2xlm hover:text-green-500 px-3 font-bold text-xl"
        >
          Who We Are
        </a>
        <a
          href="#WhatWeDo"
          className="text-gre hover:text-2xlm hover:text-green-500 px-3 font-bold text-xl"
        >
          What We Do
        </a>
        <a
          href="#WhatWeDo"
          className="text-gre hover:text-2xlm hover:text-green-500 px-3 font-bold text-xl"
        >
          Detail
        </a>
        <a
          href="#member"
          className="text-gre hover:text-2xlm hover:text-green-500 px-3 font-bold text-xl"
        >
          Become a member
        </a>
      </div>
    </div>
  );
};

export default Header;
