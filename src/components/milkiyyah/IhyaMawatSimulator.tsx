import React, { useState } from 'react';
import { IHYA_MAWAT_CASES } from '../../data/milkiyyahData';
import { Compass, ShieldAlert, CheckCircle2, Clock, MapPin, AlertOctagon, HelpCircle, ArrowRight } from 'lucide-react';

export function IhyaMawatSimulator() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('kasus_tanam_lahan_mati');
  const activeCase = IHYA_MAWAT_CASES.find((c) => c.id === selectedCaseId) || IHYA_MAWAT_CASES[0];

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Compass className="w-4 h-4 text-emerald-700" />
          <span>Hukum Pertanahan Islam (Ihyā'ul Mawāt & At-Tahjīr)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Panduan Membuka Tanah Mati, Batas Waktu Tahjīr 3 Tahun, & Hak Irtifāq
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Islam memberikan dorongan luar biasa bagi kemakmuran bumi melalui doktrin <strong>Ihyā'ul Mawāt</strong> (menghidupkan tanah mati).
          Siapa pun yang mengolah lahan gersang tak bertuan hingga produktif, maka tanah tersebut <strong>resmi menjadi hak miliknya</strong>.
          Namun syariat mencegah spekulan tanah melalui pembatasan masa pematokan (Tahjīr) maksimal 3 tahun.
        </p>
      </div>

      {/* 4 Pilar Menghidupkan Tanah Mati */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
            4 Tindakan Nyata Ihyā' Menurut Ulama
          </span>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Bagaimana Suatu Tanah Dikatakan Sah "Telah Dihidupkan"?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block text-xs">1. Mengalirkan Air</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Menggali sumur air, membangun saluran irigasi dari sungai bebas, atau mengeringkan rawa berair hingga tanah siap pakai.
            </p>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block text-xs">2. Memagari Keliling</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Membangun tembok pembatas, pagar kayu, parit, atau batu keliling yang memisahkan lahan tersebut secara fisik.
            </p>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block text-xs">3. Bercocok Tanam</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Mencangkul, membersihkan bebatuan, dan menanam bibit pohon kurma, tanaman buah, atau sayuran yang bertumbuh.
            </p>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block text-xs">4. Mendirikan Bangunan</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Mendirikan fondasi rumah, gubuk tempat tinggal, kandang ternak permanen, atau gudang penyimpanan.
            </p>
          </div>
        </div>
      </div>

      {/* Batas Tahjir 3 Tahun Khulafaur Rasyidin */}
      <div className="p-5 bg-amber-50/70 rounded-xl border border-amber-300 flex items-start gap-3.5 text-xs text-amber-950">
        <Clock className="w-6 h-6 text-amber-800 shrink-0 mt-0.5" />
        <div className="space-y-2">
          <strong className="block font-bold text-sm">
            Ketetapan Khalifah Umar bin Khattab: Batas Waktu Tahjīr (Mematok) Maksimal 3 Tahun
          </strong>
          <p className="leading-relaxed">
            Jika seseorang hanya mematok batas tanah (*Tahjīr*) tanpa mengolahnya menjadi produktif, syariat memberikan batas tenggang <strong>maksimal 3 tahun berturut-turut</strong>.
            Jika dalam 3 tahun ia tetap menelantarkannya, maka:
          </p>
          <ul className="space-y-1 list-disc list-inside text-stone-700 text-[11px]">
            <li>Hak prioritasnya gugur seketika.</li>
            <li>Tanah tersebut kembali menjadi milik umum / disita oleh pemerintah.</li>
            <li>Pemerintah berhak menyerahkannya kepada warga lain yang sanggup bercocok tanam.</li>
          </ul>
        </div>
      </div>

      {/* Simulator 4 Kasus Pertanahan & Kepemilikan Interaktif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>Studi Kasus & Analisis Hukum Fiqih</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Simulasi 4 Sengketa Pertanahan & Batas Kepemilikan
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih kasus nyata di bawah untuk melihat verifikasi hukum syariat dan kaidah ushul fiqihnya:
          </p>
        </div>

        {/* Case Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          {IHYA_MAWAT_CASES.map((c, idx) => {
            const isSelected = selectedCaseId === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCaseId(c.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <span className="block font-bold">Kasus #{idx + 1}</span>
                <span className="text-[10px] block opacity-80 mt-0.5 line-clamp-1">
                  {c.id === 'kasus_tanam_lahan_mati'
                    ? 'Olah Lahan Mati'
                    : c.id === 'kasus_tahjir_3_tahun'
                    ? 'Patok 4 Tahun Terlantar'
                    : c.id === 'kasus_privatisasi_danau'
                    ? 'Monopoli Danau Umum'
                    : 'Penyewa Jual Ruko'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Case Content */}
        {activeCase && (
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
            <div className="space-y-2 border-b border-stone-200 pb-3">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">Skenario Lapangan:</span>
              <p className="text-sm font-semibold text-stone-900 leading-relaxed bg-white p-3.5 rounded-lg border border-stone-200">
                "{activeCase.scenario}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-stone-500 uppercase">Keputusan Syar'i:</span>
              <span
                className={`px-3 py-1 rounded text-xs font-bold border self-start sm:self-auto ${
                  activeCase.status === 'sah_milik'
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-rose-100 text-rose-800 border-rose-300'
                }`}
              >
                {activeCase.statusLabel}
              </span>
            </div>

            <div className="space-y-1.5 bg-white p-3.5 rounded-lg border border-stone-200">
              <strong className="text-stone-900 block text-xs">Penjelasan & Analisis Fiqih:</strong>
              <p className="text-stone-700 leading-relaxed text-[11px]">{activeCase.penjelasanFiqih}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2.5 bg-emerald-50 rounded border border-emerald-200 text-emerald-950">
                <strong>Kaidah Ushul: </strong> {activeCase.kaidahUshul}
              </div>
              <div className="p-2.5 bg-sky-50 rounded border border-sky-200 text-sky-950">
                <strong>Dalil Nash: </strong> {activeCase.dalil}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hak Irtifaq (Hak Akses Bertetangga) */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-3">
        <h3 className="font-bold text-stone-900 text-base font-serif flex items-center gap-2">
          <span>Kaidah Hak Irtifāq (Hak Guna Bersama Antar-Tetangga)</span>
        </h3>
        <p className="text-xs text-stone-600 leading-relaxed">
          Meskipun seseorang memiliki tanah secara sempurna, syariat membatasi kebebasannya dengan hak tetangga (*Haqqul Irtifāq*):
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
            <strong className="text-stone-900 block text-[11px]">1. Haqqul Murūr (Hak Lewat Jalan)</strong>
            <p className="text-stone-600 text-[11px]">
              Dilarang menutup jalan keluar satu-satunya bagi rumah tetangga di belakangnya.
            </p>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
            <strong className="text-stone-900 block text-[11px]">2. Haqqus Syurb & Majrā (Hak Air)</strong>
            <p className="text-stone-600 text-[11px]">
              Hak mengalirkan air irigasi melewati parit tanah orang lain demi menyelamatkan tanaman yang kekeringan.
            </p>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
            <strong className="text-stone-900 block text-[11px]">3. Haqqul Jiwār (Larangan Menimbulkan Bahaya)</strong>
            <p className="text-stone-600 text-[11px]">
              Kaidah: <em>"Lā dharara wa lā dhirāra"</em> (Tidak boleh menimbulkan bahaya atau membalas dengan bahaya).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
