"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import SideButton from "@components/sidebar/SideButton";
import { handleSmoothScroll } from "@/utils/scrollUtil";
import data from "@lib/data.json";

export const Sidebar = () => {
  const { sections } = data.page;
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };
  const openSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  return (
    <div>
      <SideButton openSideMenu={openSideMenu} />
      <nav
        className={`block sm:hidden fixed py-5 px-8 right-0 top-0 w-full h-screen bg-pr-color-500 z-50 shadow-2xl transform transition-all duration-300 ${
          !isSideMenuOpen ? "translate-x-full" : ""
        }`}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer text-tr-color-500"
          onClick={closeSideMenu}
        />

        {sections.map((section) => (
          <a
            key={section.id}
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all cursor-pointer text-tr-color-500"
            onClick={() => handleSmoothScroll(section.id, closeSideMenu)}
          >
            <span className="ml-3 text-xl">{section.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
