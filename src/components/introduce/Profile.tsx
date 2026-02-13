import Image from "next/image";
import { Github, Mail, BookText } from "lucide-react";
import { CV_DATA } from "./introduceData";

export default function Profile() {
  const { profile } = CV_DATA;

  // 문장별 줄바꿈 처리
  const descriptions = profile.description.split(/(?<=[.,])\s/);

  return (
    <section className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-10 md:gap-16 pb-4 w-full max-w-5xl mx-auto">
      {/* 프로필 이미지 섹션: 중앙 정렬 유지 */}
      <div className="relative shrink-0 group flex items-center justify-center">
        <div className="absolute -inset-3 bg-zinc-100/50 dark:bg-zinc-800/50 rounded-3xl -z-10 transition-transform duration-500 group-hover:scale-105" />

        <div className="relative w-48 h-64 md:w-56 md:h-72 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm">
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            priority
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* 정보 섹션: 중앙 배치를 유지하며 텍스트 간격 최적화 */}
      <div className="flex flex-col justify-between w-full text-center md:text-left py-2 flex-1 max-w-2xl">
        {/* 상단: 이름 및 소셜 (아이콘을 이름 아래로 배치하여 휑한 느낌 제거) */}
        <div className="flex flex-col gap-5">
          <div className="space-y-1">
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              {profile.name}
            </h2>
            <p className="text-xl md:text-2xl text-sky-500 dark:text-amber-300 font-semibold">
              {profile.role}
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:text-sky-500 dark:hover:text-amber-200 transition-all text-sm font-medium shadow-sm"
            >
              <Github className="w-4 h-4" /> Github
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:text-sky-500 dark:hover:text-amber-200 transition-all text-sm font-medium shadow-sm"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href={profile.links.velog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:text-sky-500 dark:hover:text-amber-200 transition-all text-sm font-medium shadow-sm"
            >
              <BookText className="w-4 h-4" /> Blog
            </a>
          </div>
        </div>

        {/* 하단: 자기소개 본문 - 사진 하단 라인과 맞춤 */}
        <div className="relative mt-8 md:mt-0">
          <div className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed break-keep flex flex-col gap-1.5">
            {descriptions.map((sentence, index) => (
              <p key={index} className="last:mb-0">
                {sentence}
              </p>
            ))}
          </div>
          {/* 장식용 왼쪽 바: 중앙 배치 느낌을 해치지 않게 조절 */}
          <div className="absolute -left-6 top-1 bottom-1 w-1 bg-sky-100 dark:bg-amber-900/30 rounded-full hidden md:block" />
        </div>
      </div>
    </section>
  );
}
