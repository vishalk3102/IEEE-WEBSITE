import React from "react";
import GalleryData from "../Data/GalleryData";

const Gallery = () => {
  return (
    <>
      <section className="w-full h-full max-w-[1200px] mx-auto my-10">
        <h2 className="text-5xl text-sky-600 font-bold text-center p-5 my-5">
          Gallery
        </h2>
        <div className="w-[full] h-full grid grid-cols-4">
          {GalleryData.map((val, ind) => {
            return (
              <>
                <div
                  key={ind}
                  className="w-full h-full mx-auto p-2 m-2 col-span-4 sm:col-span-2 md:col-span-1 flex justify-center items-center"
                >
                  <img
                    src={val.imgSrc}
                    alt=""
                    className="w-[300px] h-[250px]"
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className="flex justify-center md:justify-end items-center my-5">
          <div className="w-[150px] h-[50px] text-[#fff] text-[1rem] font-medium capitalize flex justify-center  items-center bg-sky-600   rounded mr-2 ">
            <a href="./MainGallery.js">See More</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
