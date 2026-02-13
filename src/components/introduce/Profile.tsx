import Image from "next/image";
import { Github, Mail, BookText } from "lucide-react"; // BookText 아이콘 추가

export default function Profile() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10">
      <div className="relative w-56 md:w-64 shrink-0 group">
        <div
          className="absolute -inset-2 bg-sky-100/50 dark:bg-sky-900/30 rounded-4xl -z-10 
                        border border-sky-200/50 dark:border-sky-700/30 shadow-sm
                        transition-all duration-500 group-hover:scale-105 group-hover:shadow-md"
        />

        <div className="relative overflow-hidden rounded-3xl border-4 border-white dark:border-zinc-800 shadow-lg">
          <div className="aspect-2646/3402 relative w-full">
            <Image
              src="/images/Profile.png"
              alt="Profile"
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-center md:text-left">
        <div className="flex flex-col gap-3">
          <h2 className="font-gaegu text-5xl font-bold text-sky-500 dark:text-amber-200 transition-colors">
            이규현
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed break-keep">
            매일의 배움을 기록으로 자산화하는 개발자입니다.{" "}
            <br className="hidden md:block" />
            학습과 문제 해결 과정을 블로그에 정리하며 지식을 구조화하고,{" "}
            <br className="hidden md:block" />
            이를 통해 반복 가능한 성장 시스템을 만들어가고 있습니다.
          </p>
        </div>

        {/* 링크 아이콘 영역: 모두 동일한 사각형 버튼 스타일로 통일 */}
        <div className="flex items-center justify-center md:justify-start gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/leekyuhyun"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 
                       text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-amber-200 
                       hover:border-sky-200 dark:hover:border-amber-900/50 transition-all shadow-sm"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* Email */}
          <a
            href="mailto:leekh010502@gmail.com"
            title="Email"
            className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 
                       text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-amber-200 
                       hover:border-sky-200 dark:hover:border-amber-900/50 transition-all shadow-sm"
          >
            <Mail className="w-6 h-6" />
          </a>

          {/* Velog (Blog Icon) */}
          <a
            href="https://velog.io/@leekh010502/"
            target="_blank"
            rel="noopener noreferrer"
            title="Velog"
            className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 
                       text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-amber-200 
                       hover:border-sky-200 dark:hover:border-amber-900/50 transition-all shadow-sm"
          >
            <BookText className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
