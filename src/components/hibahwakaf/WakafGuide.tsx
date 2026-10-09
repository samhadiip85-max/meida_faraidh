import React, { useState } from 'react';
import { RUKUN_WAKAF } from '../../data/hibahWakafData';
import { Landmark, CheckCircle2, ShieldCheck, Coins, RefreshCw, AlertCircle, Building, Users } from 'lucide-react';

export function WakafGuide() {
  const [selectedRukunIdx, setSelectedRukunIdx] = useState<number>(0);
  const activeRukun = RUKUN_WAKAF[selectedRukunIdx];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Landmark className="w-4 h-4 text-emerald-700" />
          <span>Panduan Fiqih Wakaf (Kitāb Al-Waqf)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Rukun Wakaf, Macam Wakaf, Cash Waqf (Wakaf Uang), & Fiqih Istibdal
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Wakaf adalah menahan pokok harta benda yang tahan lama (*Tahsīsul Ashli*) dan mengalirkan hasil serta manfaatnya (*Tasbīlus Tsamarah*)
          di jalan Allah SWT. Begitu ikrar wakaf diucapkan, hak milik manusia lepas beralih menjadi milik Allah SWT dan tidak dapat dibatalkan selamanya.
        </p>
      </div>

      {/* 5 Rukun Wakaf Interaktif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Lima Rukun Pokok Wakaf</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Rukun & Syarat Keabsahan Wakaf
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih rukun di bawah untuk menelaah syarat pewakaf, harta benda wakaf, nazhir, dan ikrar wakaf:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {RUKUN_WAKAF.map((r, idx) => {
            const isSelected = selectedRukunIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedRukunIdx(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] block font-arabic opacity-85">{r.nameArabic}</span>
                <span className="text-xs font-bold block mt-0.5 leading-snug">{r.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Rukun Card */}
        {activeRukun && (
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
            <div className="border-b border-stone-200 pb-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span>{activeRukun.name}</span>
                <span className="text-xs font-arabic text-emerald-800 font-normal">
                  ({activeRukun.nameArabic})
                </span>
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">{activeRukun.description}</p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] uppercase font-bold text-stone-700 block">
                Syarat-Syarat Keabsahan:
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                {activeRukun.syarat.map((syarat, sIdx) => (
                  <li key={sIdx} className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2 text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-[11px]">{syarat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* 2 Jenis Wakaf: Khairi vs Dzurri */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
            Klasifikasi Berdasarkan Penerima Manfaat
          </span>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Wakaf Khairi (Publik) vs Wakaf Dzurri (Keluarga)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
              <Building className="w-4 h-4 text-emerald-800" />
              <span>1. Wakaf Khairī (الوَقْف الخَيْرِي)</span>
            </div>
            <p className="text-stone-700 text-[11px] leading-relaxed">
              Wakaf yang sejak awal ditujukan secara tegas untuk <strong>kemaslahatan umum dan kebajikan masyarakat luas</strong>,
              seperti pembangunan masjid, pondok pesantren, madrasah, rumah sakit umum, jembatan, dan santunan kaum fakir miskin.
            </p>
          </div>

          <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-200 space-y-2">
            <div className="flex items-center gap-2 text-sky-950 font-bold text-sm">
              <Users className="w-4 h-4 text-sky-800" />
              <span>2. Wakaf Dzurrī / Ahlī (الوَقْف الذُّرِّي / الأَهْلِي)</span>
            </div>
            <p className="text-stone-700 text-[11px] leading-relaxed">
              Wakaf yang ditujukan khusus untuk <strong>kesejahteraan keluarga dan anak keturunan pewakaf</strong> guna menjamin masa depan mereka agar tidak jatuh miskin atau terlantar.
              Jika seluruh garis keturunan telah punah, maka manfaat wakaf beralih otomatis kepada fakir miskin (*Khairi*).
            </p>
          </div>
        </div>
      </div>

      {/* Fiqih Wakaf Uang (Cash Waqf) & Wakaf Produktif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <Coins className="w-4 h-4 text-emerald-700" />
          <span>Inovasi Filantropi Kontemporer</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Fiqih Wakaf Uang (Cash Waqf) & Wakaf Produktif
        </h2>

        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3 text-xs text-stone-700 leading-relaxed">
          <p>
            Dahulu sebagian ulama klasik mengira wakaf uang tidak sah karena uang logam dianggap habis saat dibelanjakan.
            Namun <strong>Komisi Fatwa Majelis Ulama Indonesia (MUI) pada 11 Mei 2002</strong> dan mayoritas ulama dunia (Mazhab Hanafi, sebagian Syafi'i, dan Hanbali)
            memfatwakan bahwa <strong>Wakaf Uang hukumnya JAWAZ (BOLEH dan SAH)</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-[11px]">
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <strong className="text-stone-900 block font-bold">1. Keabadian Pokok Dana</strong>
              <p className="text-stone-600">
                Pokok dana wakaf uang dihimpun dalam instrumen Dana Abadi (*Endowment Fund*) yang TIDAK BOLEH berkurang sepeser pun.
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <strong className="text-stone-900 block font-bold">2. Dikelola Produktif</strong>
              <p className="text-stone-600">
                Nazhir menginvestasikan dana pada portofolio syariah aman (seperti Sukuk Wakaf / CWLS, deposito syariah, atau bisnis riil).
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <strong className="text-stone-900 block font-bold">3. Imbal Hasil Disalurkan</strong>
              <p className="text-stone-600">
                Keuntungan deviden / imbal hasil investasi disalurkan terus-menerus untuk beasiswa anak dhuafa, layanan kesehatan gratis, dll.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hukum Tukar Guling Harta Wakaf (Ruislag / Istibdal) */}
      <div className="p-5 bg-amber-50/70 rounded-xl border border-amber-300 space-y-3 text-xs text-amber-950">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <RefreshCw className="w-5 h-5 text-amber-800" />
          <span>Kajian Fiqih Tukar Guling Harta Wakaf (*Istibdāl / Ruislag*)</span>
        </div>
        <p className="leading-relaxed">
          Bagaimanakah hukumnya jika sebidang tanah wakaf masjid terkena pembebasan jalan tol negara, atau bangunan wakaf rusak parah dan tidak menghasilkan manfaat lagi?
        </p>
        <div className="bg-white p-3.5 rounded-lg border border-amber-200 space-y-1.5 text-[11px] leading-relaxed">
          <strong className="text-stone-900 block">Ketetapan Hukum Fuqaha & Regulasi Indonesia (UU No. 41/2004):</strong>
          <p className="text-stone-700">
            Tukar guling (*Istibdāl*) <strong>DIBOLEHKAN demi hajat darurat dan kemaslahatan umum</strong> (berdasarkan pendapat Mazhab Hanafi dan Hanbali) dengan syarat ketat:
          </p>
          <ul className="space-y-1 list-disc list-inside text-stone-700 text-[11px]">
            <li>Aset pengganti harus <strong>senilai atau memiliki nilai manfaat yang lebih tinggi</strong> dari aset wakaf semula.</li>
            <li>Lokasi pengganti strategis dan peruntukannya tetap sama sesuai ikrar wakif (misal masjid diganti masjid yang lebih luas).</li>
            <li>Mendapat persetujuan tertulis dari Badan Wakaf Indonesia (BWI) dan Kementerian Agama demi mencegah penyelewengan aset umat.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
