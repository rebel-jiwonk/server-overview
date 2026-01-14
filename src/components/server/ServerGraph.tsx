import { chips, CHIP_ORDER } from "../../data/servers";
import type { ChipType } from "../../data/servers";

type Props = {
  activeChip: ChipType;
  activeServerId: string | null;
  onSelect: (chip: ChipType, serverId: string) => void;
};

export function ServerGraph({ activeChip, activeServerId, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-white/50 tracking-wider">
            Topology
          </p>
          <h3 className="text-lg font-semibold">
            Chip → Server Configuration
          </h3>
        </div>
        <div className="text-xs text-white/50">
          <span className="text-white/80 font-medium">
            {chips[activeChip].label}
          </span>
        </div>
      </div>

      {/* Tree Layout */}
      <div className="p-4 rounded-xl border border-white/5 bg-black/30">
        <div className="flex flex-col gap-6">
          {CHIP_ORDER.map((chipId) => {
            const chip = chips[chipId];
            const isActiveChip = chipId === activeChip;

            return (
              <div key={chipId} className="flex items-start gap-3">
                {/* Chip Node */}
                <button
                  onClick={() => onSelect(chipId, chip.servers[0]?.id || "")}
                  className={`w-24 shrink-0 px-3 py-3 rounded-lg border text-center transition-all select-none ${
                    isActiveChip
                      ? "bg-[var(--accent)]/20 border-[var(--accent)] text-white shadow-[0_0_12px_rgba(82,247,86,0.2)]"
                      : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <span className="block text-xs font-bold uppercase tracking-wide">
                    {chip.label}
                  </span>
                  <span className={`block text-[10px] mt-1 ${isActiveChip ? "text-[var(--accent)]" : "text-white/40"}`}>
                    {chip.codeName}
                  </span>
                </button>

                {/* Connector */}
                <div className="flex items-center self-center">
                  <div className={`w-4 h-px ${isActiveChip ? "bg-[var(--accent)]/40" : "bg-white/15"}`} />
                </div>

                {/* Servers */}
                <div className="flex flex-col gap-2 flex-1">
                  {chip.servers.map((server) => {
                    const isActiveServer = isActiveChip && server.id === activeServerId;

                    return (
                      <div key={server.id} className="flex items-center gap-2">
                        {/* Connector line */}
                        <div className={`w-3 h-px ${isActiveServer ? "bg-[var(--accent)]/60" : "bg-white/10"}`} />

                        {/* Server Node with Tooltip */}
                        <div className="relative flex-1 group">
                          <button
                            onClick={() => onSelect(chipId, server.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-all select-none ${
                              isActiveServer
                                ? "bg-[var(--accent)]/10 border-[var(--accent)] shadow-[0_0_12px_rgba(82,247,86,0.15)]"
                                : isActiveChip
                                  ? "bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/25"
                                  : "bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/15"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <VendorDot vendor={server.vendor} />
                              <span className={`text-xs font-semibold ${
                                isActiveServer ? "text-white" : isActiveChip ? "text-white/80" : "text-white/50"
                              }`}>
                                {server.vendorLabel}
                              </span>
                              {server.note && (
                                <span className="text-[9px] px-1 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                  !
                                </span>
                              )}
                            </div>
                            <p className={`text-[11px] font-mono mt-1 truncate ${
                              isActiveServer ? "text-white/70" : "text-white/40"
                            }`}>
                              {server.model}
                            </p>
                          </button>

                          {/* Tooltip */}
                          <div className="absolute left-full top-0 ml-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                            <div className="bg-black/95 border border-white/10 rounded-lg p-3 shadow-xl backdrop-blur-sm min-w-[240px] max-w-[300px]">
                              {/* Arrow */}
                              <div className="absolute left-0 top-4 -translate-x-1 w-2 h-2 bg-black/95 border-l border-b border-white/10 rotate-45" />
                              
                              <div className="flex items-center gap-2 mb-3">
                                <VendorDot vendor={server.vendor} />
                                <span className="text-xs font-semibold text-white">{server.vendorLabel}</span>
                              </div>
                              
                              <div className="space-y-2">
                                <TooltipRow label="Model" value={server.model} />
                                <TooltipRow label="RAID" value={server.raidController} />
                                <TooltipRow label="Memory" value={server.memory} />
                                <TooltipRow label="CPU" value={server.cpu} />
                                <TooltipRow label="NPU" value={server.npu} accent />
                                <TooltipRow label="Power" value={server.power} />
                                <TooltipRow label="총판사" value={server.distributor} />
                              </div>

                              {server.note && (
                                <div className="mt-3 pt-2 border-t border-white/10">
                                  <p className="text-[10px] text-amber-400">⚠ {server.note}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function VendorDot({ vendor }: { vendor: string }) {
  const colors: Record<string, string> = {
    supermicro: "bg-blue-500",
    gigabyte: "bg-orange-500",
    lenovo: "bg-red-500",
    dell: "bg-sky-400",
  };
  
  return (
    <div className={`w-2 h-2 rounded-full ${colors[vendor] || "bg-white/50"}`} />
  );
}

function TooltipRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex justify-between gap-3 text-[10px]">
      <span className="text-white/40 uppercase tracking-wider shrink-0">{label}</span>
      <span className={`text-right ${accent ? "text-[var(--accent)] font-medium" : "text-white/80"}`}>
        {value}
      </span>
    </div>
  );
}
