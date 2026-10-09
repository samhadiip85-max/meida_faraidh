import React from 'react';
import { Shield, Scale, AlertOctagon, BookOpen, Layers, CheckCircle2, Lock, Flame } from 'lucide-react';
import { HUDUD_LIST } from '../../data/hududData';

export function HududOverview() {
  const perbandinganTigaSanksi = [
    {
      kategori: '1. Hukuman Had (Hudūd)',
      hak: 'Hak Murni Allah SWT',
      kadar: 'Pasti dan Terukur (Muqaddar) dari nash Al-Qur\'an & Sunnah',
      pemaafan: 'TIDAK BISA dimaafkan, dikurangi, atau digugurkan setelah sampai ke pengadilan',
      contoh: 'Rajam/Cambuk zina, potong tangan mencuri, cambuk 80x qadzaf, cambuk khamr',
    },
    {
      kategori: '2. Hukuman Qishāsh',
      hak: 'Hak Hamba / Manusia (Korban & Ahli Waris)',
      kadar: 'Pembalasan setimpal sesuai perbuatan (jiwa balas jiwa, luka balas luka)',
      pemaafan: 'BISA dimaafkan oleh ahli waris dengan diyat atau dimaafkan sukarela tanpa tebusan',
      contoh: 'Hukuman mati pembunuhan sengaja, potong tangan pemotongan tangan sengaja',
    },
    {
      kategori: '3. Hukuman Ta\'zīr',
      hak: 'Hak Kemaslahatan Publik / Penguasa',
      kadar: 'Fleksibel dan tidak ditentukan kadarnya dalam nash Al-Qur\'an',
      pemaafan: 'Dapat disesuaikan jenisnya oleh hakim/pemerintah demi mendidik pelaku (*Ta\'dīb*)',
      contoh: 'Hukuman penjara koruptor, denda lalu lintas, pencabutan izin usaha, teguran lisan',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Shield className="w-4 h-4 text-rose-700" />
          <span>BAB 17: Fiqih Jināyāt (Hudūd) - Sanksi Pidana Tertentu dalam Islam</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hakekat Hudud, Kaidah Penolakan Syubhat, & Perlindungan Kehormatan Umat
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam terminologi syariat Islam, <em>Al-Hudūd</em> (الحُدُود) adalah sanksi hukuman fisik tertentu yang kadarnya telah ditetapkan secara pasti (*Muqaddar*)
          oleh Allah SWT dalam Al-Qur'an dan As-Sunnah sebagai hak Allah.
          Tujuan utama hudud adalah sebagai <strong>Zawājir</strong> (pencegah efektif kejahatan) dan <strong>Jawābir</strong> (penebus dosa bagi pelaku di akhirat).
        </p>
      </div>

      {/* Kaidah Emas Hudud: Penolakan Karena Syubhat */}
      <div className="p-5 bg-rose-50/70 rounded-xl border border-rose-300 space-y-2 text-xs text-rose-950">
        <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
          <Scale className="w-5 h-5 text-rose-700" />
          <span>Kaidah Emas Peradilan Pidana Islam: Idra'ul Hudūda Bisy-Syubuhāt</span>
        </div>
        <p className="font-arabic text-sm text-stone-900 pt-1 leading-loose">
          «ادْرَءُوا الحُدُودَ بِالشُّبُهَاتِ مَا اسْتَطَعْتُمْ، فَإِنَّ الإِمَامَ أَنْ يُخْطِئَ فِي العَفْوِ خَيْرٌ مِنْ أَنْ يُخْطِئَ فِي العُقُوبَةِ»
        </p>
        <p className="text-stone-700 text-[11px] leading-relaxed">
          <em>"Tolaklah hukuman-hukuman had dengan adanya keragu-raguan (syubhat) semampu kalian. Sesungguhnya seorang pemimpin/hakim keliru dalam memaafkan itu jauh lebih baik daripada keliru dalam menjatuhkan hukuman sanksi."</em> (HR. Tirmidzi no. 1424 & Al-Hakim).
        </p>
        <p className="text-stone-600 text-[11px] leading-relaxed pt-1">
          Prinsip ini membuktikan bahwa syariat Islam <strong>TIDAK HAUS MENGHUKUM</strong>, melainkan mengedepankan kehati-hatian tertinggi (*Presumption of Innocence*). Jika ada keraguan sedikit saja dalam pembuktian, hukuman had wajib digugurkan dan dialihkan ke pembinaan ta'zir.
        </p>
      </div>

      {/* Perbandingan 3 Jenis Sanksi Pidana Islam */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>Trilogi Sanksi Pidana Syariat</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Perbedaan Fundamental: Hudud vs Qishash vs Ta'zir
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Ketahui batas pembeda hak Allah, hak manusia, dan hak ketertiban umum:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {perbandinganTigaSanksi.map((item, idx) => (
            <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <strong className="text-stone-900 font-bold text-sm block">{item.kategori}</strong>
                <p className="text-emerald-800 font-semibold text-[11px]">Sifat Hak: {item.hak}</p>
                <p className="text-stone-600 text-[11px]"><strong>Ketentuan Kadar:</strong> {item.kadar}</p>
                <p className="text-stone-600 text-[11px]"><strong>Pemaafan:</strong> {item.pemaafan}</p>
              </div>
              <div className="p-2 bg-white rounded border border-stone-200 text-[10px] text-stone-500">
                <strong>Contoh Kasus:</strong> {item.contoh}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Peta 5 Sanksi Pidana Hudud */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <Lock className="w-4 h-4 text-rose-700" />
            <span>Cakupan Materi BAB 17</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Lima Tindak Pidana Had yang Diatur Secara Qath'i
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          {HUDUD_LIST.map((h) => (
            <div key={h.id} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-arabic text-rose-800 font-bold block">{h.nameArabic}</span>
                <strong className="text-stone-900 font-bold text-xs block mt-0.5">{h.name}</strong>
                <p className="text-stone-600 text-[10px] leading-relaxed mt-1 line-clamp-3">{h.definition}</p>
              </div>
              <div className="p-2 bg-rose-50 rounded border border-rose-200 text-[10px] text-rose-950 font-medium">
                {h.hukumanSyariat.slice(0, 75)}...
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
