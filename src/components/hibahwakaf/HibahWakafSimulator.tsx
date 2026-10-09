import React, { useState } from 'react';
import { Calculator, Scale, Coins, Gift, Landmark, CheckCircle2, AlertOctagon, HelpCircle, ArrowRight } from 'lucide-react';

export function HibahWakafSimulator() {
  const [activeTab, setActiveTab] = useState<'hibah_anak' | 'wakaf_uang' | 'decision_guide'>('hibah_anak');

  // State Hibah Anak
  const [totalHartaHibah, setTotalHartaHibah] = useState<number>(300000000); // 300 jt
  const [anakLaki, setAnakLaki] = useState<number>(2);
  const [anakPerempuan, setAnakPerempuan] = useState<number>(1);
  const [metodeHibah, setMetodeHibah] = useState<'sama_rata' | 'proporsi_waris'>('sama_rata');

  // Perhitungan Hibah Anak
  const totalAnak = anakLaki + anakPerempuan;
  let porsiLaki = 0;
  let porsiPerempuan = 0;

  if (totalAnak > 0) {
    if (metodeHibah === 'sama_rata') {
      porsiLaki = Math.round(totalHartaHibah / totalAnak);
      porsiPerempuan = Math.round(totalHartaHibah / totalAnak);
    } else {
      // 2:1 seperti waris
      const totalBagian = anakLaki * 2 + anakPerempuan * 1;
      const perBagian = totalBagian > 0 ? totalHartaHibah / totalBagian : 0;
      porsiLaki = Math.round(perBagian * 2);
      porsiPerempuan = Math.round(perBagian * 1);
    }
  }

  // State Wakaf Uang (Cash Waqf)
  const [pokokWakaf, setPokokWakaf] = useState<number>(500000000); // 500 jt
  const [returnInvestasi, setReturnInvestasi] = useState<number>(6.5); // 6.5% pertahun (misal Sukuk CWLS)
  const [biayaBeasiswa, setBiayaBeasiswa] = useState<number>(6000000); // 6 jt pertahun per anak

  // Perhitungan Wakaf Uang
  const hasilInvestasiKotor = (pokokWakaf * returnInvestasi) / 100;
  const hakNazhir = hasilInvestasiKotor * 0.1; // Maksimal 10% menurut UU No 41/2004
  const hasilBersihMauqufAlaih = hasilInvestasiKotor - hakNazhir;
  const jumlahPenerimaBeasiswa = biayaBeasiswa > 0 ? Math.floor(hasilBersihMauqufAlaih / biayaBeasiswa) : 0;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Calculator className="w-4 h-4 text-emerald-700" />
          <span>Kalkulator & Simulator Interaktif Hibah-Wakaf</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kalkulator Keadilan Hibah Anak, Proyeksi Wakaf Produktif, & Panduan Alokasi
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Gunakan simulator di bawah untuk merancang pembagian hibah yang adil antar-anak kandung sesuai petunjuk Rasulullah SAW,
          serta menghitung proyeksi manfaat abadi dari pengelolaan Wakaf Uang (*Cash Waqf*).
        </p>
      </div>

      {/* Switcher Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('hibah_anak')}
          className={`p-3 rounded-xl border text-center transition-all ${
            activeTab === 'hibah_anak'
              ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <span className="text-xs block">1. Keadilan Hibah Antar-Anak</span>
          <span className="text-[10px] block opacity-80 mt-0.5">Kalkulator Pembagian Adil</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('wakaf_uang')}
          className={`p-3 rounded-xl border text-center transition-all ${
            activeTab === 'wakaf_uang'
              ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <span className="text-xs block">2. Proyeksi Wakaf Uang</span>
          <span className="text-[10px] block opacity-80 mt-0.5">Kalkulator Sedekah Jariyah</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('decision_guide')}
          className={`p-3 rounded-xl border text-center transition-all ${
            activeTab === 'decision_guide'
              ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <span className="text-xs block">3. Panduan Alokasi Harta</span>
          <span className="text-[10px] block opacity-80 mt-0.5">Kapan Hibah, Wakaf, Wasiat?</span>
        </button>
      </div>

      {/* Tab 1: Hibah Anak */}
      {activeTab === 'hibah_anak' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Simulasi Keadilan Hibah Kepada Anak Kandung
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Menghindari pilih kasih yang diharamkan syariat dan menjaga keharmonisan silaturahmi keluarga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Input Form */}
            <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
                Parameter Keluarga & Harta:
              </span>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Total Nominal Harta yang Dihibahkan:
                </label>
                <input
                  type="number"
                  value={totalHartaHibah}
                  onChange={(e) => setTotalHartaHibah(Number(e.target.value))}
                  className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Jumlah Anak Laki-laki:</label>
                  <input
                    type="number"
                    min="0"
                    value={anakLaki}
                    onChange={(e) => setAnakLaki(Math.max(0, Number(e.target.value)))}
                    className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Jumlah Anak Perempuan:</label>
                  <input
                    type="number"
                    min="0"
                    value={anakPerempuan}
                    onChange={(e) => setAnakPerempuan(Math.max(0, Number(e.target.value)))}
                    className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Metode Fiqih Pembagian:</label>
                <div className="space-y-2 pt-1">
                  <label className="flex items-start gap-2 p-2.5 rounded-lg border border-stone-200 bg-white cursor-pointer hover:bg-stone-50">
                    <input
                      type="radio"
                      name="metodeHibah"
                      checked={metodeHibah === 'sama_rata'}
                      onChange={() => setMetodeHibah('sama_rata')}
                      className="accent-emerald-700 mt-0.5"
                    />
                    <div>
                      <strong className="block text-stone-900 text-xs">Sama Rata Adil (Jumhur Ulama)</strong>
                      <span className="text-[10px] text-stone-500">
                        Anak laki-laki dan perempuan mendapat porsi rupiah yang persis sama.
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 p-2.5 rounded-lg border border-stone-200 bg-white cursor-pointer hover:bg-stone-50">
                    <input
                      type="radio"
                      name="metodeHibah"
                      checked={metodeHibah === 'proporsi_waris'}
                      onChange={() => setMetodeHibah('proporsi_waris')}
                      className="accent-emerald-700 mt-0.5"
                    />
                    <div>
                      <strong className="block text-stone-900 text-xs">Proporsi 2:1 Waris (Mazhab Hanbali)</strong>
                      <span className="text-[10px] text-stone-500">
                        Anak laki-laki mendapat 2 bagian, anak perempuan 1 bagian (mengikuti kaidah waris).
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Output Calculation */}
            <div className="space-y-4 bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 flex flex-col justify-between">
              <div>
                <span className="font-bold text-emerald-950 block uppercase tracking-wider text-[11px] border-b border-emerald-200 pb-2">
                  Rekomendasi Bagian Masing-Masing Anak:
                </span>

                <div className="mt-3 space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-emerald-300 space-y-1">
                    <span className="text-[10px] text-stone-500 uppercase font-bold block">
                      Bagian Tiap Anak Laki-laki:
                    </span>
                    <strong className="text-base font-bold text-emerald-800 font-mono block">
                      {formatRupiah(porsiLaki)}
                    </strong>
                    <span className="text-[10px] text-stone-500 block">
                      Untuk masing-masing dari {anakLaki} anak laki-laki
                    </span>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-emerald-300 space-y-1">
                    <span className="text-[10px] text-stone-500 uppercase font-bold block">
                      Bagian Tiap Anak Perempuan:
                    </span>
                    <strong className="text-base font-bold text-emerald-800 font-mono block">
                      {formatRupiah(porsiPerempuan)}
                    </strong>
                    <span className="text-[10px] text-stone-500 block">
                      Untuk masing-masing dari {anakPerempuan} anak perempuan
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-300 text-amber-950 text-[11px] space-y-1 mt-3">
                <strong className="block font-bold">Peringatan Keras Rasulullah SAW:</strong>
                <p className="leading-relaxed">
                  Menghibahkan harta hanya kepada sebagian anak dan mengabaikan anak lainnya tanpa uzur syar'i adalah <strong>tindakan kezaliman (*jūr*)</strong> yang dapat memicu durhaka kepada orang tua dan dendam persaudaraan.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Wakaf Uang (Cash Waqf) */}
      {activeTab === 'wakaf_uang' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Simulasi Proyeksi Manfaat Wakaf Uang (Cash Waqf) & Wakaf Produktif
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Pokok dana wakaf utuh 100% selamanya, sedangkan imbal hasil investasinya disalurkan abadi kepada penerima manfaat (*Mauquf 'Alaih*).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Input Form */}
            <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
                Parameter Dana Abadi Wakaf:
              </span>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Pokok Dana Wakaf Dihimpun (Endowment Fund):
                </label>
                <input
                  type="number"
                  value={pokokWakaf}
                  onChange={(e) => setPokokWakaf(Number(e.target.value))}
                  className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-stone-700 font-medium">Estimasi Imbal Hasil Investasi Syariah / Tahun:</label>
                  <span className="font-bold text-emerald-800 font-mono">{returnInvestasi}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="12"
                  step="0.5"
                  value={returnInvestasi}
                  onChange={(e) => setReturnInvestasi(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Biaya Beasiswa Pendidikan / Santunan per Siswa per Tahun:
                </label>
                <input
                  type="number"
                  value={biayaBeasiswa}
                  onChange={(e) => setBiayaBeasiswa(Number(e.target.value))}
                  className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>
            </div>

            {/* Output Calculation */}
            <div className="space-y-4 bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 flex flex-col justify-between">
              <div>
                <span className="font-bold text-emerald-950 block uppercase tracking-wider text-[11px] border-b border-emerald-200 pb-2">
                  Proyeksi Manfaat Abadi Setiap Tahun:
                </span>

                <div className="mt-3 space-y-2">
                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-600">Total Imbal Hasil Investasi per Tahun:</span>
                    <strong className="font-mono text-xs text-stone-900">{formatRupiah(hasilInvestasiKotor)}</strong>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-600">Hak Operasional Nazhir (Maks 10%):</span>
                    <strong className="font-mono text-xs text-stone-600">{formatRupiah(hakNazhir)}</strong>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-900 font-bold">Dana Bersih Disalurkan (90%):</span>
                    <strong className="font-mono text-xs text-emerald-800 font-bold">
                      {formatRupiah(hasilBersihMauqufAlaih)} / tahun
                    </strong>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-emerald-300 text-center mt-3">
                    <span className="text-[10px] text-stone-500 uppercase font-bold block">
                      Jumlah Siswa Dhuafa Terbiayai Tiap Tahun:
                    </span>
                    <strong className="text-2xl font-bold text-emerald-800 font-mono block mt-0.5">
                      {jumlahPenerimaBeasiswa} Siswa
                    </strong>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      Pendidikan gratis terus berlanjut tanpa mengurangi modal pokok {formatRupiah(pokokWakaf)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-white rounded border border-stone-200 text-[10px] text-stone-600 font-mono mt-3">
                <strong>Legalitas: </strong>
                Sesuai Fatwa MUI (2002) & UU No. 41 Tahun 2004 tentang Wakaf.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Decision Guide */}
      {activeTab === 'decision_guide' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Panduan Memilih: Kapan Menggunakan Hibah, Wakaf, Wasiat, atau Waris?
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Rekomendasi alokasi harta berdasarkan tujuan finansial keluarga dan pahala akhirat:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <strong className="text-stone-900 block font-bold text-sm">
                1. Kapan Menggunakan HIBAH?
              </strong>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                Gunakan hibah saat Anda <strong>masih sehat dan hidup</strong> untuk membantu anak mandiri membeli rumah, mendirikan usaha, atau memberikan hadiah cinta kepada pasangan dan sahabat.
              </p>
              <span className="text-[10px] font-bold text-emerald-800 block">Kunci: Wajib adil antar-anak dan wajib ada serah terima fisik (qabdh).</span>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <strong className="text-stone-900 block font-bold text-sm">
                2. Kapan Menggunakan WAKAF?
              </strong>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                Gunakan wakaf jika Anda memiliki aset tahan lama (tanah, ruko, atau dana tunai abadi) yang ingin dijadikan <strong>investasi pahala jariyah abadi</strong> yang terus mengalir setelah kematian.
              </p>
              <span className="text-[10px] font-bold text-sky-800 block">Kunci: Pokok tidak boleh dijual/diwariskan selamanya.</span>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <strong className="text-stone-900 block font-bold text-sm">
                3. Kapan Menggunakan WASIAT?
              </strong>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                Gunakan wasiat untuk memberikan sebagian harta peninggalan kepada <strong>anak angkat, kerabat non-waris, panti asuhan, atau lembaga dakwah</strong> yang baru dieksekusi setelah Anda meninggal dunia.
              </p>
              <span className="text-[10px] font-bold text-amber-800 block">Kunci: Maksimal 1/3 harta dan dilarang untuk ahli waris.</span>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <strong className="text-stone-900 block font-bold text-sm">
                4. Kapan Menggunakan HUKUM WARIS?
              </strong>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                Hukum waris berlaku secara <strong>otomatis demi hukum Allah</strong> atas seluruh sisa harta yang masih Anda miliki saat meninggal dunia, untuk dibagikan secara adil kepada ahli waris sesuai porsi Faraidh.
              </p>
              <span className="text-[10px] font-bold text-purple-800 block">Kunci: Ketetapan mutlak dari Allah (Farīdhatan minallāh).</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
