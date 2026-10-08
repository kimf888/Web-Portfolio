import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Layers } from 'lucide-react';

interface FintechChartPreviewProps {
  accentHex: string;
}

export const FintechChartPreview: React.FC<FintechChartPreviewProps> = ({ accentHex }) => {
  const [selectedInterval, setSelectedInterval] = useState<'1M' | '1H' | '1D' | '1W'>('1H');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const dataPoints = [
    { time: '10:00', price: 4210.5, volume: '1.2M' },
    { time: '10:15', price: 4225.8, volume: '2.4M' },
    { time: '10:30', price: 4218.0, volume: '1.8M' },
    { time: '10:45', price: 4242.3, volume: '3.1M' },
    { time: '11:00', price: 4268.0, volume: '4.5M' },
    { time: '11:15', price: 4255.2, volume: '2.9M' },
    { time: '11:30', price: 4280.9, volume: '5.0M' },
  ];

  const minPrice = 4200;
  const maxPrice = 4300;

  return (
    <div className="bg-slate-100/80 p-4 sm:p-6 border border-slate-200/80 space-y-4">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-800">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>KINETIC / USD-TECH</span>
          </div>
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold">
            +3.42%
          </span>
        </div>

        <div className="flex items-center gap-1 bg-white p-1 border border-slate-200 font-mono text-[11px]">
          {(['1M', '1H', '1D', '1W'] as const).map((interval) => (
            <button
              key={interval}
              onClick={() => setSelectedInterval(interval)}
              className={`px-2 py-0.5  font-semibold transition-colors ${
                selectedInterval === interval
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {interval}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Interactive Sparkline Chart */}
      <div className="bg-white p-4 border border-slate-200 shadow-2xs relative">
        <div className="h-40 w-full relative flex items-end justify-between gap-2 pt-6">
          {/* Background grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between opacity-30 pointer-events-none">
            <div className="border-b border-dashed border-slate-300 w-full" />
            <div className="border-b border-dashed border-slate-300 w-full" />
            <div className="border-b border-dashed border-slate-300 w-full" />
          </div>

          {dataPoints.map((pt, idx) => {
            const heightPercent = ((pt.price - minPrice) / (maxPrice - minPrice)) * 100;
            const isHovered = hoveredPoint === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredPoint(idx)}
                onMouseLeave={() => setHoveredPoint(null)}
                className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative z-10"
              >
                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 bg-slate-900 text-white font-mono text-[10px] px-2 py-1 shadow-md whitespace-nowrap z-20"
                  >
                    ${pt.price.toFixed(2)} | Vol: {pt.volume}
                  </motion.div>
                )}

                {/* Bar Visual */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${heightPercent}%` }}
                  className={`w-full max-w-[28px]  transition-all ${
                    isHovered ? 'bg-blue-600 shadow-md' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  style={{ backgroundColor: isHovered ? accentHex : undefined }}
                />

                <span className="text-[10px] font-mono text-slate-400 mt-2">{pt.time}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 font-mono text-[11px] text-slate-600 bg-white p-3 border border-slate-200">
        <div>
          <span className="text-slate-400 block text-[10px]">AVG LATENCY</span>
          <span className="font-bold text-slate-800">8.4 ms</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px]">24H VOLUME</span>
          <span className="font-bold text-slate-800">$184.2 M</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px]">ORDER MATCH</span>
          <span className="font-bold text-emerald-600">99.98%</span>
        </div>
      </div>
    </div>
  );
};
