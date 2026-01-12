import { useCallback, useState } from "react";
import { PageShell } from "./components/layout/PageShell";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ServerSelector } from "./components/server/ServerSelector";
import { ServerGraph } from "./components/server/ServerGraph";
import { ServerCanvas } from "./components/server/ServerCanvas";
import { ZoomModal } from "./components/server/ZoomModal";
import { servers } from "./data/servers";
import type { VendorType, ChipType } from "./data/servers";

export default function App() {
  const [vendor, setVendor] = useState<VendorType>("supermicro");
  const [chip, setChip] = useState<ChipType>("atom");
  const [zoomOpen, setZoomOpen] = useState(false);

  const current = servers[vendor][chip];
  const handleGraphSelect = useCallback(
    (nextVendor: VendorType, nextChip: ChipType) => {
      setVendor(nextVendor);
      setChip(nextChip);
    },
    []
  );

  return (
    <PageShell>
      <Header />
      <main className="flex-1">
        <div className="max-w-[92rem] mx-auto py-10 space-y-10">
          <ServerSelector
            vendor={vendor}
            chip={chip}
            onVendorChange={setVendor}
            onChipChange={setChip}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Topology */}
            <ServerGraph
              activeVendor={vendor}
              activeChip={chip}
              onSelect={handleGraphSelect}
            />

            {/* Right: Server Image */}
            <ServerCanvas
              server={current}
              onZoom={() => setZoomOpen(true)}
            />
          </div>
        </div>
      </main>

      <Footer />

      <ZoomModal
        open={zoomOpen}
        onClose={() => setZoomOpen(false)}
        server={current}
      />
    </PageShell>
  );
}
