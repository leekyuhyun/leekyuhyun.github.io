import Profile from "@/components/introduce/Profile";
import TechStack from "@/components/introduce/TechStack";
import Education from "@/components/introduce/Education";
import Awards from "@/components/introduce/Awards";
import Project from "@/components/introduce/Project"; // 새로 생성할 컴포넌트

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
    <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-16 font-sans">
      <Profile />

      {/* 2단 그리드 레이아웃 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-zinc-100 dark:border-zinc-800 pt-10">
        {/* 왼쪽 (사이드바 - 4칸) */}
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

        {/* 오른쪽 (메인 - 8칸) */}
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
