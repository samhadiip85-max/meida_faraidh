import React, { useState } from 'react';
import { BAI_OBJEK_DATA } from '../../data/jualbeliData';
import { Eye, Layers, ShieldCheck, CheckCircle2, AlertOctagon, HelpCircle, ArrowRight, BookOpen, Smartphone, Store, Package } from 'lucide-react';

export function ObjekJualBeliGuide() {
  const [selectedId, setSelectedId] = useState<'musyahadah' | 'mausuf_zimmah' | 'ghaib'>('musyahadah');
  const activeObjek = BAI_OBJEK_DATA.find((item) => item.id === selectedId) || BAI_OBJEK_DATA[0];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Eye className="w-4 h-4 text-emerald-700" />
          <span>Klasifikasi Objek Jual Beli Berdasarkan Kehadiran Fisik</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Bai' Musyāhadah, Bai' Maushūf fīdz-Dzimmah, & Bai' Ghā'ib
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam Fiqih Islam, keabsahan transaksi sangat bergantung pada kejelasan objek barang (*Al-Ma'qūd 'Alaih*).
          Para fuqaha membagi bentuk transaksi menjadi tiga kategori pokok: barang yang terlihat langsung di tempat (**Musyāhadah**),
          barang dalam tanggungan dengan spesifikasi terperinci (**Maushūf fīdz-Dzimmah**), dan barang tertentu yang gaib tanpa spesifikasi (**Ghā'ib**).
        </p>
      </div>

      {/* 3 Kategori Tabs */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>Tiga Ragam Kondisi Objek Transaksi</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Pilih Klasifikasi Objek untuk Mempelajari Fiqihnya
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pelajari perbedaan mendasar syarat keabsahan, penerapan era digital, serta status hak khiyar:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {BAI_OBJEK_DATA.map((item) => {
            const isSelected = selectedId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? item.id === 'musyahadah'
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                      : item.id === 'mausuf_zimmah'
                      ? 'bg-sky-700 text-white border-sky-700 shadow-xs'
                      : 'bg-amber-700 text-white border-amber-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[11px] block font-arabic opacity-85">{item.titleArabic}</span>
                <span className="text-sm font-bold block mt-1 leading-snug">{item.title}</span>
                <span className="text-[10px] block opacity-80 mt-1 uppercase font-semibold">
                  {item.statusHukum}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Detail Card */}
        {activeObjek && (
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                  <span>{activeObjek.title}</span>
                </h3>
                <span className="text-xs font-arabic text-emerald-800 block mt-0.5">
                  {activeObjek.titleArabic}
                </span>
              </div>
              <span
                className={`px-3 py-1 rounded text-xs font-bold border self-start sm:self-auto shrink-0 ${
                  activeObjek.statusColor === 'emerald'
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : activeObjek.statusColor === 'sky'
                    ? 'bg-sky-100 text-sky-800 border-sky-300'
                    : 'bg-amber-100 text-amber-800 border-amber-300'
                }`}
              >
                {activeObjek.statusHukum}
              </span>
            </div>

            {/* Definisi & Perbedaan Kunci */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase font-bold text-stone-500 block">
                Definisi Syariat:
              </span>
              <p className="text-stone-800 text-xs leading-relaxed bg-white p-3.5 rounded-lg border border-stone-200">
                {activeObjek.definition}
              </p>
            </div>

            {/* Syarat Keabsahan & Status Khiyar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold text-stone-700 block">
                  Syarat-Syarat Keabsahan:
                </span>
                <ul className="space-y-1.5">
                  {activeObjek.syaratKeabsahan.map((s, idx) => (
                    <li key={idx} className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-start gap-2 text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-[11px]">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <div className="space-y-1 bg-white p-3 rounded-lg border border-stone-200">
                  <span className="text-[11px] uppercase font-bold text-stone-700 block">
                    Konsekuensi Hak Khiyār:
                  </span>
                  <p className="text-stone-700 text-[11px] leading-relaxed">
                    {activeObjek.statusKhiyar}
                  </p>
                </div>

                <div className="space-y-1 bg-white p-3 rounded-lg border border-stone-200">
                  <span className="text-[11px] uppercase font-bold text-stone-700 block">
                    Karakteristik & Perbedaan Kunci:
                  </span>
                  <p className="text-stone-700 text-[11px] leading-relaxed">
                    {activeObjek.perbedaanKunci}
                  </p>
                </div>
              </div>
            </div>

            {/* Contoh Klasik vs Modern */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block text-xs">Contoh Klasik / Turats:</strong>
                <p className="text-stone-600 text-[11px] leading-relaxed">{activeObjek.contohKlasik}</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block text-xs">Contoh Praktik Modern / Era Digital:</strong>
                <p className="text-stone-600 text-[11px] leading-relaxed">{activeObjek.contohModern}</p>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 font-mono">
              <strong className="text-emerald-950">Landasan Syar'i: </strong>
              {activeObjek.dalil}
            </div>
          </div>
        )}
      </div>

      {/* Matriks Komparasi Komprehensif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          <span>Matriks Perbandingan Fiqih 3 Objek Jual Beli</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Tabel Komparasi Musyāhadah, Maushūf fīdz-Dzimmah, & Ghā'ib
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
              <tr>
                <th className="p-3">Aspek Fiqih</th>
                <th className="p-3">1. Bai' Musyāhadah</th>
                <th className="p-3">2. Bai' Maushūf fīdz-Dzimmah</th>
                <th className="p-3">3. Bai' Ghā'ib</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700 text-[11px]">
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Keberadaan Fisik</td>
                <td className="p-3 text-emerald-900 font-medium">Hadir di depan mata saat akad</td>
                <td className="p-3 text-sky-900 font-medium">Belum hadir (dalam tanggungan)</td>
                <td className="p-3 text-amber-900 font-medium">Tidak hadir dan tidak tampak</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Spesifikasi Objek</td>
                <td className="p-3">Dilihat & diinspeksi langsung</td>
                <td className="p-3">Rinci, jelas, dan mengikat</td>
                <td className="p-3 text-rose-700">Kabur / tanpa rincian memadai</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Status Hukum Syar'i</td>
                <td className="p-3 font-bold text-emerald-800">SAH (Ijma' Ulama)</td>
                <td className="p-3 font-bold text-sky-800">SAH (Jumhur Ulama)</td>
                <td className="p-3 font-bold text-amber-800">BATAL (Syafi'i Qaul Jadid)</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Hak Khiyār Ru'yah</td>
                <td className="p-3">Tidak ada (sudah dilihat)</td>
                <td className="p-3">Ada jika barang tidak sesuai spesifikasi</td>
                <td className="p-3">Batal akadnya (atau khiyar mutlak bagi yg membolehkan)</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Penerapan Nyata</td>
                <td className="p-3">Toko offline, pasar tradisional</td>
                <td className="p-3">Marketplace e-commerce, akad Salam</td>
                <td className="p-3">Mystery box barang acak tanpa deskripsi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
