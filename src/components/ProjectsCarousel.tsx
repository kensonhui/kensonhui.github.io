import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    name: "Our Slash Space",
    content: "Yipee",
  },
  {
    name: "Real-time Speech-to-Speech Translation",
    content: "This was really fun",
  },
];

const ProjectsCarousel = () => {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardHeader>{project.name}</CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    {project.content}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectsCarousel;
