import React, { useState, useMemo } from 'react';
import { FOOD_DATABASE } from '../../data/sembelihData';
import { FoodAnimalItem, HalalStatus } from '../../types/sembelih';
import { Search, Utensils, CheckCircle2, AlertOctagon, HelpCircle, ShieldAlert, Sparkles, Filter, ChevronRight, BookOpen } from 'lucide-react';

export function HalalFoodChecker() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<FoodAnimalItem | null>(null);

  const filteredItems = useMemo(() => {
    return FOOD_DATABASE.filter((item) => {
      const matchQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.detailFiqih.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchStatus = selectedStatus === 'all' || item.status === selectedStatus;

      return matchQuery && matchCategory && matchStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Utensils className="w-4 h-4 text-emerald-700" />
          <span>Kaidah Fiqih Al-Ath'imah wal Asyribah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Teknik Penentuan Makanan Halal & Ensiklopedia Hewan
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Kaidah pokok fiqih Islam menetapkan: <em>"Al-Ashlu fil-ath'imati al-hillu illā mā dalla ad-dalīlu 'alā tahrīmihi"</em> (Hukum asal makanan adalah halal sampai ada dalil shahih yang mengharamkannya).
          Gunakan filter interaktif di bawah untuk mengidentifikasi status hukum hewan, olahan modern, serta dalil syar'inya.
        </p>
      </div>

      {/* 7 Kaidah Emas Penentuan Keharaman Hewan */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          <span>7 Kaidah Emas Klasifikasi Syariat</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          7 Tolok Ukur Keharaman Hewan Menurut Fuqaha
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block text-xs">1. Disebutkan Nash Keharamannya</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Babi (seluruh bagian tubuhnya), bangkai (kecuali ikan & belalang), darah mengalir, dan khamr (QS. Al-Ma'idah: 3).
            </p>
          </div>

          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block text-xs">2. Hewan Buas Bertaring (Dzu Nāb)</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Karnivora darat yang memangsa dengan taringnya: harimau, singa, serigala, anjing, kucing, beruang (HR. Muslim).
            </p>
          </div>

          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block text-xs">3. Burung Bercakar Pemangsa (Dzu Mikhlab)</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Burung yang memangsa dengan cakarnya yang kuat: burung elang, rajawali, alap-alap, burung hantu (HR. Muslim).
            </p>
          </div>

          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block text-xs">4. Diperintahkan untuk Dibunuh</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Hewan fasik pengganggu: ular, kalajengking, tikus, anjing gila, burung gagak pemakan bangkai (HR. Bukhari).
            </p>
          </div>

          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block text-xs">5. Dilarang untuk Dibunuh</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Semut, lebah, burung hud-hud, burung shurad, dan katak/kodok (HR. Abu Dawud).
            </p>
          </div>

          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block text-xs">6. Menjijikkan (Al-Khaba'its)</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Kecoa, lalat, cacing tanah, belatung, kutu, dan segala serangga yang dinilai kotor oleh fitrah manusia sehat.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Catalog & Search */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Ensiklopedia Status Kehalalan Hewan & Bahan Pangan
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Daftar komprehensif {FOOD_DATABASE.length} komoditas pangan menurut fatwa madzhab dan MUI:
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari hewan, bahan pangan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2 text-xs">
          {/* Category Filter */}
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-lg border font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Semua Kategori
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('darat')}
            className={`px-3 py-1 rounded-lg border font-medium transition-all ${
              selectedCategory === 'darat'
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Hewan Darat
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('laut_air')}
            className={`px-3 py-1 rounded-lg border font-medium transition-all ${
              selectedCategory === 'laut_air'
                ? 'bg-sky-700 text-white border-sky-700'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Laut & Air
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('unggas_burung')}
            className={`px-3 py-1 rounded-lg border font-medium transition-all ${
              selectedCategory === 'unggas_burung'
                ? 'bg-amber-700 text-white border-amber-700'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Unggas & Burung
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('serangga_melata')}
            className={`px-3 py-1 rounded-lg border font-medium transition-all ${
              selectedCategory === 'serangga_melata'
                ? 'bg-purple-700 text-white border-purple-700'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Serangga / Melata
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('olahan_modern')}
            className={`px-3 py-1 rounded-lg border font-medium transition-all ${
              selectedCategory === 'olahan_modern'
                ? 'bg-indigo-700 text-white border-indigo-700'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            Olahan & Isu Modern
          </button>
        </div>

        {/* Status Filter */}
        <div className="flex flex-wrap items-center gap-2 text-xs border-t border-stone-100 pt-3">
          <span className="text-[11px] font-bold text-stone-500 uppercase mr-1">Filter Status:</span>
          <button
            type="button"
            onClick={() => setSelectedStatus('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
              selectedStatus === 'all'
                ? 'bg-stone-200 text-stone-800'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Semua ({filteredItems.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedStatus('halal')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
              selectedStatus === 'halal'
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            Halal
          </button>
          <button
            type="button"
            onClick={() => setSelectedStatus('haram')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
              selectedStatus === 'haram'
                ? 'bg-rose-100 text-rose-800 border border-rose-300'
                : 'text-rose-700 hover:bg-rose-50'
            }`}
          >
            Haram
          </button>
          <button
            type="button"
            onClick={() => setSelectedStatus('makruh')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
              selectedStatus === 'makruh'
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'text-amber-700 hover:bg-amber-50'
            }`}
          >
            Makruh
          </button>
        </div>

        {/* Food Items List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {filteredItems.map((item) => {
            const isHalal = item.status === 'halal';
            const isHaram = item.status === 'haram';
            const isMakruh = item.status === 'makruh';

            return (
              <div
                key={item.id}
                className={`p-4 rounded-xl border space-y-2.5 transition-all ${
                  isHalal
                    ? 'bg-emerald-50/40 border-emerald-200 hover:border-emerald-400'
                    : isHaram
                    ? 'bg-rose-50/40 border-rose-200 hover:border-rose-400'
                    : 'bg-amber-50/40 border-amber-200 hover:border-amber-400'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">{item.name}</h3>
                    {item.nameArabic && (
                      <span className="text-[11px] font-arabic text-stone-500">{item.nameArabic}</span>
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ${
                      isHalal
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                        : isHaram
                        ? 'bg-rose-100 text-rose-800 border-rose-300'
                        : 'bg-amber-100 text-amber-800 border-amber-300'
                    }`}
                  >
                    {item.statusLabel}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-stone-500 block">
                    'Illat / Alasan Fiqih:
                  </span>
                  <p className="text-stone-700 leading-relaxed text-[11px]">{item.reason}</p>
                </div>

                <div className="p-2.5 bg-white/90 rounded border border-stone-200 text-[11px] text-stone-700 leading-relaxed">
                  <strong className="text-stone-900">Penjelasan Syar'i: </strong>
                  {item.detailFiqih}
                </div>

                <div className="text-[10px] text-stone-500 font-mono">
                  <strong>Dalil: </strong>
                  {item.dalil}
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="p-8 text-center bg-stone-50 rounded-xl border border-stone-200 text-stone-500 text-xs">
            Tidak ditemukan data yang cocok dengan kata kunci "{searchQuery}". Silakan coba kata kunci lain.
          </div>
        )}
      </div>
    </div>
  );
}
