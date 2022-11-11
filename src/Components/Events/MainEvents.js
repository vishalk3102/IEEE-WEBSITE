import React, { useState } from "react";
import EventCard from "./EventCard";
import MainEventData from "../Data/MainEventData";

const MainEvents = () => {
  const [Menu, setMenu] = useState(MainEventData);

  const filterEvents = (categoryItems) => {
    const updatedItems = MainEventData.filter((curElem) => {
      return curElem.category === categoryItems;
    });
    setMenu(updatedItems);
  };
  return (
    <section className="max-w-[1200px] w-[100%] h-full mx-auto">
      <h2 className="text-5xl text-sky-600 font-bold text-center uppercase p-5 mt-5 mb-10 ">
        Events
      </h2>
      <div className="grid grid-cols-3">
        <button
          className="col-span-1 text-[1rem] font-medium capitalize text-center border-solid border-2 border-black p-3 ml-5 hover:cursor-pointer"
          onClick={() => setMenu(MainEventData)}
        >
          All events
        </button>
        <button
          className="col-span-1 text-[1rem] font-medium capitalize text-center border-solid border-2 border-black p-3 hover:cursor-pointer"
          onClick={() => filterEvents("past")}
        >
          Past Events
        </button>
        <button
          className="col-span-1 text-[1rem] font-medium capitalize text-center border-solid border-2 border-black p-3 mr-5 hover:cursor-pointer"
          onClick={() => filterEvents("upcomming")}
        >
          {" "}
          Upcoming Events
        </button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-y-10 my-10 ">
        {Menu.map((items) => {
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
    </section>
  );
};

export default MainEvents;
