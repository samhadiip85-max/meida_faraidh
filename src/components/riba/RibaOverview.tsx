import React from 'react';
import { ShieldAlert, BookOpen, AlertOctagon, Scale, Sparkles, CheckCircle2, Flame } from 'lucide-react';
import { TAHAPAN_PENGHARAMAN_RIBA } from '../../data/ribaData';

export function RibaOverview() {
  const enamKomoditas = [
    {
      nama: 'Emas (Adz-Dzahab)',
      illat: 'Tsamaniyyah (Mata Uang & Logam Mulia)',
      kelompok: 'Alat Tukar Nilai',
      padananModern: 'Uang kertas (Rupiah, Dollar, Euro, Real), Dinar, Emas batangan',
    },
    {
      nama: 'Perak (Al-Fiddhah)',
      illat: 'Tsamaniyyah (Mata Uang & Logam Mulia)',
      kelompok: 'Alat Tukar Nilai',
      padananModern: 'Dirham perak, perak batangan murni',
    },
    {
      nama: 'Gandum Halus (Al-Burr)',
      illat: 'Tha\'ām (Bahan Makanan Pokok Tahan Simpan)',
      kelompok: 'Bahan Pangan Pokok',
      padananModern: 'Beras, tepung terigu, jagung, sagu',
    },
    {
      nama: 'Gandum Kasar (Asy-Sya\'īr)',
      illat: 'Tha\'ām (Bahan Makanan Pokok)',
      kelompok: 'Bahan Pangan Pokok',
      padananModern: 'Oat, havermut, sorgum, jewawut',
    },
    {
      nama: 'Kurma (At-Tamr)',
      illat: 'Tha\'ām (Bahan Makanan / Buah Pokok)',
      kelompok: 'Bahan Pangan Pokok',
      padananModern: 'Kismis, buah kering tahan simpan',
    },
    {
      nama: 'Garam (Al-Milh)',
      illat: 'Tha\'ām / Ishlāhut-Tha\'ām (Bumbu Penyedap Awet)',
      kelompok: 'Bahan Pengawet Makanan',
      padananModern: 'Gula pasir, garam dapur, bumbu olahan pokok',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <ShieldAlert className="w-4 h-4 text-rose-700" />
          <span>BAB 15: Fiqih Riba (Kitāb Ar-Ribā)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hakekat Riba, Bahaya Dosa, 4 Tahapan Pengharaman, & Komoditas Ribawi
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Secara etimologi, <em>Ar-Ribā</em> (الرِّبَا) bermakna <em>Az-Ziyādah</em> (tambahan/tumbuh).
          Secara terminologi syariat, riba adalah tambahan nilai nominal tanpa imbalan pengganti riil (*'iwadh*)
          yang dipersyaratkan dalam transaksi pinjaman utang-piutang atau dalam pertukaran komoditas ribawi.
        </p>
      </div>

      {/* Bahaya & Maklumat Perang Riba */}
      <div className="p-5 bg-rose-50/80 rounded-xl border border-rose-300 space-y-3 text-xs text-rose-950">
        <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
          <Flame className="w-5 h-5 text-rose-700" />
          <span>Maklumat Perang dari Allah & Laknat 4 Pelaku Transaksi Riba</span>
        </div>
        <p className="leading-relaxed">
          Riba termasuk dosa besar (*Kabā'ir*) yang paling dimurkai oleh Allah SWT.
          Di dalam Al-Qur'an, tidak ada pelaku dosa kemaksiatan yang diumumkan perang secara langsung oleh Allah dan Rasul-Nya selain pelaku Riba:
        </p>
        <div className="bg-white p-3 rounded-lg border border-rose-200 font-arabic text-sm text-stone-900 leading-loose">
          فَإِن لَّمْ تَفْعَلُوا۟ فَأْذَنُوا۟ بِحَرْبٍۢ مِّنَ ٱللَّهِ وَرَسُولِهِۦ ۖ وَإِن تُبْتُمْ فَلَكُمْ رُءُوسُ أَمْوَٰلِكُمْ لَا تَظْلِمُونَ وَلَا تُظْلَمُونَ
        </div>
        <p className="text-stone-700 text-[11px] leading-relaxed">
          <em>"Maka jika kamu tidak melaksanakannya (meninggalkan sisa riba), maka umumkanlah peperangan dari Allah dan Rasul-Nya! Tetapi jika kamu bertobat, maka kamu berhak atas pokok hartamu; kamu tidak berbuat zalim dan tidak dizalimi."</em> (QS. Al-Baqarah: 279).
        </p>
        <div className="p-3 bg-white rounded-lg border border-rose-200 text-stone-800 text-[11px] space-y-1">
          <strong className="text-rose-900 block font-bold">Empat Pihak yang Dilaknat Bersama:</strong>
          <p>
            Dari Jabir radhiyallahu 'anhu: <em>"Rasulullah SAW melaknat pemakan riba (kreditur), penyetor riba (debitur/nasabah peminjam), juru tulisnya (pencatat), dan dua orang saksinya."</em> Beliau bersabda: <em>"Mereka semua dosanya sama!"</em> (HR. Muslim no. 1598).
          </p>
        </div>
      </div>

      {/* 4 Tahapan Pengharaman Riba dalam Al-Qur'an */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>Tadrijut Tasyri' (Gradualitas Hukum)</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            4 Tahapan Pengharaman Riba dalam Al-Qur'an
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Sebagaimana khamr, syariat Islam mengharamkan riba secara bertahap demi mempersiapkan kesiapan mental dan ekonomi masyarakat:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {TAHAPAN_PENGHARAMAN_RIBA.map((t, idx) => (
            <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-900">{t.fase}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {t.surah}
                  </span>
                </div>
                <span className="text-[10px] text-stone-500 block">{t.periode}</span>
                <p className="text-stone-700 text-[11px] leading-relaxed pt-1">{t.pesan}</p>
              </div>

              <div className="p-2.5 bg-white rounded border border-stone-200 font-arabic text-xs text-stone-800 text-right">
                {t.ayatArabic}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Komoditas Pokok Ribawi Hadits 'Ubadah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Scale className="w-4 h-4 text-emerald-700" />
            <span>Nash Ashliyyah Komoditas Ribawi</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Enam Komoditas Pokok Ribawi (HR. Muslim No. 1587)
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Rasulullah SAW menyebutkan enam komoditas pokok yang menjadi tolok ukur 'illat keharaman riba:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          {enamKomoditas.map((k, idx) => (
            <div key={idx} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-stone-900 font-bold text-xs">{k.nama}</strong>
                <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-stone-200 text-stone-700">
                  {k.kelompok}
                </span>
              </div>
              <p className="text-emerald-800 font-mono text-[10px] font-semibold">
                'Illat: {k.illat}
              </p>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                <strong>Ekivalen Modern:</strong> {k.padananModern}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
