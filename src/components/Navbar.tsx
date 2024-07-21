"use client";
import React from "react";
import data from "@lib/data.json";
import { handleSmoothScroll } from "@/utils/scrollUtil";

const Navbar: React.FC = () => {
  const { sections } = data.page;
  return (
    <div className="hidden sm:block col-span-12 lg:col-span-6 lg:col-start-7">
      <nav className="flex justify-center">
        <ul className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-16 text-sc-color-500 font-bold text-xl transition-all">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                onClick={() => handleSmoothScroll(section.id)}
                className="cursor-pointer border-b-2 border-transparent hover:border-sc-color-500 transition-all duration-300"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
