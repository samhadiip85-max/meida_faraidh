import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertTriangle, ArrowRight, Info, ShieldCheck } from 'lucide-react';

export function JamakQasharCalculator() {
  const [distanceKm, setDistanceKm] = useState<number>(85);
  const [selectedPair, setSelectedPair] = useState<'dzuhur_ashar' | 'maghrib_isya' | 'subuh'>('dzuhur_ashar');
  const [jamakType, setJamakType] = useState<'taqdim' | 'takhir'>('taqdim');
  const [wantQashar, setWantQashar] = useState<boolean>(true);

  // Marhalatain standard: ~81 km
  const isMarhalatain = distanceKm >= 81;

  // Syar'i Calculations
  let canJamak = isMarhalatain && selectedPair !== 'subuh';
  let canQashar = isMarhalatain && selectedPair !== 'subuh';

  let firstPrayerName = 'Dzuhur';
  let secondPrayerName = 'Ashar';
  let firstRakaat = wantQashar && canQashar ? 2 : 4;
  let secondRakaat = wantQashar && canQashar ? 2 : 4;
  let executionTime = jamakType === 'taqdim' ? 'di Waktu Dzuhur (Awal)' : 'di Waktu Ashar (Akhir)';

  if (selectedPair === 'maghrib_isya') {
    firstPrayerName = 'Maghrib';
    secondPrayerName = 'Isya';
    firstRakaat = 3; // Maghrib cannot be shortened!
    secondRakaat = wantQashar && canQashar ? 2 : 4;
    executionTime = jamakType === 'taqdim' ? 'di Waktu Maghrib (Awal)' : 'di Waktu Isya (Akhir)';
  } else if (selectedPair === 'subuh') {
    firstPrayerName = 'Subuh';
    secondPrayerName = '-';
    firstRakaat = 2;
    secondRakaat = 0;
    canJamak = false;
    canQashar = false;
  }

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Compass className="w-4 h-4 text-emerald-700" />
          <span>Keringanan Ibadah bagi Musafir (Rukhsah Safar)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kalkulator Simulasi Jamak & Qashar Shalat
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Islam memberikan kemudahan (rukhsah) bagi orang yang bepergian jauh (musafir) untuk menghimpun
          dua shalat (<strong>Jamak</strong>) dan meringkas shalat empat rakaat menjadi dua rakaat (<strong>Qashar</strong>).
          Gunakan simulator ini untuk mengecek kelayakan jarak tempuh, jumlah rakaat, dan lafadz niatnya secara syar'i.
        </p>
      </div>

      {/* Simulator Inputs & Result */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Parameter Perjalanan & Pilihan Shalat
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Tentukan estimasi jarak tempuh perjalanan Anda dan waktu shalat yang hendak dikerjakan:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-5 text-xs">
            {/* Distance Slider */}
            <div>
              <div className="flex justify-between font-semibold text-stone-700 mb-1">
                <span>Jarak Tempuh Perjalanan (Satu Arah):</span>
                <span className="font-mono-num text-emerald-950 font-bold text-sm">
                  {distanceKm} km
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                step="5"
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                <span>0 km</span>
                <span className="font-semibold text-stone-700">Batas 2 Marhalah: ± 81 km</span>
                <span>300 km</span>
              </div>
            </div>

            {/* Prayer Pair Selection */}
            <div className="space-y-1.5">
              <label className="font-bold text-stone-900 block">Pilih Pasangan Shalat:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'dzuhur_ashar', label: 'Dzuhur & Ashar' },
                  { id: 'maghrib_isya', label: 'Maghrib & Isya' },
                  { id: 'subuh', label: 'Shubuh (Mandiri)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedPair(item.id as any)}
                    className={`p-2.5 rounded-lg border text-center font-medium transition-all ${
                      selectedPair === item.id
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-1 ring-emerald-600'
                        : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Jamak Type and Qashar Toggle (if eligible) */}
            {selectedPair !== 'subuh' && (
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <div className="space-y-1.5">
                  <label className="font-bold text-stone-900 block">Jenis Waktu Jamak:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setJamakType('taqdim')}
                      className={`p-2 rounded-lg border text-center transition-all ${
                        jamakType === 'taqdim'
                          ? 'bg-white border-emerald-600 text-emerald-950 font-bold shadow-xs'
                          : 'bg-stone-100 border-stone-200 text-stone-600'
                      }`}
                    >
                      Jamak Taqdim (Waktu Awal)
                    </button>
                    <button
                      type="button"
                      onClick={() => setJamakType('takhir')}
                      className={`p-2 rounded-lg border text-center transition-all ${
                        jamakType === 'takhir'
                          ? 'bg-white border-emerald-600 text-emerald-950 font-bold shadow-xs'
                          : 'bg-stone-100 border-stone-200 text-stone-600'
                      }`}
                    >
                      Jamak Ta'khir (Waktu Akhir)
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200">
                  <label className="flex items-center gap-2 cursor-pointer font-medium text-stone-800">
                    <input
                      type="checkbox"
                      checked={wantQashar}
                      onChange={(e) => setWantQashar(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600"
                    />
                    <span>Sekaligus Qashar (Ringkas rakaat shalat 4 menjadi 2 rakaat)</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Verdict Box */}
          <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
              <span className="uppercase font-bold tracking-wider text-stone-400 text-[10px]">
                Status Rukhsah Shalat
              </span>
              <span
                className={`px-2.5 py-0.5 rounded font-bold ${
                  isMarhalatain
                    ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                    : 'bg-amber-100 text-amber-950 border border-amber-300'
                }`}
              >
                {isMarhalatain ? 'Memenuhi Syarat Safar (≥ 81 km)' : 'Belum Memenuhi Jarak (< 81 km)'}
              </span>
            </div>

            {selectedPair === 'subuh' ? (
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 space-y-1">
                <strong className="block font-bold">Shalat Shubuh Tidak Boleh Dijamak & Diqashar:</strong>
                <p>
                  Shalat Shubuh wajib dikerjakan tepat pada waktunya sebanyak 2 rakaat, tidak boleh digabungkan dengan Dzuhur ataupun Isya.
                </p>
              </div>
            ) : !isMarhalatain ? (
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 space-y-1">
                <strong className="block font-bold">Jarak Belum Memenuhi 2 Marhalah:</strong>
                <p>
                  Karena jarak perjalanan kurang dari 81 km, Anda belum berstatus sebagai musafir yang berhak mengqashar shalat. Shalat tetap dikerjakan sempurna (tamam 4 rakaat).
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900 text-sm">
                      {wantQashar ? 'Jamak Qashar Sah' : 'Jamak Sah (Tanpa Qashar)'}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Dikerjakan {executionTime}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100 text-center">
                    <div className="p-2 bg-stone-50 rounded-lg">
                      <span className="text-stone-500 block text-[10px]">Shalat Pertama:</span>
                      <strong className="text-stone-900 block text-xs">
                        {firstPrayerName} ({firstRakaat} Rakaat)
                      </strong>
                    </div>
                    <div className="p-2 bg-stone-50 rounded-lg">
                      <span className="text-stone-500 block text-[10px]">Shalat Kedua:</span>
                      <strong className="text-stone-900 block text-xs">
                        {secondPrayerName} ({secondRakaat} Rakaat)
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Niat */}
                <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2">
                  <span className="font-bold text-emerald-950 block text-xs">
                    Lafadz Niat Shalat Pertama ({firstPrayerName}):
                  </span>
                  <div className="font-arabic text-sm text-stone-900 leading-relaxed bg-white p-2.5 rounded-lg border border-emerald-100">
                    {selectedPair === 'dzuhur_ashar' && wantQashar && jamakType === 'taqdim' && (
                      'أُصَلِّي فَرْضَ الظُّهْرِ رَكْعَتَيْنِ قَصْرًا مَجْمُوعًا إِلَيْهِ الْعَصْرُ جَمْعَ تَقْدِيمٍ لِلَّهِ تَعَالَى'
                    )}
                    {selectedPair === 'dzuhur_ashar' && wantQashar && jamakType === 'takhir' && (
                      'أُصَلِّي فَرْضَ الظُّهْرِ رَكْعَتَيْنِ قَصْرًا مَجْمُوعًا إِلَى الْعَصْرِ جَمْعَ تَأْخِيرٍ لِلَّهِ تَعَالَى'
                    )}
                    {selectedPair === 'maghrib_isya' && wantQashar && jamakType === 'taqdim' && (
                      'أُصَلِّي فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مَجْمُوعًا إِلَيْهِ الْعِشَاءُ جَمْعَ تَقْدِيمٍ لِلَّهِ تَعَالَى'
                    )}
                    {selectedPair === 'maghrib_isya' && wantQashar && jamakType === 'takhir' && (
                      'أُصَلِّي فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مَجْمُوعًا إِلَى الْعِشَاءِ جَمْعَ تَأْخِيرٍ لِلَّهِ تَعَالَى'
                    )}
                  </div>
                  <p className="text-[11px] text-stone-600 italic">
                    "Saya niat shalat fardhu {firstPrayerName} {firstRakaat} rakaat dijama' dengan {secondPrayerName} {jamakType === 'taqdim' ? 'jamak taqdim' : 'jamak ta\'khir'} {wantQashar && firstRakaat === 2 ? 'qashar ' : ''}karena Allah Ta'ala."
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
