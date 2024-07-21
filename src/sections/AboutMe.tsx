import React from "react";
import Title from "@/components/Title";
import DevCard from "@/components/DevCard";
import { iconRef, IconRefType } from "@/components/icon/iconRef";
import data from "@lib/data.json";

const About: React.FC = () => {
  const { title, developments } = data.aboutme;
  return (
    <div className="w-full mx-auto my-24 bg-pr-color-500">
      <section>
        <div className="container mx-auto">
          <Title id="acerca-de-mi">{title}</Title>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 p-4">
              <p className="text-center text-tr-color-500 text-lg whitespace-normal">
                Egresado de la carrera de Diseño y Desarrollo de Software,
                enfocado en el{" "}
                <span className="text-hp-color-500 font-bold">
                  desarrollo web
                </span>{" "}
                y{" "}
                <span className="text-hp-color-500 font-bold">
                  análisis de datos
                </span>{" "}
                con el objetivo de aplicar tanto mis habilidades académicas como
                personales.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 rounded-xl shadow-lg bg-tr-color-500 mx-4 sm:mx-0">
              <div className="grid grid-cols-12 auto-rows-auto divide-y divide-x-0 md:divide-y-0 md:divide-x divide-black/25 px-4 md:px-0 py-8">
                {developments.map((development, index) => (
                  <div className="col-span-12 md:col-span-4" key={index}>
                    <DevCard
                      icon={iconRef[development.iconref as IconRefType]}
                      title={development.title}
                      subtitle={development.tools_title}
                      tools={development.tools}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
