"use client";

import { ServiceProps } from "../../Types/type";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <Tilt className="shadow-2xl p-6 xl:p-6 lg:p-5 rounded-lg bg-[#1E3E62]">
      <Image src={service.icon} alt={service.title} width={50} height={50} />
      <h1 className="mt-4 xl:text-base text-lg font-bold text-gray-100 lg:text-base">
        {service.title}
      </h1>
      <p className="xl:mt-3 mt-3 lg:mt-2 text-sm text-white text-opacity-80">
        {service.description}
      </p>
    </Tilt>
  );
};

export default ServiceCard;
