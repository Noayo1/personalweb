import { useState, useRef, useEffect } from "react";
import { Mail, Terminal, Download } from "lucide-react";

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const CONTACT_LINKS = [
  { icon: Mail, label: "Email", value: "nyo1254@gmail.com", href: "mailto:nyo1254@gmail.com", color: "#22D3EE", isLucide: true },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/noa-yonatanov", href: "https://www.linkedin.com/in/noa-yonatanov-824416310/", color: "#0A66C2" },
  { icon: GithubIcon, label: "GitHub", value: "github.com/Noayo1", href: "https://github.com/Noayo1", color: "#F8FAFC" },
];

const COMMANDS = {
  help: () => ["Available commands:", "  mail     — open email client", "  linkedin — open LinkedIn profile", "  github   — open GitHub profile", "  cv       — download resume", "  clear    — clear terminal", "  whoami   — about Noa"],
  whoami: () => ["Noa Yonatanov", "DevOps / Cloud Infrastructure Engineer", "Specializing in AWS, Kubernetes, Terraform, GitOps"],
  clear: () => null,
  mail: () => { window.location.href = "mailto:nyo1254@gmail.com"; return ["Opening mail client... ✉"]; },
  linkedin: () => { window.open("https://www.linkedin.com/in/noa-yonatanov-824416310/", "_blank"); return ["Opening LinkedIn..."]; },
  github: () => { window.open("https://github.com/Noayo1", "_blank"); return ["Opening GitHub..."]; },
  cv: () => { const a = document.createElement("a"); a.href = "/resume.pdf"; a.download = ""; a.click(); return ["Downloading resume... ⬇"]; },
};

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[#22D3EE] text-xs font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>/*</span>
      <span className="text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>{label}</span>
      <div className="flex-1 h-px bg-[#1E293B]" />
      <span className="text-[#22D3EE] text-xs font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>*/</span>
    </div>
  );
}

export default function Contact() {
  const [history, setHistory] = useState([{ type: "system", text: 'Type "help" to see available commands.' }]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [history]);

  const run = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const fn = COMMANDS[trimmed];
    const entry = { type: "input", text: `$ ${cmd}` };
    if (!fn) {
      setHistory((h) => [...h, entry, { type: "error", text: `command not found: ${cmd}. Try "help".` }]);
    } else {
      const result = fn();
      if (result === null) {
        setHistory([{ type: "system", text: 'Type "help" to see available commands.' }]);
      } else {
        setHistory((h) => [...h, entry, ...result.map((t) => ({ type: "output", text: t }))]);
      }
    }
    setInput("");
  };

  return (
    <section id="contact" className="py-28 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="terminal_uplink" />
        <h2
          className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-3"
          style={{ fontFamily: "JetBrains Mono, monospace", letterSpacing: "-0.02em" }}
        >
          Get In Touch
        </h2>
        <p className="text-[#94A3B8] text-sm mb-12 max-w-lg">
          Open to new opportunities, collaborations, or a chat about cloud infrastructure.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {CONTACT_LINKS.map(({ icon: Icon, label, value, href, color, isLucide }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label}: ${value}`}
              className="group bg-[#0F172A] border border-[#1E293B] rounded-xl p-6 hover:border-[#22D3EE]/40 transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-dashed focus-visible:ring-[#22D3EE]"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border"
                style={{ backgroundColor: color + "15", borderColor: color + "30" }}
              >
                {isLucide
                  ? <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
                  : <Icon width={20} height={20} style={{ color }} aria-hidden="true" />
                }
              </div>
              <p className="text-[10px] text-[#94A3B8] uppercase tracking-widest mb-1 font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>{label}</p>
              <p className="text-sm text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors font-mono break-all" style={{ fontFamily: "JetBrains Mono, monospace" }}>{value}</p>
            </a>
          ))}
        </div>

        <div className="bg-[#030712] border border-[#1E293B] rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1E293B] bg-[#0F172A]/50">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-[#4ADE80]/60" />
            <Terminal className="w-3.5 h-3.5 text-[#94A3B8] ml-2" aria-hidden="true" />
            <span className="text-[10px] text-[#94A3B8] font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>noa@devops:~$</span>
          </div>

          <div className="p-5 h-52 overflow-y-auto space-y-2 font-mono text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }} aria-live="polite" aria-label="Terminal output">
            {history.map((line, i) => (
              <div
                key={i}
                className={
                  line.type === "input" ? "text-[#22D3EE]"
                    : line.type === "error" ? "text-red-400"
                    : line.type === "system" ? "text-[#94A3B8]"
                    : "text-[#F8FAFC] pl-2"
                }
              >
                {line.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); if (input.trim()) run(input); }}
            className="flex items-center gap-2 border-t border-[#1E293B] px-5 py-3"
          >
            <span className="text-[#22D3EE] font-mono text-xs shrink-0" style={{ fontFamily: "JetBrains Mono, monospace" }}>$</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-[#F8FAFC] font-mono text-xs outline-none placeholder-[#1E293B]"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
              placeholder='type a command...'
              aria-label="Terminal input"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
