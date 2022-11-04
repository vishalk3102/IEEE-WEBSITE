import React from "react";
import Hero from "./Components/Home/Hero";
import Slider from "./Components/Home/Slider";
import Navbar from "./Components/Navbar/Navbar";
import Topnavbar from "./Components/Navbar/Topnavbar";
import Join from "./Components/Membership/Join";
import Footer from "./Components/Footer/Footer";
import Aboutus from "./Components/Aboutus/Aboutus";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";

const App = () => {
  return (
    <>
      <Topnavbar />
      <Navbar />
      <Hero />
      <Aboutus />
      {/* <Slider /> */}
      {/* <Home /> */}
      <Gallery />
      <Join />
      <Footer />
    </>
  );
};

export default App;
