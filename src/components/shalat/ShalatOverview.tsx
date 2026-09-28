import React, { useState } from 'react';
import { RUKUN_SHALAT, SHALAT_BATAL } from '../../data/shalatData';
import { RukunCategory } from '../../types/shalat';
import { Clock, ShieldAlert, Sparkles, CheckCircle2, AlertOctagon, Info } from 'lucide-react';

export function ShalatOverview() {
  const [selectedCategory, setSelectedCategory] = useState<RukunCategory | 'all'>('all');

  const filteredRukun =
    selectedCategory === 'all'
      ? RUKUN_SHALAT
      : RUKUN_SHALAT.filter((r) => r.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Clock className="w-4 h-4 text-emerald-700" />
          <span>BAB 3: Fiqih Shalat (Tiang Agama Islam)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Syarat, Rukun Fardhu & Hal-Hal Pembatal Shalat
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Shalat adalah rukun Islam kedua dan tiang penyangga agama ("الصَّلَاةُ عِمَادُ الدِّينِ").
          Shalat merupakan amalan pertama yang akan dihisab pada hari kiamat. Keabsahannya bertumpu
          pada terpenuhinya seluruh syarat sah, pelaksanaan rukun secara tertib dan thuma'ninah, serta
          terhindar dari hal-hal yang membatalkannya.
        </p>
      </div>

      {/* Syarat Wajib vs Syarat Sah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="w-4 h-4" />
            <span>Fondasi Sebelum Menunaikan Shalat</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Syarat Wajib Shalat & Syarat Sah Shalat
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Syarat Wajib */}
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
              <h3 className="font-bold text-sm text-stone-900">3 Syarat Wajib Shalat</h3>
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Kriteria Mukallaf
              </span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Kriteria seseorang diwajibkan oleh Allah SWT untuk menunaikan shalat:
            </p>
            <ol className="space-y-1.5 list-decimal list-inside text-stone-800 font-medium">
              <li><strong>Islam:</strong> Tidak wajib bagi orang kafir ashli di dunia secara tuntutan qadha'.</li>
              <li><strong>Baligh:</strong> Telah mencapai usia dewasa (tanda mimpi basah, haid, atau genap 15 tahun).</li>
              <li><strong>Berakal Sehat:</strong> Tidak wajib bagi orang gila, hilang ingatan, atau pingsan tanpa sengaja.</li>
            </ol>
          </div>

          {/* Syarat Sah */}
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
              <h3 className="font-bold text-sm text-stone-900">5 Syarat Sah Shalat</h3>
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Kriteria Keabsahan
              </span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Hal-hal yang harus dipenuhi sebelum dan saat shalat berlangsung agar shalat sah:
            </p>
            <ol className="space-y-1.5 list-decimal list-inside text-stone-800 font-medium">
              <li><strong>Suci dari Hadats Kecil & Besar:</strong> Berwudhu atau mandi wajib.</li>
              <li><strong>Suci dari Najis:</strong> Pada badan, pakaian yang dikenakan, dan tempat sujud.</li>
              <li><strong>Menutup Aurat:</strong> Laki-laki antara pusar dan lutut; perempuan seluruh tubuh kecuali wajah dan telapak tangan.</li>
              <li><strong>Mengetahui Masuknya Waktu Shalat:</strong> Berdasarkan jam, azan, atau ijtihad tanda alam.</li>
              <li><strong>Menghadap Arah Kiblat (Ka'bah):</strong> Mengarahkan dada lurus ke arah Ka'bah di Makkah.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* 13 Rukun Shalat Interaktif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <CheckCircle2 className="w-4 h-4" />
              <span>Rukun Fardhu Shalat (Mazhab Syafi'i)</span>
            </div>
            <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
              13 Rukun Shalat (Qalbi, Qauli, Fi'li & Ma'nawi)
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200 text-xs">
            {[
              { id: 'all', label: 'Semua (13)' },
              { id: 'qalbi', label: 'Qalbi (1)' },
              { id: 'qauli', label: 'Qauli (5)' },
              { id: 'fili', label: 'Fi\'li (6)' },
              { id: 'manawi', label: 'Ma\'nawi (1)' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setSelectedCategory(btn.id as any)}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  selectedCategory === btn.id
                    ? 'bg-white text-emerald-950 font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredRukun.map((r) => (
            <div
              key={r.id}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-950 font-bold rounded text-[10px]">
                  {r.categoryLabel}
                </span>
                <span className="font-arabic text-stone-500 text-[11px]">{r.nameArabic}</span>
              </div>

              <h3 className="font-bold text-stone-900 text-sm">{r.name}</h3>
              <p className="text-stone-600 leading-relaxed">{r.description}</p>

              <div className="pt-2 border-t border-stone-200/80 flex items-center justify-between">
                {r.tumaninahRequired ? (
                  <span className="text-[10px] text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-semibold flex items-center gap-1">
                    <span>⚡ Wajib Thuma'ninah</span>
                  </span>
                ) : (
                  <span className="text-[10px] text-stone-400">Rukun Primer</span>
                )}
                {r.dalil && (
                  <span className="text-[10px] text-stone-400 font-mono truncate max-w-[120px]">
                    {r.dalil.split(':')[0]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 11 Pembatal Shalat */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
          <ShieldAlert className="w-4 h-4 text-rose-600" />
          <span>Mubthilatush Shalah (Hal-Hal yang Membatalkan Shalat)</span>
        </div>
        <p className="text-xs text-stone-500">
          Perkara yang seketika merusak keabsahan shalat sehingga shalat wajib diulang dari awal:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
          {SHALAT_BATAL.map((item, idx) => (
            <div
              key={idx}
              className="p-3 bg-rose-50/40 rounded-lg border border-rose-200/80 text-rose-950 font-medium leading-relaxed"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
