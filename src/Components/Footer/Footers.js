import React from "react";
import { Link } from "react-scroll";
import geulogo from "../../Assets/geu-logo2.png";
import ieeelogo from "../../Assets/logo3.png";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";

const Footers = () => {
  return (
    <>
      <section className="w-[100%] h-[full] border-solid border-t-2 border-black">
        <div className="max-w-[1200px] w-[100%] grid grid-cols-6 mx-auto">
          <div className="col-span-6 sm:col-span-6  md:col-span-2 flex justify-center items-center">
            <div className="m-2">
              <img src={geulogo} alt="" className="h-[80px] w-[80px]" />
            </div>
            <div className="m-2">
              <img src={ieeelogo} alt="" className="h-[80px] w-[175px]" />
            </div>
          </div>
          <div className=" col-span-6 sm:col-span-6 md:col-span-1 flex flex-col justify-center items-center p-2">
            <h4 className="text-center text-[1.2rem] font-medium p-2 capitalize">
              Quick Links
            </h4>
            <ul className="text-[#000] text-[1rem] font-normal p-1 m-2 capitalize">
              <li className="text-center md:text-left">
                <Link
                  activeClass="active"
                  to="navbar"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  delay={100}
                >
                  Home
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  delay={100}
                >
                  About us
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link
                  activeClass="active"
                  to="event"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  delay={100}
                >
                  Events
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link
                  activeClass="active"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  delay={100}
                >
                  Gallery
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link
                  activeClass="active"
                  to="membership"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  delay={100}
                >
                  Membership
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-6 md:col-span-2 flex flex-col justify-start items-center px-16">
            <h4 className="text-[1.2rem] font-medium p-2 capitalize mx-5 my-2 pl-2">
              Contacts
            </h4>
            <ul className="flex flex-col justify-start items-start text-[#000] text-[1rem] font-normal p-1 mx-5 ">
              <li className="flex  justify-center items-center p-2">
                <span className="p-1 hover:cursor-pointer hover:scale-105">
                  <a
                    href="mailto:ieeegeu.studentbranch@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiGmail size={20} color="#D44638" />
                  </a>
                </span>
                <p className="pl-3 hover:cursor-pointer hover:scale-105">
                  <a
                    href="mailto:ieeegeu.studentbranch@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ieeegeu.studentbranch@gmail.com
                  </a>
                </p>
              </li>
              <li className="flex  justify-center items-center p-2 hover:cursor-pointer hover:scale-105">
                <span className="p-1">
                  <IoCall size={20} color="#28D146" />
                </span>
                <p className="pl-3">+91 8456483999</p>
              </li>
            </ul>
          </div>
          <div className=" col-span-6  sm:col-span-6 md:col-span-1">
            <h4 className="text-center text-[1.2rem] font-medium p-2 capitalize mx-5 my-2">
              Follow Us
            </h4>
            <ul className="flex justify-center items-center p-2 m-2">
              <li className=" p-2 m-1 hover:cursor-pointer hover:scale-105">
                <a
                  href="https://www.instagram.com/ieee.geu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram size={20} color="#C13584" />
                </a>
              </li>
              <li className=" p-2 m-1 hover:cursor-pointer hover:scale-105">
                <a
                  href="https://www.linkedin.com/in/ieee-geu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={20} color="#0A66C2" />
                </a>
              </li>
              <li className=" p-2 m-1 hover:cursor-pointer hover:scale-105">
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
        </div>
        <div className="border-solid border-t-2 border-black">
          <p className="text-[#000] text-[1rem] font-semibold text-center p-2 uppercase">
            Copyright@IEEE-2022
          </p>
        </div>
      </section>
    </>
  );
};

export default Footers;
