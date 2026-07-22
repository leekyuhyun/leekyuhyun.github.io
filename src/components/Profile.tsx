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

  const cleanUrl = (url: string) => {
    return url.replace(/^(mailto:|https?:\/\/)/, '').replace(/\/$/, '');
  };

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

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mt-2">
            <div className="flex items-center gap-4">
              {email && (
                <a href={email} className="group relative text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors" aria-label="E-mail">
                  <Mail className="w-6 h-6 md:w-7 md:h-7" />
                  <div className="absolute top-full mt-2 md:mt-3 left-1/2 -translate-x-1/2 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-slate-800 dark:bg-slate-700 text-slate-100 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium rounded-md md:rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-10 shadow-md -translate-y-1 group-hover:translate-y-0 flex flex-col items-center">
                    {cleanUrl(email)}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-slate-700 rotate-45"></div>
                  </div>
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noreferrer" className="group relative text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                  <GithubIcon className="w-6 h-6 md:w-7 md:h-7" />
                  <div className="absolute top-full mt-2 md:mt-3 left-1/2 -translate-x-1/2 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-slate-800 dark:bg-slate-700 text-slate-100 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium rounded-md md:rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-10 shadow-md -translate-y-1 group-hover:translate-y-0 flex flex-col items-center">
                    {cleanUrl(github)}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-slate-700 rotate-45"></div>
                  </div>
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noreferrer" className="group relative text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon className="w-6 h-6 md:w-7 md:h-7" />
                  <div className="absolute top-full mt-2 md:mt-3 left-1/2 -translate-x-1/2 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-slate-800 dark:bg-slate-700 text-slate-100 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium rounded-md md:rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-10 shadow-md -translate-y-1 group-hover:translate-y-0 flex flex-col items-center">
                    {cleanUrl(linkedin)}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-slate-700 rotate-45"></div>
                  </div>
                </a>
              )}
              {blog && (
                <a href={blog} target="_blank" rel="noreferrer" className="group relative text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors" aria-label="Blog">
                  <BookOpen className="w-6 h-6 md:w-7 md:h-7" />
                  <div className="absolute top-full mt-2 md:mt-3 left-1/2 -translate-x-1/2 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-slate-800 dark:bg-slate-700 text-slate-100 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium rounded-md md:rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-10 shadow-md -translate-y-1 group-hover:translate-y-0 flex flex-col items-center">
                    {cleanUrl(blog)}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-slate-700 rotate-45"></div>
                  </div>
                </a>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
