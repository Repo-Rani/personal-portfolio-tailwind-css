import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#0B192C] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Lets Work Togather
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Have a project in mind or need assistance? Lets connect! I am here to
        listen, collaborate, and bring your ideas to life. Reach out, and
        together, we can create something impactful!
      </p>
      {/* Input Field */}
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />

          <input
            type="text"
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div>
          <select className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none">
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="frontend">Fronted Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">FullStack Development</option>
          </select>
        </div>
        <textarea
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Message"
        ></textarea>
        <div className="mt-4">
          <button className="px-5 py-3 sm:px-3 sm:py-2 sm:text-sm  sm:ml-10 xs:ml-12 xs:px-3 xs:py-2 xs:text-xs ml-4 bg-[#FF6500] text-white rounded-xl hover:bg-[#ff802b] hover:scale-105 ease-linear transition-all duration-150">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
