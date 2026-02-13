import MainView from "@/views/main";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-noto">
      <main className="grow">
        <MainView />
      </main>
    </div>
  );
}
