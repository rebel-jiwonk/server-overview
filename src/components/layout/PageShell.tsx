import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export function PageShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.12 });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-science flex flex-col px-6 md:px-12">
      {children}
    </div>
  );
}