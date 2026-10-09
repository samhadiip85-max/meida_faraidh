import React, { useState } from 'react';
import { Scale, CheckCircle2, AlertOctagon, HelpCircle, ArrowRight, ShieldCheck, Sparkles, Gavel, UserCheck, FileText } from 'lucide-react';

export function PeradilanSimulator() {
  const [jenisSengketa, setJenisSengketa] = useState<'utang' | 'tanah' | 'pidana_luka'>('utang');
  const [buktiPenggugat, setBuktiPenggugat] = useState<
    'dua_pria' | 'satu_pria_dua_wanita' | 'satu_pria_sumpah' | 'dokumen_qarinah' | 'tanpa_bukti'
  >('dua_pria');
  const [responTergugat, setResponTergugat] = useState<'iqrar' | 'inkar'>('inkar');
  const [sikapSumpahTergugat, setSikapSumpahTergugat] = useState<'bersumpah' | 'nukul'>('bersumpah');
  const [penggugatAmbilSumpahBalik, setPenggugatAmbilSumpahBalik] = useState<boolean>(true);

  // Engine Analisis Putusan Sidang Mahkamah
  const evaluatePeradilan = () => {
    // 1. Jika Tergugat Mengakui (Iqrar)
    if (responTergugat === 'iqrar') {
      return {
        status: 'MENANG_PENGGUGAT',
        title: 'GUGATAN DIKABULKAN (TERGUGAT MENGAKUI SECARA SAH)',
        color: 'emerald',
        penjelasan: 'Tergugat mengakui secara sukarela kebenaran gugatan di hadapan hakim (*Al-Iqrār*). Pengakuan adalah Raja Alat Bukti (*Sayyidul Adillah*) yang langsung mengikat tanpa memerlukan saksi tambahan.',
        kaidah: 'Kaidah Fiqih: "Al-Iqrāru sayyidul adillah wa hujjatun qāshi-rah". Tergugat divonis wajib melunasi/menyerahkan hak.',
      };
    }

    // 2. Jika Tergugat Mengingkari: Periksa Bukti Penggugat
    // A. Bukti 2 Saksi Pria Adil
    if (buktiPenggugat === 'dua_pria') {
      return {
        status: 'MENANG_PENGGUGAT',
        title: 'GUGATAN DIKABULKAN (BUKTI 2 SAKSI PRIA ADIL TERPENUHI)',
        color: 'emerald',
        penjelasan: 'Penggugat berhasil memenuhi beban pembuktian penuh dengan menghadirkan 2 orang saksi laki-laki muslim yang adil. Pengingkaran tergugat ditolak oleh mahkamah.',
        kaidah: 'Kaidah: "Al-Bayyinatu \'alal mudda\'ī". Putusan dijatuhkan memenangkan penggugat.',
      };
    }

    // B. Bukti 1 Pria + 2 Wanita
    if (buktiPenggugat === 'satu_pria_dua_wanita') {
      if (jenisSengketa === 'pidana_luka') {
        return {
          status: 'TOLAK_PIDANA',
          title: 'GUGATAN PIDANA DITOLAK (SAKSI WANITA TIDAK BERLAKU PADA PIDANA)',
          color: 'rose',
          penjelasan: 'Dalam perkara pidana/jinayat, kesaksian wanita tidak diterima menurut Mazhab Syafi\'i dan Jumhur Fuqaha (wajib 2 pria adil). Namun jika sengketa dialihkan ke ganti rugi materi, kesaksian dapat dipertimbangkan.',
          kaidah: 'Ketentuan khusus saksi perkara pidana jinayat wajib 2 orang pria adil.',
        };
      }
      return {
        status: 'MENANG_PENGGUGAT',
        title: 'GUGATAN DIKABULKAN (1 SAKSI PRIA + 2 SAKSI WANITA SAH PADA HARTA)',
        color: 'emerald',
        penjelasan: 'Dalam sengketa perdata harta benda, kesaksian 1 pria dan 2 wanita adalah sah dan berkekuatan hukum penuh sesuai QS. Al-Baqarah: 282.',
        kaidah: 'QS. Al-Baqarah: 282: "Farajulun wamra\'atāni mimman tardhauna minasy-syuhadā\'".',
      };
    }

    // C. Bukti 1 Pria Saja + Sumpah Penggugat (Syahid wa Yamin)
    if (buktiPenggugat === 'satu_pria_sumpah') {
      if (jenisSengketa === 'pidana_luka') {
        return {
          status: 'TOLAK_PIDANA',
          title: 'GUGATAN DITOLAK (SYAHID WA YAMIN TIDAK BERLAKU PADA PIDANA)',
          color: 'rose',
          penjelasan: 'Metode pembuktian 1 saksi + 1 sumpah penggugat (*Syāhid wa Yamīn*) hanya berlaku sah dalam sengketa harta perdata, tidak berlaku pada perkara pidana jinayat atau hudud.',
          kaidah: 'Ijma\' Fuqaha: Syāhid wa Yamīn khusus berlaku pada hak-hak finansial kebendaan.',
        };
      }
      return {
        status: 'MENANG_PENGGUGAT',
        title: 'GUGATAN DIKABULKAN (1 SAKSI ADIL + SUMPAH PENGGUGAT / SYAHID WA YAMIN)',
        color: 'emerald',
        penjelasan: 'Berdasarkan sunnah shahihah, Rasulullah SAW memutuskan perkara sengketa harta dengan satu orang saksi adil ditambah sumpah dari penggugat.',
        kaidah: 'HR. Muslim no. 1712: "Nabi SAW memutus perkara dengan satu saksi dan satu sumpah".',
      };
    }

    // D. Bukti Dokumen Otentik (Qarinah Qath'iyyah)
    if (buktiPenggugat === 'dokumen_qarinah') {
      return {
        status: 'MENANG_PENGGUGAT',
        title: 'GUGATAN DIKABULKAN (BUKTI TERTULIS OTENTIK / QARĪNAH QATH\'IYYAH)',
        color: 'emerald',
        penjelasan: 'Bukti tertulis berupa akta otentik yang tidak terbantahkan diakui sebagai petunjuk pasti (*Qarīnah Qath\'iyyah*) yang menguatkan hak penggugat.',
        kaidah: 'Kaidah Fiqih Kontemporer: Dokumen resmi yang tervalidasi memiliki kedudukan bukti kuat.',
      };
    }

    // E. Penggugat Tanpa Bukti Sama Sekali (Klaim Lisan Belaka)
    if (buktiPenggugat === 'tanpa_bukti') {
      // Beban beralih ke Sumpah Tergugat
      if (sikapSumpahTergugat === 'bersumpah') {
        return {
          status: 'BEBAS_TERGUGAT',
          title: 'GUGATAN DITOLAK & TERGUGAT BEBAS (TERGUGAT MENGUCAPKAN SUMPAH)',
          color: 'amber',
          penjelasan: 'Karena penggugat tidak memiliki bukti saksi, hak membela diri beralih kepada Tergugat. Tergugat telah bersumpah demi Allah (*Wallāhi*) bahwa ia tidak berutang/tidak bersalah. Gugatan ditolak dan perkara ditutup.',
          kaidah: 'Kaidah: "Wal-yamīnu \'alā man ankar" (Sumpah bagi orang yang mengingkari tuduhan). Posisi asal bebas tanggungan.',
        };
      } else {
        // Tergugat Nukul (Menolak Bersumpah)
        if (penggugatAmbilSumpahBalik) {
          return {
            status: 'MENANG_PENGGUGAT_NUKUL',
            title: 'GUGATAN DIKABULKAN MELALUI SUMPAH BALIK (YAMĪN MARDŪDAH)',
            color: 'emerald',
            penjelasan: 'Tergugat menolak bersumpah (*Nukūl*), sehingga hak sumpah dikembalikan (*Raddul Yamīn*) kepada Penggugat. Penggugat bersumpah atas nama Allah, maka mahkamah resmi memenangkan gugatan Penggugat!',
            kaidah: 'Mazhab Syafi\'i: Sumpah balik (*Yamīn Mardūdah*) mengesahkan kemenangan pihak penuntut.',
          };
        } else {
          return {
            status: 'GUGUR_KASUS',
            title: 'GUGATAN GUGUR (PENGGUGAT JUGA ENGGAN MENGAMBIL SUMPAH BALIK)',
            color: 'rose',
            penjelasan: 'Tergugat menolak bersumpah, namun Penggugat pun enggan mengambil sumpah balik. Gugatan dinyatakan gugur karena tidak ada kepastian pembuktian.',
            kaidah: 'Perkara tidak dapat diputus tanpa bukti dan tanpa sumpah penegasan.',
          };
        }
      }
    }

    return {
      status: 'NETRAL',
      title: 'SIDANG BERJALAN',
      color: 'amber',
      penjelasan: 'Pemeriksaan alat bukti sedang berlangsung.',
      kaidah: 'Hukum acara peradilan syariah.',
    };
  };

  const decision = evaluatePeradilan();

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Gavel className="w-4 h-4 text-rose-700" />
          <span>Laboratorium & Simulator Sidang Pengadilan Syariah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Simulator Hukum Acara: Uji Kekuatan Alat Bukti, Sumpah, & Beban Pembuktian
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Uji bagaimana mahkamah peradilan Islam memutus sengketa berdasarkan kaidah asas:
          <em> “Al-Bayyinatu ‘alal mudda’ī wal-yamīnu ‘alā man ankar”</em>.
          Variasikan jenis alat bukti penggugat, pengakuan (*Iqrār*), sumpah sanggahan (*Yamīn*), hingga sumpah balik (*Yamīn Mardūdah*).
        </p>
      </div>

      {/* Simulator Card */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        {/* Step 1: Jenis Perkara */}
        <div>
          <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px] mb-2">
            1. Tentukan Jenis Sengketa yang Disidangkan:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setJenisSengketa('utang')}
              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                jenisSengketa === 'utang'
                  ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
                  : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
              }`}
            >
              <strong className="block text-xs">Sengketa Utang Piutang</strong>
              <span className="text-[10px] block opacity-80 mt-0.5">Perdata Harta / Finansial</span>
            </button>

            <button
              type="button"
              onClick={() => setJenisSengketa('tanah')}
              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                jenisSengketa === 'tanah'
                  ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
                  : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
              }`}
            >
              <strong className="block text-xs">Klaim Sengketa Tanah / Rumah</strong>
              <span className="text-[10px] block opacity-80 mt-0.5">Kepemilikan Aset Tak Bergerak</span>
            </button>

            <button
              type="button"
              onClick={() => setJenisSengketa('pidana_luka')}
              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                jenisSengketa === 'pidana_luka'
                  ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
                  : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
              }`}
            >
              <strong className="block text-xs">Tuduhan Penganiayaan / Pelukaan</strong>
              <span className="text-[10px] block opacity-80 mt-0.5">Perkara Pidana Jinayat</span>
            </button>
          </div>
        </div>

        {/* Step 2: Form Posisi Penggugat & Tergugat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Sisi Penggugat */}
          <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px]">
                Posisi Penggugat (Al-Mudda'ī):
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold">
                Wajib Bukti (Bayyinah)
              </span>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Alat Bukti yang Dihadirkan Penggugat di Ruang Sidang:
              </label>
              <select
                value={buktiPenggugat}
                onChange={(e) => setBuktiPenggugat(e.target.value as any)}
                className="w-full p-2.5 border border-stone-300 rounded bg-white text-xs font-semibold focus:ring-2 focus:ring-rose-700 focus:outline-none"
              >
                <option value="dua_pria">Lengkap 2 Orang Saksi Laki-laki Muslim Adil</option>
                <option value="satu_pria_dua_wanita">1 Saksi Laki-laki + 2 Saksi Perempuan Adil</option>
                <option value="satu_pria_sumpah">1 Saksi Laki-laki Saja (+ Sumpah Penggugat: Syāhid wa Yamīn)</option>
                <option value="dokumen_qarinah">Dokumen Akta Tertulis Otentik (Qarīnah Qath'iyyah)</option>
                <option value="tanpa_bukti">Tanpa Bukti Sama Sekali (Klaim Lisan Tanpa Bukti)</option>
              </select>
            </div>

            {buktiPenggugat === 'tanpa_bukti' && responTergugat === 'inkar' && sikapSumpahTergugat === 'nukul' && (
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 space-y-1">
                <span className="font-bold text-amber-950 block">Hak Sumpah Balik (Yamīn Mardūdah):</span>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Tergugat menolak bersumpah (*Nukūl*). Apakah Penggugat bersedia mengambil sumpah balik demi memenangkan haknya?
                </p>
                <label className="flex items-center gap-2 pt-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={penggugatAmbilSumpahBalik}
                    onChange={(e) => setPenggugatAmbilSumpahBalik(e.target.checked)}
                    className="accent-rose-700"
                  />
                  <span className="font-bold text-rose-950">Ya, Penggugat Bersumpah Demi Allah (Wallāhi)</span>
                </label>
              </div>
            )}
          </div>

          {/* Sisi Tergugat */}
          <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px]">
                Posisi Tergugat (Al-Mudda'ā 'Alaih):
              </span>
              <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-900 text-[10px] font-bold">
                Asal Bebas Tanggungan
              </span>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Jawaban & Tanggapan Tergugat Atas Gugatan:
              </label>
              <select
                value={responTergugat}
                onChange={(e) => setResponTergugat(e.target.value as any)}
                className="w-full p-2.5 border border-stone-300 rounded bg-white text-xs font-semibold focus:ring-2 focus:ring-rose-700 focus:outline-none"
              >
                <option value="inkar">Mengingkari Tuduhan (Menyatakan Tidak Berutang / Tidak Bersalah)</option>
                <option value="iqrar">Mengakui Gugatan (Al-Iqrār - Menyatakan Gugatan Benar)</option>
              </select>
            </div>

            {responTergugat === 'inkar' && buktiPenggugat === 'tanpa_bukti' && (
              <div className="space-y-1.5 pt-2 border-t border-stone-200">
                <label className="block text-stone-700 font-medium">
                  Sikap Tergugat Saat Diminta Bersumpah Demi Allah:
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="sikapSumpah"
                      checked={sikapSumpahTergugat === 'bersumpah'}
                      onChange={() => setSikapSumpahTergugat('bersumpah')}
                      className="accent-rose-700"
                    />
                    <span>Bersedia Bersumpah (Wallāhi)</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="sikapSumpah"
                      checked={sikapSumpahTergugat === 'nukul'}
                      onChange={() => setSikapSumpahTergugat('nukul')}
                      className="accent-rose-700"
                    />
                    <span className="text-rose-900 font-bold">Menolak Bersumpah (Nukūl)</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Step 3: Output Vonis Hakim */}
        <div
          className={`p-5 rounded-xl border flex flex-col justify-between space-y-3 ${
            decision.color === 'emerald'
              ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
              : decision.color === 'amber'
              ? 'bg-amber-50/80 border-amber-300 text-amber-950'
              : 'bg-rose-50/80 border-rose-300 text-rose-950'
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/10 pb-2">
            <span className="font-bold text-xs uppercase tracking-wider">Vonis Putusan Majelis Hakim:</span>
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

          <div className="space-y-2 text-xs">
            <div>
              <strong className="block text-xs font-bold">Penjelasan Putusan Hukum Acara:</strong>
              <p className="leading-relaxed mt-0.5">{decision.penjelasan}</p>
            </div>

            <div className="pt-2 border-t border-black/10">
              <strong className="block text-xs font-bold">Landasan Kaidah Syar'i:</strong>
              <p className="text-[11px] font-mono leading-relaxed mt-0.5">{decision.kaidah}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
