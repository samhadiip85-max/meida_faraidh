import React, { useState } from 'react';
import { KHUTBAH_RUKUNS } from '../../data/jamaahJumatData';
import { BookOpen, Sparkles, CheckCircle, Info, ShieldAlert, Award } from 'lucide-react';

export function JumatGuide() {
  const [activeSubTab, setActiveSubTab] = useState<'rukun_khutbah' | 'syarat_jumat' | 'adab_jumat'>('rukun_khutbah');

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          <span>Hukum & Rukun Shalat Jum'at (Sayyidul Ayyam)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Ketentuan Shalat Jum'at & 5 Rukun Khutbah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Shalat Jum'at adalah kewajiban fardhu 'ain bagi setiap muslim laki-laki yang telah baligh, berakal,
          merdeka, dan bermukim tanpa adanya udzur syar'i. Shalat dua rakaat Jum'at didahului oleh dua khutbah
          yang wajib memenuhi 5 rukun khutbah agar shalatnya sah.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex gap-2 border-b border-stone-200 pb-3">
        {[
          { id: 'rukun_khutbah', label: '1. 5 Rukun Khutbah Jum\'at' },
          { id: 'syarat_jumat', label: '2. Syarat Wajib & Sah Jum\'at' },
          { id: 'adab_jumat', label: '3. Sunnah & Adab Hari Jum\'at' },
        ].map((tab) => {
          const isSelected = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSubTab(tab.id as any)}
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

      {/* SUBTAB 1: 5 RUKUN KHUTBAH */}
      {activeSubTab === 'rukun_khutbah' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-stone-900 font-serif">
                5 Rukun Dua Khutbah Jum'at (Mazhab Syafi'i)
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Khatib wajib melafalkan kelima rukun ini dalam bahasa Arab secara tertib agar khutbah sah dan shalat Jum'at sah:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {KHUTBAH_RUKUNS.map((r) => (
                <div
                  key={r.number}
                  className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-md bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                      {r.number}
                    </span>
                    <span className="font-arabic text-stone-500 text-xs">{r.nameArabic}</span>
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm">{r.name}</h3>
                  <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block font-semibold">
                    {r.placement}
                  </span>
                  <p className="text-stone-600 leading-relaxed">{r.description}</p>
                  {r.exampleArabic && (
                    <div className="pt-2 border-t border-stone-200/80 font-arabic text-sm text-stone-800 bg-white p-2 rounded">
                      {r.exampleArabic}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Syarat Khutbah:</strong> Suci dari hadats dan najis, menutup aurat, berdiri bagi yang mampu, duduk di antara dua khutbah dengan thuma'ninah, dan mualah (bersambung terus-menerus tanpa jeda pembicaraan lain yang lama).
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: SYARAT WAJIB & SAH */}
      {activeSubTab === 'syarat_jumat' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Syarat Wajib & Syarat Sah Shalat Jum'at
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Syarat Wajib */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <span className="font-bold text-stone-900 block text-sm">
                  7 Syarat Wajib Shalat Jum'at:
                </span>
                <ol className="space-y-1.5 list-decimal list-inside text-stone-700 font-medium">
                  <li><strong>Islam:</strong> Khusus bagi pemeluk agama Islam.</li>
                  <li><strong>Baligh:</strong> Anak kecil belum wajib, namun sah shalatnya.</li>
                  <li><strong>Berakal:</strong> Tidak wajib bagi orang yang hilang akal/gila.</li>
                  <li><strong>Laki-Laki:</strong> Wanita tidak wajib Jum'at (cukup shalat Dzuhur).</li>
                  <li><strong>Sehat Jasmani:</strong> Orang yang sakit parah mendapat udzur.</li>
                  <li><strong>Merdeka:</strong> Bukan hamba sahaya.</li>
                  <li><strong>Bermukim (Mustautin):</strong> Musafir yang bepergian sebelum subuh mendapat keringanan.</li>
                </ol>
              </div>

              {/* Syarat Sah */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <span className="font-bold text-stone-900 block text-sm">
                  Syarat Sah Berdirinya Shalat Jum'at:
                </span>
                <ol className="space-y-1.5 list-decimal list-inside text-stone-700 font-medium">
                  <li><strong>Di Waktu Dzuhur:</strong> Shalat dan kedua khutbah harus selesai sebelum waktu Ashar masuk.</li>
                  <li><strong>Didirikan di Suatu Tempat Menetap:</strong> Di desa/kota berpenduduk permanen.</li>
                  <li><strong>Dihadiri Minimal 40 Jamaah:</strong> 40 orang laki-laki mustautin baligh merdeka menurut Mazhab Syafi'i.</li>
                  <li><strong>Dikerjakan secara Berjamaah:</strong> Tidak sah shalat Jum'at munfarid (sendirian).</li>
                  <li><strong>Didahului Dua Khutbah:</strong> Yang memenuhi 5 rukun khutbah.</li>
                  <li><strong>Tidak Didahului Jum'at Lain:</strong> Dalam satu wilayah tanpa kebutuhan mendesak.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: ADAB HARI JUM'AT */}
      {activeSubTab === 'adab_jumat' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Amalan Sunnah & Adab Mulia pada Hari Jum'at
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {[
                { title: '1. Mandi Sunnah Jum\'at', desc: 'Mandi sebelum berangkat shalat Jum\'at dengan niat: "Nawaitul ghusla li shalaatil jum\'ati sunnatan lillaahi ta\'aalaa".' },
                { title: '2. Memotong Kuku & Merapikan Kumis', desc: 'Membersihkan diri, mencukur bulu ketiak/kemaluan, dan merapikan rambut serta kumis.' },
                { title: '3. Memakai Pakaian Putih Bersih', desc: 'Mengenakan pakaian terbaik dan diutamakan yang berwarna putih bersih.' },
                { title: '4. Memakai Wewangian (Parfum)', desc: 'Mengoleskan minyak wangi non-alkohol pada badan dan pakaian (bagi laki-laki).' },
                { title: '5. Berangkat Lebih Awal ke Masjid', desc: 'Berjalan kaki dengan tenang menuju masjid untuk mendapatkan keutamaan pahala unta, sapi, domba, dsb.' },
                { title: '6. Shalat Tahiyyatul Masjid Ringan', desc: 'Tetap disunnahkan shalat 2 rakaat tahiyyatul masjid secara ringkas meski khatib sudah naik mimbar.' },
                { title: '7. Diam & Menyimak Khutbah', desc: 'Haram atau makruh tahrim berbicara saat khatib berkhutbah; barangsiapa berkata "diamlah" kepada saudaranya, maka sia-sia pahala Jum\'atnya.' },
                { title: '8. Membaca Surat Al-Kahfi & Shalawat', desc: 'Memperbanyak shalawat atas Nabi SAW dan membaca Surat Al-Kahfi sepanjang hari Jum\'at.' },
              ].map((adab) => (
                <div key={adab.title} className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                  <strong className="text-stone-900 block font-semibold">{adab.title}</strong>
                  <p className="text-stone-600 leading-relaxed">{adab.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
