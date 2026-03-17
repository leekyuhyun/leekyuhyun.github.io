'use client';

import { Hammer } from 'lucide-react';

export default function ProjectCard() {
  return (
    <div className="group flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-12 min-h-[300px] transition-all">
      <div className="flex flex-col items-center gap-4 text-zinc-400">
        <Hammer size={48} className="animate-bounce text-sky-500 dark:text-amber-400" />
        <div className="text-center">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
            Project Section 새 단장 중
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            더 멋진 모습으로 곧 돌아오겠다. 다!
          </p>
        </div>
      </div>
    </div>
  );
}
