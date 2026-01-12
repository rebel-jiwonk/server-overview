import { SegmentedControl } from "../ui/SegmentedControl";
import type { VendorType, ChipType } from "../../data/servers";

type Props = {
  vendor: VendorType;
  chip: ChipType;
  onVendorChange: (v: VendorType) => void;
  onChipChange: (c: ChipType) => void;
};

export function ServerSelector({
  vendor,
  chip,
  onVendorChange,
  onChipChange,
}: Props) {
  return (
    <div className="panel p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="flex-1">
          <p className="text-xs mb-2 text-white/50 uppercase tracking-[0.2em]">
            Vendor
          </p>
          <SegmentedControl
            options={["supermicro", "gigabyte"]}
            value={vendor}
            onChange={(v) => onVendorChange(v as VendorType)}
          />
        </div>

        <div className="flex-1">
          <p className="text-xs mb-2 text-white/50 uppercase tracking-[0.2em]">
            Chip Type
          </p>
          <SegmentedControl
            options={["atom", "atomMax", "rebel"]}
            value={chip}
            onChange={(c) => onChipChange(c as ChipType)}
          />
        </div>
      </div>

      <p className="text-sm text-white/60 leading-relaxed">
        Select a vendor and chip to explore matching chassis, NPUs, and specs. The graph and detail panels update instantly to keep context.
      </p>
    </div>
  );
}