import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import hero from "../images/hero.jpg";
import { NavLink } from "react-router-dom";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Karam", "Fitness Freak 🏋️", "<ButLovesToCode />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col -mb-4 items-center space-y-10 justify-center text-center overflow-hidden">
      <img
        className="relative rounded-full h-28 w-28 mx-auto object-cover"
        src={hero}
        alt="hero"
      />
      <div className="z-20">
        <h2 className="text-sm font-semibold uppercase text-gray-500 pb-5 tracking-[15px]">
          Frontend Developer
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-10">
          <a href="#about">
            <button className="hero-btn">About</button>
          </a>
          <a href="#experience">
            <button className="hero-btn">Experience</button>
          </a>
          <a href="#skills">
            <button className="hero-btn">Skills</button>
          </a>
          <a href="#projects">
            <button className="hero-btn">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}
