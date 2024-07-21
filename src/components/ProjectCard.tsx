"use client";
import React from "react";
import { fugaz_one } from "@/app/fonts";
import EmblaCarousel from "@/components/carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import ItemStack from "@/components/stack/ItemStack";
import { Project } from "@/lib/interface/data.interface";
import { iconRef, IconRefType } from "@/components/icon/iconRef";
import { LuExternalLink } from "react-icons/lu";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

type ProjectCardProps = {
  data: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, description, website, repositorio, resources, stack } =
    props.data;
  const OPTIONS: EmblaOptionsType = { axis: "y", loop: true };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <article ref={ref}>
      <div
        className="grid grid-cols-12"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="col-span-12 xl:col-span-10 xl:col-start-2">
          <h4
            className={`${fugaz_one.className} text-center lg:text-start text-4xl mb-6 px-6 md:px-0 text-tr-color-500`}
          >
            {title}
          </h4>
        </div>
        <div className="col-span-12">
          <div className="flex flex-col">
            <div className="grid grid-cols-12 space-x-0 xl:space-x-6 px-5 xl:px-0">
              <div className="col-span-12 xl:col-span-7 xl:col-start-2">
                {resources.tag == "image" && (
                  <EmblaCarousel slides={resources.media} options={OPTIONS} />
                )}
                {resources.tag == "video" && (
                  <div className="flex justify-center rounded-3xl">
                    <video
                      width={310}
                      autoPlay
                      loop
                      muted
                      className="rounded-3xl shadow-sm"
                    >
                      <source src={resources.media[0]} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
              <div className="col-span-12 xl:col-span-3 xl:col-start-9 mt-6 xl:mt-0 bg-pr-color-100 rounded-lg shadow-sm">
                <div
                  className="flex flex-col py-8 px-10"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                  }}
                >
                  <div>
                    <p className="text-lg font-light text-justify text-black">
                      {description}
                    </p>
                  </div>
                  <div className="py-3">
                    <Link
                      href={repositorio}
                      className="font-bold inline-flex flex-row items-center text-black/75"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repositorio
                      <LuExternalLink size={18} className="text-black" />
                    </Link>
                  </div>
                  <div className="py-3">
                    <Link
                      href={website}
                      className="font-bold inline-flex flex-row items-center text-black/75"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website{" "}
                      <LuExternalLink size={18} className="text-black" />
                    </Link>
                  </div>
                  <div className="py-3 divide-y divide-gray-500/25">
                    <p className="font-bold inline text-black/75">Stack</p>
                    <div>
                      <div className="my-2 space-x-3 space-y-2">
                        {stack.map((stack, index) => (
                          <ItemStack
                            key={index}
                            color={stack.color}
                            icon={iconRef[stack.iconref as IconRefType]}
                            stack={stack.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
