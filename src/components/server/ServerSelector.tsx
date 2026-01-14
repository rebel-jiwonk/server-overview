import { chips, CHIP_ORDER } from "../../data/servers";
import type { ChipType, ServerConfig } from "../../data/servers";

type Props = {
  chip: ChipType;
  selectedServerId: string | null;
  onChipChange: (c: ChipType) => void;
  onServerChange: (serverId: string) => void;
};

export function ServerSelector({
  chip,
  selectedServerId,
  onChipChange,
  onServerChange,
}: Props) {
  const currentChip = chips[chip];
  const servers = currentChip.servers;

  return (
    <div className="panel p-6 space-y-6">
      {/* Chip Selection */}
      <div>
        <p className="text-xs mb-3 text-white/50 uppercase tracking-[0.2em]">
          Board / Chip
        </p>
        <div className="flex flex-wrap gap-2">
          {CHIP_ORDER.map((c) => {
            const chipInfo = chips[c];
            const isActive = c === chip;
            return (
              <button
                key={c}
                onClick={() => onChipChange(c)}
                className={`px-5 py-3 rounded-xl border transition-all font-medium
                  ${
                    isActive
                      ? "bg-[var(--accent)] text-black border-transparent shadow-[0_0_24px_rgba(82,247,86,0.4)]"
                      : "border-white/20 text-white/70 hover:text-white hover:border-white/50 hover:bg-white/5"
                  }
                `}
              >
                <span className="block text-sm font-semibold">{chipInfo.label}</span>
                <span className={`block text-xs mt-0.5 ${isActive ? "text-black/60" : "text-white/40"}`}>
                  {chipInfo.codeName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Board Specifications */}
      <div className="rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-md bg-[var(--accent)]/20 flex items-center justify-center">
            <svg 
              className="w-3.5 h-3.5 text-[var(--accent)]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" 
              />
            </svg>
          </div>
          <div>
            <span className="text-sm font-semibold text-white">{currentChip.label}</span>
            <span className="text-white/30 mx-2">·</span>
            <span className="text-xs text-white/50">{currentChip.description}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {currentChip.specs.map((spec, idx) => (
            <div 
              key={idx} 
              className="bg-black/30 rounded-lg px-4 py-3 border border-white/5"
            >
              <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1.5">
                {spec.label}
              </p>
              <p className={`text-sm font-semibold ${
                spec.label.includes("FP") || spec.label.includes("INT") || spec.label.includes("TOPS")
                  ? "text-[var(--accent)]"
                  : "text-white/90"
              }`}>
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Server Selection */}
      <div>
        <p className="text-xs mb-3 text-white/50 uppercase tracking-[0.2em]">
          Server Configurations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {servers.map((server: ServerConfig) => {
            const isActive = server.id === selectedServerId;
            return (
              <button
                key={server.id}
                onClick={() => onServerChange(server.id)}
                className={`p-4 rounded-xl border transition-all text-left group
                  ${
                    isActive
                      ? "bg-[var(--accent)]/10 border-[var(--accent)] shadow-[0_0_16px_rgba(82,247,86,0.2)]"
                      : "border-white/10 hover:border-white/30 hover:bg-white/5"
                  }
                `}
              >
                <div className="flex items-center gap-2 mb-2">
                  <VendorIcon vendor={server.vendor} />
                  <span className={`text-sm font-semibold ${isActive ? "text-white" : "text-white/80"}`}>
                    {server.vendorLabel}
                  </span>
                  {server.note && (
                    <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      주의
                    </span>
                  )}
                </div>
                <p className={`text-xs font-mono truncate ${isActive ? "text-white/90" : "text-white/50"}`}>
                  {server.model}
                </p>
                <div className="flex items-center gap-2 mt-2 text-[10px] text-white/40">
                  <span>{server.npu}</span>
                  <span className="text-white/20">·</span>
                  <span>{server.power}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function VendorIcon({ vendor }: { vendor: string }) {
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
