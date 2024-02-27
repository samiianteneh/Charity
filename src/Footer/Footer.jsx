import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="mr-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebook />{" "}
          </a>
        </div>
        <div className="mr-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FiTwitter />{" "}
          </a>
        </div>
        <div className="mr-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FiInstagram />
          </a>
        </div>
        <div>
          <a href="#" className="text-white hover:text-gray-400">
            <TbBrandLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
