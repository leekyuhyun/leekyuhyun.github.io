'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ProjectDetailContent({ content }: { content: string }) {
  return (
    <div
      className="prose dark:prose-invert prose-sky max-w-none mt-10
      prose-headings:font-bold prose-h2:text-3xl prose-h2:border-b prose-h2:pb-2 prose-h2:mt-16
      prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed
      prose-pre:bg-zinc-900 prose-pre:rounded-2xl
      prose-table:border-collapse prose-table:w-full
      prose-th:border prose-th:border-zinc-200 dark:prose-th:border-zinc-800 prose-th:bg-zinc-50 dark:prose-th:bg-zinc-900/50 prose-th:px-4 prose-th:py-2
      prose-td:border prose-td:border-zinc-200 dark:prose-td:border-zinc-800 prose-td:px-4 prose-td:py-2"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
