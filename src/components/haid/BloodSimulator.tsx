import React, { useState } from 'react';
import { Calendar, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Info } from 'lucide-react';

export function BloodSimulator() {
  // Simulator 1 State: Quick Duration Analyzer
  const [totalBloodDays, setTotalBloodDays] = useState<number>(7);
  const [usualCycleDays, setUsualCycleDays] = useState<number>(7);
  const [isDifferentiating, setIsDifferentiating] = useState<boolean>(false);
  const [strongBloodDays, setStrongBloodDays] = useState<number>(5);

  // Simulator 2 State: Day-by-Day Interactive Grid (1 to 18 days)
  const initialDays = Array.from({ length: 18 }, (_, i) => ({
    day: i + 1,
    hasBlood: i < 7, // default first 7 days has blood
  }));
  const [calendarDays, setCalendarDays] = useState(initialDays);

  // Evaluation for Simulator 1
  let statusVerdict = 'Haid Murni (Normal)';
  let haidDaysCount = totalBloodDays;
  let istihadhahDaysCount = 0;
  let qadhaExplanation = 'Semua hari darah dihukumi Haid. Tidak ada kewajiban mengqadha\' shalat.';
  let badgeStyle = 'bg-rose-100 text-rose-950 border-rose-300';

  if (totalBloodDays < 1) {
    statusVerdict = 'Bukan Haid (Belum Mencapai Minimal 24 Jam)';
    haidDaysCount = 0;
    istihadhahDaysCount = totalBloodDays;
    qadhaExplanation = 'Darah kurang dari 24 jam dihukumi darah fasad/penyakit. Wajib mengqadha\' shalat yang ditinggalkan.';
    badgeStyle = 'bg-amber-100 text-amber-950 border-amber-300';
  } else if (totalBloodDays <= 15) {
    statusVerdict = 'Haid Murni (Normal Sesuai Syariat)';
    haidDaysCount = totalBloodDays;
    istihadhahDaysCount = 0;
    qadhaExplanation = `Darah keluar selama ${totalBloodDays} hari (≤ 15 hari maksimal). Seluruhnya sah sebagai Haid. Wajib mandi besar (Ghusl) setelah darah tuntas berhenti.`;
    badgeStyle = 'bg-emerald-100 text-emerald-950 border-emerald-300';
  } else {
    // > 15 days -> Istihadhah!
    statusVerdict = 'Mengalami Istihadhah (Pendarahan Abnormal > 15 Hari)';
    badgeStyle = 'bg-sky-100 text-sky-950 border-sky-300';

    if (isDifferentiating) {
      // Mumayyizah: strong blood is haid (if 1-15 days), weak is istihadhah
      const validStrong = Math.min(Math.max(strongBloodDays, 1), 15);
      haidDaysCount = validStrong;
      istihadhahDaysCount = totalBloodDays - validStrong;
      qadhaExplanation = `Karena Anda dapat membedakan sifat darah (Mumayyizah), maka ${validStrong} hari darah kuat dihukumi HAID. Sisanya sebanyak ${istihadhahDaysCount} hari dihukumi ISTIHADHAH (wajib mandi di hari ke-${validStrong + 1} dan wajib mengqadha\' shalat yang sempat ditinggalkan pada hari istihadhah).`;
    } else {
      // Ghairu Mumayyizah: return to habit ('Adah)
      const validHabit = Math.min(Math.max(usualCycleDays, 1), 15);
      haidDaysCount = validHabit;
      istihadhahDaysCount = totalBloodDays - validHabit;
      qadhaExplanation = `Karena darah keluar seragam satu warna (Ghairu Mumayyizah), hukum dikembalikan kepada siklus kebiasaan (${validHabit} hari). Hari ke-${validHabit + 1} hingga ke-${totalBloodDays} adalah ISTIHADHAH. Segera mandi wajib dan qadha\' shalat yang terlanjur ditinggalkan setelah hari ke-${validHabit}.`;
    }
  }

  // Toggle Day in Calendar
  const handleToggleCalendarDay = (dayNum: number) => {
    setCalendarDays((prev) =>
      prev.map((d) => (d.day === dayNum ? { ...d, hasBlood: !d.hasBlood } : d))
    );
  };

  const activeBloodCount = calendarDays.filter((d) => d.hasBlood).length;
  const lastBloodDay = Math.max(...calendarDays.filter((d) => d.hasBlood).map((d) => d.day), 0);

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Calendar className="w-4 h-4 text-rose-700" />
          <span>Alat Perhitungan & Simulasi Siklus Syar'i</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kalkulator & Simulator Deteksi Haid vs Istihadhah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Gunakan simulator ini untuk membedakan apakah pendarahan tergolong Haid yang sah atau Istihadhah,
          berapa hari yang dihukumi haid, kapan waktu wajib mandi, dan apakah ada shalat yang harus diqadha'.
        </p>
      </div>

      {/* Simulator 1: Quick Analyzer */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Simulasi 1: Analisis Durasi Siklus Darah
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Geser durasi keluarnya darah dan tentukan parameter kebiasaan untuk melihat vonis hukumnya:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-5 text-xs">
            <div>
              <div className="flex justify-between font-semibold text-stone-700 mb-1">
                <span>Total Hari Darah Keluar:</span>
                <span className="font-mono-num text-rose-900 font-bold text-sm">
                  {totalBloodDays} Hari
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={totalBloodDays}
                onChange={(e) => setTotalBloodDays(Number(e.target.value))}
                className="w-full accent-rose-700"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                <span>Min: 1 Hari (24 Jam)</span>
                <span>Maks Haid: 15 Hari</span>
                <span>Abnormal: &gt; 15 Hari</span>
              </div>
            </div>

            {totalBloodDays > 15 && (
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <span className="font-bold text-stone-900 block text-xs">
                  Parameter Khusus Istihadhah (&gt; 15 Hari):
                </span>

                <div>
                  <label className="flex items-center gap-2 cursor-pointer font-medium text-stone-800">
                    <input
                      type="checkbox"
                      checked={isDifferentiating}
                      onChange={(e) => setIsDifferentiating(e.target.checked)}
                      className="w-4 h-4 rounded text-rose-700 focus:ring-rose-600"
                    />
                    <span>Darah memiliki perbedaan warna (Darah Kuat & Darah Lemah)</span>
                  </label>
                </div>

                {isDifferentiating ? (
                  <div>
                    <div className="flex justify-between font-semibold text-stone-700 mb-1">
                      <span>Lama Hari Darah Kuat (Hitam/Merah Tua):</span>
                      <span className="font-bold text-rose-900">{strongBloodDays} Hari</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="14"
                      step="1"
                      value={strongBloodDays}
                      onChange={(e) => setStrongBloodDays(Number(e.target.value))}
                      className="w-full accent-rose-700"
                    />
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between font-semibold text-stone-700 mb-1">
                      <span>Kebiasaan Haid Bulan Lalu ('Adah):</span>
                      <span className="font-bold text-rose-900">{usualCycleDays} Hari</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      step="1"
                      value={usualCycleDays}
                      onChange={(e) => setUsualCycleDays(Number(e.target.value))}
                      className="w-full accent-rose-700"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Verdict Result */}
          <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
              <span className="uppercase font-bold tracking-wider text-stone-400 text-[10px]">
                Hasil Analisis Syar'i
              </span>
              <span className={`px-2.5 py-1 rounded-md font-bold text-xs border ${badgeStyle}`}>
                {statusVerdict}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded-lg border border-stone-200 text-center space-y-0.5">
                <span className="text-[11px] text-stone-500">Dihukumi Haid:</span>
                <div className="text-2xl font-bold font-mono-num text-rose-900">
                  {haidDaysCount} Hari
                </div>
                <span className="text-[10px] text-stone-400">Tidak wajib shalat</span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-stone-200 text-center space-y-0.5">
                <span className="text-[11px] text-stone-500">Dihukumi Istihadhah:</span>
                <div className="text-2xl font-bold font-mono-num text-sky-900">
                  {istihadhahDaysCount} Hari
                </div>
                <span className="text-[10px] text-stone-400">Wajib shalat & berwudhu</span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
              <strong className="text-stone-900 block font-semibold">Tindakan Wajib:</strong>
              <p className="text-stone-700 leading-relaxed">{qadhaExplanation}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Simulator 2: Day-by-Day Interactive Grid */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Simulasi 2: Kalender Harian Interaktif (Hari 1 s.d 18)
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Klik nomor hari di bawah ini untuk mensimulasikan keluarnya darah secara berselang-seling (misal hari 1 keluar, hari 4 berhenti, hari 6 keluar lagi):
          </p>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-2">
          {calendarDays.map((d) => (
            <button
              key={d.day}
              type="button"
              onClick={() => handleToggleCalendarDay(d.day)}
              className={`p-3 rounded-xl border text-center transition-all ${
                d.hasBlood
                  ? 'bg-rose-700 border-rose-800 text-white shadow-xs'
                  : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-600'
              }`}
            >
              <span className="text-[10px] block opacity-80 uppercase font-semibold">
                Hari ke-
              </span>
              <span className="text-lg font-bold font-mono-num block leading-tight">{d.day}</span>
              <span className="text-[10px] block mt-1 font-medium">
                {d.hasBlood ? '🩸 Darah' : '⚪ Bersih'}
              </span>
            </button>
          ))}
        </div>

        {/* Explanation of Sahbu Rule */}
        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-stone-900">
            <Info className="w-4 h-4 text-emerald-700" />
            <span>Kaidah Penarikan (Qaul Sahbu) dalam Mazhab Syafi'i:</span>
          </div>
          <p className="text-stone-600 leading-relaxed">
            Jika seorang wanita mengeluarkan darah terputus-putus (misal keluar 3 hari, bersih 2 hari, lalu keluar lagi 2 hari) dalam kurun waktu kurang dari 15 hari, menurut pendapat mu'tamad (Qaul Sahbu), seluruh hari termasuk hari-hari bersih di sela-selanya tetap dihukumi <strong>Haid</strong> karena masih berada dalam lingkup 15 hari.
          </p>
        </div>
      </div>
    </div>
  );
}
