import React, { useState } from 'react';
import {
  DAFTAR_PUSTAKA_LIST,
  KATEGORI_PUSTAKA,
  PustakaItem,
} from '../../data/pustakaData';
import {
  Library,
  BookOpen,
  Search,
  Check,
  Copy,
  ExternalLink,
  GraduationCap,
  Layers,
  Sparkles,
  BookmarkCheck,
} from 'lucide-react';

interface DaftarPustakaViewProps {
  onGoToChapter?: (chapterId: string) => void;
}

export function DaftarPustakaView({ onGoToChapter }: DaftarPustakaViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFase, setSelectedFase] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCitation = (item: PustakaItem) => {
    const citation = `${item.penulis}. (${item.wafat ? item.wafat + '. ' : ''})${item.judul} [${item.judulArab}]. ${item.penerbit}.`;
    navigator.clipboard?.writeText(citation);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredItems = DAFTAR_PUSTAKA_LIST.filter((item) => {
    // Category match
    const matchCategory =
      selectedCategory === 'all' || item.kategori === selectedCategory;

    // Fase filter
    let matchFase = true;
    if (selectedFase === 'fase_e_10') {
      matchFase =
        item.cakupanBab.includes('Bab 1') ||
        item.cakupanBab.includes('Fase E') ||
        item.cakupanBab.includes('Bab 1 s.d. 22');
    } else if (selectedFase === 'fase_f_11') {
      matchFase =
        item.cakupanBab.includes('Bab 11') ||
        item.cakupanBab.includes('Fase F Kelas 11') ||
        item.cakupanBab.includes('Bab 1 s.d. 22');
    } else if (selectedFase === 'fase_f_12') {
      matchFase =
        item.cakupanBab.includes('Bab 19') ||
        item.cakupanBab.includes('Bab 21') ||
        item.cakupanBab.includes('Bab 22') ||
        item.cakupanBab.includes('Fase F Kelas 12') ||
        item.cakupanBab.includes('Bab 1 s.d. 22');
    }

    // Search query match
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchCategory && matchFase;

    const matchSearch =
      item.judul.toLowerCase().includes(q) ||
      item.judulArab.includes(q) ||
      item.penulis.toLowerCase().includes(q) ||
      item.deskripsi.toLowerCase().includes(q) ||
      item.cakupanBab.toLowerCase().includes(q);

    return matchCategory && matchFase && matchSearch;
  });

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Library className="w-4 h-4 text-emerald-700" />
          <span>Daftar Pustaka & Bibliografi Ilmiah (Al-Marāji' wal Mashādir)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Daftar Pustaka & Rujukan Materi FiqihMAPK (Bab 1 s.d. 22)
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Seluruh materi pembelajaran, dalil nash syar'i, fatwa, simulator interaktif, dan kuis evaluasi dalam aplikasi <strong>FiqihMAPK</strong> disusun secara bertanggung jawab berdasarkan <strong>Al-Qur'anul Karim, Kitab Hadits Ahkam, Kitab Kuning Turats Mazhab Syafi'i, Ensiklopedi Fiqih Muqaran, Regulasi Positif KHI, Fatwa DSN-MUI, serta Buku Teks Resmi MAPK Kemenag RI</strong>.
        </p>

        <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-500">
          <div>
            <span className="font-semibold text-stone-700">Penyusun / Penulis: </span>
            <span className="font-medium text-emerald-900">Samhadi Ifriandi Putra</span>
          </div>
          <div>
            <span className="font-semibold text-stone-700">Kurikulum: </span>
            <span>Kurikulum Merdeka Madrasah Aliyah Program Keagamaan (MAPK)</span>
          </div>
          <div>
            <span className="font-semibold text-stone-700">Total Referensi: </span>
            <span className="font-bold text-stone-800">{DAFTAR_PUSTAKA_LIST.length} Kitab & Regulasi</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-5 shadow-xs space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari referensi pustaka (misal: 'An-Nawawi', 'Bulughul Maram', 'Wahbah Az-Zuhaili', 'KHI', 'Faraidh')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-stone-300 rounded-xl text-xs sm:text-sm bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
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

        {/* 2-Tier Filter: Category and Fase */}
        <div className="space-y-2.5 pt-1">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-stone-400 font-bold text-[10px] uppercase tracking-wider shrink-0 mr-1">
              Kategori:
            </span>
            {KATEGORI_PUSTAKA.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Fase Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-stone-400 font-bold text-[10px] uppercase tracking-wider shrink-0 mr-1">
              Fokus Bab:
            </span>
            <button
              type="button"
              onClick={() => setSelectedFase('all')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                selectedFase === 'all'
                  ? 'bg-stone-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Semua Bab (1–22)
            </button>
            <button
              type="button"
              onClick={() => setSelectedFase('fase_e_10')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                selectedFase === 'fase_e_10'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              Fase E Kelas 10 (Bab 1–10)
            </button>
            <button
              type="button"
              onClick={() => setSelectedFase('fase_f_11')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                selectedFase === 'fase_f_11'
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
              }`}
            >
              Fase F Kelas 11 (Bab 11–18)
            </button>
            <button
              type="button"
              onClick={() => setSelectedFase('fase_f_12')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                selectedFase === 'fase_f_12'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'bg-rose-50 text-rose-800 hover:bg-rose-100'
              }`}
            >
              Fase F Kelas 12 (Bab 19–22)
            </button>
          </div>
        </div>
      </div>

      {/* Reference Cards List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-stone-500 px-1">
          <span>Menampilkan {filteredItems.length} dari {DAFTAR_PUSTAKA_LIST.length} referensi rujukan</span>
          <span className="italic">Format sitasi akademis standar internasional</span>
        </div>

        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-xl border border-stone-200 p-12 text-center text-stone-500 space-y-2">
            <BookOpen className="w-10 h-10 mx-auto text-stone-300" />
            <p className="text-sm font-semibold text-stone-700">Tidak ada referensi yang cocok</p>
            <p className="text-xs text-stone-400">
              Coba reset filter kategori atau gunakan kata kunci pencarian yang lebih umum.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item, idx) => {
              let badgeColor = 'bg-stone-100 text-stone-700 border-stone-200';
              if (item.kategori === 'quran_tafsir') badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
              if (item.kategori === 'hadits_ahkam') badgeColor = 'bg-indigo-50 text-indigo-800 border-indigo-200';
              if (item.kategori === 'syafii') badgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
              if (item.kategori === 'muqaran') badgeColor = 'bg-teal-50 text-teal-800 border-teal-200';
              if (item.kategori === 'regulasi') badgeColor = 'bg-rose-50 text-rose-800 border-rose-200';
              if (item.kategori === 'mapk') badgeColor = 'bg-sky-50 text-sky-800 border-sky-200';

              const isCopied = copiedId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-emerald-400 transition-all group"
                >
                  <div className="space-y-2.5">
                    {/* Top Meta */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${badgeColor}`}>
                        {item.kategoriLabel}
                      </span>
                      <span className="text-[10px] font-mono text-stone-500 bg-stone-50 px-2 py-0.5 rounded border border-stone-200">
                        {item.cakupanBab}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <span className="font-arabic text-sm text-emerald-800 font-bold block leading-relaxed">
                        {item.judulArab}
                      </span>
                      <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 group-hover:text-emerald-900 transition-colors mt-0.5">
                        {item.judul}
                      </h3>
                      <div className="text-xs text-stone-600 font-medium mt-1">
                        <strong>Penulis: </strong>{item.penulis} {item.wafat && `(${item.wafat})`}
                      </div>
                      <div className="text-[11px] text-stone-500">
                        <strong>Penerbit: </strong>{item.penerbit}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-stone-600 leading-relaxed pt-1 border-t border-stone-100">
                      {item.deskripsi}
                    </p>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
                    <span className="text-[10px] text-stone-400 font-mono">
                      Ref #{idx + 1}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleCopyCitation(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                      title="Salin sitasi ilmiah"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-500" />
                          <span>Salin Sitasi</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Statement of Authenticity and Methodology */}
      <div className="p-6 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-3 text-xs text-stone-800">
        <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
          <BookmarkCheck className="w-5 h-5 text-emerald-700" />
          <span>Metodologi Ilmiah & Integritas Sumber FiqihMAPK</span>
        </div>
        <p className="text-stone-700 leading-relaxed text-[11px]">
          Seluruh formulasi kaidah fiqih, rumus hisab faraidh warisan, batas sepertiga wasiat, simulasi darah haid/nifas, penentuan taksiran diyat unta, hingga skema 16 akad muamalah syariah yang dimuat dalam aplikasi ini diselaraskan dengan teks-teks mu'tamad turats Mazhab Asy-Syafi'i (seperti <em>Al-Majmu'</em> karya Imam An-Nawawi, <em>Fathul Qarib</em>, dan <em>Matan Ar-Rahabiyyah</em>), serta dikontekstualisasikan dengan hukum perundang-undangan nasional yang berlaku di Indonesia (KHI, UU Perkawinan, UU Zakat, UU Wakaf, serta Fatwa-Fatwa DSN-MUI).
        </p>
        <div className="pt-1 text-[11px] text-emerald-900 font-semibold">
          Disusun dan dikurasi oleh Samhadi Ifriandi Putra untuk keperluan pembelajaran mata pelajaran Fiqih Madrasah Aliyah Program Keagamaan (MAPK) Kelas X, XI, dan XII.
        </div>
      </div>
    </div>
  );
}
