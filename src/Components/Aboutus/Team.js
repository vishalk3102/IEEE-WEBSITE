import React from "react";
import Card from "../Aboutus/ProfileCard";
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
        <div className="flex flex-col justify-center items-center mt-5">
          <h4 className="text-[1.4rem] text-center p-4 mt-2 uppercase font-semibold">
            Counsellor
          </h4>
          <div className="mx-auto m-4 p-2">
            <Card name="Piyush Aggarwal" pos="assistant professor" pic={fa1} />
          </div>
        </div>
        <div className="mt-5">
          <h4 className="text-[1.4rem] text-center p-4 mt-4 mb-2 uppercase font-semibold">
            Core Members
          </h4>
          <div class="w-[70%] grid grid-cols-4 md:grid-cols-3 gap-5 mx-auto">
            <div className="mx-auto p-2 col-span-4 sm:col-span-2 md:col-span-1 ">
              <Card
                name="Piyush Aggarwal"
                pos="assistant professor"
                pic={fa1}
              />
            </div>
            <div className="mx-auto p-2 col-span-4 sm:col-span-2 md:col-span-1 ">
              <Card
                name="Piyush Aggarwal"
                pos="assistant professor"
                pic={fa1}
              />
            </div>
            <div className="mx-auto p-2 col-span-4 sm:col-span-2 md:col-span-1 ">
              <Card
                name="Piyush Aggarwal"
                pos="assistant professor"
                pic={fa1}
              />
            </div>
            <div className="mx-auto p-2 col-span-4 sm:col-span-2 md:col-span-1 ">
              <Card
                name="Piyush Aggarwal"
                pos="assistant professor"
                pic={fa1}
              />
            </div>
            <div className="mx-auto p-2 col-span-4 sm:col-span-2 md:col-span-1 ">
              <Card
                name="Piyush Aggarwal"
                pos="assistant professor"
                pic={fa1}
              />
            </div>
            <div className="mx-auto p-2 col-span-4 sm:col-span-2 md:col-span-1 ">
              <Card
                name="Piyush Aggarwal"
                pos="assistant professor"
                pic={fa1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
