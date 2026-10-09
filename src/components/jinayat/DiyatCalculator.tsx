import React, { useState } from 'react';
import { DIYAT_ORGAN_LIST } from '../../data/jinayatData';
import { PembunuhanType } from '../../types/jinayat';
import { Calculator, Scale, AlertOctagon, HelpCircle, CheckCircle2, ArrowRight, ShieldCheck, Coins } from 'lucide-react';

export function DiyatCalculator() {
  const [activeTab, setActiveTab] = useState<'diyat_jiwa' | 'diyat_organ'>('diyat_jiwa');

  // State Diyat Jiwa
  const [pembunuhanType, setPembunuhanType] = useState<PembunuhanType>('khatha');
  const [hargaUnta, setHargaUnta] = useState<number>(25000000); // 25 jt per unta
  const [hargaGramEmas, setHargaGramEmas] = useState<number>(1400000); // 1.4 jt per gram

  // Perhitungan Diyat Jiwa
  const totalUntaJiwa = 100;
  const estimasiNilaiUnta = totalUntaJiwa * hargaUnta;
  // 1000 Dinar = 4.250 gram emas murni 24 karat
  const estimasiNilaiEmas = 4250 * hargaGramEmas;

  // State Diyat Organ
  const [selectedOrganId, setSelectedOrganId] = useState<string>('gigi');
  const [organCount, setOrganCount] = useState<number>(1);

  const activeOrgan = DIYAT_ORGAN_LIST.find((o) => o.id === selectedOrganId) || DIYAT_ORGAN_LIST[0];
  const totalPersenOrgan = Math.min(100, activeOrgan.persentaseDiyat * organCount);
  const totalUntaOrgan = (100 * totalPersenOrgan) / 100;
  const estimasiRupiahOrgan = totalUntaOrgan * hargaUnta;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Calculator className="w-4 h-4 text-rose-700" />
          <span>Kalkulator & Simulator Interaktif Diyat Syariah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kalkulator Diyat Jiwa (Mughalladhah & Mukhaffafah), Organ Tubuh, & Kaffarah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Diyāt (الدِّيَة) adalah denda kompensasi harta yang wajib dibayarkan kepada korban penganiayaan atau ahli waris korban pembunuhan.
          Gunakan simulator di bawah untuk menghitung rincian 100 ekor unta, konversi emas dinar dan rupiah, serta denda pelukaan organ fisik.
        </p>
      </div>

      {/* Switcher Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('diyat_jiwa')}
          className={`p-3 rounded-xl border text-center transition-all ${
            activeTab === 'diyat_jiwa'
              ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <span className="text-xs block">1. Kalkulator Diyat Jiwa (Kematian)</span>
          <span className="text-[10px] block opacity-80 mt-0.5">Diyat Mughalladhah vs Mukhaffafah</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('diyat_organ')}
          className={`p-3 rounded-xl border text-center transition-all ${
            activeTab === 'diyat_organ'
              ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <span className="text-xs block">2. Kalkulator Diyat Anggota Tubuh & Luka</span>
          <span className="text-[10px] block opacity-80 mt-0.5">Denda Mata, Tangan, Jari, Gigi, & Luka Kepala</span>
        </button>
      </div>

      {/* Tab 1: Diyat Jiwa */}
      {activeTab === 'diyat_jiwa' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Simulasi Diyat Jiwa (Kematian Korban)
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Pilih jenis pembunuhan untuk melihat rincian unta, siapa yang menanggung, serta kewajiban kaffarah puasa 2 bulan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Input Form */}
            <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
                Kasus Pembunuhan:
              </span>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Jenis Kasus Pembunuhan:</label>
                <select
                  value={pembunuhanType}
                  onChange={(e) => setPembunuhanType(e.target.value as PembunuhanType)}
                  className="w-full p-2.5 border border-stone-300 rounded bg-white text-xs font-semibold focus:ring-2 focus:ring-rose-700 focus:outline-none"
                >
                  <option value="amd">1. Pembunuhan Sengaja ('Amd - dimaafkan ahli waris)</option>
                  <option value="syibhu_amd">2. Pembunuhan Semi-Sengaja (Syibhu 'Amd - penganiayaan ringan)</option>
                  <option value="khatha">3. Pembunuhan Tersalah (Khatha' - kecelakaan murni)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Asumsi Harga 1 Ekor Unta:</label>
                  <input
                    type="number"
                    value={hargaUnta}
                    onChange={(e) => setHargaUnta(Number(e.target.value))}
                    className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-rose-700 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Harga 1 Gram Emas Murni:</label>
                  <input
                    type="number"
                    value={hargaGramEmas}
                    onChange={(e) => setHargaGramEmas(Number(e.target.value))}
                    className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-rose-700 focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1.5 text-[11px]">
                <strong className="text-stone-900 block">Keterangan Komposisi Unta:</strong>
                {pembunuhanType === 'khatha' ? (
                  <div className="text-stone-600 space-y-0.5">
                    <span className="font-bold text-emerald-800 block">Diyat Mukhaffafah (100 Unta Ringan):</span>
                    <p>• 20 Hiqqah (unta betina masuk tahun ke-4)</p>
                    <p>• 20 Jadz'ah (unta betina masuk tahun ke-5)</p>
                    <p>• 20 Bintu Labūn (unta betina masuk tahun ke-3)</p>
                    <p>• 20 Ibnu Labūn (unta jantan masuk tahun ke-3)</p>
                    <p>• 20 Bintu Makhādh (unta betina masuk tahun ke-2)</p>
                  </div>
                ) : (
                  <div className="text-stone-600 space-y-0.5">
                    <span className="font-bold text-rose-800 block">Diyat Mughalladhah (100 Unta Berat):</span>
                    <p>• 30 Hiqqah (unta betina masuk tahun ke-4)</p>
                    <p>• 30 Jadz'ah (unta betina masuk tahun ke-5)</p>
                    <p className="font-bold text-rose-950">• 40 Khalīfah (unta betina yang sedang bunting)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Output Calculation */}
            <div className="space-y-4 bg-rose-50/50 p-4 rounded-xl border border-rose-200 flex flex-col justify-between">
              <div>
                <span className="font-bold text-rose-950 block uppercase tracking-wider text-[11px] border-b border-rose-200 pb-2">
                  Hasil Rincian Putusan Fiqih:
                </span>

                <div className="mt-3 space-y-2.5">
                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-600">Total Hewan Diyat Pokok:</span>
                    <strong className="font-mono text-xs text-stone-900">100 Ekor Unta</strong>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-600">Konversi Standar Dinar Emas:</span>
                    <strong className="font-mono text-xs text-stone-900">1.000 Dinar (4,25 kg Emas)</strong>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-rose-300 text-center">
                    <span className="text-[10px] text-stone-500 uppercase font-bold block">
                      Estimasi Nilai Diyat Rupiah (Kompensasi ke Ahli Waris):
                    </span>
                    <strong className="text-xl font-bold text-rose-900 font-mono block mt-0.5">
                      {formatRupiah(estimasiNilaiEmas)}
                    </strong>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      (Berdasarkan kurs 4.250 gr emas murni)
                    </span>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-950 text-[11px] space-y-1">
                    <strong className="block font-bold">Siapa yang Membayar?</strong>
                    {pembunuhanType === 'amd' ? (
                      <p>
                        Wajib dibayar <strong>100% TUNAI SEKETIKA dari harta PRIBADI pelaku</strong>. Keluarga (*'āqilah*) tidak menanggung pembunuhan sengaja.
                      </p>
                    ) : (
                      <p>
                        Dibebankan kepada <strong>keluarga besar pihak ayah (*'Āqilah*)</strong> dan <strong>BOLEH DIANGSUR SELAMA 3 TAHUN</strong> (sepertiga setiap tahun).
                      </p>
                    )}
                  </div>

                  {pembunuhanType !== 'amd' && (
                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-950 text-[11px] space-y-1">
                      <strong className="block font-bold">Kewajiban Kaffārah (Dosa kepada Allah):</strong>
                      <p>
                        Pelaku <strong>WAJIB berpuasa 2 bulan berturut-turut</strong> tanpa boleh putus sehari pun (QS. An-Nisa: 92) sebagai bentuk taubat kepada Allah SWT.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Diyat Organ Tubuh & Luka */}
      {activeTab === 'diyat_organ' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Simulasi Diyat Anggota Tubuh & Pelukaan Fisik (*Diyatul A'dhā'*)
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Berdasarkan hadits shahih Kitab 'Amr bin Hazm (HR. Abu Dawud & An-Nasa'i):
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Input Form */}
            <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
                Organ / Luka yang Dirusak:
              </span>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Pilih Bagian Tubuh / Luka:</label>
                <select
                  value={selectedOrganId}
                  onChange={(e) => {
                    setSelectedOrganId(e.target.value);
                    setOrganCount(1);
                  }}
                  className="w-full p-2.5 border border-stone-300 rounded bg-white text-xs font-semibold focus:ring-2 focus:ring-rose-700 focus:outline-none"
                >
                  {DIYAT_ORGAN_LIST.map((org) => (
                    <option key={org.id} value={org.id}>
                      {org.organName} ({org.persentaseDiyat}% Diyat)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Jumlah Bagian yang Rusak (Kuantitas Gigi / Jari / Organ):
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={organCount}
                  onChange={(e) => setOrganCount(Math.max(1, Number(e.target.value)))}
                  className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-rose-700 focus:outline-none"
                />
              </div>

              <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1 text-[11px]">
                <strong className="text-stone-900 block">Keterangan Fiqih Organ:</strong>
                <p className="text-stone-600 leading-relaxed">{activeOrgan.keterangan}</p>
              </div>
            </div>

            {/* Output Calculation */}
            <div className="space-y-4 bg-rose-50/50 p-4 rounded-xl border border-rose-200 flex flex-col justify-between">
              <div>
                <span className="font-bold text-rose-950 block uppercase tracking-wider text-[11px] border-b border-rose-200 pb-2">
                  Denda Ganti Rugi yang Wajib Dibayar Pelaku:
                </span>

                <div className="mt-3 space-y-2.5">
                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-600">Porsi terhadap Diyat Penuh:</span>
                    <strong className="font-mono text-xs text-stone-900">{totalPersenOrgan.toFixed(1)}% Diyat</strong>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-600">Jumlah Hewan Unta Pengganti:</span>
                    <strong className="font-mono text-xs text-rose-900 font-bold">{totalUntaOrgan.toFixed(1)} Ekor Unta</strong>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-rose-300 text-center">
                    <span className="text-[10px] text-stone-500 uppercase font-bold block">
                      Estimasi Kompensasi Ganti Rugi Rupiah:
                    </span>
                    <strong className="text-xl font-bold text-rose-900 font-mono block mt-0.5">
                      {formatRupiah(estimasiRupiahOrgan)}
                    </strong>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      (Wajib diserahkan utuh kepada korban penganiayaan)
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-white rounded border border-stone-200 text-[10px] text-stone-600 font-mono mt-3">
                <strong>Prinsip Syar'i: </strong>
                Jika penganiayaan dilakukan sengaja, korban memegang hak Qishash (balas setara). Namun jika qishash berisiko membahayakan organ lain, maka dialihkan menjadi Diyat.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
