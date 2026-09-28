import React from 'react';
import { BookOpen, HeartHandshake, Droplets, HeartPulse } from 'lucide-react';

export type MainChapter = 'thaharah' | 'haid' | 'munakahat' | 'faraidh';

export interface HeaderProps {
  currentChapter: MainChapter;
  onSelectChapter: (chapter: MainChapter) => void;
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onResetCalculator?: () => void;
}

export function Header({
  currentChapter,
  onSelectChapter,
  activeTab,
  onSelectTab,
  onResetCalculator,
}: HeaderProps) {
  const thaharahTabs = [
    { id: 'thaharah-overview', label: 'Air & Dua Qullah' },
    { id: 'najis', label: 'Macam-Macam Najis' },
    { id: 'wudhu-ghusl', label: 'Wudhu, Mandi & Tayammum' },
    { id: 'thaharah-quiz', label: 'Latihan Soal BAB 1' },
  ];

  const haidTabs = [
    { id: 'haid-overview', label: 'Karakteristik & Larangan' },
    { id: 'blood-simulator', label: 'Simulator Haid vs Istihadhah' },
    { id: 'istihadhah-guide', label: 'Panduan Mustahadhah & FAQ' },
    { id: 'haid-quiz', label: 'Latihan Soal BAB 2' },
  ];

  const munakahatTabs = [
    { id: 'overview', label: 'Rukun & Hukum Nikah' },
    { id: 'mahram', label: 'Peta Mahram' },
    { id: 'wali', label: 'Urutan Wali & Saksi' },
    { id: 'iddah', label: 'Kalkulator Iddah' },
    { id: 'munakahat-quiz', label: 'Latihan Soal BAB 19' },
  ];

  const faraidhTabs = [
    { id: 'calculator', label: 'Kalkulator Waris' },
    { id: 'theory', label: 'Materi Furudh' },
    { id: 'hijab-tree', label: 'Pohon Hijab' },
    { id: 'special-cases', label: 'Kasus Khusus' },
    { id: 'quiz', label: 'Latihan Soal BAB 21' },
    { id: 'tajhiz', label: 'Panduan Tajhiz' },
  ];

  let currentTabs = faraidhTabs;
  let chapterBadge = 'Modul BAB 21 (Faraidh):';

  if (currentChapter === 'thaharah') {
    currentTabs = thaharahTabs;
    chapterBadge = 'Modul BAB 1 (Thaharah):';
  } else if (currentChapter === 'haid') {
    currentTabs = haidTabs;
    chapterBadge = 'Modul BAB 2 (Haid & Nifas):';
  } else if (currentChapter === 'munakahat') {
    currentTabs = munakahatTabs;
    chapterBadge = 'Modul BAB 19 (Munakahat):';
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Zone 1: Main top bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand Zone */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onSelectChapter('thaharah');
              onSelectTab('thaharah-overview');
            }}
            className="text-left group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-serif font-bold text-lg shadow-xs">
              ف
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-stone-900 font-serif">
                FiqihEdu
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-stone-500 font-sans">
                Media Pembelajaran Fiqih Islam
              </span>
            </div>
          </button>
        </div>

        {/* BAB Switcher (Chapter Switcher with 4 BABs) */}
        <div className="flex items-center p-1 bg-stone-100 rounded-lg border border-stone-200 overflow-x-auto max-w-full scrollbar-none">
          {/* BAB 1 */}
          <button
            type="button"
            onClick={() => {
              onSelectChapter('thaharah');
              onSelectTab('thaharah-overview');
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
              currentChapter === 'thaharah'
                ? 'bg-white text-emerald-950 shadow-xs border border-stone-200/60'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Droplets className="w-3.5 h-3.5 text-emerald-700" />
            <span>BAB 1: Thaharah</span>
          </button>

          {/* BAB 2 */}
          <button
            type="button"
            onClick={() => {
              onSelectChapter('haid');
              onSelectTab('haid-overview');
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
              currentChapter === 'haid'
                ? 'bg-white text-emerald-950 shadow-xs border border-stone-200/60'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5 text-emerald-700" />
            <span>BAB 2: Haid & Nifas</span>
          </button>

          {/* BAB 19 */}
          <button
            type="button"
            onClick={() => {
              onSelectChapter('munakahat');
              onSelectTab('overview');
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
              currentChapter === 'munakahat'
                ? 'bg-white text-emerald-950 shadow-xs border border-stone-200/60'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            <span>BAB 19: Munakahat</span>
          </button>

          {/* BAB 21 */}
          <button
            type="button"
            onClick={() => {
              onSelectChapter('faraidh');
              onSelectTab('calculator');
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
              currentChapter === 'faraidh'
                ? 'bg-white text-emerald-950 shadow-xs border border-stone-200/60'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>BAB 21: Faraidh</span>
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-2">
          {currentChapter === 'faraidh' && onResetCalculator && (
            <button
              onClick={onResetCalculator}
              className="px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-300 rounded-md hover:bg-stone-50 transition-colors whitespace-nowrap"
            >
              Reset Data
            </button>
          )}
          <button
            onClick={() => {
              if (currentChapter === 'thaharah') {
                onSelectTab('thaharah-overview');
              } else if (currentChapter === 'haid') {
                onSelectTab('blood-simulator');
              } else if (currentChapter === 'munakahat') {
                onSelectTab('overview');
              } else {
                onSelectTab('calculator');
              }
            }}
            className="px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-700 rounded-md hover:bg-emerald-800 transition-colors whitespace-nowrap shadow-xs"
          >
            {currentChapter === 'faraidh' ? 'Hitung Waris' : 'Mulai Belajar'}
          </button>
        </div>
      </div>

      {/* Sub-navigation bar for active chapter */}
      <div className="bg-stone-50/90 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center overflow-x-auto py-1.5 gap-1 scrollbar-none">
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mr-2 shrink-0">
            {chapterBadge}
          </span>
          {currentTabs.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                    : 'text-stone-700 hover:bg-stone-200/70 hover:text-stone-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
