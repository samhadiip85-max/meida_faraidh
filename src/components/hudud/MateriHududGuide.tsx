import React, { useState } from 'react';
import { HUDUD_LIST } from '../../data/hududData';
import { HududKind } from '../../types/hudud';
import { Shield, CheckCircle2, AlertOctagon, BookOpen, UserCheck, Flame, Scale, Scissors, Wine, Users } from 'lucide-react';

export function MateriHududGuide() {
  const [selectedId, setSelectedId] = useState<HududKind>('zina');
  const activeHudud = HUDUD_LIST.find((h) => h.id === selectedId) || HUDUD_LIST[0];

  const getIcon = (id: HududKind) => {
    switch (id) {
      case 'zina':
        return <UserCheck className="w-4 h-4 text-rose-700" />;
      case 'qadzaf':
        return <Scale className="w-4 h-4 text-rose-700" />;
      case 'sariqah':
        return <Scissors className="w-4 h-4 text-rose-700" />;
      case 'khamr':
        return <Wine className="w-4 h-4 text-rose-700" />;
      case 'bughat':
        return <Users className="w-4 h-4 text-rose-700" />;
      default:
        return <Shield className="w-4 h-4 text-rose-700" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <BookOpen className="w-4 h-4 text-rose-700" />
          <span>Ensiklopedia Lengkap Fiqih 5 Tindak Pidana Had</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hukum Zina, Qadzaf, Mencuri, Khamr, dan Bughat dalam Syariat Islam
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Pelajari secara komprehensif syarat keabsahan pembuktian pidana, rincian sanksi fisik eksekusi,
          faktor penggugur hukuman dengan syubhat, serta dalil Al-Qur'an dan As-Sunnah untuk setiap tindak pidana had.
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Pilih Materi Tindak Pidana Had
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Klik salah satu kategori had di bawah untuk menelaah detail ketetapan fiqihnya:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {HUDUD_LIST.map((item) => {
            const isSelected = selectedId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-rose-700 text-white border-rose-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] block font-arabic opacity-85">{item.nameArabic}</span>
                  {getIcon(item.id)}
                </div>
                <strong className="text-xs font-bold block mt-1 leading-snug">{item.name}</strong>
              </button>
            );
          })}
        </div>

        {/* Selected Had Detail */}
        {activeHudud && (
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-5">
            <div className="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-stone-900 text-base">{activeHudud.name}</h3>
                <span className="text-xs font-arabic text-rose-800 block mt-0.5">
                  {activeHudud.nameArabic}
                </span>
              </div>
              <span className="px-3 py-1 rounded text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300 self-start sm:self-auto">
                Hukuman Pokok Syariah
              </span>
            </div>

            {/* Definisi & Sanksi Pokok */}
            <div className="space-y-2">
              <div>
                <span className="text-[11px] uppercase font-bold text-stone-500 block">
                  Definisi Menurut Fuqaha:
                </span>
                <p className="text-stone-800 text-xs leading-relaxed bg-white p-3.5 rounded-lg border border-stone-200 mt-1">
                  {activeHudud.definition}
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase font-bold text-rose-900 block">
                  Bentuk Sanksi Hukuman Syariat:
                </span>
                <p className="text-rose-950 font-medium text-xs leading-relaxed bg-rose-100/70 p-3.5 rounded-lg border border-rose-200 mt-1">
                  {activeHudud.hukumanSyariat}
                </p>
              </div>
            </div>

            {/* Syarat Penjatuhan vs Faktor Penggugur (Syubhat) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Syarat Penjatuhan */}
              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                <strong className="text-stone-900 block text-xs font-bold border-b border-stone-100 pb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Syarat Ketat Penjatuhan Had:</span>
                </strong>
                <ul className="space-y-1.5 text-stone-600 text-[11px]">
                  {activeHudud.syaratPenjatuhan.map((s, idx) => (
                    <li key={idx} className="leading-relaxed flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Faktor Penggugur Syubhat */}
              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                <strong className="text-rose-950 block text-xs font-bold border-b border-stone-100 pb-1.5 flex items-center gap-1.5">
                  <AlertOctagon className="w-4 h-4 text-rose-600" />
                  <span>Faktor Penggugur Had (Syubhat):</span>
                </strong>
                <ul className="space-y-1.5 text-stone-600 text-[11px]">
                  {activeHudud.faktorPenggugur.map((f, idx) => (
                    <li key={idx} className="leading-relaxed flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dalil */}
            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 font-mono">
              <strong className="text-rose-950">Landasan Syar'i (Nash Al-Qur'an / Hadits): </strong>
              {activeHudud.dalil}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
