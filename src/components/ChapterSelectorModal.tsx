import React, { useState, useEffect } from 'react';
import { MainChapter } from './Header';
import { CHAPTERS_LIST, FASE_CATEGORIES, ChapterMeta, FaseKurikulum } from '../data/chaptersList';
import { Search, X, Check, ChevronRight, BookOpen, Layers, GraduationCap, School, Library } from 'lucide-react';

interface ChapterSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapter: MainChapter;
  onSelectChapter: (chapter: MainChapter) => void;
  onSelectTab: (tabId: string) => void;
  initialFaseFilter?: string;
}

export function ChapterSelectorModal({
  isOpen,
  onClose,
  currentChapter,
  onSelectChapter,
  onSelectTab,
  initialFaseFilter = 'all',
}: ChapterSelectorModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFase, setSelectedFase] = useState<string>(initialFaseFilter);

  useEffect(() => {
    if (isOpen) {
      setSelectedFase(initialFaseFilter);
    }
  }, [isOpen, initialFaseFilter]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredChapters = CHAPTERS_LIST.filter((ch) => {
    const matchFase = selectedFase === 'all' || ch.fase === selectedFase;

    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchFase;

    const matchSearch =
      ch.title.toLowerCase().includes(q) ||
      ch.titleShort.toLowerCase().includes(q) ||
      ch.number.toString().includes(q) ||
      ch.titleArabic.includes(q) ||
      ch.subtitle.toLowerCase().includes(q) ||
      ch.faseLabel.toLowerCase().includes(q);

    return matchFase && matchSearch;
  });

  const handleChoose = (chapter: ChapterMeta) => {
    onSelectChapter(chapter.id);
    onSelectTab(chapter.defaultTab);
    onClose();
  };

  // Group chapters by Fase
  const faseEChapters = filteredChapters.filter((c) => c.fase === 'fase_e_10');
  const faseF11Chapters = filteredChapters.filter((c) => c.fase === 'fase_f_11');
  const faseF12Chapters = filteredChapters.filter((c) => c.fase === 'fase_f_12');

  const renderChapterCard = (ch: ChapterMeta) => {
    const isCurrent = currentChapter === ch.id;

    let badgeColor = 'bg-stone-100 text-stone-700 border-stone-200';
    if (ch.fase === 'fase_e_10') badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
    if (ch.fase === 'fase_f_11') badgeColor = 'bg-sky-50 text-sky-800 border-sky-200';
    if (ch.fase === 'fase_f_12') badgeColor = 'bg-rose-50 text-rose-800 border-rose-200';

    return (
      <button
        key={ch.id}
        type="button"
        onClick={() => handleChoose(ch)}
        className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between group relative ${
          isCurrent
            ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20 shadow-xs'
            : 'border-stone-200 bg-white hover:border-emerald-500 hover:bg-stone-50/70 hover:shadow-xs'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${badgeColor}`}>
              {ch.faseBadge} · {ch.categoryLabel}
            </span>
            <span className="font-arabic text-xs text-stone-400 group-hover:text-emerald-700 transition-colors">
              {ch.titleArabic}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <strong className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
              {ch.title}
            </strong>
            {isCurrent && (
              <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
            )}
          </div>

          <p className="text-[11px] text-stone-500 line-clamp-2 mt-1 leading-relaxed">
            {ch.subtitle}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-stone-100 text-[10px] text-stone-400">
          <span>Buka Materi & Simulator</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:text-emerald-700 transition-transform" />
        </div>
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Modal Container */}
      <div
        className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50/70 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-serif font-bold text-lg shadow-xs">
              ف
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold font-serif text-stone-900">
                  Daftar 22 Bab Fiqih (3 Bagian Jenjang Fase)
                </h2>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  Kurikulum Merdeka
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                Tersusun atas 3 bagian: Fase E (Kelas 10), Fase F (Kelas 11), dan Fase F (Kelas 12)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-lg transition-colors"
            title="Tutup (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & 3 Fase Segmented Filters */}
        <div className="p-3 sm:p-4 border-b border-stone-200 bg-white space-y-3 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari bab fiqih (misal: 'shalat', 'nikah', 'waris', 'riba', 'zakat', 'kelas 10')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full pl-9 pr-4 py-2 border border-stone-300 rounded-xl text-xs sm:text-sm bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Hapus
              </button>
            )}
          </div>

          {/* 3 Bagian Fase Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {FASE_CATEGORIES.map((f) => {
              const isSelected = selectedFase === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedFase(f.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <strong className="text-xs font-bold block">{f.label}</strong>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-stone-200/60 text-stone-600'
                      }`}
                    >
                      {f.range}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] line-clamp-1 mt-1 opacity-80 ${
                      isSelected ? 'text-stone-200' : 'text-stone-500'
                    }`}
                  >
                    {f.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chapters Grid Scroll Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {filteredChapters.length === 0 ? (
            <div className="text-center py-12 text-stone-500 space-y-2">
              <Layers className="w-10 h-10 mx-auto text-stone-300" />
              <p className="text-sm font-semibold text-stone-700">Tidak ada bab fiqih yang cocok</p>
              <p className="text-xs text-stone-400">
                Coba gunakan kata kunci lain atau pilih tab "Semua Bab (22)".
              </p>
            </div>
          ) : (
            <>
              {/* BAGIAN 1: FASE E KELAS 10 (BAB 1 - 10) */}
              {faseEChapters.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-emerald-200 pb-2 bg-emerald-50/50 p-2.5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-emerald-700" />
                      <strong className="text-xs sm:text-sm font-bold text-emerald-950 font-serif">
                        BAGIAN 1: FASE E KELAS 10 (BAB 1 – 10)
                      </strong>
                    </div>
                    <span className="text-[11px] font-medium text-emerald-800">
                      Fiqih Ibadah Mahdhah · {faseEChapters.length} Bab
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {faseEChapters.map(renderChapterCard)}
                  </div>
                </div>
              )}

              {/* BAGIAN 2: FASE F KELAS 11 (BAB 11 - 18) */}
              {faseF11Chapters.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-sky-200 pb-2 bg-sky-50/50 p-2.5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <School className="w-4 h-4 text-sky-700" />
                      <strong className="text-xs sm:text-sm font-bold text-sky-950 font-serif">
                        BAGIAN 2: FASE F KELAS 11 (BAB 11 – 18)
                      </strong>
                    </div>
                    <span className="text-[11px] font-medium text-sky-800">
                      Muamalah, Ekonomi, Jinayat & Peradilan · {faseF11Chapters.length} Bab
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {faseF11Chapters.map(renderChapterCard)}
                  </div>
                </div>
              )}

              {/* BAGIAN 3: FASE F KELAS 12 (BAB 19 - 22) */}
              {faseF12Chapters.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-rose-200 pb-2 bg-rose-50/50 p-2.5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-rose-700" />
                      <strong className="text-xs sm:text-sm font-bold text-rose-950 font-serif">
                        BAGIAN 3: FASE F KELAS 12 (BAB 19 – 22)
                      </strong>
                    </div>
                    <span className="text-[11px] font-medium text-rose-800">
                      Munakahat, Perceraian, Faraidh & Wasiat · {faseF12Chapters.length} Bab
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {faseF12Chapters.map(renderChapterCard)}
                  </div>
                </div>
              )}

              {/* DAFTAR PUSTAKA QUICK ACCESS */}
              <div className="pt-2 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => {
                    onSelectChapter('pustaka');
                    onSelectTab('pustaka-overview');
                    onClose();
                  }}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between group ${
                    currentChapter === 'pustaka'
                      ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20 shadow-xs'
                      : 'border-stone-300 bg-stone-50 hover:bg-emerald-50/40 hover:border-emerald-500'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Library className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-emerald-900">
                          Daftar Pustaka & Bibliografi Ilmiah (Al-Marāji' wal Mashādir)
                        </strong>
                        <span className="font-arabic text-xs text-stone-400">المَرَاجِع وَالمَصَادِر</span>
                      </div>
                      <span className="text-[11px] text-stone-500 block mt-0.5">
                        20 Rujukan Utama: Al-Qur'an, Hadits Ahkam, Kitab Kuning Syafi'i, KHI, Fatwa DSN-MUI & Buku MAPK Kemenag RI
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-700">Struktur Kurikulum Fiqih:</span>
            <span className="text-emerald-800 font-medium">Fase E Kelas 10 (10 Bab)</span>
            <span>·</span>
            <span className="text-sky-800 font-medium">Fase F Kelas 11 (8 Bab)</span>
            <span>·</span>
            <span className="text-rose-800 font-medium">Fase F Kelas 12 (4 Bab)</span>
          </div>
          <div className="text-[11px] text-stone-400">
            Tekan <kbd className="px-1.5 py-0.5 bg-stone-200 rounded text-stone-600 font-mono">ESC</kbd> untuk menutup
          </div>
        </div>
      </div>
    </div>
  );
}
