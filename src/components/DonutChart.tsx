import React, { useState } from 'react';
import { CalculatedHeir } from '../types/faraidh';
import { formatRupiah } from '../utils/faraidhEngine';

interface DonutChartProps {
  heirs: CalculatedHeir[];
  netEstate: number;
  asalMasalah: number;
}

const PALETTE = [
  '#047857', // emerald-700
  '#0d9488', // teal-600
  '#0284c7', // sky-600
  '#4f46e5', // indigo-600
  '#7c3aed', // violet-600
  '#c026d3', // fuchsia-600
  '#d97706', // amber-600
  '#ea580c', // orange-600
  '#e11d48', // rose-600
  '#475569', // slate-600
];

export function DonutChart({ heirs, netEstate, asalMasalah }: DonutChartProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const activeHeirs = heirs.filter((h) => !h.isMahjub && h.percentage > 0);

  if (activeHeirs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-stone-50 rounded-xl border border-dashed border-stone-200">
        <p className="text-sm text-stone-500">Pilih ahli waris untuk melihat visualisasi diagram saham waris.</p>
      </div>
    );
  }

  const radius = 80;
  const strokeWidth = 28;
  const circumference = 2 * Math.PI * radius;

  let cumulativeAngle = 0;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
          {activeHeirs.map((heir, i) => {
            const strokeDasharray = `${(heir.percentage / 100) * circumference} ${circumference}`;
            const strokeDashoffset = -((cumulativeAngle / 100) * circumference);
            cumulativeAngle += heir.percentage;
            const isHovered = hoveredIdx === i;
            const color = PALETTE[i % PALETTE.length];

            return (
              <circle
                key={heir.role}
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setHoveredIdx(hoveredIdx === i ? null : i)}
              />
            );
          })}
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
          {hoveredIdx !== null && activeHeirs[hoveredIdx] ? (
            <>
              <span className="text-xs font-medium text-stone-500 truncate max-w-[120px]">
                {activeHeirs[hoveredIdx].nameIndo}
              </span>
              <span className="text-lg font-bold text-stone-900 font-mono-num">
                {activeHeirs[hoveredIdx].percentage.toFixed(1)}%
              </span>
              <span className="text-[10px] text-stone-500 font-mono-num">
                {formatRupiah(activeHeirs[hoveredIdx].totalAmount)}
              </span>
            </>
          ) : (
            <>
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                Asal Masalah
              </span>
              <span className="text-2xl font-bold text-emerald-800 font-mono-num">
                {asalMasalah}
              </span>
              <span className="text-[10px] text-stone-500 font-mono-num">
                {activeHeirs.length} Ahli Waris
              </span>
            </>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="w-full flex-1 space-y-1.5 max-h-56 overflow-y-auto pr-1">
        {activeHeirs.map((heir, i) => {
          const color = PALETTE[i % PALETTE.length];
          const isHovered = hoveredIdx === i;
          return (
            <div
              key={heir.role}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`flex items-center justify-between text-xs p-1.5 rounded transition-colors cursor-pointer ${
                isHovered ? 'bg-stone-100 font-medium' : 'hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span className="truncate text-stone-800">
                  {heir.nameIndo} {heir.count > 1 ? `(${heir.count})` : ''}
                </span>
                <span className="text-stone-400 text-[11px]">· {heir.furudhShare}</span>
              </div>
              <div className="text-right shrink-0 ml-2 font-mono-num text-stone-700">
                <span>{heir.percentage.toFixed(1)}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
