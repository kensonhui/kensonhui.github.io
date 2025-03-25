import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Project } from "./data/projects";

interface ProjectsProps {
  title: string;
  subtitle: string;
  projects: Project[];
  projectWidth: string;
  className: string;
}

const Projects: React.FC<ProjectsProps> = ({
  title,
  subtitle,
  projects,
  className,
}) => {
  return (
    <div
      className={`md:m-4 w-10/12 sm:w-[550px] md:w-[864px] lg:w-[964px] pb-24 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <Separator className="my-4" />
      <ScrollArea className="">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0 py-4 justify-center align-center items-center md:items-start">
          {projects.map((project) => (
            <ProjectShowcase
              key={project.name}
              album={project}
              className="w-[300px] xs:w-[350px]"
              aspectRatio="portrait"
              width={350}
              height={330}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Projects;
