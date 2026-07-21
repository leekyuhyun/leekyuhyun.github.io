import Image from "next/image";
import { PROFILE_DATA } from "../data/profile";
import { CONTACT_DATA } from "../data/contact";
import { Mail, BookOpen } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Profile() {
  const github = CONTACT_DATA.items.find(i => i.label === "Github")?.href;
  const linkedin = CONTACT_DATA.items.find(i => i.label === "LinkedIn")?.href;
  const blog = CONTACT_DATA.items.find(i => i.label === "Blog")?.href;
  const email = CONTACT_DATA.items.find(i => i.label === "E-mail")?.href;

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
        {PROFILE_DATA.image ? (
          <div className="w-32 h-40 md:w-36 md:h-48 lg:w-44 lg:h-56 rounded-2xl md:rounded-[2rem] overflow-hidden shrink-0 shadow-sm border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
            <Image 
              src={PROFILE_DATA.image} 
              alt={PROFILE_DATA.name} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-32 h-40 md:w-36 md:h-48 lg:w-44 lg:h-56 rounded-2xl md:rounded-[2rem] bg-sky-100 dark:bg-sky-900/30 text-sky-500 flex items-center justify-center text-4xl md:text-6xl font-bold shrink-0 shadow-sm">
            {PROFILE_DATA.name.charAt(0)}
          </div>
        )}
        
        <div className="flex flex-col justify-center gap-3 flex-1 md:py-1">
          <div className="flex flex-col gap-0.5">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium">
              {PROFILE_DATA.description}
            </p>
          </div>

          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap break-keep">
            {PROFILE_DATA.about}
          </p>

          <div className="flex items-center gap-4 justify-center md:justify-start mt-1">
            {email && (
              <a href={email} className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors" aria-label="E-mail">
                <Mail className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                <GithubIcon className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            )}
            {blog && (
              <a href={blog} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors" aria-label="Blog">
                <BookOpen className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
