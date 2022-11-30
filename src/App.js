import React from "react";
// import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Topnavbar from "./Components/Navbar/Topnavbar";
import Footers from "./Components/Footer/Footers";
// import Gallery from "./Components/Gallery/Gallery";
// import Contact from "./Components/Contact/Contact";
// import Membership from "./Components/Membership/Membership";
// import Team from "./Components/Aboutus/Team";
// import About from "./Components/Aboutus/About";
// import Event from "./Components/Events/Event";
import MainEvents from "./Components/Events/MainEvents";
import MainGallery from "./Components/Gallery/MainGallery";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";

import Home from "./Home";
const App = () => {
  return (
    <>
      <Topnavbar />
      <Navbar />
      {/* <div className="w-[100%] max-w-[1200px] flex justify-around  items-center my-5 mx-auto">
        <div className="w-[150px] h-[50px] text-[#fff] text-[1rem] font-medium capitalize flex justify-center  items-center bg-sky-600   rounded mr-2 ">
          <NavLink to="/">back</NavLink>
        </div>
      </div> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/events" element={<MainEvents />} />
        <Route exact path="/gallery" element={<MainGallery />} />
      </Routes>
      <Footers />
      {/* <Topnavbar />
      <Navbar />
      <Hero />
      <About />
      <Event />
      <Team />
      <Gallery />
      <Membership />
      <Contact />
      <MainEvents />
      <MainGallery />
      <Footers /> */}
    </>
  );
};

export default App;
