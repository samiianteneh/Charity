import React from "react";
import HomePage from "../home/HomePage";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import WhatWeDo from "../whatWeDo/WhatWeDo";
import Detail from "../Detail/Detail";
import BeMember from "../beMember/BeMember";
import TestimonialSlider from "../testimonials/testimoialSlider";
import ContactUs from "../contactus/ContactUs";
import Navigation from "../../Components/NavLink/Navigation";
import Footer from "../../Components/Footer/Footer";
import Navig from "../../Components/NavLink/Navig";
import Counts from "../Counts/Counts";
import Event from "../Events/Event";
import Posts from "../Post/Post";
export default function LandingPage() {
  return (
    <>
      {/* <div className="hidden md:block">
        <div className="w-full h-screen flex flex-col">
          <div className="h-1/6 bg-gray-300"></div>
          <div className="h-5/6 bg-gray-500"></div>
        </div>
      </div> */}
      <div className="md:hidden">
        {" "}
        <Navigation />
      </div>
      <div className="hidden md:block">
        <Navig />
      </div>
      <main className="bg-[#f9fafb]">
        <section id={"home"}>
          <HomePage />
        </section>
        <section id={"event"}>
          <Event />
        </section>
        <section id={"post"}>
          <Posts />
        </section>
        <section id={"WhoWeAre"}>
          <WhoWeAre />
        </section>
        <section id={"WhatWeDo"}>
          <WhatWeDo />
        </section>
        <section id={"counts"}>
          <Counts />
        </section>
        <section id={"Testimonials"}>
          <TestimonialSlider />
        </section>
        <section id={"member"}>
          <BeMember />
        </section>
        <section id={"contactUs"}>
          <ContactUs />
        </section>
      </main>
      <Footer />
    </>
  );
}
