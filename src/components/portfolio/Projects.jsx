import {
  CheckCircle,
  Server,
  GitBranch,
  Cloud,
  Zap,
  Brain,
  Database,
  Bot,
  Shield,
} from "lucide-react";

function GithubIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const ACHIEVEMENTS = [
  "Deployed fully managed EKS cluster with auto-scaling node groups and managed node lifecycle",
  "GitOps workflow via ArgoCD - all deployments are declarative and version-controlled",
  "Full CI/CD pipeline: Jenkins → Docker build → ECR push → ArgoCD sync",
  "All infrastructure provisioned with Terraform modules (VPC, IAM, ALB, EKS, RDS)",
  "Ingress controller with TLS termination via cert-manager and CloudFront + Cloudflare",
  "Horizontal Pod Autoscaling based on custom CPU/memory metrics from CloudWatch",
  "Zero-downtime rolling deployments with readiness / liveness probes",
];

const STATS = [
  { icon: Cloud, label: "Platform", value: "AWS EKS", color: "#FF9900" },
  {
    icon: GitBranch,
    label: "Delivery",
    value: "GitOps / ArgoCD",
    color: "#EF7B4D",
  },
  { icon: Server, label: "IaC", value: "Terraform", color: "#7B42BC" },
  { icon: Zap, label: "Uptime", value: "99.9%", color: "#4ADE80" },
];

