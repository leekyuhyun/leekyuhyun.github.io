import Profile from "@/components/introduce/Profile";
import TechStack from "@/components/introduce/TechStack";
import Education from "@/components/introduce/Education"; // 추가

export default function IntroduceView() {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-16">
      <hr className="border-zinc-100 dark:border-zinc-800" />

      <Profile />
      <div className="space-y-8">
        <h3 className="font-gaegu text-4xl font-bold text-sky-500 dark:text-amber-200">
          Education
        </h3>
        <Education />
      </div>

      <hr className="border-zinc-100 dark:border-zinc-800" />

      <div className="space-y-8">
        <h3 className="font-gaegu text-4xl font-bold text-sky-500 dark:text-amber-200">
          Tech Stacks
        </h3>
        <TechStack />
      </div>
    </div>
  );
}
