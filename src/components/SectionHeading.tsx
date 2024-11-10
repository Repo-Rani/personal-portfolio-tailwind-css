import React from "react";
import { aboutProps } from "../../Types/type";

const SectionHeading = ({ children }: aboutProps) => {
  return (
    <h1 className="bg-[#FF6500] w-fit text-center px-4 py-3 mt-20  mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6 hover:rotate-0 transition-transform duration-300">
      {children}
    </h1>
  );
};

export default SectionHeading;
