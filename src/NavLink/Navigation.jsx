import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
function Navigation() {
  return (
    <>
      {" "}
      <nav>
        <div className="flex  justify-between  ">
          <div className="px-5">
            <a
              href="#home"
              className="text-gre hover:text-2xl px-3 font-bold text-xl"
            >
              <div className="w-40">
                <img src={logo} alt="logo" />
              </div>
            </a>
          </div>
          <div className=" h-10">
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
      </nav>
    </>
  );
}

export default Navigation;
