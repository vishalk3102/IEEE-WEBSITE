import React from "react";
import { BsArrowRight } from "react-icons/bs";
import MembershipData from "../Data/MembershipData";

const Membership = () => {
  return (
    <section
      id="membership"
      className="max-w-[1200px] w-[100%] h-full mx-auto my-10"
    >
      <h2 className="text-5xl text-sky-600 font-bold text-center p-4 uppercase">
        Membership
      </h2>
      <p className="text-[#000] font-medium text-center mx-auto p-2 mb-2">
        {" "}
        Come, be a part of the legacy and make technology better!
      </p>

      <div className="w-[70%] grid grid-cols-2 gap-5 mx-auto mt-5">
        {MembershipData.map((val, ind) => {
          return (
            <>
              <div key={val.id} className="col-span-2 md:col-span-1 p-5">
                <div className="w-[100%] md:w-[90%] h-[100%]  mx-auto border-solid border-[1px] border-black rounded-[12px]">
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
