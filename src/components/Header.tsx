import React, { useState } from 'react';
import {
  LayoutGrid,
  Library,
  Menu,
  ShieldCheck,
} from 'lucide-react';
import { ChapterSelectorModal } from './ChapterSelectorModal';
import { CHAPTERS_LIST, ChapterMeta } from '../data/chaptersList';

export type MainChapter =
  | 'thaharah'
  | 'haid'
  | 'shalat'
  | 'jamaah_jumat'
  | 'jenazah'
  | 'zakat'
  | 'puasa'
  | 'haji'
  | 'qurban'
  | 'sembelih'
  | 'milkiyyah'
  | 'jualbeli'
  | 'muamalah'
  | 'hibah_wakaf'
  | 'riba'
  | 'jinayat'
  | 'hudud'
  | 'peradilan'
  | 'munakahat'
  | 'perceraian'
  | 'faraidh'
  | 'wasiat'
  | 'pustaka';

export interface HeaderProps {
  currentChapter: MainChapter;
  onSelectChapter: (chapter: MainChapter) => void;
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onResetCalculator?: () => void;
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
  onOpenUserManagement?: () => void;
  isUserManagementOpen?: boolean;
}

export function Header({
  currentChapter,
  onSelectChapter,
  activeTab,
  onSelectTab,
  onResetCalculator,
  onToggleSidebar,
  isSidebarOpen = true,
  onOpenUserManagement,
  isUserManagementOpen,
}: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialFase, setModalInitialFase] = useState<string>('all');

  const currentChapterMeta: ChapterMeta =
    CHAPTERS_LIST.find((c) => c.id === currentChapter) || CHAPTERS_LIST[0];

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200">
        {/* Clean Top Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
          {/* Brand & Sidebar Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {onToggleSidebar && (
              <button
                type="button"
                onClick={onToggleSidebar}
                className={`p-2 px-3 rounded-xl border transition-all flex items-center gap-2 text-sm font-bold shadow-2xs ${
                  isSidebarOpen
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                    : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                }`}
                title={isSidebarOpen ? 'Sembunyikan Menu Samping' : 'Tampilkan Menu Samping'}
                aria-label={isSidebarOpen ? 'Sembunyikan Menu Samping' : 'Tampilkan Menu Samping'}
              >
                <Menu className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="hidden sm:inline font-semibold">
                  {isSidebarOpen ? 'Tutup Menu' : 'Menu Materi'}
                </span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                onSelectChapter('thaharah');
                onSelectTab('thaharah-overview');
              }}
              className="text-left group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-serif font-bold text-lg shadow-xs group-hover:bg-emerald-800 transition-colors">
                ف
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-stone-900 font-serif">
                  FiqihMAPK
                </span>
                <span className="hidden sm:inline-block ml-2 text-xs text-stone-500 font-sans">
                  Madrasah Aliyah Program Keagamaan
                </span>
              </div>
            </button>
          </div>

          {/* Right Action & Utility Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* "Daftar 22 Bab" Full Catalog Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors border border-stone-200/60"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-stone-500" />
              <span>Daftar 22 Bab</span>
            </button>

            {/* "Daftar Pustaka" Shortcut */}
            <button
              type="button"
              onClick={() => {
                onSelectChapter('pustaka');
                onSelectTab('pustaka-overview');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
                currentChapter === 'pustaka' && !isUserManagementOpen
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                  : 'text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 border-stone-200/60'
              }`}
              title="Daftar Pustaka & Bibliografi Ilmiah"
            >
              <Library className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Daftar Pustaka</span>
            </button>

            {/* "Manajemen Akses User" Button */}
            {onOpenUserManagement && (
              <button
                type="button"
                onClick={onOpenUserManagement}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-colors border ${
                  isUserManagementOpen
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                    : 'text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 border-stone-200/60'
                }`}
                title="Kelola Pengguna & Hak Akses (CRUD)"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span className="hidden sm:inline">Akses User</span>
              </button>
            )}

            {currentChapter === 'faraidh' && onResetCalculator && (
              <button
                type="button"
                onClick={onResetCalculator}
                className="hidden sm:block px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-300 rounded-md hover:bg-stone-50 transition-colors whitespace-nowrap"
              >
                Reset Data
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                onSelectTab(currentChapterMeta.defaultTab);
              }}
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors whitespace-nowrap shadow-xs"
            >
              {currentChapter === 'faraidh'
                ? 'Hitung Waris'
                : currentChapter === 'wasiat'
                ? 'Kalkulator Wasiat'
                : currentChapter === 'pustaka'
                ? 'Buka Pustaka'
                : 'Mulai Belajar'}
            </button>
          </div>
        </div>
      </header>

      {/* Chapter Selector Modal Dialog */}
      <ChapterSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentChapter={currentChapter}
        onSelectChapter={onSelectChapter}
        onSelectTab={onSelectTab}
        initialFaseFilter={modalInitialFase}
      />
    </>
  );
}
