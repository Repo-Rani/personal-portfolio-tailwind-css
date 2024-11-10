import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="pt-[5rem] w-[100%] pb-[3rem] bg-[#1E3E62]">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
          <div>
            <div className="font-logo text-white text-[18px]">
              <span className="text-[25px] md:text-[40px] xsm:text-4xl font-bold italic">
                Rani
              </span>
              <span className="text-lg xsm:text-base text-[#FF6500] italic font-bold">
                Creations
              </span>
            </div>
            <h1 className="text-[15px] mt-[0.5rem]  text-white">
              Thank you for visiting! I build responsive websites that elevate
              your online presence. Explore my work and reach out to create
              something extraordinary together!
            </h1>
            <p className="mt-[1.5rem] text-[#0B192C]  underline font-semibold cursor-pointer flex gap-2 hover:text-white">
              <FaEnvelope className="mt-1" /> ranimiss968@gmail.com
            </p>
          </div>
          <div className="md:mx-auto">
            <h1 className="text-white font-semibold mb-[1.4rem] text-[25px]">
              <i> Quick Links</i>
            </h1>
            <ul className="flex  flex-col justify-center gap-5 text-white">
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
              <li className="nav_link  hover:text[#FF6500]  transition-all duration-200 hover:scale-105">
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
          <div className="lg:mx-auto">
            <h1 className="text-white font-semibold mb-[1.4rem] text-[25px]">
              <i>Address</i>
            </h1>
            <div className="flex items-center mt-[1rem] space-x-2">
              <MapIcon className="w-[1.5rem] h-[2rem] text-[#0B192C]" />
              <p className="text-[17px] font-normal text-white opacity-75">
                North, karachi pakistan
              </p>
            </div>
            <div className="flex items-center mt-[1rem] space-x-2">
              <EnvelopeIcon className="w-[1.5rem] h-[2rem] text-[#0B192C]" />
              <p className="text-[17px] font-normal text-white opacity-75">
                ranimiss968@gmail.com
              </p>
            </div>
            <div className="flex items-center mt-[1rem] space-x-2">
              <PhoneIcon className="w-[1.5rem] h-[2rem] text-[#0B192C]" />
              <p className="text-[17px] font-normal text-white opacity-75">
                0302-2886058
              </p>
            </div>
            <div className="flex items-center mt-[4rem] ml-[2rem] space-x-5">
              <a
                href="https://github.com/Repo-Rani"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <FaGithub className="text-white h-6 w-6 hover:scale-125 cursor-pointer transition-all duration-300 hover:text-[#0B192C]" />
              </a>

              <a
                href="https://www.instagram.com/starry__rani/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FaInstagram className="text-white h-6 w-6 hover:scale-125 cursor-pointer transition-all duration-300 hover:text-[#0B192C] " />
              </a>
              <a
                href="https://www.linkedin.com/in/rani-miss-4baa712ba/"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <FaLinkedin className="text-white h-6 w-6 hover:scale-125 cursor-pointer transition-all duration-300 hover:text-[#0B192C] " />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100089698213012"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <FaFacebook className="text-white h-6 w-6 hover:scale-125 cursor-pointer transition-all duration-300 hover:text-[#0B192C] " />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[1.4rem] w-[80%] mx-auto text-white flex items-center justify-center opacity-70">
          &copy; {new Date().getFullYear()} RaniCreations | All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
