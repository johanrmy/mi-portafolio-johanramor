import React from "react";
import Title from "@/components/Title";
import ProjectCard from "@/components/ProjectCard";
import Divider from "@components/Divider";
import data from "@lib/data.json";

type Props = {};

const Projects: React.FC = (props: Props) => {
  const { title, info, projects } = data.projects;
  const { divider } = data;
  return (
    <>
      <div className="w-full mx-auto my-24 bg-pr-color-500">
        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <Title id="proyectos">{title}</Title>
              </div>
              <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 p-4 mb-12">
                <p className="text-center text-tr-color-500 text-lg whitespace-normal">
                  {info}
                </p>
              </div>
              <div className="col-span-12 space-y-36">
                {projects.map((project, index) => (
                  <ProjectCard key={index} data={project} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Divider data={divider} site="projects" color="primary" />
    </>
  );
};

export default Projects;
