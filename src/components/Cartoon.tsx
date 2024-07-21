"use client";
import React from "react";
import Image from "next/image";
import Hexagon from "@/components/polygon/Hexagon";
import data from "@lib/data.json";
import { motion } from "framer-motion";

const Cartoon: React.FC = () => {
  const { url, alt } = data.header.cartoon;
  return (
    <div className="col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-5 place-items-center flex justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, ease: "circInOut", duration: 0.3 }}
      >
        <Hexagon background="light" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, ease: "circInOut", duration: 0.5 }}
        className="flex absolute top-0 left-0 w-full h-full items-center justify-center pointer-events-none"
      >
        <Image
          src={url}
          alt={alt}
          width={3000}
          height={3000}
          priority={true}
          className="z-5 object-cover object-center lg:h-[600px]"
        />
      </motion.div>
    </div>
  );
};

export default Cartoon;
