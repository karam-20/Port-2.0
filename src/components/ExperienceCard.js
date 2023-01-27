import React from "react";
import exp1 from "../images/exp1.jpg";
import { motion } from "framer-motion";
export default function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg shadow-md md:shadow-lg flex-shrink-0 space-y-3 items-center w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#fff]/50 p-10 cursor-pointer transition-opacity duration-200 lg:flex-row lg:justify-evenly lg:space-x-4">
      <div>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="h-24 w-24 rounded-full xl:h-[130px] xl:w-[130px] object-cover object-center mb-4"
          src={exp1}
          alt="exp1"
        />
        <div className="px-0">
          <h4 className="text-3xl font-light">CEO of XZITAL</h4>
          <p className="font-bold text-xl mt-1">XZITAL</p>
          <div className="flex space-x-2 my-2">
            <img
              className="h-8 w-8 rounded-full"
              src="https://img.icons8.com/color/2x/html-5.png"
              alt="html"
            />
            <img
              className="h-8 w-8 rounded-full"
              src="https://img.icons8.com/color/2x/css3.png"
              alt="html"
            />
            <img
              className="h-8 w-8 rounded-full"
              src="https://img.icons8.com/color/2x/javascript.png"
              alt="html"
            />
            <img
              className="h-8 w-8 rounded-full"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/2x/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
              alt="html"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="uppercase py-3 text-gray-300 ml-5">since 2020</p>
        <ul className="list-disc space-y-1 ml-10 text-base w-[220px]">
          <li>Working on myself since 2020.</li>
          <li>Familiarity with the development environment.</li>
          <li>Created 10+ Projects.</li>
          <li>github/karam-20</li>
        </ul>
      </div>
    </article>
  );
}
