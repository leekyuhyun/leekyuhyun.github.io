"use client";

import Profile from "@/components/introduce/Profile";
import TechStack from "@/components/introduce/TechStack";
import Education from "@/components/introduce/Education";
import Awards from "@/components/introduce/Awards";
import Project from "@/components/introduce/Project";

const SidebarSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="flex flex-col gap-4">
    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sky-500 dark:text-amber-400 border-b border-zinc-100 dark:border-zinc-800 pb-2">
      {title}
    </h3>
    {children}
  </section>
);

export default function IntroduceView() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-16 font-sans">
      <Profile />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-zinc-100 dark:border-zinc-800 pt-10">
        <div className="md:col-span-4 flex flex-col gap-14">
          <SidebarSection title="Awards">
            <Awards />
          </SidebarSection>

          <SidebarSection title="Education">
            <Education />
          </SidebarSection>

          <SidebarSection title="Tech Stacks">
            <TechStack />
          </SidebarSection>
        </div>

        <div className="md:col-span-8 flex flex-col gap-8">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sky-500 dark:text-amber-400 border-b border-zinc-100 dark:border-zinc-800 pb-2">
            Projects
          </h3>
          <Project />
        </div>
      </div>
    </div>
  );
}
