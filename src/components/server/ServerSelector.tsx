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

      {/* Chip Description */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10">
        <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
        <p className="text-sm text-white/70">
          <span className="font-semibold text-white">{currentChip.label}</span>
          <span className="mx-2 text-white/30">·</span>
          {currentChip.description}
        </p>
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
