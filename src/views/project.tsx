"use client";

import { CV_DATA } from "@/components/introduce/introduceData";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectCard from "@/components/project/ProjectCard";

export default function ProjectView() {
  const projects = CV_DATA.projects || [];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-20 font-sans">
      <ProjectHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
