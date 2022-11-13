import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";

const Topnavbar = () => {
  return (
    <>
      <section
        id="navbar"
        className="h-15 w-[100%] border-solid border-black border-b-2"
      >
        <div className="  max-w-[1200px] flex  justify-evenly  items-center mx-auto ">
          <div className=" grid grid-cols-5 md:grid-cols-3 ">
            <div className=" col-span-1 flex justify-center items-center mx-2">
              <span className="p-2 m-1">
                <a
                  href="mailto:ieeegeu.studentbranch@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGmail size={20} color="#D44638" />
                </a>
              </span>
              <p className="text-[0.8rem] font-medium p-2 m-1 hidden md:block">
                <a
                  href="mailto:ieeegeu.studentbranch@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  ieeegeu.studentbranch@gmail.com
                </a>
              </p>
            </div>
            <div className="col-span-3 md:col-span-1">
              <ul className="flex justify-center items-center">
                <li className="p-2 m-1">
                  <a
                    href="https://www.instagram.com/ieee.geu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram size={20} color="#C13584" />
                  </a>
                </li>
                <li className="p-2 m-2">
                  <a
                    href="https://www.linkedin.com/in/ieee-geu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn size={20} color="#0A66C2" />
                  </a>
                </li>
                <li className="p-2 m-2">
                  <a
                    href="https://github.com/ieeegeu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={20} color="#000" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1  flex justify-center items-center mx-2">
              <span className="p-2 m-1">
                <IoCall size={20} color="#28D146" />
              </span>
              <p className="text-[0.8rem] font-medium p-2 m-1 hidden md:block">
                +91 9027522251
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topnavbar;
