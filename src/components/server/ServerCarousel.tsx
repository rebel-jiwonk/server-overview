import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ServerConfig } from "../../data/servers";

type Props = {
  server: ServerConfig;
  onZoom?: () => void;
};

export function ServerCarousel({ server, onZoom }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = server.images && server.images.length > 0;
  const imageCount = hasImages ? server.images.length : 0;

  const goToNext = () => {
    if (imageCount > 0) {
      setCurrentIndex((prev) => (prev + 1) % imageCount);
    }
  };

  const goToPrev = () => {
    if (imageCount > 0) {
      setCurrentIndex((prev) => (prev - 1 + imageCount) % imageCount);
    }
  };

  return (
    <div className="panel overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <p className="text-xs text-white/50 uppercase tracking-wider">Server Images</p>
          <p className="text-sm font-semibold text-white mt-0.5">
            {server.vendorLabel} · {server.model}
          </p>
        </div>
        {imageCount > 0 && (
          <div className="flex items-center gap-1.5">
            {server.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? "bg-[var(--accent)] scale-110" 
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Image Area */}
      <div 
        className="relative aspect-[16/10] bg-gradient-to-br from-white/5 to-white/[0.02] cursor-zoom-in"
        onClick={onZoom}
      >
        {hasImages ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={server.images[currentIndex]}
              alt={`${server.model} - Image ${currentIndex + 1}`}
              className="w-full h-full object-contain p-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        ) : (
          // Placeholder when no images
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30">
            <svg 
              className="w-16 h-16 mb-4 opacity-40" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <p className="text-sm font-medium">이미지 준비중</p>
            <p className="text-xs mt-1 text-white/20">Server photos coming soon</p>
          </div>
        )}

        {/* Navigation Arrows */}
        {imageCount > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Footer with quick info */}
      <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02]">
        <div className="flex items-center justify-between text-xs">
          <a 
            href={server.modelUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline flex items-center gap-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            제품 페이지 보기
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          {imageCount > 0 && (
            <span className="text-white/40">
              {currentIndex + 1} / {imageCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
