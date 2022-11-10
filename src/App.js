import React from "react";
import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Topnavbar from "./Components/Navbar/Topnavbar";
import Footers from "./Components/Footer/Footers";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Membership from "./Components/Membership/Membership";
import Team from "./Components/Aboutus/Team";
import About from "./Components/Aboutus/About";
const App = () => {
  return (
    <>
      <Topnavbar />
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Gallery />
      <Membership />
      <Contact />
      <Footers />
    </>
  );
};

export default App;
