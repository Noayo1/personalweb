import { useState, useEffect, useRef } from "react";
import { ChevronDown, GitBranch } from "lucide-react";

const LOG_LINES = [
  "Initializing cloud-native environment...",
  "Connecting to AWS EKS cluster...",
  "Deploying via ArgoCD GitOps pipeline...",
  "Health checks passing ✓",
  "All systems operational.",
];

export default function Hero() {
  const [lines, setLines] = useState([]);
  const [cursor, setCursor] = useState(true);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) { setLines(LOG_LINES); return; }
    let li = 0, ci = 0;
    const tick = setInterval(() => {
      if (li >= LOG_LINES.length) { clearInterval(tick); return; }
      const line = LOG_LINES[li];
      if (ci <= line.length) {
        setLines([...LOG_LINES.slice(0, li), line.slice(0, ci)]);
        ci++;
      } else { li++; ci = 0; }
    }, 30);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = 40;
      const mx = mouseRef.current.x, my = mouseRef.current.y;
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dist = Math.hypot(x - mx, y - my);
          const influence = Math.max(0, 1 - dist / 200);
          const r = 1 + influence * 2;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34,211,238,${0.07 + influence * 0.25})`;
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", onMouse);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); canvas.removeEventListener("mousemove", onMouse); };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#22D3EE]/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#22D3EE]/30 bg-[#22D3EE]/5 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#22D3EE] font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>System Online</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#F8FAFC] mb-2 tracking-tight" style={{ fontFamily: "JetBrains Mono, monospace", letterSpacing: "-0.02em" }}>
              Noa
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-[#22D3EE] mb-6 tracking-tight" style={{ fontFamily: "JetBrains Mono, monospace", letterSpacing: "-0.02em" }}>
              Yonatanov
            </h1>

            <p className="text-[#94A3B8] text-base leading-relaxed mb-8 max-w-sm">
              Cloud Infrastructure Engineer designing scalable, GitOps-driven systems on AWS. I turn complexity into reliable, observable platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-2 px-6 py-3 bg-[#22D3EE] text-[#030712] text-xs font-bold uppercase tracking-widest rounded hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-dashed focus-visible:ring-[#22D3EE]"
              >
                <GitBranch className="w-3.5 h-3.5" aria-hidden="true" />
                git checkout projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 border border-[#22D3EE]/40 text-[#22D3EE] text-xs font-bold uppercase tracking-widest rounded hover:bg-[#22D3EE]/10 transition-all font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-dashed focus-visible:ring-[#22D3EE]"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                ./connect.sh
              </button>
            </div>
          </div>

          <div className="bg-[#0F172A]/80 border border-[#1E293B] rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E293B] bg-[#030712]/60">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-[#4ADE80]/60" />
              <span className="ml-2 text-[10px] text-[#94A3B8] font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>kubectl logs noa-yonatanov</span>
            </div>
            <div className="p-5 space-y-2 min-h-[180px]">
              {lines.map((line, i) => (
                <div key={i} className="flex gap-2 text-xs font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  <span className="text-[#94A3B8] shrink-0">[INFO]</span>
                  <span className={line.includes("✓") || line.includes("operational") ? "text-[#4ADE80]" : "text-[#F8FAFC]"}>{line}</span>
                </div>
              ))}
              {lines.length > 0 && (
                <div className="flex gap-2 text-xs font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  <span className={`text-[#22D3EE] ${cursor ? "opacity-100" : "opacity-0"}`}>$</span>
                  <span className={`text-[#22D3EE] ${cursor ? "opacity-100" : "opacity-0"}`}>▌</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("stack")}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 text-[#94A3B8] hover:text-[#22D3EE] transition-colors animate-bounce focus:outline-none"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" aria-hidden="true" />
      </button>
    </section>
  );
}
