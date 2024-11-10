import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { projectData } from "../../../Data/data";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <section className="pt-16 pb-16 bg-[#0B192C]">
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols1 lg:grid-cols-2 gap-12 items-center">
        {projectData.map((project, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchorPlacement="top-center"
              data-aos-delay={`${i * 150}`}
              key={project.id}
              className="bg-[#1e3e62] p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link href={project.url} target="_blank" passHref>
                <div className="relative w-full h-96">
                  <Image
                    src={project.image}
                    alt="project"
                    layout="fill"
                    className="object-cover rounded-lg"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
