import React from "react";
import polygonStyles from "./polygon.module.css";

type HexagonProps = {
  divider?: boolean;
  background?: "light" | "primary" | "secondary";
  className?: string;
};

enum HexagonBgColor {
  light = "bg-pr-color-500",
  primary = "bg-sc-color-500",
  secondary = "bg-tr-color-500",
}

const Hexagon: React.FC<HexagonProps> = ({
  divider = false,
  background = "primary",
  className,
}) => {
  const backgroundColorClass = HexagonBgColor[background];

  return (
    <div
      className={`${
        polygonStyles.hexagon
      } ${backgroundColorClass} ${className} ${
        !divider
          ? "block w-[220px] h-[310px] sm:w-[340px] sm:h-[460px] lg:w-[300px] lg:h-[420px]"
          : "min-h-7 min-w-6"
      }`}
    ></div>
  );
};

export default Hexagon;
