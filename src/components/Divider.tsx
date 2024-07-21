"use client";
import React from "react";
import { fugaz_one } from "@/app/fonts";
import Hexagon from "@/components/polygon/Hexagon";
import Marquee from "react-fast-marquee";
import { Divider as DividerType } from "@/lib/interface/data.interface";
import { motion } from "framer-motion";

type DividerProps = {
  data: DividerType[];
  color?: "primary" | "light";
  site: "header" | "aboutme" | "projects" | "contact" | "footer";
};

enum bgDivider {
  primary = "bg-tr-color-500",
  light = "bg-pr-color-500",
}

enum textDivider {
  primary = "text-pr-color-500",
  light = "text-tr-color-500",
}

enum HexagonBgColor {
  primary = "light",
  light = "secondary",
}

const Divider: React.FC<DividerProps> = ({ data, color = "primary", site }) => {
  const HexagonBgColorClass = HexagonBgColor[color];
  const bgDividerClass = bgDivider[color];
  const textDividerClass = textDivider[color];
  const dataSelected = data.find((d) => d.site === site)?.datum || [];

  return (
    <div className={`w-full mx-auto ${bgDividerClass} overflow-hidden`}>
      <section>
        <div
          className={`${fugaz_one.className} w-full flex flex-row justify-center items-center whitespace-nowrap list-none text-2xl ${textDividerClass} py-10 border-b border-tr-color-500 border-opacity-30`}
        >
          <Marquee pauseOnHover={true} speed={60} className="overflow-y-hidden">
            {dataSelected.map((datum) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="inline-flex justify-between"
                key={datum.id}
              >
                <Hexagon
                  divider={true}
                  background={HexagonBgColorClass}
                  className="mx-12 md:mx-36"
                />
                <p className="uppercase">{datum.value}</p>
              </motion.div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Divider;
