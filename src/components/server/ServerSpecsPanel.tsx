import type { ServerConfig, ChipInfo } from "../../data/servers";

type Props = {
  server: ServerConfig;
  chip: ChipInfo;
};

export function ServerSpecsPanel({ server, chip }: Props) {
  const specs = [
    { label: "Model", value: server.model, highlight: true },
    { label: "RAID Controller", value: server.raidController },
    { label: "Memory", value: server.memory },
    { label: "CPU", value: server.cpu },
    { label: "NPU", value: server.npu, accent: true },
    { label: "Power", value: server.power },
    { label: "총판사", value: server.distributor },
  ];

  return (
    <div className="panel overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <VendorBadge vendor={server.vendor} label={server.vendorLabel} />
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10">
                {chip.label} · {chip.codeName}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">{server.model}</h3>
          </div>
          <a
            href={server.modelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-2 rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
            title="제품 페이지 보기"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Specs Grid */}
      <div className="p-5 space-y-3">
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className={`flex items-start justify-between py-3 px-4 rounded-lg ${
              spec.highlight 
                ? "bg-[var(--accent)]/5 border border-[var(--accent)]/20" 
                : "bg-white/[0.03] border border-white/5"
            }`}
          >
            <span className="text-xs uppercase tracking-wider text-white/40 shrink-0 w-28">
              {spec.label}
            </span>
            <span className={`text-sm text-right ${
              spec.accent 
                ? "text-[var(--accent)] font-semibold" 
                : spec.highlight 
                  ? "text-white font-medium" 
                  : "text-white/80"
            }`}>
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      {/* Note (if exists) */}
      {server.note && (
        <div className="mx-5 mb-5 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-start gap-2">
            <svg 
              className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
            <div>
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                특이사항
              </p>
              <p className="text-sm text-amber-200/80">{server.note}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function VendorBadge({ vendor, label }: { vendor: string; label: string }) {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    supermicro: { 
      bg: "bg-blue-500/20", 
      text: "text-blue-400", 
      border: "border-blue-500/30" 
    },
    gigabyte: { 
      bg: "bg-orange-500/20", 
      text: "text-orange-400", 
      border: "border-orange-500/30" 
    },
    lenovo: { 
      bg: "bg-red-500/20", 
      text: "text-red-400", 
      border: "border-red-500/30" 
    },
    dell: { 
      bg: "bg-sky-500/20", 
      text: "text-sky-400", 
      border: "border-sky-500/30" 
    },
  };

  const colorSet = colors[vendor] || { 
    bg: "bg-white/10", 
    text: "text-white/70", 
    border: "border-white/20" 
  };

  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${colorSet.bg} ${colorSet.text} ${colorSet.border}`}>
      {label}
    </span>
  );
}
