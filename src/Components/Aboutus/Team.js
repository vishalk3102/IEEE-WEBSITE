import React from "react";
import Card from "../Aboutus/ProfileCard";
import FacultyCard from "../Aboutus/FacultyCard";
import fa1 from "../../Assets/fa1.jpg";

const Team = () => {
  return (
    <>
      <section className="w-full h-full max-w-[1200px] mx-auto my-10">
        <h2 className="text-5xl text-sky-600 font-bold text-center uppercase p-5 ">
          Team
        </h2>
        <p className="w-[90%] md:w-[60%] text-[#000] font-medium text-center mx-auto p-2 mb-2">
          {" "}
          Great things require great people. In our Executive Body, we have a
          set of smart and dedicated persons who makes great things possible in
          an open and collaborative environment.
        </p>
        <div className="w-[80%] grid grid-cols-2 md:grid-cols-4 mx-auto my-10">
          <div className=" col-span-2 flex flex-col justify-center items-center  md:items-end my-5">
            <h4 className="w-[260px] text-[1.4rem] text-center p-4 mx-4 mt-2 uppercase font-semibold">
              advisor
            </h4>
            <div className=" m-4 p-2 ">
              <FacultyCard name="Sachin sharma" pos="Professor" pic={fa1} />
            </div>
          </div>
          <div className=" col-span-2  md:col-span-2  flex flex-col justify-center items-center  md:items-start  my-5">
            <h4 className="w-[260px] text-[1.4rem] text-center p-4 mx-4 mt-2 uppercase font-semibold">
              Counsellor
            </h4>
            <div className="m-4 p-2">
              <FacultyCard
                name="Piyush Agarwal"
                pos="assistant professor"
                pic={fa1}
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="text-[1.4rem] text-center p-4 mt-4 mb-2 uppercase font-semibold">
            Core Members
          </h4>
          <div class="w-[80%] grid grid-cols-4 lg:grid-cols-3 gap-2 mx-auto">
            <div className="p-2 col-span-4 sm:col-span-2 lg:col-span-1 flex  justify-center md:justify-end lg:justify-end items-center">
              <Card
                name="Tanzeel Khan"
                pos="Chair"
                pic={fa1}
                github="https://github.com/tanzeyl"
                instagram="https://instagram.com/tanzzeyl?igshid=YmMyMTA2M2Y="
                linkedin="https://www.linkedin.com/in/tanzeyl"
              />
            </div>
            <div className="p-2 col-span-4 sm:col-span-2 lg:col-span-1  flex justify-center md:justify-start lg:justify-center items-center">
              <Card
                name="Sahil Gupta"
                pos="Secretary"
                pic={fa1}
                github="https://github.com/tanzeyl"
                instagram="https://instagram.com/tanzzeyl?igshid=YmMyMTA2M2Y="
                linkedin="https://www.linkedin.com/in/tanzeyl"
              />
            </div>
            <div className="p-2 col-span-4 sm:col-span-2 lg:col-span-1  flex justify-center md:justify-end lg:justify-start items-center">
              <Card
                name="Geetansh Verma"
                pos="Secretary"
                pic={fa1}
                github="https://github.com/GeeTansher"
                instagram="https://instagram.com/geetansher?igshid=YmMyMTA2M2Y="
                linkedin="https://www.linkedin.com/in/geetansh-verma-2b15901bb"
              />
            </div>
            <div className="p-2 lg:mt-4 col-span-4 sm:col-span-2 lg:col-span-1  flex  justify-center md:justify-start lg:justify-end items-center">
              <Card
                name="Vishal Kumar"
                pos="Webmaster"
                pic={fa1}
                github="https://github.com/vishalk3102"
                instagram="https://www.instagram.com/vishal_k_31/"
                linkedin="https://www.linkedin.com/in/vishalk3102/"
              />
            </div>
            <div className="p-2 lg:mt-4 col-span-4 sm:col-span-2 lg:col-span-1  flex justify-center md:justify-end lg:justify-center items-center">
              <Card
                name="Shrey Choudhary"
                pos="Management Head"
                pic={fa1}
                github="https://github.com/tanzeyl"
                instagram="https://instagram.com/tanzzeyl?igshid=YmMyMTA2M2Y="
                linkedin="https://www.linkedin.com/in/tanzeyl"
              />
            </div>
            <div className="p-2 lg:mt-4 col-span-4 sm:col-span-2 lg:col-span-1  flex justify-center md:justify-start lg:justify-start items-center">
              <Card
                name="Nikhil Soni"
                pos="Treasurer"
                pic={fa1}
                github="https://github.com/salvador001"
                instagram="https://instagram.com/tanzzeyl?igshid=YmMyMTA2M2Y="
                linkedin="https://www.linkedin.com/in/nikhil-soni-435b13217"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
