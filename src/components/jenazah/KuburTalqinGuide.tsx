import React, { useState } from 'react';
import { Compass, Sparkles, CheckCircle2, ShieldCheck, Info, HelpCircle } from 'lucide-react';

export function KuburTalqinGuide() {
  const [activeTab, setActiveTab] = useState<'liang_kubur' | 'prosesi_makam' | 'talqin_ziarah'>('liang_kubur');

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Compass className="w-4 h-4 text-emerald-700" />
          <span>Panduan Pemakaman & Pasca Pemakaman</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Tata Cara Penguburan, Liang Lahat, Talqin & Adab Ziarah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Menguburkan jenazah adalah penghormatan fisik terakhir bagi seorang mukmin.
          Syariat mengatur secara mendalam bentuk liang kubur, posisi jenazah menghadap kiblat,
          pelepasan simpul tali kafan, hingga doa dan talqin penguat iman di alam barzakh.
        </p>
      </div>

      {/* Switcher Tabs */}
      <div className="flex gap-2 border-b border-stone-200 pb-3">
        {[
          { id: 'liang_kubur', label: '1. Liang Lahat vs Liang Syaqq' },
          { id: 'prosesi_makam', label: '2. Prosesi Memasukkan Jenazah' },
          { id: 'talqin_ziarah', label: '3. Talqin & Adab Ziarah Kubur' },
        ].map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                isSelected
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* SUBTAB 1: LIANG LAHAT VS SYAQQ */}
      {activeTab === 'liang_kubur' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-stone-900 font-serif">
                Bentuk Liang Kubur: Lahad (الَّلَحْدُ) vs Syaqq / Cempuri (الشَّقُّ)
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Kedalaman liang kubur disunnahkan setinggi orang dewasa melambaikan tangan ke atas (± 2 meter) dan luas yang mencukupi agar menahan bau serta aman dari binatang buas:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Lahad */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
                  <h3 className="font-bold text-sm text-stone-900">1. Liang Lahad (Al-Lahd)</h3>
                  <span className="font-arabic text-emerald-800 text-sm">اللَّحْد</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Lubang galian yang dikeruk menjorok ke dalam pada dinding dasar kubur sebelah barat (arah kiblat).
                </p>
                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-950 font-medium">
                  <strong>Paling Utama (Afdhal):</strong> Digunakan jika kondisi tanah keras dan padat sehingga dinding tidak mudah runtuh.
                </div>
              </div>

              {/* Syaqq */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
                  <h3 className="font-bold text-sm text-stone-900">2. Liang Cempuri (Asy-Syaqq)</h3>
                  <span className="font-arabic text-emerald-800 text-sm">الشَّقّ</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Galian parit membujur persis di tengah-tengah dasar liang kubur, lalu diapit batu/papan bata di kanan dan kirinya.
                </p>
                <div className="p-3 bg-amber-50 rounded-lg text-amber-950 font-medium">
                  <strong>Digunakan saat Darurat/Tanah Gembur:</strong> Sangat dianjurkan jika tanah gembur, mudah longsor, atau berpasir.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: PROSESI PEMAKAMAN */}
      {activeTab === 'prosesi_makam' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Urutan Syar'i Memasukkan Jenazah ke Liang Kubur
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {[
                {
                  step: 1,
                  title: 'Dimasukkan dari Arah Kaki Kubur',
                  desc: 'Jenazah diturunkan secara perlahan mendahulukan bagian kepala melalui arah kaki kuburan (arah selatan).',
                },
                {
                  step: 2,
                  title: 'Membaca Doa Peletakan',
                  desc: 'Orang yang memasukkan jenazah melafalkan: "Bismillāhi wa \'alā millati rasūlillāh" (HR. Tirmidzi & Abu Dawud).',
                },
                {
                  step: 3,
                  title: 'Memiringkan Menghadap Kiblat',
                  desc: 'Jenazah dibaringkan di atas lambung kanannya dengan dada dan wajah mengarah lurus ke Ka\'bah (Kiblat).',
                },
                {
                  step: 4,
                  title: 'Membuka Simpul Tali Kafan',
                  desc: 'Seluruh ikatan tali kafan (dari kepala hingga kaki) dilepaskan agar jenazah tidak terbelenggu.',
                },
                {
                  step: 5,
                  title: 'Pipi Kanan Menempel Tanah',
                  desc: 'Kain kafan bagian wajah dibuka sedikit agar pipi kanan jenazah bersentuhan langsung dengan tanah.',
                },
                {
                  step: 6,
                  title: 'Diberi Ganjalan Tanah Bulat',
                  desc: 'Menaruh beberapa gumpalan tanah di belakang punggung mayit agar posisi miring tidak terguling terlentang.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2"
                >
                  <span className="w-6 h-6 rounded-md bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: TALQIN & ADAB ZIARAH */}
      {activeTab === 'talqin_ziarah' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Talqin Mayit & Adab Ziarah Kubur
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Talqin */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <span className="font-bold text-stone-900 block text-sm">
                  Sunnah Mendoakan & Mentalqin Mayit:
                </span>
                <p className="text-stone-700 leading-relaxed">
                  Setelah liang kubur ditimbun rata, disunnahkan bagi para pelayat untuk diam sejenak di sisi makam guna mendoakan keteguhan iman mayit saat menghadapi pertanyaan dua malaikat (Munkar dan Nakir).
                </p>
                <div className="p-3 bg-white rounded-lg border border-stone-200 font-arabic text-sm text-stone-900">
                  اللَّهُمَّ ثَبِّتْهُ عِنْدَ السُّؤَالِ، اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ
                </div>
                <p className="text-stone-600 italic">
                  "Ya Allah, teguhkanlah dia saat menjawab pertanyaan, ampunilah dia dan rahmatilah dia."
                </p>
              </div>

              {/* Adab Ziarah */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <span className="font-bold text-stone-900 block text-sm">
                  Adab Ziarah Kubur Syar'i:
                </span>
                <ul className="space-y-1.5 list-disc list-inside text-stone-700">
                  <li>Mengucapkan salam ziarah kubur: <em>"Assalāmu \'alaikum dāra qaumin mu\'minīn..."</em>.</li>
                  <li>Mengingat kematian dan akhirat (tujuan utama ziarah).</li>
                  <li>Mendoakan ampunan dan keselamatan bagi ahli kubur.</li>
                  <li><strong>Dilarang:</strong> Duduk atau menginjak di atas gundukan makam.</li>
                  <li><strong>Dilarang:</strong> Meratap (niyahah) berlebih-lebihan atau meminta berkah kepada kuburan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
