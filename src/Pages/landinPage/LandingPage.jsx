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
export default function LandingPage() {
  return (
    <>
      {/* <Header /> */}
      <Navigation />
      <main>
        <section id={"home"}>
          <HomePage />
        </section>
        <section id={"WhoWeAre"}>
          <WhoWeAre />
        </section>
        <section id={"WhatWeDo"}>
          <WhatWeDo />
        </section>
        <section id={"testimonials"}>
          <TestimonialSlider />
        </section>
        <section id={"member"}>
          <BeMember />
        </section>
        <section id={"about"}>
          <Detail />
        </section>
      </main>
      <Footer />
    </>
  );
}
