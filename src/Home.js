import React from "react";
import Hero from "./Components/Home/Hero";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Membership from "./Components/Membership/Membership";
import Team from "./Components/Aboutus/Team";
import About from "./Components/Aboutus/About";
import Event from "./Components/Events/Event";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Event />
      <Team />
      <Gallery />
      <Membership />
      <Contact />
    </>
  );
};

export default Home;
