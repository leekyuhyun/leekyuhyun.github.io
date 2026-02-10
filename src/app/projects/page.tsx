import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "프로젝트 | 이규현",
  description: "웹 앱부터 개발자 도구까지, 제가 만든 프로젝트 모음입니다.",
};

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {"프로젝트"}
          </h1>
          <p className="text-base text-muted-foreground">
            {"제가 만들고 기여한 프로젝트 모음입니다."}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
