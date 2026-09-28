import React from 'react';
import { ISTIHADHAH_STEPS } from '../../data/haidData';
import { Sparkles, CheckCircle2, HelpCircle, ShieldAlert, HeartPulse } from 'lucide-react';

export function IstihadhahGuide() {
  const faqs = [
    {
      q: 'Apakah keluarnya flek kecokelatan sebelum tanggal haid dihukumi sebagai darah haid?',
      a: 'Bila flek tersebut keluar bersambung langsung dengan keluarnya darah haid dan berada dalam rentang minimal 24 jam darah mengalir, maka dihitung sebagai awal haid. Namun jika hanya flek sesaat lalu bersih berhari-hari sebelum haid sebenarnya, maka flek terisolasi tersebut tidak membatalkan shalat (hanya berstatus hadats kecil seperti air kencing).',
    },
    {
      q: 'Apakah cairan keputihan (kuning pucat / putih bening) tergolong najis?',
      a: 'Menurut Mazhab Syafi\'i, keputihan yang keluar dari bagian luar farji (yang dapat dijangkau saat cebok berjongkok) hukumnya suci zatnya, namun membatalkan wudhu. Jika keputihan keluar dari bagian dalam rahim yang dalam, maka dihukumi najis dan membatalkan wudhu.',
    },
    {
      q: 'Bolehkah seorang wanita mengonsumsi obat penunda haid agar bisa puasa Ramadhan sebulan penuh atau menyelesaikan rangkaian ibadah Haji?',
      a: 'Hukumnya mubah (boleh) menurut mayoritas ulama kontemporer, dengan syarat obat tersebut aman menurut rekomendasi dokter dan tidak membahayakan kesehatan rahim atau tubuhnya. Shalat, puasa, dan thawaf yang dikerjakannya sah secara syariat.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <HeartPulse className="w-4 h-4" />
          <span>Panduan Praktis Wanita Mustahadhah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Tata Cara Bersuci & Shalat bagi Wanita Istihadhah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Wanita yang mengalami pendarahan istihadhah tetap berstatus suci dan WAJIB mendirikan shalat serta
          berpuasa. Statusnya disamakan dengan orang yang terus-menerus berhadats (*Da'imul Hadats*).
        </p>
      </div>

      {/* 5 Langkah Bersuci Menjelang Shalat Fardhu */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            5 Prosedur Wajib Bersuci Sebelum Shalat Fardhu
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Langkah-langkah ini wajib dilakukan secara berurutan dan bersambung (*muwālah*) setiap kali hendak shalat fardhu:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          {ISTIHADHAH_STEPS.map((item) => (
            <div
              key={item.step}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="w-6 h-6 rounded-md bg-emerald-700 text-white flex items-center justify-center font-bold text-xs mb-2">
                  {item.step}
                </span>
                <h3 className="font-bold text-stone-900 text-sm">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabel Komparasi: Haid vs Istihadhah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Tabel Perbandingan: Darah Haid vs Darah Istihadhah
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 text-stone-700 border-b border-stone-200">
                <th className="p-3 font-bold">Aspek Pembeda</th>
                <th className="p-3 font-bold text-rose-900">Darah Haid (Menstruasi)</th>
                <th className="p-3 font-bold text-amber-900">Darah Istihadhah (Penyakit)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="p-3 font-semibold text-stone-800">Sebab & Asal Darah</td>
                <td className="p-3 text-stone-700">Darah alami dari rongga rahim bagian dalam</td>
                <td className="p-3 text-stone-700">Pecahnya pembuluh darah rahim ('Adzil)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-800">Warna & Bau</td>
                <td className="p-3 text-stone-700">Hitam/merah tua, kental, aroma menyengat</td>
                <td className="p-3 text-stone-700">Merah segar, encer, aroma darah luka biasa</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-800">Ibadah Shalat</td>
                <td className="p-3 text-rose-800 font-bold">Haram (Tidak Sah & Tidak Diqadha)</td>
                <td className="p-3 text-emerald-800 font-bold">Wajib Dikerjakan</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-800">Ibadah Puasa</td>
                <td className="p-3 text-rose-800 font-bold">Haram (Wajib Diqadha di Luar Ramadhan)</td>
                <td className="p-3 text-emerald-800 font-bold">Wajib Berpuasa</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-800">Hubungan Suami-Istri</td>
                <td className="p-3 text-rose-800 font-bold">Haram secara Ijma'</td>
                <td className="p-3 text-emerald-800 font-bold">Boleh menurut Jumhur Ulama</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-800">Mandi Wajib</td>
                <td className="p-3 text-stone-700">Wajib mandi besar setelah darah bersih</td>
                <td className="p-3 text-stone-700">Hanya cukup berwudhu tiap shalat fardhu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tanya Jawab Seputar Masalah Haid */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <HelpCircle className="w-4 h-4" />
          <span>F.A.Q Seputar Fiqih Darah Kewanitaan</span>
        </div>
        <div className="space-y-3 text-xs">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
              <strong className="text-stone-900 block font-semibold text-sm">
                Q: {faq.q}
              </strong>
              <p className="text-stone-700 leading-relaxed">
                <span className="font-semibold text-emerald-800">Jawaban: </span>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
