import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}