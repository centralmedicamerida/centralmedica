// src/components/home/home.jsx (o donde tengas HomeOne)
import React from "react";
import About from "./about";
import Appointment from "./appointment";
// import Blog from "./blog";              // ⬅️ Desactivado por ahora
import Counter from "../../../common/counter";
import Cta_Area from "./cta-area";
// import Feedback from "./feedback";       // ⬅️ Desactivado por ahora
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import ServiceArea from "./service-area";
// import Brands from "@/common/brands";     // ⬅️ Desactivado por ahora
import Specialists from "../../../common/specialists";
import Team from "../../../common/team";

const HomeOne = () => {
  return (
    <>
      <HeroBanner />
      <ServiceArea />
      <About />
      <Counter />
      <Gallery />
      <Specialists />
      <Appointment />
      <Team />
      {/* <Feedback />  ⬅️ Desactivado por ahora */}
      {/* <Brands />    ⬅️ Desactivado por ahora */}
      <Cta_Area />
      {/* <Blog />      ⬅️ Desactivado por ahora */}
    </>
  );
};

export default HomeOne;
