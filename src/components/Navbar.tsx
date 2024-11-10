"use client";

import React from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Props } from "../../Types/type";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = ({ openNav }: Props) => {
  const [navBg, setnavBg] = useState(true);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setnavBg(true);
      }
      if (window.scrollY < 90) {
        setnavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.addEventListener("scroll", handler);
    };
  }, []);

  return (
    <header
      className={`fixed ${
        navBg ? "bg-[#1E3E62]" : "fixed"
      } h-[12vh] z-[10] w-full transition-all duration-200`}
    >
      <nav className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[90%] mx-auto">
        {/* Logo */}

        <h1 className="ml-[-6rem] xs:ml-0 sm:ml-0 font-bold text-5xl sm:text-3xl xs:text-3xl xsm:text-4xl text-white italic xl:text-5xl lg:text-4xl">
          Rani
          <span className="text-lg xsm:text-base sm:text-base xs:text-sm text-[#FF6500]">
            Creations
          </span>
        </h1>

        <div className="flex items-center space-x-8">
          <div className="hidden lg:flex items-center  space-x-8  ">
            <ul className="flex items-center justify-end xl:gap-5 gap-5 lg:gap-4  text-white">
              <li className="nav_link   hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
                <Link href="/">Home</Link>
              </li>
              <li className="nav_link   hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
                <Link href="/about">About</Link>
              </li>
              <li className="nav_link   hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
                <Link href="/service">Services</Link>
              </li>
              <li className="nav_link   hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
                <Link href="/skills">Skills</Link>
              </li>
              <li className="nav_link   hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
                <Link href="/project">Projects</Link>
              </li>
              <li className="nav_link  hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
                <Link href="/review">Reviews</Link>
              </li>
              <li className="nav_link  hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
                <Link href="/blog">Blogs</Link>
              </li>
              <li className="nav_link  hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Button */}
          <div className="flex items-center space-x-4 lg:space-x-3 ">
            <Link href="/contact">
              <button
                className="md:px-5 md:py-2 xl:px-5 xl:py-3 lg:px-4 lg:py-2  xl:mr-0 lg:-mr-5 text-[#1E3E62] font-bold sm:text-sm xs:text-sm text-sm bg-white xsm:px-3 xsm:py-2 sm:px-3 sm:py-2 xs:px-3 xs:py-2
             hover:bg-blue-800 hover:text-white hover:scale-110 transition-all duration-300 rounded-xl"
              >
                Hire Me
              </button>
            </Link>

            {/* Burger Menu */}

            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
