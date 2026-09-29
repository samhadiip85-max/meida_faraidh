import React, { useState } from 'react';
import { PRAYER_DOA_DATA } from '../../data/jenazahData';
import { JenazahGender } from '../../types/jenazah';
import { UserCheck, Sparkles, CheckCircle2, ChevronRight, Info, Compass } from 'lucide-react';

export function ShalatJenazahSimulator() {
  const [selectedGender, setSelectedGender] = useState<JenazahGender>('laki');
  const [activeTakbir, setActiveTakbir] = useState<number>(1);

  const currentData = PRAYER_DOA_DATA[selectedGender];

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <UserCheck className="w-4 h-4 text-emerald-700" />
          <span>Panduan Praktik Shalatul Janazah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Simulator 4 Takbir Shalat Jenazah & Posisi Berdiri Imam
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Shalat jenazah tidak memiliki ruku', i'tidal, maupun sujud. Seluruh rangkaian dikerjakan berdiri tegak
          dengan empat kali takbir. Pelajari penyesuaian lafadz doa berdasarkan jenis kelamin jenazah dan posisi berdiri imam yang tepat.
        </p>
      </div>

      {/* Selector of Jenazah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Pilih Kategori Jenazah yang Dishalatkan:
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Perhatikan perubahan posisi imam dan kata ganti doa (dhamir) pada Takbir ke-3:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'laki', label: 'Laki-laki Dewasa' },
            { id: 'perempuan', label: 'Perempuan Dewasa' },
            { id: 'anak_laki', label: 'Anak-anak (Belum Baligh)' },
            { id: 'jamaah', label: 'Banyak Jenazah (Jamak)' },
          ].map((item) => {
            const isSelected = selectedGender === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedGender(item.id as any)}
                className={`p-3 rounded-xl border text-center transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs font-bold'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Posisi Berdiri Imam Indicator */}
        <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 flex items-start gap-3 text-xs">
          <Compass className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <strong className="text-emerald-950 font-bold block text-sm">
              Posisi Berdiri Imam yang Disunnahkan:
            </strong>
            <p className="text-emerald-900 font-medium leading-relaxed">
              {currentData.imamPosition}
            </p>
          </div>
        </div>
      </div>

      {/* Simulator 4 Takbir Step-by-Step */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="w-4 h-4" />
            <span>Alur Pelaksanaan 4 Takbir</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Lafadz Niat & Doa Rinci Setiap Takbir
          </h2>
        </div>

        {/* 4 Takbir Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-stone-200 pb-3">
          {[
            { takbir: 1, title: 'Takbir 1: Niat & Al-Fatihah' },
            { takbir: 2, title: 'Takbir 2: Shalawat Nabi' },
            { takbir: 3, title: 'Takbir 3: Doa untuk Mayit' },
            { takbir: 4, title: 'Takbir 4: Doa Penutup & Salam' },
          ].map((t) => {
            const isCurrent = activeTakbir === t.takbir;
            return (
              <button
                key={t.takbir}
                type="button"
                onClick={() => setActiveTakbir(t.takbir)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  isCurrent
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs font-bold'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] block opacity-80 uppercase">Langkah {t.takbir}</span>
                <span className="text-xs block mt-0.5 leading-snug">{t.title}</span>
              </button>
            );
          })}
        </div>

        {/* Takbir Step Content */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
          {/* TAKBIR 1 */}
          {activeTakbir === 1 && (
            <div className="space-y-4">
              <div className="border-b border-stone-200/80 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  Takbir Pertama
                </span>
                <h3 className="text-base font-bold text-stone-900 mt-0.5">
                  Takbiratul Ihram Bersamaan Niat & Membaca Surat Al-Fatihah
                </h3>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                <strong className="text-stone-900 block font-semibold text-sm">
                  Lafadz Niat Shalat Jenazah:
                </strong>
                <div className="font-arabic text-base text-stone-900 bg-stone-50 p-3 rounded-lg">
                  {selectedGender === 'laki' && (
                    'أُصَلِّي عَلَى هَذَا الْمَيِّتِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ كِفَايَةٍ مَأْمُومًا لِلَّهِ تَعَالَى'
                  )}
                  {selectedGender === 'perempuan' && (
                    'أُصَلِّي عَلَى هَذِهِ الْمَيِّتَةِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ كِفَايَةٍ مَأْمُومًا لِلَّهِ تَعَالَى'
                  )}
                  {selectedGender === 'anak_laki' && (
                    'أُصَلِّي عَلَى هَذَا الْمَيِّتِ الطِّفْلِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ كِفَايَةٍ مَأْمُومًا لِلَّهِ تَعَالَى'
                  )}
                  {selectedGender === 'jamaah' && (
                    'أُصَلِّي عَلَى مَنْ حَضَرَ مِنْ أَمْوَاتِ الْمُسْلِمِينَ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ كِفَايَةٍ مَأْمُومًا لِلَّهِ تَعَالَى'
                  )}
                </div>
                <p className="text-stone-600 italic">
                  "Saya berniat shalat atas jenazah ini empat takbir fardhu kifayah sebagai makmum karena Allah Ta'ala."
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block font-semibold">Membaca Surat Al-Fatihah:</strong>
                <p className="text-stone-600">
                  Setelah takbiratul ihram, langsung membaca ta'awwudz dan Surat Al-Fatihah lengkap (tanpa perlu membaca doa iftitah menurut pendapat mu'tamad).
                </p>
              </div>
            </div>
          )}

          {/* TAKBIR 2 */}
          {activeTakbir === 2 && (
            <div className="space-y-4">
              <div className="border-b border-stone-200/80 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  Takbir Kedua
                </span>
                <h3 className="text-base font-bold text-stone-900 mt-0.5">
                  Mengangkat Tangan Bertakbir & Membaca Shalawat Nabi
                </h3>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                <strong className="text-stone-900 block font-semibold text-sm">
                  Bacaan Shalawat Ibrahimiyah (Paling Sempurna):
                </strong>
                <div className="font-arabic text-base text-stone-900 bg-stone-50 p-3 rounded-lg leading-relaxed">
                  اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ، وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ، فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Minimal lafadz shalawat sah: <em>"Allāhumma shalli \'alā sayyidinā Muhammad"</em>.
                </p>
              </div>
            </div>
          )}

          {/* TAKBIR 3 */}
          {activeTakbir === 3 && (
            <div className="space-y-4">
              <div className="border-b border-stone-200/80 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  Takbir Ketiga (Rukun Utama Doa Mayit)
                </span>
                <h3 className="text-base font-bold text-stone-900 mt-0.5">
                  Doa Khusus Memohon Ampunan & Rahmat bagi Jenazah
                </h3>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                <div className="font-arabic text-base text-stone-900 bg-stone-50 p-3 rounded-lg leading-relaxed">
                  {currentData.takbir3Arabic}
                </div>
                <div className="text-emerald-950 font-medium italic">
                  {currentData.takbir3Latin}
                </div>
                <p className="text-stone-600 leading-relaxed pt-1 border-t border-stone-100">
                  <strong>Artinya: </strong>"{currentData.takbir3Translation}"
                </p>
              </div>
            </div>
          )}

          {/* TAKBIR 4 */}
          {activeTakbir === 4 && (
            <div className="space-y-4">
              <div className="border-b border-stone-200/80 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  Takbir Keempat & Penutup
                </span>
                <h3 className="text-base font-bold text-stone-900 mt-0.5">
                  Doa Setelah Takbir Keempat & Mengucapkan Salam
                </h3>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                <strong className="text-stone-900 block font-semibold text-sm">
                  Doa Takbir Keempat:
                </strong>
                <div className="font-arabic text-base text-stone-900 bg-stone-50 p-3 rounded-lg leading-relaxed">
                  {currentData.takbir4Arabic}
                </div>
                <div className="text-emerald-950 font-medium italic">
                  {currentData.takbir4Latin}
                </div>
                <p className="text-stone-600 leading-relaxed pt-1 border-t border-stone-100">
                  <strong>Artinya: </strong>"{currentData.takbir4Translation}"
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block font-semibold">Salam Pertama & Kedua:</strong>
                <p className="text-stone-600">
                  Mengucapkan salam menoleh ke kanan lalu ke kiri: <em>"Assalāmu \'alaikum wa rahmatullāhi wa barakātuh"</em>.
                </p>
              </div>
            </div>
          )}

          {/* Nav Buttons */}
          <div className="flex justify-between pt-2 border-t border-stone-200/80">
            <button
              disabled={activeTakbir === 1}
              onClick={() => setActiveTakbir((prev) => Math.max(1, prev - 1))}
              className="px-3 py-1.5 text-stone-600 font-medium hover:text-stone-900 disabled:opacity-30"
            >
              ← Takbir Sebelumnya
            </button>
            <button
              disabled={activeTakbir === 4}
              onClick={() => setActiveTakbir((prev) => Math.min(4, prev + 1))}
              className="px-3 py-1.5 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 disabled:opacity-30 transition-colors"
            >
              Takbir Selanjutnya →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
