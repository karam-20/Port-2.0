import React from "react";
import { motion } from "framer-motion";
export default function BackgroundCircle() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-64 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[340px] w-[340px] mt-64" />
      <div className="absolute border border-[#333333] rounded-full h-[550px] w-[550px] mt-64" />

      <div />
    </motion.div>
  );
}
