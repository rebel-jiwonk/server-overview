export type VendorType = "supermicro" | "gigabyte";
export type ChipType = "atom" | "atomMax" | "rebel";

export type ServerConfig = {
  label: string;
  chassis: string;
  formFactor: string;
  nodeCount: string;
  shortSpec: string;
  image: string;
  pills: {
    npu: string;
    cpu: string;
    pcie: string;
  };
  specs: Record<string, string>;
};

export const servers: Record<VendorType, Record<ChipType, ServerConfig>> = {
  supermicro: {
    atom: {
      label: "Supermicro · ATOM",
      chassis: "AS-4125GS-TNRT2",
      formFactor: "4U GPU server · 8 accelerator slots",
      nodeCount: "1 node · ATOM™ cards",
      shortSpec: "Dual AMD EPYC 9355 · PCIe 5.0",
      image: "/servers/as-4125gs-tnrt2.png",
      pills: {
        npu: "ATOM™ NPU · PCIe cards",
        cpu: "Dual AMD EPYC 9355 (32C/64T, 3.55 GHz)",
        pcie: "PCIe 5.0 x16 switch · dual-root",
      },
      specs: {
        "Chassis": "Supermicro AS-4125GS-TNRT2 (4U GPU server)",
        "CPU platform": "Dual AMD EPYC 9355 (32C/64T, 280 W)",
        "Socket / chipset": "AMD SP5",
        "Memory slots": "24 × DDR5 RDIMM",
        "Max memory": "Up to 6 TB DDR5 RDIMM",
        "Drive bays": '8 × 2.5" NVMe + 2 × 2.5" SATA (hot-swap)',
        "Network": "2 × 10GbE (RJ45 or SFP, per config)",
        "Power": "4 × 2000 W Titanium (2+2 redundant)",
      },
    },

    atomMax: {
      label: "Supermicro · ATOM Max",
      chassis: "AS-4125GS-TNRT2",
      formFactor: "4U GPU server · 8 accelerator slots",
      nodeCount: "1 node · ATOM™ Max cards",
      shortSpec: "Dual AMD EPYC 9355 · PCIe 5.0",
      image: "/servers/as-4125gs-tnrt2.png",
      pills: {
        npu: "ATOM™ Max NPU · high-density",
        cpu: "Dual AMD EPYC 9355",
        pcie: "PCIe 5.0 x16 per card",
      },
      specs: {
        "Chassis": "Supermicro AS-4125GS-TNRT2",
        "CPU platform": "Dual AMD EPYC 9355",
        "Socket / chipset": "AMD SP5",
        "Memory slots": "24 × DDR5 RDIMM",
        "Max memory": "Up to 6 TB DDR5",
        "Accelerator slots": "Up to 8 × ATOM™ Max (PCIe 5.0)",
        "Drive bays": '8 × 2.5" NVMe + 2 × 2.5" SATA',
        "Network": "2 × 10GbE",
        "Power": "4 × 2000 W Titanium (2+2)",
      },
    },

    rebel: {
      label: "Supermicro · REBEL",
      chassis: "AS-4125GS-TNRT2",
      formFactor: "4U GPU server · 8 accelerator slots",
      nodeCount: "1 node · REBEL™ cards",
      shortSpec: "Dual AMD EPYC 9355 · PCIe 5.0",
      image: "/servers/as-4125gs-tnrt2.png",
      pills: {
        npu: "REBEL™ NPU · PCIe cards",
        cpu: "Dual AMD EPYC 9355",
        pcie: "PCIe 5.0 x16",
      },
      specs: {
        "Chassis": "Supermicro AS-4125GS-TNRT2",
        "CPU platform": "Dual AMD EPYC 9355",
        "Accelerator slots": "Up to 8 × REBEL™",
        "Memory slots": "24 × DDR5 RDIMM",
        "Drive bays": '8 × NVMe + 2 × SATA',
        "Network": "2 × 10GbE",
        "Power": "4 × 2000 W Titanium (2+2)",
      },
    },
  },

  gigabyte: {
    atom: {
      label: "Gigabyte · ATOM",
      chassis: "G494-ZB4-AAP2",
      formFactor: "4U GPU server · 8 accelerator slots",
      nodeCount: "1 node · ATOM™ cards",
      shortSpec: "Dual socket platform · PCIe 5.0",
      image: "/servers/g494-zb4-aap2.png",
      pills: {
        npu: "ATOM™ NPU · PCIe cards",
        cpu: "Dual CPU platform (EPYC / Xeon, per config)",
        pcie: "PCIe 5.0 x16",
      },
      specs: {
        "Chassis": "Gigabyte G494-ZB4-AAP2 (4U GPU server)",
        "CPU platform": "Dual-socket server (exact SKU TBD)",
        "Accelerator slots": "Up to 8 × ATOM™ cards",
        "Drive bays": "Front NVMe / SATA mix",
        "Network": "High-speed Ethernet (10/25/100 GbE options)",
        "Power": "Redundant PSUs (Gigabyte 4U platform)",
      },
    },

    atomMax: {
      label: "Gigabyte · ATOM Max",
      chassis: "G494-ZB4-AAP2",
      formFactor: "4U GPU server · 8 accelerator slots",
      nodeCount: "1 node · ATOM™ Max cards",
      shortSpec: "Dual socket · PCIe 5.0",
      image: "/servers/g494-zb4-aap2.png",
      pills: {
        npu: "ATOM™ Max NPU · high-density",
        cpu: "Dual CPU platform",
        pcie: "PCIe 5.0 x16",
      },
      specs: {
        "Chassis": "Gigabyte G494-ZB4-AAP2",
        "Accelerator slots": "Up to 8 × ATOM™ Max",
        "Drive bays": "Front NVMe / SATA (per config)",
        "Network": "High-speed Ethernet",
        "Power": "Redundant PSUs",
      },
    },

    rebel: {
      label: "Gigabyte · REBEL",
      chassis: "G494-ZB4-AAP2",
      formFactor: "4U GPU server · 8 accelerator slots",
      nodeCount: "1 node · REBEL™ cards",
      shortSpec: "Dual socket · PCIe 5.0",
      image: "/servers/g494-zb4-aap2.png",
      pills: {
        npu: "REBEL™ NPU · PCIe cards",
        cpu: "Dual CPU platform",
        pcie: "PCIe 5.0 x16",
      },
      specs: {
        "Chassis": "Gigabyte G494-ZB4-AAP2",
        "Accelerator slots": "Up to 8 × REBEL™",
        "Drive bays": "Front NVMe / SATA",
        "Network": "High-speed Ethernet",
        "Power": "Redundant PSUs",
      },
    },
  },
};