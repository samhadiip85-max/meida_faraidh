import React from 'react';
import { KLASIFIKASI_RUJUK, URUTAN_HADHANAH } from '../../data/perceraianData';
import { HeartCrack, HeartHandshake, CheckCircle2, AlertOctagon, Scale, BookOpen, Users, Baby } from 'lucide-react';

export function KlasifikasiThalaqGuide() {
  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <BookOpen className="w-4 h-4 text-rose-700" />
          <span>Panduan Lengkap Fiqih Klasifikasi Thalaq & Rujuk</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Thalaq Raj'i vs Ba'in, Thalaq Sunni vs Bid'i, serta Ketentuan Hak Asuh Anak
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Pahami batasan tegas antara talak yang memperbolehkan rujuk langsung tanpa akad, talak yang mewajibkan akad nikah baru,
          serta talak tiga (*Ba'in Kubrā*) yang mengharamkan rujuk sampai mantan istri menikah sah dengan pria lain.
        </p>
      </div>

      {/* 3 Kategori Dari Segi Rujuk */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <HeartCrack className="w-4 h-4 text-rose-700" />
            <span>Aqsāmut Thalāq min Haitsur Raj'ah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Klasifikasi Thalaq Berdasarkan Hak Rujuk Suami Istri
          </h2>
        </div>

        <div className="space-y-3 text-xs">
          {KLASIFIKASI_RUJUK.map((k, idx) => (
            <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="text-stone-900 font-bold text-sm">{k.title}</strong>
                <span className="text-xs font-arabic text-rose-800 font-bold">{k.nameArabic}</span>
              </div>
              <p className="text-stone-600 text-[11px] leading-relaxed">{k.deskripsi}</p>
              <div className="p-2.5 bg-white rounded-lg border border-stone-200 text-[11px] text-stone-800 space-y-1">
                <strong className="text-emerald-950 block">Status Hak Rujuk / Cara Bersatu Kembali:</strong>
                <p className="leading-relaxed">{k.statusRujuk}</p>
              </div>
              <p className="text-[10px] text-stone-500 font-mono pt-1">
                <strong>Dalil Syar'i: </strong>{k.dalil}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Komparasi Lafaz & Waktu Talak */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Segi Lafaz */}
        <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
          <strong className="text-stone-900 block text-xs font-bold border-b border-stone-100 pb-2">
            Dari Segi Lafaz Ucapan Talak:
          </strong>
          <div className="space-y-2">
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
              <strong className="text-rose-950 block text-[11px]">1. Lafaz Sharīh (Tegas & Jelas):</strong>
              <p className="text-stone-600 text-[10px] leading-relaxed">
                Kata-kata seperti: <em>"Engkau aku ceraikan"</em>, <em>"Kamu tertalak"</em>, atau <em>"Aku lepaskan ikatan nikahmu"</em>.
                <br />
                <strong>Konsekuensi:</strong> Talak LANGSUNG JATUH SEKETIKA tanpa melihat niat atau alasan batin suami.
              </p>
            </div>

            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
              <strong className="text-amber-950 block text-[11px]">2. Lafaz Kināyah (Sindiran):</strong>
              <p className="text-stone-600 text-[10px] leading-relaxed">
                Kata-kata seperti: <em>"Pulanglah ke orang tuamu"</em>, <em>"Kita selesai"</em>, atau <em>"Tinggalkan rumah ini"</em>.
                <br />
                <strong>Konsekuensi:</strong> HANYA JATUH TALAK jika saat mengucapkan suami benar-benar memiliki niat mentalak di dalam hatinya. Jika tidak ada niat, maka tidak jatuh talak.
              </p>
            </div>
          </div>
        </div>

        {/* Segi Waktu */}
        <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
          <strong className="text-stone-900 block text-xs font-bold border-b border-stone-100 pb-2">
            Dari Segi Waktu Menjatuhkan Talak:
          </strong>
          <div className="space-y-2">
            <div className="p-3 bg-emerald-50/70 rounded-lg border border-emerald-200 space-y-1">
              <strong className="text-emerald-950 block text-[11px]">1. Thalāq Sunnī (Sesuai Sunnah & Halal):</strong>
              <p className="text-stone-700 text-[10px] leading-relaxed">
                Menjatuhkan satu talak saat istri dalam kondisi <strong>SUCI dan BELUM DICAMPURI</strong> pada masa suci tersebut.
                <br />
                <strong>Hikmah:</strong> Agar masa 'iddah istri jelas dan tidak menimbulkan ketidakpastian nasab kehamilan.
              </p>
            </div>

            <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-200 space-y-1">
              <strong className="text-rose-950 block text-[11px]">2. Thalāq Bid'ī (Dilarang & Berdosa):</strong>
              <p className="text-stone-700 text-[10px] leading-relaxed">
                Menjatuhkan talak saat istri <strong>SEDANG HAID/NIFAS</strong>, atau saat suci yang <strong>SUDAH DICAMPURI</strong>, atau menjatuhkan talak 3 sekaligus.
                <br />
                <strong>Hukum:</strong> HARAM dan berdosa besar, namun menurut 4 Mazhab (Jumhur) talaknya tetap jatuh sah.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ketentuan Hak Asuh Anak (Hadhanah) */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Baby className="w-4 h-4 text-emerald-700" />
            <span>Fiqhul Hadhānah (Hak Pemeliharaan & Asuh Anak)</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Urutan Syar'i Pemegang Hak Asuh Anak Pascaperceraian
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Bila anak belum mencapai usia tamyiz (belum mandiri, &lt; 7-8 tahun), syariat menetapkan urutan prioritas pengasuhan:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          {URUTAN_HADHANAH.map((h) => (
            <div key={h.nomor} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5 flex flex-col justify-between">
              <div>
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white font-bold text-[10px] flex items-center justify-center mb-1">
                  {h.nomor}
                </span>
                <strong className="text-stone-900 font-bold text-xs block">{h.pihak}</strong>
                <p className="text-stone-600 text-[10px] leading-relaxed mt-1">{h.alasan}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-[11px] text-stone-700 space-y-1">
          <strong className="text-stone-900 block">Kaidah Pasca-Tamyiz (Usia 7-8 Tahun ke Atas):</strong>
          <p className="leading-relaxed">
            Apabila anak telah mencapai usia tamyiz (mampu membedakan yang baik dan buruk), anak diberikan hak memilih (*Al-Khiyār / Takhyīr*) antara ikut tinggal bersama ayah atau bersama ibunya (HR. Abu Dawud & Tirmidzi). Adapun <strong>biaya nafkah anak tetap wajib 100% ditanggung oleh Ayah kandung</strong> secara penuh.
          </p>
        </div>
      </div>
    </div>
  );
}
