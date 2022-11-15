import React from "react";
import { NavLink } from "react-router-dom";
import sliderimg2 from "../../Assets/sliderimg2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-[100%] h-full max-w-[1200px] mx-auto my-20"
    >
      <div className="grid grid-cols-2 text-left sm:text-center md:text-left">
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-[2.8rem] md:text-[3.5rem] font-bold text-center md:text-left pl-4">
            IEEE-GEU
          </h1>
          <h1 className="text-[2.8rem] md:text-[3.5rem] font-bold capitalize text-sky-600 text-center md:text-left pl-4">
            student chapter
          </h1>
          <p className="w-[90%] md:w-[90%] text-[1rem] text-center md:text-left md:text-[1.2rem] text-black mx-auto md:mx-0 py-5 pl-4">
            IEEE which stands for Institute of Electrical and Electronics
            Engineering is the world's largest technical professional
            organization dedicated to advancing technology for the benefit of
            humanity. It helps involve students and professionals within
            technical and local communities.
          </p>
          <div className="flex justify-center md:justify-start  items-center my-5 py-3 pl-4">
            <div className="w-[180px] h-[60px] text-[#fff] text-[1rem] font-medium capitalize flex justify-center  items-center bg-sky-600   rounded mr-2 hover:cursor-pointer">
              <NavLink to="/events">Find Events</NavLink>
            </div>
            <div className="w-[180px] h-[60px] text-sky-600 text-[1rem] font-medium capitalize flex justify-center  items-center bg-sky-100   rounded mr-2 hover:cursor-pointer">
              <NavLink to="/gallery">Join IEEE</NavLink>
            </div>
          </div>
        </div>
        <div className="hidden sm:hidden md:flex md:justify-center md:items-center col-span-2 md:col-span-1 w-[100%] full h-[100%]  p-5">
          <img src={sliderimg2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
