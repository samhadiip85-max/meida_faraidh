import React, { useState } from 'react';
import { RUKUN_JUAL_BELI } from '../../data/jualbeliData';
import { ShoppingBag, ShieldCheck, CheckCircle2, AlertOctagon, Sparkles, AlertTriangle, ArrowRight, BookOpen, Scale } from 'lucide-react';

export function JualBeliOverview() {
  const [selectedRukunIdx, setSelectedRukunIdx] = useState<number>(0);
  const activeRukun = RUKUN_JUAL_BELI[selectedRukunIdx];

  const prohibitedTrades = [
    {
      title: 'Bai\'ul Gharar (Ketidakpastian Spekulatif)',
      desc: 'Menjual barang yang tidak jelas wujudnya atau tidak pasti serah terimanya, seperti janin hewan dalam kandungan (Malaqih), ikan liar di danau, atau burung di angkasa (HR. Muslim).',
      status: 'Batal & Haram',
    },
    {
      title: 'Bai\'un Najasy (Rekayasa Tawaran Palsu)',
      desc: 'Seseorang yang berpura-pura menawar barang dengan harga tinggi untuk memancing dan menipu pembeli lain agar mau membeli dengan harga mahal (HR. Bukhari).',
      status: 'Haram (Dosa Penipuan)',
    },
    {
      title: 'Al-Ihtikār (Penimbunan Barang Pokok)',
      desc: 'Menimbun barang kebutuhan pokok masyarakat saat terjadi kelangkaan demi meraup untung berlipat ketika harga melambung tinggi (HR. Muslim: "Lā yahtakiru illā khāthi\'").',
      status: 'Haram (Dosa Besar)',
    },
    {
      title: 'Talaqqī Ar-Rukbān (Mencegat Pedagang Luar)',
      desc: 'Mencegat pedagang dari desa sebelum mereka masuk ke pasar dan sebelum mengetahui harga riil pasar untuk memborong barangnya di bawah harga wajar (HR. Bukhari).',
      status: 'Terlarang (Ada Hak Khiyar)',
    },
    {
      title: 'Menjual Barang Haram & Najis',
      desc: 'Menjual khamr, bangkai, babi, anjing, berhala, rokok, atau makanan berbahan darah beku/marus (HR. Bukhari: "Inna Allāha wa rasūlahu harrama bai\'al khamri...").',
      status: 'Batal Mutlak & Uang Haram',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <ShoppingBag className="w-4 h-4 text-emerald-700" />
          <span>BAB 12: Fiqih Jual Beli (Kitāb Al-Buyū')</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Rukun, Syarat Sah, Praktik Mu'athah Modern, & Transaksi Terlarang
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Jual beli (*Al-Bai'*) menurut syariat adalah pertukaran harta dengan harta secara sukarela (*'an tarādh*)
          untuk mengalihkan kepemilikan materi (*'Ain*) dan manfaat secara permanen.
          Allah SWT menghalalkan jual beli dan mengharamkan riba (QS. Al-Baqarah: 275).
        </p>
      </div>

      {/* 3 Rukun Jual Beli Interaktif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Tiga Rukun Utama Keabsahan Akad</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            3 Rukun Jual Beli & Syarat Mutlaknya
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Klik rukun di bawah untuk menelaah syarat subjek pihak, objek barang, serta tata cara ijab-qabul:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {RUKUN_JUAL_BELI.map((rukun, idx) => {
            const isSelected = selectedRukunIdx === idx;
            return (
              <button
                key={rukun.id}
                type="button"
                onClick={() => setSelectedRukunIdx(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] block font-arabic opacity-85">{rukun.nameArabic}</span>
                <span className="text-xs font-bold block mt-0.5 leading-snug">{rukun.name}</span>
                <span className="text-[10px] block opacity-75 mt-1">{rukun.syarat.length} Syarat Fiqih</span>
              </button>
            );
          })}
        </div>

        {/* Selected Rukun Detail */}
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
                Syarat-Syarat Fiqih yang Wajib Dipenuhi:
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

            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 font-mono">
              <strong className="text-emerald-950">Landasan Syar'i: </strong>
              {activeRukun.dalil}
            </div>
          </div>
        )}
      </div>

      {/* Praktik Modern: Bai'ul Mu'athah di Supermarket & E-Commerce */}
      <div className="p-5 bg-emerald-50/70 rounded-xl border border-emerald-300 space-y-3 text-xs text-stone-800">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
          <Scale className="w-5 h-5 text-emerald-800" />
          <span>Fatwa Jual Beli Tanpa Ijab Lisan (Bai'ul Mu'āthāh) di Minimarket & E-Commerce</span>
        </div>
        <p className="leading-relaxed text-stone-700 text-[11px]">
          Bagaimanakah hukum belanja di supermarket, vending machine, atau klik checkout pada marketplace tanpa melafalkan kata <em>"Saya jual"</em> dan <em>"Saya beli"</em>?
        </p>
        <div className="bg-white p-3.5 rounded-lg border border-emerald-200 space-y-1.5 text-[11px] leading-relaxed">
          <strong className="text-emerald-950 block">Keputusan Fiqih Kontemporer & Madzhab:</strong>
          <p className="text-stone-700">
            Hukumnya adalah <strong>SAH DAN HALAL</strong> menurut Mazhab Hanafi, Maliki, Hanbali, serta fatwa mu'tamad Imam An-Nawawi (ulama besar Syafi'iyah).
            Illat hukumnya: Prinsip dasar sahnya akad adalah <em>At-Tarādhī</em> (saling rela) berdasarkan QS. An-Nisa: 29. Kerelaan hati tersebut telah terwujud secara nyata melalui tindakan mengambil barang berlabel harga dan membayarnya di kasir atau menyelesaikan pembayaran di gerbang online.
          </p>
        </div>
      </div>

      {/* Katalog 5 Praktik Jual Beli Terlarang / Rusak */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <AlertOctagon className="w-4 h-4 text-rose-700" />
            <span>Katalog Transaksi Rusak (Buyū' Fāsidah wa Bāthilah)</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            5 Bentuk Jual Beli yang Diharamkan oleh Syariat
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Syariat melarang jual beli yang mengandung unsur zalim, ketidakpastian (gharar), monopoli, dan penipuan:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {prohibitedTrades.map((trade, idx) => (
            <div key={idx} className="p-4 bg-rose-50/50 rounded-xl border border-rose-200 space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 border-b border-rose-200 pb-2">
                  <strong className="font-bold text-stone-900 text-xs">{trade.title}</strong>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-300 shrink-0">
                    {trade.status}
                  </span>
                </div>
                <p className="text-stone-700 leading-relaxed text-[11px] mt-2">{trade.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
