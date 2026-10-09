import React, { useState } from 'react';
import { SEBAB_TAMALLUK_LIST } from '../../data/milkiyyahData';
import { KeyRound, ShieldCheck, CheckCircle2, ChevronRight, BookOpen, Layers, Sparkles } from 'lucide-react';

export function SebabKepemilikanGuide() {
  const [activeTabId, setActiveTabId] = useState<string>('ikhraz_mubahat');
  const activeSebab = SEBAB_TAMALLUK_LIST.find((s) => s.id === activeTabId) || SEBAB_TAMALLUK_LIST[0];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <KeyRound className="w-4 h-4 text-emerald-700" />
          <span>Sebab-Sebab Sah Kepemilikan (Asbāb At-Tamalluk)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          4 Pintu Sah Memperoleh Hak Milik dalam Syariat Islam
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam fiqih Islam, seseorang tidak dapat mengklaim suatu harta menjadi hak miliknya kecuali melalui salah satu
          dari <strong>4 sebab sah (*Asbāb At-Tamalluk*)</strong> yang telah ditetapkan oleh syariat. Mengambil harta tanpa 4 pintu ini
          dihukumi batil, zalim, atau merampas hak orang lain (*ghashab*).
        </p>
      </div>

      {/* 4 Sebab Tab Selector */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>Katalog Empat Sebab Sah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Eksplorasi Rukun & Syarat Setiap Jalur Kepemilikan
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {SEBAB_TAMALLUK_LIST.map((sebab) => {
            const isSelected = activeTabId === sebab.id;
            return (
              <button
                key={sebab.id}
                type="button"
                onClick={() => setActiveTabId(sebab.id)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] block font-arabic opacity-85">{sebab.titleArabic}</span>
                <span className="text-xs font-bold block mt-0.5 leading-snug">{sebab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Detail Content */}
        {activeSebab && (
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-5">
            <div className="border-b border-stone-200 pb-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span>{activeSebab.title}</span>
                <span className="text-xs font-arabic text-emerald-800 font-normal">
                  ({activeSebab.titleArabic})
                </span>
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">{activeSebab.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Syarat Sah */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold text-stone-700 block">
                  Syarat-Syarat Keabsahan:
                </span>
                <ul className="space-y-1.5">
                  {activeSebab.syaratSah.map((syarat, sIdx) => (
                    <li key={sIdx} className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-start gap-2 text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-[11px]">{syarat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contoh Penerapan */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold text-stone-700 block">
                  Contoh Penerapan Nyata:
                </span>
                <ul className="space-y-1.5">
                  {activeSebab.contohPenerapan.map((contoh, cIdx) => (
                    <li key={cIdx} className="p-2.5 bg-white rounded-lg border border-stone-200 text-stone-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span className="leading-relaxed text-[11px]">{contoh}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 font-mono">
              <strong className="text-emerald-950">Landasan Syar'i: </strong>
              {activeSebab.dalil}
            </div>
          </div>
        )}
      </div>

      {/* Ringkasan Matriks Perbedaan */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <Sparkles className="w-4 h-4 text-emerald-700" />
          <span>Matriks Ringkas Sebab Kepemilikan</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Perbandingan 4 Jalur Pemerolehan Harta
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
              <tr>
                <th className="p-3">Sebab Kepemilikan</th>
                <th className="p-3">Asal Usul Harta</th>
                <th className="p-3">Kebutuhan Ijab-Qabul</th>
                <th className="p-3">Bentuk Kepemilikan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700 text-[11px]">
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">1. Ihrāz Al-Mubāhāt</td>
                <td className="p-3">Benda alam bebas tanpa pemilik</td>
                <td className="p-3">Tidak perlu (cukup penguasaan fisik)</td>
                <td className="p-3">Milik Sempurna (*Milkut Tamm*)</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">2. Al-'Uqūd An-Nāqilah</td>
                <td className="p-3">Milik orang lain yang dialihkan</td>
                <td className="p-3">Wajib Ijab & Qabul (suka sama suka)</td>
                <td className="p-3">Milik Sempurna / Manfaat (sesuai akad)</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">3. Al-Khalafiyyah</td>
                <td className="p-3">Peninggalan mayit / ganti rugi perusak</td>
                <td className="p-3">Otomatis demi hukum syariat (*Ijbāri*)</td>
                <td className="p-3">Milik Sempurna (*Milkut Tamm*)</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">4. At-Tawallud minal Mamlūk</td>
                <td className="p-3">Berkembang dari aset milik sendiri</td>
                <td className="p-3">Tidak perlu (mengikuti induknya)</td>
                <td className="p-3">Milik Sempurna (*Milkut Tamm*)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
