import React from 'react';
import { ALAT_BUKTI_LIST } from '../../data/peradilanData';
import { ShieldCheck, AlertOctagon, Scale, BookOpen, UserCheck, Flame, Layers } from 'lucide-react';

export function HakimAdabGuide() {
  const syaratHakim = [
    { title: '1. Beragama Islam', desc: 'Hakim syariah wajib seorang muslim karena bertugas menerapkan hukum syariat Allah SWT.' },
    { title: '2. Baligh & Berakal Sehat', desc: 'Memiliki kecakapan hukum penuh (*Ahliyyatul Ada\'*). Anak kecil dan orang hilang akal tidak sah memutus perkara.' },
    { title: '3. Merdeka (Bukan Budak)', desc: 'Memiliki kebebasan penuh dalam bertindak dan mengambil keputusan tanpa intervensi majikan.' },
    { title: '4. Adil & Berintegritas Moral Tinggi', desc: 'Bukan orang fasik, menjauhi dosa-dosa besar, menjaga muru\'ah (kehormatan diri), dan bertakwa.' },
    { title: '5. Berkualifikasi Mujtahid', desc: 'Menguasai nash Al-Qur\'an, Sunnah, Ijma\', Ushul Fiqih, kaidah istinbath hukum, dan kefasihan bahasa Arab.' },
    { title: '6. Sehat Pendengaran, Penglihatan & Lisan', desc: 'Mampu mendengar keterangan saksi secara jernih, melihat para pihak yang bersengketa, dan mengucapkan vonis dengan tegas.' },
  ];

  const laranganHakim = [
    {
      title: 'Memutus Saat Marah (Ghadhbān)',
      desc: 'Nabi SAW melarang keras memutus perkara saat emosi marah meluap (HR. Bukhari & Muslim) karena mengaburkan objektivitas nalar.',
    },
    {
      title: 'Kondisi Fisik Ekstrim (Lapar/Kantuk/Sakit)',
      desc: 'Dianjurkan menunda sidang jika hakim sedang sangat lapar, sangat haus, mengantuk berat, atau menahan hajat buang air.',
    },
    {
      title: 'Menerima Suap (Risywah) & Hadiah',
      desc: 'Rasulullah SAW melaknat penyuap dan penerima suap (HR. Ahmad). Hadiah dari pihak yang berperkara adalah bentuk suap terselubung.',
    },
    {
      title: 'Bersikap Memihak di Ruang Sidang',
      desc: 'Dilarang berbisik, menyapa akrab salah satu pihak, atau membedakan kenyamanan tempat duduk di hadapan majelis hakim.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Scale className="w-4 h-4 text-rose-700" />
          <span>Panduan Fiqih Hakim & Etika Persidangan Syariah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kualifikasi Hakim, Adab Sidang Risalah Umar, & Hierarki 4 Alat Bukti
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Kredibilitas peradilan Islam bertumpu pada integritas hakim yang bersih dan kepatuhan terhadap hukum acara pembuktian.
          Pelajari syarat kelayakan hakim, etika ruang sidang menurut surat Khalifah Umar bin Khattab, dan 4 jenis alat bukti sah.
        </p>
      </div>

      {/* Risalah Peradilan Khalifah Umar bin Khattab */}
      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3 text-xs text-stone-800">
        <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
          <BookOpen className="w-5 h-5 text-emerald-800" />
          <span>Risālah Al-Qadhā': Piagam Konstitusi Etika Peradilan Umar bin Khattab</span>
        </div>
        <p className="text-stone-700 text-[11px] leading-relaxed">
          Surat instruksi dari Khalifah Umar bin Khattab radhiyallahu 'anhu kepada Hakim Abu Musa Al-Asy'ari adalah salah satu dokumen hukum acara teragung sepanjang sejarah peradaban manusia:
        </p>
        <div className="p-3.5 bg-white rounded-lg border border-stone-200 space-y-2 text-[11px] text-stone-700 italic leading-relaxed">
          <p>
            "Samakanlah kedudukan manusia di hadapanmu: dalam pandangan wajahmu, dalam majelis tempat dudukmu, dan dalam keadilan putusanmu; sehingga orang yang berpangkat tidak tamak mengharapkan kecuranganmu, dan orang yang lemah tidak putus asa dari keadilanmu."
          </p>
          <p>
            "Bukti saksi (*Al-Bayyinah*) wajib atas penggugat yang menuntut hak, dan sumpah (*Al-Yamīn*) wajib atas orang yang mengingkari tuduhan."
          </p>
          <p>
            "Perdamaian (*Ash-Shulhu*) adalah boleh di antara kaum muslimin, kecuali perdamaian yang menghalalkan yang haram atau mengharamkan yang halal."
          </p>
        </div>
      </div>

      {/* Syarat Hakim vs Larangan Hakim */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Syarat Hakim */}
        <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
          <strong className="text-stone-900 block text-xs font-bold border-b border-stone-100 pb-2 flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-emerald-700" />
            <span>Syarat Kelayakan Pengangkatan Hakim:</span>
          </strong>
          <div className="space-y-2">
            {syaratHakim.map((s, idx) => (
              <div key={idx} className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong className="text-stone-900 block text-[11px]">{s.title}</strong>
                <p className="text-stone-600 text-[10px] leading-relaxed mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Larangan Etika Hakim */}
        <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
          <strong className="text-rose-950 block text-xs font-bold border-b border-stone-100 pb-2 flex items-center gap-1.5">
            <AlertOctagon className="w-4 h-4 text-rose-700" />
            <span>Larangan Etika Saat Mengadili Perkara:</span>
          </strong>
          <div className="space-y-2">
            {laranganHakim.map((l, idx) => (
              <div key={idx} className="p-2.5 bg-rose-50/60 rounded border border-rose-200">
                <strong className="text-rose-950 block text-[11px] font-bold">{l.title}</strong>
                <p className="text-stone-700 text-[10px] leading-relaxed mt-0.5">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hierarki 4 Alat Bukti Syar'i */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>Turūqul Itsbāt (Hukum Acara Pembuktian)</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Hierarki Empat Alat Bukti yang Sah di Pengadilan Syariah
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Kekuatan pembuktian dalam menetapkan hak atau menjatuhkan sanksi hukum:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {ALAT_BUKTI_LIST.map((b) => (
            <div key={b.id} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <strong className="text-stone-900 font-bold text-xs">{b.name}</strong>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                    Tingkat {b.tingkatan}
                  </span>
                </div>
                <span className="text-[10px] font-arabic text-rose-800 block">{b.nameArabic}</span>
                <p className="text-stone-700 text-[11px] leading-relaxed">{b.definition}</p>
                <div className="p-2 bg-white rounded border border-stone-200 space-y-1 text-[10px]">
                  <p><strong>Syarat Keabsahan:</strong> {b.syaratSah}</p>
                  <p><strong>Penerapan:</strong> {b.penerapanPerkara}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200 font-mono text-[10px] text-stone-500">
                <strong>Dalil:</strong> {b.dalil}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
