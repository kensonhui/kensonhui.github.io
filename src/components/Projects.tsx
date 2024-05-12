import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { projects } from "./data/projects";
import { ProjectShowcase } from "@/components/ProjectShowcase";

const Projects = () => {
  return (
    <div className="md:m-4 w-10/12 sm:w-[550px] md:w-[750px] lg:w-[864px] pb-24">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="text-sm text-muted-foreground">
            These are highlights of my favourite projects. Hope you enjoy!
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <ScrollArea className="">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 md:px-4 py-3 justify-center align-center items-center">
          {projects.map((project) => (
            <ProjectShowcase
              key={project.name}
              album={project}
              className="w-[350px] md:w-[350px]"
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
