import HeroSection from "@/components/heroSection";
import PopularVacancies from "@/components/popularVacancies";

export default function Home() {
  return (
    <main className="">
      <section className="bg-[#f1f2f4] min-h-[calc(100vh-138px)] flex items-center">
        <HeroSection />
      </section>
      <section>
        <PopularVacancies />
      </section>
    </main>
  );
}
