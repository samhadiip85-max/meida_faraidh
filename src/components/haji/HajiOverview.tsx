import React, { useState } from 'react';
import { RUKUN_HAJI_LIST, WAJIB_HAJI_LIST } from '../../data/hajiData';
import { HajiType } from '../../types/haji';
import { Landmark, Sparkles, CheckCircle2, AlertTriangle, Compass, Info, MapPin } from 'lucide-react';

export function HajiOverview() {
  const [selectedMethod, setSelectedMethod] = useState<HajiType>('tamattu');

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Landmark className="w-4 h-4 text-emerald-700" />
          <span>BAB 8: Fiqih Ibadah Haji & Umrah (Rukun Islam Kelima)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hukum, Rukun vs Wajib, Metode Haji & Ketentuan Miqat
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Ibadah Haji adalah ziarah suci menuju Baitullah Ka'bah di Makkah Al-Mukarramah dan padang Arafah
          pada waktu tertentu dengan amalan khusus. Hukumnya <strong>Fardhu 'Ain</strong> sekali seumur hidup
          bagi setiap muslim yang mampu secara fisik, finansial, dan keamanan perjalanan (*Istitha'ah*).
        </p>
      </div>

      {/* Rukun vs Wajib Haji */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="w-4 h-4" />
            <span>Pembedaan Syar'i Paling Fundamental</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Perbedaan Rukun Haji vs Wajib Haji
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Kegagalan membedakan rukun dan wajib dapat berakibat fatal pada keabsahan haji seseorang:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* RUKUN HAJI */}
          <div className="p-5 bg-rose-50/40 rounded-xl border border-rose-200 space-y-3">
            <div className="flex items-center justify-between border-b border-rose-200/80 pb-2">
              <h3 className="font-bold text-sm text-rose-950">6 Rukun Haji (Arkanul Hajj)</h3>
              <span className="text-[10px] font-bold text-rose-900 bg-rose-100 px-2 py-0.5 rounded border border-rose-300">
                Wajib Dikerjakan Sendiri
              </span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Jika salah satu rukun tertinggal, <strong>HAJI TIDAK SAH dan TIDAK BISA DITEBUS DENGAN DAM</strong>. Wajib mengulang haji di tahun lain.
            </p>
            <ol className="space-y-2 text-stone-800 font-medium">
              {RUKUN_HAJI_LIST.map((r) => (
                <li key={r.number} className="p-2 bg-white rounded-lg border border-rose-100">
                  <div className="flex justify-between items-center mb-0.5">
                    <strong>{r.name}</strong>
                    <span className="font-arabic text-stone-500 text-[11px]">{r.arabic}</span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed font-normal">{r.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* WAJIB HAJI */}
          <div className="p-5 bg-emerald-50/40 rounded-xl border border-emerald-200 space-y-3">
            <div className="flex items-center justify-between border-b border-emerald-200/80 pb-2">
              <h3 className="font-bold text-sm text-emerald-950">6 Wajib Haji (Wajibatul Hajj)</h3>
              <span className="text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                Bisa Ditebus dengan Dam
              </span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Jika tertinggal, <strong>HAJINYA TETAP SAH</strong>, tetapi pelakunya berdosa jika sengaja dan <strong>WAJIB MEMBAYAR DAM (DENDA)</strong>.
            </p>
            <ol className="space-y-2 text-stone-800 font-medium">
              {WAJIB_HAJI_LIST.map((w) => (
                <li key={w.number} className="p-2 bg-white rounded-lg border border-emerald-100">
                  <div className="flex justify-between items-center mb-0.5">
                    <strong>{w.name}</strong>
                    <span className="font-arabic text-stone-500 text-[11px]">{w.arabic}</span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed font-normal">{w.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* 3 Metode Pelaksanaan Haji */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Compass className="w-4 h-4" />
            <span>Pilihan Manasik</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            3 Metode Pelaksanaan Haji: Tamattu', Ifrad & Qiran
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilihlah salah satu cara pelaksanaan haji untuk melihat alur dan ketentuan damnya:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              id: 'tamattu',
              name: 'Haji Tamattu\' (Paling Umum)',
              arabic: 'التمتع',
              sub: 'Umrah Terlebih Dahulu, Baru Haji',
            },
            {
              id: 'ifrad',
              name: 'Haji Ifrad (Paling Afdhal Syafi\'i)',
              arabic: 'الإفراد',
              sub: 'Haji Terlebih Dahulu, Baru Umrah',
            },
            {
              id: 'qiran',
              name: 'Haji Qiran',
              arabic: 'القران',
              sub: 'Haji & Umrah Digabung Sekaligus',
            },
          ].map((m) => {
            const isSelected = selectedMethod === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedMethod(m.id as any)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-1 ring-emerald-600 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-arabic text-stone-500 text-xs">{m.arabic}</span>
                  <span className="text-[10px] text-stone-400 font-mono">Metode</span>
                </div>
                <h3 className="text-sm font-bold text-stone-900">{m.name}</h3>
                <p className="text-stone-500 text-xs mt-0.5">{m.sub}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Method Details */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
          {selectedMethod === 'tamattu' && (
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm">
                Karakteristik & Alur Haji Tamattu':
              </h3>
              <p className="text-stone-700 leading-relaxed">
                Jamaah berihram dan menyelesaikan seluruh amalan <strong>Umrah</strong> terlebih dahulu di bulan-bulan haji, kemudian bertahallul penuh (bebas mengenakan baju biasa dan terbebas dari larangan ihram). Selanjutnya pada tanggal 8 Dzulhijjah, kembali memakai pakaian ihram dan berniat <strong>Haji</strong> dari kota Makkah.
              </p>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-950 font-medium">
                <strong>Ketentuan Dam:</strong> Pelaku haji Tamattu' <strong>WAJIB membayar Dam</strong> berupa menyembelih 1 ekor kambing (atau jika tidak mampu, berpuasa 10 hari: 3 hari di tanah suci dan 7 hari di tanah air).
              </div>
            </div>
          )}

          {selectedMethod === 'ifrad' && (
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm">
                Karakteristik & Alur Haji Ifrad:
              </h3>
              <p className="text-stone-700 leading-relaxed">
                Jamaah berniat dan melaksanakan seluruh rangkaian <strong>Haji</strong> terlebih dahulu dari miqat hingga tuntas melempar jumrah dan thawaf wada'. Setelah selesai haji, jamaah baru keluar ke tanah halal (seperti Tan'im atau Ji'ranah) untuk berihram dan mengerjakan ibadah <strong>Umrah</strong>.
              </p>
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-950 font-medium">
                <strong>Status Hukum & Dam:</strong> Merupakan metode paling utama (afdal) menurut Mazhab Syafi'i karena tidak mencampuradukkan haji dengan umrah, dan <strong>TIDAK DIKENAI DAM</strong> (bebas denda).
              </div>
            </div>
          )}

          {selectedMethod === 'qiran' && (
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm">
                Karakteristik & Alur Haji Qiran:
              </h3>
              <p className="text-stone-700 leading-relaxed">
                Jamaah berniat <strong>Haji dan Umrah sekaligus</strong> sejak dari miqat ("Labbaikallāhumma hajjan wa 'umratan"). Satu kali thawaf ifadhah dan satu kali sa'i mencakup haji sekaligus umrahnya. Namun jamaah harus terus berada dalam kondisi ihram (tidak boleh tahallul) hingga tanggal 10 Dzulhijjah.
              </p>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-950 font-medium">
                <strong>Ketentuan Dam:</strong> <strong>WAJIB membayar Dam</strong> menyembelih 1 ekor kambing laksana haji Tamattu'.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Peta Miqat Makani */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <MapPin className="w-4 h-4 text-emerald-700" />
          <span>Miqat Makani (Batas Geografis Tempat Berniat Ihram)</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          5 Titik Miqat Makani yang Ditetapkan Rasulullah SAW
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          {[
            {
              name: '1. Dzulhulaifah (Bir Ali)',
              distance: '± 450 km dari Makkah',
              forWhom: 'Penduduk Madinah & Jamaah Indonesia Gelombang I (yang mendarat di Madinah lebih dulu).',
            },
            {
              name: '2. Yalamlam (As-Sa\'diyyah)',
              distance: '± 120 km dari Makkah',
              forWhom: 'Penduduk Yaman & Jamaah Indonesia Gelombang II (berihram di pesawat saat melintas di atas Yalamlam atau bandara Jeddah).',
            },
            {
              name: '3. Al-Juhfah (Rabigh)',
              distance: '± 187 km dari Makkah',
              forWhom: 'Penduduk Syam (Suriah, Palestina, Yordania, Lebanon), Mesir, dan Afrika Utara.',
            },
            {
              name: '4. Qarnul Manazil (As-Sailul Kabir)',
              distance: '± 94 km dari Makkah',
              forWhom: 'Penduduk Najd, Riyadh, Dubai, dan kawasan Teluk Arab.',
            },
            {
              name: '5. Dzatu \'Irq',
              distance: '± 94 km dari Makkah',
              forWhom: 'Penduduk Irak, Iran, dan negeri-negeri timur.',
            },
            {
              name: '6. Tanah Halal (Tan\'im / Ji\'ranah)',
              distance: '± 6 - 20 km dari Masjidil Haram',
              forWhom: 'Khusus bagi penduduk Makkah atau jamaah yang sudah berada di Makkah saat hendak berihram UMRAH sunnah.',
            },
          ].map((m) => (
            <div key={m.name} className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
              <strong className="text-stone-900 block font-semibold text-xs">{m.name}</strong>
              <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block font-mono">
                {m.distance}
              </span>
              <p className="text-stone-600 leading-relaxed text-[11px] pt-1">{m.forWhom}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
