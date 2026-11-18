"use client";

import { useEffect, useRef } from "react";

// A room seen through the screen. The viewpoint (perspective-origin) follows the pointer,
// the same head-coupled perspective idea as the P707 installation.
export default function Room({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const clamp = (v: number) => Math.min(90, Math.max(10, v));
    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return; // touch drags are scrolls; keep the room still
      const r = el.getBoundingClientRect();
      el.style.setProperty("--px", `${clamp(((e.clientX - r.left) / r.width) * 100)}%`);
      el.style.setProperty("--py", `${clamp(((e.clientY - r.top) / r.height) * 100)}%`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div ref={ref} className="room">
      <div className="room-space">
        <div className="room-face room-ceiling" aria-hidden="true" />
        <div className="room-face room-floor" aria-hidden="true" />
        <div className="room-face room-left" aria-hidden="true" />
        <div className="room-face room-right" aria-hidden="true" />
        <div className="room-face room-back">{children}</div>
      </div>
    </div>
  );
}
