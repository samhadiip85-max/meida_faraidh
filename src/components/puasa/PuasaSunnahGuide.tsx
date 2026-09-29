import React from 'react';
import { PUASA_SUNNAH_LIST } from '../../data/puasaData';
import { Sparkles, Calendar, Heart, CheckCircle2, Info } from 'lucide-react';

export function PuasaSunnahGuide() {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Sparkles className="w-4 h-4 text-emerald-700" />
          <span>Amalan Pengiring & Penyempurna Fardhu</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Ragam Puasa Sunnah & Keutamaannya Menurut Sunnah Nabi SAW
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Di luar kewajiban puasa Ramadhan, Rasulullah SAW mensunnahkan berbagai puasa berkala
          (tahunan, bulanan, dan mingguan) untuk mendekatkan diri kepada Allah SWT, menghapuskan dosa-dosa kecil,
          dan melipatgandakan timbangan kebaikan.
        </p>
      </div>

      {/* Keistimewaan Niat Puasa Sunnah */}
      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-3 text-xs">
        <Info className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-emerald-950 font-bold block text-sm">
            Kaidah Khusus Niat Puasa Sunnah:
          </strong>
          <p className="text-emerald-900 leading-relaxed">
            Berbeda dengan puasa wajib yang harus berniat di malam hari (<em>Tabyit</em>), untuk puasa sunnah
            seseorang <strong>BOLEH berniat di pagi atau siang hari sebelum tergelincir matahari (waktu Dzuhur)</strong>,
            dengan syarat sejak fajar shadiq ia belum makan, minum, atau melakukan hal-hal yang membatalkan puasa.
            Hal ini berdasarkan hadits Nabi SAW saat bertanya kepada Aisyah ra. tentang ada tidaknya makanan di rumah (HR. Muslim).
          </p>
        </div>
      </div>

      {/* Grid 6 Puasa Sunnah */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
        {PUASA_SUNNAH_LIST.map((item) => (
          <div
            key={item.id}
            className="p-5 bg-white rounded-xl border border-stone-200 shadow-xs space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                Puasa Sunnah
              </span>
              <h3 className="font-bold text-stone-900 text-base">{item.name}</h3>

              <div className="space-y-1 text-stone-600 pt-1">
                <div>
                  <strong className="text-stone-800">Waktu Pelaksanaan: </strong>
                  <span>{item.timing}</span>
                </div>
                <div>
                  <strong className="text-stone-800">Keutamaan / Pahala: </strong>
                  <span className="text-emerald-950 font-semibold">{item.virtue}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-mono">
              {item.dalil}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
