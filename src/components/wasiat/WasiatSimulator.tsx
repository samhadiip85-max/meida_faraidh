import React, { useState } from 'react';
import { Scroll, Coins, Scale, CheckCircle2, AlertOctagon, HelpCircle, ArrowRight, ShieldCheck, Sparkles, Calculator } from 'lucide-react';

interface WasiatSimulatorProps {
  onGoToFaraidh?: () => void;
}

export function WasiatSimulator({ onGoToFaraidh }: WasiatSimulatorProps) {
  const [hartaBruto, setHartaBruto] = useState<number>(600000000); // 600 jt
  const [biayaTajhiz, setBiayaTajhiz] = useState<number>(10000000); // 10 jt
  const [totalUtang, setTotalUtang] = useState<number>(90000000); // 90 jt
  const [rencanaWasiat, setRencanaWasiat] = useState<number>(200000000); // 200 jt
  const [penerimaIsAhliWaris, setPenerimaIsAhliWaris] = useState<boolean>(false);
  const [ahliWarisSetuju, setAhliWarisSetuju] = useState<boolean>(false);

  // Perhitungan Keuangan Syar'i
  const hartaBersih = Math.max(0, hartaBruto - biayaTajhiz - totalUtang);
  const batasMaksimalSepertiga = Math.floor(hartaBersih / 3);

  // Evaluasi Fiqih Wasiat
  const evaluateWasiat = () => {
    if (hartaBersih <= 0) {
      return {
        status: 'TIDAK_ADA_SISA',
        title: 'WASIAT TIDAK DAPAT DIEKSEKUSI (HARTA HABIS UNTUK UTANG & TAJHIZ)',
        color: 'rose',
        wasiatTerealisasi: 0,
        penjelasan: 'Harta peninggalan habis terserap untuk pemakaman dan pelunasan utang. Syariat mendahulukan pelunasan utang sebelum wasiat.',
        kaidah: 'Kaidah: Pelunasan utang didahulukan dari wasiat (QS. An-Nisa: 11).',
      };
    }

    // Jika Penerima adalah Ahli Waris
    if (penerimaIsAhliWaris) {
      if (ahliWarisSetuju) {
        const nominal = Math.min(rencanaWasiat, hartaBersih);
        return {
          status: 'AHLI_WARIS_SETUJU',
          title: 'SAH KARENA DISETUJUI & DIRELAKAN SELURUH AHLI WARIS',
          color: 'emerald',
          wasiatTerealisasi: nominal,
          penjelasan: 'Meskipun asalnya dilarang (*Lā washiyyata li-wārits*), wasiat kepada ahli waris menjadi sah apabila seluruh ahli waris lainnya yang baligh merelakannya sebagai hibah sukarela dari hak mereka.',
          kaidah: 'Pengecualian hadits Lā washiyyata li-wārits dengan keridhaan seluruh ahli waris.',
        };
      } else {
        return {
          status: 'AHLI_WARIS_TOLAK',
          title: 'BATAL MUTLAK (LARANGAN WASIAT KEPADA AHLI WARIS)',
          color: 'rose',
          wasiatTerealisasi: 0,
          penjelasan: 'Wasiat kepada ahli waris tidak sah dan tertolak karena sebagian/seluruh ahli waris lain menolak. Ahli waris tersebut hanya berhak menerima bagian warisannya sesuai faraidh.',
          kaidah: 'Hadits Shahih: "Lā washiyyata li-wārits" (Tidak ada wasiat bagi ahli waris).',
        };
      }
    }

    // Jika Penerima Non-Ahli Waris (Pihak Luar / Panti / Lembaga)
    if (rencanaWasiat <= batasMaksimalSepertiga) {
      return {
        status: 'SAH_PENUH',
        title: 'SAH PENUH (BERADA DI DALAM BATAS SEPERTIGA 1/3)',
        color: 'emerald',
        wasiatTerealisasi: rencanaWasiat,
        penjelasan: 'Wasiat memenuhi seluruh kriteria syariat: diberikan kepada non-ahli waris dan nilainya tidak melebihi sepertiga (1/3) harta bersih.',
        kaidah: 'Hadits Sa\'ad bin Abi Waqqash: "Ats-Tsulutsu wats-tsulutsu katsīr".',
      };
    } else {
      // Melebihi 1/3
      if (ahliWarisSetuju) {
        const nominal = Math.min(rencanaWasiat, hartaBersih);
        return {
          status: 'LEBIH_SETUJU',
          title: 'SAH PENUH (KELEBIHAN DARI 1/3 DISETUJUI AHLI WARIS)',
          color: 'emerald',
          wasiatTerealisasi: nominal,
          penjelasan: 'Wasiat melebihi sepertiga, namun seluruh ahli waris merelakan kelebihannya untuk disedekahkan sesuai wasiat almarhum.',
          kaidah: 'Kelebihan dari sepertiga sah dengan persetujuan ahli waris setelah wafat.',
        };
      } else {
        return {
          status: 'DIPOTONG_SEPERTIGA',
          title: 'DIPANGKAS MENJADI MAKSIMAL SEPERTIGA (1/3)',
          color: 'amber',
          wasiatTerealisasi: batasMaksimalSepertiga,
          penjelasan: `Wasiat direncanakan Rp ${rencanaWasiat.toLocaleString('id-ID')}, namun karena melebihi 1/3 dan ahli waris menolak kelebihannya, maka nominal wasiat dipotong dan hanya dieksekusi sebesar 1/3 maksimal (Rp ${batasMaksimalSepertiga.toLocaleString('id-ID')}). Sisanya dikembalikan ke kas harta waris.`,
          kaidah: 'Kaidah Fiqih: Hak ahli waris dilindungi dari wasiat yang melebihi sepertiga.',
        };
      }
    }
  };

  const decision = evaluateWasiat();
  const sisaHartaFaraidh = Math.max(0, hartaBersih - decision.wasiatTerealisasi);

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Calculator className="w-4 h-4 text-rose-700" />
          <span>Kalkulator & Simulator Eksekusi Wasiat Syariah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Simulator Rantai Harta Peninggalan: Tajhiz, Utang, Wasiat (1/3), & Sisa Waris
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Uji simulasi perhitungan harta jenazah sesuai urutan syar'i.
          Sistem akan menghitung harta bersih (*Tirkah Shāfiyah*), membatasi wasiat maksimal 1/3,
          mendeteksi larangan wasiat ahli waris (*Lā washiyyata li-wārits*), dan menghitung sisa bersih harta yang siap dibagikan ke Faraidh Waris.
        </p>
      </div>

      {/* Simulator Card */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
          {/* Input Form */}
          <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
              1. Data Harta, Tajhiz & Utang Almarhum:
            </span>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Total Harta Peninggalan Bruto / Kasar (Rp):
              </label>
              <input
                type="number"
                value={hartaBruto}
                onChange={(e) => setHartaBruto(Number(e.target.value))}
                className="w-full p-2.5 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-rose-700 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Biaya Tajhiz / Pemakaman (Rp):
                </label>
                <input
                  type="number"
                  value={biayaTajhiz}
                  onChange={(e) => setBiayaTajhiz(Number(e.target.value))}
                  className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-rose-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Total Pelunasan Utang (Rp):
                </label>
                <input
                  type="number"
                  value={totalUtang}
                  onChange={(e) => setTotalUtang(Number(e.target.value))}
                  className="w-full p-2 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-rose-700 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 space-y-3">
              <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
                2. Rencana Wasiat Almarhum:
              </span>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Nominal Rencana Wasiat (Rp):
                </label>
                <input
                  type="number"
                  value={rencanaWasiat}
                  onChange={(e) => setRencanaWasiat(Number(e.target.value))}
                  className="w-full p-2.5 border border-stone-300 rounded bg-white font-mono text-xs focus:ring-2 focus:ring-rose-700 focus:outline-none"
                />
              </div>

              <div className="space-y-2 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={penerimaIsAhliWaris}
                    onChange={(e) => setPenerimaIsAhliWaris(e.target.checked)}
                    className="accent-rose-700"
                  />
                  <span>Penerima Wasiat Adalah Salah Satu AHLI WARIS KANDUNG (Anak / Istri / Ortu)</span>
                </label>

                {(penerimaIsAhliWaris || rencanaWasiat > batasMaksimalSepertiga) && (
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 space-y-1">
                    <span className="font-bold text-amber-950 block">Persetujuan Ahli Waris Lain:</span>
                    <label className="flex items-center gap-2 pt-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={ahliWarisSetuju}
                        onChange={(e) => setAhliWarisSetuju(e.target.checked)}
                        className="accent-rose-700"
                      />
                      <span className="font-bold text-amber-950">
                        Seluruh Ahli Waris Sah Lainnya Ridha & Menyetujui
                      </span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Output Analysis */}
          <div className="space-y-4 flex flex-col justify-between">
            {/* Ringkasan Angka Fiqih */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2.5 text-xs">
              <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px] border-b border-stone-200 pb-1.5">
                Rincian Arus Harta Peninggalan:
              </span>

              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-600">Total Harta Bruto:</span>
                <span className="font-mono font-bold text-stone-900">
                  Rp {hartaBruto.toLocaleString('id-ID')}
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-stone-100 text-rose-900">
                <span>(-) Tajhiz & Utang:</span>
                <span className="font-mono font-bold">
                  - Rp {(biayaTajhiz + totalUtang).toLocaleString('id-ID')}
                </span>
              </div>

              <div className="flex justify-between py-1.5 bg-white p-2 rounded border border-stone-200 font-bold">
                <span className="text-stone-900">Harta Bersih (Tirkah Shāfiyah):</span>
                <span className="font-mono text-emerald-800">
                  Rp {hartaBersih.toLocaleString('id-ID')}
                </span>
              </div>

              <div className="flex justify-between py-1 text-[11px] text-stone-600">
                <span>Batas Maksimal 1/3 Syar'i:</span>
                <span className="font-mono font-bold text-rose-800">
                  Rp {batasMaksimalSepertiga.toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            {/* Keputusan Status Wasiat */}
            <div
              className={`p-5 rounded-xl border flex flex-col justify-between space-y-3 ${
                decision.color === 'emerald'
                  ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                  : decision.color === 'amber'
                  ? 'bg-amber-50/80 border-amber-300 text-amber-950'
                  : 'bg-rose-50/80 border-rose-300 text-rose-950'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-black/10 pb-2">
                  <span className="font-bold text-xs uppercase tracking-wider">Status Putusan Wasiat:</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
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

                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex justify-between items-center bg-white/70 p-2.5 rounded border border-black/10">
                    <span className="font-bold">Wasiat yang Terealisasi:</span>
                    <span className="font-mono font-bold text-sm text-rose-900">
                      Rp {decision.wasiatTerealisasi.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <p className="leading-relaxed mt-1 text-[11px]">{decision.penjelasan}</p>
                </div>
              </div>

              {/* Sisa Harta ke Waris */}
              <div className="p-3 bg-white rounded-lg border border-emerald-300 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <strong className="text-emerald-950">Sisa Harta untuk Ahli Waris (Faraidh):</strong>
                  <span className="font-mono font-bold text-base text-emerald-800">
                    Rp {sisaHartaFaraidh.toLocaleString('id-ID')}
                  </span>
                </div>
                <p className="text-[10px] text-stone-500">
                  Nominal ini yang akan dibagikan kepada Ashabul Furudh dan Ashabah pada BAB 21 (Faraidh).
                </p>
              </div>
            </div>

            {onGoToFaraidh && (
              <button
                type="button"
                onClick={onGoToFaraidh}
                className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Lanjutkan Pembagian Waris di Kalkulator BAB 21</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
