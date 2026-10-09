import React from 'react';
import { Scroll, HeartHandshake, CheckCircle2, AlertOctagon, Scale, BookOpen, Users, Baby, ShieldCheck } from 'lucide-react';

export function PanduanWasiatGuide() {
  const syaratObjekWasiat = [
    { title: '1. Bernilai Syar\'i (Māl Mutaqawwam)', desc: 'Harta harus halal dan memiliki nilai ekonomis menurut syariat. Tidak sah mewasiatkan khamr, babi, atau barang haram.' },
    { title: '2. Milik Sah Pewasiat', desc: 'Bukan harta pinjaman, sewaan, atau harta orang lain saat wasiat dinyatakan.' },
    { title: '3. Dapat Diserahterimakan', desc: 'Tidak sah mewasiatkan ikan di laut lepas atau barang hilang yang tidak diketahui keberadaannya.' },
    { title: '4. Tidak untuk Tujuan Maksiat', desc: 'Haram dan batil wasiat untuk mendanai perjudian, perbuatan zalim, atau merugikan hak ahli waris.' },
  ];

  const sebabBatalWasiat = [
    { title: 'Pewasiat Menarik Kembali Wasiatnya (Rujū\')', desc: 'Selama pewasiat masih hidup, ia berhak membatalkan atau mengubah isi wasiatnya kapan saja.' },
    { title: 'Penerima Wasiat Meninggal Terlebih Dulu', desc: 'Bila orang yang diberi wasiat wafat sebelum pewasiat, wasiat otomatis gugur.' },
    { title: 'Penerima Wasiat Membunuh Pewasiat', desc: 'Seseorang yang membunuh pewasiat terhalang dari menerima wasiat (*Al-Qātilu lā yaritsu walā yūshā lahū*).' },
    { title: 'Harta yang Diwasiatkan Rusak / Musnah', desc: 'Bila objek harta wasiat binasa sebelum pewasiat wafat, wasiat gugur dengan sendirinya.' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <BookOpen className="w-4 h-4 text-rose-700" />
          <span>Panduan Lengkap Syarat, Wasiat Wajibah, & Pembatalan Wasiat</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Syarat Objek Wasiat, Konsep Wasiat Wajibah KHI, & Gugurnya Wasiat
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Ketahui rincian syarat keabsahan objek harta yang diwasiatkan, perlindungan anak angkat dan cucu yatim melalui Wasiat Wajibah,
          serta hal-hal yang membatalkan wasiat sebelum dieksekusi.
        </p>
      </div>

      {/* Konsep Wasiat Wajibah KHI */}
      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3 text-xs text-stone-800">
        <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
          <Baby className="w-5 h-5 text-emerald-800" />
          <span>Terobosan Fiqih Kontemporer: Konsep Wasiat Wajibah</span>
        </div>
        <p className="text-stone-700 text-[11px] leading-relaxed">
          Dalam hukum faraidh murni, anak angkat, orang tua angkat, atau cucu yang orang tuanya meninggal lebih dulu (terhalang paman/ashabah) tidak mendapatkan bagian warisan. Untuk mewujudkan keadilan sosial, para fuqaha kontemporer dan <strong>Kompilasi Hukum Islam (KHI) Pasal 209</strong> menetapkan <strong>Wasiat Wajibah</strong>:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
            <strong className="text-emerald-950 block text-[11px]">1. Anak Angkat & Orang Tua Angkat:</strong>
            <p className="text-stone-600 text-[10px] leading-relaxed">
              Mendapatkan bagian melalui wasiat wajibah sebanyak-banyaknya <strong>sepertiga (1/3)</strong> dari harta peninggalan orang tua angkat / anak angkatnya (Pasal 209 KHI).
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
            <strong className="text-rose-950 block text-[11px]">2. Cucu Pengganti (Ahli Waris Pengganti):</strong>
            <p className="text-stone-600 text-[10px] leading-relaxed">
              Cucu yang ayahnya meninggal sebelum kakeknya wafat diberikan bagian sebesar bagian ayahnya, dengan ketentuan tidak melebihi sepertiga harta peninggalan.
            </p>
          </div>
        </div>
      </div>

      {/* Syarat Objek Wasiat vs Pembatal Wasiat */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Syarat Objek Wasiat */}
        <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
          <strong className="text-stone-900 block text-xs font-bold border-b border-stone-100 pb-2 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Syarat Keabsahan Objek Harta Wasiat:</span>
          </strong>
          <div className="space-y-2">
            {syaratObjekWasiat.map((s, idx) => (
              <div key={idx} className="p-2.5 bg-stone-50 rounded border border-stone-200">
                <strong className="text-stone-900 block text-[11px]">{s.title}</strong>
                <p className="text-stone-600 text-[10px] leading-relaxed mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pembatal Wasiat */}
        <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
          <strong className="text-rose-950 block text-xs font-bold border-b border-stone-100 pb-2 flex items-center gap-1.5">
            <AlertOctagon className="w-4 h-4 text-rose-700" />
            <span>Faktor yang Membatalkan / Menggugurkan Wasiat:</span>
          </strong>
          <div className="space-y-2">
            {sebabBatalWasiat.map((b, idx) => (
              <div key={idx} className="p-2.5 bg-rose-50/60 rounded border border-rose-200">
                <strong className="text-rose-950 block text-[11px] font-bold">{b.title}</strong>
                <p className="text-stone-700 text-[10px] leading-relaxed mt-0.5">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Anjuran Menuliskan Wasiat */}
      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2 text-xs text-stone-800">
        <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Sunnah Menuliskan Surat Wasiat (HR. Bukhari & Muslim)</span>
        </div>
        <p className="text-stone-700 text-[11px] leading-relaxed">
          Rasulullah SAW bersabda: <em>"Tidak pantas bagi seorang muslim yang memiliki sesuatu yang hendak diwasiatkan bermalam selama dua malam melainkan wasiatnya telah tertulis di samping kepalanya."</em> (HR. Bukhari no. 2738 & Muslim no. 1627).
          Menuliskan wasiat utang, hak orang lain, dan pesan ketakwaan kepada anak keturunan adalah sunnah muakkadah yang menyelamatkan mayit di alam barzakh.
        </p>
      </div>
    </div>
  );
}
