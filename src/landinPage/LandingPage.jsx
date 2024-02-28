import React from "react";
import Navigation from "../NavLink/Navigation";
import HomePage from "../home/HomePage";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import WhatWeDo from "../whatWeDo/WhatWeDo";
import Detail from "../Detail/Detail";
import BeMember from "../beMember/BeMember";
import Footer from "../Footer/Footer";
import TestimonialSlider from "../testimonials/testimoialSlider";

export const LandingPage = () => {
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
        {/* <section id={"testimonials"}> */}
        <TestimonialSlider />
        {/* </section> */}
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
};
