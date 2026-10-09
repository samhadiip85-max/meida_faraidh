import React from 'react';
import { MainChapter } from './Header';
import { CHAPTERS_LIST, ChapterMeta } from '../data/chaptersList';
import { AppUser } from '../types/userAccess';
import {
  BookOpen,
  ChevronDown,
  Layers,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Library,
  Compass,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface SidebarProps {
  currentChapter: MainChapter;
  onSelectChapter: (chapter: MainChapter) => void;
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  currentTabs: { id: string; label: string }[];
  isOpen: boolean;
  onCloseMobile: () => void;
  currentUser: AppUser;
  onOpenUserManagement: () => void;
  isUserManagementOpen: boolean;
}

export function Sidebar({
  currentChapter,
  onSelectChapter,
  activeTab,
  onSelectTab,
  currentTabs,
  isOpen,
  onCloseMobile,
  currentUser,
  onOpenUserManagement,
  isUserManagementOpen,
}: SidebarProps) {
  const currentMeta =
    CHAPTERS_LIST.find((c) => c.id === currentChapter) || CHAPTERS_LIST[0];

  const kls10Chapters = CHAPTERS_LIST.filter((c) => c.fase === 'fase_e_10');
  const kls11Chapters = CHAPTERS_LIST.filter((c) => c.fase === 'fase_f_11');
  const kls12Chapters = CHAPTERS_LIST.filter(
    (c) => c.fase === 'fase_f_12' && c.id !== 'pustaka'
  );
  const pustakaChapter = CHAPTERS_LIST.find((c) => c.id === 'pustaka');

  // Handle Chapter Dropdown Change
  const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as MainChapter;
    const target = CHAPTERS_LIST.find((c) => c.id === val);
    if (target) {
      onSelectChapter(target.id);
      onSelectTab(target.defaultTab);
      onCloseMobile();
    }
  };

  // Handle Sub-Material Tab Dropdown Change
  const handleTabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectTab(e.target.value);
    onCloseMobile();
  };

  // Stepper helper for sub-modules
  const currentTabIndex = currentTabs.findIndex((t) => t.id === activeTab);
  const prevTab = currentTabIndex > 0 ? currentTabs[currentTabIndex - 1] : null;
  const nextTab =
    currentTabIndex >= 0 && currentTabIndex < currentTabs.length - 1
      ? currentTabs[currentTabIndex + 1]
      : null;

  return (
    <>
      {/* Dedicated Mobile Overlay Backdrop */}
      {isOpen && (
        <div
          onClick={onCloseMobile}
          role="button"
          tabIndex={0}
          aria-label="Tutup menu navigasi"
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
              onCloseMobile();
            }
          }}
          className="fixed inset-0 z-40 bg-stone-900/60 backdrop-blur-sm md:hidden transition-opacity duration-300 animate-in fade-in"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed md:sticky top-0 md:top-14 z-40 md:z-20 h-screen md:h-[calc(100vh-3.5rem)] bg-white border-r border-stone-200 flex flex-col transition-all duration-300 ease-in-out shrink-0 overflow-hidden ${
          isOpen
            ? 'w-72 sm:w-84 translate-x-0 opacity-100'
            : '-translate-x-full md:translate-x-0 md:w-0 md:border-r-0 opacity-0 pointer-events-none md:pointer-events-none'
        }`}
      >
        {/* Top User Status & Close Button */}
        <div className="p-3.5 sm:p-4 border-b border-stone-200 flex items-center justify-between gap-2 bg-stone-50/80">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-2xs">
              {currentUser.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <span className="font-bold text-sm text-stone-900 truncate block">
                {currentUser.name}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                    currentUser.role === 'admin'
                      ? 'bg-rose-100 text-rose-800'
                      : currentUser.role === 'guru'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {currentUser.role}
                </span>
                <span className="text-xs text-stone-500">· MAPK</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onCloseMobile}
            className="p-1.5 text-stone-500 hover:text-stone-800 hover:bg-stone-200/60 rounded-lg transition-colors"
            title="Tutup Menu Samping"
            aria-label="Tutup Menu Samping"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Body with Clean Dropdowns */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 scrollbar-thin scrollbar-thumb-stone-200">
          {/* DROPDOWN 1: PILIH BAB FIQIH */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="font-bold text-stone-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-700" />
                <span>Pilih Bab Fiqih:</span>
              </label>
              <span className="text-xs text-stone-500 font-mono font-medium">22 Bab</span>
            </div>

            <div className="relative">
              <select
                value={currentChapter}
                onChange={handleChapterChange}
                className="w-full appearance-none pl-3.5 pr-9 py-3 bg-stone-50 hover:bg-stone-100 border border-stone-300 rounded-xl text-sm font-bold text-stone-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all shadow-2xs"
                title="Pilih bab fiqih kajian"
              >
                <optgroup label="FASE E KELAS 10 (Fiqih Ibadah)">
                  {kls10Chapters.map((c) => (
                    <option key={c.id} value={c.id}>
                      BAB {c.number}: {c.titleShort} ({c.titleArabic})
                    </option>
                  ))}
                </optgroup>

                <optgroup label="FASE F KELAS 11 (Muamalah & Jinayat)">
                  {kls11Chapters.map((c) => (
                    <option key={c.id} value={c.id}>
                      BAB {c.number}: {c.titleShort} ({c.titleArabic})
                    </option>
                  ))}
                </optgroup>

                <optgroup label="FASE F KELAS 12 (Keluarga & Waris)">
                  {kls12Chapters.map((c) => (
                    <option key={c.id} value={c.id}>
                      BAB {c.number}: {c.titleShort} ({c.titleArabic})
                    </option>
                  ))}
                </optgroup>

                {pustakaChapter && (
                  <optgroup label="REFERENSI ILMIAH">
                    <option value="pustaka">
                      Daftar Pustaka (20 Rujukan Mu'tabar)
                    </option>
                  </optgroup>
                )}
              </select>
              <ChevronDown className="w-4 h-4 text-stone-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* DROPDOWN 2: MENU SUB-MATERI (MODUL BAB AKTIF) */}
          {!isUserManagementOpen && (
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <label className="font-bold text-stone-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  <span>Menu Materi ({currentMeta.titleShort}):</span>
                </label>
                <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {currentTabs.length} Modul
                </span>
              </div>

              <div className="relative">
                <select
                  value={activeTab}
                  onChange={handleTabChange}
                  className="w-full appearance-none pl-3.5 pr-9 py-3 bg-emerald-50/70 hover:bg-emerald-100/60 border border-emerald-300 rounded-xl text-sm font-bold text-emerald-950 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all shadow-2xs"
                  title="Pilih sub-modul materi yang ingin dipelajari"
                >
                  {currentTabs.map((tab, idx) => (
                    <option key={tab.id} value={tab.id}>
                      {idx + 1}. {tab.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-emerald-700 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* List of Module Menu Items for Quick One-Tap Navigation */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block px-1">
                  Pilih Sub-Materi:
                </span>
                <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                  {currentTabs.map((tab, idx) => {
                    const isActive = tab.id === activeTab;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          onSelectTab(tab.id);
                          onCloseMobile();
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-2 border ${
                          isActive
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                            : 'bg-stone-50 hover:bg-stone-100/90 text-stone-800 border-stone-200/80 hover:border-stone-300'
                        }`}
                      >
                        <span className="truncate">
                          <span className={isActive ? 'text-emerald-200 mr-1.5' : 'text-stone-400 mr-1.5'}>
                            {idx + 1}.
                          </span>
                          {tab.label}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-emerald-300 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Prev / Next Stepper Buttons within Chapter */}
              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  type="button"
                  disabled={!prevTab}
                  onClick={() => {
                    if (prevTab) {
                      onSelectTab(prevTab.id);
                      onCloseMobile();
                    }
                  }}
                  className="flex-1 py-1.5 px-2.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 disabled:opacity-40 text-xs font-semibold text-stone-700 flex items-center justify-center gap-1 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="truncate">Modul Sblm</span>
                </button>

                <button
                  type="button"
                  disabled={!nextTab}
                  onClick={() => {
                    if (nextTab) {
                      onSelectTab(nextTab.id);
                      onCloseMobile();
                    }
                  }}
                  className="flex-1 py-1.5 px-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors shadow-2xs"
                >
                  <span className="truncate">Modul Lanjut</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ACTIVE CHAPTER & TOPIC INFORMATION CARD */}
          {!isUserManagementOpen && (
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide">
                  Info Bab Aktif
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {currentMeta.faseBadge}
                </span>
              </div>

              <div>
                <span className="font-arabic text-base text-stone-600 block leading-relaxed font-bold">
                  {currentMeta.titleArabic}
                </span>
                <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base mt-0.5">
                  {currentMeta.title}
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {currentMeta.subtitle}
                </p>
              </div>

              <div className="pt-2.5 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
                <span className="font-medium">Bab {currentMeta.number} dari 22 Bab</span>
                <span className="text-emerald-700 font-bold font-mono">
                  {currentMeta.categoryLabel}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Action: User Access Management Button */}
        <div className="p-3.5 border-t border-stone-200 bg-stone-50/80 space-y-2">
          <button
            type="button"
            onClick={() => {
              onOpenUserManagement();
              onCloseMobile();
            }}
            className={`w-full p-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between gap-2 border ${
              isUserManagementOpen
                ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                : 'bg-white hover:bg-emerald-50 text-stone-800 hover:text-emerald-950 border-stone-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Manajemen Akses User</span>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-mono font-semibold">
              CRUD
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
