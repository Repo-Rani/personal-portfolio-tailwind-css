import SectionHeading from "@/components/SectionHeading";
import React from "react";
import { aboutInfo } from "../../../Data/data";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <section className="h-[70rem] xsm:h-[83rem] sm:h-[85rem] xl:h-[60rem] lg:h-[65rem] xs:h-[90rem] pt-16 pb-16 bg-[#0B192C]">
      {/* SectionHeading */}
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div data-aos="fade-left" data-aos-anchorPlacement="top-center">
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-[40px]  xl:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <br />

          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="font-bold italic text-white  md:text-center md:text-[1rem]  xsm:text-sm sm:text-base xl:text-[1rem] xl:text-left lg:text-left lg:text-[1rem]"
          >
            Blending creativity and technology in every project. 💡
          </p>
          <div className="mt-8 ml-0 xl:ml-[-10rem] lg:ml-[-10rem]">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center   md:ml-40 xl:text-left">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base xsm:text-sm md:text-lg xl:text-left font-bold text-gray-300 transition-all duration-200 hover:scale-105">
                Fronted Development
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center  md:ml-40 ">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base  xsm:text-sm md:text-lg font-bold text-gray-300 transition-all duration-200 hover:scale-105">
                Backend Development
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center   md:ml-40 ">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base  xsm:text-sm md:text-lg font-bold text-gray-300 transition-all duration-200 hover:scale-105">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
        {/* Stats Content */}
        <div
          data-aos="zoom-in"
          data-aos-anchorPlacement="top-center"
          data-aos-delay="150"
          className="grid grid-cols-2 gap-16 items-center lg:mx-auto "
        >
          {/* 1st */}
          <div>
            <Image
              src="/images/customer.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto transition-all duration-200 hover:scale-105 ease-linear"
            />
            <p className="mt-3 font-bold text-xl text-white lg:text-lg  sm:text-xs xsm:text-sm xl:text-xl text-center md:text-lg">
              {aboutInfo.client}
            </p>
            <p className="text-base   xsm:text-sm sm:text-xs lg:text-lg  xl:text-xl text-gray-400 text-center md:text-lg">
              Satisfied Customer
            </p>
          </div>
          {/* 2nd */}
          <div>
            <Image
              src="/images/experience.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto transition-all duration-200 hover:scale-110 ease-linear"
            />
            <p className="mt-3 font-bold text-xl text-white sm:text-xs xsm:text-sm xl:text-xl  lg:text-lg md:text-lg text-center">
              {aboutInfo.experience}
            </p>
            <p className="text-base   xsm:text-sm sm:text-xs text-gray-400 lg:text-lg  xl:text-xl md:text-lg text-center">
              Years Of Experience
            </p>
          </div>
          {/* 3rd */}
          <div>
            <Image
              src="/images/completed.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto transition-all duration-200 hover:scale-110 ease-linear"
            />
            <p className="mt-3 font-bold   sm:text-xs text-xl xl:text-xl  text-white lg:text-lg md:text-lg xsm:text-sm text-center">
              {aboutInfo.project}
            </p>
            <p className="text-base sm:text-xs  xsm:text-sm text-gray-400 lg:text-lg  xl:text-xl md:text-lg text-center">
              Completed Project
            </p>
          </div>
          {/* 4th */}
          <div>
            <Image
              src="/images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto transition-all duration-200 hover:scale-110 ease-linear"
            />
            <p className="mt-3 font-bold text-xl text-white xl:text-xl   sm:text-xs md:text-lg lg:text-lg  xsm:text-sm text-center">
              {aboutInfo.website}
            </p>
            <p className="text-base sm:text-xs xl:text-xl md:text-lg lg:text-lg xsm:text-sm text-gray-400 text-center">
              Website Launched
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
