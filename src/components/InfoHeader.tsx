"use client";
import React from "react";
import { fugaz_one } from "@/app/fonts";
import data from "@lib/data.json";
import { motion } from "framer-motion";

type Props = {};

const InfoHeader: React.FC = (props: Props) => {
  const { name, career } = data.header.title;
  return (
    <div className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-5 xl:col-start-2">
      <div className="grid grid-cols-12 grid-rows-auto gap-4 py-8">
        <div className="lg:col-span-4 lg:col-start-3 col-span-12">
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "circInOut",
            }}
            className="text-sc-color-500 text-xl text-center lg:text-end"
          >
            ¡Hola! 👋 soy
          </motion.p>
        </div>
        <div className="lg:col-span-11 lg:col-start-2 col-span-12">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className={`sm:text-9xl text-center lg:text-end text-7xl bg-gradient-to-t from-pr-color-500 to-sc-color-500 bg-clip-text text-transparent ${fugaz_one.className}`}
          >
            {name}
          </motion.h1>
        </div>
        <div className="lg:col-span-8 lg:col-start-5 col-span-12 mb-0 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "circInOut",
            }}
            className="text-pr-color-500 text-xl text-center lg:text-end"
          >
            {career}
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
