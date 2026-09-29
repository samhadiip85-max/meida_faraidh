import React from 'react';
import { PEMBATAL_PUASA, HARI_HARAM_PUASA } from '../../data/puasaData';
import { Moon, Sparkles, CheckCircle2, ShieldAlert, Sun, Info, Calendar } from 'lucide-react';

export function PuasaOverview() {
  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Moon className="w-4 h-4 text-emerald-700" />
          <span>BAB 7: Fiqih Puasa (Ash-Shiyam / Ash-Shaum)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kaidah Hukum, Rukun, Syarat & Hal-Hal Pembatal Puasa
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Puasa adalah rukun Islam keempat ("يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ").
          Secara syar'i, puasa adalah menahan diri (*Al-Imsak*) dari segala hal yang membatalkan puasa
          mulai dari terbit fajar shadiq (waktu Shubuh) hingga terbenam matahari (waktu Maghrib),
          disertai niat tulus beribadah semata-mata karena Allah SWT.
        </p>
      </div>

      {/* Rukun & Syarat Puasa */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="w-4 h-4" />
            <span>Fondasi Keabsahan Puasa</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Rukun Puasa & Syarat Sah Puasa (Mazhab Syafi'i)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Rukun Puasa */}
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
              <h3 className="font-bold text-sm text-stone-900">Rukun Puasa</h3>
              <span className="font-arabic text-emerald-800 text-sm">أركان الصوم</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Dua unsur pokok yang menjadi hakikat berdirinya ibadah puasa:
            </p>
            <ol className="space-y-2 list-decimal list-inside text-stone-800 font-medium">
              <li>
                <strong>Niat di Dalam Hati:</strong>
                <p className="text-stone-600 font-normal ml-5 mt-0.5">
                  Untuk puasa fardhu (Ramadhan, qadha', nadzar), wajib berniat di malam hari (<em>Tabyit</em>) sebelum fajar shadiq, dan menentukan jenis puasa (<em>Ta'yin</em>). Lafadz niat: "Nawaitu shauma ghadin 'an adā'i fardhi syahri Ramadhāna hādzihis sanati lillāhi ta'ālā".
                </p>
              </li>
              <li>
                <strong>Menahan Diri (Al-Imsak):</strong>
                <p className="text-stone-600 font-normal ml-5 mt-0.5">
                  Menahan diri dari makan, minum, jima', dan segala pembatal puasa sejak fajar shadiq hingga terbenam matahari.
                </p>
              </li>
            </ol>
          </div>

          {/* Syarat Sah & Syarat Wajib */}
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
              <h3 className="font-bold text-sm text-stone-900">Syarat Sah Puasa</h3>
              <span className="font-arabic text-emerald-800 text-sm">شروط الصحة</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Kriteria agar ibadah puasa dinilai sah dan berpahala di sisi Allah:
            </p>
            <ol className="space-y-1.5 list-decimal list-inside text-stone-800 font-medium">
              <li><strong>Islam:</strong> Tidak sah puasa orang kafir/murtad.</li>
              <li><strong>Tamyiz (Berakal):</strong> Mampu membedakan hal baik dan buruk.</li>
              <li><strong>Suci dari Haid & Nifas:</strong> Sepanjang siang hari dari fajar hingga maghrib.</li>
              <li><strong>Bukan pada Hari yang Diharamkan:</strong> Seperti 2 hari raya dan 3 hari tasyriq.</li>
            </ol>

            <div className="pt-2 border-t border-stone-200/80 text-stone-600">
              <strong>Syarat Wajib Puasa:</strong> Islam, Baligh, Berakal, Kuat/Mampu berpuasa, dan Mukim (bukan musafir perjalanan jauh).
            </div>
          </div>
        </div>
      </div>

      {/* 8 Perkara yang Membatalkan Puasa */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
          <ShieldAlert className="w-4 h-4 text-rose-600" />
          <span>Mubthilātus Shiyām (Pembatal Puasa)</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          8 Hal yang Membatalkan Ibadah Puasa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {PEMBATAL_PUASA.map((p) => (
            <div
              key={p.number}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                  {p.number}
                </span>
                <span className="text-[10px] text-rose-900 font-bold uppercase tracking-wider bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  Pembatal
                </span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm mt-1">{p.title}</h3>
              <p className="text-stone-600 leading-relaxed text-[11px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hari-Hari yang Diharamkan Berpuasa */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
          <Calendar className="w-4 h-4 text-rose-600" />
          <span>Larangan Berpuasa</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Hari-Hari yang Diharamkan untuk Mengerjakan Puasa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {HARI_HARAM_PUASA.map((h) => (
            <div
              key={h.name}
              className="p-4 bg-rose-50/40 rounded-xl border border-rose-200 space-y-1.5"
            >
              <h3 className="font-bold text-rose-950 text-sm">{h.name}</h3>
              <p className="text-stone-700 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
