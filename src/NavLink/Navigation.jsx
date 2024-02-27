import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import DropDown from "../assets/icons/system-solid-12-arrow-down.gif";
import close from "../assets/icons/system-solid-29-cross.gif";
function Navigation() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
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
              href="#WhoWeAre"
              className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text-xl"
            >
              Who We Are
            </a>
            <a
              href="#WhatWeDo"
              className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text-xl"
            >
              What We Do
            </a>
            <a
              href="#testimonials"
              className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text-xl"
            >
              Testimonials
            </a>
            <a
              href="#WhatWeDo"
              className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text-xl"
            >
              Detail
            </a>
            <a
              href="#member"
              className="text-[#43a440] hover:text-2xlm hover:text-black px-3 font-bold text-xl"
            >
              Become a member
            </a>
          </div>
          <div className="md:hidden">
            {showNav ? (
              <img src={close} className="w-10 h-10" onClick={toggleNav} />
            ) : (
              <img src={DropDown} className="w-10 h-10" onClick={toggleNav} />
            )}

            {showNav && (
              <div>
                <ul className="absolute right-0 w-[50%] bg-green-500 p-4 z-10">
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
                      href="#WhoWeAre"
                      onClick={toggleNav}
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Who We Are
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#WhatWeDo"
                      onClick={toggleNav}
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      What We Do
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#testimonials"
                      onClick={toggleNav}
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="mb-2 text-left">
                    <a
                      href="#member"
                      onClick={toggleNav}
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Mmembership
                    </a>
                  </li>

                  <li className="mb-2 text-left">
                    <a
                      href="#"
                      onClick={toggleNav}
                      className="text-gre hover:text-2xlm  px-3 font-bold text-xl"
                    >
                      Contact
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
