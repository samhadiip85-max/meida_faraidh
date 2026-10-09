import React, { useState } from 'react';
import { ThalaqNumber, LafazType, WaktuType, JenisPemutusan } from '../../types/perceraian';
import { HeartCrack, HeartHandshake, Baby, CheckCircle2, AlertOctagon, HelpCircle, ArrowRight, ShieldCheck, Scale } from 'lucide-react';

export function ThalaqHadhanahSimulator() {
  const [activeTab, setActiveTab] = useState<'simulator_thalaq' | 'simulator_hadhanah'>('simulator_thalaq');

  // State Simulator Thalaq
  const [jenisPemutusan, setJenisPemutusan] = useState<JenisPemutusan>('thalaq');
  const [thalaqKe, setThalaqKe] = useState<ThalaqNumber>(1);
  const [lafazType, setLafazType] = useState<LafazType>('sharih');
  const [waktuType, setWaktuType] = useState<WaktuType>('sunni');
  const [sudahDukhul, setSudahDukhul] = useState<boolean>(true);
  const [masihDalamIddah, setMasihDalamIddah] = useState<boolean>(true);

  // State Simulator Hadhanah
  const [usiaAnak, setUsiaAnak] = useState<number>(5);
  const [ibuSudahNikahLagi, setIbuSudahNikahLagi] = useState<boolean>(false);
  const [ibuMampuAmanah, setIbuMampuAmanah] = useState<boolean>(true);

  // Evaluator Thalaq & Rujuk
  const evaluateThalaq = () => {
    // Jika lafaz kinayah tanpa niat
    if (jenisPemutusan === 'thalaq' && lafazType === 'kinayah_tanpa_niat') {
      return {
        isJatuh: false,
        kategori: 'TIDAK JATUH TALAK',
        color: 'emerald',
        caraRujuk: 'Pernikahan tetap utuh sah 100%. Tidak ada talak yang jatuh.',
        penjelasan: 'Lafaz Kināyah (sindiran) tanpa niat mentalak di dalam hati tidak menjatuhkan talak sama sekali.',
        statusWaktu: 'Tidak ada konsekuensi dosa talak.',
        dalil: 'Hadits: "Innamal a\'mālu bin-niyyāt" (Sesungguhnya setiap amalan bergantung pada niatnya).',
      };
    }

    // Jika Khulu' (Gugat Cerai Istri dengan Tebusan)
    if (jenisPemutusan === 'khulu') {
      return {
        isJatuh: true,
        kategori: 'THALĀQ BĀ\'IN SUGHRĀ (BAIN KECIL)',
        color: 'amber',
        caraRujuk: 'Suami TIDAK BISA RUJUK SEPIHAK. Keduanya hanya boleh bersatu kembali jika mantan istri ridha dengan AKAD NIKAH BARU, WALI BARU, dan MAHAR BARU.',
        penjelasan: 'Tebusan harta dari istri memutuskan hak rujuk sepihak suami demi menjaga keadilan bagi istri.',
        statusWaktu: 'Khulu\' diperbolehkan bila ada kekhawatiran melanggar hukum Allah (QS. Al-Baqarah: 229).',
        dalil: 'QS. Al-Baqarah: 229 & Hadits Shahih Bukhari tentang Khulu\' Istri Tsabit bin Qais.',
      };
    }

    // Jika Fasakh Hakim
    if (jenisPemutusan === 'fasakh') {
      return {
        isJatuh: true,
        kategori: 'FASAKH (BĀ\'IN SUGHRĀ - PEMBATALAN NIKAH OLEH HAKIM)',
        color: 'amber',
        caraRujuk: 'Bisa kembali hanya dengan AKAD NIKAH BARU jika sebab pembatalan telah hilang. Tidak mengurangi jatah 3 talak.',
        penjelasan: 'Diputus oleh hakim karena aib permanen, murtad, atau suami hilang kabar tanpa nafkah.',
        statusWaktu: 'Sah secara hukum pengadilan agama.',
        dalil: 'Kaidah Fiqih Pembatalan Akad oleh Qadhi.',
      };
    }

    // Jika Thalaq Tiga (Ba'in Kubra)
    if (thalaqKe === 3) {
      return {
        isJatuh: true,
        kategori: 'THALĀQ BĀ\'IN KUBRĀ (TALAK TIGA / BAIN BESAR)',
        color: 'rose',
        caraRujuk: 'HARAM RUJUK & HARAM MENIKAH KEMBALI! Kecuali jika mantan istri telah menikah sah secara murni dengan pria lain (bukan muhallil rekayasa), telah berhubungan intim nyata, lalu bercerai wajar / suami wafat, dan masa iddahnya tuntas.',
        penjelasan: 'Kuota tiga talak telah habis tuntas. Hubungan perkawinan terputus secara mutlak.',
        statusWaktu: waktuType === 'sunni' ? 'Thalaq Sunni (Halal)' : 'Thalaq Bid\'ī (Haram & Berdosa Besar tapi Tetap Jatuh menurut Jumhur)',
        dalil: 'QS. Al-Baqarah: 230 & HR. Bukhari no. 2639.',
      };
    }

    // Jika Thalaq 1 atau 2 Sebelum Dukhul
    if (!sudahDukhul) {
      return {
        isJatuh: true,
        kategori: 'THALĀQ BĀ\'IN SUGHRĀ (TALAK SEBELUM DUKHUL)',
        color: 'amber',
        caraRujuk: 'Tidak ada masa \'iddah bagi wanita yang ditalak sebelum dukhul (QS. Al-Ahzab: 49). Suami tidak bisa rujuk sepihak. Jika ingin kembali wajib AKAD NIKAH BARU & MAHAR BARU.',
        penjelasan: 'Karena belum pernah terjadi hubungan badan, talak langsung berstatus bain sughra seketika.',
        statusWaktu: 'Halal dijatuhkan kapan saja karena tidak ada masa iddah.',
        dalil: 'QS. Al-Ahzab: 49.',
      };
    }

    // Jika Thalaq 1 atau 2 Ba'dad Dukhul: Periksa masa 'iddah
    if (masihDalamIddah) {
      return {
        isJatuh: true,
        kategori: 'THALĀQ RAJ\'Ī (TALAK YANG BOLEH RUJUK LANGSUNG)',
        color: 'emerald',
        caraRujuk: 'Suami BERHAK RUJUK SEPIHAK KAPAN SAJA selama masa \'iddah berlangsung tanpa perlu akad nikah baru, tanpa wali baru, dan tanpa mahar baru!',
        penjelasan: 'Status wanita tersebut masih dianggap seperti istri dalam hak rujuk. Cukup suami mengucapkan lafaz rujuk ("Saya rujuk kepadamu").',
        statusWaktu: waktuType === 'sunni' ? 'Thalaq Sunni (Halal & Sah)' : 'Thalaq Bid\'ī (Haram & Berdosa Besar karena saat Haid/Suci Campur, namun Tetap Jatuh menurut Jumhur)',
        dalil: 'QS. Al-Baqarah: 228 & QS. Ath-Thalaq: 1.',
      };
    } else {
      // Masa Iddah Habis
      return {
        isJatuh: true,
        kategori: 'BERUBAH MENJADI BĀ\'IN SUGHRĀ (MASA \'IDDAH TELAH HABIS)',
        color: 'amber',
        caraRujuk: 'Masa \'iddah telah habis tuntas. Suami kehilangan hak rujuk sepihak. Jika ingin bersatu kembali, WAJIB DENGAN AKAD NIKAH BARU, WALI BARU, dan MAHAR BARU dengan keridhaan sang wanita.',
        penjelasan: 'Talak raj\'i yang dibiarkan sampai habis masa iddahnya tanpa dirujuk otomatis berubah menjadi bain sughra.',
        statusWaktu: 'Sah.',
        dalil: 'Kaidah Fiqih Mazhab Syafi\'i.',
      };
    }
  };

  const decision = evaluateThalaq();

  // Evaluator Hadhanah
  const evaluateHadhanah = () => {
    if (usiaAnak >= 7) {
      return {
        status: 'ANAK SUDAH TAMYIZ (USIA 7 TAHUN KE ATAS)',
        hakAsuh: 'HAK MEMILIH DI TANGAN ANAK (AL-KHIYĀR / TAKHYĪR)',
        penjelasan: 'Anak yang sudah tamyiz diajak berdialog oleh hakim/orang tua untuk memilih tinggal bersama Ayah atau bersama Ibunya (HR. Abu Dawud & Tirmidzi).',
        nafkah: 'Wajib 100% ditanggung oleh AYAH KANDUNG.',
      };
    }
    if (!ibuMampuAmanah) {
      return {
        status: 'IBU TIDAK MEMENUHI SYARAT AMANAH',
        hakAsuh: 'BERPINDAH KE NENEK JALUR IBU / AYAH KANDUNG',
        penjelasan: 'Bila ibu murtad, berkelakuan fasik berat, atau tidak mampu menjaga keselamatan anak, hak asuh dicabut demi kemaslahatan anak.',
        nafkah: 'Wajib ditanggung oleh AYAH KANDUNG.',
      };
    }
    if (ibuSudahNikahLagi) {
      return {
        status: 'IBU MENIKAH LAGI DENGAN PRIA LAIN',
        hakAsuh: 'GUGUR DARI IBU ➔ BERPINDAH KE NENEK JALUR IBU / AYAH KANDUNG',
        penjelasan: 'Rasulullah SAW bersabda: "Engkau lebih berhak atas anakmu selama engkau belum menikah lagi" (HR. Abu Dawud). Bila ibu menikah lagi dengan pria asing bagi anak, hak asuh beralih ke garis keluarga selanjutnya.',
        nafkah: 'Wajib ditanggung oleh AYAH KANDUNG.',
      };
    }
    return {
      status: 'ANAK BELUM TAMYIZ (< 7 TAHUN)',
      hakAsuh: 'HAK ASUH MUTLAK DI TANGAN IBU KANDUNG',
      penjelasan: 'Ibu kandung paling penyayang, sabar, dan memiliki ikatan batin terbaik merawat anak usia dini.',
      nafkah: 'Wajib 100% ditanggung oleh AYAH KANDUNG.',
    };
  };

  const hadhanahDecision = evaluateHadhanah();

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <HeartCrack className="w-4 h-4 text-rose-700" />
          <span>Simulator Status Thalaq, Rujuk, & Hak Asuh Anak (Hadhānah)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Uji Status Thalaq Raj'i vs Ba'in, Keabsahan Rujuk, & Hak Pengasuhan Anak
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Gunakan simulator di bawah untuk menguji apakah ucapan suami menjatuhkan talak atau tidak,
          apakah suami berhak rujuk langsung tanpa akad, serta siapa yang berhak memegang hak asuh anak pascaperceraian.
        </p>
      </div>

      {/* Switcher Tab */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('simulator_thalaq')}
          className={`p-3 rounded-xl border text-center transition-all ${
            activeTab === 'simulator_thalaq'
              ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <span className="text-xs block">1. Simulator Status Thalaq & Hak Rujuk</span>
          <span className="text-[10px] block opacity-80 mt-0.5">Raj'i vs Ba'in Sughra vs Ba'in Kubra (Talak 3)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('simulator_hadhanah')}
          className={`p-3 rounded-xl border text-center transition-all ${
            activeTab === 'simulator_hadhanah'
              ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <span className="text-xs block">2. Simulator Hak Asuh Anak (Hadhānah)</span>
          <span className="text-[10px] block opacity-80 mt-0.5">Hak Ibu, Ayah, Usia Tamyiz, & Nafkah</span>
        </button>
      </div>

      {/* Tab 1: Simulator Thalaq */}
      {activeTab === 'simulator_thalaq' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Simulasi Status Thalaq & Prosedur Rujuk
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Atur variabel ucapan dan kondisi istri untuk melihat putusan hukum syar'i:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Input Form */}
            <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
                Variabel Perceraian:
              </span>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Jenis Pemutusan Hubungan:</label>
                <select
                  value={jenisPemutusan}
                  onChange={(e) => setJenisPemutusan(e.target.value as any)}
                  className="w-full p-2 border border-stone-300 rounded bg-white text-xs font-semibold focus:ring-2 focus:ring-rose-700 focus:outline-none"
                >
                  <option value="thalaq">Thalāq Biasa (Inisiatif Suami)</option>
                  <option value="khulu">Khul'u (Gugat Cerai Istri dengan Tebusan Harta/Mahar)</option>
                  <option value="fasakh">Fasakh Hakim (Pembatalan oleh Pengadilan Agama)</option>
                </select>
              </div>

              {jenisPemutusan === 'thalaq' && (
                <>
                  <div>
                    <label className="block text-stone-700 font-medium mb-1">Thalaq yang Ke-Berapa:</label>
                    <select
                      value={thalaqKe}
                      onChange={(e) => setThalaqKe(Number(e.target.value) as any)}
                      className="w-full p-2 border border-stone-300 rounded bg-white text-xs font-semibold focus:ring-2 focus:ring-rose-700 focus:outline-none"
                    >
                      <option value={1}>Thalaq 1 (Pertama)</option>
                      <option value={2}>Thalaq 2 (Kedua)</option>
                      <option value={3}>Thalaq 3 (Ketiga - Menghabiskan Kuota)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-medium mb-1">Lafaz Ucapan Suami:</label>
                    <select
                      value={lafazType}
                      onChange={(e) => setLafazType(e.target.value as any)}
                      className="w-full p-2 border border-stone-300 rounded bg-white text-xs font-semibold focus:ring-2 focus:ring-rose-700 focus:outline-none"
                    >
                      <option value="sharih">Lafaz Sharīh / Tegas ("Kamu aku ceraikan / tertalak")</option>
                      <option value="kinayah_niat">Lafaz Kināyah / Sindiran DISERTAI Niat Mentalak</option>
                      <option value="kinayah_tanpa_niat">Lafaz Kināyah / Sindiran TANPA Niat Mentalak</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-medium mb-1">Kondisi Istri Saat Ditalak:</label>
                    <select
                      value={waktuType}
                      onChange={(e) => setWaktuType(e.target.value as any)}
                      className="w-full p-2 border border-stone-300 rounded bg-white text-xs font-semibold focus:ring-2 focus:ring-rose-700 focus:outline-none"
                    >
                      <option value="sunni">Suci dan BELUM Dicampuri (Thalaq Sunnī - Halal)</option>
                      <option value="bidi_haid">Sedang Haid / Nifas (Thalaq Bid'ī - Haram & Berdosa)</option>
                      <option value="bidi_suci_gaul">Suci tapi SUDAH Dicampuri (Thalaq Bid'ī - Haram)</option>
                    </select>
                  </div>

                  <div className="space-y-2 pt-1 border-t border-stone-200">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sudahDukhul}
                        onChange={(e) => setSudahDukhul(e.target.checked)}
                        className="accent-rose-700"
                      />
                      <span>Sudah Pernah Berhubungan Badan (*Ba'dad Dukhūl*)</span>
                    </label>

                    {sudahDukhul && thalaqKe < 3 && (
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={masihDalamIddah}
                          onChange={(e) => setMasihDalamIddah(e.target.checked)}
                          className="accent-rose-700"
                        />
                        <span>Masih Berada dalam Masa 'Iddah (3 Kali Suci)</span>
                      </label>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Output Putusan */}
            <div
              className={`p-5 rounded-xl border flex flex-col justify-between space-y-4 ${
                decision.color === 'emerald'
                  ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                  : decision.color === 'amber'
                  ? 'bg-amber-50/80 border-amber-300 text-amber-950'
                  : 'bg-rose-50/80 border-rose-300 text-rose-950'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-black/10 pb-2">
                  <span className="font-bold text-xs uppercase tracking-wider">Status Ketetapan Fiqih:</span>
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-bold ${
                      decision.color === 'emerald'
                        ? 'bg-emerald-200 text-emerald-900'
                        : decision.color === 'amber'
                        ? 'bg-amber-200 text-amber-900'
                        : 'bg-rose-200 text-rose-900'
                    }`}
                  >
                    {decision.kategori}
                  </span>
                </div>

                <div className="mt-3 space-y-2.5">
                  <div>
                    <strong className="block text-xs font-bold">Prosedur Rujuk / Kembali:</strong>
                    <p className="text-xs leading-relaxed mt-0.5">{decision.caraRujuk}</p>
                  </div>

                  <div className="pt-2 border-t border-black/10">
                    <strong className="block text-xs font-bold">Penjelasan Hukum:</strong>
                    <p className="text-[11px] leading-relaxed mt-0.5">{decision.penjelasan}</p>
                  </div>

                  <div className="pt-2 border-t border-black/10">
                    <strong className="block text-xs font-bold">Status Taklif Waktu:</strong>
                    <p className="text-[11px] leading-relaxed mt-0.5">{decision.statusWaktu}</p>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-white/70 rounded border border-black/10 text-[10px] font-mono">
                <strong>Rujukan Dalil: </strong>{decision.dalil}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Simulator Hadhanah */}
      {activeTab === 'simulator_hadhanah' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Simulasi Hak Asuh Anak (*Fiqhul Hadhānah*)
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Tentukan usia anak dan kondisi ibu untuk mengetahui siapa pemegang hak asuh:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Input Form */}
            <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
                Kondisi Anak & Orang Tua:
              </span>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Usia Anak Saat Ini: <span className="font-bold text-rose-900">{usiaAnak} Tahun</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={usiaAnak}
                  onChange={(e) => setUsiaAnak(Number(e.target.value))}
                  className="w-full accent-rose-700 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-mono">
                  <span>1 Thn (Bayi)</span>
                  <span className="font-bold text-emerald-800">7-8 Thn (Batas Tamyiz)</span>
                  <span>15 Thn (Baligh)</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-stone-200">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ibuSudahNikahLagi}
                    onChange={(e) => setIbuSudahNikahLagi(e.target.checked)}
                    className="accent-rose-700"
                  />
                  <span>Ibu Kandung Sudah Menikah Lagi dengan Pria Lain</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ibuMampuAmanah}
                    onChange={(e) => setIbuMampuAmanah(e.target.checked)}
                    className="accent-rose-700"
                  />
                  <span>Ibu Kandung Berakhlak Baik & Mampu Merawat Anak</span>
                </label>
              </div>
            </div>

            {/* Output Hadhanah */}
            <div className="p-5 rounded-xl border bg-emerald-50/80 border-emerald-300 text-emerald-950 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
                  <span className="font-bold text-xs uppercase tracking-wider">Hasil Putusan Hadhanah:</span>
                  <span className="px-2.5 py-1 rounded text-xs font-bold bg-emerald-200 text-emerald-900">
                    {hadhanahDecision.status}
                  </span>
                </div>

                <div className="mt-3 space-y-2.5">
                  <div>
                    <strong className="block text-xs font-bold">Pemegang Hak Asuh Syar'i:</strong>
                    <p className="text-xs font-bold text-emerald-900 mt-0.5">{hadhanahDecision.hakAsuh}</p>
                  </div>

                  <div className="pt-2 border-t border-emerald-200">
                    <strong className="block text-xs font-bold">Penjelasan Kaidah Fiqih:</strong>
                    <p className="text-[11px] leading-relaxed mt-0.5">{hadhanahDecision.penjelasan}</p>
                  </div>

                  <div className="pt-2 border-t border-emerald-200">
                    <strong className="block text-xs font-bold">Penanggung Beban Nafkah Anak:</strong>
                    <p className="text-[11px] font-bold text-rose-900 mt-0.5">{hadhanahDecision.nafkah}</p>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-white/70 rounded border border-emerald-200 text-[10px] font-mono">
                <strong>Hadits Riwayat Abu Dawud: </strong>
                <em>"Anti ahaqqu bihī mā lam tankihī"</em> (Ibu lebih berhak mengasuh selama belum menikah lagi).
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
