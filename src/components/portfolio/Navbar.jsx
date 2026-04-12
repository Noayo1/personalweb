import { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";

const NAV = ["Home", "Stack", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#030712]/95 backdrop-blur-xl border-b border-[#1E293B]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-dashed focus-visible:ring-[#22D3EE] rounded"
          aria-label="Go to top"
        >
          <Terminal className="w-4 h-4 text-[#22D3EE]" aria-hidden="true" />
          <span className="font-mono text-sm font-semibold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            noa<span className="text-[#22D3EE]">@devops</span>
            <span className="text-[#94A3B8]">:~$</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {NAV.map((link) => (
            <li key={link}>
              <button
                onClick={() => go(link)}
                className="text-[11px] uppercase tracking-[0.2em] text-[#94A3B8] hover:text-[#22D3EE] transition-colors font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-dashed focus-visible:ring-[#22D3EE] rounded"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-[#94A3B8] focus:outline-none focus-visible:ring-2 focus-visible:ring-dashed focus-visible:ring-[#22D3EE] rounded"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0F172A] border-b border-[#1E293B] px-6 pb-4 space-y-1">
          {NAV.map((link) => (
            <button
              key={link}
              onClick={() => go(link)}
              className="block w-full text-left py-2.5 text-xs uppercase tracking-[0.2em] text-[#94A3B8] hover:text-[#22D3EE] transition-colors font-mono"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
