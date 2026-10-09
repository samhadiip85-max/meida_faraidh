import React, { useState } from 'react';
import { KHIYAR_TYPES } from '../../data/jualbeliData';
import { RefreshCw, CheckCircle2, AlertCircle, Clock, ShieldCheck, HelpCircle, ArrowRight, BookOpen } from 'lucide-react';

export function KhiyarGuide() {
  const [selectedKhiyarId, setSelectedKhiyarId] = useState<string>('khiyar_majlis');
  const activeKhiyar = KHIYAR_TYPES.find((k) => k.id === selectedKhiyarId) || KHIYAR_TYPES[0];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <RefreshCw className="w-4 h-4 text-emerald-700" />
          <span>Fiqih Perlindungan Konsumen Syar'i (Kitāb Al-Khiyār)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hak Khiyār: Melanjutkan, Membatalkan, & Kebijakan Retur Syar'i
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          <strong>Khiyār</strong> adalah hak syar'i bagi penjual maupun pembeli untuk memilih antara melanjutkan akad jual beli (*Imdhā'*)
          atau membatalkannya (*Faskh*). Hak ini disyariatkan Islam untuk menjamin kerelaan hati sejati (*At-Tarādhī*),
          mencegah penyesalan sepihak, dan melindungi hak konsumen dari cacat tersembunyi atau tipu muslihat.
        </p>
      </div>

      {/* 5 Ragam Khiyar Nav */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Katalog 5 Macam Hak Khiyar</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Masa Berlaku, Syarat Sah, & Contoh Penerapan Nyata
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih jenis khiyar di bawah untuk mempelajari ketentuan batas waktu dan solusi sengketanya:
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {KHIYAR_TYPES.map((k) => {
            const isSelected = selectedKhiyarId === k.id;
            return (
              <button
                key={k.id}
                type="button"
                onClick={() => setSelectedKhiyarId(k.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] block font-arabic opacity-85">{k.nameArabic}</span>
                <span className="text-xs font-bold block mt-0.5 leading-snug">{k.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detail Selected Khiyar */}
        {activeKhiyar && (
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                  <span>{activeKhiyar.name}</span>
                  <span className="text-xs font-arabic text-emerald-800 font-normal">
                    ({activeKhiyar.nameArabic})
                  </span>
                </h3>
                <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{activeKhiyar.description}</p>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 self-start sm:self-auto shrink-0 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Masa: {activeKhiyar.duration}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Syarat Sah */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold text-stone-700 block">
                  Ketentuan & Syarat Sah:
                </span>
                <ul className="space-y-1.5">
                  {activeKhiyar.syaratSah.map((syarat, sIdx) => (
                    <li key={sIdx} className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-start gap-2 text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-[11px]">{syarat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contoh Kasus Lapangan */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold text-stone-700 block">
                  Contoh Kasus Nyata di Lapangan:
                </span>
                <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-2">
                  <p className="text-stone-700 text-[11px] leading-relaxed">
                    {activeKhiyar.contohKasus}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 font-mono">
              <strong className="text-emerald-950">Landasan Syar'i: </strong>
              {activeKhiyar.dalil}
            </div>
          </div>
        )}
      </div>

      {/* Perbandingan Retur E-Commerce & Fiqih Khiyar 'Aib */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          <span>Harmonisasi Fiqih & Belanja Online Modern</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Fitur Komplain / Refund E-Commerce dalam Timbangan Khiyar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <strong className="text-stone-900 block font-bold text-sm">
              1. Syarat Keabsahan Retur Khiyar 'Aib
            </strong>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Konsumen berhak 100% meminta uang kembali (*Faskhul 'Aqd*) apabila:
            </p>
            <ul className="space-y-1 text-stone-700 text-[11px]">
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                <span>Barang memiliki cacat tersembunyi yang mengurangi fungsi atau harga pasaran.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                <span>Cacat tersebut terbukti sudah ada sebelum barang diserahterimakan ke pembeli.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                <span>Penjual tidak berhak menolak retur dengan klausul sepihak "Barang yang dibeli tidak dapat ditukar/dikembalikan".</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <strong className="text-stone-900 block font-bold text-sm">
              2. Kapan Hak Retur Khiyar 'Aib Gugur?
            </strong>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Hak khiyar pembeli menjadi batal dan tidak dapat menuntut ganti rugi jika:
            </p>
            <ul className="space-y-1 text-stone-700 text-[11px]">
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                <span>Pembeli sudah mengetahui cacat barang sejak awal dan rela menerimanya (*Ridhā bil-'Aib*).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                <span>Cacat baru timbul akibat kelalaian atau kesalahan pemakaian oleh pembeli sendiri.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                <span>Pembeli menunda-nunda pengajuan komplain tanpa uzur syar'i padahal telah mengetahui cacatnya.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
