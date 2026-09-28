import React, { useState } from 'react';
import { MUSTAHADHAH_CATEGORIES } from '../../data/haidData';
import { ShieldCheck, Sparkles, CheckCircle, Info, Stethoscope, Droplets } from 'lucide-react';

export function IstihadhahGuide() {
  const [selectedCatId, setSelectedCatId] = useState<string>('mubtadaah_mumayyizah');

  const activeCategory = MUSTAHADHAH_CATEGORIES.find((c) => c.id === selectedCatId)!;

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase">
          <Stethoscope className="w-4 h-4 text-sky-700" />
          <span>Pedoman Fiqih Istihadhah (Pendarahan Abnormal)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kategori Wanita Mustahadhah & Tata Cara Ibadah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Wanita yang mengalami pendarahan lebih dari 15 hari disebut <strong>Mustahadhah</strong>.
          Secara hukum syariat, ia tetap dihukumi SUCI sehingga tidak boleh meninggalkan shalat dan puasa.
          Para ulama merumuskan kaidah sistematis untuk menentukan bagian darah mana yang menjadi haid dan mana yang menjadi istihadhah.
        </p>
      </div>

      {/* 5 Kategori Mustahadhah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            5 Golongan Wanita yang Mengalami Istihadhah
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih salah satu kondisi di bawah untuk melihat rumusan hukum dan pembagian hari haidnya:
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {MUSTAHADHAH_CATEGORIES.map((cat) => {
            const isSelected = selectedCatId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCatId(cat.id)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-sky-700 text-white border-sky-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Selected Category Box */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
          <div className="flex items-baseline justify-between border-b border-stone-200/80 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block">
                Golongan
              </span>
              <h3 className="text-base font-bold text-stone-900 mt-0.5">{activeCategory.name}</h3>
            </div>
            <span className="text-sm font-arabic text-stone-600 bg-white px-3 py-1 rounded border border-stone-200">
              {activeCategory.arabic}
            </span>
          </div>

          <div className="space-y-1.5">
            <strong className="text-stone-900 block font-semibold">Definisi Kondisi:</strong>
            <p className="text-stone-700 leading-relaxed">{activeCategory.definition}</p>
          </div>

          <div className="p-4 bg-sky-50 rounded-xl border border-sky-200 space-y-1.5">
            <strong className="text-sky-950 block font-semibold text-sm">
              Ketetapan Hukum Syariat:
            </strong>
            <p className="text-sky-900 leading-relaxed font-medium">{activeCategory.rule}</p>
          </div>
        </div>
      </div>

      {/* Prosedur Shalat bagi Wanita Istihadhah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-800">
            <Droplets className="w-4 h-4" />
            <span>Tata Cara Bersuci Shalat Da'imul Hadats</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            5 Langkah Tertib Bersuci Sebelum Shalat Fardhu
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Karena darah terus mengalir (da'imul hadats), wanita istihadhah wajib melakukan 5 prosedur ini secara berurutan dan bersegera (tanpa jeda lama):
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
          {[
            {
              step: 1,
              title: 'Tunggu Masuk Waktu',
              desc: 'Seluruh proses bersuci (istinja, pembalut, wudhu) WAJIB dilakukan setelah azan / masuknya waktu shalat fardhu.',
            },
            {
              step: 2,
              title: 'Membasuh Kemaluan',
              desc: 'Bersihkan dan cuci area kemaluan dari sisa darah najis yang mengalir.',
            },
            {
              step: 3,
              title: 'Menyumbat & Membalut',
              desc: 'Sumbat bagian kemaluan dengan kapas/kasa (jika tidak sakit) lalu kenakan pembalut yang rapat agar darah tidak menetes.',
            },
            {
              step: 4,
              title: 'Berwudhu Khusus',
              desc: 'Berniat wudhu untuk membolehkan shalat: "Nawaitul wudhu\'a li istibahatis shalaati fardhan lillaahi ta\'aalaa".',
            },
            {
              step: 5,
              title: 'Segera Shalat',
              desc: 'Langsung menuju tempat shalat dan mendirikan shalat fardhu tanpa menunda-nunda selain untuk menutup aurat dan iqamah.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2"
            >
              <div className="w-7 h-7 rounded-lg bg-sky-700 text-white flex items-center justify-center font-bold text-xs">
                {item.step}
              </div>
              <h3 className="font-bold text-stone-900">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed text-[11px]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>Catatan Penting:</strong> Satu wudhu bagi wanita istihadhah hanya sah untuk <strong>satu kali shalat fardhu</strong>. Namun ia bebas mengerjakan shalat sunnah sebanyak-banyaknya selama waktu shalat tersebut masih berlangsung.
          </span>
        </div>
      </div>
    </div>
  );
}
