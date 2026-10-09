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
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-xs md:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed md:sticky top-0 md:top-14 z-40 md:z-20 h-screen md:h-[calc(100vh-3.5rem)] w-72 sm:w-80 bg-white border-r border-stone-200 flex flex-col transition-transform duration-200 ease-in-out shrink-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Top User Status & Close Button */}
        <div className="p-3.5 border-b border-stone-200 flex items-center justify-between gap-2 bg-stone-50/70">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-2xs">
              {currentUser.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <span className="font-bold text-xs text-stone-900 truncate block">
                {currentUser.name}
              </span>
              <div className="flex items-center gap-1.5">
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${
                    currentUser.role === 'admin'
                      ? 'bg-rose-100 text-rose-800'
                      : currentUser.role === 'guru'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {currentUser.role}
                </span>
                <span className="text-[10px] text-stone-400">· MAPK</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onCloseMobile}
            className="md:hidden p-1 text-stone-400 hover:text-stone-700 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Body with Clean Dropdowns */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin scrollbar-thumb-stone-200">
          {/* DROPDOWN 1: PILIH BAB FIQIH */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <label className="font-bold text-stone-800 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-700" />
                <span>Pilih Bab Fiqih:</span>
              </label>
              <span className="text-[10px] text-stone-400 font-mono">22 Bab</span>
            </div>

            <div className="relative">
              <select
                value={currentChapter}
                onChange={handleChapterChange}
                className="w-full appearance-none pl-3 pr-8 py-2.5 bg-stone-50 hover:bg-stone-100 border border-stone-300 rounded-xl text-xs font-bold text-stone-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all shadow-2xs"
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
              <ChevronDown className="w-4 h-4 text-stone-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* DROPDOWN 2: MENU SUB-MATERI (MODUL BAB AKTIF) */}
          {!isUserManagementOpen && (
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold text-stone-800 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Menu Materi ({currentMeta.titleShort}):</span>
                </label>
                <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                  {currentTabs.length} Modul
                </span>
              </div>

              <div className="relative">
                <select
                  value={activeTab}
                  onChange={handleTabChange}
                  className="w-full appearance-none pl-3 pr-8 py-2.5 bg-emerald-50/70 hover:bg-emerald-100/60 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-950 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all shadow-2xs"
                  title="Pilih sub-modul materi yang ingin dipelajari"
                >
                  {currentTabs.map((tab, idx) => (
                    <option key={tab.id} value={tab.id}>
                      {idx + 1}. {tab.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-emerald-700 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Prev / Next Stepper Buttons within Chapter */}
              <div className="flex items-center justify-between gap-1.5 pt-1">
                <button
                  type="button"
                  disabled={!prevTab}
                  onClick={() => {
                    if (prevTab) {
                      onSelectTab(prevTab.id);
                      onCloseMobile();
                    }
                  }}
                  className="flex-1 py-1 px-2 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 disabled:opacity-40 text-[11px] font-medium text-stone-700 flex items-center justify-center gap-1 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
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
                  className="flex-1 py-1 px-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 text-white text-[11px] font-medium flex items-center justify-center gap-1 transition-colors"
                >
                  <span className="truncate">Modul Lanjut</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* ACTIVE CHAPTER & TOPIC INFORMATION CARD */}
          {!isUserManagementOpen && (
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wide">
                  Info Bab Aktif
                </span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {currentMeta.faseBadge}
                </span>
              </div>

              <div>
                <span className="font-arabic text-sm text-stone-500 block leading-tight">
                  {currentMeta.titleArabic}
                </span>
                <h4 className="font-serif font-bold text-stone-900 text-xs sm:text-sm mt-0.5">
                  {currentMeta.title}
                </h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  {currentMeta.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-200/80 flex items-center justify-between text-[10px] text-stone-500">
                <span>Bab {currentMeta.number} dari 22 Bab</span>
                <span className="text-emerald-700 font-semibold font-mono">
                  {currentMeta.categoryLabel}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Action: User Access Management Button */}
        <div className="p-3 border-t border-stone-200 bg-stone-50/80 space-y-2">
          <button
            type="button"
            onClick={() => {
              onOpenUserManagement();
              onCloseMobile();
            }}
            className={`w-full p-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-2 border ${
              isUserManagementOpen
                ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                : 'bg-white hover:bg-emerald-50 text-stone-800 hover:text-emerald-950 border-stone-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Manajemen Akses User</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 font-mono">
              CRUD
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
