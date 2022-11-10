import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function ProfileCard(props) {
  return (
    <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-sky-600 dark:border-gray-700 dark:hover:border-transparent">
      <img
        class="object-cover w-32 h-32 rounded-full ring-4"
        src={props.pic}
        alt=""
      />

      <h1 class="mt-4 text-2xl font-semibold text-center capitalize ">
        {props.name}
      </h1>

      <p class="mt-2 capitalize  pb-2">{props.pos}</p>
      <div className="flex justify-evenly  items-center my-1">
        <a
          href="https://www.instagram.com/vishal_k_31/"
          target="_blank"
          rel="noreferrer"
          className="p-2 m-1"
        >
          <BsGithub size={22} />
        </a>

        <a
          href="https://www.instagram.com/vishal_k_31/"
          target="_blank"
          rel="noreferrer"
          className="p-2 m-1"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://www.instagram.com/vishal_k_31/"
          target="_blank"
          rel="noreferrer"
          className="p-2 m-1"
        >
          <BsInstagram size={20} />
        </a>
      </div>
    </div>
  );
}
