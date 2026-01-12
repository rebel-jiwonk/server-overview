import { motion, AnimatePresence } from "framer-motion";
import type { ServerConfig } from "../../data/servers";

type Props = {
  open: boolean;
  onClose: () => void;
  server: ServerConfig;
};

export function ZoomModal({ open, onClose, server }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black border border-white/10 rounded-2xl p-4 max-w-3xl w-full"
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.85 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={server.image}
              alt={server.label}
              className="rounded-xl w-full"
            />
            <p className="mt-3 text-center text-sm text-white/70">
              {server.label} — {server.formFactor}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}