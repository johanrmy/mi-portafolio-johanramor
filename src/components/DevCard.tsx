"use client";
import React from "react";
import { fugaz_one } from "@/app/fonts";
import { useRef } from "react";
import { useInView } from "framer-motion";

type DevCardProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  tools: string[];
};

const DevCard: React.FC<DevCardProps> = ({ icon, title, subtitle, tools }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="w-full flex flex-col py-2"
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      <div className="flex flex-row justify-center items-center p-2">
        <div
          className={`${
            icon ? "rounded-full border-2 p-2 border-hp-color-500" : "hidden"
          }`}
        >
          {icon}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <h3
          className={`${fugaz_one.className} text-3xl text-pr-color-500 text-center max-w-full xl:max-w-[66.6%] overflow-hidden text-ellipsis`}
        >
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-6 grid-rows-auto space-x-4 md:space-x-0">
        <div className="col-span-3 place-content-center md:col-span-6 lg:col-span-4 lg:col-start-2 lg:px-8 py-2">
          <div className="text-end md:text-center lg:text-start text-xl text-sc-color-500 overflow-hidden line-clamp-2">
            {subtitle}
          </div>
        </div>
        <div className="col-span-3 lg:col-span-4 md:col-span-6 lg:col-start-3 flex justify-start my-6 md:my-0 md:px-0 md:justify-center lg:justify-start">
          <ul className="md:text-justify md:ml-4 font-light">
            {tools.map((tool, index) => (
              <li key={index} className="text-base text-pr-color-500">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
