import React, { useState } from 'react';
import { RUKUN_HIBAH } from '../../data/hibahWakafData';
import { Gift, HeartHandshake, CheckCircle2, AlertOctagon, HelpCircle, ArrowRight, ShieldCheck, Scale, Users } from 'lucide-react';

export function HibahGuide() {
  const [selectedRukunIdx, setSelectedRukunIdx] = useState<number>(0);
  const activeRukun = RUKUN_HIBAH[selectedRukunIdx];

  const typesOfGiving = [
    {
      title: 'Al-Hibah (الهِبَة)',
      target: 'Siapa saja (umum)',
      motive: 'Tanda kasih sayang atau tolong-menolong murni tanpa imbalan harta',
      status: 'Pemberian sukarela semasa hidup',
    },
    {
      title: 'Ash-Shadaqah (الصَّدَقَة)',
      target: 'Fakir, miskin, dan dhuafa',
      motive: 'Semata-mata mengharapkan pahala akhirat dari Allah SWT',
      status: 'Bernilai ibadah sosial utama',
    },
    {
      title: 'Al-Hadiyyah (الهَدِيَّة)',
      target: 'Kawan, kerabat, orang terhormat',
      motive: 'Memuliakan (*Ikrām*) dan mempererat tali persaudaraan cinta',
      status: 'Sunnah muakkadah ("Tahāddū tahābbū")',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Gift className="w-4 h-4 text-emerald-700" />
          <span>Panduan Lengkap Fiqih Hibah (Ahkām Al-Hibah)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Rukun Hibah, Serah Terima (Qabdh), Hukum Rujuk, & Keadilan Antar-Anak
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Hibah menurut syariat adalah akad pemindahan kepemilikan suatu harta benda secara cuma-cuma tanpa mengharapkan imbalan balik (*'iwadh*),
          yang dilakukan semasa hidup pemberi secara sukarela (*Tabarru'*).
          Pelajari rukun sah, kedudukan serah terima fisik (*Qabdh*), serta batas tegas hukum menarik kembali hibah.
        </p>
      </div>

      {/* 3 Bentuk Pemberian: Hibah, Shadaqah, Hadiah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
            Diferensiasi Istilah Fiqih
          </span>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Perbedaan Hibah, Sedekah, dan Hadiah
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {typesOfGiving.map((t, idx) => (
            <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <strong className="text-emerald-950 font-bold text-sm block">{t.title}</strong>
              <div className="space-y-1 text-stone-600 text-[11px]">
                <p><strong>Sasaran:</strong> {t.target}</p>
                <p><strong>Motivasi:</strong> {t.motive}</p>
                <p className="text-emerald-800 font-semibold">{t.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Rukun Hibah Interaktif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Lima Rukun Keabsahan Hibah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Rukun & Syarat Sah Hibah dalam Madzhab Syafi'i
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Klik rukun di bawah untuk melihat rincian syarat dan fungsi krusial serah terima fisik (*Al-Qabdh*):
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {RUKUN_HIBAH.map((r, idx) => {
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

      {/* Hukum Menarik Kembali Hibah (Ruju' fil Hibah) */}
      <div className="p-5 bg-rose-50/70 rounded-xl border border-rose-300 space-y-3 text-xs text-rose-950">
        <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
          <AlertOctagon className="w-5 h-5 text-rose-700" />
          <span>Hukum Menarik Kembali Hibah (*Rujū' fil-Hibah*)</span>
        </div>
        <p className="leading-relaxed">
          Dalam fiqih Islam, <strong>HARAM HUKUMNYA</strong> menarik kembali barang yang telah dihibahkan dan telah diserahterimakan secara sah kepada orang lain.
          Rasulullah SAW bersabda mengibaratkan orang yang menarik kembali hibahnya:
        </p>
        <div className="bg-white p-3 rounded-lg border border-rose-200 font-arabic text-sm text-stone-800">
          «العَائِدُ فِي هِبَتِهِ كَالعَائِدِ فِي قَيْئِهِ»
        </div>
        <p className="text-stone-700 text-[11px] leading-relaxed">
          <em>"Orang yang menarik kembali hibahnya laksana anjing yang menelan kembali muntahannya sendiri."</em> (HR. Bukhari no. 2589 & Muslim no. 1622).
        </p>
        <div className="p-3 bg-amber-50 rounded-lg border border-amber-300 text-amber-950 text-[11px] space-y-1">
          <strong className="block font-bold">Pengecualian Mutlak: Hak Orang Tua Kepada Anak Kandung</strong>
          <p className="leading-relaxed">
            Satu-satunya pihak yang dibolehkan secara syar'i menarik kembali hibahnya adalah <strong>orang tua (ayah, ibu, atau kakek) kepada anak kandungnya sendiri</strong>.
            Nabi SAW bersabda: <em>"Tidak halal bagi seseorang memberikan suatu pemberian kemudian menariknya kembali, kecuali seorang ayah terhadap apa yang ia berikan kepada anaknya."</em> (HR. Abu Dawud no. 3539 & Tirmidzi).
            Hikmahnya: Demi menjaga keadilan antar-anak atau mendidik anak yang durhaka/boros.
          </p>
        </div>
      </div>

      {/* Keadilan Hibah Antar-Anak: Hadits Nu'man bin Basyir */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <Scale className="w-4 h-4 text-emerald-700" />
          <span>Keadilan dalam Menghibahkan Harta Kepada Anak</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Pelajaran Berharga dari Kisah Nu'man bin Basyir radhiyallahu 'anhu
        </h2>

        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3 text-xs text-stone-700 leading-relaxed">
          <p>
            Sahabat Basyir bin Sa'ad mendatangi Rasulullah SAW untuk meminta beliau menjadi saksi atas sebidang kebun yang ingin ia hibahkan khusus hanya kepada satu anaknya, yaitu Nu'man.
            Istri Basyir (Amrah binti Rawahah) berkata: <em>"Aku tidak rela sebelum engkau meminta kesaksian Rasulullah SAW."</em>
          </p>
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 space-y-1.5 text-[11px]">
            <strong className="text-emerald-950 block">Dialog dengan Rasulullah SAW:</strong>
            <p>Nabi SAW bertanya: <em>"Apakah engkau memberikan hal yang sama kepada seluruh anak-anakmu yang lain?"</em></p>
            <p>Basyir menjawab: <em>"Tidak, ya Rasulullah."</em></p>
            <p className="text-emerald-900 font-bold">
              Maka Rasulullah SAW menolak dengan tegas: <em>"Bertakwalah kamu kepada Allah dan berbuat adillah di antara anak-anakmu! Jangan persaksikan kepadaku, karena sesungguhnya aku tidak sudi menjadi saksi atas suatu kezaliman (jūr)!"</em> (HR. Bukhari no. 2587 & Muslim no. 1623).
            </p>
          </div>
          <p className="text-[11px]">
            <strong>Fatwa Ulama:</strong> Orang tua dilarang membeda-bedakan hibah antar-anak tanpa alasan syar'i (seperti anak yang sakit parah atau memiliki kebutuhan khusus), karena pilih kasih (*favoritisme*) memicu kebencian, iri hati, dan putusnya tali silaturahmi persaudaraan.
          </p>
        </div>
      </div>
    </div>
  );
}
