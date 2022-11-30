import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const FacultyCard = (props) => {
  return (
    <div class="w-[250px] flex flex-col items-center p-10 transition-colors duration-300 transform border  rounded-xl hover:border-transparent group hover:bg-sky-600 dark:border-gray-700 dark:hover:border-transparent">
      <img
        class="object-cover w-32 h-32 rounded-full ring-4"
        src={props.pic}
        alt=""
      />

      <h1 class="mt-4 text-[1.3rem] font-semibold text-center capitalize ">
        {props.name}
      </h1>

      <p class="mt-2 font-semibold capitalize  pb-2">{props.pos}</p>
      {/* <div className="flex justify-evenly  items-center my-1">
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className="p-2 m-1"
        >
          <BsGithub size={22} />
        </a>

        <a
          href={props.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-2 m-1"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href={props.instagram}
          target="_blank"
          rel="noreferrer"
          className="p-2 m-1"
        >
          <BsInstagram size={20} />
        </a>
      </div> */}
    </div>
  );
};

export default FacultyCard;
