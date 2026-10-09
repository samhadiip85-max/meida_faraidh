import React, { useState } from 'react';
import { HUNTING_CONDITIONS } from '../../data/sembelihData';
import { Crosshair, ShieldCheck, AlertTriangle, CheckCircle2, Dog, ArrowRight, BookOpen, AlertOctagon, HelpCircle } from 'lucide-react';

export function BerburuGuide() {
  const [selectedCase, setSelectedCase] = useState<string>('anjing_makan');

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Crosshair className="w-4 h-4 text-emerald-700" />
          <span>Fiqih Berburu Hewan Liar (Kitāb Ash-Shaid)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kaidah Senjata Berburu, Hewan Pemburu Terlatih, & Syarat Halal Buruan
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Berburu (*Ash-Shaid*) adalah menangkap hewan liar halal yang tidak dapat dikendalikan atau dijangkau lehernya
          dengan cara melepaskan anak panah/senjata tajam atau melepaskan hewan pemburu terlatih.
          Kematian hewan buruan akibat senjata atau terkaman anjing pemburu terlatih dihukumi <strong>SAH seperti sembelihan syar'i</strong> selama memenuhi kaidah.
        </p>
      </div>

      {/* 3 Rukun Berburu */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>3 Pilar Syarat Berburu</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Ketentuan Pemburu, Senjata, & Hewan Pemburu Terlatih
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {HUNTING_CONDITIONS.map((cond, idx) => (
            <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <h3 className="font-bold text-stone-900 text-sm">{cond.aspect}</h3>
                  <span className="font-arabic text-emerald-800 text-xs">{cond.aspectArabic}</span>
                </div>

                <div className="mt-2.5 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block">
                    Syarat Sah Kehalalan:
                  </span>
                  <ul className="space-y-1">
                    {cond.syaratSah.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5 text-stone-700 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 space-y-1.5 border-t border-stone-200 pt-2">
                  <span className="text-[10px] uppercase font-bold text-rose-700 block">
                    Kondisi yang Membatalkan (Haram):
                  </span>
                  <ul className="space-y-1">
                    {cond.kondisiBatal.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5 text-stone-600 text-[11px]">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-2 bg-white rounded border border-stone-200 text-[10px] text-stone-600 font-mono mt-3">
                <strong>Dalil: </strong> {cond.dalil}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simulator Kasus Fiqih Berburu Interaktif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>Studi Kasus & Fatwa Berburu</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Simulasi Hukum 4 Kasus Kritis dalam Berburu
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih studi kasus di bawah ini untuk melihat keputusan fiqih para ulama beserta 'illat hukumnya:
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <button
            type="button"
            onClick={() => setSelectedCase('anjing_makan')}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedCase === 'anjing_makan'
                ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
                : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span className="block font-bold">1. Anjing Memakan Mangsa</span>
            <span className="text-[10px] block opacity-80 mt-0.5">Kasus Hadits Adi bin Hatim</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCase('jatuh_ke_air')}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedCase === 'jatuh_ke_air'
                ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
                : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span className="block font-bold">2. Buruan Jatuh ke Air</span>
            <span className="text-[10px] block opacity-80 mt-0.5">Mati Tenggelam vs Tertusuk</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCase('anjing_liar_campur')}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedCase === 'anjing_liar_campur'
                ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs'
                : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span className="block font-bold">3. Bercampur Anjing Lain</span>
            <span className="text-[10px] block opacity-80 mt-0.5">Syubhat Basmalah & Pemburu</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCase('ditemukan_hidup')}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedCase === 'ditemukan_hidup'
                ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
                : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span className="block font-bold">4. Ditemukan Masih Hidup</span>
            <span className="text-[10px] block opacity-80 mt-0.5">Wajib Sembelih Leher Manual</span>
          </button>
        </div>

        {/* Selected Case Detail */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-3">
          {selectedCase === 'anjing_makan' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <div>
                  <h3 className="font-bold text-sm text-stone-900">
                    Kasus: Anjing Pemburu Memakan Sebagian Daging Mangsa
                  </h3>
                  <span className="text-[11px] text-stone-500">
                    Kijang diterkam anjing pemburu terlatih, namun saat pemburu tiba, paha kijang telah digigit dan dimakan anjing.
                  </span>
                </div>
                <span className="px-3 py-1 bg-rose-100 text-rose-800 font-bold border border-rose-300 rounded text-xs">
                  STATUS: HARAM DIMAKAN
                </span>
              </div>
              <p className="text-stone-700 leading-relaxed text-xs">
                <strong>Keputusan Fiqih:</strong> Daging buruan tersebut <strong>HARAM DIMAKAN</strong> dan dihukumi bangkai. Rasulullah SAW bersabda: <em>"Jika ia memakannya, jangan kamu makan! Karena sesungguhnya ia menangkap untuk dirinya sendiri."</em> (HR. Bukhari & Muslim). Ciri anjing terlatih (*mu'allam*) adalah setia mempersembahkan mangsa seutuhnya untuk tuannya tanpa mencicipinya.
              </p>
            </div>
          )}

          {selectedCase === 'jatuh_ke_air' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <div>
                  <h3 className="font-bold text-sm text-stone-900">
                    Kasus: Hewan Buruan yang Tertembak Jatuh ke Dalam Sungai / Danau
                  </h3>
                  <span className="text-[11px] text-stone-500">
                    Burung atau rusa tertembak panah, lalu tercebur ke sungai dan ditemukan mati mengapung di air.
                  </span>
                </div>
                <span className="px-3 py-1 bg-rose-100 text-rose-800 font-bold border border-rose-300 rounded text-xs">
                  STATUS: HARAM DIMAKAN
                </span>
              </div>
              <p className="text-stone-700 leading-relaxed text-xs">
                <strong>Keputusan Fiqih:</strong> Daging buruan tersebut <strong>HARAM DIMAKAN</strong>. Rasulullah SAW bersabda kepada Adi bin Hatim: <em>"Jika kamu melepaskan anak panahmu dan mengenai sasaran lalu buruan itu jatuh ke air lalu mati, jangan kamu makan! Karena kamu tidak tahu apakah air yang membunuhnya (tenggelam) atau anak panahmu."</em> (HR. Bukhari no. 5484). Terjadi keraguan antara sebab halal dan sebab haram.
              </p>
            </div>
          )}

          {selectedCase === 'anjing_liar_campur' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <div>
                  <h3 className="font-bold text-sm text-stone-900">
                    Kasus: Anjing Terlatih Ditemani Anjing Liar Lain Menerkam Mangsa
                  </h3>
                  <span className="text-[11px] text-stone-500">
                    Saat pemburu mendekat, ia melihat anjing pemburunya bersama seekor anjing asing lain sedang menerkam mangsa.
                  </span>
                </div>
                <span className="px-3 py-1 bg-rose-100 text-rose-800 font-bold border border-rose-300 rounded text-xs">
                  STATUS: HARAM DIMAKAN
                </span>
              </div>
              <p className="text-stone-700 leading-relaxed text-xs">
                <strong>Keputusan Fiqih:</strong> Daging buruan tersebut <strong>HARAM DIMAKAN</strong>. Nabi SAW bersabda: <em>"Jangan kamu makan! Karena sesungguhnya kamu membaca nama Allah atas anjingmu, dan kamu tidak membaca nama Allah atas anjing yang lain itu."</em> (HR. Bukhari no. 5486).
              </p>
            </div>
          )}

          {selectedCase === 'ditemukan_hidup' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <div>
                  <h3 className="font-bold text-sm text-stone-900">
                    Kasus: Hewan Buruan Ditemukan Masih Bernyawa Penuh
                  </h3>
                  <span className="text-[11px] text-stone-500">
                    Hewan terkena panah pada kakinya, lalu saat pemburu tiba hewan masih hidup bergerak normal (*hayāh mustaqirrah*).
                  </span>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold border border-emerald-300 rounded text-xs">
                  STATUS: WAJIB DISEMBELIH MANUAL
                </span>
              </div>
              <p className="text-stone-700 leading-relaxed text-xs">
                <strong>Keputusan Fiqih:</strong> Pemburu <strong>WAJIB segera menyembelih lehernya</strong> dengan pisau secara normal (memutus hulqum dan mari'). Jika pemburu membiarkannya sampai mati sendiri tanpa disembelih padahal ia mampu menyembelihnya, hewan tersebut <strong>menjadi bangkai yang haram dimakan</strong>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
