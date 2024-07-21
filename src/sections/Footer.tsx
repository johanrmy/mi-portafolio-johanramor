"use client";
import React from "react";
import { iconRef, IconRefType } from "@/components/icon/iconRef";
import { fugaz_one } from "@/app/fonts";
import data from "@lib/data.json";
import { handleSmoothScroll } from "@/utils/scrollUtil";
import Link from "next/link";

type Props = {};

const Footer: React.FC = (props: Props) => {
  const { sections, socialmedia } = data.page;
  return (
    <div className="w-full mx-auto bg-pr-color-500">
      <footer>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around space-y-6 lg:space-y-0 border-t border-tr-color-500 border-opacity-30 py-6 px-12">
          <div>
            <h2
              className={`${fugaz_one.className} text-tr-color-500 text-3xl mx-10 text-center`}
            >
              <span>Johan</span>
              <br />
              <span>Ramos</span>
            </h2>
          </div>
          <div>
            <ul className="flex flex-row justify-center space-x-5 text-tr-color-500">
              {socialmedia.map((social) => (
                <li key={social.id}>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {iconRef[social.smref as IconRefType]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 text-tr-color-500 place-items-center text-lg font-bold">
              <div className="col-start-1 row-start-1">
                <Link href="/">Inicio</Link>
              </div>
              <div className="col-start-2 row-start-1">
                <a
                  className="cursor-pointer"
                  onClick={() => handleSmoothScroll(sections[1].id)}
                >
                  {sections[1].name}
                </a>
              </div>
              <div className="col-start-1 row-start-2">
                <a
                  className="cursor-pointer"
                  onClick={() => handleSmoothScroll(sections[0].id)}
                >
                  {sections[0].name}
                </a>
              </div>
              <div className="col-start-2 row-start-2">
                <a
                  className="cursor-pointer"
                  onClick={() => handleSmoothScroll(sections[2].id)}
                >
                  {sections[2].name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
