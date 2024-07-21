"use client";
import React, { useRef } from "react";
import { fugaz_one } from "@/app/fonts";
import { useInView } from "framer-motion";

type TitleProps = {
  children: React.ReactNode;
  color?: "primary" | "light";
  size?: "small" | "normal";
} & React.HTMLAttributes<HTMLHeadingElement>;

enum colorTitle {
  primary = "bg-gradient-to-b from-tr-color-500 via-tr-color-500 to-sc-color-500 bg-clip-text text-transparent",
  light = "bg-gradient-to-t from-pr-color-500 to-sc-color-500 bg-clip-text text-transparent",
}

const Title: React.FC<TitleProps> = ({
  children,
  color = "primary",
  size = "normal",
  className,
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const colorTitleClass = colorTitle[color];
  return (
    <div className="overflow-hidden">
      <h2
        ref={ref}
        className={`${fugaz_one.className} ${colorTitleClass} text-center ${
          size === "normal" ? "text-5xl sm:text-6xl" : "text-3xl sm:text-2xl"
        } ${className}`}
        style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        {...rest}
      >
        {children}
      </h2>
    </div>
  );
};

export default Title;
