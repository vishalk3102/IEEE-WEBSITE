import React from "react";
import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Topnavbar from "./Components/Navbar/Topnavbar";
import Join from "./Components/Membership/Join";
import Footer from "./Components/Footer/Footer";
import Aboutus from "./Components/Aboutus/Aboutus";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
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
      <Home />
      <Aboutus />
      <Join />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
