import React, { useState } from 'react';
import { KAFAN_DATA } from '../../data/jenazahData';
import { Heart, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, Info, Users } from 'lucide-react';

export function JenazahOverview() {
  const [selectedKafanGender, setSelectedKafanGender] = useState<'laki' | 'perempuan'>('laki');

  const currentKafan = KAFAN_DATA[selectedKafanGender];

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Heart className="w-4 h-4 text-emerald-700" />
          <span>BAB 5: Fiqih Tajhizul Jana'iz (Pemulasaran Jenazah)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          4 Kewajiban Terhadap Jenazah: Memandikan, Mengafani, Menshalatkan & Menguburkan
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Mengurus jenazah seorang muslim merupakan kewajiban <strong>Fardhu Kifayah</strong> bagi masyarakat muslim
          di sekitarnya. Penghormatan terakhir ini mencakup empat prosesi syar'i yang wajib dipenuhi secara tertib
          sejak wafatnya seorang muslim hingga disemayamkan di peristirahatan terakhir.
        </p>
      </div>

      {/* Peta 4 Kewajiban Utama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {[
          {
            step: 1,
            title: '1. Memandikan (Ghusl)',
            arabic: 'غسل الميت',
            desc: 'Menghilangkan najis dan meratakan air mutlak ke seluruh tubuh jenazah minimal satu kali basuhan merata.',
          },
          {
            step: 2,
            title: '2. Mengafani (Takfin)',
            arabic: 'تكفين الميت',
            desc: 'Membungkus seluruh raga jenazah dengan kain kafan putih bersih (afdal 3 lapis untuk laki-laki, 5 lapis untuk wanita).',
          },
          {
            step: 3,
            title: '3. Menshalatkan (Shalat)',
            arabic: 'الصلاة عليه',
            desc: 'Mendirikan shalat jenazah 4 takbir tanpa ruku\' dan sujud untuk mendoakan ampunan dan rahmat bagi mayit.',
          },
          {
            step: 4,
            title: '4. Menguburkan (Dafn)',
            arabic: 'دفن الميت',
            desc: 'Memakamkan jenazah ke dalam liang lahat sedalam ± 2 meter menghadap kiblat dengan pipi kanan menempel tanah.',
          },
        ].map((item) => (
          <div key={item.step} className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-md bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                {item.step}
              </span>
              <span className="font-arabic text-stone-500 text-xs">{item.arabic}</span>
            </div>
            <h3 className="font-bold text-stone-900 text-sm">{item.title}</h3>
            <p className="text-stone-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Pengecualian Syahid & Bayi Keguguran */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
          <AlertTriangle className="w-4 h-4 text-rose-600" />
          <span>Pengecualian Khusus dalam Fiqih Jenazah</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Jenazah yang Tidak Boleh Dimandikan atau Tidak Dishalatkan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-rose-950 text-sm">1. Syahid Ma'rakah (Gugur di Medan Perang)</span>
              <span className="font-arabic text-rose-800 text-xs">شهيد المعركة</span>
            </div>
            <p className="text-rose-900 leading-relaxed">
              Orang yang gugur dalam pertempuran membela agama Allah melawan musuh:
              <strong> HARAM DIMANDIKAN dan HARAM DISHALATKAN</strong>.
              Mereka langsung dikuburkan bersama pakaian dan percikan darah yang melekat sebagai saksi kemuliaan di hari kiamat.
            </p>
          </div>

          <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-950 text-sm">2. Bayi Keguguran (As-Siqth)</span>
              <span className="font-arabic text-amber-800 text-xs">السقط</span>
            </div>
            <p className="text-amber-900 leading-relaxed">
              • Jika sempat menjerit, menangis, atau bernapas: wajib dipulasarakan penuh (mandikan, kafani, shalatkan, kuburkan).<br />
              • Jika berusia 4 bulan ke atas (sudah ditiup roh) namun tidak menangis: dimandikan, dikafani, dan dikuburkan (tanpa dishalatkan).<br />
              • Jika kurang dari 4 bulan dan belum berbentuk manusia: cukup dibungkus kain dan dikuburkan.
            </p>
          </div>
        </div>
      </div>

      {/* Rincian Kain Kafan Laki-laki vs Perempuan */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Sparkles className="w-4 h-4" />
              <span>Fiqih Mengafani Jenazah (Takfin)</span>
            </div>
            <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
              Standar Kain Kafan Laki-laki (3 Lapis) vs Perempuan (5 Lapis)
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setSelectedKafanGender('laki')}
              className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${
                selectedKafanGender === 'laki'
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                  : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
            >
              Jenazah Laki-laki (3 Lapis)
            </button>
            <button
              type="button"
              onClick={() => setSelectedKafanGender('perempuan')}
              className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${
                selectedKafanGender === 'perempuan'
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                  : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
            >
              Jenazah Perempuan (5 Lapis)
            </button>
          </div>
        </div>

        {/* Selected Kafan Details */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
          <div className="flex items-baseline justify-between border-b border-stone-200/80 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                Jumlah Lapisan Kafan
              </span>
              <h3 className="text-base font-bold text-stone-900 mt-0.5">
                {selectedKafanGender === 'laki'
                  ? 'Kain Kafan Jenazah Laki-laki'
                  : 'Kain Kafan Jenazah Perempuan'}
              </h3>
            </div>
            <span className="px-2.5 py-1 bg-emerald-100 text-emerald-950 font-bold rounded-lg border border-emerald-300">
              {currentKafan.layerCountRecommended} Lapis Sunnah (Minimal 1 Lapis Wajib)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-stone-200 space-y-2">
              <strong className="text-stone-900 block font-semibold text-sm">
                Komponen Kain & Perlengkapan:
              </strong>
              <ul className="space-y-1.5 list-disc list-inside text-stone-700">
                {currentKafan.components.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg border border-stone-200 space-y-2">
              <strong className="text-stone-900 block font-semibold text-sm">
                Tata Cara Membungkus & Mengikat:
              </strong>
              <ol className="space-y-1 list-decimal list-inside text-stone-700">
                {currentKafan.procedure.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-950 flex items-start gap-2">
            <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong>Ketentuan Tali Kafan: </strong>
              {currentKafan.ropeCount} Simpul tali diletakkan di sebelah kiri tubuh jenazah agar saat jenazah dibaringkan miring ke kanan di liang lahat, simpul tali dapat dibuka dengan mudah dari atas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
