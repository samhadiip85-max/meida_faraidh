import React, { useState } from 'react';
import { SUNNAH_LIST } from '../../data/shalatData';
import { Sparkles, HelpCircle, CheckCircle, Info, RefreshCw, AlertCircle } from 'lucide-react';

export function AbadhHaiahGuide() {
  const [activeTab, setActiveTab] = useState<'abadh' | 'haiah' | 'sahwi'>('abadh');

  const abadhItems = SUNNAH_LIST.filter((s) => s.type === 'abadh');
  const haiahItems = SUNNAH_LIST.filter((s) => s.type === 'haiah');

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Sparkles className="w-4 h-4 text-emerald-700" />
          <span>Dimensi Kesempurnaan Shalat</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Sunnah Ab'adh, Sunnah Hai'ah & Panduan Sujud Sahwi
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam Fiqih Mazhab Syafi'i, amalan sunnah di dalam shalat diklasifikasikan menjadi dua:
          <strong> Sunnah Ab'adh</strong> (amalan yang diibaratkan laksana anggota tubuh shalat, jika tertinggal
          disunnahkan diganti dengan Sujud Sahwi) dan <strong>Sunnah Hai'ah</strong> (amalan penghias raga shalat
          yang tidak perlu sujud sahwi bila terlewat).
        </p>
      </div>

      {/* Switcher Buttons */}
      <div className="flex gap-2 border-b border-stone-200 pb-3">
        {[
          { id: 'abadh', label: '1. Sunnah Ab\'adh (Wajib Sahwi Bila Lupa)' },
          { id: 'haiah', label: '2. Sunnah Hai\'ah (Penghias Shalat)' },
          { id: 'sahwi', label: '3. Tata Cara Sujud Sahwi' },
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

      {/* SUBTAB 1: SUNNAH AB'ADH */}
      {activeTab === 'abadh' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <CheckCircle className="w-4 h-4" />
                <span>7 Amalan Sunnah Ab'adh</span>
              </div>
              <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
                Amalan Sunnah Penting yang Diganti Sujud Sahwi
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Bila salah satu dari amalan ini terlewatkan (baik karena lupa maupun sengaja), shalat tetap sah, namun sangat disunnahkan melakukan Sujud Sahwi 2 kali sebelum salam:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {abadhItems.map((item, i) => (
                <div
                  key={item.id}
                  className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-md bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                      {i + 1}
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 font-bold rounded text-[10px]">
                      Sunnah Ab'adh
                    </span>
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm">{item.name}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                  <div className="pt-2 border-t border-stone-200/80 text-[11px] text-emerald-800 font-medium">
                    {item.consequence}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: SUNNAH HAI'AH */}
      {activeTab === 'haiah' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <Sparkles className="w-4 h-4" />
                <span>Sunnah Hai'ah (Ragam Amalan Penyempurna)</span>
              </div>
              <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
                Amalan Sunnah Penghias yang Tidak Memerlukan Sujud Sahwi
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Amalan-amalan sunnah ringan berikut jika terlewatkan (lupa/sengaja) TIDAK DISUNNAHKAN melakukan sujud sahwi. Bahkan jika sengaja sujud sahwi karena lupa sunnah hai'ah, shalat bisa batal:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {haiahItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs"
                >
                  <span className="px-2 py-0.5 bg-stone-200 text-stone-800 font-semibold rounded text-[10px] inline-block">
                    Sunnah Hai'ah
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm">{item.name}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                  <div className="pt-2 border-t border-stone-200/80 text-[11px] text-stone-500">
                    {item.consequence}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: TATA CARA SUJUD SAHWI */}
      {activeTab === 'sahwi' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg font-bold text-stone-900 font-serif">
                4 Sebab Diperintahkannya Sujud Sahwi & Tata Caranya
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Sujud Sahwi (سجود السهو) adalah dua sujud yang dilakukan sebelum salam untuk menambal kekurangan dalam shalat:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* 4 Sebab */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <span className="font-bold text-stone-900 block text-sm">
                  4 Hal Pemicu Sujud Sahwi:
                </span>
                <ol className="space-y-2 list-decimal list-inside text-stone-700">
                  <li><strong>Meninggalkan salah satu Sunnah Ab'adh</strong> (seperti lupa tasyahhud awal atau doa qunut).</li>
                  <li><strong>Ragu-ragu jumlah rakaat</strong> (misal ragu sudah 3 atau 4 rakaat; maka ambil bilangan yang yakin paling sedikit yakni 3, tambah 1 rakaat, lalu sujud sahwi).</li>
                  <li><strong>Melakukan perbuatan yang membatalkan jika sengaja</strong>, tetapi melakukannya karena tidak sengaja/lupa (seperti menambah ruku' karena lupa).</li>
                  <li><strong>Memindahkan Rukun Qauli ke bukan tempatnya</strong> (seperti membaca surat Al-Fatihah saat ruku' atau duduk).</li>
                </ol>
              </div>

              {/* Tata Cara Pelaksanaan */}
              <div className="p-5 bg-emerald-50/50 rounded-xl border border-emerald-200 space-y-3">
                <span className="font-bold text-emerald-950 block text-sm">
                  Tata Cara Pelaksanaan:
                </span>
                <ol className="space-y-2 list-decimal list-inside text-stone-800">
                  <li>Setelah selesai membaca doa tasyahhud akhir dan shalawat (sebelum salam).</li>
                  <li>Berniat sujud sahwi di dalam hati.</li>
                  <li>Melakukan sujud pertama sambil bertakbir dan membaca doa: <em>"Subhāna man lā yanāmu walā yashū"</em> (Maha Suci Dzat yang tidak pernah tidur dan tidak pernah lupa).</li>
                  <li>Bangkit dan duduk di antara dua sujud sejenak.</li>
                  <li>Melakukan sujud kedua dengan bacaan yang sama.</li>
                  <li>Duduk kembali lalu mengucapkan salam pertama dan kedua.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
