type Props = {
  options: string[];
  value: string;
  onChange: (v: string) => void;
};

export function SegmentedControl({ options, value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isActive = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-4 py-2 text-sm rounded-full border transition font-medium tracking-wide uppercase
              ${
                isActive
                  ? "bg-[var(--accent)] text-black border-transparent shadow-[0_0_20px_rgba(82,247,86,0.35)]"
                  : "border-white/30 text-white/70 hover:text-white hover:border-white/60 hover:bg-white/5"
              }
            `}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}