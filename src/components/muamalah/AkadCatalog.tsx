import React, { useState, useMemo } from 'react';
import { AKAD_MUAMALAH_LIST } from '../../data/muamalahData';
import { AkadMuamalah, AkadCategory } from '../../types/muamalah';
import { Search, BookOpen, CheckCircle2, ChevronRight, ArrowRight, Sparkles, Building, Sprout, Handshake, Briefcase, ShieldCheck, Users } from 'lucide-react';

export function AkadCatalog() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAkadId, setSelectedAkadId] = useState<string>('musaqah');

  const filteredAkads = useMemo(() => {
    return AKAD_MUAMALAH_LIST.filter((akad) => {
      const matchQuery =
        akad.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        akad.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        akad.modernApplication.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory = selectedCategory === 'all' || akad.category === selectedCategory;

      return matchQuery && matchCategory;
    });
  }, [searchQuery, selectedCategory]);

  const activeAkad = AKAD_MUAMALAH_LIST.find((a) => a.id === selectedAkadId) || filteredAkads[0] || AKAD_MUAMALAH_LIST[0];

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          <span>Ensiklopedia 16 Akad Muamalah Fiqih Islam</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Katalog Rukun, Syarat, Skema Alur, & Implementasi Bisnis Modern
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Eksplorasi lengkap 11 akad inti muamalah beserta akad-akad pelengkapnya.
          Gunakan pencarian dan filter di bawah untuk menelaah rukun, syarat sah, alur kerja, hingga penerapannya pada produk perbankan syariah modern.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Daftar Akad ({filteredAkads.length} Ditemukan)
          </h2>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari akad, kata kunci, perbankan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Semua Rumpun ({AKAD_MUAMALAH_LIST.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('pertanian')}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-all ${
              selectedCategory === 'pertanian'
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Pertanian (Musaqah, Muzara'ah, Mukhabarah)
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('kemitraan')}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-all ${
              selectedCategory === 'kemitraan'
                ? 'bg-sky-700 text-white border-sky-700'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Kemitraan (Qiradh, Syirkah)
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('komersial')}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-all ${
              selectedCategory === 'komersial'
                ? 'bg-indigo-700 text-white border-indigo-700'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Komersial (Murabahah, Ijarah)
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('penjaminan')}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-all ${
              selectedCategory === 'penjaminan'
                ? 'bg-amber-700 text-white border-amber-700'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Penjaminan (Syuf'ah, Dhaman, Kafalah, Shuluh, Rahn, Hawalah)
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('jasa_sosial')}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-all ${
              selectedCategory === 'jasa_sosial'
                ? 'bg-purple-700 text-white border-purple-700'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Jasa & Sosial (Wakalah, Wadi'ah, Qardh)
          </button>
        </div>
      </div>

      {/* Main 2-Column Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: List of Akads */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-stone-200 p-3 shadow-xs space-y-2 max-h-[720px] overflow-y-auto scrollbar-thin">
          {filteredAkads.map((akad) => {
            const isSelected = selectedAkadId === akad.id;
            return (
              <button
                key={akad.id}
                type="button"
                onClick={() => setSelectedAkadId(akad.id)}
                className={`w-full text-left p-3 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] block font-arabic opacity-85">{akad.nameArabic}</span>
                  <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-black/10">
                    {akad.category}
                  </span>
                </div>
                <strong className="text-xs font-bold block mt-1 leading-snug">{akad.name}</strong>
                <p className="text-[10px] opacity-75 mt-1 line-clamp-1">{akad.categoryLabel}</p>
              </button>
            );
          })}

          {filteredAkads.length === 0 && (
            <div className="p-6 text-center text-xs text-stone-500">
              Tidak ada akad yang cocok dengan kata kunci pencarian.
            </div>
          )}
        </div>

        {/* Right Side: In-Depth Detailed Card */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-5">
          {activeAkad && (
            <>
              {/* Header Box */}
              <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-stone-900 text-lg">{activeAkad.name}</h3>
                  </div>
                  <span className="text-xs font-arabic text-emerald-800 block mt-0.5">
                    {activeAkad.nameArabic}
                  </span>
                </div>
                <span className="px-3 py-1 rounded text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 self-start sm:self-auto">
                  {activeAkad.categoryLabel}
                </span>
              </div>

              {/* Definition */}
              <div className="space-y-1">
                <span className="text-[11px] uppercase font-bold text-stone-500 block">
                  Definisi Syariat:
                </span>
                <p className="text-stone-800 text-xs leading-relaxed bg-stone-50 p-3.5 rounded-lg border border-stone-200">
                  {activeAkad.definition}
                </p>
              </div>

              {/* 2-Column: Rukun & Syarat */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase font-bold text-stone-700 block">
                    Rukun-Rukun Akad:
                  </span>
                  <ul className="space-y-1.5">
                    {activeAkad.rukun.map((r, idx) => (
                      <li key={idx} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2 text-stone-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                        <span className="leading-relaxed text-[11px]">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] uppercase font-bold text-stone-700 block">
                    Syarat-Syarat Keabsahan:
                  </span>
                  <ul className="space-y-1.5">
                    {activeAkad.syaratSah.map((s, idx) => (
                      <li key={idx} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2 text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-[11px]">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skema Kerja & Implementasi Modern */}
              <div className="space-y-3 pt-1 text-xs">
                <div className="p-3.5 bg-sky-50/70 rounded-lg border border-sky-200 space-y-1">
                  <strong className="text-sky-950 block text-xs">Alur Mekanisme Skema Kerja:</strong>
                  <p className="text-stone-700 leading-relaxed text-[11px]">{activeAkad.skemaKerja}</p>
                </div>

                <div className="p-3.5 bg-emerald-50/70 rounded-lg border border-emerald-200 space-y-1">
                  <strong className="text-emerald-950 block text-xs">Implementasi Praktik Bisnis & Bank Syariah Modern:</strong>
                  <p className="text-stone-700 leading-relaxed text-[11px]">{activeAkad.modernApplication}</p>
                </div>
              </div>

              {/* Dalil */}
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 font-mono">
                <strong className="text-emerald-950">Landasan Syar'i: </strong>
                {activeAkad.dalil}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
