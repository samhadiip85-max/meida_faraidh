import React from 'react';
import { Gift, Landmark, HeartHandshake, ShieldCheck, Sparkles, AlertOctagon, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export function HibahWakafOverview() {
  const comparisonData = [
    {
      aspect: 'Waktu Efektif Berlaku',
      hibah: 'Saat pemberi MASIH HIDUP (setelah serah terima fisik / qabdh)',
      wakaf: 'Saat pewakaf MASIH HIDUP (seketika setelah ikrar terucap)',
      wasiat: 'SETELAH PEWARIS WAFAT (ba\'dal maut)',
      waris: 'OTOMATIS demi hukum syariat setelah pewaris wafat',
    },
    {
      aspect: 'Batasan Jumlah Harta',
      hibah: 'Bebas tanpa batas maksimal (disunnahkan tidak memiskinkan diri)',
      wakaf: 'Bebas tanpa batas maksimal',
      wasiat: 'MAKSIMAL 1/3 (sepertiga) dari total harta peninggalan bersih',
      waris: 'Seluruh sisa tirkah dibagikan sesuai ketentuan furudh faraidh',
    },
    {
      aspect: 'Siapa Penerima Hak?',
      hibah: 'Boleh untuk siapa saja (anak, keluarga, sahabat, orang asing)',
      wakaf: 'Publik (Wakaf Khairi) atau Keluarga Keturunan (Wakaf Dzurri)',
      wasiat: 'TIDAK BOLEH untuk ahli waris (kecuali disetujui seluruh waris)',
      waris: 'HANYA untuk ahli waris yang sah secara nasab, nikah, atau wala\'',
    },
    {
      aspect: 'Status Fisik Pokok Harta',
      hibah: 'Menjadi milik penuh penerima (boleh dijual, dihibahkan, diwariskan)',
      wakaf: 'POKOK DITAHAN ABADI (tidak boleh dijual, dihibahkan, diwariskan)',
      wasiat: 'Menjadi milik penuh penerima wasiat',
      waris: 'Menjadi hak milik sempurna masing-masing ahli waris',
    },
    {
      aspect: 'Hak Menarik Kembali (Rujū\')',
      hibah: 'HARAM ditarik kembali, KECUALI hibah orang tua kepada anak kandung',
      wakaf: 'MUTLAK TIDAK BISA ditarik kembali karena telah menjadi milik Allah',
      wasiat: 'BOLEH ditarik/diubah kapan saja selama pewasiat masih hidup',
      waris: 'TIDAK BISA dibatalkan (bersifat ijbāri demi hukum syariat)',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Gift className="w-4 h-4 text-emerald-700" />
          <span>BAB 14: Fiqih Hibah & Wakaf (Al-Hibah wal-Waqf)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Filantropi Islam, Sedekah Jariyah Abadi, & Proteksi Harta Umat
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Islam tidak hanya mengatur perniagaan komersial, tetapi juga meletakkan sistem filantropi sukarela (*At-Tabarru'āt*)
          yang sangat mulia melalui <strong>Hibah</strong> (pemberian cuma-cuma semasa hidup) dan <strong>Wakaf</strong> (penahanan pokok aset abadi untuk disedekahkan hasilnya).
          Kedua instrumen ini menjadi pilar pemerataan kesejahteraan sosial dan investasi pahala yang tidak terputus setelah kematian.
        </p>
      </div>

      {/* Keutamaan Sedekah Jariyah */}
      <div className="p-5 bg-emerald-50/70 rounded-xl border border-emerald-300 space-y-2 text-xs text-stone-800">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
          <Sparkles className="w-5 h-5 text-emerald-800" />
          <span>Hadits Keutamaan Sedekah Jariyah yang Abadi (HR. Muslim)</span>
        </div>
        <p className="leading-relaxed font-arabic text-sm text-stone-900 pt-1">
          «إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ»
        </p>
        <p className="leading-relaxed text-stone-700 text-[11px]">
          <em>"Apabila seorang manusia meninggal dunia, maka terputuslah seluruh amal perbuatannya kecuali dari tiga perkara: <strong>Sedekah Jariyah (Wakaf)</strong>, ilmu yang bermanfaat, atau anak shalih yang mendoakannya."</em> (HR. Muslim no. 1631).
          Para ulama sepakat bahwa sedekah jariyah pada hadits ini adalah amalan wakaf, di mana pokok hartanya terus ada dan pahalanya mengalir tiada henti kepada pewakaf di alam kubur.
        </p>
      </div>

      {/* 3 Karakteristik Pokok Harta Wakaf */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Landmark className="w-4 h-4 text-emerald-700" />
            <span>Kaidah Emas Wakaf Rasulullah SAW</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            3 Larangan Mutlak atas Harta yang Telah Diwakafkan
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Berdasarkan sabda Nabi SAW kepada Sahabat Umar bin Khattab radhiyallahu 'anhu (HR. Bukhari & Muslim):
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-4 bg-rose-50/60 rounded-xl border border-rose-200 space-y-1">
            <strong className="text-rose-950 block text-xs font-bold">1. Lā Yubā' (لَا يُبَاع)</strong>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              <strong>Tidak boleh dijualbelikan</strong> atau dialihkan kepemilikannya kepada siapa pun untuk keperluan komersial pribadi.
            </p>
          </div>

          <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 space-y-1">
            <strong className="text-amber-950 block text-xs font-bold">2. Lā Yūhab (لَا يُوهَب)</strong>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              <strong>Tidak boleh dihibahkan</strong>, dihadiahkan, atau dijadikan jaminan utang (*rahn*) oleh siapa pun termasuk oleh nazhir.
            </p>
          </div>

          <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-200 space-y-1">
            <strong className="text-sky-950 block text-xs font-bold">3. Lā Yūratsu (لَا يُورَث)</strong>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              <strong>Tidak boleh diwariskan</strong> kepada anak cucu pewakaf, karena status kepemilikan telah terlepas menjadi milik Allah SWT bagi kemaslahatan umat.
            </p>
          </div>
        </div>
      </div>

      {/* Tabel Komparasi 4 Jalur Perpindahan Harta */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>Matriks Perbandingan Filantropi & Waris</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Komparasi: Hibah vs Wakaf vs Wasiat vs Waris
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Ketahui perbedaan waktu berlaku, batas maksimal nominal, hak penarikan, dan peruntukan syar'inya:
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
              <tr>
                <th className="p-3">Aspek Pembeda</th>
                <th className="p-3">1. Hibah</th>
                <th className="p-3">2. Wakaf</th>
                <th className="p-3">3. Wasiat</th>
                <th className="p-3">4. Waris (Faraidh)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700 text-[11px]">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50">
                  <td className="p-3 font-semibold text-stone-900">{row.aspect}</td>
                  <td className="p-3 text-emerald-900 font-medium">{row.hibah}</td>
                  <td className="p-3 text-sky-900 font-medium">{row.wakaf}</td>
                  <td className="p-3 text-amber-900 font-medium">{row.wasiat}</td>
                  <td className="p-3 text-purple-900 font-medium">{row.waris}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
