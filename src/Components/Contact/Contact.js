import React from "react";
import { IoCall, IoLocation } from "react-icons/io5";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-full max-w-[1200px] mx-auto my-20"
    >
      <h2 className="text-5xl text-sky-600 font-bold text-center p-5 my-5 uppercase">
        Contact Us
      </h2>
      <div className="grid grid-cols-2">
        <div className="w-[90%] md:w-[100%]  col-span-2 sm:col-span-1 md:col-span-1  p-5 flex justify-center items-center  mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.9214425376267!2d77.99256466494904!3d30.267819431801573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b9451ae8dfd%3A0xf39c46d34a152faa!2sGraphic%20Era%20(Deemed%20to%20be%20University)!5e0!3m2!1sen!2sin!4v1667836037944!5m2!1sen!2sin"
            title="map"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-1 m-5 p-5 flex flex-col justify-center items-start">
          <div className="flex justify-start items-center  p-4 m-2 hover:cursor-pointer hover:scale-105">
            <span>
              <IoLocation size={24} color="#D44638" />
            </span>
            <p className=" font-medium pl-2 ml-3">
              566/6, Bell Road, Society Area, Clement Town,Dehradun, Uttarakhand
              248002
            </p>
          </div>
          <div className="flex justify-start items-center  p-4 m-2 hover:cursor-pointer hover:scale-105">
            <span>
              <IoCall size={24} color="#28D146" />
            </span>
            <p className=" font-medium pl-2 ml-3">+91 8459126643</p>
          </div>
          <div className="flex justify-start items-center  p-4 m-2 hover:cursor-pointer hover:scale-105">
            <span>
              <a
                href="mailto:ieeegeu.studentbranch@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail size={24} color="#D44638" />
              </a>
            </span>
            <p className=" font-medium pl-2 ml-3 hover:cursor-pointer hover:scale-105">
              <a
                href="mailto:ieeegeu.studentbranch@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                ieeegeu.studentbranch@gmail.com
              </a>
            </p>
          </div>
          <div className="flex justify-start items-center m-2">
            <div className="p-4 m-2 hover:cursor-pointer hover:scale-105">
              <a
                href="https://www.instagram.com/ieee.geu/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram size={24} color="#C13584" />
              </a>
            </div>
            <div className="p-4 m-2 hover:cursor-pointer hover:scale-105">
              <a
                href="https://www.linkedin.com/in/ieee-geu/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={24} color="#0A66C2" />
              </a>
            </div>
            <div className="p-4 m-2 hover:cursor-pointer hover:scale-105">
              <a
                href="https://github.com/ieeegeu"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={24} color="#000" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
