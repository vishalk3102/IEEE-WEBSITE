import React from "react";
import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Topnavbar from "./Components/Navbar/Topnavbar";
import Join from "./Components/Membership/Join";
import Footers from "./Components/Footer/Footers";
import Aboutus from "./Components/Aboutus/Aboutus";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Membership from "./Components/Membership/Membership";
import Team from "./Components/Aboutus/Team";
const App = () => {
  return (
    <>
      <Topnavbar />
      <Navbar />
      <Hero />
      <Home />
      <Team />
      {/* <Aboutus /> */}
      {/* <Slider /> */}
      {/* <Home /> */}
      <Gallery />
      {/* <Join /> */}
      <Membership />
      <Contact />
      <Footers />
    </>
  );
};

export default App;
