import ProjectCard from "@/components/ProjectCard";
import React from "react";

function Projects() {
  return (
    <>
      <h1 className=" text-4xl mb-6 text-purple-600 font-bold">Projects.</h1>
      <div className="flex gap-2">
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}

export default Projects;
