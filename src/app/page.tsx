import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TargetAudience } from "@/components/TargetAudience";
import { TheProblem } from "@/components/TheProblem";
import { TheSolution } from "@/components/TheSolution";
import { HowItWorks } from "@/components/HowItWorks";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer"; // <--- Importe aqui

export default function Home() {
  return (
    <main className="bg-[#000000] min-h-screen w-full selection:bg-[#2e70f0] selection:text-white">
      <Header />
      <Hero />
      <TargetAudience />
      <TheProblem />
      <TheSolution />
      <HowItWorks />
      <ContactForm />
      <Footer /> {/* <--- O Rodapé Profissional */}
    </main>
  );
}
