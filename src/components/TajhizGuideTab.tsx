import React, { useState } from 'react';
import { formatRupiah } from '../utils/faraidhEngine';
import { Layers, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export function TajhizGuideTab() {
  const [sampleGross, setSampleGross] = useState<number>(200000000);
  const [sampleTajhiz, setSampleTajhiz] = useState<number>(7500000);
  const [sampleDebt, setSampleDebt] = useState<number>(25000000);
  const [sampleBequest, setSampleBequest] = useState<number>(30000000);

  const afterDebtTajhiz = Math.max(0, sampleGross - sampleTajhiz - sampleDebt);
  const maxAllowableBequest = afterDebtTajhiz / 3;
  const actualBequest = Math.min(sampleBequest, maxAllowableBequest);
  const finalTirkahWaris = Math.max(0, afterDebtTajhiz - actualBequest);

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Layers className="w-4 h-4" />
          <span>Panduan Fiqih Muamalah Mawarith</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Urutan Hak Atas Harta Peninggalan (Tirkah)
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl">
          Sebelum harta warisan dibagikan kepada para ahli waris, terdapat 4 tahapan hak yang wajib
          diselesaikan secara tertib dan berurutan sesuai kesepakatan Jumhur Ulama.
        </p>
      </div>

      {/* 4 Tahapan Berurutan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Step 1 */}
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-2 relative">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Urutan Ke-1
          </span>
          <h2 className="text-base font-bold text-stone-900">Biaya Tajhiz (Pemakaman)</h2>
          <p className="text-xs text-stone-600 leading-relaxed">
            Biaya pengurusan jenazah secukupnya (kain kafan, memandikan, pemakaman, dan sewa liang lahat) secara ma\'ruf tanpa berlebih-lebihan (israf).
          </p>
          <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-100">
            Diutamakan dari seluruh hak lain menurut Mazhab Hanbali & Syafi'i.
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-2 relative">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Urutan Ke-2
          </span>
          <h2 className="text-base font-bold text-stone-900">Pelunasan Hutang (Duyun)</h2>
          <p className="text-xs text-stone-600 leading-relaxed">
            Meliputi Hutang kepada Allah (Zakat mal, kafarat, nadzar) dan Hutang kepada sesama manusia (pinjaman, transaksi bisnis, sewa).
          </p>
          <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-100">
            Nabi SAW: "Jiwa seorang mukmin terkatung-katung karena hutangnya" (HR. Tirmidzi).
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-2 relative">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Urutan Ke-3
          </span>
          <h2 className="text-base font-bold text-stone-900">Pelaksanaan Wasiat</h2>
          <p className="text-xs text-stone-600 leading-relaxed">
            Wasiat untuk amal jariyah atau orang non-ahli waris. Dibatasi maksimal 1/3 dari harta sisa setelah hutang dan tajhiz.
          </p>
          <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-100">
            Kaidah: "Tidak ada wasiat untuk ahli waris" (HR. Abu Dawud).
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-xl border border-emerald-300 bg-emerald-50/30 p-5 shadow-xs space-y-2 relative">
          <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
            Urutan Ke-4
          </span>
          <h2 className="text-base font-bold text-emerald-950">Pembagian Faraidh</h2>
          <p className="text-xs text-emerald-900 leading-relaxed">
            Sisa harta bersih (Tirkah Shafi\'ah) dibagikan secara mutlak kepada para ahli waris yang berhak sesuai ketentuan ayat mawarith.
          </p>
          <div className="text-[11px] text-emerald-700 pt-2 border-t border-emerald-200">
            QS. An-Nisa: 11-12 & 176 (Faridhatan minallah).
          </div>
        </div>
      </div>

      {/* Interactive Sandbox Simulator for Pre-inheritance Rights */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Simulasi Interaktif Pemurnian Harta Peninggalan
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Ubah nilai slider di bawah untuk melihat bagaimana biaya tajhiz, hutang, dan wasiat
            mempengaruhi sisa harta warisan bersih secara real-time:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                <span>Harta Kotor (Tirkah Bruto):</span>
                <span className="font-mono-num font-bold text-stone-900">
                  {formatRupiah(sampleGross)}
                </span>
              </div>
              <input
                type="range"
                min="20000000"
                max="1000000000"
                step="10000000"
                value={sampleGross}
                onChange={(e) => setSampleGross(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                <span>1. Biaya Tajhiz (Pengurusan Jenazah):</span>
                <span className="font-mono-num font-bold text-stone-900">
                  {formatRupiah(sampleTajhiz)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30000000"
                step="1000000"
                value={sampleTajhiz}
                onChange={(e) => setSampleTajhiz(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                <span>2. Total Hutang (Allah & Manusia):</span>
                <span className="font-mono-num font-bold text-stone-900">
                  {formatRupiah(sampleDebt)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="200000000"
                step="5000000"
                value={sampleDebt}
                onChange={(e) => setSampleDebt(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                <span>3. Nilai Wasiat Permintaan Almarhum:</span>
                <span className="font-mono-num font-bold text-stone-900">
                  {formatRupiah(sampleBequest)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="200000000"
                step="5000000"
                value={sampleBequest}
                onChange={(e) => setSampleBequest(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
              <span className="text-[11px] text-stone-500 block mt-0.5 font-mono-num">
                Batas maksimal 1/3 yang sah: {formatRupiah(maxAllowableBequest)}
              </span>
            </div>
          </div>

          {/* Real-time waterfall result */}
          <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-3">
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
              Diagram Arus Pengeluaran Harta
            </h3>

            <div className="space-y-2 text-xs font-mono-num">
              <div className="flex items-center justify-between p-2 rounded bg-white border border-stone-200">
                <span className="text-stone-700">Total Harta Bruto</span>
                <span className="font-bold text-stone-900">{formatRupiah(sampleGross)}</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-rose-50 border border-rose-200 text-rose-900">
                <span>- Biaya Tajhiz (Pemakaman)</span>
                <span>{formatRupiah(sampleTajhiz)}</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-rose-50 border border-rose-200 text-rose-900">
                <span>- Pelunasan Hutang</span>
                <span>{formatRupiah(sampleDebt)}</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-stone-200/60 font-semibold text-stone-800">
                <span>= Sisa Setelah Hutang & Tajhiz</span>
                <span>{formatRupiah(afterDebtTajhiz)}</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-amber-50 border border-amber-200 text-amber-900">
                <span>- Wasiat yang Dijalankan (Maks 1/3)</span>
                <span>{formatRupiah(actualBequest)}</span>
              </div>

              {sampleBequest > maxAllowableBequest && (
                <div className="p-2 text-[11px] text-amber-800 flex items-start gap-1.5 font-sans">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    Permintaan wasiat ({formatRupiah(sampleBequest)}) dipotong menjadi {formatRupiah(actualBequest)} karena melebihi batas 1/3 syariah.
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-700 text-white font-bold text-sm">
                <span>HARTA BERSIH SIAP WARIS (TIRKAH)</span>
                <span>{formatRupiah(finalTirkahWaris)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
