export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-100 bg-transparent py-12 dark:border-zinc-800">
      <div className="mx-auto max-w-3xl px-8 sm:px-16">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-100">
            © 2026 이규현. Built with Next.js
          </p>
          <div className="flex gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-100"></div>
        </div>
      </div>
    </footer>
  );
}
