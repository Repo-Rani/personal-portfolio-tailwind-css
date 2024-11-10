import React from "react";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { blogs } from "../../../Data/data";

const Blog = () => {
  return (
    <section className="pt-16 pb-16  xl:h-[60rem] lg:h-[90rem] bg-[#0B192C]">
      <SectionHeading>Our Blog</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">
        {blogs.map((blog, i) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-anchorPlacement="top-center"
              data-aos-delay={`${i * 150}`}
              key={blog.id}
            >
              <BlogCard blog={blog} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
