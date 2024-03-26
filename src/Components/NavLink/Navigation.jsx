import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import DropDown from "../../assets/icons/system-solid-12-arrow-down.gif";
import close from "../../assets/icons/system-solid-29-cross.gif";
import Donate from "../../Pages/home/Donate";
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
    setSubNav(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  function handleClick() {
    setIsOpen(true);
  }
  function newFunction() {
    setIsOpen(true);
  }
  const tokens = localStorage.getItem("token");
  return (
    <>
      <header>
        <div className=" container mx-auto flex justify-between flex-wrap  flex-row items-center">
          <div className="px-5 md:hidden">
            <a href="#home" className=" px-3 font-bold text-xl">
              <img src={logo} alt="logo" className="w-20 md:w-40" />
            </a>
          </div>
          {/* <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center">
            <a
              href="#home"
              className="mr-5 text-green-600 hover:text-green-800 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-md font-normal px-1"
            >
              Home
            </a>

            <a
              href="#"
              onClick={dropNav}
              className="mr-5 text-green-600 hover:text-green-800 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-md font-normal px-1"
            >
              About us
            </a>
            <a
              href="#contactUs"
              className="mr-5 text-green-600 hover:text-green-800 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-md font-normal px-1"
            >
              Contact Us
            </a>
            <button
              onClick={() => handleClick()}
              className="mr-5 text-green-600 hover:text-green-800 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-md font-normal px-1"
            >
              Donate
            </button>
            {tokens ? (
              <a
                href="/adminHome"
                className=" border-[1px] border-green-600  rounded-[5px] py-1 px-2 mr-5 text-green-600 hover:text-green-800 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-md font-normal px-1"
              >
                Admin Page
              </a>
            ) : (
              ""
            )}

            <a
              href="#member"
              className="inline-flex items-center bg-green-600 border-0 text-white py-1 px-1 focus:outline-none shadow-md  hover:bg-green-900 rounded text-base mt-4 md:mt-0"
            >
              Be a member
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>

            {dropDown && (
              <div className="absolute right-[10%] w-[25%] xl:w-[15%] top-10 bg-gray-100 p-4 z-10">
                <ul className="">
                  <li className="mb-2 text-left">
                    <a
                      href="#WhoWeAre"
                      onClick={dropNav}
                      className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text"
                    >
                      Who We Are
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#WhatWeDo"
                      onClick={dropNav}
                      className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text"
                    >
                      What We Do
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#testimonials"
                      onClick={dropNav}
                      className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </nav> */}
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

            {showNav ? (
              <div className="pt-10 mt-2">
                <ul className="absolute right-0 w-[50%] top-10 bg-green-500 p-4 z-10">
                  <li className="mb-2 text-left">
                    <a
                      href="#home"
                      onClick={
                        subNav
                          ? () => {
                              toggleNav();
                              toggleSubNav();
                            }
                          : toggleNav
                      }
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
                      onClick={
                        subNav
                          ? () => {
                              toggleNav();
                              toggleSubNav();
                            }
                          : toggleNav
                      }
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Membership
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="/donation"
                      onClick={
                        subNav
                          ? () => {
                              toggleNav();
                              toggleSubNav();
                            }
                          : toggleNav
                      }
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Donate
                    </a>
                  </li>
                  {/* <li className="mb-2 text-left">
                    <div
                      onClick={
                        subNav
                          ? () => {
                              toggleNav();
                              toggleSubNav();
                              newFunction();
                            }
                          : () => {
                              toggleNav();
                              newFunction();
                            }
                      }
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Donate
                    </div>
                  </li> */}
                  <li className="mb-2 text-left">
                    <a
                      href="#contactUs"
                      onClick={
                        subNav
                          ? () => {
                              toggleNav();
                              toggleSubNav();
                            }
                          : toggleNav
                      }
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Contact Us
                    </a>
                  </li>
                  {tokens ? (
                    <li className="mb-2 text-left">
                      <a
                        href="/adminHome"
                        onClick={
                          subNav
                            ? () => {
                                toggleNav();
                                toggleSubNav();
                              }
                            : toggleNav
                        }
                        className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                      >
                        Admin Page
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            ) : (
              ""
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
        {isOpen && <Donate closeModal={closeModal} />}
      </header>
    </>
  );
}

export default Navigation;
