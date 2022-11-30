import React from "react";
import EventCard from "./EventCard";
import EventData from "../Data/EventData";
import { NavLink } from "react-router-dom";

const Event = () => {
  return (
    <>
      <section id="event" className="max-w-[1200px] w-[100%] h-full mx-auto">
        <h2 className="text-5xl text-sky-600 font-bold text-center uppercase p-5 ">
          Events
        </h2>
        <p className="w-[90%] md:w-[75%] text-[#000] font-medium text-center mx-auto p-2 mb-2">
          {" "}
          We conducts a series of technical and non-technical events throughout
          the year consisting of all possible domains. We conduct these events
          for others to grow and for us to gain the opportunity to grow along as
          well. Few of the events we organise are:
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-y-10 my-10 ">
          {EventData.map((items) => {
            return (
              <>
                <div
                  key={items.id}
                  className=" col-span-3 sm:col-span-2  md:col-span-1 hover:cursor-pointer hover:scale-105 "
                >
                  <EventCard items={items} />
                </div>
              </>
            );
          })}
        </div>
        <div className="flex justify-center md:justify-end items-center my-5">
          <div className="w-[150px] h-[50px] text-[#fff] text-[1rem] font-medium capitalize flex justify-center  items-center bg-sky-600   rounded mr-2 ">
            <NavLink to="/events">See More</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
