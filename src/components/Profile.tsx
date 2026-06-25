import { PROFILE_DATA } from "../data/profile";

export default function Profile() {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
      <h1 className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-none mb-1">
        {PROFILE_DATA.name}
      </h1>
      <p className="text-3xl text-sky-600 dark:text-sky-400 font-bold mb-4">
        {PROFILE_DATA.title}
      </p>

      <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 dark:border-slate-700/50 pt-4">
        <p className="text-[26px] font-bold text-slate-800 dark:text-slate-200 leading-snug">
          {PROFILE_DATA.description}
        </p>
        <p className="text-2xl text-slate-600 dark:text-slate-400 leading-tight whitespace-pre-wrap">
          {PROFILE_DATA.about}
        </p>
      </div>
    </div>
  );
}
