import React, { useState } from 'react';
import { RIBA_TYPES } from '../../data/ribaData';
import { RibaKind } from '../../types/riba';
import { ShieldAlert, AlertOctagon, CheckCircle2, ArrowRight, HelpCircle, Layers, CreditCard, ShoppingBag } from 'lucide-react';

export function MacamRibaGuide() {
  const [selectedId, setSelectedId] = useState<RibaKind>('qardh');
  const activeRiba = RIBA_TYPES.find((r) => r.id === selectedId) || RIBA_TYPES[0];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Layers className="w-4 h-4 text-rose-700" />
          <span>Klasifikasi Fiqih 5 Jenis Riba</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Riba Duyūn (Hutang-Piutang) & Riba Buyū' (Jual Beli / Barter)
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Para fuqaha membagi riba ke dalam dua rumpun transaksi pokok:
          <strong> Riba Duyūn</strong> yang terjadi pada utang piutang (*Qardh* dan *Jahiliyyah*),
          serta <strong>Riba Buyū'</strong> yang terjadi pada transaksi jual beli atau barter komoditas ribawi (*Fadhl*, *Nasī'ah*, dan *Yad*).
        </p>
      </div>

      {/* 2 Rumpun Besar Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-4 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2">
          <div className="flex items-center gap-2 text-rose-950 font-bold text-sm">
            <CreditCard className="w-4 h-4 text-rose-800" />
            <span>1. Rumpun Riba Duyūn (رِبَا الدُّيُون)</span>
          </div>
          <p className="text-stone-700 text-[11px] leading-relaxed">
            Riba yang lahir dari transaksi utang-piutang uang atau barang. Terdiri dari <strong>Riba Qardh</strong> (bunga sejak awal akad) dan <strong>Riba Jahiliyyah</strong> (denda bunga tambahan saat debitur terlambat melunasi).
          </p>
        </div>

        <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
            <ShoppingBag className="w-4 h-4 text-amber-800" />
            <span>2. Rumpun Riba Buyū' (رِبَا البُيُوع)</span>
          </div>
          <p className="text-stone-700 text-[11px] leading-relaxed">
            Riba yang lahir dari transaksi pertukaran (barter) komoditas ribawi. Terdiri dari <strong>Riba Fadhl</strong> (selisih takaran sejenis), <strong>Riba Nasi'ah</strong> (penundaan tempo), dan <strong>Riba Yad</strong> (berpisah sebelum serah terima).
          </p>
        </div>
      </div>

      {/* Interactive 5 Riba Selector */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Eksplorasi Rinci 5 Macam Riba
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih jenis riba di bawah untuk menelaah definisi syar'i, perbandingan kasus klasik vs modern, dan solusi syariahnya:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {RIBA_TYPES.map((item) => {
            const isSelected = selectedId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-rose-700 text-white border-rose-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] block font-arabic opacity-85">{item.nameArabic}</span>
                <span className="text-xs font-bold block mt-0.5 leading-snug">{item.name}</span>
                <span className="text-[9px] block opacity-80 mt-1 uppercase font-semibold">
                  {item.category === 'duyun' ? 'Riba Utang' : 'Riba Barter'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Riba Detail Card */}
        {activeRiba && (
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-5">
            <div className="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-stone-900 text-base">{activeRiba.name}</h3>
                <span className="text-xs font-arabic text-rose-800 block mt-0.5">
                  {activeRiba.nameArabic}
                </span>
              </div>
              <span className="px-3 py-1 rounded text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300 self-start sm:self-auto">
                {activeRiba.categoryLabel}
              </span>
            </div>

            {/* Definisi */}
            <div className="space-y-1">
              <span className="text-[11px] uppercase font-bold text-stone-500 block">
                Definisi Fiqih:
              </span>
              <p className="text-stone-800 text-xs leading-relaxed bg-white p-3.5 rounded-lg border border-stone-200">
                {activeRiba.definition}
              </p>
            </div>

            {/* 2 Kolom Kasus Klasik vs Modern */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-white rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block text-xs">Contoh Klasik Era Sahabat / Salaf:</strong>
                <p className="text-stone-600 text-[11px] leading-relaxed">{activeRiba.contohKlasik}</p>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-stone-200 space-y-1">
                <strong className="text-rose-950 block text-xs">Penerapan Modus Modern Era Kini:</strong>
                <p className="text-stone-600 text-[11px] leading-relaxed">{activeRiba.contohModern}</p>
              </div>
            </div>

            {/* Solusi Syariah */}
            <div className="p-3.5 bg-emerald-50 rounded-lg border border-emerald-200 text-xs space-y-1">
              <strong className="text-emerald-950 block text-xs">Solusi Transaksi Bebas Riba (Syar'i):</strong>
              <p className="text-stone-700 text-[11px] leading-relaxed">{activeRiba.solusiSyarie}</p>
            </div>

            {/* Dalil */}
            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 font-mono">
              <strong className="text-rose-950">Landasan Syar'i: </strong>
              {activeRiba.dalil}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
