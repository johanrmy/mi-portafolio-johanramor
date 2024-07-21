import React from "react";

type ItemStackProps = {
  icon: React.ReactNode;
  color: string;
  stack: string;
};

const ItemStack: React.FC<ItemStackProps> = ({ icon, color, stack }) => {
  const borderColorStyle = { borderColor: color };
  const backgroundColorStyle = { backgroundColor: `${color}26` };
  const colorStyle = { color: color };

  return (
    <div
      className="border-2 rounded-xl cursor-pointer inline-flex flex-row items-center font-medium text-lg px-3"
      style={{ ...borderColorStyle, ...backgroundColorStyle }}
    >
      <div className="inline-block" style={colorStyle}>
        {icon}
      </div>
      <span className="inline-block" style={colorStyle}>
        {stack}
      </span>
    </div>
  );
};

export default ItemStack;
