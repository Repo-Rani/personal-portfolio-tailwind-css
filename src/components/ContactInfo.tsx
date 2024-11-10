import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";
import { contactData } from "../../Data/data";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center md:ml-[8rem] xl:ml-0 lg:ml-[10rem] space-x-8">
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaPhone className="w-4 h-4 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Phone</h1>
          <h1 className="text-bse sm:text-lg text-white text-opacity-70">
            {contactData.phone}
          </h1>
        </div>
      </div>

      <div className="flex items-center  md:ml-[8rem] lg:ml-[10rem] xl:ml-0 space-x-8 mt-8 mb-8">
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaEnvelope className="w-4 h-4 md:h-7 textwhite" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">
            Email Address
          </h1>
          <h1 className="text-bse sm:text-lg text-white text-opacity-70">
            {contactData.email}
          </h1>
        </div>
      </div>

      <div className="flex items-center md:ml-[8rem] lg:ml-[10rem] xl:ml-0 space-x-8">
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaMap className="w-4 h-4 md:h-7 textwhite" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Address</h1>
          <h1 className="text-bse sm:text-lg text-white text-opacity-70">
            {contactData.address}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
