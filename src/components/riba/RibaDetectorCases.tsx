import React, { useState } from 'react';
import { RIBA_CASES } from '../../data/ribaData';
import { AlertOctagon, CheckCircle2, ShieldAlert, ArrowRight, HelpCircle, Sparkles, Building, Coins } from 'lucide-react';

export function RibaDetectorCases() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case_emas_tukar');
  const activeCase = RIBA_CASES.find((c) => c.id === selectedCaseId) || RIBA_CASES[0];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <AlertOctagon className="w-4 h-4 text-rose-700" />
          <span>Detektor & Laboratorium Kasus Riba Kontemporer</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Bedah Kasus Muamalah: E-Commerce, Paylater, Logam Mulia, & Valas
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam era ekonomi digital dan perbankan modern, modus riba sering kali tersamarkan dalam istilah-istilah finansial baru
          seperti <em>bunga flat</em>, <em>biaya layanan harian</em>, <em>ongkos bikin tukar emas</em>, hingga <em>transaksi forward valas</em>.
          Pelajari analisis fiqih dan solusi transisi syariahnya di bawah ini:
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Pilih Studi Kasus untuk Dibedah
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih salah satu transaksi kontemporer yang sering terjadi di masyarakat:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {RIBA_CASES.map((c) => {
            const isSelected = selectedCaseId === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCaseId(c.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-rose-700 text-white border-rose-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] block opacity-80 uppercase font-semibold">
                  {c.categoryLabel}
                </span>
                <strong className="text-xs font-bold block mt-1 leading-snug">{c.title}</strong>
              </button>
            );
          })}
        </div>

        {/* Selected Case Detail */}
        {activeCase && (
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-5">
            <div className="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-stone-900 text-base">{activeCase.title}</h3>
                <span className="text-xs text-stone-500 block mt-0.5">
                  Kategori Fiqih: {activeCase.categoryLabel}
                </span>
              </div>
              <span
                className={`px-3 py-1 rounded text-xs font-bold self-start sm:self-auto border ${
                  activeCase.statusHukum === 'haram_riba'
                    ? 'bg-rose-100 text-rose-800 border-rose-300'
                    : activeCase.statusHukum === 'sah_halal'
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-amber-100 text-amber-800 border-amber-300'
                }`}
              >
                {activeCase.statusLabel}
              </span>
            </div>

            {/* Skenario Kasus */}
            <div className="space-y-1">
              <span className="text-[11px] uppercase font-bold text-stone-500 block">
                Skenario Transaksi Nyata:
              </span>
              <p className="text-stone-800 text-xs leading-relaxed bg-white p-3.5 rounded-lg border border-stone-200">
                {activeCase.description}
              </p>
            </div>

            {/* Analisis Fiqih */}
            <div className="space-y-1">
              <span className="text-[11px] uppercase font-bold text-rose-900 block">
                Analisis & 'Illat Hukum Fiqih:
              </span>
              <p className="text-stone-700 text-xs leading-relaxed bg-rose-50/60 p-3.5 rounded-lg border border-rose-200">
                {activeCase.alasanFiqih}
              </p>
            </div>

            {/* Solusi Syariah */}
            <div className="p-3.5 bg-emerald-50 rounded-lg border border-emerald-200 text-xs space-y-1">
              <strong className="text-emerald-950 block text-xs">Solusi Rekayasa Bebas Riba (Syar'i):</strong>
              <p className="text-stone-700 text-[11px] leading-relaxed">{activeCase.solusiSyarie}</p>
            </div>

            {/* Dalil */}
            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 font-mono">
              <strong className="text-stone-900">Landasan Syar'i / Fatwa: </strong>
              {activeCase.dalil}
            </div>
          </div>
        )}
      </div>

      {/* Tinjauan Ta'zir vs Ta'widh atas Denda Keterlambatan */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block">
            Kaidah Tambahan Finansial
          </span>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Denda Keterlambatan: Beda Ta'wīdh (Ganti Rugi Riil) vs Ta'zīr (Sanksi Sosial)
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Fatwa DSN-MUI No. 43/DSN-MUI/VIII/2004 mengatur batas tegas denda keterlambatan agar tidak jatuh ke dalam Riba Jahiliyyah:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <strong className="text-stone-900 font-bold text-sm block">1. Ta'wīdh (Ganti Rugi Kerugian Riil)</strong>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Kompensasi atas <strong>kerugian riil dan pasti</strong> yang diderita kreditur akibat debitur yang mampu tetapi menunda pembayaran (seperti biaya riil sewa penagih/biaya notaris).
              Besarnya ganti rugi harus sesuai pengeluaran riil (*real cost*), TIDAK BOLEH berupa persentase keuntungan.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <strong className="text-stone-900 font-bold text-sm block">2. Ta'zīr (Denda Disiplin Dana Sosial)</strong>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Sanksi denda finansial kepada debitur mampu yang sengaja lalai menunda cicilan.
              <strong>DANA DENDA INI TIDAK BOLEH DIAKUI SEBAGAI PENDAPATAN BANK</strong>, melainkan wajib disalurkan 100% ke rekening dana sosial kebajikan (*Qardhul Hasan / Dhuafa*).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
