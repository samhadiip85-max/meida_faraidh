import React, { useState } from 'react';
import { WALI_HIERARCHY } from '../../data/munakahatData';
import { WaliHierarchyItem } from '../../types/munakahat';
import { Users2, CheckCircle2, AlertOctagon, Scale, ShieldCheck } from 'lucide-react';

export function WaliNikahTree() {
  const [selectedOrder, setSelectedOrder] = useState<number>(1);

  const selectedWali = WALI_HIERARCHY.find((w) => w.order === selectedOrder) || WALI_HIERARCHY[0];

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Users2 className="w-4 h-4" />
          <span>Rukun Penting Akad Nikah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Tertib Urutan Wali Nikah & Syarat Saksi
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam mazhab Syafi'i dan jumhur ulama, akad pernikahan tanpa wali tidak sah ("لَا نِكَاحَ إِلَّا بِوَلِيٍّ").
          Hak perwalian berpindah secara tertib berurutan dari wali nasab terdekat (aqrab) hingga terjauh (ab'ad),
          lalu beralih ke Wali Hakim bila memenuhi kriteria syar'i.
        </p>
      </div>

      {/* Syarat Sah Wali & Dua Saksi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Syarat Wali */}
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            <span>6 Syarat Sah Menjadi Wali Nikah</span>
          </div>
          <ul className="space-y-2 text-xs text-stone-700">
            <li className="p-2 bg-stone-50 rounded-lg border border-stone-100">
              <strong>1. Beragama Islam:</strong> Tidak sah orang non-Muslim menjadi wali bagi wanita muslimah.
            </li>
            <li className="p-2 bg-stone-50 rounded-lg border border-stone-100">
              <strong>2. Baligh & Berakal Sehat:</strong> Anak kecil dan orang yang hilang ingatan tidak sah menjadi wali.
            </li>
            <li className="p-2 bg-stone-50 rounded-lg border border-stone-100">
              <strong>3. Laki-laki:</strong> Wanita tidak berhak menjadi wali bagi dirinya sendiri atau orang lain.
            </li>
            <li className="p-2 bg-stone-50 rounded-lg border border-stone-100">
              <strong>4. Merdeka:</strong> Bukan seorang budak sahaya.
            </li>
            <li className="p-2 bg-stone-50 rounded-lg border border-stone-100">
              <strong>5. Bersifat Adil:</strong> Tidak melakukan dosa besar secara terang-terangan (tidak fasik).
            </li>
            <li className="p-2 bg-stone-50 rounded-lg border border-stone-100">
              <strong>6. Tidak Sedang Berihram:</strong> Tidak dalam keadaan ihram haji atau umrah.
            </li>
          </ul>
        </div>

        {/* Syarat 2 Saksi Adil */}
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wide">
            <Scale className="w-4 h-4" />
            <span>Ketentuan Dua Saksi yang Adil</span>
          </div>
          <ul className="space-y-2 text-xs text-stone-700">
            <li className="p-2 bg-stone-50 rounded-lg border border-stone-100">
              <strong>Jumlah Minimal:</strong> Wajib dihadiri oleh minimal 2 orang saksi laki-laki.
            </li>
            <li className="p-2 bg-stone-50 rounded-lg border border-stone-100">
              <strong>Muslim, Baligh, Berakal:</strong> Saksi harus mukallaf dan seakidah dengan mempelai.
            </li>
            <li className="p-2 bg-stone-50 rounded-lg border border-stone-100">
              <strong>Mendengar & Melihat:</strong> Mampu mendengar pengucapan Ijab dan Qabul secara jelas dan melihat pihak yang berakad.
            </li>
            <li className="p-2 bg-stone-50 rounded-lg border border-stone-100">
              <strong>Adil:</strong> Memiliki integritas moral dan tidak terkenal sebagai pembohong/pelaku kefasikan.
            </li>
            <li className="p-2 bg-stone-50 rounded-lg border border-stone-100">
              <strong>Sabda Rasulullah SAW:</strong> <em>"Tidak sah nikah kecuali dengan wali dan dua orang saksi yang adil"</em> (HR. Al-Khamsah kecuali An-Nasa'i).
            </li>
          </ul>
        </div>
      </div>

      {/* Hierarki Urutan Wali Nikah Interaktif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            10 Tingkatan Tertib Urutan Wali Nikah (KHI Pasal 21)
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Wali urutan berikutnya tidak boleh bertindak selama wali urutan sebelumnya masih ada dan memenuhi syarat:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left list of 10 walis */}
          <div className="lg:col-span-6 space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
            {WALI_HIERARCHY.map((item) => {
              const isSelected = selectedOrder === item.order;
              return (
                <button
                  key={item.order}
                  type="button"
                  onClick={() => setSelectedOrder(item.order)}
                  className={`w-full p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${
                        isSelected
                          ? 'bg-emerald-800 text-white'
                          : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      {item.order}
                    </span>
                    <div>
                      <span className="text-xs font-bold block">{item.roleIndo}</span>
                      <span
                        className={`text-[10px] font-arabic ${
                          isSelected ? 'text-emerald-100' : 'text-stone-500'
                        }`}
                      >
                        {item.roleArabic}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                      isSelected
                        ? 'bg-emerald-800 text-emerald-100'
                        : item.order === 10
                        ? 'bg-purple-100 text-purple-900'
                        : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {item.order <= 2
                      ? 'Wali Aqrab'
                      : item.order < 10
                      ? 'Wali Ab\'ad'
                      : 'Wali Hakim'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right detail view */}
          <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
            <div className="border-b border-stone-200 pb-3">
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                Tingkat Urutan Ke-{selectedWali.order}
              </span>
              <h3 className="text-base font-bold text-stone-900 mt-1">
                {selectedWali.roleIndo}
              </h3>
              <span className="text-sm font-arabic text-stone-600 block mt-0.5">
                {selectedWali.roleArabic}
              </span>
            </div>

            <div className="space-y-2">
              <strong className="text-stone-900 block font-semibold">Ketentuan & Syarat Berpindah:</strong>
              <p className="text-stone-700 leading-relaxed">{selectedWali.conditions}</p>
            </div>

            {selectedWali.order === 10 && (
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg text-purple-950 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-purple-900">
                  <AlertOctagon className="w-4 h-4 text-purple-700" />
                  <span>Kapan Wali Hakim Berhak Menikahkan?</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-purple-900">
                  <li>Tidak ada sama sekali wali nasab dari urutan 1 sampai 9.</li>
                  <li>Wali nasab berhalangan / ghaib (berada di tempat sangat jauh tanpa kabar).</li>
                  <li>Wali nasab enggan (adhal) secara zalim tanpa alasan syar'i dan telah diputus oleh Pengadilan Agama.</li>
                  <li>Wali nasab sedang berihram haji/umrah dan tidak mewakilkan.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
