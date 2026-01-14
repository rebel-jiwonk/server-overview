export type ChipType = "atom" | "atomMax" | "rebelQuad";

export type VendorType = "supermicro" | "gigabyte" | "lenovo" | "dell";

export interface ServerConfig {
  id: string;
  vendor: VendorType;
  vendorLabel: string;
  model: string;
  modelUrl: string;
  raidController: string;
  memory: string;
  cpu: string;
  npu: string;
  power: string;
  distributor: string; // 총판사
  images: string[]; // carousel images
  note?: string; // 특이사항
}

export interface ChipSpec {
  label: string;
  value: string;
}

export interface ChipInfo {
  id: ChipType;
  label: string;
  codeName: string;
  description: string;
  specs: ChipSpec[];
  servers: ServerConfig[];
}

export const chips: Record<ChipType, ChipInfo> = {
  atom: {
    id: "atom",
    label: "Atom",
    codeName: "CA22",
    description: "High-efficiency AI inference accelerator",
    specs: [
      { label: "FP16", value: "32 TFLOPS" },
      { label: "INT8 / INT4", value: "128 TOPS / 256 TOPS" },
      { label: "Input Power", value: "DC 12V (CPU 8-pin)" },
      { label: "Max Power", value: "85W" },
      { label: "Thermal", value: "Air Cooling (passive)" },
      { label: "Memory", value: "GDDR6 16GB, 256GB/s" },
      { label: "Host Interface", value: "PCIe Gen5 x16, 64GB/s" },
      { label: "Form Factor", value: "FHFL Single Slot" },
    ],
    servers: [
      {
        id: "atom-supermicro",
        vendor: "supermicro",
        vendorLabel: "Supermicro",
        model: "AS-4125GS-TNRT2",
        modelUrl: "https://www.supermicro.com/en/products/system/gpu/4u/as-4125gs-tnrt2",
        raidController: "SAS 3916",
        memory: "1.5Ti",
        cpu: "AMD EPYC 9254 24-Core Processor",
        npu: "CA22 × 8ea",
        power: "4kW (2+2)",
        distributor: "슈퍼솔루션",
        images: [
          "/servers/as-4125gs-tnrt2.png",
          "/servers/supermicro/AS -5126GS-TNRT2_main.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_front.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_angle.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_rear.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_top.webp",
          "/servers/supermicro/H14DSG-O-CPU.webp",
        ],
      },
      {
        id: "atom-gigabyte",
        vendor: "gigabyte",
        vendorLabel: "Gigabyte",
        model: "G293-S43-AAP1",
        modelUrl: "https://www.gigabyte.com/kr/Enterprise/GPU-Server/G293-S43-AAP1",
        raidController: "Intel VROC",
        memory: "1.5Ti",
        cpu: "Intel Xeon Gold 6542Y",
        npu: "CA22 × 16ea",
        power: "3kW (1+1)",
        distributor: "기가웨이브",
        images: [
          "/servers/gigabyte/600.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_a.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_angle.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_back.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_front.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_in.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_side.webp",
        ],
      },
      {
        id: "atom-lenovo",
        vendor: "lenovo",
        vendorLabel: "Lenovo",
        model: "ThinkSystem SR675 V3",
        modelUrl: "https://www.lenovo.com/kr/ko/p/servers-storage/servers/inferencing/thinksystem-sr675-v3/len21ts0007",
        raidController: "NVMe Controller",
        memory: "1.5Ti",
        cpu: "AMD EPYC 9254 24-Core Processor",
        npu: "CA22 × 8ea",
        power: "3.6kW (2+2)",
        distributor: "옥타곤",
        images: [
          "/servers/lenovo/4m0qcqhazk7hsfc4auon3n86pnit9u167406.webp",
          "/servers/lenovo/7ip9ijc9gp05u9x8tc0vholzsfw6ws293227.webp",
          "/servers/lenovo/9hjes7eu8yy83fwk1b0f3ecyc5btuh345351.webp",
          "/servers/lenovo/dmjcsw4nfhhc1t9b7e02cg4qyiax4w957475 (1).avif",
          "/servers/lenovo/dmjcsw4nfhhc1t9b7e02cg4qyiax4w957475.avif",
          "/servers/lenovo/kjwrp6farqfkuh8myhpacrc2b9li83732505 (1).avif",
          "/servers/lenovo/kjwrp6farqfkuh8myhpacrc2b9li83732505.avif",
          "/servers/lenovo/x0v6d79rh5y9px06ecxhymoeq7651m127866 (1).webp",
          "/servers/lenovo/x0v6d79rh5y9px06ecxhymoeq7651m127866.webp",
        ],
      },
      {
        id: "atom-dell",
        vendor: "dell",
        vendorLabel: "Dell",
        model: "PowerEdge R760xa",
        modelUrl: "https://www.dell.com/ko-kr/shop/cty/pdp/spd/poweredge-r760xa/asper760xa",
        raidController: "PERC H755 Front",
        memory: "1.5Ti",
        cpu: "Intel Xeon Gold 6442Y / 96core",
        npu: "CA22 × 4ea",
        power: "2.4kW (1+1)",
        distributor: "옥타곤",
        images: [
          "/servers/dell/server-poweredge-760xa-black-gallery-2.avif",
          "/servers/dell/server-poweredge-760xa-black-gallery-4.avif",
          "/servers/dell/server-poweredge-760xa-black-gallery-5.avif",
          "/servers/dell/server-poweredge-760xa-black-gallery-10.avif",
          "/servers/dell/server-poweredge-760xa-black-gallery-12.avif",
        ],
        note: "2025년 12월에 단종",
      },
    ],
  },

  atomMax: {
    id: "atomMax",
    label: "Atom-Max",
    codeName: "CA25",
    description: "Enhanced performance AI accelerator with higher throughput",
    specs: [
      { label: "FP16", value: "128 TFLOPS" },
      { label: "INT8 / INT4", value: "512 TOPS / 1024 TOPS" },
      { label: "Input Power", value: "DC 12V (CPU 8-pin)" },
      { label: "Max Power", value: "350W" },
      { label: "Thermal", value: "Air Cooling (passive)" },
      { label: "Memory", value: "GDDR6 64GB, 1024GB/s" },
      { label: "Host Interface", value: "PCIe Gen5 x16, 64GB/s" },
      { label: "Form Factor", value: "FHFL Dual Slot" },
    ],
    servers: [
      {
        id: "atommax-supermicro",
        vendor: "supermicro",
        vendorLabel: "Supermicro",
        model: "AS-4125GS-TNRT2",
        modelUrl: "https://www.supermicro.com/en/products/system/gpu/4u/as-4125gs-tnrt2",
        raidController: "SAS 3916",
        memory: "1.5Ti",
        cpu: "AMD EPYC 9254/9355 24/32-Core Processor",
        npu: "CA25 × 8ea",
        power: "4kW (2+2)",
        distributor: "슈퍼솔루션",
        images: [
          "/servers/as-4125gs-tnrt2.png",
          "/servers/supermicro/AS -5126GS-TNRT2_main.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_front.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_angle.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_rear.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_top.webp",
          "/servers/supermicro/H14DSG-O-CPU.webp",
        ],
      },
      {
        id: "atommax-gigabyte",
        vendor: "gigabyte",
        vendorLabel: "Gigabyte",
        model: "G494-ZB4-AAP2",
        modelUrl: "https://www.gigabyte.com/kr/Enterprise/GPU-Server/G494-ZB4-AAP2",
        raidController: "GBT3908-MR-32PD",
        memory: "2.2Ti",
        cpu: "AMD EPYC 9355 32-Core Processor",
        npu: "CA25 × 8ea",
        power: "6kW (2+2)",
        distributor: "기가웨이브",
        images: [
          "/servers/gigabyte/600.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_a.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_angle.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_back.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_front.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_in.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_side.webp",
        ],
      },
    ],
  },

  rebelQuad: {
    id: "rebelQuad",
    label: "Rebel-Quad",
    codeName: "CR13",
    description: "4-homogeneous-chiplet SoC based on UCIe-Advanced",
    specs: [
      { label: "FP16", value: "1,024 TFLOPS" },
      { label: "FP8", value: "2,048 TFLOPS" },
      { label: "Host Interface", value: "2× PCIe Gen5 x16" },
      { label: "Memory", value: "HBM3E 144GB, 4.8TB/s" },
      { label: "Interconnect", value: "16Gbps, 1TB/s per channel" },
      { label: "Max Power", value: "Up to 600W" },
      { label: "Architecture", value: "UCIe-A Chiplet" },
      { label: "Software", value: "PyTorch 2.x, vLLM, Triton" },
    ],
    servers: [
      {
        id: "rebelquad-supermicro",
        vendor: "supermicro",
        vendorLabel: "Supermicro",
        model: "AS-5126GS-TNRT2",
        modelUrl: "https://www.supermicro.com/en/products/system/gpu/5u/as-5126gs-tnrt2",
        raidController: "X",
        memory: "1.5Ti",
        cpu: "AMD EPYC 9355 32-Core Processor",
        npu: "CR13 × 8ea",
        power: "8.1kW (3+3)",
        distributor: "슈퍼솔루션",
        images: [
          "/servers/supermicro/AS -5126GS-TNRT2_main.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_front.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_angle.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_rear.webp",
          "/servers/supermicro/AS -5126GS-TNRT2_callout_top.webp",
          "/servers/supermicro/H14DSG-O-CPU.webp",
        ],
      },
      {
        id: "rebelquad-gigabyte",
        vendor: "gigabyte",
        vendorLabel: "Gigabyte",
        model: "G494-ZB4-AAP2",
        modelUrl: "https://www.gigabyte.com/kr/Enterprise/GPU-Server/G494-ZB4-AAP2",
        raidController: "GBT3908-MR-32PD",
        memory: "2.2Ti",
        cpu: "AMD EPYC 9355 32-Core Processor",
        npu: "CA25 × 8ea",
        power: "6kW (2+2)",
        distributor: "기가웨이브",
        images: [
          "/servers/gigabyte/600.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_a.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_angle.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_back.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_front.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_in.webp",
          "/servers/gigabyte/G494-ZB4-AAP2_side.webp",
        ],
        note: "Extra Fan 장착하면 Rebel 보드 장착가능",
      },
      {
        id: "rebelquad-dell",
        vendor: "dell",
        vendorLabel: "Dell",
        model: "PowerEdge XE7745",
        modelUrl: "https://www.dell.com/ko-kr/shop/ipovw/poweredge-xe7745#techspecs_section",
        raidController: "TBD",
        memory: "TBD",
        cpu: "TBD",
        npu: "TBD",
        power: "TBD",
        distributor: "TBD",
        images: [],
        note: "검증필요",
      },
    ],
  },
};

export const CHIP_ORDER: ChipType[] = ["atom", "atomMax", "rebelQuad"];

export function getChipByServerId(serverId: string): ChipInfo | undefined {
  for (const chip of Object.values(chips)) {
    if (chip.servers.some((s) => s.id === serverId)) {
      return chip;
    }
  }
  return undefined;
}

export function getServerById(serverId: string): ServerConfig | undefined {
  for (const chip of Object.values(chips)) {
    const server = chip.servers.find((s) => s.id === serverId);
    if (server) return server;
  }
  return undefined;
}
