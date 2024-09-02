import Header from "@/components/Header";
import Notes from "@/components/Notes";

export default function Home() {
  return (
    <>
      <header >
        <Header />
      </header>

      <main className="flex justify-center items-center">
        <Notes />
      </main>
      
    </>
  );
}
