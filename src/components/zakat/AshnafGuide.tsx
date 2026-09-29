import React, { useState } from 'react';
import { ASHNAF_LIST, FORBIDDEN_RECIPIENTS } from '../../data/zakatData';
import { Users, ShieldAlert, Sparkles, CheckCircle2, Info, BookOpen } from 'lucide-react';

export function AshnafGuide() {
  const [selectedAshnafId, setSelectedAshnafId] = useState<string>('fakir');

  const activeAshnaf = ASHNAF_LIST.find((a) => a.id === selectedAshnafId)!;

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Users className="w-4 h-4 text-emerald-700" />
          <span>Distribusi Mustahik Zakat Syar'i</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          8 Asnaf Penerima Zakat & Golongan yang Diharamkan
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Penyaluran zakat telah dibatasi secara tegas dan mutlak oleh Allah SWT dalam Surah At-Taubah ayat 60
          ke dalam delapan golongan (<em>Ashnaf Tsamaniyah</em>). Zakat tidak sah jika disalurkan di luar kedelapan kelompok ini.
        </p>
      </div>

      {/* 8 Asnaf List */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            8 Asnaf Penerima Zakat (QS. At-Taubah: 60)
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Klik salah satu golongan di bawah untuk membaca kriteria kelayakan syar'i dan dalilnya:
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {ASHNAF_LIST.map((ashnaf) => {
            const isSelected = selectedAshnafId === ashnaf.id;
            return (
              <button
                key={ashnaf.id}
                type="button"
                onClick={() => setSelectedAshnafId(ashnaf.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-1 ring-emerald-600 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-xs block leading-snug">{ashnaf.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Detail */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
          <div className="flex items-baseline justify-between border-b border-stone-200/80 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                Mustahik Zakat
              </span>
              <h3 className="text-base font-bold text-stone-900 mt-0.5">
                {activeAshnaf.name}
              </h3>
            </div>
            <span className="text-sm font-arabic text-emerald-800 bg-white px-3 py-1 rounded border border-stone-200">
              {activeAshnaf.nameArabic}
            </span>
          </div>

          <div className="space-y-1.5">
            <strong className="text-stone-900 block font-semibold">Definisi & Penjelasan Syar'i:</strong>
            <p className="text-stone-700 leading-relaxed">{activeAshnaf.description}</p>
          </div>

          <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
            <strong className="text-stone-900 block font-semibold">Kriteria Penentuan / Contoh Nyata:</strong>
            <p className="text-stone-600 leading-relaxed">{activeAshnaf.eligibilityCriteria}</p>
          </div>

          <div className="text-[11px] text-stone-400 font-mono">
            Rujukan: {activeAshnaf.dalil}
          </div>
        </div>
      </div>

      {/* Golongan yang Haram Menerima Zakat */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
          <ShieldAlert className="w-4 h-4 text-rose-600" />
          <span>Larangan Penyaluran Zakat</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          4 Golongan yang Haram Menerima Zakat Fardhu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {FORBIDDEN_RECIPIENTS.map((item) => (
            <div
              key={item.title}
              className="p-4 bg-rose-50/40 rounded-xl border border-rose-200 space-y-1.5"
            >
              <h3 className="font-bold text-rose-950 text-sm">{item.title}</h3>
              <p className="text-stone-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
