import React from 'react';
import { Scroll, HeartHandshake, AlertOctagon, Scale, BookOpen, Layers, CheckCircle2, ShieldAlert, Coins } from 'lucide-react';
import { RUKUN_WASIAT, URUTAN_HARTA_PENINGGALAN } from '../../data/wasiatData';

export function WasiatOverview() {
  const hukumWasiat = [
    {
      status: 'Wājib',
      color: 'rose',
      deskripsi: 'Bagi orang yang memiliki tanggungan hak Allah (zakat tertunggak, fidyah, kafarat, nadzar) atau utang/titipan barang manusia yang tidak diketahui orang lain kecuali bila diwasiatkan.',
    },
    {
      status: 'Sunnah',
      color: 'emerald',
      deskripsi: 'Bagi orang yang memiliki harta lebih, untuk disedekahkan kepada kerabat non-ahli waris, fakir miskin, atau sarana wakaf dakwah jariyah (maksimal 1/3 harta bersih).',
    },
    {
      status: 'Harām',
      color: 'rose',
      deskripsi: 'Wasiat untuk perkara maksiat, wasiat yang berniat merugikan ahli waris (Washiyyah Dharār), atau berwasiat kepada salah seorang ahli waris tanpa izin seluruh ahli waris lainnya.',
    },
    {
      status: 'Makrūh',
      color: 'amber',
      deskripsi: 'Bagi orang yang hartanya sedikit dan anak keturunannya fakir/sangat membutuhkan harta peninggalan tersebut untuk kelangsungan hidup mereka.',
    },
    {
      status: 'Mubāh',
      color: 'stone',
      deskripsi: 'Wasiat kepada orang yang kaya atau berkecukupan yang tidak memiliki nilai ibadah khusus dan tidak merugikan ahli waris.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Scroll className="w-4 h-4 text-rose-700" />
          <span>BAB 22: Fiqih Al-Washiyyah (Hukum Wasiat Harta Peninggalan Islam)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hakekat Wasiat, Urutan Eksekusi Harta Jenazah, & Batasan Syariat
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam fiqih Islam, <em>Al-Washiyyah</em> (الوَصِيَّة) adalah akad pelimpahan hak kepemilikan harta secara sukarela (*Tabarru'*)
          yang berlaku efektif setelah pewasiat meninggal dunia.
          Wasiat adalah sarana emas amal jariyah bagi mayit, namun dibatasi secara ketat oleh syariat agar hak-hak ahli waris tetap terlindungi.
        </p>
      </div>

      {/* Urutan 4 Hak Harta Peninggalan (Huquq Tirkah) */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <Coins className="w-4 h-4 text-rose-700" />
            <span>Tartību Huqūqit Tirkah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Urutan Kronologis Eksekusi Harta Peninggalan Jenazah
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Berdasarkan QS. An-Nisa: 11 dan ijma' fuqaha, harta mayit wajib diselesaikan secara tertib berikut ini:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {URUTAN_HARTA_PENINGGALAN.map((u) => (
            <div key={u.urutan} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-full bg-rose-700 text-white font-bold text-xs flex items-center justify-center mb-1.5">
                  {u.urutan}
                </span>
                <strong className="text-stone-900 font-bold text-xs block">{u.nama}</strong>
                <p className="text-stone-600 text-[10px] leading-relaxed mt-1">{u.deskripsi}</p>
              </div>
              <div className="p-2 bg-white rounded border border-stone-200 text-[9px] font-mono text-stone-500">
                {u.dalil}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dua Kaidah Emas Wasiat */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Kaidah 1: Maksimal 1/3 */}
        <div className="p-5 bg-rose-50/70 rounded-xl border border-rose-300 space-y-2 text-rose-950">
          <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
            <Scale className="w-4 h-4 text-rose-700" />
            <span>Kaidah Emas 1: Maksimal Sepertiga (1/3) Harta Bersih</span>
          </div>
          <p className="font-arabic text-sm text-stone-900 pt-1 leading-loose">
            «الثُّلُثُ، وَالثُّلُثُ كَثِيرٌ، إِنَّكَ أَنْ تَذَرَ وَرَثَتَكَ أَغْنِيَاءَ خَيْرٌ مِنْ أَنْ تَذَرَهُمْ عَالَةً يَتَكَفَّفُونَ النَّاسَ»
          </p>
          <p className="text-stone-700 text-[11px] leading-relaxed">
            <em>"Sepertiga saja, dan sepertiga itu sudah banyak. Sesungguhnya engkau meninggalkan ahli warismu dalam keadaan berkecukupan itu jauh lebih baik daripada meninggalkan mereka dalam kemiskinan meminta-minta kepada manusia."</em> (HR. Bukhari no. 2742 & Muslim no. 1628).
          </p>
          <p className="text-stone-600 text-[10px] pt-1">
            Wasiat yang melebihi sepertiga harta bersih otomatis dipotong menjadi sepertiga, kecuali jika seluruh ahli waris rela menyetujuinya setelah pewasiat wafat.
          </p>
        </div>

        {/* Kaidah 2: La Washiyyata li-Warits */}
        <div className="p-5 bg-emerald-50/70 rounded-xl border border-emerald-300 space-y-2 text-emerald-950">
          <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
            <ShieldAlert className="w-4 h-4 text-emerald-700" />
            <span>Kaidah Emas 2: Larangan Wasiat untuk Ahli Waris</span>
          </div>
          <p className="font-arabic text-sm text-stone-900 pt-1 leading-loose">
            «إِنَّ اللَّهَ قَدْ أَعْطَى كُلَّ ذِي حَقٍّ حَقَّهُ، فَلَا وَصِيَّةَ لِوَارِثٍ»
          </p>
          <p className="text-stone-700 text-[11px] leading-relaxed">
            <em>"Sesungguhnya Allah telah memberikan kepada setiap orang yang berhak akan bagian haknya, maka TIDAK ADA WASIAT BAGI AHLI WARIS."</em> (HR. Abu Dawud no. 2870 & Tirmidzi no. 2120).
          </p>
          <p className="text-stone-600 text-[10px] pt-1">
            Ahli waris (anak, istri, suami, orang tua) telah mendapatkan porsi pasti dari ayat waris Al-Qur'an. Wasiat khusus untuk salah satu ahli waris dilarang demi mencegah kecemburuan dan perpecahan keluarga.
          </p>
        </div>
      </div>

      {/* 4 Rukun Wasiat */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>Arkānul Washiyyah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Empat Rukun Sah Pelaksanaan Wasiat
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {RUKUN_WASIAT.map((r) => (
            <div key={r.id} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-arabic text-rose-800 font-bold block">{r.nameArabic}</span>
                <strong className="text-stone-900 font-bold text-xs block mt-0.5">{r.name}</strong>
                <span className="text-[10px] text-emerald-800 font-semibold block mt-0.5">{r.role}</span>
                <p className="text-stone-600 text-[10px] leading-relaxed mt-1">
                  <strong>Syarat Sah:</strong> {r.syaratSah}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Status Hukum Wasiat */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600">
            <Scale className="w-4 h-4 text-stone-600" />
            <span>Al-Ahkām Al-Khamsah Fil-Washiyyah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Lima Status Hukum Wasiat Berdasarkan Kondisi Pewasiat
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          {hukumWasiat.map((h, idx) => (
            <div key={idx} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between">
              <div>
                <strong className="text-stone-900 font-bold text-xs block">{h.status}</strong>
                <p className="text-stone-600 text-[10px] leading-relaxed mt-1.5">{h.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
