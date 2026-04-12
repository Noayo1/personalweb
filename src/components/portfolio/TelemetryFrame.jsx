import { useState, useEffect } from "react";

export default function TelemetryFrame() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString("en-GB"));
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString("en-GB")), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setLoad(docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-1.5 border-t border-[#1E293B] bg-[#030712]/95 backdrop-blur-sm text-[10px] font-mono"
      style={{ fontFamily: "JetBrains Mono, monospace" }}
    >
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
          <span className="text-[#4ADE80] uppercase tracking-wider">System Online</span>
        </span>
        <span className="text-[#1E293B]">|</span>
        <span className="text-[#94A3B8]">commit a3f01c2</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[#94A3B8]">LOAD {load}%</span>
        <span className="text-[#94A3B8]">{time}</span>
      </div>
    </div>
  );
}
