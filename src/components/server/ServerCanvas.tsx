import { motion } from "framer-motion";
import type { ServerConfig } from "../../data/servers";

export function ServerCanvas({
  server,
  onZoom,
}: {
  server: ServerConfig;
  onZoom: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="border border-white/10 rounded-2xl p-4 bg-white/5 cursor-zoom-in"
      onClick={onZoom}
    >
      <img
        src={server.image}
        alt={server.label}
        className="w-full h-auto rounded-xl"
      />

      <div className="mt-3 text-sm text-white/70">
        <p className="font-medium">{server.label}</p>
        <p>{server.formFactor}</p>
      </div>
    </motion.div>
  );
}