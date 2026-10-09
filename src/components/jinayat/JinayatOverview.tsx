import React from 'react';
import { ShieldAlert, Scale, Heart, AlertOctagon, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { PEMBUNUHAN_LIST } from '../../data/jinayatData';

export function JinayatOverview() {
  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <ShieldAlert className="w-4 h-4 text-rose-700" />
          <span>BAB 16: Fiqih Jināyāt (Hukum Pidana & Kriminal Islam)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hukum Pidana Islam, Perlindungan Nyawa (Hifzhun Nafs), & Klasifikasi Pembunuhan
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam fiqih Islam, <em>Al-Jināyāt</em> (الجِنَايَات) adalah tindak kejahatan atau pidana penganiayaan terhadap jiwa manusia (*Nafs*)
          maupun anggota tubuh (*Athrāf*). Tujuan tertinggi syariat (*Maqāshid Asy-Syarī'ah*) adalah <strong>Hifzhun Nafs</strong> (menjaga dan melindungi kesucian darah manusia),
          sehingga syariat menetapkan sanksi tegas <strong>Qishāsh</strong> (pembalasan setimpal) atau <strong>Diyāt</strong> (kompensasi denda darah).
        </p>
      </div>

      {/* Kemuliaan Jiwa Manusia dalam Al-Qur'an */}
      <div className="p-5 bg-rose-50/70 rounded-xl border border-rose-300 space-y-3 text-xs text-rose-950">
        <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
          <Heart className="w-5 h-5 text-rose-700" />
          <span>Kesucian Darah & Pengharaman Membunuh Jiwa Tanpa Hak</span>
        </div>
        <p className="leading-relaxed">
          Membunuh seorang manusia tanpa alasan hukum yang dibenarkan syariat adalah dosa terbesar setelah syirik kepada Allah SWT.
          Allah SWT berfirman dalam QS. Al-Mā'idah ayat 32:
        </p>
        <div className="bg-white p-3 rounded-lg border border-rose-200 font-arabic text-sm text-stone-900 leading-loose">
          مَن قَتَلَ نَفْسًۢا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍۢ فِى ٱلْأَرْضِ فَكَأَنَّمَا قَتَلَ ٱلنَّاسَ جَمِيعًۭا وَمَنْ أَحْيَاهَا فَكَأَنَّمَآ أَحْيَا ٱلنَّاسَ جَمِيعًۭا
        </div>
        <p className="text-stone-700 text-[11px] leading-relaxed">
          <em>"Barang siapa membunuh seorang manusia bukan karena orang itu membunuh orang lain, atau bukan karena berbuat kerusakan di muka bumi, maka seakan-akan dia telah membunuh manusia seluruhnya. Dan barang siapa memelihara kehidupan seorang manusia, maka seakan-akan dia telah memelihara kehidupan manusia semuanya."</em> (QS. Al-Ma'idah: 32).
        </p>
      </div>

      {/* 3 Macam Pembunuhan dalam Fiqih */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>Aqsām Al-Qatl (Tiga Kategori Pembunuhan)</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Pembunuhan Sengaja, Semi-Sengaja, & Tidak Sengaja (Tersalah)
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Dalam Mazhab Syafi'i dan Jumhur Fuqaha, pembunuhan terbagi menjadi tiga macam dengan konsekuensi hukum yang sangat berbeda:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {PEMBUNUHAN_LIST.map((p) => (
            <div key={p.id} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] font-arabic text-rose-800 font-bold block">{p.nameArabic}</span>
                  <strong className="text-stone-900 font-bold text-sm block">{p.name}</strong>
                </div>
                <p className="text-stone-600 text-[11px] leading-relaxed">{p.definition}</p>
                <div className="p-2 bg-white rounded border border-stone-200 text-[10px] space-y-1">
                  <p><strong>Alat:</strong> {p.alatDigunakan}</p>
                  <p><strong>Niat:</strong> {p.unsurNiat}</p>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-2 space-y-1 text-[11px]">
                <strong className="text-rose-950 block">Sanksi Hukum:</strong>
                <span className="p-1.5 rounded bg-rose-100 text-rose-900 font-bold block text-[10px]">
                  {p.hukumanPokok}
                </span>
                <p className="text-stone-500 text-[10px] leading-tight pt-1">
                  <strong>Pengganti / Denda:</strong> {p.hukumanPengganti}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabel Komparasi Matriks Pembunuhan */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Matriks Komparasi 3 Jenis Pembunuhan
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
              <tr>
                <th className="p-3">Aspek Perbandingan</th>
                <th className="p-3">1. Sengaja ('Amd)</th>
                <th className="p-3">2. Semi-Sengaja (Syibhu 'Amd)</th>
                <th className="p-3">3. Tersalah (Khatha')</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700 text-[11px]">
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Niat Pelaku</td>
                <td className="p-3 font-bold text-rose-800">Berniat membunuh korban</td>
                <td className="p-3">Niat memukul/menganiaya, tanpa niat membunuh</td>
                <td className="p-3">Tidak ada niat memukul maupun membunuh</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Alat Digunakan</td>
                <td className="p-3">Alat yang lazim mematikan (pedang/senjata)</td>
                <td className="p-3">Alat yang lazimnya tidak mematikan (rotan/tampar)</td>
                <td className="p-3">Alat buruan / kecelakaan lalu lintas murni</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Hukum Qishash</td>
                <td className="p-3 font-bold text-rose-800">BERLAKU QISHASH (Hukuman Mati)</td>
                <td className="p-3 text-emerald-800 font-bold">TIDAK ADA QISHASH</td>
                <td className="p-3 text-emerald-800 font-bold">TIDAK ADA QISHASH</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Jenis Diyat</td>
                <td className="p-3">Diyat Mughalladhah (jika dimaafkan)</td>
                <td className="p-3">Diyat Mughalladhah (100 unta berat)</td>
                <td className="p-3">Diyat Mukhaffafah (100 unta ringan)</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Penanggung Diyat</td>
                <td className="p-3">Harta pribadi pelaku (Tunai seketika)</td>
                <td className="p-3">Keluarga pihak ayah ('Āqilah) dicicil 3 tahun</td>
                <td className="p-3">Keluarga pihak ayah ('Āqilah) dicicil 3 tahun</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Kewajiban Kaffarah</td>
                <td className="p-3">Sunnah / Wajib taubat</td>
                <td className="p-3 font-bold text-emerald-900">Wajib puasa 2 bulan berturut-turut</td>
                <td className="p-3 font-bold text-emerald-900">Wajib puasa 2 bulan berturut-turut</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
