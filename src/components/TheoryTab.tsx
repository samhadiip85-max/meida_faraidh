import React, { useState } from 'react';
import { ASHABUL_FURUDH_DATA, ASAL_MASALAH_GUIDE } from '../data/faraidhTheoryData';
import { BookOpen, Scale, Award, AlertCircle } from 'lucide-react';

export function TheoryTab() {
  const [selectedFraction, setSelectedFraction] = useState<'1/2' | '1/4' | '1/8' | '2/3' | '1/3' | '1/6'>('1/2');

  const currentFurudh = ASHABUL_FURUDH_DATA.find((f) => f.fraction === selectedFraction)!;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <BookOpen className="w-4 h-4" />
          <span>Ensiklopedia Fiqih Mawarith</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kaidah Dasar, Rukun & Ashabul Furudh
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl">
          Pelajari ketentuan pembagian warisan dalam Islam berdasarkan nash Al-Qur\'an, As-Sunnah,
          dan Ijma para sahabat Nabi SAW.
        </p>
      </div>

      {/* Fundamental Principles: Rukun, Syarat, Penghalang */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Rukun Waris */}
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wide">
            <Scale className="w-4 h-4" />
            <span>3 Rukun Waris</span>
          </div>
          <p className="text-xs text-stone-500">Unsur pokok yang wajib terpenuhi dalam pewarisan:</p>
          <ul className="space-y-2 text-xs text-stone-700">
            <li className="p-2.5 bg-stone-50 rounded-lg border border-stone-100">
              <strong className="text-stone-900 block font-semibold">1. Al-Muwarrith (المُوَرِّث)</strong>
              Orang yang meninggal dunia dan meninggalkan harta peninggalan.
            </li>
            <li className="p-2.5 bg-stone-50 rounded-lg border border-stone-100">
              <strong className="text-stone-900 block font-semibold">2. Al-Warith (الوَارِث)</strong>
              Ahli waris yang berhak dan masih hidup saat al-muwarrith wafat.
            </li>
            <li className="p-2.5 bg-stone-50 rounded-lg border border-stone-100">
              <strong className="text-stone-900 block font-semibold">3. Al-Mauruts / Tirkah (المَوْرُوث)</strong>
              Harta benda atau hak kebendaan yang ditinggalkan setelah disucikan dari hutang dan wasiat.
            </li>
          </ul>
        </div>

        {/* Syarat Waris */}
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wide">
            <Award className="w-4 h-4" />
            <span>3 Syarat Sah Waris</span>
          </div>
          <p className="text-xs text-stone-500">Kondisi yuridis sahnya peralihan kepemilikan:</p>
          <ul className="space-y-2 text-xs text-stone-700">
            <li className="p-2.5 bg-stone-50 rounded-lg border border-stone-100">
              <strong className="text-stone-900 block font-semibold">1. Meninggalnya Pewaris</strong>
              Telah wafat secara hakiki (nyata) atau secara hukmi (putusan pengadilan atas orang hilang/mafqud).
            </li>
            <li className="p-2.5 bg-stone-50 rounded-lg border border-stone-100">
              <strong className="text-stone-900 block font-semibold">2. Hidupnya Ahli Waris</strong>
              Ahli waris dipastikan masih hidup saat pewaris menghembuskan nafas terakhir (termasuk janin dalam kandungan yang lahir hidup).
            </li>
            <li className="p-2.5 bg-stone-50 rounded-lg border border-stone-100">
              <strong className="text-stone-900 block font-semibold">3. Mengetahui Sebab Nasab</strong>
              Jelasnya hubungan kekerabatan, perkawinan yang sah, atau pemerdekaan budak (wala\').
            </li>
          </ul>
        </div>

        {/* Penghalang Waris (Mani'ul Irtsi) */}
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-rose-800 font-bold text-sm uppercase tracking-wide">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            <span>3 Penghalang (Mani\'ul Irtsi)</span>
          </div>
          <p className="text-xs text-stone-500">Hal yang menggugurkan hak mewarisi sama sekali:</p>
          <ul className="space-y-2 text-xs text-stone-700">
            <li className="p-2.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <strong className="text-rose-900 block font-semibold">1. Pembunuhan (Al-Qatlu)</strong>
              Ahli waris yang membunuh pewaris secara sengaja tidak berhak mewarisi (HR. Abu Dawud).
            </li>
            <li className="p-2.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <strong className="text-rose-900 block font-semibold">2. Perbedaan Agama (Ikhtilaafud Diin)</strong>
              Muslim tidak mewarisi dari non-Muslim, dan non-Muslim tidak mewarisi dari Muslim (HR. Bukhari & Muslim).
            </li>
            <li className="p-2.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <strong className="text-rose-900 block font-semibold">3. Perbudakan (Ar-Riqq)</strong>
              Seseorang yang berstatus budak tidak berhak mewarisi maupun diwarisi.
            </li>
          </ul>
        </div>
      </div>

      {/* Ashabul Furudh Interactive Explorer */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Eksplorasi 6 Bagian Pasti (Furudh Muqaddarah)
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Al-Qur\'an secara tegas menetapkan 6 porsi pecahan tetap dalam ilmu faraidh. Klik pecahan di bawah untuk melihat siapa saja yang berhak dan syaratnya:
          </p>
        </div>

        {/* Fraction selector tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          {ASHABUL_FURUDH_DATA.map((item) => {
            const isSelected = selectedFraction === item.fraction;
            return (
              <button
                key={item.fraction}
                onClick={() => setSelectedFraction(item.fraction)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                <span className="font-mono-num text-base">{item.fraction}</span>
                <span className="text-xs font-normal">({item.beneficiariesCount} Pihak)</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Beneficiaries of Selected Fraction */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
              Penerima Bagian {currentFurudh.nameIndo} · {currentFurudh.fractionArabic}
            </h3>
            <span className="text-xs text-stone-500">
              Total: {currentFurudh.beneficiaries.length} Golongan Ahli Waris
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentFurudh.beneficiaries.map((b, idx) => (
              <div
                key={b.title}
                className="bg-stone-50 rounded-xl border border-stone-200 p-4 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs text-emerald-800 font-semibold uppercase tracking-wider block">
                      Golongan {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-stone-900">{b.title}</h4>
                  </div>
                  <span className="text-xs font-arabic text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200">
                    {b.arabicTitle}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <span className="font-semibold text-stone-700 block">Syarat Mendapatkan:</span>
                  <ul className="space-y-1 list-disc list-inside text-stone-600 pl-1">
                    {b.conditions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-stone-200/80">
                  <div className="text-[11px] font-arabic text-stone-700 bg-emerald-50/50 p-2 rounded border border-emerald-100">
                    {b.dalilText}
                  </div>
                  <span className="text-[10px] text-stone-400 block mt-1">Sumber: {b.dalilSource}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ashabah & Asal Masalah reference cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ashabah Guide */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wide">
            <Scale className="w-4 h-4" />
            <span>Kategori Ashabah (Penerima Sisa)</span>
          </div>
          <p className="text-xs text-stone-600">
            Ashabah adalah ahli waris yang mengambil seluruh harta (jika sendiri) atau sisa harta setelah dibagikan kepada Ashabul Furudh:
          </p>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <strong className="text-stone-900 block font-semibold mb-1">
                1. Ashabah bi Nafsihi (عصبة بنفسه)
              </strong>
              <p className="text-stone-600">
                Ahli waris laki-laki yang menjadi ashabah dengan sendirinya tanpa ditarik oleh orang lain.
              </p>
              <div className="text-[11px] text-stone-500 mt-1">
                Contoh: Anak laki-laki, Cucu laki-laki, Ayah, Kakek, Saudara kandung laki-laki, Paman.
              </div>
            </div>

            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <strong className="text-stone-900 block font-semibold mb-1">
                2. Ashabah bil Ghair (عصبة بالغير)
              </strong>
              <p className="text-stone-600">
                Ahli waris wanita yang semula berhak fardh (1/2 atau 2/3), namun menjadi ashabah karena bersama saudara laki-lakinya yang sederajat. Bagian laki-laki adalah 2x lipat bagian perempuan (2:1).
              </p>
              <div className="text-[11px] text-stone-500 mt-1">
                Contoh: Anak perempuan bersama anak laki-laki, Saudari kandung bersama saudara kandung laki-laki.
              </div>
            </div>

            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <strong className="text-stone-900 block font-semibold mb-1">
                3. Ashabah ma\'al Ghair (عصبة مع الغير)
              </strong>
              <p className="text-stone-600">
                Saudari kandung atau saudari seayah perempuan yang menjadi ashabah karena mewarisi bersama anak atau cucu perempuan almarhum.
              </p>
              <div className="text-[11px] text-stone-500 mt-1">
                Kaidah Hadits: <em>"Jadikanlah saudari-saudari perempuan bersama anak perempuan sebagai ashabah"</em> (HR. Bukhari).
              </div>
            </div>
          </div>
        </div>

        {/* 7 Asal Masalah Guide */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wide">
            <BookOpen className="w-4 h-4" />
            <span>Tabel 7 Asal Masalah & Sifat 'Aul</span>
          </div>
          <p className="text-xs text-stone-600">
            Asal Masalah adalah angka KPK terkecil dari seluruh penyebut furudh yang ada. Hanya ada 7 Asal Masalah yang diakui dalam mazhab para sahabat:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-stone-100 text-stone-700 font-semibold border-b border-stone-200">
                <tr>
                  <th className="py-2 px-3">Asal Masalah</th>
                  <th className="py-2 px-3">Bisa \'Aul?</th>
                  <th className="py-2 px-3">Kenaikan (\'Aul)</th>
                  <th className="py-2 px-3">Asal Pecahan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {ASAL_MASALAH_GUIDE.map((row) => (
                  <tr key={row.asalMasalah} className="hover:bg-stone-50">
                    <td className="py-2.5 px-3 font-bold font-mono-num text-stone-900">
                      {row.asalMasalah}
                    </td>
                    <td className="py-2.5 px-3">
                      {row.canAul ? (
                        <span className="text-amber-700 font-semibold">Ya, bisa \'Aul</span>
                      ) : (
                        <span className="text-stone-500">Tidak bisa</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 font-mono-num text-stone-700">
                      {row.aulValues ? row.aulValues.join(', ') : '-'}
                    </td>
                    <td className="py-2.5 px-3 text-stone-500 text-[11px]">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
