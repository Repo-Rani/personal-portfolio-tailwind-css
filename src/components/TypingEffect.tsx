"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
const TypingEffect = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          "A Fullstack Developer",
          1000,
          "A UI/UX Designer",
          1000,
          "A Creative Technologist",
          1000,
          "A Programmar",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="text-[30px] sm:text-[20px] xs:text-[20px] md:text-[28px] lg:text-[30px] xl:text-[30px] font-medium leading-[41px] lg:-ml-7 xl:-ml-4 lg:leading-[3.6rem] md:leading-[3.6rem] xl:leading-[3.6rem] text-white text-center lg:text-center ml-[10px]  md:ml-36"
        repeat={Infinity}
      />
    </>
  );
};

export default TypingEffect;
