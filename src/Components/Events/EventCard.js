import React from "react";

const EventCard = ({ items }) => {
  return (
    <div className="w-[70%] md:w-[90%] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[10px] mx-auto">
      <div className="mx-auto">
        <img src={items.imgSrc} alt="" className="scale-90 " />
      </div>
      <div className="text-center">
        <h3 className="text-[#000] font-medium text-[1.6rem] p-2">
          {items.title}
        </h3>
        <p className="text-[#000] font-normal text-[1rem] p-2 mb-4">
          {items.desc}
        </p>
        <div className="flex justify-center  items-center my-5">
          <div className="w-[150px] h-[40px] text-[#fff] text-[0.8rem] font-medium capitalize flex justify-center  items-center bg-sky-600   rounded mr-2 ">
            <a href={items.link} target="_blank" rel="noreferrer">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
