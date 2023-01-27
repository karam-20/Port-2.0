import React from "react";
import { HiPhone } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:jangirtechs3@gmail.com?subject=Hi&body=Hi, my name is ${formData.Name}. ${formData.Message} (${formData.Email})`;
  };
  return (
    <div className="relative mt-28 mb-20 flex flex-col text-center items-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto">
      <h3 className="uppercase tracking-[18px] text-gray-500 text-xl mb-16">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="font-semibold text-2xl">
          I have got just what you need. Let's Talk.
        </h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <HiPhone className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-base">+919672441704</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <IoMdMail className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-base">jangirtechs3@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <FaMapMarkerAlt className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-base">Rjit Boys Hostel Tekanpur.</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3.5 w-fit mx-auto"
        >
          <input
            {...register("Name")}
            className="contactinput"
            placeholder="Name"
            type="text"
          />

          <input
            {...register("Email")}
            className="contactinput"
            placeholder="Email"
            type="text"
          />
          <textarea
            {...register("Message")}
            className="contactinput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-4 px-8 rounded-md text-black font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
