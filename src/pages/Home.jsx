import { useEffect } from "react";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import TechStack from "../components/portfolio/TechStack";
import Projects from "../components/portfolio/Projects";
import Contact from "../components/portfolio/Contact";
import TelemetryFrame from "../components/portfolio/TelemetryFrame";
import Ticker from "../components/portfolio/Ticker";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC] font-inter relative">
      <TelemetryFrame />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-[#1E293B] py-6 pb-12 text-center text-xs text-[#94A3B8] font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>
        <span className="text-[#22D3EE]">©</span> {new Date().getFullYear()} Noa Yonatanov — All systems operational
      </footer>
    </div>
  );
}
