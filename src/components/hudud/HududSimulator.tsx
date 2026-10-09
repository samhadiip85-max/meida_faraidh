import React, { useState } from 'react';
import { HududKind } from '../../types/hudud';
import { Scale, CheckCircle2, AlertOctagon, HelpCircle, ArrowRight, ShieldCheck, Sparkles, Gavel, UserCheck, Scissors, Wine, Users } from 'lucide-react';

export function HududSimulator() {
  const [selectedCase, setSelectedCase] = useState<HududKind>('sariqah');

  // State Zina
  const [zinaStatusNikah, setZinaStatusNikah] = useState<'muhshan' | 'ghairu_muhshan'>('muhshan');
  const [zinaBukti, setZinaBukti] = useState<'empat_saksi' | 'ikrar_empat' | 'kurang_saksi' | 'perkosaan'>('empat_saksi');

  // State Qadzaf
  const [qadzafAdaEmpatSaksi, setQadzafAdaEmpatSaksi] = useState<boolean>(false);
  const [qadzafIsSuamiLian, setQadzafIsSuamiLian] = useState<boolean>(false);

  // State Mencuri
  const [sariqahNilaiRupiah, setSariqahNilaiRupiah] = useState<number>(2000000); // 2 jt (di atas nishab 1.5 jt)
  const [sariqahDiHirz, setSariqahDiHirz] = useState<boolean>(true); // tersimpan di tempat aman terkunci
  const [sariqahKondisiLapar, setSariqahKondisiLapar] = useState<boolean>(false); // darurat kelaparan
  const [sariqahHubunganAnakAyah, setSariqahHubunganAnakAyah] = useState<boolean>(false); // syubhat kepemilikan
  const [sariqahUrutanKe, setSariqahUrutanKe] = useState<number>(1);

  // State Khamr
  const [khamrSengajaSadar, setKhamrSengajaSadar] = useState<boolean>(true);

  // State Bughat
  const [bughatPunyaSenjataTakwil, setBughatPunyaSenjataTakwil] = useState<boolean>(true);
  const [bughatMauDialogDamai, setBughatMauDialogDamai] = useState<boolean>(false);

  // Evaluator Keputusan Fiqih
  const evaluateCase = () => {
    switch (selectedCase) {
      case 'zina': {
        if (zinaBukti === 'perkosaan') {
          return {
            status: 'GUGUR_KORBAN',
            title: 'BEBAS DARI HAD (KORBAN PEMERKOSAAN / TERPAKSA)',
            color: 'emerald',
            sanksi: 'Korban pemerkosaan bebas mutlak dari segala tuntutan had. Pelaku pemerkosa yang diproses hukum berat.',
            syubhat: 'Kaidah Syubhat Paksaan (*Al-Ikrāh*): Dosa dan had diangkat dari orang yang dipaksa (HR. Ibnu Majah).',
          };
        }
        if (zinaBukti === 'kurang_saksi') {
          return {
            status: 'GUGUR_QADZAF_SAKSI',
            title: 'HAD ZINA GUGUR & PARA SAKSI DIHUKUM CAMBUK 80x (QADZAF)',
            color: 'rose',
            sanksi: 'Tertuduh bebas dari had zina. Ketiga/kedua orang saksi yang bersaksi justru dijatuhi Had Qadzaf (didera 80 kali jilid) karena menuduh tanpa kuota 4 saksi adil lengkap!',
            syubhat: 'Ketentuan mutlak QS. An-Nur: 4. Syariat melindungi kehormatan muslim dari saksi yang tidak genap.',
          };
        }
        if (zinaStatusNikah === 'muhshan') {
          return {
            status: 'HAD_RAJAM',
            title: 'DIJATUHI HAD RAJAM (HUKUMAN MATI)',
            color: 'rose',
            sanksi: 'Pelaku Muhshan (pernah nikah sah) dihukum rajam dengan dilempari batu di hadapan kaum muslimin hingga wafat.',
            syubhat: 'Tidak ada syubhat yang menggugurkan karena terpenuhinya 4 saksi adil / ikrar sukarela.',
          };
        } else {
          return {
            status: 'HAD_CAMBUK_PENGASINGAN',
            title: 'DIJATUHI HAD CAMBUK 100x & PENGASINGAN 1 TAHUN',
            color: 'rose',
            sanksi: 'Pelaku Ghairu Muhshan (lajang) didera cambuk 100 kali jilid dan diasingkan (*Taghrīb*) selama 1 tahun ke luar daerah.',
            syubhat: 'Sesuai nash qath\'i QS. An-Nur: 2 dan Sunnah shahihah.',
          };
        }
      }

      case 'qadzaf': {
        if (qadzafAdaEmpatSaksi) {
          return {
            status: 'BEBAS_TERBUKTI',
            title: 'BEBAS DARI HAD QADZAF (TUDUHAN TERBUKTI SYAR\'I)',
            color: 'emerald',
            sanksi: 'Penuduh terbebas dari sanksi qadzaf karena berhasil menghadirkan 4 saksi adil.',
            syubhat: 'Tuduhan terbukti secara hukum syar\'i.',
          };
        }
        if (qadzafIsSuamiLian) {
          return {
            status: 'BEBAS_LIAN',
            title: 'BEBAS DARI HAD QADZAF MELALUI SUMPAH LI\'ĀN',
            color: 'emerald',
            sanksi: 'Suami terbebas dari had cambuk 80x dengan bersumpah Li\'an 5 kali (QS. An-Nur: 6-9). Pernikahan otomatis putus cerai selamanya (*Fasakh abadi*).',
            syubhat: 'Syariat menyediakan jalan Li\'an khusus bagi suami istri guna membela kehormatan nasab keluarga.',
          };
        }
        return {
          status: 'HAD_QADZAF_80',
          title: 'DIJATUHI HAD QADZAF: CAMBUK 80x + TOLAK KESAKSIAN SEUMUR HIDUP',
          color: 'rose',
          sanksi: 'Didera cambuk 80 kali jilid, hak persaksiannya di pengadilan dicabut selamanya, dan dicap fasik.',
          syubhat: 'Gagal mendatangkan 4 saksi adil saat menuduh zina (QS. An-Nur: 4).',
        };
      }

      case 'sariqah': {
        const nishabEmasRupiah = 1500000; // Asumsi 1/4 Dinar emas ~ Rp 1.500.000
        if (sariqahNilaiRupiah < nishabEmasRupiah) {
          return {
            status: 'GUGUR_NISHAB',
            title: 'TIDAK DIPOTONG TANGAN (KURANG DARI NISHAB 1/4 DINAR)',
            color: 'amber',
            sanksi: 'Bebas dari sanksi potong tangan. Pelaku wajib mengembalikan barang curian dan dijatuhi hukuman Ta\'zīr (penjara/denda/kerja sosial) oleh hakim.',
            syubhat: 'Hadits Aisyah: Tangan pencuri tidak dipotong jika kurang dari 1/4 dinar emas (HR. Bukhari).',
          };
        }
        if (!sariqahDiHirz) {
          return {
            status: 'GUGUR_HIRZ',
            title: 'TIDAK DIPOTONG TANGAN (TIDAK DIAMBIL DARI HIRZ / TEMPAT TERKUNCI)',
            color: 'amber',
            sanksi: 'Bebas dari potong tangan karena korban lalai meletakkan barang di tempat terbuka. Dikenai hukuman ta\'zir dan wajib mengembalikan barang.',
            syubhat: 'Syarat mutlak sariqah adalah menerobos tempat penyimpanan yang layak (*Hirz*).',
          };
        }
        if (sariqahKondisiLapar) {
          return {
            status: 'GUGUR_PACEKLIK',
            title: 'TIDAK DIPOTONG TANGAN (SYUBHAT KELAPARAN DARURAT)',
            color: 'emerald',
            sanksi: 'Bebas dari potong tangan mengikuti fiqih Khalifah Umar bin Khattab pada tahun paceklik Ramadah. Negara wajib menjamin pangan rakyat.',
            syubhat: 'Kaidah darurat kelaparan menggugurkan had demi menyelamatkan jiwa (*Hifzhun Nafs*).',
          };
        }
        if (sariqahHubunganAnakAyah) {
          return {
            status: 'GUGUR_SYUBHAT_KELUARGA',
            title: 'TIDAK DIPOTONG TANGAN (SYUBHAT HARTA KELUARGA / ANAK-AYAH)',
            color: 'amber',
            sanksi: 'Bebas dari had potong tangan karena adanya syubhat kepemilikan keluarga (*Anta wa māluka li-abīka*). Dialihkan ke sanksi ta\'zir keluarga.',
            syubhat: 'Kaidah adanya syubhat hak kepemilikan dalam harta anak/orang tua.',
          };
        }

        // Jika semua syarat terpenuhi:
        let sanksiPotong = 'Potong Tangan Kanan hingga Pergelangan';
        if (sariqahUrutanKe === 2) sanksiPotong = 'Potong Kaki Kiri hingga Mata Kaki';
        else if (sariqahUrutanKe === 3) sanksiPotong = 'Potong Tangan Kiri';
        else if (sariqahUrutanKe === 4) sanksiPotong = 'Potong Kaki Kanan';
        else if (sariqahUrutanKe >= 5) sanksiPotong = 'Dipenjara / Ta\'zīr sampai bertobat';

        return {
          status: 'HAD_POTONG_TANGAN',
          title: `DIJATUHI HAD SARIQAH: ${sanksiPotong.toUpperCase()}`,
          color: 'rose',
          sanksi: `Seluruh syarat terpenuhi (mencapai nishab, diambil dari Hirz aman, kondisi normal, tanpa syubhat). Eksekusi: ${sanksiPotong}.`,
          syubhat: 'Tidak ada syubhat yang menghalangi eksekusi had (QS. Al-Maidah: 38).',
        };
      }

      case 'khamr': {
        if (!khamrSengajaSadar) {
          return {
            status: 'GUGUR_TIDAK_SENGAJA',
            title: 'BEBAS DARI HAD KHAMR (TIDAK TAHU / TERSEDAK DARURAT)',
            color: 'emerald',
            sanksi: 'Bebas dari hukuman cambuk karena tidak adanya unsur kesengajaan atau dipaksa di bawah ancaman pembunuhan.',
            syubhat: 'Hadits Nabi: Diangkat dosa dari umatku karena keliru, lupa, dan apa yang dipaksakan atasnya.',
          };
        }
        return {
          status: 'HAD_CAMBUK_KHAMR',
          title: 'DIJATUHI HAD SYURBUL KHAMR: CAMBUK 40x JILID (HINGGA 80x)',
          color: 'rose',
          sanksi: 'Didera cambuk 40 kali jilid menurut ketetapan sunnah (Madzhab Syafi\'i), atau boleh dinaikkan 80 kali jilid jika hakim memandang darurat kebiasaan mabuk masyarakat.',
          syubhat: 'Pelaku meminum zat memabukkan secara sadar atas kehendak sendiri (HR. Muslim no. 1706).',
        };
      }

      case 'bughat': {
        if (bughatMauDialogDamai) {
          return {
            status: 'DAMAI_SELESAI',
            title: 'PERANG DIBATALKAN & KEMBALI KEPADA KESATUAN UMAT',
            color: 'emerald',
            sanksi: 'Pemberontak meletakkan senjata dan kembali taat kepada pemerintah. Pemerintah wajib menjamin keamanan hak sipil mereka tanpa diskriminasi.',
            syubhat: 'QS. Al-Hujurat: 9 (Wajib mengedepankan ishlah/damai).',
          };
        }
        if (!bughatPunyaSenjataTakwil) {
          return {
            status: 'BUKAN_BUGHAT',
            title: 'BUKAN KATEGORI BUGHAT (DIHUKUMI TINDAK PIDANA KRIMINAL BIASA)',
            color: 'amber',
            sanksi: 'Jika tidak memiliki senjata atau hanya kritik pendapat tanpa takwil kekuatan, mereka tidak boleh diperangi secara militer, melainkan diadili dengan hukum perdata/pidana umum.',
            syubhat: 'Syarat bughat wajib memiliki kekuatan militer (*Syaukah*) dan dalih takwil ideologis.',
          };
        }
        return {
          status: 'QITALUL_BUGHAT',
          title: 'DIPERANGI PEMERINTAH (QITĀLUL BUGHĀT) DENGAN ETIKA SYARIAH',
          color: 'rose',
          sanksi: 'Pemerintah sah berhak menindak tegas bersenjata untuk memulihkan kedaulatan. ETIKA MUTLAK: Dilarang membunuh pemberontak yang terluka/menyerah, dilarang mengejar yang lari, dan harta mereka tidak boleh dijarah sebagai ghanimah.',
          syubhat: 'Membangkang terhadap pemerintahan yang adil dengan kekuatan senjata (QS. Al-Hujurat: 9).',
        };
      }
    }
  };

  const decision = evaluateCase();

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Gavel className="w-4 h-4 text-rose-700" />
          <span>Laboratorium & Simulator Hukuman Syariah (Hudud)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Simulator Sanksi Hudud: Uji Kelayakan Sanksi & Deteksi Syubhat Penggugur
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Pilih kasus pidana hudud di bawah ini dan variasikan parameter pembuktian (kuota saksi, nishab pencurian, tempat penyimpanan, kondisi kelaparan).
          Sistem akan mengevaluasi apakah hukuman had <strong>SAH DIJATUHKAN</strong>, ataukah <strong>GUGUR OLEH SYUBHAT</strong> sesuai kaidah <em>Idra'ul Hudūda bisy-Syubuhāt</em>.
        </p>
      </div>

      {/* Case Switcher Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        <button
          type="button"
          onClick={() => setSelectedCase('zina')}
          className={`p-3 rounded-xl border text-center transition-all ${
            selectedCase === 'zina'
              ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <UserCheck className="w-4 h-4 mx-auto mb-1 opacity-80" />
          <span className="text-xs block">1. Kasus Zina</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedCase('qadzaf')}
          className={`p-3 rounded-xl border text-center transition-all ${
            selectedCase === 'qadzaf'
              ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <Scale className="w-4 h-4 mx-auto mb-1 opacity-80" />
          <span className="text-xs block">2. Kasus Qadzaf</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedCase('sariqah')}
          className={`p-3 rounded-xl border text-center transition-all ${
            selectedCase === 'sariqah'
              ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <Scissors className="w-4 h-4 mx-auto mb-1 opacity-80" />
          <span className="text-xs block">3. Kasus Mencuri</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedCase('khamr')}
          className={`p-3 rounded-xl border text-center transition-all ${
            selectedCase === 'khamr'
              ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <Wine className="w-4 h-4 mx-auto mb-1 opacity-80" />
          <span className="text-xs block">4. Kasus Khamr</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedCase('bughat')}
          className={`p-3 rounded-xl border text-center transition-all ${
            selectedCase === 'bughat'
              ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
          }`}
        >
          <Users className="w-4 h-4 mx-auto mb-1 opacity-80" />
          <span className="text-xs block">5. Kasus Bughat</span>
        </button>
      </div>

      {/* Simulator Card Form & Output */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div className="border-b border-stone-200 pb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Simulasi Kasus: {selectedCase.toUpperCase()}
          </h2>
          <span className="text-xs text-stone-500">Atur parameter pembuktian di bawah:</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Dynamic Parameters Based on Case */}
          <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
              Variabel Pembuktian Perkara:
            </span>

            {/* CASE 1: ZINA */}
            {selectedCase === 'zina' && (
              <div className="space-y-3">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Status Pernikahan Pelaku:</label>
                  <select
                    value={zinaStatusNikah}
                    onChange={(e) => setZinaStatusNikah(e.target.value as any)}
                    className="w-full p-2 border border-stone-300 rounded bg-white text-xs font-semibold focus:ring-2 focus:ring-rose-700 focus:outline-none"
                  >
                    <option value="muhshan">Muhshan (Pernah / Sudah Menikah Sah)</option>
                    <option value="ghairu_muhshan">Ghairu Muhshan (Lajang / Belum Pernah Nikah Sah)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Status Alat Bukti / Saksi:</label>
                  <select
                    value={zinaBukti}
                    onChange={(e) => setZinaBukti(e.target.value as any)}
                    className="w-full p-2 border border-stone-300 rounded bg-white text-xs font-semibold focus:ring-2 focus:ring-rose-700 focus:outline-none"
                  >
                    <option value="empat_saksi">Lengkap 4 Orang Saksi Laki-laki Adil</option>
                    <option value="ikrar_empat">Pengakuan Sukarela (Iqrār) 4 Kali</option>
                    <option value="kurang_saksi">Saksi Kurang dari 4 (Hanya 1-3 Orang)</option>
                    <option value="perkosaan">Korban Pemerkosaan (Ada Paksaan)</option>
                  </select>
                </div>
              </div>
            )}

            {/* CASE 2: QADZAF */}
            {selectedCase === 'qadzaf' && (
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="block text-stone-700 font-medium">Apakah Penuduh Membawa 4 Saksi Adil?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="qadzafSaksi"
                        checked={qadzafAdaEmpatSaksi}
                        onChange={() => setQadzafAdaEmpatSaksi(true)}
                        className="accent-rose-700"
                      />
                      <span>Ya, Lengkap 4 Saksi Adil</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="qadzafSaksi"
                        checked={!qadzafAdaEmpatSaksi}
                        onChange={() => setQadzafAdaEmpatSaksi(false)}
                        className="accent-rose-700"
                      />
                      <span>Tidak Ada / Saksi Kurang</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-stone-200">
                  <label className="block text-stone-700 font-medium">
                    Apakah Penuduh Adalah Suami yang Bersumpah Li'an?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="qadzafLian"
                        checked={qadzafIsSuamiLian}
                        onChange={() => setQadzafIsSuamiLian(true)}
                        className="accent-rose-700"
                      />
                      <span>Ya, Suami Melakukan Li'an</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="qadzafLian"
                        checked={!qadzafIsSuamiLian}
                        onChange={() => setQadzafIsSuamiLian(false)}
                        className="accent-rose-700"
                      />
                      <span>Bukan Suami / Tidak Li'an</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* CASE 3: MENCURI */}
            {selectedCase === 'sariqah' && (
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-stone-700 font-medium">Nilai Harta Curian (Rupiah):</label>
                    <span className="font-mono text-emerald-800 font-bold">
                      Nishab 1/4 Dinar: ~Rp 1.500.000
                    </span>
                  </div>
                  <input
                    type="number"
                    value={sariqahNilaiRupiah}
                    onChange={(e) => setSariqahNilaiRupiah(Number(e.target.value))}
                    className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-rose-700 focus:outline-none"
                  />
                </div>

                <div className="space-y-2 pt-1 border-t border-stone-200">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sariqahDiHirz}
                      onChange={(e) => setSariqahDiHirz(e.target.checked)}
                      className="accent-rose-700"
                    />
                    <span>Diambil dari tempat penyimpanan aman terkunci (*Hirz*)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sariqahKondisiLapar}
                      onChange={(e) => setSariqahKondisiLapar(e.target.checked)}
                      className="accent-rose-700"
                    />
                    <span>Terjadi saat Bencana Kelaparan Paceklik Darurat</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sariqahHubunganAnakAyah}
                      onChange={(e) => setSariqahHubunganAnakAyah(e.target.checked)}
                      className="accent-rose-700"
                    />
                    <span>Pencurian antara Orang Tua & Anak (Syubhat Keluarga)</span>
                  </label>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Pengulangan Pencurian ke-:</label>
                  <select
                    value={sariqahUrutanKe}
                    onChange={(e) => setSariqahUrutanKe(Number(e.target.value))}
                    className="w-full p-2 border border-stone-300 rounded bg-white text-xs font-semibold focus:ring-2 focus:ring-rose-700 focus:outline-none"
                  >
                    <option value={1}>Pencurian Pertama (Tangan Kanan)</option>
                    <option value={2}>Pencurian Kedua (Kaki Kiri)</option>
                    <option value={3}>Pencurian Ketiga (Tangan Kiri)</option>
                    <option value={4}>Pencurian Keempat (Kaki Kanan)</option>
                    <option value={5}>Pencurian Kelima ke Atas (Penjara Ta'zir)</option>
                  </select>
                </div>
              </div>
            )}

            {/* CASE 4: KHAMR */}
            {selectedCase === 'khamr' && (
              <div className="space-y-3">
                <label className="block text-stone-700 font-medium">Kondisi Saat Meminum Zat Memabukkan:</label>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="khamrSengaja"
                      checked={khamrSengajaSadar}
                      onChange={() => setKhamrSengajaSadar(true)}
                      className="accent-rose-700"
                    />
                    <span>Sengaja, Sadar, dan Mengetahui Itu Zat Memabukkan</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="khamrSengaja"
                      checked={!khamrSengajaSadar}
                      onChange={() => setKhamrSengajaSadar(false)}
                      className="accent-rose-700"
                    />
                    <span>Tidak Tahu / Tersedak Haus Darurat / Dipaksa Ancaman</span>
                  </label>
                </div>
              </div>
            )}

            {/* CASE 5: BUGHAT */}
            {selectedCase === 'bughat' && (
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bughatPunyaSenjataTakwil}
                      onChange={(e) => setBughatPunyaSenjataTakwil(e.target.checked)}
                      className="accent-rose-700"
                    />
                    <span>Memiliki Pasukan Bersenjata (*Syaukah*) & Dalih Takwil Batil</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bughatMauDialogDamai}
                      onChange={(e) => setBughatMauDialogDamai(e.target.checked)}
                      className="accent-rose-700"
                    />
                    <span>Menerima Dialog Damai & Meletakkan Senjata</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Decision Output Card */}
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
                <span className="font-bold text-xs uppercase tracking-wider">Hasil Putusan Mahkamah Syar'i:</span>
                <span
                  className={`px-2.5 py-1 rounded text-xs font-bold ${
                    decision.color === 'emerald'
                      ? 'bg-emerald-200 text-emerald-900'
                      : decision.color === 'amber'
                      ? 'bg-amber-200 text-amber-900'
                      : 'bg-rose-200 text-rose-900'
                  }`}
                >
                  {decision.title}
                </span>
              </div>

              <div className="mt-3 space-y-2">
                <div>
                  <strong className="block text-xs font-bold">Bentuk Eksekusi Sanksi:</strong>
                  <p className="text-xs leading-relaxed mt-0.5">{decision.sanksi}</p>
                </div>

                <div className="pt-2 border-t border-black/10">
                  <strong className="block text-xs font-bold">Penjelasan Kaidah Fiqih / Syubhat:</strong>
                  <p className="text-[11px] leading-relaxed mt-0.5">{decision.syubhat}</p>
                </div>
              </div>
            </div>

            <div className="p-2.5 bg-white/70 rounded border border-black/10 text-[10px] font-mono">
              <strong>Kaidah Pokok: </strong>
              <em>"Idra'ul hudūda bisy-syubuhāt"</em> (Tolaklah hudud jika ada keraguan syubhat).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
