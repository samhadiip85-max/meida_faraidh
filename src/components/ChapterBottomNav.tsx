import React from 'react';
import { MainChapter } from './Header';
import { CHAPTERS_LIST } from '../data/chaptersList';
import { Compass, ChevronDown } from 'lucide-react';

interface ChapterBottomNavProps {
  currentChapter: MainChapter;
  onSelectChapter: (chapter: MainChapter) => void;
  onSelectTab: (tabId: string) => void;
}

export function ChapterBottomNav({
  currentChapter,
  onSelectChapter,
  onSelectTab,
}: ChapterBottomNavProps) {
  const handleJump = (chapterId: MainChapter) => {
    const target = CHAPTERS_LIST.find((c) => c.id === chapterId);
    if (target) {
      onSelectChapter(target.id);
      onSelectTab(target.defaultTab);
    }
  };

  const kls10Chapters = CHAPTERS_LIST.filter((c) => c.fase === 'fase_e_10');
  const kls11Chapters = CHAPTERS_LIST.filter((c) => c.fase === 'fase_f_11');
  const kls12Chapters = CHAPTERS_LIST.filter(
    (c) => c.fase === 'fase_f_12' && c.id !== 'pustaka'
  );
  const pustakaChapter = CHAPTERS_LIST.find((c) => c.id === 'pustaka');

  return (
    <div className="mt-12 pt-6 border-t border-stone-200">
      <div className="bg-stone-50/80 rounded-xl p-4 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-stone-600">
          <Compass className="w-4 h-4 text-emerald-700 shrink-0" />
          <span className="font-semibold text-stone-800">
            Navigasi Lompat Bab Fiqih:
          </span>
          <span className="hidden md:inline text-stone-500">
            Pindah ke bab kajian lainnya kapan saja
          </span>
        </div>

        {/* Clean Dropdown Selector */}
        <div className="relative w-full sm:w-80">
          <select
            value={currentChapter}
            onChange={(e) => handleJump(e.target.value as MainChapter)}
            className="w-full appearance-none pl-3.5 pr-9 py-2 bg-white hover:bg-stone-100/80 border border-stone-300 rounded-lg text-xs font-bold text-stone-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all shadow-2xs"
            title="Lompat ke bab lain"
          >
            <optgroup label="FASE E KELAS 10 (Fiqih Ibadah: Bab 1 s.d. 10)">
              {kls10Chapters.map((c) => (
                <option key={c.id} value={c.id}>
                  BAB {c.number}: {c.titleShort} ({c.titleArabic})
                </option>
              ))}
            </optgroup>

            <optgroup label="FASE F KELAS 11 (Muamalah, Jinayat & Peradilan: Bab 11 s.d. 18)">
              {kls11Chapters.map((c) => (
                <option key={c.id} value={c.id}>
                  BAB {c.number}: {c.titleShort} ({c.titleArabic})
                </option>
              ))}
            </optgroup>

            <optgroup label="FASE F KELAS 12 (Munakahat, Faraidh & Wasiat: Bab 19 s.d. 22)">
              {kls12Chapters.map((c) => (
                <option key={c.id} value={c.id}>
                  BAB {c.number}: {c.titleShort} ({c.titleArabic})
                </option>
              ))}
            </optgroup>

            {pustakaChapter && (
              <optgroup label="REFERENSI">
                <option value="pustaka">
                  Daftar Pustaka & Bibliografi Ilmiah (20 Rujukan)
                </option>
              </optgroup>
            )}
          </select>
          <ChevronDown className="w-4 h-4 text-stone-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
