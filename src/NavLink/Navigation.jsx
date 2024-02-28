import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import DropDown from "../assets/icons/system-solid-12-arrow-down.gif";
import close from "../assets/icons/system-solid-29-cross.gif";
function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [subNav, setSubNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const toggleSubNav = () => {
    setSubNav(!subNav);
  };
  const dropNav = () => {
    setDropDown(!dropDown);
  };
  console.log(subNav, "toggleSubNav");
  return (
    <>
      {" "}
      <nav>
        <div className="flex  justify-between  ">
          <div className="px-5  md:block">
            <a href="#home" className=" px-3 font-bold text-xl">
              <img src={logo} alt="logo" className="w-20 md:w-40" />
            </a>
          </div>
          <div className=" h-10 hidden md:flex">
            <a
              href="#home"
              className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text-xl"
            >
              Home
            </a>

            <a
              href="#"
              onClick={dropNav}
              className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text-xl"
            >
              About us
            </a>
            <a
              href="#member"
              className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text-xl"
            >
              Be a member
            </a>
            {dropDown && (
              <div className="absolute right-[10%] w-[25%] xl:w-[15%] top-10 bg-gray-100 p-4 z-10">
                <ul className="">
                  <li className="mb-2 text-left">
                    <a
                      href="#WhoWeAre"
                      onClick={dropNav}
                      className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text-xl"
                    >
                      Who We Are
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#WhatWeDo"
                      onClick={dropNav}
                      className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text-xl"
                    >
                      What We Do
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#testimonials"
                      onClick={dropNav}
                      className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text-xl"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="md:hidden">
            {showNav ? (
              <img
                src={close}
                className="w-10 h-10"
                onClick={
                  subNav
                    ? () => {
                        toggleNav();
                        toggleSubNav();
                      }
                    : toggleNav
                }
              />
            ) : (
              <img src={DropDown} className="w-10 h-10" onClick={toggleNav} />
            )}

            {showNav && (
              <div>
                <ul className="absolute right-0 w-[50%] top-10 bg-green-500 p-4 z-10">
                  <li className="mb-2 text-left">
                    <a
                      href="#home"
                      onClick={toggleNav}
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#"
                      onClick={toggleSubNav}
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      About us
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#member"
                      onClick={toggleNav}
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Membership
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#contact"
                      onClick={toggleNav}
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {subNav && (
              <div onMouseLeave={toggleSubNav}>
                <ul className="absolute right-[45%] w-[50%] top-10 bg-green-500 p-4 z-10">
                  <li className="mb-2 text-left">
                    <a
                      href="#WhoWeAre"
                      onClick={(e) => {
                        toggleNav();
                        toggleSubNav();
                      }}
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Who We Are
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#WhatWeDo"
                      onClick={(e) => {
                        toggleNav();
                        toggleSubNav();
                      }}
                      o
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      {" "}
                      What We Do
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#testimonials"
                      onClick={(e) => {
                        toggleNav();
                        toggleSubNav();
                      }}
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
