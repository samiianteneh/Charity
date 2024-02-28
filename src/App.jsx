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

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navigation />
      <main>
        <section id="home">
          <HomePage />
        </section>
        <section id="WhoWeAre">
          <WhoWeAre />
        </section>
        <section id="WhatWeDo">
          <WhatWeDo />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="member">
          <BeMember />
        </section>
        <section id="about">
          <Detail />
        </section>
      </main>
      <Footer />
    </div>

    // <BrowserRouter>
    //   <div className=" w-full">
    //     <Navigation />{" "}
    //   </div>
    //   <div className="">
    //     <div className="">
    //       <Routes>
    //         <Route path="/" element={<HomePage />} />
    //         <Route path="/Detail" element={<Detail />} />
    //       </Routes>
    //     </div>
    //   </div>
    //   <div className=" w-full">
    //     <Footer />{" "}
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
