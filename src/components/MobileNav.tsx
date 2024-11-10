import React from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { navProps } from "../../Types/type";

export const MobileNav = ({ showNav, closeNav }: navProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      <div
        className={`fixed ${navOpen} trasnsfrom transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Nav Link */}
      <div
        className={`text-white ${navOpen} trasnsfrom transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0B192C] space-x-6 z-[10000]`}
      >
        <div className="flex items-center space-x-10">
          <ul className="flex  flex-col items-center justify-center gap-5 text-white">
            <li className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[20px]   hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
              <Link href="/">Home</Link>
            </li>
            <li className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white  sm:text-[20px]   hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
              <Link href="/about">About</Link>
            </li>
            <li className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white  sm:text-[20px]   hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
              <Link href="/service">Services</Link>
            </li>
            <li className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white  sm:text-[20px]   hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white  sm:text-[20px]   hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
              <Link href="/project">Projects</Link>
            </li>
            <li className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white  sm:text-[20px]  hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
              <Link href="/review">Reviews</Link>
            </li>
            <li className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white  sm:text-[20px]  hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
              <Link href="/blog">Blogs</Link>
            </li>

            <li className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white  sm:text-[20px]  hover:text-[#FF6500]  transition-all duration-200 hover:scale-105">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Close button */}
          <CgClose
            onClick={closeNav}
            className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6 text-white "
          />
        </div>
      </div>
    </div>
  );
};
