import React, { useState } from 'react';
import { ZakatType } from '../../types/zakat';
import { Calculator, CheckCircle2, AlertTriangle, ArrowRight, Info, Coins, Wheat, Briefcase, ShoppingBag } from 'lucide-react';

export function ZakatCalculator() {
  const [activeZakatType, setActiveZakatType] = useState<ZakatType>('fitrah');

  // Shared Gold Price state (default: Rp 1.300.000 / gram)
  const [goldPricePerGram, setGoldPricePerGram] = useState<number>(1300000);
  const goldNisabRupiah = 85 * goldPricePerGram;

  // 1. Zakat Fitrah State
  const [fitrahSouls, setFitrahSouls] = useState<number>(4);
  const [riceMeasureType, setRiceMeasureType] = useState<'kg' | 'liter'>('kg');
  const [ricePricePerKg, setRicePricePerKg] = useState<number>(15000);

  // 2. Zakat Emas & Tabungan State
  const [goldWeightGrams, setGoldWeightGrams] = useState<number>(90);
  const [savingsRupiah, setSavingsRupiah] = useState<number>(20000000);

  // 3. Zakat Perniagaan State
  const [inventoryValue, setInventoryValue] = useState<number>(150000000);
  const [cashInHand, setCashInHand] = useState<number>(25000000);
  const [receivables, setReceivables] = useState<number>(15000000);
  const [dueDebts, setDueDebts] = useState<number>(30000000);

  // 4. Zakat Pertanian State
  const [harvestWeightKg, setHarvestWeightKg] = useState<number>(800);
  const [irrigationType, setIrrigationType] = useState<'natural' | 'paid'>('natural'); // 10% vs 5%
  const [cropPricePerKg, setCropPricePerKg] = useState<number>(6500);

  // 5. Zakat Profesi State
  const [monthlyIncome, setMonthlyIncome] = useState<number>(12000000);
  const [monthlyBonus, setMonthlyBonus] = useState<number>(2000000);

  // Currency Formatter
  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Calculator className="w-4 h-4 text-emerald-700" />
          <span>Kalkulator Zakat Multiguna Syar'i</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kalkulator Zakat Fitrah, Emas, Perniagaan, Pertanian & Profesi
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Hitung kewajiban zakat Anda secara instan dan presisi berdasarkan standar nisab syariat
          (85 gram emas untuk mal/perniagaan/profesi, dan 5 wasaq untuk pertanian).
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-stone-200 pb-3 overflow-x-auto">
        {[
          { id: 'fitrah', label: 'Zakat Fitrah', icon: Coins },
          { id: 'emas_tabungan', label: 'Emas & Tabungan', icon: Coins },
          { id: 'perniagaan', label: 'Perniagaan (Dagang)', icon: ShoppingBag },
          { id: 'pertanian', label: 'Hasil Pertanian', icon: Wheat },
          { id: 'profesi', label: 'Zakat Profesi/Gaji', icon: Briefcase },
        ].map((tab) => {
          const isSelected = activeZakatType === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveZakatType(tab.id as any)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                isSelected
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Standard Gold Price Banner for Non-Fitrah */}
      {activeZakatType !== 'fitrah' && activeZakatType !== 'pertanian' && (
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-bold text-amber-950 block">Standar Harga Emas Murni Terkini:</span>
            <span className="text-amber-900">
              Nisab 85 gr Emas = <strong>{formatIDR(goldNisabRupiah)}</strong> / tahun (atau ~{formatIDR(goldNisabRupiah / 12)} / bulan).
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-stone-500 whitespace-nowrap">Harga/gr: Rp</span>
            <input
              type="number"
              value={goldPricePerGram}
              onChange={(e) => setGoldPricePerGram(Number(e.target.value) || 0)}
              className="w-32 px-2.5 py-1 bg-white border border-amber-300 rounded font-bold text-stone-900"
            />
          </div>
        </div>
      )}

      {/* TAB 1: ZAKAT FITRAH */}
      {activeZakatType === 'fitrah' && (() => {
        const ratePerSoul = riceMeasureType === 'kg' ? 2.5 : 3.5;
        const totalGoods = fitrahSouls * ratePerSoul;
        const totalCash = totalGoods * ricePricePerKg;

        return (
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Perhitungan Zakat Fitrah (1 Sha' per Jiwa)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-stone-700 mb-1">
                    <span>Jumlah Jiwa yang Ditanggung:</span>
                    <span className="font-bold text-emerald-950 text-sm">{fitrahSouls} Jiwa</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={fitrahSouls}
                    onChange={(e) => setFitrahSouls(Number(e.target.value))}
                    className="w-full accent-emerald-700"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-stone-900 block">Standar Takaran per Jiwa:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRiceMeasureType('kg')}
                      className={`p-2.5 rounded-lg border text-center font-bold ${
                        riceMeasureType === 'kg'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950 ring-1 ring-emerald-600'
                          : 'bg-stone-50 border-stone-200 text-stone-700'
                      }`}
                    >
                      2.5 kg Beras / Jiwa
                    </button>
                    <button
                      type="button"
                      onClick={() => setRiceMeasureType('liter')}
                      className={`p-2.5 rounded-lg border text-center font-bold ${
                        riceMeasureType === 'liter'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950 ring-1 ring-emerald-600'
                          : 'bg-stone-50 border-stone-200 text-stone-700'
                      }`}
                    >
                      3.5 Liter Beras / Jiwa
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-900 block">
                    Harga Beras yang Dikonsumsi (Rp / {riceMeasureType}):
                  </label>
                  <input
                    type="number"
                    value={ricePricePerKg}
                    onChange={(e) => setRicePricePerKg(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                  />
                </div>
              </div>

              {/* Result Fitrah */}
              <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
                <span className="uppercase font-bold tracking-wider text-stone-400 text-[10px] block">
                  Kewajiban Zakat Fitrah
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-stone-200 text-center space-y-0.5">
                    <span className="text-[11px] text-stone-500">Beras (Bentuk Makanan Pokok):</span>
                    <div className="text-2xl font-bold font-mono-num text-emerald-900">
                      {totalGoods} {riceMeasureType}
                    </div>
                    <span className="text-[10px] text-stone-400">({ratePerSoul} {riceMeasureType} x {fitrahSouls} jiwa)</span>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-stone-200 text-center space-y-0.5">
                    <span className="text-[11px] text-stone-500">Konversi Uang Tunai:</span>
                    <div className="text-xl font-bold font-mono-num text-emerald-900 mt-1">
                      {formatIDR(totalCash)}
                    </div>
                    <span className="text-[10px] text-stone-400">(Menurut fatwa kebolehan qimah)</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-stone-200 text-stone-600 leading-relaxed">
                  <strong>Niat Zakat Fitrah:</strong> "Nawaitu an ukhrija zakaatal fithri 'annii wa 'an jami'i man yalzamunii nafaqatuhum fardhan lillaahi ta'aalaa."
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* TAB 2: ZAKAT EMAS & TABUNGAN */}
      {activeZakatType === 'emas_tabungan' && (() => {
        const totalWealthRupiah = (goldWeightGrams * goldPricePerGram) + savingsRupiah;
        const isEligible = totalWealthRupiah >= goldNisabRupiah;
        const zakatDue = isEligible ? totalWealthRupiah * 0.025 : 0;

        return (
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Perhitungan Zakat Emas, Perak & Tabungan / Deposito
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-stone-900 block">
                    Berat Emas Simpanan / Batangan (Gram):
                  </label>
                  <input
                    type="number"
                    value={goldWeightGrams}
                    onChange={(e) => setGoldWeightGrams(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                  />
                  <span className="text-[10px] text-stone-400">
                    Nilai Emas: {formatIDR(goldWeightGrams * goldPricePerGram)}
                  </span>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-900 block">
                    Total Tabungan, Deposito, & Uang Kas (Rp):
                  </label>
                  <input
                    type="number"
                    value={savingsRupiah}
                    onChange={(e) => setSavingsRupiah(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                  />
                </div>
              </div>

              {/* Result Emas */}
              <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
                  <span className="uppercase font-bold tracking-wider text-stone-400 text-[10px]">
                    Status Nisab Emas & Tabungan
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded font-bold ${
                      isEligible
                        ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                        : 'bg-amber-100 text-amber-950 border border-amber-300'
                    }`}
                  >
                    {isEligible ? 'Wajib Zakat (≥ 85 gr Emas)' : 'Belum Wajib Zakat (< 85 gr)'}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Total Harta Terhitung:</span>
                    <strong className="text-stone-900">{formatIDR(totalWealthRupiah)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Batas Nisab (85 gr emas):</span>
                    <span className="font-semibold text-stone-700">{formatIDR(goldNisabRupiah)}</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-1">
                  <span className="text-[11px] text-emerald-900 font-semibold">
                    Kadar Zakat Wajib (2.5%):
                  </span>
                  <div className="text-2xl font-bold font-mono-num text-emerald-950">
                    {formatIDR(zakatDue)}
                  </div>
                  <span className="text-[10px] text-emerald-800">
                    Wajib dikeluarkan jika telah tersimpan selama 1 tahun (haul).
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* TAB 3: ZAKAT PERNIAGAAN */}
      {activeZakatType === 'perniagaan' && (() => {
        const netBusinessWealth = (inventoryValue + cashInHand + receivables) - dueDebts;
        const isEligible = netBusinessWealth >= goldNisabRupiah;
        const zakatDue = isEligible ? netBusinessWealth * 0.025 : 0;

        return (
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Perhitungan Zakat Perniagaan / Usaha Dagang ('Urudhut Tijarah)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-stone-900 block">
                    1. Nilai Stok Barang Dagangan / Inventaris (Rp):
                  </label>
                  <input
                    type="number"
                    value={inventoryValue}
                    onChange={(e) => setInventoryValue(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-900 block">
                    2. Uang Kas Usaha / Rekening Bisnis (Rp):
                  </label>
                  <input
                    type="number"
                    value={cashInHand}
                    onChange={(e) => setCashInHand(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-900 block">
                    3. Piutang Lancar yang Diharapkan Terbayar (Rp):
                  </label>
                  <input
                    type="number"
                    value={receivables}
                    onChange={(e) => setReceivables(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-900 block">
                    4. Hutang Usaha Jatuh Tempo (Pengurang) (Rp):
                  </label>
                  <input
                    type="number"
                    value={dueDebts}
                    onChange={(e) => setDueDebts(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold text-rose-900"
                  />
                </div>
              </div>

              {/* Result Perniagaan */}
              <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
                  <span className="uppercase font-bold tracking-wider text-stone-400 text-[10px]">
                    Status Zakat Usaha Dagang
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded font-bold ${
                      isEligible
                        ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                        : 'bg-amber-100 text-amber-950 border border-amber-300'
                    }`}
                  >
                    {isEligible ? 'Wajib Zakat (≥ 85 gr Emas)' : 'Belum Wajib Zakat'}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Aset Bersih Perniagaan:</span>
                    <strong className="text-stone-900">{formatIDR(netBusinessWealth)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Batas Nisab (85 gr emas):</span>
                    <span className="font-semibold text-stone-700">{formatIDR(goldNisabRupiah)}</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-1">
                  <span className="text-[11px] text-emerald-900 font-semibold">
                    Kadar Zakat Perniagaan (2.5%):
                  </span>
                  <div className="text-2xl font-bold font-mono-num text-emerald-950">
                    {formatIDR(zakatDue)}
                  </div>
                  <span className="text-[10px] text-emerald-800">
                    Dihitung setiap tutup buku tahunan (genap 1 tahun haul).
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* TAB 4: ZAKAT PERTANIAN */}
      {activeZakatType === 'pertanian' && (() => {
        const nisabPertanianKg = 653; // 5 wasaq
        const isEligible = harvestWeightKg >= nisabPertanianKg;
        const ratePercent = irrigationType === 'natural' ? 0.10 : 0.05;
        const zakatDueKg = isEligible ? harvestWeightKg * ratePercent : 0;
        const zakatDueRupiah = zakatDueKg * cropPricePerKg;

        return (
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Perhitungan Zakat Hasil Pertanian & Perkebunan (Zuru' & Tsimar)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-stone-900 block">
                    Berat Hasil Panen (Gabah Kering / Padi / Hasil Tani) (Kg):
                  </label>
                  <input
                    type="number"
                    value={harvestWeightKg}
                    onChange={(e) => setHarvestWeightKg(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                  />
                  <span className="text-[10px] text-stone-400">
                    Nisab Pertanian: 5 Wasaq = ± 653 kg gabah kering.
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-stone-900 block">Sistem Pengairan / Irigasi:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setIrrigationType('natural')}
                      className={`p-2.5 rounded-lg border text-center font-bold ${
                        irrigationType === 'natural'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950 ring-1 ring-emerald-600'
                          : 'bg-stone-50 border-stone-200 text-stone-700'
                      }`}
                    >
                      Alami (Air Hujan/Sungai): 10%
                    </button>
                    <button
                      type="button"
                      onClick={() => setIrrigationType('paid')}
                      className={`p-2.5 rounded-lg border text-center font-bold ${
                        irrigationType === 'paid'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950 ring-1 ring-emerald-600'
                          : 'bg-stone-50 border-stone-200 text-stone-700'
                      }`}
                    >
                      Berbayar (Pompa/Beli Air): 5%
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-900 block">
                    Estimasi Harga Jual per Kg (Rp):
                  </label>
                  <input
                    type="number"
                    value={cropPricePerKg}
                    onChange={(e) => setCropPricePerKg(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                  />
                </div>
              </div>

              {/* Result Pertanian */}
              <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
                  <span className="uppercase font-bold tracking-wider text-stone-400 text-[10px]">
                    Status Zakat Panen
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded font-bold ${
                      isEligible
                        ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                        : 'bg-amber-100 text-amber-950 border border-amber-300'
                    }`}
                  >
                    {isEligible ? 'Wajib Zakat (≥ 653 kg)' : 'Belum Wajib Zakat (< 653 kg)'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-stone-200 text-center space-y-0.5">
                    <span className="text-[11px] text-stone-500">Bentuk Gabah / Padi:</span>
                    <div className="text-2xl font-bold font-mono-num text-emerald-900">
                      {zakatDueKg.toFixed(1)} Kg
                    </div>
                    <span className="text-[10px] text-stone-400">({ratePercent * 100}% dari panen)</span>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-stone-200 text-center space-y-0.5">
                    <span className="text-[11px] text-stone-500">Nilai Konversi Rupiah:</span>
                    <div className="text-xl font-bold font-mono-num text-emerald-900 mt-1">
                      {formatIDR(zakatDueRupiah)}
                    </div>
                    <span className="text-[10px] text-stone-400">Dikeluarkan saat hari panen</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-stone-200 text-stone-600">
                  <strong>Kaidah Waktu:</strong> Zakat pertanian tidak memerlukan syarat haul (1 tahun), melainkan wajib dikeluarkan langsung setiap kali panen ("Wa ātū haqqahū yauma hashādih" - QS. Al-An'am: 141).
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* TAB 5: ZAKAT PROFESI */}
      {activeZakatType === 'profesi' && (() => {
        const totalMonthly = monthlyIncome + monthlyBonus;
        const monthlyNisab = goldNisabRupiah / 12; // 85 gr / 12 = ~7.08 gr
        const isEligible = totalMonthly >= monthlyNisab;
        const zakatDue = isEligible ? totalMonthly * 0.025 : 0;

        return (
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Perhitungan Zakat Profesi / Penghasilan Bulanan
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-stone-900 block">
                    Gaji Pokok Bulanan (Rp):
                  </label>
                  <input
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-900 block">
                    Tunjangan, Bonus, & Pendapatan Lain (Rp):
                  </label>
                  <input
                    type="number"
                    value={monthlyBonus}
                    onChange={(e) => setMonthlyBonus(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                  />
                </div>
              </div>

              {/* Result Profesi */}
              <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
                  <span className="uppercase font-bold tracking-wider text-stone-400 text-[10px]">
                    Status Zakat Profesi
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded font-bold ${
                      isEligible
                        ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                        : 'bg-amber-100 text-amber-950 border border-amber-300'
                    }`}
                  >
                    {isEligible ? 'Wajib Zakat Bulanan' : 'Belum Wajib Zakat'}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Total Penghasilan per Bulan:</span>
                    <strong className="text-stone-900">{formatIDR(totalMonthly)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Nisab Bulanan (~7.08 gr emas):</span>
                    <span className="font-semibold text-stone-700">{formatIDR(monthlyNisab)}</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-1">
                  <span className="text-[11px] text-emerald-900 font-semibold">
                    Zakat Penghasilan per Bulan (2.5%):
                  </span>
                  <div className="text-2xl font-bold font-mono-num text-emerald-950">
                    {formatIDR(zakatDue)}
                  </div>
                  <span className="text-[10px] text-emerald-800">
                    Dikeluarkan setiap menerima gaji bulanan (Fatwa MUI No. 3/2003).
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
