import React, { useState } from 'react';
import { Shield, ShieldAlert, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeirHijabNode {
  id: string;
  nameIndo: string;
  nameArabic: string;
  category: 'furu' | 'ushul' | 'hawasyi' | 'spouse';
  neverMahjub: boolean;
  blockedBy: string[];
  blocksOthers: string[];
  nuqshanNote?: string;
}

const HIJAB_NODES: HeirHijabNode[] = [
  {
    id: 'husband',
    nameIndo: 'Suami',
    nameArabic: 'الزوج',
    category: 'spouse',
    neverMahjub: true,
    blockedBy: [],
    blocksOthers: [],
    nuqshanNote: 'Mengalami Hijab Nuqshan: Bagian turun dari 1/2 menjadi 1/4 jika istri memiliki keturunan.',
  },
  {
    id: 'wife',
    nameIndo: 'Istri',
    nameArabic: 'الزوجة',
    category: 'spouse',
    neverMahjub: true,
    blockedBy: [],
    blocksOthers: [],
    nuqshanNote: 'Mengalami Hijab Nuqshan: Bagian turun dari 1/4 menjadi 1/8 jika suami memiliki keturunan.',
  },
  {
    id: 'son',
    nameIndo: 'Anak Laki-laki',
    nameArabic: 'الابن',
    category: 'furu',
    neverMahjub: true,
    blockedBy: [],
    blocksOthers: [
      'Cucu Laki-laki',
      'Cucu Perempuan',
      'Saudara Kandung Laki/Perempuan',
      'Saudara Seayah Laki/Perempuan',
      'Saudara Seibu',
      'Keponakan',
      'Paman',
    ],
  },
  {
    id: 'daughter',
    nameIndo: 'Anak Perempuan',
    nameArabic: 'البنت',
    category: 'furu',
    neverMahjub: true,
    blockedBy: [],
    blocksOthers: ['Saudara/i Seibu', 'Cucu Perempuan (jika 2+ anak perempuan tanpa cucu laki-laki)'],
    nuqshanNote: 'Bila bersama anak laki-laki, berubah dari Ashabul Furudh menjadi Ashabah bil Ghair (2:1).',
  },
  {
    id: 'father',
    nameIndo: 'Ayah',
    nameArabic: 'الأب',
    category: 'ushul',
    neverMahjub: true,
    blockedBy: [],
    blocksOthers: [
      'Kakek Sahih',
      'Nenek dari Ayah',
      'Seluruh Saudara/i (Kandung, Seayah, Seibu)',
      'Keponakan',
      'Paman',
    ],
    nuqshanNote: 'Mengalami penyesuaian dari Ashabah murni menjadi fardh 1/6 (bila ada anak laki-laki) atau 1/6 + Ashabah (bila ada anak perempuan).',
  },
  {
    id: 'mother',
    nameIndo: 'Ibu',
    nameArabic: 'الأم',
    category: 'ushul',
    neverMahjub: true,
    blockedBy: [],
    blocksOthers: ['Semua Nenek (baik dari pihak Ibu maupun pihak Ayah)'],
    nuqshanNote: 'Mengalami Hijab Nuqshan: Turun dari 1/3 menjadi 1/6 jika ada keturunan atau ada 2 orang saudara/i.',
  },
  {
    id: 'grandson',
    nameIndo: 'Cucu Laki-laki',
    nameArabic: 'ابن الابن',
    category: 'furu',
    neverMahjub: false,
    blockedBy: ['Anak Laki-laki'],
    blocksOthers: ['Cicit', 'Saudara/i (jika anak laki-laki tiada)', 'Keponakan', 'Paman'],
  },
  {
    id: 'granddaughter',
    nameIndo: 'Cucu Perempuan',
    nameArabic: 'بنت الابن',
    category: 'furu',
    neverMahjub: false,
    blockedBy: ['Anak Laki-laki', 'Dua Orang Anak Perempuan atau Lebih (kecuali ada cucu laki-laki)'],
    blocksOthers: ['Saudara/i Seibu'],
  },
  {
    id: 'grandfather',
    nameIndo: 'Kakek Sahih',
    nameArabic: 'الجد الصحيح',
    category: 'ushul',
    neverMahjub: false,
    blockedBy: ['Ayah Kandung'],
    blocksOthers: ['Saudara/i Seibu', 'Keponakan', 'Paman'],
  },
  {
    id: 'grandmother_pat',
    nameIndo: 'Nenek dari Ayah',
    nameArabic: 'الجدة من الأب',
    category: 'ushul',
    neverMahjub: false,
    blockedBy: ['Ibu Kandung', 'Ayah Kandung'],
    blocksOthers: [],
  },
  {
    id: 'grandmother_mat',
    nameIndo: 'Nenek dari Ibu',
    nameArabic: 'الجدة من الأم',
    category: 'ushul',
    neverMahjub: false,
    blockedBy: ['Ibu Kandung'],
    blocksOthers: [],
  },
  {
    id: 'full_brother',
    nameIndo: 'Saudara Kandung Lk',
    nameArabic: 'الأخ الشقيق',
    category: 'hawasyi',
    neverMahjub: false,
    blockedBy: ['Anak Laki-laki', 'Cucu Laki-laki', 'Ayah Kandung'],
    blocksOthers: ['Saudara Seayah Lk/Pr', 'Keponakan', 'Paman'],
  },
  {
    id: 'full_sister',
    nameIndo: 'Saudari Kandung Pr',
    nameArabic: 'الأخت الشقيقة',
    category: 'hawasyi',
    neverMahjub: false,
    blockedBy: ['Anak Laki-laki', 'Cucu Laki-laki', 'Ayah Kandung'],
    blocksOthers: ['Saudara Seayah (jika menjadi Ashabah ma\'al Ghair bersama anak perempuan)'],
  },
  {
    id: 'consanguine_brother',
    nameIndo: 'Saudara Seayah Lk',
    nameArabic: 'الأخ لأب',
    category: 'hawasyi',
    neverMahjub: false,
    blockedBy: ['Anak Laki-laki', 'Cucu Laki-laki', 'Ayah', 'Saudara Kandung Laki-laki', 'Saudari Kandung (Ashabah ma\'al Ghair)'],
    blocksOthers: ['Keponakan', 'Paman'],
  },
  {
    id: 'consanguine_sister',
    nameIndo: 'Saudari Seayah Pr',
    nameArabic: 'الأخت لأب',
    category: 'hawasyi',
    neverMahjub: false,
    blockedBy: ['Anak Laki-laki', 'Cucu Laki-laki', 'Ayah', 'Saudara Kandung Laki-laki', 'Dua Saudari Kandung (kecuali ada saudara seayah)'],
    blocksOthers: [],
  },
  {
    id: 'uterine_sibling',
    nameIndo: 'Saudara/i Seibu',
    nameArabic: 'الإخوة لأم',
    category: 'hawasyi',
    neverMahjub: false,
    blockedBy: ['Anak Laki/Pr', 'Cucu Laki/Pr', 'Ayah', 'Kakek'],
    blocksOthers: [],
  },
  {
    id: 'nephew',
    nameIndo: 'Keponakan Laki-laki',
    nameArabic: 'ابن الأخ',
    category: 'hawasyi',
    neverMahjub: false,
    blockedBy: ['Anak Laki-laki', 'Cucu Laki-laki', 'Ayah', 'Kakek', 'Saudara Kandung/Seayah'],
    blocksOthers: ['Paman'],
  },
  {
    id: 'uncle',
    nameIndo: 'Paman Kandung/Seayah',
    nameArabic: 'العم',
    category: 'hawasyi',
    neverMahjub: false,
    blockedBy: ['Anak Laki-laki', 'Cucu Laki-laki', 'Ayah', 'Kakek', 'Saudara Kandung/Seayah', 'Keponakan'],
    blocksOthers: ['Sepupu'],
  },
];

export function HijabTreeTab() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('son');

  const selectedNode = HIJAB_NODES.find((n) => n.id === selectedNodeId)!;

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Shield className="w-4 h-4" />
          <span>Peta Silsilah & Kaidah Penghalang</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kaidah Hijab (Hirman & Nuqshan)
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl">
          Hijab adalah terhalangnya seseorang dari menerima hak waris sama sekali (Hijab Hirman) atau
          berkurangnya porsi waris karena ada ahli waris lain (Hijab Nuqshan).
        </p>
      </div>

      {/* 6 Ahli Waris yang Tidak Pernah Terhalang */}
      <div className="bg-emerald-50/60 rounded-xl border border-emerald-200 p-5 space-y-3">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm uppercase tracking-wide">
          <CheckCircle2 className="w-5 h-5 text-emerald-700" />
          <span>6 Ahli Waris Utama yang Tidak Pernah Mengalami Hijab Hirman</span>
        </div>
        <p className="text-xs text-emerald-800">
          Ulama fiqih bersepakat bahwa keenam golongan kerabat terdekat ini PASTI mendapatkan hak waris
          dan tidak bisa digugurkan oleh siapapun:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-1">
          {[
            { label: 'Suami', ar: 'الزوج' },
            { label: 'Istri', ar: 'الزوجة' },
            { label: 'Ayah', ar: 'الأب' },
            { label: 'Ibu', ar: 'الأم' },
            { label: 'Anak Laki-laki', ar: 'الابن' },
            { label: 'Anak Perempuan', ar: 'البنت' },
          ].map((item) => (
            <div
              key={item.label}
              className="p-2.5 bg-white rounded-lg border border-emerald-300/80 text-center shadow-xs"
            >
              <span className="text-xs font-bold text-stone-900 block">{item.label}</span>
              <span className="text-[11px] text-emerald-700 font-arabic block mt-0.5">{item.ar}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Family Tree Hijab Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Heir List Selector (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
            Pilih Ahli Waris untuk Menganalisis Hijab
          </h2>
          <p className="text-xs text-stone-500">
            Klik salah satu kerabat di bawah untuk melihat siapa saja yang dihalangi olehnya, dan siapa yang bisa menghalanginya:
          </p>

          <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
            {HIJAB_NODES.map((node) => {
              const isSelected = selectedNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`w-full p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold block">{node.nameIndo}</span>
                    <span
                      className={`text-[10px] font-arabic ${
                        isSelected ? 'text-emerald-100' : 'text-stone-500'
                      }`}
                    >
                      {node.nameArabic}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {node.neverMahjub ? (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                          isSelected
                            ? 'bg-emerald-800 text-emerald-100'
                            : 'bg-emerald-100 text-emerald-900'
                        }`}
                      >
                        Pasti Mewarisi
                      </span>
                    ) : (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                          isSelected
                            ? 'bg-stone-800 text-stone-200'
                            : 'bg-stone-200 text-stone-700'
                        }`}
                      >
                        Dapat Terhalang
                      </span>
                    )}
                    <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-stone-400'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Inspection Card for Selected Heir (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
              Detail Analisis Penghalang (Hijab)
            </span>
            <div className="flex items-baseline justify-between mt-1">
              <h3 className="text-xl font-bold text-stone-900 font-serif">
                {selectedNode.nameIndo}
              </h3>
              <span className="text-lg font-arabic text-stone-600 bg-stone-100 px-3 py-1 rounded-lg">
                {selectedNode.nameArabic}
              </span>
            </div>
          </div>

          {/* Status badge */}
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            {selectedNode.neverMahjub ? (
              <div className="flex items-start gap-2 text-xs text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Termasuk 6 Ahli Waris Mutlak:</strong> {selectedNode.nameIndo} tidak akan pernah gugur hak warisnya (tidak bisa di-mahjub hirman oleh siapapun).
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2 text-xs text-amber-900">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Dapat Terhalang (Mahjub Hirman):</strong> Hak waris {selectedNode.nameIndo} dapat gugur sama sekali bila terdapat ahli waris yang lebih dekat.
                </div>
              </div>
            )}
          </div>

          {/* Siapa yang menghalanginya */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
              <span>⛔ Dihalang-halangi Oleh (Terhalang Oleh):</span>
            </span>
            {selectedNode.blockedBy.length === 0 ? (
              <p className="text-xs text-stone-500 italic p-3 bg-stone-50 rounded-lg border border-stone-100">
                Tidak ada siapapun yang dapat menghalangi {selectedNode.nameIndo} secara total.
              </p>
            ) : (
              <div className="space-y-1.5">
                {selectedNode.blockedBy.map((blocker) => (
                  <div
                    key={blocker}
                    className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-900 flex items-center gap-2 font-medium"
                  >
                    <span>❌ {blocker}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Siapa yang dihalanginya */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
              <span>🛡️ Menghalangi Ahli Waris Berikut (Mem-blokir):</span>
            </span>
            {selectedNode.blocksOthers.length === 0 ? (
              <p className="text-xs text-stone-500 italic p-3 bg-stone-50 rounded-lg border border-stone-100">
                {selectedNode.nameIndo} tidak menghalangi hak waris kerabat lainnya secara total.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedNode.blocksOthers.map((blocked) => (
                  <div
                    key={blocked}
                    className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-800 font-medium"
                  >
                    🚫 {blocked}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Hijab Nuqshan notes (if any) */}
          {selectedNode.nuqshanNote && (
            <div className="p-3 bg-sky-50 border border-sky-200 rounded-lg text-xs text-sky-900 space-y-1">
              <span className="font-bold block">Catatan Hijab Nuqshan (Pengurangan Porsi):</span>
              <p>{selectedNode.nuqshanNote}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
