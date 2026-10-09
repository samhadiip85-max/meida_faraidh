import React, { useState } from 'react';
import { Calculator, Scale, ArrowRight, Sprout, ShieldCheck, CheckCircle2, AlertOctagon, HelpCircle, RefreshCw } from 'lucide-react';

export function MuamalahSimulator() {
  const [activeTab, setActiveTab] = useState<'mudharabah' | 'murabahah' | 'tani_compare' | 'jaminan_compare'>('mudharabah');

  // State Mudharabah / Qiradh
  const [modal, setModal] = useState<number>(100000000); // 100 jt
  const [omzet, setOmzet] = useState<number>(25000000); // 25 jt
  const [biaya, setBiaya] = useState<number>(15000000); // 15 jt
  const [nisbahInvestor, setNisbahInvestor] = useState<number>(60); // 60%
  const [isRugiKelalaian, setIsRugiKelalaian] = useState<boolean>(false);

  // Perhitungan Mudharabah
  const labaKotor = omzet;
  const labaBersih = labaKotor - biaya;
  const isUntung = labaBersih > 0;
  const nisbahPengelola = 100 - nisbahInvestor;

  const bagianInvestor = isUntung ? (labaBersih * nisbahInvestor) / 100 : 0;
  const bagianPengelola = isUntung ? (labaBersih * nisbahPengelola) / 100 : 0;
  const rugiNominal = !isUntung ? Math.abs(labaBersih) : 0;

  // State Murabahah
  const [hargaPokok, setHargaPokok] = useState<number>(200000000); // 200 jt mobil/rumah
  const [uangMuka, setUangMuka] = useState<number>(40000000); // 40 jt (20%)
  const [marginTahunan, setMarginTahunan] = useState<number>(7); // 7% per tahun
  const [tenorBulan, setTenorBulan] = useState<number>(36); // 3 tahun

  // Perhitungan Murabahah
  const plafonDibiayai = Math.max(0, hargaPokok - uangMuka);
  const tenorTahun = tenorBulan / 12;
  const totalMarginBank = (plafonDibiayai * (marginTahunan / 100)) * tenorTahun;
  const totalPiutangMurabahah = plafonDibiayai + totalMarginBank;
  const angsuranBulanan = tenorBulan > 0 ? Math.round(totalPiutangMurabahah / tenorBulan) : 0;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Calculator className="w-4 h-4 text-emerald-700" />
          <span>Simulator Skema Bisnis & Kalkulator Akad Syariah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kalkulator Bagi Hasil Mudhārabah, Murābahah Bank Syariah, & Komparator Akad
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Gunakan simulasi interaktif di bawah untuk menghitung pembagian laba-rugi kemitraan usaha Qirādh / Mudhārabah secara riil,
          menghitung transparansi margin pembiayaan jual beli Murābahah, serta membandingkan perbedaan fiqih antar-akad.
        </p>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('mudharabah')}
          className={`p-3 rounded-xl border text-center transition-all ${
            activeTab === 'mudharabah'
              ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <span className="text-xs block">1. Mudhārabah / Qirādh</span>
          <span className="text-[10px] block opacity-80 mt-0.5">Kalkulator Bagi Hasil</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('murabahah')}
          className={`p-3 rounded-xl border text-center transition-all ${
            activeTab === 'murabahah'
              ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <span className="text-xs block">2. Murābahah Bank</span>
          <span className="text-[10px] block opacity-80 mt-0.5">Kalkulator Cost-Plus Margin</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('tani_compare')}
          className={`p-3 rounded-xl border text-center transition-all ${
            activeTab === 'tani_compare'
              ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <span className="text-xs block">3. Sektor Pertanian</span>
          <span className="text-[10px] block opacity-80 mt-0.5">Musaqah vs Muzara'ah vs Mukhabarah</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('jaminan_compare')}
          className={`p-3 rounded-xl border text-center transition-all ${
            activeTab === 'jaminan_compare'
              ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <span className="text-xs block">4. Proteksi & Hak</span>
          <span className="text-[10px] block opacity-80 mt-0.5">Dhaman vs Kafalah vs Syuf'ah</span>
        </button>
      </div>

      {/* Content Tab 1: Mudharabah */}
      {activeTab === 'mudharabah' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Simulasi Bagi Hasil Akad Qirādh / Mudhārabah
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Prinsip syar'i: Laba dibagi sesuai rasio nisbah yang disepakati, sedangkan rugi finansial normal ditanggung pemilik modal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Input Form */}
            <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
                Parameter Usaha:
              </span>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Modal Disetor Investor (Shahibul Mal):
                </label>
                <input
                  type="number"
                  value={modal}
                  onChange={(e) => setModal(Number(e.target.value))}
                  className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Omzet Pendapatan:</label>
                  <input
                    type="number"
                    value={omzet}
                    onChange={(e) => setOmzet(Number(e.target.value))}
                    className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Beban Biaya Riil:</label>
                  <input
                    type="number"
                    value={biaya}
                    onChange={(e) => setBiaya(Number(e.target.value))}
                    className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-stone-700 font-medium">Nisbah Bagi Hasil:</label>
                  <span className="font-bold text-emerald-800 font-mono">
                    Investor {nisbahInvestor}% : Pengelola {nisbahPengelola}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="90"
                  step="5"
                  value={nisbahInvestor}
                  onChange={(e) => setNisbahInvestor(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />
              </div>

              <div className="pt-2 border-t border-stone-200">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRugiKelalaian}
                    onChange={(e) => setIsRugiKelalaian(e.target.checked)}
                    className="w-4 h-4 accent-rose-700 rounded cursor-pointer"
                  />
                  <span className="text-stone-700 text-[11px]">
                    Simulasikan: Kerugian terjadi akibat <strong>Kecerobohan / Pelanggaran Pengelola (Ta'addī)</strong>
                  </span>
                </label>
              </div>
            </div>

            {/* Output Calculation Card */}
            <div className="space-y-4 bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 flex flex-col justify-between">
              <div>
                <span className="font-bold text-emerald-950 block uppercase tracking-wider text-[11px] border-b border-emerald-200 pb-2">
                  Hasil Perhitungan Fiqih Mudharabah:
                </span>

                <div className="mt-3 space-y-2">
                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-600">Laba Bersih Usaha (Omzet - Biaya):</span>
                    <strong className={`font-mono text-xs ${isUntung ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {formatRupiah(labaBersih)}
                    </strong>
                  </div>

                  {isUntung ? (
                    <>
                      <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                        <span className="text-stone-700">Hak Investor ({nisbahInvestor}%):</span>
                        <strong className="font-mono text-xs text-emerald-800">{formatRupiah(bagianInvestor)}</strong>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                        <span className="text-stone-700">Hak Pengelola ({nisbahPengelola}%):</span>
                        <strong className="font-mono text-xs text-emerald-800">{formatRupiah(bagianPengelola)}</strong>
                      </div>
                    </>
                  ) : (
                    <div className="p-3 bg-rose-50 rounded-lg border border-rose-200 text-rose-950 space-y-1 mt-2">
                      <strong className="block text-xs font-bold">Terjadi Kerugian Usaha: {formatRupiah(rugiNominal)}</strong>
                      {isRugiKelalaian ? (
                        <p className="text-[11px] leading-relaxed">
                          Karena kerugian terbukti akibat <strong>kelalaian/kecerobohan pengelola</strong>, maka pengelola <strong>WAJIB mengganti rugi modal sebesar {formatRupiah(rugiNominal)}</strong> kepada investor.
                        </p>
                      ) : (
                        <p className="text-[11px] leading-relaxed">
                          Karena kerugian terjadi secara normal fluktuasi pasar, maka <strong>modal investor berkurang sebesar {formatRupiah(rugiNominal)}</strong>. Pengelola tidak menanggung ganti rugi materi, melainkan rugi atas waktu, tenaga, dan tidak mendapat bagi hasil.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-2.5 bg-white rounded border border-stone-200 text-[10px] text-stone-600 font-mono mt-3">
                <strong>Kaidah Fiqih: </strong>
                "Ar-Ribhu 'alā mā syarathā, wal-wadhī'atu 'alā qadril māl" (Keuntungan dibagi sesuai kesepakatan nisbah, sedangkan kerugian materiil atas modal).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Tab 2: Murabahah */}
      {activeTab === 'murabahah' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Simulasi Pembiayaan Murābahah (Cost-Plus Margin) Bank Syariah
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Prinsip syar'i: Penjual menyebutkan harga perolehan pokok secara transparan + margin keuntungan disepakati. Cicilan angsuran bersifat flat tetap hingga lunas tanpa bunga mengambang (floating).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Input Form */}
            <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
                Parameter Pembelian Aset:
              </span>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Harga Beli Pokok Aset Riil (Mobil/Rumah):
                </label>
                <input
                  type="number"
                  value={hargaPokok}
                  onChange={(e) => setHargaPokok(Number(e.target.value))}
                  className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Uang Muka (DP Nasabah):</label>
                  <input
                    type="number"
                    value={uangMuka}
                    onChange={(e) => setUangMuka(Number(e.target.value))}
                    className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Margin Bank (% per tahun):</label>
                  <input
                    type="number"
                    value={marginTahunan}
                    onChange={(e) => setMarginTahunan(Number(e.target.value))}
                    className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Jangka Waktu Tenor (Bulan):</label>
                <select
                  value={tenorBulan}
                  onChange={(e) => setTenorBulan(Number(e.target.value))}
                  className="w-full p-2 border border-stone-300 rounded bg-white text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                >
                  <option value={12}>12 Bulan (1 Tahun)</option>
                  <option value={24}>24 Bulan (2 Tahun)</option>
                  <option value={36}>36 Bulan (3 Tahun)</option>
                  <option value={60}>60 Bulan (5 Tahun)</option>
                  <option value={120}>120 Bulan (10 Tahun)</option>
                </select>
              </div>
            </div>

            {/* Output Calculation Card */}
            <div className="space-y-4 bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 flex flex-col justify-between">
              <div>
                <span className="font-bold text-emerald-950 block uppercase tracking-wider text-[11px] border-b border-emerald-200 pb-2">
                  Struktur Rincian Akad Jual Beli:
                </span>

                <div className="mt-3 space-y-2">
                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-600">Plafon Pokok Pembiayaan Bank:</span>
                    <strong className="font-mono text-xs text-stone-900">{formatRupiah(plafonDibiayai)}</strong>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-600">Total Margin Keuntungan Bank:</span>
                    <strong className="font-mono text-xs text-emerald-800">{formatRupiah(totalMarginBank)}</strong>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-900 font-bold">Total Harga Jual Murabahah:</span>
                    <strong className="font-mono text-sm text-emerald-900 font-bold">
                      {formatRupiah(totalPiutangMurabahah)}
                    </strong>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-emerald-300 text-center mt-3">
                    <span className="text-[10px] text-stone-500 uppercase font-bold block">
                      Angsuran Bulanan Flat Tetap:
                    </span>
                    <strong className="text-lg font-bold text-emerald-800 font-mono block mt-0.5">
                      {formatRupiah(angsuranBulanan)} / bulan
                    </strong>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      Selama {tenorBulan} bulan tanpa denda bunga majemuk
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-white rounded border border-stone-200 text-[10px] text-stone-600 font-mono mt-3">
                <strong>Ketentuan Fatwa DSN-MUI: </strong>
                Bank wajib terlebih dahulu membeli dan memiliki aset secara sah dari penjual awal sebelum menjualnya kembali ke nasabah.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Tab 3: Komparator Pertanian */}
      {activeTab === 'tani_compare' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Komparasi 3 Akad Sektor Riil Pertanian & Perkebunan
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Perbedaan esensial antara Musaqah, Muzara'ah, dan Mukhabarah dalam tradisi fiqih:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-stone-200 rounded-lg overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Aspek Fiqih</th>
                  <th className="p-3">1. Musāqāh</th>
                  <th className="p-3">2. Muzāra'ah</th>
                  <th className="p-3">3. Mukhābarah</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700 text-[11px]">
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-semibold text-stone-900">Objek Tanaman</td>
                  <td className="p-3">Pohon berbuah yang sudah berdiri (kurma, sawit, mangga)</td>
                  <td className="p-3">Tanah lahan kosong siap tanam (padi, jagung, palawija)</td>
                  <td className="p-3">Tanah lahan kosong siap tanam</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-semibold text-stone-900">Asal Benih / Bibit</td>
                  <td className="p-3">Tidak perlu benih (pohon sudah ada)</td>
                  <td className="p-3 font-bold text-emerald-800">Disediakan oleh PEMILIK TANAH</td>
                  <td className="p-3 font-bold text-sky-800">Disediakan oleh PETANI PENGGARAP</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-semibold text-stone-900">Tugas Penggarap</td>
                  <td className="p-3">Menyiram, memupuk, merawat hingga panen</td>
                  <td className="p-3">Membajak, menanam benih, dan menggarap</td>
                  <td className="p-3">Membawa benih sendiri dan menggarap</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-semibold text-stone-900">Pembagian Hasil</td>
                  <td className="p-3">Persentase buah hasil panen (nisbah)</td>
                  <td className="p-3">Persentase hasil panen gabah/sayur</td>
                  <td className="p-3">Persentase hasil panen gabah/sayur</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Content Tab 4: Komparator Jaminan */}
      {activeTab === 'jaminan_compare' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Komparasi 3 Akad Proteksi, Jaminan, & Hak Istimewa
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Membedakan fungsi penjaminan finansial (Dhaman), penjaminan fisik (Kafalah), dan hak opsi beli (Syuf'ah):
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <strong className="text-stone-900 block font-bold text-sm">1. Dhamān (Jaminan Utang)</strong>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                Menjamin <strong>pembayaran uang/utang finansial</strong> milik orang lain. Jika peminjam kabur/gagal bayar, kreditur berhak menagih uang kepada penjamin (*Dhāmin*).
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <strong className="text-stone-900 block font-bold text-sm">2. Kafālah (Jaminan Kehadiran)</strong>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                Menjamin <strong>kehadiran fisik badan orang yang berperkara</strong> ke hadapan pengadilan atau majelis kreditur pada waktu sidang yang disepakati (*Kafālatul Wajh/Badan*).
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <strong className="text-stone-900 block font-bold text-sm">3. Syuf'ah (Hak Opsi Beli)</strong>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                Hak prioritas bagi <strong>sekutu pemilik bersama</strong> untuk membeli secara paksa bagian tanah/properti yang hendak dijual sekutunya kepada orang asing dengan harga yang sama.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
