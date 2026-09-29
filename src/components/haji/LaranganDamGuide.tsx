import React, { useState } from 'react';
import { LARANGAN_IHRAM } from '../../data/hajiData';
import { ShieldAlert, AlertTriangle, Sparkles, CheckCircle2, Info, BookOpen } from 'lucide-react';

export function LaranganDamGuide() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'laki_laki' | 'perempuan' | 'bersama'>('all');

  const filteredLarangan =
    selectedFilter === 'all'
      ? LARANGAN_IHRAM
      : LARANGAN_IHRAM.filter((l) => l.category === selectedFilter || l.category === 'bersama');

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <ShieldAlert className="w-4 h-4 text-rose-700" />
          <span>Larangan Ihram & Kaidah Penebusan Dam</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Pantangan Selama Berihram & 4 Kategori Dam (Denda)
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Sejak berniat ihram haji atau umrah, seorang muslim memasuki keadaan suci (ihram) yang mengharuskannya
          menjauhi sejumlah larangan syar'i. Pelanggaran terhadap larangan tersebut mewajibkan pembayaran Dam (denda)
          sesuai jenis dan tingkat kesalahannya.
        </p>
      </div>

      {/* 4 Kategori Dam dalam Fiqih Syafi'i */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <BookOpen className="w-4 h-4" />
          <span>Matriks Klasifikasi Dam (Denda)</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          4 Macam Dam Berdasarkan Kaidah Syafi'iyah
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
            <h3 className="font-bold text-stone-900 text-sm">1. Dam Tertib & Taqdir</h3>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Denda yang harus dibayar secara berurutan dengan kadar yang telah dipatok pasti oleh nash syariat.
            </p>
            <div className="p-2.5 bg-white rounded border border-stone-200 text-stone-700 text-[11px]">
              <strong>Contoh: </strong>Dam Haji Tamattu' / Qiran, atau meninggalkan salah satu wajib haji (melempar jumrah / mabit). Urutannya: 1 kambing; jika tidak mampu: puasa 10 hari (3 hari di Makkah, 7 hari di tanah air).
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
            <h3 className="font-bold text-stone-900 text-sm">2. Dam Takhyir & Taqdir</h3>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Denda di mana pelanggar boleh <strong>memilih salah satu</strong> dari opsi yang kadarnya telah ditentukan syariat.
            </p>
            <div className="p-2.5 bg-white rounded border border-stone-200 text-stone-700 text-[11px]">
              <strong>Contoh: </strong>Memotong kuku, mencukur rambut, memakai pakaian berjahit, memakai parfum. Opsi pilihan: menyembelih 1 kambing, ATAU puasa 3 hari, ATAU memberi makan 6 orang miskin (masing-masing 1/2 sha').
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
            <h3 className="font-bold text-stone-900 text-sm">3. Dam Tertib & Ta'dil</h3>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Denda berurutan dengan kadar penggantian yang sepadan nilainya.
            </p>
            <div className="p-2.5 bg-white rounded border border-stone-200 text-stone-700 text-[11px]">
              <strong>Contoh: </strong>Bersetubuh (jima') sebelum tahallul awal. Urutan: 1 ekor unta; jika tidak mampu: 1 ekor sapi; jika tidak mampu: 7 ekor kambing; jika tidak mampu: sedekah makanan seharga unta; jika tidak mampu: puasa 1 hari per mud.
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
            <h3 className="font-bold text-stone-900 text-sm">4. Dam Takhyir & Ta'dil</h3>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Denda di mana pelanggar boleh memilih opsi dengan taksiran nilai yang sepadan.
            </p>
            <div className="p-2.5 bg-white rounded border border-stone-200 text-stone-700 text-[11px]">
              <strong>Contoh: </strong>Membunuh hewan darat buruan tanah haram atau menebang pohon. Pilih: menyembelih ternak yang sepadan, ATAU sedekah makanan seharga ternak, ATAU puasa 1 hari per mud makanan.
            </div>
          </div>
        </div>
      </div>

      {/* Rincian 10 Larangan Ihram */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              10 Larangan Ihram & Konsekuensi Hukumnya
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Rincian hal yang diharamkan bagi jamaah selama masih dalam keadaan ihram:
            </p>
          </div>

          <div className="flex gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200 text-xs">
            {[
              { id: 'all', label: 'Semua Larangan' },
              { id: 'laki_laki', label: 'Khusus Pria' },
              { id: 'perempuan', label: 'Khusus Wanita' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setSelectedFilter(btn.id as any)}
                className={`px-3 py-1 rounded font-medium transition-colors ${
                  selectedFilter === btn.id
                    ? 'bg-white text-emerald-950 font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {filteredLarangan.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-900 text-sm">{item.name}</span>
                <span className="text-[10px] text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200 font-mono">
                  {item.category === 'laki_laki'
                    ? 'Pria'
                    : item.category === 'perempuan'
                    ? 'Wanita'
                    : 'Pria & Wanita'}
                </span>
              </div>
              <p className="text-stone-600 leading-relaxed text-[11px]">{item.consequence}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
