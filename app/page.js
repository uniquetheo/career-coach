import CtaSection from "@/components/ctaSection";
import HeroSection from "@/components/heroSection";
import HowItWorks from "@/components/howItWorks";
import PopularCategories from "@/components/popularCategories";
import PopularVacancies from "@/components/popularVacancies";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main className="">
      <section className="bg-[#f1f2f4] min-h-[calc(100vh-138px)] flex items-center">
        <HeroSection />
      </section>
      <section>
        <PopularVacancies />
      </section>
      <section className="bg-[#f1f2f4]">
        <HowItWorks />
      </section>
      <section>
        <PopularCategories />
      </section>
      <section className="bg-[#f1f2f4]">
        <Testimonial />
      </section>
      <section>
        <CtaSection />
      </section>
    </main>
  );
}
