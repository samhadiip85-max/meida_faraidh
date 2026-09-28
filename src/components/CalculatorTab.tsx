import React, { useState, useMemo } from 'react';
import {
  DeceasedGender,
  EstateDeductions,
  HeirInput,
  HeirRole,
} from '../types/faraidh';
import {
  calculateFaraidh,
  formatRupiah,
  INITIAL_HEIRS_LIST,
} from '../utils/faraidhEngine';
import { DonutChart } from './DonutChart';
import {
  Check,
  Copy,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  Info,
  ShieldAlert,
  User,
  Users,
} from 'lucide-react';

interface CalculatorTabProps {
  initialDeceasedGender?: DeceasedGender;
  initialPresetHeirs?: { role: HeirRole; count: number }[];
}

export function CalculatorTab({
  initialDeceasedGender = 'male',
  initialPresetHeirs,
}: CalculatorTabProps) {
  const [deceasedGender, setDeceasedGender] = useState<DeceasedGender>(initialDeceasedGender);

  // Financial inputs
  const [grossEstate, setGrossEstate] = useState<number>(300000000); // 300 million IDR default
  const [funeralCost, setFuneralCost] = useState<number>(5000000);   // 5 million
  const [debtAllah, setDebtAllah] = useState<number>(2500000);       // zakat
  const [debtHuman, setDebtHuman] = useState<number>(12500000);     // hutang
  const [bequestAmount, setBequestAmount] = useState<number>(0);

  // Heirs state
  const [heirs, setHeirs] = useState<HeirInput[]>(() => {
    const list = INITIAL_HEIRS_LIST.map((h) => ({ ...h }));
    if (initialPresetHeirs && initialPresetHeirs.length > 0) {
      initialPresetHeirs.forEach((preset) => {
        const found = list.find((h) => h.role === preset.role);
        if (found) found.count = preset.count;
      });
    } else {
      // Default initial setup: deceased male, leaving 1 wife, 1 son, 1 daughter, mother, father
      const wife = list.find((h) => h.role === 'wives');
      if (wife) wife.count = 1;
      const son = list.find((h) => h.role === 'son');
      if (son) son.count = 1;
      const daughter = list.find((h) => h.role === 'daughter');
      if (daughter) daughter.count = 1;
      const mother = list.find((h) => h.role === 'mother');
      if (mother) mother.count = 1;
      const father = list.find((h) => h.role === 'father');
      if (father) father.count = 1;
    }
    return list;
  });

  const [copied, setCopied] = useState<boolean>(false);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  // Update counts
  const setHeirCount = (role: HeirRole, count: number) => {
    setHeirs((prev) =>
      prev.map((h) => (h.role === role ? { ...h, count: Math.max(0, count) } : h))
    );
  };

  const handleGenderChange = (gender: DeceasedGender) => {
    setDeceasedGender(gender);
    setHeirs((prev) =>
      prev.map((h) => {
        if (gender === 'male' && h.role === 'husband') return { ...h, count: 0 };
        if (gender === 'female' && h.role === 'wives') return { ...h, count: 0 };
        return h;
      })
    );
  };

  // Quick preset loader
  const loadPreset = (presetName: string) => {
    const emptyList = INITIAL_HEIRS_LIST.map((h) => ({ ...h, count: 0 }));
    if (presetName === 'keluarga-inti') {
      setDeceasedGender('male');
      const w = emptyList.find((h) => h.role === 'wives');
      if (w) w.count = 1;
      const s = emptyList.find((h) => h.role === 'son');
      if (s) s.count = 1;
      const d = emptyList.find((h) => h.role === 'daughter');
      if (d) d.count = 1;
      const m = emptyList.find((h) => h.role === 'mother');
      if (m) m.count = 1;
      const f = emptyList.find((h) => h.role === 'father');
      if (f) f.count = 1;
    } else if (presetName === 'aul-mabhalah') {
      setDeceasedGender('female');
      const hz = emptyList.find((h) => h.role === 'husband');
      if (hz) hz.count = 1;
      const fs = emptyList.find((h) => h.role === 'full_sister');
      if (fs) fs.count = 2;
      const m = emptyList.find((h) => h.role === 'mother');
      if (m) m.count = 1;
    } else if (presetName === 'radd-anak') {
      setDeceasedGender('male');
      const d = emptyList.find((h) => h.role === 'daughter');
      if (d) d.count = 1;
      const m = emptyList.find((h) => h.role === 'mother');
      if (m) m.count = 1;
    } else if (presetName === 'gharrawain') {
      setDeceasedGender('female');
      const hz = emptyList.find((h) => h.role === 'husband');
      if (hz) hz.count = 1;
      const m = emptyList.find((h) => h.role === 'mother');
      if (m) m.count = 1;
      const f = emptyList.find((h) => h.role === 'father');
      if (f) f.count = 1;
    } else if (presetName === 'mimbariah') {
      setDeceasedGender('male');
      const w = emptyList.find((h) => h.role === 'wives');
      if (w) w.count = 1;
      const d = emptyList.find((h) => h.role === 'daughter');
      if (d) d.count = 2;
      const f = emptyList.find((h) => h.role === 'father');
      if (f) f.count = 1;
      const m = emptyList.find((h) => h.role === 'mother');
      if (m) m.count = 1;
    }
    setHeirs(emptyList);
  };

  const resetAll = () => {
    setGrossEstate(100000000);
    setFuneralCost(0);
    setDebtAllah(0);
    setDebtHuman(0);
    setBequestAmount(0);
    setHeirs(INITIAL_HEIRS_LIST.map((h) => ({ ...h, count: 0 })));
  };

  // Run calculation engine
  const deductions: EstateDeductions = useMemo(
    () => ({
      grossEstate,
      funeralCost,
      debtAllah,
      debtHuman,
      bequestAmount,
    }),
    [grossEstate, funeralCost, debtAllah, debtHuman, bequestAmount]
  );

  const result = useMemo(
    () => calculateFaraidh(deceasedGender, heirs, deductions),
    [deceasedGender, heirs, deductions]
  );

  // Copy textual summary to clipboard
  const handleCopySummary = () => {
    const lines = [
      `=== RINGKASAN PEMBAGIAN WARIS (FARAIDH) ===`,
      `Pewaris: ${deceasedGender === 'male' ? 'Laki-laki (Almarhum)' : 'Perempuan (Almarhumah)'}`,
      `Total Harta Kotor: ${formatRupiah(result.grossEstate)}`,
      `Total Pengeluaran (Tajhiz, Hutang, Wasiat): ${formatRupiah(result.totalDeductions)}`,
      `Tirkah Bersih yang Dibagi: ${formatRupiah(result.netEstate)}`,
      `Asal Masalah: ${result.finalAsalMasalah} (${result.caseType})`,
      `\nRINCIAN AHLI WARIS:`,
      ...result.activeHeirs.map(
        (h) =>
          `- ${h.nameIndo} (${h.count} org): ${h.furudhShare} | ${h.percentage.toFixed(2)}% | Total: ${formatRupiah(h.totalAmount)} ${h.count > 1 ? `(@ ${formatRupiah(h.amountPerPerson)})` : ''}`
      ),
      ...(result.mahjubHeirs.length > 0
        ? [
            `\nAHLI WARIS TERHALANG (MAHJUB):`,
            ...result.mahjubHeirs.map((h) => `- ${h.nameIndo}: Terhalang oleh ${h.mahjubBy?.join(', ')}`),
          ]
        : []),
      `\nCatatan Kasus: ${result.caseDescription}`,
      `Dihitung via FaraidhEdu - Media Pembelajaran Fiqih Waris`,
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Group heirs for display
  const spouseHeirs = heirs.filter((h) => h.category === 'spouse');
  const descendantHeirs = heirs.filter((h) => h.category === 'descendant');
  const ascendantHeirs = heirs.filter((h) => h.category === 'ascendant');
  const siblingHeirs = heirs.filter((h) => h.category === 'sibling');
  const extendedHeirs = heirs.filter((h) => h.category === 'extended');

  return (
    <div className="space-y-8">
      {/* Introduction banner */}
      <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulasi Hitungan Faraidh Interaktif</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif mt-1">
              Kalkulator Waris Sesuai Syariat Islam
            </h1>
            <p className="text-stone-600 text-sm mt-1 max-w-3xl">
              Hitung pembagian harta warisan secara matematis dan fiqhiyah, lengkap dengan deteksi
              otomatis Hijab Hirman, Asal Masalah (KPK), kasus \'Aul, Radd, Al-Gharrawain, dan tashih pecahan.
            </p>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            <span className="text-xs text-stone-500 font-medium mr-1">Muat Contoh:</span>
            <button
              onClick={() => loadPreset('keluarga-inti')}
              className="px-2.5 py-1 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors"
            >
              Keluarga Inti
            </button>
            <button
              onClick={() => loadPreset('aul-mabhalah')}
              className="px-2.5 py-1 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors"
            >
              Kasus \'Aul
            </button>
            <button
              onClick={() => loadPreset('radd-anak')}
              className="px-2.5 py-1 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors"
            >
              Kasus Radd
            </button>
            <button
              onClick={() => loadPreset('gharrawain')}
              className="px-2.5 py-1 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors"
            >
              Al-Gharrawain
            </button>
            <button
              onClick={() => loadPreset('mimbariah')}
              className="px-2.5 py-1 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors"
            >
              Al-Mimbariah
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Controls / Right Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: Inputs (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Section 1: Identitas Pewaris */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
            <h2 className="text-sm font-bold text-stone-900 tracking-wide uppercase flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-emerald-700" />
              1. Identitas Pewaris yang Wafat
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleGenderChange('male')}
                className={`py-2 px-3 text-xs sm:text-sm font-medium rounded-lg border transition-all flex items-center justify-center gap-2 ${
                  deceasedGender === 'male'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold shadow-xs'
                    : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span>👨 Laki-laki (Suami/Ayah)</span>
              </button>
              <button
                type="button"
                onClick={() => handleGenderChange('female')}
                className={`py-2 px-3 text-xs sm:text-sm font-medium rounded-lg border transition-all flex items-center justify-center gap-2 ${
                  deceasedGender === 'female'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold shadow-xs'
                    : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span>👩 Perempuan (Istri/Ibu)</span>
              </button>
            </div>
          </div>

          {/* Section 2: Harta Peninggalan & Pengeluaran */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-stone-900 tracking-wide uppercase flex items-center gap-2">
                <span>💰 2. Harta & Kewajiban Sebelum Waris</span>
              </h2>
              <span className="text-[11px] text-stone-500">Maks. wasiat 1/3</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Total Harta Kotor Peninggalan (Tirkah Bruto)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-stone-500 font-medium">Rp</span>
                <input
                  type="number"
                  min="0"
                  step="1000000"
                  value={grossEstate}
                  onChange={(e) => setGrossEstate(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full pl-9 pr-3 py-2 text-sm font-mono-num rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
              <div className="flex flex-wrap gap-1 mt-1.5">
                {[50000000, 100000000, 300000000, 1000000000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setGrossEstate(val)}
                    className="px-2 py-0.5 text-[11px] bg-stone-100 hover:bg-stone-200 text-stone-700 rounded font-mono-num"
                  >
                    {val >= 1000000000 ? `${val / 1000000000} M` : `${val / 1000000} Jt`}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-100">
              <div>
                <label className="block text-[11px] font-medium text-stone-600 mb-1">
                  Biaya Tajhiz / Pemakaman
                </label>
                <input
                  type="number"
                  min="0"
                  step="500000"
                  value={funeralCost}
                  onChange={(e) => setFuneralCost(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full px-2.5 py-1.5 text-xs font-mono-num rounded border border-stone-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-stone-600 mb-1">
                  Hutang Allah (Zakat/Kaffarah)
                </label>
                <input
                  type="number"
                  min="0"
                  step="500000"
                  value={debtAllah}
                  onChange={(e) => setDebtAllah(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full px-2.5 py-1.5 text-xs font-mono-num rounded border border-stone-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-stone-600 mb-1">
                  Hutang Manusia (Piutang)
                </label>
                <input
                  type="number"
                  min="0"
                  step="500000"
                  value={debtHuman}
                  onChange={(e) => setDebtHuman(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full px-2.5 py-1.5 text-xs font-mono-num rounded border border-stone-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-stone-600 mb-1">
                  Wasiat Sah (Bukan Ahli Waris)
                </label>
                <input
                  type="number"
                  min="0"
                  step="1000000"
                  value={bequestAmount}
                  onChange={(e) => setBequestAmount(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full px-2.5 py-1.5 text-xs font-mono-num rounded border border-stone-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>
            </div>

            {/* Warning if bequest exceeded 1/3 */}
            {result.bequestWarning && (
              <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                <span className="leading-relaxed">{result.bequestWarning}</span>
              </div>
            )}

            {/* Net Estate summary */}
            <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-lg flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-950">
                Harta Bersih Siap Waris (Tirkah):
              </span>
              <span className="text-sm font-bold text-emerald-900 font-mono-num">
                {formatRupiah(result.netEstate)}
              </span>
            </div>
          </div>

          {/* Section 3: Komposisi Ahli Waris */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-stone-900 tracking-wide uppercase flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-700" />
                3. Ahli Waris yang Masih Hidup
              </h2>
              <button
                type="button"
                onClick={resetAll}
                className="text-[11px] text-stone-500 hover:text-stone-800 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Semua
              </button>
            </div>

            {/* Subgroup: Pasangan */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                  Pasangan Hidup (Hubungan Nikah)
                </span>
                <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Sebab Nikah Sah (BAB II)
                </span>
              </div>
              <div className="text-[11px] text-stone-500 bg-stone-50/80 p-2 rounded-lg border border-stone-200/60 leading-relaxed">
                💍 Suami & Istri mewarisi karena akad pernikahan sah (Asbabul Irtsi). Rukun & syarat sah perkawinan diatur dalam <strong>BAB II: Munakahat</strong>.
              </div>
              {deceasedGender === 'female' && (
                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-stone-100">
                  <div>
                    <div className="text-xs font-semibold text-stone-900">Suami (Az-Zauj)</div>
                    <div className="text-[11px] text-stone-500 font-arabic">الزوج</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setHeirCount('husband', 0)}
                      className={`w-7 h-7 text-xs font-medium rounded border ${
                        heirs.find((h) => h.role === 'husband')?.count === 0
                          ? 'bg-stone-200 border-stone-300 text-stone-800'
                          : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      0
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeirCount('husband', 1)}
                      className={`w-7 h-7 text-xs font-medium rounded border ${
                        heirs.find((h) => h.role === 'husband')?.count === 1
                          ? 'bg-emerald-700 border-emerald-700 text-white'
                          : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      1
                    </button>
                  </div>
                </div>
              )}

              {deceasedGender === 'male' && (
                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-stone-100">
                  <div>
                    <div className="text-xs font-semibold text-stone-900">Istri (Az-Zaujah)</div>
                    <div className="text-[11px] text-stone-500 font-arabic">الزوجة (Maks. 4)</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((count) => {
                      const current = heirs.find((h) => h.role === 'wives')?.count || 0;
                      return (
                        <button
                          key={count}
                          type="button"
                          onClick={() => setHeirCount('wives', count)}
                          className={`w-6 h-6 text-xs font-medium rounded border ${
                            current === count
                              ? 'bg-emerald-700 border-emerald-700 text-white'
                              : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-100'
                          }`}
                        >
                          {count}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Subgroup: Keturunan (Furu') */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                Keturunan (Furu\')
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {descendantHeirs.map((heir) => (
                  <div
                    key={heir.role}
                    className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-stone-100"
                  >
                    <div className="min-w-0 pr-1">
                      <div className="text-xs font-semibold text-stone-900 truncate">
                        {heir.nameIndo}
                      </div>
                      <div className="text-[10px] text-stone-500 font-arabic truncate">
                        {heir.nameArabic}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => setHeirCount(heir.role, heir.count - 1)}
                        className="w-6 h-6 flex items-center justify-center rounded bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="w-5 text-center text-xs font-bold font-mono-num text-stone-800">
                        {heir.count}
                      </span>
                      <button
                        type="button"
                        onClick={() => setHeirCount(heir.role, heir.count + 1)}
                        className="w-6 h-6 flex items-center justify-center rounded bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subgroup: Leluhur (Ushul) */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                Orang Tua & Kakek-Nenek (Ushul)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ascendantHeirs.map((heir) => (
                  <div
                    key={heir.role}
                    className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-stone-100"
                  >
                    <div className="min-w-0 pr-1">
                      <div className="text-xs font-semibold text-stone-900 truncate">
                        {heir.nameIndo}
                      </div>
                      <div className="text-[10px] text-stone-500 font-arabic truncate">
                        {heir.nameArabic}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => setHeirCount(heir.role, 0)}
                        className={`px-2 py-0.5 text-xs rounded border ${
                          heir.count === 0
                            ? 'bg-stone-200 text-stone-800 font-semibold'
                            : 'bg-white text-stone-600 hover:bg-stone-100'
                        }`}
                      >
                        Tidak
                      </button>
                      <button
                        type="button"
                        onClick={() => setHeirCount(heir.role, 1)}
                        className={`px-2 py-0.5 text-xs rounded border ${
                          heir.count === 1
                            ? 'bg-emerald-700 text-white font-semibold'
                            : 'bg-white text-stone-600 hover:bg-stone-100'
                        }`}
                      >
                        Ada
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subgroup: Saudara & Kerabat Samping (Hawasyi) */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                Saudara & Kerabat (Hawasyi)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[...siblingHeirs, ...extendedHeirs].map((heir) => (
                  <div
                    key={heir.role}
                    className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-stone-100"
                  >
                    <div className="min-w-0 pr-1">
                      <div className="text-xs font-semibold text-stone-900 truncate">
                        {heir.nameIndo}
                      </div>
                      <div className="text-[10px] text-stone-500 font-arabic truncate">
                        {heir.nameArabic}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => setHeirCount(heir.role, heir.count - 1)}
                        className="w-6 h-6 flex items-center justify-center rounded bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="w-5 text-center text-xs font-bold font-mono-num text-stone-800">
                        {heir.count}
                      </span>
                      <button
                        type="button"
                        onClick={() => setHeirCount(heir.role, heir.count + 1)}
                        className="w-6 h-6 flex items-center justify-center rounded bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Results & Mathematical Breakdown (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status & Metrics Bar */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Status Kasus:
                  </span>
                  <span
                    className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-md ${
                      result.caseType === 'Aul'
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : result.caseType === 'Radd'
                        ? 'bg-sky-100 text-sky-900 border border-sky-300'
                        : result.caseType === 'Gharrawain'
                        ? 'bg-purple-100 text-purple-900 border border-purple-300'
                        : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    }`}
                  >
                    {result.caseType}
                  </span>
                </div>
                <p className="text-xs text-stone-600 mt-1">{result.caseDescription}</p>
              </div>

              <button
                type="button"
                onClick={handleCopySummary}
                className="self-start sm:self-center px-3 py-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg flex items-center gap-1.5 transition-colors shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin!' : 'Salin Hasil'}</span>
              </button>
            </div>

            {/* Quick stats metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-center">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                <span className="text-[11px] text-stone-500 block">Tirkah Bersih</span>
                <span className="text-sm font-bold text-stone-900 font-mono-num truncate block">
                  {formatRupiah(result.netEstate)}
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                <span className="text-[11px] text-stone-500 block">Asal Masalah</span>
                <span className="text-sm font-bold text-emerald-800 font-mono-num block">
                  {result.finalAsalMasalah}{' '}
                  {result.initialAsalMasalah !== result.finalAsalMasalah ? (
                    <span className="text-xs text-stone-400 font-normal">
                      (dari {result.initialAsalMasalah})
                    </span>
                  ) : (
                    ''
                  )}
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                <span className="text-[11px] text-stone-500 block">Ahli Waris Berhak</span>
                <span className="text-sm font-bold text-stone-900 font-mono-num block">
                  {result.activeHeirs.reduce((sum, h) => sum + h.count, 0)} Orang
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                <span className="text-[11px] text-stone-500 block">Terhalang (Mahjub)</span>
                <span className="text-sm font-bold text-rose-700 font-mono-num block">
                  {result.mahjubHeirs.reduce((sum, h) => sum + h.count, 0)} Orang
                </span>
              </div>
            </div>
          </div>

          {/* Visual Share Diagram (Donut Chart) */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-4">
              Diagram Visualisasi Proporsi Saham
            </h3>
            <DonutChart
              heirs={result.heirs}
              netEstate={result.netEstate}
              asalMasalah={result.finalAsalMasalah}
            />
          </div>

          {/* Table of Shares (Rincian Ahli Waris) */}
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="px-5 py-4 border-b border-stone-200 bg-stone-50/70 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-stone-900 tracking-wide uppercase">
                  Tabel Rincian Pembagian Hak Waris
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Daftar saham, persentase, dan nominal rupiah setiap kelompok & individu
                </p>
              </div>
            </div>

            {result.activeHeirs.length === 0 ? (
              <div className="p-8 text-center text-stone-500 text-sm">
                Belum ada ahli waris yang dimasukkan. Silakan pilih ahli waris di panel sebelah kiri.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100/70 border-b border-stone-200 text-stone-600 font-semibold">
                    <tr>
                      <th className="py-2.5 px-4">Ahli Waris</th>
                      <th className="py-2.5 px-3">Status / Fardh</th>
                      <th className="py-2.5 px-3 text-center">Saham</th>
                      <th className="py-2.5 px-3 text-right">Porsi (%)</th>
                      <th className="py-2.5 px-4 text-right">Total Hak (Rp)</th>
                      <th className="py-2.5 px-4 text-right">Hak / Orang (Rp)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 font-sans">
                    {result.activeHeirs.map((heir) => (
                      <tr key={heir.role} className="hover:bg-stone-50/80 transition-colors">
                        <td className="py-3 px-4">
                          <div className="font-semibold text-stone-900">
                            {heir.nameIndo} {heir.count > 1 ? `(${heir.count} orang)` : ''}
                          </div>
                          <div className="text-[11px] text-stone-500 font-arabic">
                            {heir.nameArabic}
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <span className="font-mono text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {heir.furudhShare}
                          </span>
                          <div className="text-[10px] text-stone-400 mt-1 max-w-[140px] truncate" title={heir.dalilDescription}>
                            {heir.dalilDescription}
                          </div>
                        </td>
                        <td className="py-3 px-3 text-center font-mono-num font-semibold text-stone-800">
                          {heir.adjustedSaham}{' '}
                          <span className="text-[11px] text-stone-400 font-normal">
                            / {result.finalAsalMasalah}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right font-mono-num font-medium text-stone-700">
                          {heir.percentage.toFixed(2)}%
                        </td>
                        <td className="py-3 px-4 text-right font-mono-num font-bold text-stone-900">
                          {formatRupiah(heir.totalAmount)}
                        </td>
                        <td className="py-3 px-4 text-right font-mono-num text-emerald-800 font-semibold">
                          {heir.count > 1 ? formatRupiah(heir.amountPerPerson) : '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-stone-100 font-semibold border-t-2 border-stone-200 text-stone-900">
                    <tr>
                      <td colSpan={3} className="py-2.5 px-4 text-stone-700">
                        Total Seluruh Bagian:
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono-num">
                        {result.activeHeirs.reduce((sum, h) => sum + h.percentage, 0).toFixed(1)}%
                      </td>
                      <td className="py-2.5 px-4 text-right font-mono-num text-emerald-950 font-bold">
                        {formatRupiah(result.netEstate)}
                      </td>
                      <td className="py-2.5 px-4"></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>

          {/* Mahjub Section (if any) */}
          {result.mahjubHeirs.length > 0 && (
            <div className="bg-rose-50/60 rounded-xl border border-rose-200 p-4">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <span>Ahli Waris yang Terhalang (Mahjub Hirman)</span>
              </div>
              <p className="text-xs text-rose-700 mb-3">
                Kerabat berikut tidak berhak menerima harta warisan karena adanya ahli waris yang
                lebih dekat kedudukan nasabnya (Kaidah Al-Aqrabu Yahjubul Ab\'ad):
              </p>
              <div className="space-y-2">
                {result.mahjubHeirs.map((heir) => (
                  <div
                    key={heir.role}
                    className="p-2.5 bg-white rounded-lg border border-rose-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <div>
                      <span className="font-semibold text-stone-900">
                        {heir.nameIndo} ({heir.count} orang)
                      </span>
                      <span className="text-stone-400 ml-1">· {heir.nameArabic}</span>
                    </div>
                    <div className="text-rose-700 font-medium">
                      ❌ {heir.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step-by-Step Educational Breakdown (Accordion) */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-stone-900 tracking-wide uppercase">
                  Tahapan & Penjelasan Fiqih Perhitungan
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Langkah demi langkah matematis syar\'i penentuan hak waris
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {result.steps.map((step, idx) => {
                const isExpanded = expandedStep === idx || expandedStep === null;
                return (
                  <div
                    key={step.title}
                    className="border border-stone-200 rounded-lg overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedStep(expandedStep === idx ? -1 : idx)}
                      className="w-full px-4 py-3 bg-stone-50 hover:bg-stone-100 flex items-center justify-between text-left transition-colors"
                    >
                      <span className="text-xs font-bold text-stone-900">{step.title}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="p-4 bg-white space-y-2 text-xs text-stone-700 border-t border-stone-200">
                        <p className="font-medium text-stone-800">{step.description}</p>
                        {step.details && (
                          <ul className="space-y-1.5 pl-3 border-l-2 border-emerald-500/50">
                            {step.details.map((detail, i) => (
                              <li key={i} className="leading-relaxed font-mono-num text-stone-600">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
