import { Navbar, Footer } from "@/components/common/commonPath";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-noto">
      <Navbar />
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
}
