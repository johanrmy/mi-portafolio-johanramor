import React from "react";
import Navbar from "@/components/Navbar";
import Cartoon from "@/components/Cartoon";
import InfoHeader from "@/components/InfoHeader";
import Divider from "@/components/Divider";
import data from "@lib/data.json";

type Props = {};

const Header: React.FC = (props: Props) => {
  const { divider } = data;
  return (
    <>
      <div className="w-full min-h-screen flex flex-col mx-auto bg-tr-color-500">
        <div className="flex-1">
          <header>
            <div className="hidden sm:block fixed z-10 w-full bg-tr-color-500 border-b border-gray-800 shadow-sm">
              <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4 my-5 sm:my-10">
                  <Navbar />
                </div>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="hidden sm:grid grid-cols-12 gap-4 py-5 sm:py-10"></div>
              <div className="grid grid-cols-12 gap-4 lg:mt-8 mb-32 lg:mb-16 py-12">
                <InfoHeader />
                <Cartoon />
              </div>
            </div>
          </header>
        </div>
        <div>
          <Divider data={divider} color="light" site="header" />
        </div>
      </div>
    </>
  );
};

export default Header;
