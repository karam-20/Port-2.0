import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.3,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/karampal-jangir-440a241a2/"
          bgColor="transparent"
          fgColor="grey"
        />

        <SocialIcon
          url="https://github.com/karam-20"
          bgColor="transparent"
          fgColor="grey"
        />
        <SocialIcon
          url="https://www.instagram.com/ig_xzital/"
          bgColor="transparent"
          fgColor="grey"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.3,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <a href="#contact">
          <SocialIcon
            network="email"
            className="cursor-pointer"
            bgColor="transparent"
            fgColor="grey"
          />
          <p className="uppercase hidden md:inline-flex test-sm text-gray-400">
            get in touch
          </p>
        </a>
      </motion.div>
    </header>
  );
}
