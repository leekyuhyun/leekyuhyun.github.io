export default function BlogDetailContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="prose dark:prose-invert prose-sky max-w-none 
      prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
      prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed
      prose-pre:bg-zinc-900 prose-pre:rounded-2xl prose-code:text-sky-500"
    >
      {children}
    </div>
  );
}