const TAGS = [
  "EKS",
  "Terraform",
  "ArgoCD",
  "Jenkins",
  "Docker",
  "ECR",
  "ALB",
  "cert-manager",
  "Python",
  "FastAPI",
];

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

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="feature_node" />
        <h2
          className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-3"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            letterSpacing: "-0.02em",
          }}
        >
          Featured Projects
        </h2>
        <p className="text-[#94A3B8] text-sm mb-12 max-w-lg">
          Production-grade deployments showcasing end-to-end engineering
          methodology.
        </p>

        <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-[#1E293B]">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#22D3EE] font-mono">
                    Production · Active
                  </span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-3"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    letterSpacing: "-0.02em",
                  }}
                >
                  ExamList
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed max-w-2xl">
                  A production-grade, cloud-native exam management platform on
                  AWS. Kubernetes orchestration, GitOps automation, and fully
                  Terraform-provisioned infrastructure - demonstrating
                  end-to-end DevOps engineering from networking to
                  observability.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider text-[#94A3B8] bg-[#030712] border border-[#1E293B] rounded px-2.5 py-1 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href="https://github.com/Noayo1/ExamList-Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Repository"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-[#1E293B] rounded-lg text-xs text-[#94A3B8] hover:border-[#22D3EE]/40 hover:text-[#22D3EE] transition-all font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-dashed focus-visible:ring-[#22D3EE]"
                >
                  <GithubIcon className="w-4 h-4" aria-hidden="true" /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#1E293B]">
            {STATS.map(({ icon: Icon, label, value, color }) => (
              <div
                key={label}
                className="p-5 flex items-center gap-3 border-r border-[#1E293B] last:border-r-0"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: color + "15" }}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider font-mono">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-[#F8FAFC] font-mono">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="p-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-mono mb-6">
              // deployment_achievements
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-4 h-4 text-[#4ADE80] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#94A3B8] leading-relaxed">
                    {a}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Live metrics ticker */}
          <div className="border-t border-[#1E293B] bg-[#030712]/50 px-8 py-3 flex flex-wrap gap-6 text-[10px] font-mono">
            {[
              { label: "Replicas", value: "3/3 Ready", color: "#4ADE80" },
              { label: "CPU", value: "12% avg", color: "#22D3EE" },
              { label: "Memory", value: "340Mi/512Mi", color: "#22D3EE" },
              { label: "Deployments", value: "42 total", color: "#94A3B8" },
              { label: "Last Deploy", value: "2m ago", color: "#94A3B8" },
            ].map(({ label, value, color }) => (
              <span key={label} className="text-[#94A3B8]">
                {label}: <span style={{ color }}>{value}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Hellio HR */}
        <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl overflow-hidden mt-12">
          {/* Header */}
          <div className="p-8 border-b border-[#1E293B]">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#A78BFA] font-mono">
                    Production · Active
                  </span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-3"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Hellio HR
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed max-w-2xl">
                  LLM-native candidate management system for Hellio HR's team.
                  Four LLM pipelines (document ingestion, SQL-RAG chat, semantic
                  search, autonomous email agent) woven into every layer.
                  Human-in-the-loop by design: the system drafts, suggests, and
                  surfaces - humans decide.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {[
                    "React",
                    "TypeScript",
                    "Express",
                    "PostgreSQL",
                    "pgvector",
                    "AWS Bedrock",
                    "Nova Lite",
                    "Titan V2",
                    "Strands",
                    "Gmail MCP",
                    "Docker Compose",
                    "JWT",
                    "RBAC",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider text-[#94A3B8] bg-[#030712] border border-[#1E293B] rounded px-2.5 py-1 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href="https://github.com/Noayo1/Hellio"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Repository"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-[#1E293B] rounded-lg text-xs text-[#94A3B8] hover:border-[#A78BFA]/40 hover:text-[#A78BFA] transition-all font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-dashed focus-visible:ring-[#A78BFA]"
                >
                  <GithubIcon className="w-4 h-4" aria-hidden="true" /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#1E293B]">
            {[
              {
                icon: Brain,
                label: "LLM",
                value: "AWS Nova Lite",
                color: "#A78BFA",
              },
              {
                icon: Database,
                label: "Search",
                value: "pgvector RAG",
                color: "#22D3EE",
              },
              {
                icon: Bot,
                label: "Agent",
                value: "Strands + MCP",
                color: "#F59E0B",
              },
              {
                icon: Shield,
                label: "Auth",
                value: "JWT + RBAC",
                color: "#4ADE80",
              },
            ].map(({ icon: Icon, label, value, color }) => (
              <div
                key={label}
                className="p-5 flex items-center gap-3 border-r border-[#1E293B] last:border-r-0"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: color + "15" }}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider font-mono">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-[#F8FAFC] font-mono">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="p-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-mono mb-6">
              // key_features
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Document ingestion with regex + LLM extraction from CVs and job descriptions, deduplication by email, versioned prompt templates",
                "SQL-RAG chat - natural language to SQL with query validation, hallucination detection, and transparent query traces",
                "Semantic search with AWS Titan V2 1024-dim embeddings and pgvector cosine similarity, experience-aware filtering",
                "Autonomous Strands agent monitors Gmail via MCP, ingests CVs, matches candidates, drafts replies for human approval",
                "In-app notification panel with polling, color-coded by type, with direct action links for human review",
                "RBAC with Admin and Viewer roles controlling document upload and position editing vs. read-only access",
                "Per-model LLM and embedding token usage with cost dashboard for Titan embeddings and Nova generation",
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-4 h-4 text-[#A78BFA] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#94A3B8] leading-relaxed">
                    {a}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture stack ticker */}
          <div className="border-t border-[#1E293B] bg-[#030712]/50 px-8 py-3 flex flex-wrap gap-6 text-[10px] font-mono">
            {[
              {
                label: "Frontend",
                value: "React 19 + Vite 7",
                color: "#22D3EE",
              },
              { label: "Backend", value: "Express + TS", color: "#22D3EE" },
              { label: "Database", value: "PostgreSQL 16", color: "#4ADE80" },
              {
                label: "Embeddings",
                value: "1024-dim Titan V2",
                color: "#A78BFA",
              },
              { label: "Pipelines", value: "4 LLM", color: "#F59E0B" },
            ].map(({ label, value, color }) => (
              <span key={label} className="text-[#94A3B8]">
                {label}: <span style={{ color }}>{value}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
