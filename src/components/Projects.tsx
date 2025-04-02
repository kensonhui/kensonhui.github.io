"use client";
import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Project } from "./data/projects";
import { motion } from "framer-motion";

interface ProjectsProps {
  title: string;
  subtitle: string;
  projects: Project[];
  className: string;
}

const Projects: React.FC<ProjectsProps> = ({
  title,
  subtitle,
  projects,
  className,
}) => {
  const [showAll, setShowAll] = useState(false);

  const projectItems = (showAll ? projects : projects.slice(0, 4)).map(
    (project) => ({
      title: project.name,
      description: project.description || "",
      link: project.url,
      image: project.imagePath,
      artist: project.artist,
      tags: project.tags || [],
    })
  );

  return (
    <div id="projects" className={`w-full max-w-7xl mx-auto ${className}`}>
      <div className="flex items-center justify-between mb-4 py-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>
      </div>
      <HoverEffect items={projectItems} />
      {projects.length > 4 && (
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 mx-auto block px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? "Show Less" : "Show More"}
        </motion.button>
      )}
    </div>
  );
};

export default Projects;
