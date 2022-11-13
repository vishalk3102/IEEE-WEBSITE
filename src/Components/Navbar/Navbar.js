import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../../Assets/logo3.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    let menuHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", menuHandler);
    return () => {
      document.removeEventListener("mousedown", menuHandler);
    };
  });

  const handleMenuClick = () => {
    setNav(!nav);
  };
  const handleNavItemClick = () => {
    setNav(false);
  };

  return (
    <>
      <section
        id="navbar"
        className="h-20 w-[100%] max-w-[1200px] flex  justify-center items-center  mx-auto "
      >
        <div className="hidden md:flex">
          <ul className=" font-medium capitalize  flex justify-center items-center hover:cursor-pointer">
            <li className="text-[1rem] p-2 m-2 hover:cursor-pointer  hover:text-sky-900">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                delay={100}
              >
                Home
              </Link>
            </li>
            <li className="text-[1rem] p-2 m-2 hover:cursor-pointer  hover:text-sky-900">
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
            <li className="text-[1rem] p-2 m-2 hover:cursor-pointer  hover:text-sky-900">
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
            <li className="text-[1rem] p-2 m-2 hover:cursor-pointer  hover:text-sky-900">
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
            <li className="text-[1rem] p-2 m-2 hover:cursor-pointer  hover:text-sky-900">
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

        <div
          className="w-full flex justify-between items-center align-left md:hidden p-5"
          onClick={handleMenuClick}
        >
          <div className="w-[30%] h-[30%] md:hidden">
            <img src={logo} alt="" className="mx-auto  text-[#fff]" />
          </div>
          {!nav ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
        </div>
      </section>

      {/* MOBILE DEVICE CODE  */}
      <div
        ref={menuRef}
        className={
          !nav
            ? "fixed left-[-100%]"
            : "fixed z-10 top-0 left-0 w-[60%] h-full bg-black text-[#fff] ease-in-out duration-500"
        }
      >
        <div className="mt-16 flex flex-col justify-start  items-center">
          {/* <div className="w-full my-10 flex justify-end items-center p-5">
            <AiOutlineClose size={24} />
          </div> */}
          <ul className="font-medium capitalize   hover:cursor-pointer">
            <li className="text-[1rem] p-2 m-2 hover:cursor-pointer  hover:text-sky-900">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                delay={100}
                onClick={handleNavItemClick}
              >
                Home
              </Link>
            </li>
            <li className="text-[1rem] p-2 m-2 hover:cursor-pointer  hover:text-sky-900">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                delay={100}
                onClick={handleNavItemClick}
              >
                About us
              </Link>
            </li>
            <li className="text-[1rem] p-2 m-2 hover:cursor-pointer  hover:text-sky-900">
              <Link
                activeClass="active"
                to="event"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                delay={100}
                onClick={handleNavItemClick}
              >
                Events
              </Link>
            </li>
            <li className="text-[1rem] p-2 m-2 hover:cursor-pointer  hover:text-sky-900">
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                delay={100}
                onClick={handleNavItemClick}
              >
                Gallery
              </Link>
            </li>
            <li className="text-[1rem] p-2 m-2 hover:cursor-pointer  hover:text-sky-900">
              <Link
                activeClass="active"
                to="membership"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                delay={100}
                onClick={handleNavItemClick}
              >
                Membership
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
