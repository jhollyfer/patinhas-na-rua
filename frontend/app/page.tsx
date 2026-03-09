import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { Features } from "@/components/sections/features";
import { FeaturedAnimals } from "@/components/sections/featured-animals";
import { Campaigns } from "@/components/sections/campaigns";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { NgoCta } from "@/components/sections/ngo-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <FeaturedAnimals />
        <Campaigns />
        <HowItWorks />
        <Testimonials />
        <NgoCta />
      </main>
      <Footer />
    </>
  );
}
