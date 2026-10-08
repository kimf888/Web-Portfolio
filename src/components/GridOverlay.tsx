import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface GridOverlayProps {
  visible: boolean;
  onClose?: () => void;
}

export const GridOverlay: React.FC<GridOverlayProps> = ({ visible, onClose }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-40 pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Main 12-Column Container aligned with 16:10 1920px canvas */}
          <div className="w-[1920px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-12 gap-4 sm:gap-6 h-full">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="h-full flex flex-col justify-between bg-rose-500/8 border-x border-rose-500/25 relative transition-colors"
                >
                  {/* Top Column Number Pill (below navbar) */}
                  <div className="pt-20 sm:pt-24 flex justify-center">
                    <span className="font-mono text-[10px] font-bold text-rose-500 bg-rose-50/90 border border-rose-300 px-1.5 py-0.5 rounded shadow-2xs">
                      {index + 1}
                    </span>
                  </div>

                  {/* Center Visual Guide Line */}
                  <div className="flex-1 w-full border-r border-dashed border-rose-500/15" />

                  {/* Bottom Column Number Pill */}
                  <div className="pb-6 flex justify-center">
                    <span className="font-mono text-[9px] font-bold text-rose-500/80 bg-rose-50/80 px-1 rounded">
                      C{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Grid Specs Badge at Bottom Left (Interactive pointer-events-auto) */}
          <div className="fixed bottom-4 left-4 z-50 pointer-events-auto">
            <div className="bg-slate-900/95 text-white border border-slate-700 shadow-xl px-3.5 py-2 rounded-lg backdrop-blur-md flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="font-bold text-white">12-Column Grid</span>
              </div>
              <span className="text-slate-400 text-[11px] hidden sm:inline">
                16:10 System (1920px) · 12 Cols · Gap 16/24px
              </span>
              {onClose && (
                <button
                  onClick={onClose}
                  className="ml-1 text-slate-400 hover:text-white underline text-[11px] transition-colors cursor-pointer"
                >
                  关闭网格
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
