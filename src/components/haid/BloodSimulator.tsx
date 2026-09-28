import React, { useState } from 'react';
import { BloodSimulationResult } from '../../types/haid';
import { Activity, Clock, CheckCircle2, AlertTriangle, HelpCircle, Calendar } from 'lucide-react';

export function BloodSimulator() {
  const [totalBloodDays, setTotalBloodDays] = useState<number>(18);
  const [habitualDays, setHabitualDays] = useState<number>(7);
  const [hasTamyiz, setHasTamyiz] = useState<boolean>(false);
  const [strongBloodDays, setStrongBloodDays] = useState<number>(5);

  // Diagnostic calculation logic
  let result: BloodSimulationResult;

  if (totalBloodDays <= 15) {
    // Normal Haid
    result = {
      totalDays: totalBloodDays,
      haidDays: totalBloodDays,
      istihadhahDays: 0,
      categoryName: 'Haid Normal (Tanpa Istihadhah)',
      explanation: `Karena darah keluar tidak melebihi batas maksimal 15 hari 15 malam, maka SELURUH hari (${totalBloodDays} hari) dihukumi sebagai darah haid murni.`,
      prayerObligation: `Dilarang shalat dan puasa selama ${totalBloodDays} hari penuh. Setelah darah berhenti pada hari ke-${totalBloodDays}, wajib segera mandi besar (janabah) dan mulai shalat kembali.`,
      mandiTime: `Seketika darah berhenti pada hari ke-${totalBloodDays}.`,
    };
  } else {
    // Pendarahan Melebihi 15 Hari (Istihadhah)
    if (hasTamyiz && strongBloodDays >= 1 && strongBloodDays <= 15) {
      // Mumayyizah
      const haid = strongBloodDays;
      const istihadhah = totalBloodDays - strongBloodDays;
      result = {
        totalDays: totalBloodDays,
        haidDays: haid,
        istihadhahDays: istihadhah,
        categoryName: 'Mustahadhah Mumayyizah (Bisa Membedakan Darah Kuat & Lemah)',
        explanation: `Sesuai kaidah Fiqih Tamyiz: Darah yang kuat (hitam/kental) selama ${haid} hari dihukumi sebagai HAID, sedangkan darah lemah (merah encer) selama ${istihadhah} hari berikutnya dihukumi sebagai ISTIHADHAH.`,
        prayerObligation: `Haram shalat pada hari ke-1 s.d ke-${haid}. Mulai hari ke-${haid + 1}, wajib mandi besar dan wajib mendirikan shalat serta puasa dengan tata cara bersuci mustahadhah.`,
        mandiTime: `Di akhir hari ke-${haid} (begitu darah kuat berganti menjadi darah lemah).`,
      };
    } else {
      // Ghairu Mumayyizah (Kembali ke Kebiasaan / 'Adah)
      const haid = habitualDays;
      const istihadhah = totalBloodDays - habitualDays;
      result = {
        totalDays: totalBloodDays,
        haidDays: haid,
        istihadhahDays: istihadhah,
        categoryName: 'Mustahadhah Ghairu Mumayyizah (Darah Satu Warna / Tanpa Tamyiz)',
        explanation: `Karena darah keluar melebihi 15 hari dan warna darah seragam, hukum haid dikembalikan kepada siklus kebiasaan bulan lalu ('Adah), yaitu ${haid} hari. Sisa ${istihadhah} hari berikutnya berstatus sebagai darah ISTIHADHAH.`,
        prayerObligation: `Dihitung haid hari ke-1 s.d ${haid}. Bila pada hari ke-${haid + 1} s.d ke-15 wanita mengira masih haid sehingga tidak shalat, maka setelah hari ke-15 terlampaui ia wajib mandi besar dan MENGQADHA seluruh shalat yang ditinggalkan dari hari ke-${haid + 1} sampai hari ke-15.`,
        mandiTime: `Pada akhir hari ke-15 (saat nyata bahwa darahnya berstatus istihadhah).`,
      };
    }
  }

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Activity className="w-4 h-4" />
          <span>Kalkulator & Simulator Fiqih Siklus Darah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Simulator Analisis Darah Haid vs Istihadhah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Alat simulasi cerdas untuk menentukan berapa hari yang dihukumi sebagai darah Haid dan berapa hari
          yang dihukumi sebagai Istihadhah saat pendarahan terjadi melebihi 15 hari sesuai kaidah Mazhab Syafi'i.
        </p>
      </div>

      {/* Simulator Grid */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Atur Parameter Pendarahan
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Geser nilai di bawah ini untuk melihat diagnosis status ibadah Anda:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-6 space-y-5 text-xs">
            {/* Total days slider */}
            <div>
              <div className="flex justify-between font-semibold text-stone-700 mb-1">
                <span>Total Lama Darah Keluar Terus Menerus:</span>
                <span className="font-mono-num font-bold text-emerald-900 text-sm">
                  {totalBloodDays} Hari
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={totalBloodDays}
                onChange={(e) => setTotalBloodDays(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                <span>1 Hari (Min Haid)</span>
                <span className="font-bold text-amber-700">15 Hari (Maks Haid)</span>
                <span>30 Hari</span>
              </div>
            </div>

            {/* Habitual days slider */}
            <div>
              <div className="flex justify-between font-semibold text-stone-700 mb-1">
                <span>Kebiasaan Siklus Haid Bulan Lalu ('Adah):</span>
                <span className="font-mono-num font-bold text-stone-900 text-sm">
                  {habitualDays} Hari
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                value={habitualDays}
                onChange={(e) => setHabitualDays(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
              <span className="text-[10px] text-stone-500 block mt-0.5">
                Rata-rata kebiasaan umum wanita adalah 6 atau 7 hari.
              </span>
            </div>

            {/* Tamyiz checkbox */}
            {totalBloodDays > 15 && (
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-stone-800">
                  <input
                    type="checkbox"
                    checked={hasTamyiz}
                    onChange={(e) => setHasTamyiz(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600"
                  />
                  <span>Bisa Membedakan Warna Darah (Darah Kuat vs Lemah)</span>
                </label>

                {hasTamyiz && (
                  <div className="pt-2 border-t border-stone-200 space-y-1">
                    <div className="flex justify-between font-semibold text-stone-700">
                      <span>Berapa Hari Darah Kuat (Hitam/Kental)?:</span>
                      <span className="font-mono-num font-bold text-rose-900">
                        {strongBloodDays} Hari
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max={Math.min(15, totalBloodDays - 1)}
                      value={strongBloodDays}
                      onChange={(e) => setStrongBloodDays(Number(e.target.value))}
                      className="w-full accent-rose-700"
                    />
                    <span className="text-[10px] text-stone-500 block">
                      Sisa {totalBloodDays - strongBloodDays} hari berikutnya adalah darah lemah (merah/encer).
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Results Box */}
          <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  Diagnosis Hukum
                </span>
                <h3 className="font-bold text-sm text-stone-900 mt-0.5">
                  {result.categoryName}
                </h3>
              </div>
              <span
                className={`px-2.5 py-1 rounded font-bold text-xs ${
                  result.istihadhahDays > 0
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                }`}
              >
                {result.istihadhahDays > 0 ? 'Ada Istihadhah' : 'Haid Normal'}
              </span>
            </div>

            {/* Visual Timeline of Days */}
            <div className="space-y-1.5">
              <span className="font-semibold text-stone-700 block">
                Visualisasi Hari (Total {totalBloodDays} Hari):
              </span>
              <div className="flex flex-wrap gap-1">
                {Array.from({ length: totalBloodDays }).map((_, idx) => {
                  const dayNum = idx + 1;
                  const isHaid = dayNum <= result.haidDays;
                  return (
                    <div
                      key={dayNum}
                      className={`w-6 h-6 rounded flex items-center justify-center font-mono-num text-[10px] font-bold ${
                        isHaid
                          ? 'bg-rose-600 text-white'
                          : 'bg-amber-400 text-amber-950 border border-amber-500'
                      }`}
                      title={`Hari ke-${dayNum}: ${isHaid ? 'Haid' : 'Istihadhah'}`}
                    >
                      {dayNum}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-4 text-[10px] pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-rose-600 inline-block" />
                  <strong>Dihitung Haid: {result.haidDays} Hari</strong>
                </span>
                {result.istihadhahDays > 0 && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-amber-400 inline-block" />
                    <strong>Dihitung Istihadhah: {result.istihadhahDays} Hari</strong>
                  </span>
                )}
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <strong className="text-stone-900 block font-semibold">Alasan Hukum Fiqih:</strong>
              <p className="text-stone-700 leading-relaxed">{result.explanation}</p>
            </div>

            <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-200 space-y-1">
              <strong className="text-emerald-950 block font-semibold">Kewajiban Shalat & Mandi:</strong>
              <p className="text-emerald-900 leading-relaxed">{result.prayerObligation}</p>
              <div className="text-[11px] text-stone-500 pt-1 border-t border-emerald-200/80">
                <strong>Kapan Wajib Mandi Besar?: </strong>
                {result.mandiTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
