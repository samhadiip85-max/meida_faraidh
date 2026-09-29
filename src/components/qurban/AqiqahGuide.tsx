import React, { useState } from 'react';
import { COMPARISON_QURBAN_AQIQAH } from '../../data/qurbanData';
import { Baby, Sparkles, CheckCircle2, Heart, Scale, Info, Calendar, Utensils, Award } from 'lucide-react';

export function AqiqahGuide() {
  const [hairWeightGrams, setHairWeightGrams] = useState<number>(2.5);
  const [metalType, setMetalType] = useState<'perak' | 'emas'>('perak');
  const [metalPricePerGram, setMetalPricePerGram] = useState<number>(18000); // Perak ~18k, Emas ~1.4jt

  const totalSedekah = Math.round(hairWeightGrams * metalPricePerGram);

  const handleMetalChange = (type: 'perak' | 'emas') => {
    setMetalType(type);
    if (type === 'perak') {
      setMetalPricePerGram(18000);
    } else {
      setMetalPricePerGram(1400000);
    }
  };

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Baby className="w-4 h-4 text-emerald-700" />
          <span>Panduan Lengkap Fiqih Aqiqah & Sunnah Kelahiran</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Tata Cara Aqiqah, Sunnah Hari ke-7 & Komparasi Qurban
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Aqiqah secara bahasa berarti rambut di kepala bayi saat lahir, dan menurut istilah syariat adalah
          hewan yang disembelih pada saat mencukur rambut bayi tersebut sebagai wujud syukur atas karunia kelahiran anak.
          Hukumnya adalah <strong>Sunnah Muakkadah</strong> yang sangat dianjurkan.
        </p>
      </div>

      {/* Ketentuan Jumlah Hewan Laki-laki vs Perempuan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Anak Laki-laki */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Kelahiran Bayi Laki-Laki
              </span>
              <h2 className="text-lg font-bold text-stone-900 font-serif mt-0.5">
                2 Ekor Kambing / Domba
              </h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
              2x
            </div>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Disunnahkan menyembelih <strong>dua ekor kambing</strong> yang sepadan (*syatāni mutakāfi-atāni*) dalam usia, ukuran, dan kegemukannya.
          </p>
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-950 space-y-1">
            <strong>Keringanan Syar'i:</strong>
            <p className="text-[11px] leading-relaxed">
              Jika orang tua belum memiliki kemampuan finansial yang cukup, sah dan diperbolehkan menyembelih 1 ekor kambing terlebih dahulu, sebagaimana Rasulullah SAW pernah mengaqiqahi cucu beliau Hasan dan Husain masing-masing dengan 1 ekor kibasy (HR. Abu Dawud no. 2841).
            </p>
          </div>
        </div>

        {/* Anak Perempuan */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pink-700">
                Kelahiran Bayi Perempuan
              </span>
              <h2 className="text-lg font-bold text-stone-900 font-serif mt-0.5">
                1 Ekor Kambing / Domba
              </h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-800 flex items-center justify-center font-bold text-sm">
              1x
            </div>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Disunnahkan menyembelih <strong>satu ekor kambing</strong> atau domba yang memenuhi syarat usia dan kesehatan kurban.
          </p>
          <div className="p-3 bg-pink-50 rounded-lg border border-pink-200 text-xs text-pink-950 space-y-1">
            <strong>Dalil Hadits Shahih:</strong>
            <p className="text-[11px] leading-relaxed">
              Dari Ummu Kurz radhiyallahu 'anha, Rasulullah SAW bersabda: <em>"Untuk anak laki-laki dua ekor kambing yang sebanding dan untuk anak perempuan seekor kambing."</em> (HR. Tirmidzi no. 1513 & Abu Dawud no. 2834).
            </p>
          </div>
        </div>
      </div>

      {/* Rangkaian 5 Sunnah Hari ke-7 */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Calendar className="w-4 h-4 text-emerald-700" />
            <span>Timeline Sunnah Nabawiyah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            5 Amalan Sunnah pada Hari ke-7 Kelahiran Bayi
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Hari kelahiran dihitung sebagai hari pertama (jika lahir sebelum maghrib). Di hari ke-7 dianjurkan rangkaian berikut:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5 flex flex-col justify-between">
            <div>
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold mb-1">
                1
              </span>
              <strong className="block text-stone-900 text-sm">Sembelih Hewan</strong>
              <p className="text-stone-600 text-[11px] leading-relaxed mt-1">
                Menyembelih hewan aqiqah dengan membaca bismillah, takbir, dan doa aqiqah memohon perlindungan anak.
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
              Waktu Dhuha
            </span>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5 flex flex-col justify-between">
            <div>
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold mb-1">
                2
              </span>
              <strong className="block text-stone-900 text-sm">Cukur Rambut</strong>
              <p className="text-stone-600 text-[11px] leading-relaxed mt-1">
                Mencukur rambut kepala bayi secara merata dan bersih (*halq*), dilarang model qaza' (mencukur sebagian saja).
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
              Bersihkan Kotoran
            </span>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5 flex flex-col justify-between">
            <div>
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold mb-1">
                3
              </span>
              <strong className="block text-stone-900 text-sm">Timbang & Sedekah</strong>
              <p className="text-stone-600 text-[11px] leading-relaxed mt-1">
                Mengumpulkan potongan rambut bayi, menimbangnya, lalu bersedekah perak/emas senilai berat timbangan tersebut.
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
              Sedekah Perak/Emas
            </span>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5 flex flex-col justify-between">
            <div>
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold mb-1">
                4
              </span>
              <strong className="block text-stone-900 text-sm">Tasmiyah</strong>
              <p className="text-stone-600 text-[11px] leading-relaxed mt-1">
                Memberikan nama yang baik, bermakna mulia, atau menyematkan nama para nabi dan orang shalih.
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
              Nama Terbaik
            </span>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5 flex flex-col justify-between">
            <div>
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold mb-1">
                5
              </span>
              <strong className="block text-stone-900 text-sm">Tahnik</strong>
              <p className="text-stone-600 text-[11px] leading-relaxed mt-1">
                Menyuapkan sedikit kurma matang manis yang telah dilumatkan ke langit-langit mulut bayi disertai doa keberkahan.
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
              Tabarruk & Imunitas
            </span>
          </div>
        </div>
      </div>

      {/* Kalkulator Sedekah Perak Rambut Bayi */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <Scale className="w-4 h-4 text-emerald-700" />
          <span>Kalkulator Sedekah Berat Rambut Bayi</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Hitung Nilai Sedekah Timbangan Rambut Bayi (Perak / Emas)
        </h2>
        <p className="text-xs text-stone-500">
          Sayyidah Fatimah radhiyallahu 'anha menimbang rambut Hasan, Husain, Zainab, dan Ummu Kultsum, lalu bersedekah perak senilai berat rambut tersebut kepada fakir miskin (HR. Malik dalam Al-Muwaththa').
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-4">
            {/* Pilihan Logam */}
            <div className="space-y-1.5 text-xs">
              <label className="font-bold text-stone-700 block">Pilihan Standar Logam:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleMetalChange('perak')}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    metalType === 'perak'
                      ? 'bg-emerald-700 text-white border-emerald-700 font-bold'
                      : 'bg-stone-50 border-stone-200 text-stone-700'
                  }`}
                >
                  <span className="block text-xs">Perak (Sunnah Mu'tamad)</span>
                  <span className="block text-[10px] opacity-80">± Rp 18.000 / gram</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleMetalChange('emas')}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    metalType === 'emas'
                      ? 'bg-amber-600 text-white border-amber-600 font-bold'
                      : 'bg-stone-50 border-stone-200 text-stone-700'
                  }`}
                >
                  <span className="block text-xs">Emas (Lebih Utama bagi yang Mampu)</span>
                  <span className="block text-[10px] opacity-80">± Rp 1.400.000 / gram</span>
                </button>
              </div>
            </div>

            {/* Input Berat & Harga */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-stone-700">Timbangan Rambut (Gram):</label>
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="50"
                  value={hairWeightGrams}
                  onChange={(e) => setHairWeightGrams(Math.max(0.1, Number(e.target.value)))}
                  className="w-full p-2 border border-stone-200 rounded-lg text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-stone-700">Harga per Gram (Rp):</label>
                <input
                  type="number"
                  step="1000"
                  value={metalPricePerGram}
                  onChange={(e) => setMetalPricePerGram(Math.max(100, Number(e.target.value)))}
                  className="w-full p-2 border border-stone-200 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>

          {/* Result Box */}
          <div className="md:col-span-5 bg-stone-50 rounded-xl p-5 border border-stone-200 text-center space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-stone-500 block">
              Estimasi Nominal Sedekah Rambut:
            </span>
            <div className="text-2xl font-bold font-serif text-emerald-800">
              {formatRupiah(totalSedekah)}
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              Sedekahkan sejumlah nominal ini langsung kepada kaum fakir miskin di sekitar Anda sebagai tanda syukur atas keselamatan ibu dan bayi.
            </p>
          </div>
        </div>
      </div>

      {/* Tabel Komparasi 6 Poin Utama: Qurban vs Aqiqah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <Utensils className="w-4 h-4 text-emerald-700" />
          <span>Matriks Perbedaan Syar'i</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Tabel Komparasi Perbedaan: Qurban vs Aqiqah
        </h2>

        <div className="overflow-x-auto border border-stone-200 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
              <tr>
                <th className="p-3 w-1/4">Aspek Perbandingan</th>
                <th className="p-3 w-3/8 text-emerald-950 bg-emerald-50/70">Ibadah Qurban (Udh-hiyah)</th>
                <th className="p-3 w-3/8 text-sky-950 bg-sky-50/70">Ibadah Aqiqah</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              {COMPARISON_QURBAN_AQIQAH.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                  <td className="p-3 font-bold text-stone-900">{item.aspect}</td>
                  <td className="p-3 leading-relaxed bg-emerald-50/20">{item.qurban}</td>
                  <td className="p-3 leading-relaxed bg-sky-50/20">{item.aqiqah}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
