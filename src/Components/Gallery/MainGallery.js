import React, { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import MainGalleryData from "../Data/MainGalleryData";

const MainGallery = () => {
  const [Items, setItems] = useState(MainGalleryData);

  const filterItems = (categoryItems) => {
    if (categoryItems === "all") {
      setItems(MainGalleryData);
    } else {
      const updatedItems = MainGalleryData.filter((curElems) => {
        return curElems.category === categoryItems;
      });
      setItems(updatedItems);
    }
  };

  return (
    <section className="max-w-[1200px] w-[100%] h-full mx-auto">
      <h2 className="text-5xl text-sky-600 font-bold text-center uppercase p-5 mt-5 mb-10 ">
        Gallery
      </h2>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[100%] h-[40px] md:h-[50px] flex  justify-center items-center ">
          <select
            name=""
            id=""
            className="w-[250px] md:w-[600px] h-[40px] md:h-[50px] text-center font-medium text-[1rem] md:text-[1.2rem] uppercase border-solid border-2 border-black"
            onChange={(e) => filterItems(e.target.value)}
          >
            <option
              value="all"
              className="text-center font-medium text-[1rem] md:text-[1.2rem] uppercase hover:cursor-pointer border-solid border-b-2 border-black p-3"
            >
              ALL
            </option>
            <option
              value="utsah"
              className="text-center font-medium text-[1rem] md:text-[1.2rem] uppercase hover:cursor-pointer border-solid border-b-2 border-black p-3"
            >
              Utsah
            </option>
            <option
              value="conclave"
              className="text-center font-medium text-[1rem] md:text-[1.2rem] uppercase hover:cursor-pointer border-solid border-b-2 border-black p-3"
            >
              Research conclave
            </option>
            <option
              value="expo"
              className="text-center font-medium text-[1rem] md:text-[1.2rem] uppercase hover:cursor-pointer border-solid border-b-2 border-black p-3"
            >
              Research Expo
            </option>
            <option
              value="kindle"
              className="text-center font-medium text-[1rem] md:text-[1.2rem] uppercase hover:cursor-pointer border-solid border-black p-3"
            >
              Kindle 1.0
            </option>
          </select>
        </div>
      </div>
      <div className="w-[100%] my-10 grid grid-cols-4">
        <div className="col-span-1">
          {Items.map((val, ind) => {
            return (
              <div key={val.id} className="p-2 block  col-span-1">
                <img src={val.imgSrc} alt={val.category} className="" />
              </div>
            );
          })}
        </div>
        <div className="col-span-2">
          {Items.map((val, ind) => {
            return (
              <div key={val.id} className="p-2 block  col-span-1">
                <img
                  src={val.imgSrc}
                  alt={val.category}
                  className=" w-[100%] h-[50%]"
                />
              </div>
            );
          })}
        </div>
        <div className="col-span-1">
          {Items.map((val, ind) => {
            return (
              <div key={val.id} className="p-2 block  col-span-1">
                <img src={val.imgSrc} alt={val.category} className="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainGallery;
