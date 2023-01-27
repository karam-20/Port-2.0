import { motion } from "framer-motion";
import React from "react";
import about from "../images/about.jpg";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative top-4 text-center md:text-left h-screen md:flex-row md:space-x-2 max-w-6xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-8 md:top-16 uppercase tracking-[18px] text-gray-500 text-xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={about}
        alt="about-image"
        className="-mb-[50px] md:mb-0 flex-shrink-0 w-36 h-36 rounded-lg object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <motion.h4
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">Little</span>{" "}
          background
        </motion.h4>
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-base"
        >
          Welcome to my portfolio website! My name is Karampal Jangir, and I am
          a recent graduate with a degree in Electrical Engg.. I am a fresher
          developer eager to start my career in the tech industry. Throughout my
          studies, I have gained a strong foundation in{" "}
          <span className="underline decoration-[#f7ab0a]/50">
            HTML5, CSS3, Javascript, ReactJs, TailwindCSS, Git & Github, Nodejs,
            ExpressJs, MongoDB
          </span>{" "}
          .I am a quick learner and am always looking to improve my skills.
        </motion.p>
      </div>
    </motion.div>
  );
}
