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
                      href="#event"
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
                      Events
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#post"
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
                      Posts
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
                      be a volunteer
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
