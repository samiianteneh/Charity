import { Route, Router, Routes } from "react-router";
import "./App.css";
import Detail from "./Detail/Detail";
import HomePage from "./home/HomePage";
import NavLink from "./NavLink/Navigation";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./NavLink/Navigation";
import Footer from "./Footer/Footer";
import WhatWeDo from "./whatWeDo/WhatWeDo";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Header from "./NavLink/header";
import Testimonials from "./testimonials/Testimonials";
import BeMember from "./beMember/BeMember";
import { LandingPage } from "./landinPage/LandingPage";

function App() {
  return (
    <>
      {/* <LandingPage /> */}

      <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Detail" element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
