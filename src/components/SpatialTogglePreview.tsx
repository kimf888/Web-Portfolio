import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Eye, Compass, Move3D } from 'lucide-react';

interface SpatialTogglePreviewProps {
  accentHex: string;
}

export const SpatialTogglePreview: React.FC<SpatialTogglePreviewProps> = ({ accentHex }) => {
  const [depthMode, setDepthMode] = useState<'2D Flat' | '3D Spatial View'>('2D Flat');
  const [rotation, setRotation] = useState(15);

  return (
    <div className="bg-slate-100/80 p-4 sm:p-6 border border-slate-200/80 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <Move3D className="w-4 h-4 text-indigo-600" />
          <span className="font-mono text-xs font-semibold text-slate-700 tracking-wider uppercase">
            NEXUS Spatial Viewport Spec
          </span>
        </div>

        {/* Viewport Mode Toggle */}
        <div className="flex items-center gap-1 bg-white p-1 border border-slate-200 font-mono text-[11px]">
          {(['2D Flat', '3D Spatial View'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setDepthMode(mode)}
              className={`px-2.5 py-1  font-semibold transition-all ${
                depthMode === mode
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive 3D Perspective Area */}
      <div className="bg-white p-6 border border-slate-200 shadow-2xs min-h-[200px] flex items-center justify-center relative overflow-hidden perspective-1000">
        <motion.div
          animate={{
            rotateX: depthMode === '3D Spatial View' ? rotation : 0,
            rotateY: depthMode === '3D Spatial View' ? -rotation * 0.8 : 0,
            scale: depthMode === '3D Spatial View' ? 0.95 : 1,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-full max-w-sm bg-slate-50 border border-slate-300 p-4 shadow-lg space-y-3 relative"
        >
          {/* Layer 1 */}
          <div className="p-3 bg-white border border-slate-200 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5" style={{ backgroundColor: accentHex }} />
              <span className="font-mono text-xs font-bold text-slate-800">Spatial Card Alpha</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Z-INDEX: 10</span>
          </div>

          {/* Layer 2 */}
          <div className="p-3 bg-white/90 border border-slate-200 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-slate-500" />
              <span className="font-mono text-xs text-slate-700">Gesture Tracking Mesh</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Z-INDEX: 20</span>
          </div>
        </motion.div>
      </div>

      {depthMode === '3D Spatial View' && (
        <div className="flex items-center gap-3 bg-white p-3 border border-slate-200 text-xs font-mono text-slate-600">
          <span>TILT ANGLE:</span>
          <input
            type="range"
            min="0"
            max="35"
            value={rotation}
            onChange={(e) => setRotation(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <span>{rotation}°</span>
        </div>
      )}
    </div>
  );
};
