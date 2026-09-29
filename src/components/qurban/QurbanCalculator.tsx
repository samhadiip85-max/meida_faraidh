import React, { useState } from 'react';
import { Calculator, Users, AlertTriangle, CheckCircle2, Info, ArrowRight, ShieldAlert, Sparkles, Scale } from 'lucide-react';

export function QurbanCalculator() {
  const [animalCategory, setAnimalCategory] = useState<'kambing' | 'sapi'>('sapi');
  const [qurbanIntent, setQurbanIntent] = useState<'sunnah' | 'nadzar'>('sunnah');
  const [liveWeightKg, setLiveWeightKg] = useState<number>(350);
  const [animalPrice, setAnimalPrice] = useState<number>(24500000);
  const [operationalCost, setOperationalCost] = useState<number>(1400000); // biaya jagal terpisah
  const [patunganSlots, setPatunganSlots] = useState<number>(7);

  // Estimasi daging murni + tulang lunak yang dibagikan (~35% - 40% dari berat hidup)
  const estimatedMeatKg = Math.round(liveWeightKg * 0.38);

  // Total biaya
  const totalCost = animalPrice + operationalCost;
  const costPerPerson = animalCategory === 'sapi' ? Math.round(totalCost / patunganSlots) : totalCost;
  const meatPerPerson = animalCategory === 'sapi' ? Math.round((estimatedMeatKg / patunganSlots) * 10) / 10 : estimatedMeatKg;

  // Proporsi distribusi daging
  let fakirMiskinKg = 0;
  let hadiahKerabatKg = 0;
  let pekurbanFamilyKg = 0;

  if (qurbanIntent === 'nadzar') {
    fakirMiskinKg = estimatedMeatKg;
    hadiahKerabatKg = 0;
    pekurbanFamilyKg = 0;
  } else {
    // 1/3 masing-masing
    pekurbanFamilyKg = Math.round((estimatedMeatKg / 3) * 10) / 10;
    hadiahKerabatKg = Math.round((estimatedMeatKg / 3) * 10) / 10;
    fakirMiskinKg = Math.round((estimatedMeatKg - pekurbanFamilyKg - hadiahKerabatKg) * 10) / 10;
  }

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleAnimalChange = (type: 'kambing' | 'sapi') => {
    setAnimalCategory(type);
    if (type === 'kambing') {
      setLiveWeightKg(35);
      setAnimalPrice(3500000);
      setOperationalCost(300000);
      setPatunganSlots(1);
    } else {
      setLiveWeightKg(350);
      setAnimalPrice(24500000);
      setOperationalCost(1400000);
      setPatunganSlots(7);
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Calculator className="w-4 h-4 text-emerald-700" />
          <span>Kalkulator & Simulasi Patungan Qurban</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kalkulator Estimasi Daging, Patungan Sapi, & Alokasi Syar'i
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Hitung estimasi bobot daging karkas siap bagi, biaya patungan per peserta (maksimal 7 orang untuk sapi/unta),
          serta simulasi alokasi sepertiga daging qurban sunnah vs qurban nadzar secara otomatis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Input Section */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-5">
            <h2 className="text-base font-bold text-stone-900 font-serif border-b border-stone-100 pb-3 flex items-center justify-between">
              <span>Parameter Hewan & Pekurban</span>
              <span className="text-xs font-sans text-stone-500 font-normal">Input Data</span>
            </h2>

            {/* Pilihan Hewan */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Pilih Jenis Hewan:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleAnimalChange('sapi')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    animalCategory === 'sapi'
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                  }`}
                >
                  <span className="text-sm font-bold block">Sapi / Kerbau</span>
                  <span className="text-xs block opacity-85 mt-0.5">Bisa Patungan s/d 7 Orang</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleAnimalChange('kambing')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    animalCategory === 'kambing'
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                  }`}
                >
                  <span className="text-sm font-bold block">Kambing / Domba</span>
                  <span className="text-xs block opacity-85 mt-0.5">1 Orang Pekurban</span>
                </button>
              </div>
            </div>

            {/* Niat Qurban */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Status Niat Qurban:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setQurbanIntent('sunnah')}
                  className={`p-3 rounded-xl border text-left text-xs transition-all ${
                    qurbanIntent === 'sunnah'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                      : 'bg-stone-50 border-stone-200 text-stone-600'
                  }`}
                >
                  <span className="block text-sm font-bold text-emerald-900">Qurban Sunnah</span>
                  <span className="block text-[11px] text-stone-500 mt-0.5">Pekurban boleh makan 1/3</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQurbanIntent('nadzar')}
                  className={`p-3 rounded-xl border text-left text-xs transition-all ${
                    qurbanIntent === 'nadzar'
                      ? 'bg-rose-50 border-rose-600 text-rose-950 font-bold'
                      : 'bg-stone-50 border-stone-200 text-stone-600'
                  }`}
                >
                  <span className="block text-sm font-bold text-rose-900">Qurban Nadzar (Wajib)</span>
                  <span className="block text-[11px] text-stone-500 mt-0.5">Haram dimakan pekurban</span>
                </button>
              </div>
            </div>

            {/* Slider Slot Orang (hanya jika sapi) */}
            {animalCategory === 'sapi' && (
              <div className="space-y-2 p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-stone-800">
                    Jumlah Peserta Patungan:
                  </label>
                  <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded text-xs">
                    {patunganSlots} Orang Pekurban
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={patunganSlots}
                  onChange={(e) => setPatunganSlots(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                  <span>1 Orang (Mandiri)</span>
                  <span>7 Orang (Maksimal Sah)</span>
                </div>
              </div>
            )}

            {/* Input Berat Hidup */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-stone-700">
                  Estimasi Bobot Hidup Hewan (Kg):
                </label>
                <span className="font-mono font-bold text-stone-800">{liveWeightKg} Kg</span>
              </div>
              <input
                type="number"
                min={animalCategory === 'kambing' ? 20 : 200}
                max={animalCategory === 'kambing' ? 120 : 1200}
                value={liveWeightKg}
                onChange={(e) => setLiveWeightKg(Math.max(1, Number(e.target.value)))}
                className="w-full p-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
              <span className="text-[11px] text-stone-500 block">
                *Karkas daging bersih rata-rata berkisar antara 35% - 40% dari bobot hidup.
              </span>
            </div>

            {/* Input Harga Hewan & Operasional */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-stone-700">Harga Beli Hewan (Rp):</label>
                <input
                  type="number"
                  step="50000"
                  value={animalPrice}
                  onChange={(e) => setAnimalPrice(Math.max(0, Number(e.target.value)))}
                  className="w-full p-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-stone-700">Biaya Jagal / Kantong (Rp):</label>
                <input
                  type="number"
                  step="10000"
                  value={operationalCost}
                  onChange={(e) => setOperationalCost(Math.max(0, Number(e.target.value)))}
                  className="w-full p-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Output Hasil Kalkulasi */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-5">
            <h2 className="text-base font-bold text-stone-900 font-serif border-b border-stone-100 pb-3 flex items-center justify-between">
              <span>Hasil Simulasi & Distribusi Daging</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                {animalCategory === 'sapi' ? `Sapi (${patunganSlots} Slot)` : 'Kambing Tunggal'}
              </span>
            </h2>

            {/* Ringkasan Finansial */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-stone-500 block">
                  Total Biaya Keseluruhan:
                </span>
                <span className="text-base font-bold text-stone-900 block">
                  {formatRupiah(totalCost)}
                </span>
                <span className="text-[10px] text-stone-500 block">
                  Hewan: {formatRupiah(animalPrice)} + Jagal: {formatRupiah(operationalCost)}
                </span>
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-800 block">
                  {animalCategory === 'sapi' ? 'Biaya per Orang Patungan:' : 'Biaya per Pekurban:'}
                </span>
                <span className="text-base font-bold text-emerald-950 block">
                  {formatRupiah(costPerPerson)}
                </span>
                <span className="text-[10px] text-emerald-700 block">
                  {animalCategory === 'sapi' ? `Dibagi rata ${patunganSlots} peserta` : 'Ditanggung 1 orang'}
                </span>
              </div>
            </div>

            {/* Estimasi Karkas Daging */}
            <div className="p-4 bg-stone-900 text-white rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-bold">
                    Estimasi Daging Bersih Siap Bagikan:
                  </span>
                  <div className="text-2xl font-bold font-serif text-white mt-0.5">
                    ± {estimatedMeatKg} Kg Daging
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-stone-400 block">Rata-rata per Slot:</span>
                  <span className="text-base font-bold text-emerald-400 block">
                    ± {meatPerPerson} Kg / orang
                  </span>
                </div>
              </div>

              {/* Progress bar alokasi */}
              <div className="space-y-1 text-xs">
                <div className="h-3 w-full bg-stone-800 rounded-full overflow-hidden flex">
                  {qurbanIntent === 'nadzar' ? (
                    <div className="h-full bg-rose-500 w-full" />
                  ) : (
                    <>
                      <div className="h-full bg-emerald-500 w-1/3" title="Fakir Miskin" />
                      <div className="h-full bg-amber-400 w-1/3" title="Hadiah Tetangga" />
                      <div className="h-full bg-sky-400 w-1/3" title="Hak Pekurban" />
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Rincian Alokasi Daging */}
            <div className="space-y-2 text-xs">
              <span className="font-bold text-stone-800 block">Rincian Alokasi Distribusi Syar'i:</span>

              {qurbanIntent === 'nadzar' ? (
                <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 text-rose-950 space-y-1">
                  <div className="flex items-center justify-between font-bold">
                    <span>100% Khusus Fakir & Miskin:</span>
                    <span>{fakirMiskinKg} Kg</span>
                  </div>
                  <p className="text-[11px] text-rose-800 leading-relaxed">
                    Karena ini <strong>Qurban Nadzar</strong>, pekurban dan keluarganya <strong>HARAM memakan sedikit pun</strong>. Semua {estimatedMeatKg} kg daging harus disalurkan ke kaum dhuafa.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-emerald-950 block">1/3 Sedekah Fakir Miskin (Wajib Daging Mentah)</span>
                      <span className="text-[10px] text-emerald-800">Hak mutlak dhuafa agar tercukupi di hari raya</span>
                    </div>
                    <span className="text-sm font-bold text-emerald-950">± {fakirMiskinKg} Kg</span>
                  </div>

                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-amber-950 block">1/3 Hadiah Kerabat & Tetangga</span>
                      <span className="text-[10px] text-amber-800">Menyambung silaturahmi (boleh yang berkecukupan)</span>
                    </div>
                    <span className="text-sm font-bold text-amber-950">± {hadiahKerabatKg} Kg</span>
                  </div>

                  <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-200 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-sky-950 block">1/3 Hak Pekurban & Keluarga</span>
                      <span className="text-[10px] text-sky-800">Boleh dimakan atau disedekahkan kembali</span>
                    </div>
                    <span className="text-sm font-bold text-sky-950">± {pekurbanFamilyKg} Kg</span>
                  </div>
                </div>
              )}
            </div>

            {/* Checklist Syar'i */}
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5 text-xs text-stone-700">
              <span className="font-bold text-stone-900 block">Checklist Keabsahan Syar'i:</span>
              <ul className="space-y-1 text-[11px]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Usia minimal: Sapi ≥ 2 tahun genap, Kambing ≥ 2 tahun, Domba ≥ 1 tahun/gigi lepas.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Biaya operasional jagal ({formatRupiah(operationalCost)}) dibayar tunai, <strong>bukan dari kulit/daging</strong>.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Penyembelihan dilakukan pada waktu yang sah: 10 Dzulhijjah setelah shalat Id hingga terbenam matahari 13 Dzulhijjah.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
