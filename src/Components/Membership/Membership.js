import React from "react";
import { BsArrowRight } from "react-icons/bs";
import MembershipData from "../Data/MembershipData";

const Membership = () => {
  return (
    <section className="max-w-[1200px] w-[100%] h-full mx-auto my-10">
      <h2 className="text-5xl text-sky-600 font-bold text-center p-5 my-5">
        Membership
      </h2>
      <div className="w-[80%] grid grid-cols-2 gap-5 mx-auto">
        {MembershipData.map((val, ind) => {
          return (
            <>
              <div className="col-span-2 md:col-span-1 p-5">
                <div className="w-[90%] md:w-[80%] h-[100%]  mx-auto border-solid border-[1px] border-black rounded-[12px]">
                  <h3 className="text-[1.4rem] font-medium text-center p-4 uppercase mt-5">
                    {val.title}
                  </h3>
                  <ul className="text-[1rem] font-normal pt-3 pb-10">
                    <li className="flex justify-start items-center p-2 my-6 mx-4">
                      <span className="p-2 m-1">
                        <BsArrowRight size={20} />
                      </span>
                      {val.desc1}
                    </li>
                    <li className="flex justify-start items-center p-2 my-6 mx-4">
                      <span className="p-2 m-1">
                        <BsArrowRight size={20} />
                      </span>
                      {val.desc2}
                    </li>
                    <li className="flex justify-start items-center p-2 my-6 mx-4">
                      <span className="p-2 m-1">
                        <BsArrowRight size={20} />
                      </span>
                      {val.desc3}
                    </li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex justify-center items-center my-5">
        <div className="w-[150px] h-[50px] text-[#fff] text-[1rem] font-medium capitalize flex justify-center  items-center bg-sky-600   rounded mr-2 ">
          <a href="./MainGallery.js">Join Us</a>
        </div>
      </div>
    </section>
  );
};

export default Membership;