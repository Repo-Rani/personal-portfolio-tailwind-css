import React from "react";
import SectionHeading from "@/components/SectionHeading";
import ReviewSlider from "@/components/ReviewSlider";

const Review = () => {
  return (
    <section className="pt-16 pb-16 h-[57rem] bg-[#0B192C]">
      <SectionHeading>Client Reviews</SectionHeading>
      <div className="w-[90%] sm-w-[80%] mx-auto mt-20">
        {/* Slider */}
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Review;
