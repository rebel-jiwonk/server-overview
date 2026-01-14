import { useState, useCallback } from "react";
import { PageShell } from "./components/layout/PageShell";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ServerSelector } from "./components/server/ServerSelector";
import { ServerGraph } from "./components/server/ServerGraph";
import { ServerCarousel } from "./components/server/ServerCarousel";
import { ServerSpecsPanel } from "./components/server/ServerSpecsPanel";
import { chips } from "./data/servers";
import type { ChipType } from "./data/servers";

export default function App() {
  const [chip, setChip] = useState<ChipType>("atom");
  const [selectedServerId, setSelectedServerId] = useState<string>(
    chips.atom.servers[0]?.id || ""
  );

  const currentChip = chips[chip];
  const currentServer = currentChip.servers.find((s) => s.id === selectedServerId) 
    || currentChip.servers[0];

  const handleChipChange = useCallback((newChip: ChipType) => {
    setChip(newChip);
    // Select first server of the new chip
    const firstServer = chips[newChip].servers[0];
    if (firstServer) {
      setSelectedServerId(firstServer.id);
    }
  }, []);

  const handleServerChange = useCallback((serverId: string) => {
    setSelectedServerId(serverId);
  }, []);

  const handleGraphSelect = useCallback((newChip: ChipType, serverId: string) => {
    setChip(newChip);
    setSelectedServerId(serverId);
  }, []);

  return (
    <PageShell>
      <Header />
      <main className="flex-1">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* Chip & Server Selector */}
          <ServerSelector
            chip={chip}
            selectedServerId={selectedServerId}
            onChipChange={handleChipChange}
            onServerChange={handleServerChange}
          />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Topology Graph */}
            <div className="lg:col-span-1">
              <ServerGraph
                activeChip={chip}
                activeServerId={selectedServerId}
                onSelect={handleGraphSelect}
              />
            </div>

            {/* Middle: Image Carousel */}
            <div className="lg:col-span-1">
              {currentServer && (
                <ServerCarousel server={currentServer} />
              )}
            </div>

            {/* Right: Specs Panel */}
            <div className="lg:col-span-1">
              {currentServer && (
                <ServerSpecsPanel server={currentServer} chip={currentChip} />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </PageShell>
  );
}
