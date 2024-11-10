import React from "react";
import { BaseInfo } from "../../Data/data";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] lg:h-[57rem] xl:h-[57rem] xxl:h-[57rem] md:h-[80rem] xsm:h-[72rem] sm:h-[70rem] xs:h-[70rem] bg-[#0B192C] overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="mt-[-4rem]">
            {/* Sub Heading */}

            <h1
              data-aos="fade-left"
              className="text-2xl xsm:text-2xl md:text-3xl xl:text-4xl xxl:text-4xl lg:text-3xl lg:text-left lg:-ml-7 mb-5 text-gray-300 font-semibold md:text-center xl:-ml-5 xl:text-left"
            >
              Hey I am
              <span className="text-2xl md:text-3xl xl:text-4xl lg:text-3xl  ml-3  mb-5 font-extrabold text-white md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]">
                {BaseInfo.name}
              </span>
            </h1>

            {/* Title */}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className=" text-bg text-3xl sm:text-4xl md:text-5xl lg:text-5xl lg:-ml-7 lg:text-left xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white md:text-center xl:text-left"
            >
              {BaseInfo.position}
            </h1>

            <TypingEffect data-aos="fade-right" data-aos-delay="100" />

            {/* Description */}

            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-6 xs:mt-4 text-sm md:text-base text-white text-opacity-60 lg:-ml-7"
            >
              Hello, I am{" "}
              <span className="font-extrabold italic text-white">Rani</span> !
              {BaseInfo.description}
            </p>
            <br />
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              className="font-bold italic text-white lg:-ml-7 xl:text-left xl:text-[1rem] md:text-center xsm:text-[14px] lg:text-left lg:text-[1rem] sm:text-base xs:text-sm"
            >
              Bringing ideas to life with each line of code. 💻
            </p>

            {/* Button */}
            <a
              href="/assets/Rani_Resume.pdf"
              download="Rani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                data-aos="zoom-in"
                data-aos-delay="300"
                className="md:px-6 md:py-2 px-5 py-1 lg:px-3  text-white font-semibold text-sm md:text-lg rounded-lg mt-8 bg-[#FF6500] hover:bg-[#1E3E62] hover:scale-110 transition-all duration-300 flex items-center lg:-ml-7 space-x-2 md:ml-48 xsm:ml-20 xsm:px-4 xsm:py-3 sm:px-4 sm:text-py-3 sm:ml-20 xs:px-4 xs:py-2"
              >
                <span>Download CV</span>
                <FaDownload />
              </button>
            </a>
          </div>

          {/* Image Content */}
          <div className="">
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="mx-auto md:w-[400px] lg:block rounded-[3rem] border-[3.5px] border-[#1E3E62] overflow-x-hidden xl:ml-25 xl:mb-0 lg:mb-20 xl:-mt-35 xl:-mr-8 lg:-mr-8"
            >
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={500}
                height={550}
                className="md:mx-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
