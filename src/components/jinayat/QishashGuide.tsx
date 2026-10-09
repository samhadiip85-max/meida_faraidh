import React from 'react';
import { Scale, ShieldCheck, AlertOctagon, HeartHandshake, CheckCircle2, UserCheck, Flame } from 'lucide-react';

export function QishashGuide() {
  const syaratQishash = [
    {
      title: '1. Pelaku Berstatus Mukallaf (Baligh & Berakal)',
      desc: 'Pelaku tindak pidana harus sudah baligh dan berakal sehat. Anak kecil (*Shabiy*) dan orang gila (*Majnūn*) tidak dijatuhi hukuman qishash karena tidak memikul beban taklif hukum pidana. (HR. Abu Dawud).',
    },
    {
      title: '2. Korban Berstatus Terlindungi Darahnya (Ma\'shūmud Dam)',
      desc: 'Darah korban dilindungi oleh syariat (seperti sesama muslim atau kafir dzimmi/mu\'āhad yang terikat perjanjian damai). Tidak ada qishash membunuh orang kafir harbi yang memerangi kaum muslimin atau orang murtad.',
    },
    {
      title: '3. Pelaku Bukan Orang Tua Kandung Korban',
      desc: 'Orang tua (ayah, ibu, atau kakek ke atas) tidak diqishash karena membunuh anak kandungnya, berdasarkan sabda Rasulullah SAW: "Lā yuqādul wālidu bil-walad" (HR. Tirmidzi & Ibnu Majah). Namun orang tua tersebut tetap berdosa besar, wajib membayar diyat, terhalang dari hak waris, dan dikenai ta\'zir berat oleh hakim.',
    },
    {
      title: '4. Kesetaraan Derajat (Al-Mukāfa\'ah)',
      desc: 'Terdapat kesetaraan derajat dalam agama dan status kemerdekaan. Dalam Madzhab Syafi\'i, seorang muslim tidak diqishash (tidak dihukum mati) karena membunuh orang kafir (HR. Bukhari no. 3166), melainkan dikenai kewajiban diyat dan hukuman ta\'zir.',
    },
    {
      title: '5. Eksekusi Mutlak oleh Pemerintah / Hakim (Haram Main Hakim Sendiri)',
      desc: 'Hukuman qishash dan hudud hanya sah dieksekusi oleh aparat pemerintah yang berwenang (Imam / Qadhi / Hakim pengadilan). Main hakim sendiri secara liar diharamkan mutlak dalam syariat karena menimbulkan anarki dan kekacauan sosial.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Scale className="w-4 h-4 text-rose-700" />
          <span>Panduan Fiqih Qishash (Pembalasan Setimpal)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hukum Qishash Jiwa & Anggota Tubuh, Syarat Eksekusi, & Hak Pemaafan
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Qishāsh (القِصَاص) secara bahasa bermakna mengikuti jejak atau membalas setara (*Al-Musāwāh*).
          Dalam hukum Islam, qishash adalah penjatuhan sanksi pembalasan yang setimpal kepada pelaku pembunuhan sengaja atau pelukaan fisik,
          jiwa dibalas jiwa, anggota tubuh dibalas anggota tubuh yang sama, guna mewujudkan keadilan dan mencegah dendam anarki.
        </p>
      </div>

      {/* Hikmah Qishash: Jaminan Kelangsungan Hidup */}
      <div className="p-5 bg-emerald-50/70 rounded-xl border border-emerald-300 space-y-2 text-xs text-stone-800">
        <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
          <ShieldCheck className="w-5 h-5 text-emerald-800" />
          <span>Hikmah Filosofis Qishash dalam Al-Qur'an (QS. Al-Baqarah: 179)</span>
        </div>
        <p className="font-arabic text-sm text-stone-900 pt-1 leading-loose">
          وَلَكُمْ فِى ٱلْقِصَاصِ حَيَوٰةٌۭ يَـٰٓأُو۟لِى ٱلْأَلْبَـٰبِ لَعَلَّكُمْ تَتَّقُونَ
        </p>
        <p className="text-stone-700 text-[11px] leading-relaxed">
          <em>"Dan dalam qishash itu ada (jaminan) kehidupan bagimu, wahai orang-orang yang berakal, agar kamu bertakwa."</em> (QS. Al-Baqarah: 179).
          Ketika seseorang mengetahui bahwa jika ia membunuh orang lain maka ia pun pasti akan dibunuh setimpal oleh hukum, maka ia akan mengurungkan niat jahatnya.
          Dengan demikian, dua nyawa terselamatkan: nyawa calon korban dan nyawa calon pembunuh.
        </p>
      </div>

      {/* 5 Syarat Pelaksanaan Qishash */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <Scale className="w-4 h-4 text-rose-700" />
            <span>Syurūth Wujūb Al-Qishāsh</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Lima Syarat Mutlak Eksekusi Hukuman Qishash
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Qishash hanya boleh dijatuhkan apabila seluruh 5 kriteria hukum di bawah ini terpenuhi tanpa keraguan:
          </p>
        </div>

        <div className="space-y-3 text-xs">
          {syaratQishash.map((s, idx) => (
            <div key={idx} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
              <strong className="text-stone-900 block font-bold text-xs">{s.title}</strong>
              <p className="text-stone-600 text-[11px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Opsi Hak Ahli Waris Korban (Waliyyud Dam) */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <HeartHandshake className="w-4 h-4 text-emerald-700" />
            <span>Pilihan Hak Ahli Waris Korban (Waliyyud Dam)</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Tiga Opsi Hak yang Dimiliki Keluarga Korban Pembunuhan Sengaja
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Syariat Islam memuliakan keluarga korban dengan memberikan hak prerogatif menentukan nasib pelaku:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-4 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2">
            <strong className="text-rose-950 font-bold block text-sm">Opsi 1: Menuntut Qishash</strong>
            <p className="text-stone-700 text-[11px] leading-relaxed">
              Keluarga korban berhak menuntut pengadilan syariah untuk <strong>mengeksekusi hukuman mati setimpal</strong> kepada pelaku demi tegaknya keadilan mutlak.
            </p>
          </div>

          <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2">
            <strong className="text-amber-950 font-bold block text-sm">Opsi 2: Memaafkan dengan Diyat</strong>
            <p className="text-stone-700 text-[11px] leading-relaxed">
              Keluarga korban memaafkan pelaku dari eksekusi mati, dengan syarat pelaku <strong>wajib membayar Diyat Mughalladhah</strong> (100 unta berat / senilai uang tebusan) secara tunai.
            </p>
          </div>

          <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
            <strong className="text-emerald-950 font-bold block text-sm">Opsi 3: Memaafkan Sukarela Murni</strong>
            <p className="text-stone-700 text-[11px] leading-relaxed">
              Keluarga korban memaafkan secara sukarela tanpa meminta sepeser pun uang diyat (*\'Afwun majjānī*). Ini adalah derajat kemuliaan tertinggi yang sangat dipuji dalam Al-Qur'an (QS. Asy-Syura: 40).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
