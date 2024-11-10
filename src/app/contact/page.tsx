"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import SectionHeading from "@/components/SectionHeading";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      // AOS initialize
      duration: 1000,
      once: true,
    });
    AOS.refresh(); // Refresh
  }, []);
  return (
    <section className="pt-16 pb-16  xl:h-[70rem] lg:h-[85rem] bg-[#050709]">
      <SectionHeading>For Contact</SectionHeading>

      <div className="grid grid-col-1  xl:grid-cols-2  w-[90%] sm:w-[80%] mx-auto items-center gap-20 mt-10">
        {/* Contact Form */}
        <div data-aos="fade-left" data-aos-anchorPlacement="top-center">
          <ContactForm />
        </div>
        {/* Contact Info */}
        <div
          data-aos="fade-right"
          data-aos-anchorPlacement="top-center"
          data-aos-delay="100"
          className="xl:mx-auto"
        >
          <ContactInfo />{" "}
        </div>
      </div>
    </section>
  );
};

export default Contact;
