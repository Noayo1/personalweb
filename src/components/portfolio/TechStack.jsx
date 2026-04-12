import { useState } from "react";
import { skillCategories } from "../../data/skills";
import {
  Terminal,
  GitBranch,
  Cloud,
  Blocks,
  Container,
  Ship,
  Package,
  GitPullRequest,
  Workflow,
  Code,
  Activity,
  Network,
  ChevronDown,
} from "lucide-react";

const ICONS = {
  terminal: Terminal,
  git: GitBranch,
  cloud: Cloud,
  iac: Blocks,
  docker: Container,
  k8s: Ship,
  helm: Package,
  gitops: GitPullRequest,
  cicd: Workflow,
  code: Code,
  monitor: Activity,
  network: Network,
};

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[#22D3EE] text-xs font-mono">/*</span>
      <span className="text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-mono">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#1E293B]" />
      <span className="text-[#22D3EE] text-xs font-mono">*/</span>
    </div>
  );
}

export default function TechStack() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (title) => {
    setExpanded(expanded === title ? null : title);
  };

  return (
    <section id="stack" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="tech_stack" />
        <h2
          className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-3"
          style={{ fontFamily: "JetBrains Mono, monospace", letterSpacing: "-0.02em" }}
        >
          Tech Stack & Tools
        </h2>
        <p className="text-[#94A3B8] text-sm mb-12 max-w-lg">
          The technologies and tools I use to build, deploy, and monitor cloud-native infrastructure.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category) => {
            const Icon = ICONS[category.icon] || Terminal;
            const isOpen = expanded === category.title;
            return (
              <button
                key={category.title}
                onClick={() => toggle(category.title)}
                className="group bg-[#0F172A] border border-[#1E293B] rounded-xl p-6 text-left transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-dashed focus-visible:ring-[#22D3EE]"
                style={isOpen ? { borderColor: category.color + "60" } : undefined}
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: category.color + "15" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: category.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-sm font-semibold text-[#F8FAFC] font-mono"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {category.title}
                    </h3>
                    <p
                      className="text-[10px] uppercase tracking-[0.2em] font-mono mt-0.5"
                      style={{ color: category.color, fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {category.subtitle}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#94A3B8] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {/* Skills (expandable) */}
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0 mt-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] text-[#94A3B8] bg-[#030712] border border-[#1E293B] rounded px-2.5 py-1 font-mono"
                          style={{ fontFamily: "JetBrains Mono, monospace" }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`h-px w-full overflow-hidden bg-[#1E293B] ${isOpen ? "mt-5" : "mt-5"}`}>
                  <div
                    className={`h-full transition-all duration-500 ${isOpen ? "w-full" : "w-0 group-hover:w-full"}`}
                    style={{ backgroundColor: category.color }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
