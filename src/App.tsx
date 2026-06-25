import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./components/ThemeProvider";
import { HERO_DATA } from "./data/hero";
import { ABOUT_DATA } from "./data/about";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 py-6 md:py-12 px-4 md:px-10 print:bg-white print:p-0">
        
        {/* CV Paper Container */}
        <main className="max-w-5xl mx-auto relative bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl dark:shadow-slate-900/50 rounded-2xl overflow-hidden flex flex-col md:flex-row print:shadow-none print:my-0 print:block">
          
          {/* Theme Toggle Button (Inside Paper) */}
          <div className="absolute top-4 right-4 z-50 print:hidden">
            <ThemeToggle />
          </div>

          {/* Left Sidebar */}
          <aside className="w-full md:w-[32%] bg-slate-50 dark:bg-slate-800/40 p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-col gap-10 print:w-[35%] print:float-left print:border-r print:min-h-screen">
            
            {/* Profile & About */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
              <h1 className="text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-none mb-1">
                {HERO_DATA.name}
              </h1>
              <p className="text-4xl text-sky-600 dark:text-sky-400 font-bold mb-4">
                Frontend Developer
              </p>
              
              <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 dark:border-slate-700/50 pt-4">
                <p className="text-3xl font-bold text-slate-800 dark:text-slate-200 leading-snug">
                  {HERO_DATA.description}
                </p>
                <p className="text-2xl text-slate-600 dark:text-slate-400 leading-tight whitespace-pre-wrap">
                  {ABOUT_DATA.description}
                </p>
              </div>
            </div>

            <Contact />
            <Skills />
          </aside>

          {/* Right Main Area */}
          <section className="w-full md:w-[68%] p-8 md:p-12 flex flex-col gap-12 print:w-[65%] print:float-right">
            <Projects />
          </section>

        </main>
        
        {/* Footer */}
        <footer className="mt-10 text-center text-2xl text-slate-400 print:hidden">
          © {new Date().getFullYear()} {HERO_DATA.name}. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  );
}
