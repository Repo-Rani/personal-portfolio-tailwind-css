import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { servicesData } from "../../../Data/data";
import ServiceCard from "@/components/ServiceCard";

const Service = () => {
  return (
    <section className=" lg:h-[75rem] md:h-[90rem] xsm:h-[158rem] sm:h-[155rem] xs:h-[170rem] pt-16 bg-[#0B192C]">
      <SectionHeading>Services</SectionHeading>

      <div className="text-center max-w-2xl text-[#001f3f] mt-5 mx-auto w-[85%]">
        <h1
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-white font-bold mt-8 text-2xl"
        >
          Comprehensive Web Solutions
        </h1>
        <br />
        <p
          data-aos="fade-left"
          data-aos-delay="200"
          className="text-center  text-gray-500"
        >
          Designed to Elevate Your Online Presence. I create custom web
          solutions tailored to your brand, ensuring modern, responsive websites
          that exceed expectations and drive results. ⋆｡°✩
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20  mb-10">
        {servicesData.map((service, i) => {
          return (
            <div
              key={service.id}
              data-aos="fade-left"
              data-aos-anchorPlacement="top-center"
              data-aos-delay={`${i * 150}`}
            >
              <ServiceCard service={service} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
