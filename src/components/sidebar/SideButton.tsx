import React from "react";
import { iconRef } from "../icon/iconRef";

type SideButtonProps = {
  openSideMenu: () => void;
};

const SideButton: React.FC<SideButtonProps> = ({ openSideMenu }) => {
  return (
    <div className="sm:hidden fixed z-30 right-5 top-5 w-full flex flex-row justify-end">
      <button
        onClick={openSideMenu}
        className="rounded-md transition-all text-sc-color-500 shadow-md bg-tr-color-500"
      >
        {iconRef["sidemenu"]}
      </button>
    </div>
  );
};

export default SideButton;
