import React, { useState } from 'react';
import { MAHRAM_RELATIONS } from '../../data/munakahatData';
import { MahramCategory, MahramRelation } from '../../types/munakahat';
import { Shield, ShieldAlert, CheckCircle, Search, HelpCircle } from 'lucide-react';

const COMMON_RELATIONSHIPS = [
  { id: 'sepupu', name: 'Sepupu (Anak Paman / Anak Bibi)', status: 'halal', reason: 'Bukan mahram. Boleh dinikahi menurut syariat Islam (QS. Al-Ahzab: 50).' },
  { id: 'ibu_mertua', name: 'Ibu Mertua', status: 'mahram_muabbad', reason: 'Mahram Mu\'abbad karena akad nikah dengan putrinya (QS. An-Nisa: 23).' },
  { id: 'anak_tiri_dukhul', name: 'Anak Tiri (Ibunya sudah dicampuri)', status: 'mahram_muabbad', reason: 'Mahram Mu\'abbad karena sudah dukhul dengan ibunya (QS. An-Nisa: 23).' },
  { id: 'anak_tiri_belum_dukhul', name: 'Anak Tiri (Ibunya belum dicampuri lalu cerai)', status: 'halal', reason: 'Halal dinikahi bila bercerai sebelum dukhul dengan ibunya.' },
  { id: 'ipar', name: 'Saudari Istri (Ipar Perempuan)', status: 'mahram_muaqqat', reason: 'Mahram Muaqqat (sementara). Haram dimadu, namun halal dinikahi bila istri telah wafat atau cerai habis iddah.' },
  { id: 'saudara_susu', name: 'Saudari Sepersusuan', status: 'mahram_muabbad', reason: 'Mahram Mu\'abbad karena persusuan menyamakan derajat keharaman nasab (HR. Bukhari).' },
  { id: 'bibi_kandung', name: 'Bibi Kandung (Saudari Ayah/Ibu)', status: 'mahram_muabbad', reason: 'Mahram Mu\'abbad karena nasab.' },
];

export function MahramChecker() {
  const [selectedCategory, setSelectedCategory] = useState<MahramCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedQuickTest, setSelectedQuickTest] = useState<string>('sepupu');

  const filteredRelations = MAHRAM_RELATIONS.filter((item) => {
    const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchQuery =
      item.nameIndo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameArabic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  const activeTest = COMMON_RELATIONSHIPS.find((r) => r.id === selectedQuickTest)!;

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Shield className="w-4 h-4" />
          <span>Panduan Mahram & Keharaman Nikah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Peta & Ketentuan Mahram dalam Islam
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Mahram adalah orang-orang yang haram untuk dinikahi karena hubungan nasab (keturunan),
          mushaharah (perkawinan), atau radla'ah (persusuan). Keharaman ini ada yang bersifat selamanya (Mu'abbad)
          dan ada yang sementara (Muaqqat).
        </p>
      </div>

      {/* Simulator Cepat Status Mahram */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <HelpCircle className="w-4 h-4" />
          <span>Kuis Cepat: Cek Status Mahram Kerabat Sering Ditanyakan</span>
        </div>
        <p className="text-xs text-stone-600">
          Pilih salah satu hubungan kekerabatan untuk melihat hukum pernikahan menurut syariat:
        </p>

        <div className="flex flex-wrap gap-2">
          {COMMON_RELATIONSHIPS.map((rel) => {
            const isSelected = selectedQuickTest === rel.id;
            return (
              <button
                key={rel.id}
                type="button"
                onClick={() => setSelectedQuickTest(rel.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs font-semibold'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                {rel.name}
              </button>
            );
          })}
        </div>

        {/* Quick test result card */}
        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-stone-900">{activeTest.name}</h3>
            {activeTest.status === 'halal' && (
              <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-100 text-emerald-900 rounded border border-emerald-300">
                ✅ Halal Dinikahi (Bukan Mahram)
              </span>
            )}
            {activeTest.status === 'mahram_muabbad' && (
              <span className="px-2.5 py-0.5 text-xs font-bold bg-rose-100 text-rose-900 rounded border border-rose-300">
                ⛔ Haram Selamanya (Mahram Mu'abbad)
              </span>
            )}
            {activeTest.status === 'mahram_muaqqat' && (
              <span className="px-2.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-900 rounded border border-amber-300">
                ⚠️ Haram Sementara (Mahram Muaqqat)
              </span>
            )}
          </div>
          <p className="text-xs text-stone-700 leading-relaxed">{activeTest.reason}</p>
        </div>
      </div>

      {/* Peta Daftar Lengkap Mahram */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Daftar Rinci Golongan Wanita yang Haram Dinikahi
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Berdasarkan nash QS. An-Nisa ayat 22-23 dan hadits-hadits shahih
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-stone-400" />
            <input
              type="text"
              placeholder="Cari kerabat mahram..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-emerald-700"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-stone-100 rounded-lg">
          {[
            { id: 'all', label: 'Semua Kategori' },
            { id: 'nasab', label: '1. Sebab Nasab' },
            { id: 'mushaharah', label: '2. Sebab Perkawinan (Mushaharah)' },
            { id: 'radlaah', label: '3. Sebab Persusuan (Radla\'ah)' },
            { id: 'muaqqat', label: '4. Mahram Sementara (Muaqqat)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === tab.id
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* List of Mahram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRelations.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2.5 text-xs"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">{item.nameIndo}</h3>
                  <span className="text-[11px] text-stone-500 font-arabic mt-0.5 block">
                    {item.nameArabic}
                  </span>
                </div>
                {item.isPermanent ? (
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-rose-50 text-rose-800 rounded border border-rose-200 shrink-0">
                    Mu'abbad (Selamanya)
                  </span>
                ) : (
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-50 text-amber-800 rounded border border-amber-200 shrink-0">
                    Muaqqat (Sementara)
                  </span>
                )}
              </div>

              {item.conditions && (
                <div className="p-2 bg-white rounded border border-stone-200 text-stone-600">
                  <strong className="text-stone-800 block">Kaidah Khusus:</strong>
                  {item.conditions}
                </div>
              )}

              <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-200/80">
                <strong>Dalil: </strong>
                {item.dalil}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
