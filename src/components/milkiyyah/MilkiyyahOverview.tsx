import React, { useState } from 'react';
import { MILKIYYAH_TYPES } from '../../data/milkiyyahData';
import { Landmark, ShieldCheck, Sparkles, AlertOctagon, CheckCircle2, Users, Building, Lock, Globe, BookOpen } from 'lucide-react';

export function MilkiyyahOverview() {
  const [selectedTypeIdx, setSelectedTypeIdx] = useState<number>(0);
  const activeType = MILKIYYAH_TYPES[selectedTypeIdx];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Landmark className="w-4 h-4 text-emerald-700" />
          <span>BAB 11: Fiqih Kepemilikan Harta (Al-Milkiyyah fil Islām)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Konsep Istikhlaf, Klasifikasi Hak Milik, & Proteksi Sumber Daya Publik
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam pandangan Islam, <strong>pemilik hakiki seluruh alam semesta adalah Allah SWT</strong> (*Lillāhi mā fis-samāwāti wal-ardh*).
          Kepemilikan manusia pada hakikatnya adalah <em>Istikhlāf</em> (titipan amanah kekhalifahan).
          Syariat Islam mengakui kepemilikan pribadi secara terhormat, namun melarang keras eksploitasi monopoli atas sumber daya publik yang menjadi hajat hidup orang banyak.
        </p>
      </div>

      {/* 3 Pilar Filosofi Kepemilikan Islam */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-300 space-y-2">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-800" />
            <strong className="text-sm font-bold text-emerald-950">1. Konsep Al-Istikhlāf</strong>
          </div>
          <p className="text-stone-700 leading-relaxed text-[11px]">
            Manusia bukan pemilik mutlak, melainkan pengelola (*khalifah*) yang diberi wewenang bertasharruf atas harta titipan Allah sesuai koridor halal dan thayyib (QS. Al-Hadid: 7).
          </p>
        </div>

        <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-300 space-y-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-800" />
            <strong className="text-sm font-bold text-sky-950">2. Perlindungan Milik Pribadi</strong>
          </div>
          <p className="text-stone-700 leading-relaxed text-[11px]">
            Islam melindungi hak milik halal setiap individu (*Hifzhul Māl*). Mengambil, merampas, mencuri, atau menipu harta orang lain diharamkan dan diancam hukum pidana berat (had/ta'zir).
          </p>
        </div>

        <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-300 space-y-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-800" />
            <strong className="text-sm font-bold text-amber-950">3. Fungsi Sosial Harta</strong>
          </div>
          <p className="text-stone-700 leading-relaxed text-[11px]">
            Harta tidak boleh berputar hanya di kalangan orang-orang kaya saja (*Kay lā yakūna dūlatan baynal aghniyā'* - QS. Al-Hasyr: 7). Ada hak fakir miskin berupa zakat, infaq, dan sedekah.
          </p>
        </div>
      </div>

      {/* 4 Klasifikasi Kepemilikan Interaktif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Building className="w-4 h-4 text-emerald-700" />
            <span>4 Kategori Utama Kepemilikan</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Pembagian Kepemilikan Berdasarkan Obyek & Subyeknya
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih jenis kepemilikan di bawah untuk menelaah karakteristik, hak kewenangan, dan contohnya:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {MILKIYYAH_TYPES.map((type, idx) => {
            const isSelected = selectedTypeIdx === idx;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedTypeIdx(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] block font-arabic opacity-85">{type.nameArabic}</span>
                <span className="text-xs font-bold block mt-0.5">{type.name}</span>
                <span className="text-[10px] block opacity-75 mt-1">
                  {type.category === 'individu'
                    ? 'Milik Individu'
                    : type.category === 'publik'
                    ? 'Milik Publik / Umum'
                    : 'Milik Kas Negara'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Type Detail */}
        {activeType && (
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                  <span>{activeType.name}</span>
                  <span className="text-xs font-arabic text-emerald-800 font-normal">
                    ({activeType.nameArabic})
                  </span>
                </h3>
                <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{activeType.definition}</p>
              </div>
              <span
                className={`text-[10px] font-bold px-2.5 py-1 rounded border self-start sm:self-auto shrink-0 ${
                  activeType.scope === 'sempurna'
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-amber-100 text-amber-800 border-amber-300'
                }`}
              >
                {activeType.scope === 'sempurna' ? 'CAKUP FISIK + MANFAAT' : 'HANYA MANFAAT / FISIK SAJA'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Karakteristik */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold text-stone-700 block">
                  Karakteristik & Hak Hukum:
                </span>
                <ul className="space-y-1.5">
                  {activeType.characteristics.map((c, cIdx) => (
                    <li key={cIdx} className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-start gap-2 text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contoh Riil */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold text-stone-700 block">
                  Contoh Penerapan Nyata:
                </span>
                <ul className="space-y-1.5">
                  {activeType.examples.map((ex, exIdx) => (
                    <li key={exIdx} className="p-2.5 bg-white rounded-lg border border-stone-200 text-stone-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 font-mono">
              <strong className="text-emerald-950">Landasan Syar'i: </strong>
              {activeType.dalil}
            </div>
          </div>
        )}
      </div>

      {/* Peringatan Keras: Tiga Kepemilikan Publik yang Diharamkan Diprivatisasi */}
      <div className="p-5 bg-rose-50 rounded-xl border border-rose-300 flex items-start gap-3.5 text-xs text-rose-950">
        <AlertOctagon className="w-6 h-6 text-rose-700 shrink-0 mt-0.5" />
        <div className="space-y-2">
          <strong className="block font-bold text-sm">
            Sabda Rasulullah SAW: Larangan Memonopoli 3 Sumber Daya Vital Umat
          </strong>
          <p className="leading-relaxed font-arabic text-sm text-stone-800">
            «المُسْلِمُونَ شُرَكَاءُ فِي ثَلَاثٍ: فِي المَاءِ، وَالكَلَإِ، وَالنَّارِ»
          </p>
          <p className="leading-relaxed">
            <em>"Kaum muslimin berserikat (memiliki hak bersama) dalam tiga perkara: <strong>Air mengalir, Padang rumput gembala, dan Api/Energi bahan bakar</strong>."</em> (HR. Abu Dawud no. 3477 & Ibnu Majah).
            Membiarkan korporasi atau perorangan memonopoli sungai, danau, mata air desa, atau tambang energi primer tanpa kendali negara merupakan pelanggaran besar terhadap syariat keadilan ekonomi Islam.
          </p>
        </div>
      </div>
    </div>
  );
}
