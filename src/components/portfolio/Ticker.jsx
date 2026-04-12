const ITEMS = [
  "AWS EKS", "Terraform", "ArgoCD", "GitHub Actions", "Kubernetes",
  "Docker", "Helm", "Prometheus", "Grafana", "cert-manager",
  "GitOps", "IaC", "CI/CD", "Zero-downtime Deploys", "Auto-scaling",
  "Python", "FastAPI", "ECR", "VPC", "IAM", "CloudWatch", "Route53",
  "ALB", "RDS", "S3", "Lambda", "Ingress", "HPA", "Linux", "Bash",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden py-5 mb-6 md:mb-0 border-y border-[#1E293B] bg-[#0F172A]/50">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-[1] bg-gradient-to-r from-[#030712] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-[1] bg-gradient-to-l from-[#030712] to-transparent pointer-events-none" />

      <div
        className="flex gap-6 w-max"
        style={{
          animation: "ticker-scroll 40s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#94A3B8] flex items-center gap-2 shrink-0"
          >
            <span className="text-[#22D3EE] opacity-60">◆</span>
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
