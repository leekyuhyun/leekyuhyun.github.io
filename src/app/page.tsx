import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 md:py-16 flex flex-col gap-10 md:gap-12">
        {/* Profile Section (Top) */}
        <section className="mb-4 md:mb-8">
          <Profile />
        </section>

        {/* Content Area (Left: Tags, Right: Feed) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Left Sidebar (Tags) */}
          <aside className="w-full lg:w-[280px] shrink-0 flex flex-col sm:flex-row lg:flex-col gap-8 lg:gap-10 lg:sticky lg:top-24">
            <div className="flex-1 lg:w-full"><Skills /></div>
          </aside>

          {/* Right Main Feed (Posts) */}
          <section className="w-full flex-1 flex flex-col gap-12 md:gap-16">
            <Projects />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
