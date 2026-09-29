import React, { useState } from 'react';
import { FidyahReason } from '../../types/puasa';
import { Calculator, CheckCircle2, AlertTriangle, ArrowRight, Info, ShieldCheck, HeartPulse } from 'lucide-react';

export function FidyahQadhaCalculator() {
  const [selectedReason, setSelectedReason] = useState<FidyahReason>('sakit_sementara');
  const [missedDays, setMissedDays] = useState<number>(7);
  const [yearsDelayed, setYearsDelayed] = useState<number>(1); // keterlambatan tahun
  const [ricePricePerKg, setRicePricePerKg] = useState<number>(15000);

  // Standard 1 Mud = 0.675 kg (675 gram)
  const mudPerDayKg = 0.675;

  // Syar'i Analysis
  let mustQadha = false;
  let mustFidyah = false;
  let fidyahMultiplier = 1;
  let statusVerdict = '';
  let explanation = '';
  let badgeStyle = '';

  switch (selectedReason) {
    case 'sakit_sementara':
      mustQadha = true;
      mustFidyah = false;
      statusVerdict = 'Wajib Qadha\' Saja (Tanpa Fidyah)';
      badgeStyle = 'bg-emerald-100 text-emerald-950 border-emerald-300';
      explanation = 'Orang yang sakit sementara waktu dan masih memiliki harapan sembuh wajib mengqadha\' hari-hari puasa yang ditinggalkan setelah sembuh di luar bulan Ramadhan.';
      break;

    case 'musafir':
      mustQadha = true;
      mustFidyah = false;
      statusVerdict = 'Wajib Qadha\' Saja (Tanpa Fidyah)';
      badgeStyle = 'bg-emerald-100 text-emerald-950 border-emerald-300';
      explanation = 'Musafir yang menempuh perjalanan mubah sejauh minimal 2 Marhalah (± 81 km) mendapatkan rukhshah (keringanan) berbuka dan wajib mengqadha\' puasanya setelah pulang.';
      break;

    case 'haid_nifas':
      mustQadha = true;
      mustFidyah = false;
      statusVerdict = 'Wajib Qadha\' Saja (Tanpa Fidyah)';
      badgeStyle = 'bg-emerald-100 text-emerald-950 border-emerald-300';
      explanation = 'Wanita yang mengalami haid atau nifas diharamkan berpuasa dan WAJIB mengqadha\' hari-hari yang terlewat sebelum tiba Ramadhan tahun berikutnya.';
      break;

    case 'tua_renta':
      mustQadha = false;
      mustFidyah = true;
      statusVerdict = 'Wajib Fidyah Saja (Bebas Qadha\')';
      badgeStyle = 'bg-amber-100 text-amber-950 border-amber-300';
      explanation = 'Orang tua lanjut usia yang sudah sangat lemah dan tidak mampu lagi berpuasa dibebaskan dari kewajiban qadha\', dan diganti dengan membayar Fidyah 1 mud beras per hari.';
      break;

    case 'sakit_menahun':
      mustQadha = false;
      mustFidyah = true;
      statusVerdict = 'Wajib Fidyah Saja (Bebas Qadha\')';
      badgeStyle = 'bg-amber-100 text-amber-950 border-amber-300';
      explanation = 'Penderita penyakit berat/kronis yang menurut keterangan dokter tidak ada harapan sembuh untuk berpuasa, cukup membayar Fidyah tanpa kewajiban qadha\'.';
      break;

    case 'hamil_khawatir_bayi':
      mustQadha = true;
      mustFidyah = true;
      statusVerdict = 'Wajib Qadha\' DAN Fidyah Sekaligus';
      badgeStyle = 'bg-rose-100 text-rose-950 border-rose-300';
      explanation = 'Menurut Mazhab Syafi\'i, ibu hamil atau menyusui yang berbuka KARENA KHAWATIR TERHADAP BAYI/JANINNYA SAJA (takut keguguran / ASI kering), wajib mengqadha\' puasanya DAN membayar Fidyah 1 mud beras per hari.';
      break;

    case 'hamil_khawatir_diri':
      mustQadha = true;
      mustFidyah = false;
      statusVerdict = 'Wajib Qadha\' Saja (Tanpa Fidyah)';
      badgeStyle = 'bg-emerald-100 text-emerald-950 border-emerald-300';
      explanation = 'Jika ibu hamil/menyusui berbuka karena mengkhawatirkan keselamatan dirinya sendiri (atau khawatir diri dan bayinya sekaligus), maka ia dihukumi laksana orang sakit: HANYA WAJIB QADHA\' saja tanpa fidyah.';
      break;

    case 'terlambat_qadha':
      mustQadha = true;
      mustFidyah = true;
      fidyahMultiplier = Math.max(1, yearsDelayed);
      statusVerdict = 'Wajib Qadha\' & Fidyah (Berlipat per Tahun)';
      badgeStyle = 'bg-rose-100 text-rose-950 border-rose-300';
      explanation = `Orang yang menunda qadha' puasa Ramadhan hingga melewati bulan Ramadhan berikutnya tanpa udzur syar'i, tetap wajib mengqadha' puasanya dan wajib membayar fidyah yang berlipat ganda sesuai jumlah tahun keterlambatan (${yearsDelayed} tahun).`;
      break;
  }

  // Calculations
  const totalFidyahKg = mustFidyah ? missedDays * mudPerDayKg * fidyahMultiplier : 0;
  const totalFidyahRupiah = totalFidyahKg * ricePricePerKg;

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
          <span>Kalkulator & Simulator Pengganti Puasa</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kalkulator Simulasi Kewajiban Qadha', Fidyah & Kaffarah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Tentukan kondisi yang menyebabkan Anda tidak berpuasa di bulan Ramadhan.
          Sistem akan menganalisis secara tepat apakah kewajiban Anda berupa Qadha' saja, Fidyah saja,
          atau Qadha' dan Fidyah sekaligus sesuai kaidah Mazhab Syafi'i.
        </p>
      </div>

      {/* Main Simulator Form */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            1. Pilih Sebab Tidak Berpuasa Ramadhan:
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilihlah salah satu alasan yang sesuai dengan kondisi Anda:
          </p>
        </div>

        {/* Reason Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {[
            { id: 'sakit_sementara', label: 'Sakit Ada Harapan Sembuh' },
            { id: 'musafir', label: 'Musafir Perjalanan Jauh (≥ 81 km)' },
            { id: 'haid_nifas', label: 'Wanita Haid / Nifas' },
            { id: 'tua_renta', label: 'Orang Tua Lanjut Usia / Renta' },
            { id: 'sakit_menahun', label: 'Sakit Menahun (Kronis)' },
            { id: 'hamil_khawatir_bayi', label: 'Ibu Hamil / Menyusui (Khawatir Bayi Saja)' },
            { id: 'hamil_khawatir_diri', label: 'Ibu Hamil / Menyusui (Khawatir Diri)' },
            { id: 'terlambat_qadha', label: 'Terlambat Qadha\' Lewat Ramadhan' },
          ].map((item) => {
            const isSelected = selectedReason === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedReason(item.id as any)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-1 ring-emerald-600 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-xs block leading-snug">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Slider & Input Inputs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          <div className="lg:col-span-6 space-y-4 text-xs">
            <div>
              <div className="flex justify-between font-semibold text-stone-700 mb-1">
                <span>Jumlah Hari Puasa yang Ditinggalkan:</span>
                <span className="font-bold text-emerald-950 text-sm">{missedDays} Hari</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={missedDays}
                onChange={(e) => setMissedDays(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                <span>1 Hari</span>
                <span>15 Hari</span>
                <span>30 Hari (Sebulan Penuh)</span>
              </div>
            </div>

            {selectedReason === 'terlambat_qadha' && (
              <div>
                <div className="flex justify-between font-semibold text-stone-700 mb-1">
                  <span>Jumlah Tahun Keterlambatan Qadha':</span>
                  <span className="font-bold text-rose-900 text-sm">{yearsDelayed} Tahun</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={yearsDelayed}
                  onChange={(e) => setYearsDelayed(Number(e.target.value))}
                  className="w-full accent-rose-700"
                />
                <span className="text-[10px] text-stone-400">
                  Fidyah berlipat ganda sebanyak {yearsDelayed}x lipat karena melewati {yearsDelayed} kali Ramadhan.
                </span>
              </div>
            )}

            {mustFidyah && (
              <div className="space-y-1">
                <label className="font-bold text-stone-900 block">
                  Harga Beras yang Dikonsumsi (Rp / Kg):
                </label>
                <input
                  type="number"
                  value={ricePricePerKg}
                  onChange={(e) => setRicePricePerKg(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                />
                <span className="text-[10px] text-stone-400">
                  Standar takaran fidyah per hari: 1 Mud = 675 gram (0.675 kg) beras.
                </span>
              </div>
            )}
          </div>

          {/* Result Card */}
          <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
              <span className="uppercase font-bold tracking-wider text-stone-400 text-[10px]">
                Hasil Penetapan Hukum
              </span>
              <span className={`px-2.5 py-1 rounded-md font-bold text-xs border ${badgeStyle}`}>
                {statusVerdict}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded-lg border border-stone-200 text-center space-y-0.5">
                <span className="text-[11px] text-stone-500">Kewajiban Qadha' Puasa:</span>
                <div className="text-2xl font-bold font-mono-num text-stone-900">
                  {mustQadha ? `${missedDays} Hari` : 'Tidak Ada'}
                </div>
                <span className="text-[10px] text-stone-400">
                  {mustQadha ? 'Diganti puasa hari lain' : 'Bebas dari qadha\''}
                </span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-stone-200 text-center space-y-0.5">
                <span className="text-[11px] text-stone-500">Kewajiban Fidyah Beras:</span>
                <div className="text-2xl font-bold font-mono-num text-emerald-900">
                  {mustFidyah ? `${totalFidyahKg.toFixed(2)} Kg` : 'Tidak Ada'}
                </div>
                <span className="text-[10px] text-stone-400">
                  {mustFidyah ? `(${formatIDR(totalFidyahRupiah)})` : 'Bebas fidyah'}
                </span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
              <strong className="text-stone-900 block font-semibold">Penjelasan Fiqih Syar'i:</strong>
              <p className="text-stone-700 leading-relaxed">{explanation}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Box Kaffarah 'Uzhma */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
          <AlertTriangle className="w-4 h-4 text-rose-600" />
          <span>Kaffarah 'Uzhma (Denda Bersetubuh di Siang Hari Ramadhan)</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Sanksi Pelanggaran Berat Merusak Kehormatan Ramadhan
        </h2>
        <p className="text-xs text-stone-600 leading-relaxed">
          Bagi laki-laki yang merusak puasanya di siang hari Ramadhan dengan berjima' (bersetubuh) secara sengaja, selain wajib mengqadha' puasa hari tersebut, ia dikenai sanksi kaffarah berat secara bertingkat (tartib):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
              1
            </span>
            <h3 className="font-bold text-stone-900 text-sm">Memerdekakan Budak</h3>
            <p className="text-stone-600 text-[11px]">
              Memerdekakan seorang hamba sahaya mukmin yang selamat dari cacat kerja.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
              2
            </span>
            <h3 className="font-bold text-stone-900 text-sm">Puasa 2 Bulan Berturut-turut</h3>
            <p className="text-stone-600 text-[11px]">
              Jika tidak mampu/tidak ada budak: wajib berpuasa 60 hari berturut-turut tanpa putus sehari pun.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
              3
            </span>
            <h3 className="font-bold text-stone-900 text-sm">Memberi Makan 60 Miskin</h3>
            <p className="text-stone-600 text-[11px]">
              Jika tidak mampu berpuasa 2 bulan: memberi makan kepada 60 orang miskin (masing-masing 1 mud / 675 gram beras).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
