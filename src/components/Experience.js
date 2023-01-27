import React from "react";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className="h-screen flex relative top-4 overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-32 md:top-32 uppercase tracking-[18px] text-gray-500 text-xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-32 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <ExperienceCard />
      </div>
    </div>
  );
}
