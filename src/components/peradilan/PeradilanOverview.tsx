import React from 'react';
import { Scale, ShieldCheck, AlertOctagon, BookOpen, Layers, Award, Flame, CheckCircle2 } from 'lucide-react';
import { RUKUN_QADHA, TIGA_GOLONGAN_HAKIM } from '../../data/peradilanData';

export function PeradilanOverview() {
  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Scale className="w-4 h-4 text-rose-700" />
          <span>BAB 18: Fiqih Al-Qadhā' (Lembaga Peradilan & Hukum Acara Islam)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hakekat Peradilan, Bahaya & Keutamaan Hakim, serta 5 Rukun Persidangan
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam fiqih Islam, <em>Al-Qadhā'</em> (القَضَاء) adalah lembaga pemutus perkara sengketa hukum di antara manusia berdasarkan syariat Allah SWT.
          Menegakkan peradilan hukum yang independen dan adil merupakan kewajiban <strong>Fardhu Kifāyah</strong> bagi umat dan negara demi menjamin tegaknya keadilan sosial serta melindungi hak-hak orang yang terzalimi.
        </p>
      </div>

      {/* Hadits Peringatan Tiga Golongan Hakim */}
      <div className="p-5 bg-rose-50/70 rounded-xl border border-rose-300 space-y-3 text-xs text-rose-950">
        <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
          <Flame className="w-5 h-5 text-rose-700" />
          <span>Peringatan Rasulullah SAW: Tiga Golongan Hakim (Hanya 1 di Surga, 2 di Neraka)</span>
        </div>
        <p className="leading-relaxed">
          Profesi hakim memikul amanah yang teramat berat di hadapan Allah SWT. Rasulullah SAW bersabda dalam hadits riwayat Buraidah radhiyallahu 'anhu:
        </p>
        <div className="bg-white p-3 rounded-lg border border-rose-200 font-arabic text-sm text-stone-900 leading-loose">
          «القُضَاةُ ثَلَاثَةٌ: وَاحِدٌ فِي الجَنَّةِ، وَاثْنَانِ فِي النَّارِ...»
        </div>
        <p className="text-stone-700 text-[11px] leading-relaxed">
          <em>"Hakim itu ada tiga golongan: satu berada di surga dan dua berada di neraka. Hakim yang di surga adalah yang mengetahui kebenaran lalu memutuskan perkara dengannya. Adapun hakim yang mengetahui kebenaran lalu berbuat curang/zalim dalam vonisnya berada di neraka, dan hakim yang memutuskan perkara manusia di atas kebodohan tanpa ilmu juga berada di neraka."</em> (HR. Abu Dawud no. 3573 & Tirmidzi no. 1322).
        </p>

        {/* 3 Golongan Hakim Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
          {TIGA_GOLONGAN_HAKIM.map((h, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg border text-[11px] space-y-1 ${
                h.color === 'emerald'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-white border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-center justify-between font-bold">
                <span className="text-xs">{h.status}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                  h.color === 'emerald' ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'
                }`}>
                  {h.status === 'SURGA' ? 'Al-Jannah' : 'An-Nar'}
                </span>
              </div>
              <p className="text-[10px] leading-relaxed opacity-90">{h.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pahala Ijtihad Hakim */}
      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2 text-xs text-stone-800">
        <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
          <Award className="w-4 h-4 text-emerald-700" />
          <span>Keutamaan Ijtihad Hakim yang Bersungguh-sungguh (HR. Bukhari & Muslim)</span>
        </div>
        <p className="text-stone-700 text-[11px] leading-relaxed">
          Rasulullah SAW bersabda: <em>"Apabila seorang hakim berijtihad lalu ijtihadnya benar, maka baginya dua pahala (pahala ijtihad dan pahala kebenaran). Dan apabila ia berijtihad lalu ijtihadnya keliru, maka baginya tetap satu pahala (pahala kesungguhan berijtihad)."</em> (HR. Bukhari no. 7352 & Muslim no. 1716).
          Syariat mengapresiasi integritas hakim yang telah berusaha maksimal mencari kebenaran hukum.
        </p>
      </div>

      {/* Lima Rukun Peradilan Islam */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>Arkānul Qadhā'</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Lima Rukun Pokok Peradilan Islam
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Sebuah persidangan syariah dinyatakan sah apabila memenuhi 5 unsur rukun di bawah ini:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          {RUKUN_QADHA.map((r) => (
            <div key={r.id} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-arabic text-rose-800 font-bold block">{r.nameArabic}</span>
                <strong className="text-stone-900 font-bold text-xs block mt-0.5">{r.name}</strong>
                <span className="text-[10px] font-semibold text-emerald-800 block mt-0.5">{r.role}</span>
                <p className="text-stone-600 text-[10px] leading-relaxed mt-1">{r.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
