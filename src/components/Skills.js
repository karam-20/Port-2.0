import React from "react";

import { motion } from "framer-motion";
import { skillc } from "./skill-content";
export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center items-center mx-auto xl:space-y-0"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[18px] text-gray-500 text-xl">
        Skills
      </h3>
      <h3 className="absolute top-28 uppercase tracking-[8px] text-xs mt-2 xl:mt-8">
        Hover over a skill for profieciency
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 md:gap-10 gap-7 mt-2 xl:mt-5">
        {skillc.map((curElem, index) => {
          return (
            <motion.div
              key={index}
              className="group relative flex cursor-pointer"
            >
              <motion.img
                src={curElem.logo}
                alt="html-logo"
                className="rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-24 xl:h-24 md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
              />

              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-24 md:h-24 xl:w-24 xl:h-24 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                  <p className="text-xl font-bold">{curElem.prof}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
