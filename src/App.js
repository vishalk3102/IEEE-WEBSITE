import React from "react";
import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Topnavbar from "./Components/Navbar/Topnavbar";
<<<<<<< HEAD
import Join from "./Components/Membership/Join";
import Footer from "./Components/Footer/Footer";
import Aboutus from "./Components/Aboutus/Aboutus";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";

=======
import Join from "./Components/Membership/Join"
import Footer from "./Components/Footer/Footer"
import Aboutus from "./Components/Aboutus/Aboutus";
import Home from "./Components/Home/Home";
>>>>>>> 72495ebb29d3b8e5b11dbd9a08f62a3e76d35ba3
const App = () => {
  return (
    <>
      <Topnavbar />
      <Navbar />
      <Hero />
      <Aboutus />
      {/* <Slider /> */}
<<<<<<< HEAD
      {/* <Home /> */}
      <Gallery />
=======
      <Home />
      <Aboutus />
>>>>>>> 72495ebb29d3b8e5b11dbd9a08f62a3e76d35ba3
      <Join />
      <Footer />
    </>
  );
};

export default App;
