import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogDetailContent({ content }: { content: string }) {
  return (
    <div
      className="prose prose-zinc dark:prose-invert prose-sky max-w-none 
                    prose-headings:tracking-tight prose-headings:font-bold
                    prose-a:text-sky-500 prose-img:rounded-2xl prose-img:shadow-lg
                    prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800
                    prose-code:text-sky-500 dark:prose-code:text-amber-400 
                    prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800 
                    prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
