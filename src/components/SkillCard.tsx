import React from "react";
import { skillProps } from "../../Types/type";
import Image from "next/image";

const SkillCard = ({ skill }: skillProps) => {
  const { image, percent, title } = skill;
  return (
    <div className="p-6 border-[3.5px] border-[#1E3E62]  hover:bg-[#1e3e62] duration-300 transition-all hover:scale-110 ease-linear cursor-pointer text-center rounded-lg bg-gray-900">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-4 text-white font-[600]">{title}</h1>
      <div className=" bg-black mt-4 rounded-lg p-2 text-white opacity-40">
        {percent}
      </div>
    </div>
  );
};

export default SkillCard;
