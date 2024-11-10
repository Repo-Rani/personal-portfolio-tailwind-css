import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "../../../Data/data";
import SkillCard from "@/components/SkillCard";

const Skill = () => {
  return (
    <section className=" h-full pt-16 pb-16 bg-[#0B192C]">
      <SectionHeading>My Skills</SectionHeading>
      <div className=" w-[80%] mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill, i) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-anchorPlacement="top-center"
              data-aos-delay={`${i * 150}`}
              key={skill.id}
            >
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
