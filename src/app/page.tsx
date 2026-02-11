import { Navbar, Footer } from "@/components/common/commonPath";
import MainView from "@/views/main";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-noto">
      <Navbar />
      <main className="grow">
        <MainView />
      </main>
      <Footer />
    </div>
  );
}
