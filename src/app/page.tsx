import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Values from "../components/Values";
import Contact from "../components/Contact";
import ThemeToggle from "../components/ThemeToggle";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 py-6 md:py-12 px-4 md:px-10 print:bg-white print:p-0">

      {/* CV Paper Container */}
      <main className="max-w-7xl mx-auto relative bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl dark:shadow-slate-900/50 rounded-2xl overflow-hidden flex flex-col md:flex-row print:shadow-none print:my-0 print:block">

        {/* Theme Toggle Button (Inside Paper) */}
        <div className="absolute top-4 right-4 z-50 print:hidden">
          <ThemeToggle />
        </div>

        {/* Left Sidebar */}
        <aside className="w-full md:w-[26%] bg-slate-50 dark:bg-slate-800/40 p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-col gap-10 print:w-[30%] print:float-left print:border-r print:min-h-screen">

          {/* Profile & About */}
          <Profile />

          <Contact />
          <Skills />
        </aside>

        {/* Right Main Area */}
        <section className="w-full md:w-[74%] p-8 md:p-12 flex flex-col gap-12 print:w-[70%] print:float-right">
          <Values />
          <Projects />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
