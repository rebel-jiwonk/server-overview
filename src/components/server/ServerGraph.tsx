import type { ChipType, VendorType } from "../../data/servers";
import { servers } from "../../data/servers";

type Props = {
  activeVendor: VendorType;
  activeChip: ChipType;
  onSelect: (vendor: VendorType, chip: ChipType) => void;
};

const CHIPS: ChipType[] = ["atom", "atomMax", "rebel"];
const VENDORS: VendorType[] = ["supermicro", "gigabyte"];

export function ServerGraph({ activeVendor, activeChip, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-white/50 tracking-wider">
            Topology
          </p>
          <h3 className="text-lg font-semibold">
            Vendor → Chip → Server
          </h3>
        </div>
        <div className="text-xs text-white/50">
          <span className="text-white/80 font-medium">
            {activeVendor} / {activeChip}
          </span>
        </div>
      </div>

      {/* Compact Tree Layout */}
      <div className="p-4 rounded-xl border border-white/5 bg-black/30">
        <div className="flex flex-col gap-5">
          {VENDORS.map((vendor) => (
            <div key={vendor} className="flex items-start gap-3">
              {/* Vendor Node */}
              <button
                onClick={() => onSelect(vendor, activeChip)}
                className={`w-20 shrink-0 px-2 py-2 rounded-md border text-center text-xs font-semibold uppercase tracking-wide transition-colors select-none ${
                  vendor === activeVendor
                    ? "bg-[var(--accent)]/20 border-[var(--accent)] text-white"
                    : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {vendor === "supermicro" ? "SMC" : "GB"}
              </button>

              {/* Connector */}
              <div className="flex items-center self-center">
                <div className="w-4 h-px bg-white/20" />
              </div>

              {/* Chips + Servers */}
              <div className="flex flex-col gap-2 flex-1">
                {CHIPS.map((chip) => {
                  const isActiveChip = vendor === activeVendor && chip === activeChip;
                  const config = servers[vendor][chip];

                  return (
                    <div key={chip} className="flex items-center gap-2">
                      {/* Chip Node */}
                      <button
                        onClick={() => onSelect(vendor, chip)}
                        className={`w-20 shrink-0 px-2 py-1.5 rounded-md border text-center text-xs font-medium uppercase transition-colors select-none ${
                          isActiveChip
                            ? "bg-[var(--accent)]/15 border-[var(--accent)] text-white"
                            : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        {chip}
                      </button>

                      {/* Connector */}
                      <div className="w-3 h-px bg-white/15" />

                      {/* Server Node with Tooltip */}
                      <div className="relative flex-1 group">
                        <button
                          onClick={() => onSelect(vendor, chip)}
                          className={`w-full text-left px-3 py-2 rounded-md border transition-colors select-none ${
                            isActiveChip
                              ? "bg-[var(--accent)]/10 border-[var(--accent)]"
                              : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                          }`}
                        >
                          <p className={`text-xs font-medium ${isActiveChip ? "text-white" : "text-white/70"}`}>
                            {config.label}
                          </p>
                          <p className="text-[10px] text-white/40 mt-0.5 truncate">{config.shortSpec}</p>
                        </button>

                        {/* Tooltip */}
                        <div className="absolute left-full top-0 ml-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                          <div className="bg-black/95 border border-white/10 rounded-lg p-3 shadow-xl backdrop-blur-sm min-w-[220px] max-w-[280px]">
                            {/* Arrow */}
                            <div className="absolute left-0 top-3 -translate-x-1 w-2 h-2 bg-black/95 border-l border-b border-white/10 rotate-45" />
                            
                            <p className="text-xs font-semibold text-white mb-2">{config.label}</p>
                            <div className="space-y-1.5">
                              <div className="flex justify-between text-[10px]">
                                <span className="text-white/40 uppercase tracking-wider">Chassis</span>
                                <span className="text-white/80">{config.chassis}</span>
                              </div>
                              <div className="flex justify-between text-[10px]">
                                <span className="text-white/40 uppercase tracking-wider">Form</span>
                                <span className="text-white/80">{config.formFactor}</span>
                              </div>
                              {Object.entries(config.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between text-[10px] gap-3">
                                  <span className="text-white/40 uppercase tracking-wider shrink-0">{key}</span>
                                  <span className="text-white/80 text-right">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
