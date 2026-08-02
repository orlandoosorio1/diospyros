import { EnduringMaterial } from "@/components/sections/EnduringMaterial";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { InvestmentApproach } from "@/components/sections/InvestmentApproach";
import { OriginOfCapital } from "@/components/sections/OriginOfCapital";
import { OriginOfDiospyros } from "@/components/sections/OriginOfDiospyros";
import { OurValues } from "@/components/sections/OurValues";
import { SymbolOfGrowth } from "@/components/sections/SymbolOfGrowth";

export default function Home() {
  return (
    <main>
      <Hero />
      <OriginOfCapital />
      <InvestmentApproach />
      <OriginOfDiospyros />
      <EnduringMaterial />
      <SymbolOfGrowth />
      <OurValues />
      <Footer />
    </main>
  );
}
