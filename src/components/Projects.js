import React from "react";
import { project } from "./project-content";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-28 md:top-24 uppercase tracking-[18px] text-gray-500 text-xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {project.map((curElem, index) => {
          return (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 p-16 md:p-44 h-screen"
            >
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-[400px]"
                src={curElem.image}
                alt=" "
              />
              <div className="space-y-3 max-w-4xl">
                <h4
                  className={`text-2xl font-semibold tracking-widest text-center outline-none border-b-[#f7ab0a]`}
                >
                  {curElem.name}
                </h4>
                <div className="border-2 border-t-[#f7ab0a]"></div>
                <p className="text-base text-center md:text-left">
                  {curElem.desc}
                </p>
              </div>
              <a
                href={curElem.github}
                className={`px-6 py-2 rounded-md border border-[black]`}
              >
                <div className="flex items-center gap-2">
                  <AiFillGithub size={25} />
                  <p className="text-base font-medium">Github</p>
                </div>
                <div></div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[370px] -skew-y-12"></div>
    </div>
  );
}
