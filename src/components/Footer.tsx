export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-slate-200/50 dark:border-slate-800 transition-colors duration-300">
      <p className="text-xl text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Kyulee. All rights reserved.
      </p>
    </footer>
  );
}
