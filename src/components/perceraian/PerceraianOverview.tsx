import React from 'react';
import { HeartCrack, HeartHandshake, AlertOctagon, Scale, BookOpen, Layers, CheckCircle2, ShieldAlert } from 'lucide-react';
import { PINTU_PEMUTUSAN_NIKAH } from '../../data/perceraianData';

export function PerceraianOverview() {
  const hukumPerceraian = [
    {
      status: 'Makruh (Asal Hukum)',
      color: 'amber',
      deskripsi: 'Perceraian tanpa alasan syar\'i yang mendesak. Rasulullah SAW bersabda bahwa perceraian adalah perkara halal yang paling dibenci Allah SWT (HR. Abu Dawud).',
    },
    {
      status: 'Wajib',
      color: 'rose',
      deskripsi: 'Terjadi bila terjadi perselisihan parah (*Syiqāq*) yang tidak dapat didamaikan oleh dua hakam, atau suami bersumpah tidak menyentuh istri (*Ilā\'*) selama lebih dari 4 bulan.',
    },
    {
      status: 'Sunnah',
      color: 'emerald',
      deskripsi: 'Bila istri mengabaikan kewajiban fardhu agamanya (seperti sengaja meninggalkan shalat) atau tidak menjaga kehormatan diri dan tidak dapat dinasihati.',
    },
    {
      status: 'Haram (Bid\'ī)',
      color: 'rose',
      deskripsi: 'Mentalak istri dalam kondisi haid atau nifas, atau saat suci yang telah dicampuri, atau mentalak tiga sekaligus dalam satu kalimat ucapan.',
    },
    {
      status: 'Mubāh (Boleh)',
      color: 'stone',
      deskripsi: 'Bila ada hajat kebutuhan yang wajar seperti ketidakcocokan watak yang menyebabkan hilangnya rasa cinta dan tidak tercapainya sakinah mawaddah.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <HeartCrack className="w-4 h-4 text-rose-700" />
          <span>BAB 20: Fiqih Al-Firāq (Perceraian & Pemutusan Ikatan Pernikahan)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hakekat Thalaq, 5 Kondisi Hukum, & 4 Pintu Pemutusan Perkawinan
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam syariat Islam, ikatan perkawinan adalah perjanjian suci yang kokoh (*Mītsāqan Ghalīzhā*).
          Namun bila bahtera rumah tangga mengalami jalan buntu dan batasan Allah tak dapat ditegakkan lagi,
          Islam membuka pintu darurat penyelesaian berupa <strong>Thalāq</strong> (hak suami), <strong>Khul'u</strong> (gugat cerai tebusan istri),
          maupun <strong>Fasakh</strong> (pembatalan pengadilan) demi mencegah kezaliman yang lebih besar.
        </p>
      </div>

      {/* Hadits Perkara Halal yang Dibenci Allah */}
      <div className="p-5 bg-rose-50/70 rounded-xl border border-rose-300 space-y-2 text-xs text-rose-950">
        <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
          <AlertOctagon className="w-5 h-5 text-rose-700" />
          <span>Prinsip Kehati-hatian: Menjaga Ikatan Suci Perkawinan</span>
        </div>
        <p className="font-arabic text-sm text-stone-900 pt-1 leading-loose">
          «أَبْغَضُ الحَلَالِ إِلَى اللَّهِ تَعَالَى الطَّلَاقُ»
        </p>
        <p className="text-stone-700 text-[11px] leading-relaxed">
          <em>"Perkara halal yang paling dibenci oleh Allah Ta'ala adalah perceraian (thalaq)."</em> (HR. Abu Dawud no. 2178 & Ibnu Majah no. 2018).
        </p>
        <p className="text-stone-600 text-[11px] leading-relaxed pt-1">
          Oleh karena itu, syariat memerintahkan tahapan perdamaian terlebih dahulu: nasihat bijak (*Maw'izhah*), pisah ranjang sementara (*Hajr fīl madhāji'*),
          dan menghadirkan penengah juru runding dari kedua pihak keluarga (*Hakamain*, QS. An-Nisa: 34-35).
        </p>
      </div>

      {/* 5 Kondisi Hukum Perceraian */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Scale className="w-4 h-4 text-emerald-700" />
            <span>Al-Ahkām Al-Khamsah Fit-Thalāq</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Lima Status Hukum Perceraian Berdasarkan Situasi Rumah Tangga
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Hukum thalaq tidak tunggal, melainkan fleksibel mengikuti maslahat dan mudharat yang timbul:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          {hukumPerceraian.map((h, idx) => (
            <div key={idx} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between">
              <div>
                <strong className="text-stone-900 font-bold text-xs block">{h.status}</strong>
                <p className="text-stone-600 text-[10px] leading-relaxed mt-1.5">{h.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Pintu Pemutusan Perkawinan */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <Layers className="w-4 h-4 text-rose-700" />
            <span>Asbāb Furqatin Nikāh</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Empat Jalur Pemutusan Hubungan Pernikahan dalam Fiqih
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Membedakan thalaq hak suami, khulu' tebusan istri, fasakh pengadilan, dan li'an sumpah tuduhan zina:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {PINTU_PEMUTUSAN_NIKAH.map((p) => (
            <div key={p.id} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-stone-900 font-bold text-xs">{p.name}</strong>
                  <span className="text-[10px] font-arabic text-rose-800 font-bold">{p.nameArabic}</span>
                </div>
                <span className="text-[10px] text-emerald-800 font-semibold block">Inisiator: {p.pelaku}</span>
                <p className="text-stone-700 text-[11px] leading-relaxed pt-1">{p.penjelasan}</p>
              </div>

              <div className="p-2.5 bg-white rounded border border-stone-200 text-[10px] text-stone-600">
                <strong className="text-rose-950">Konsekuensi Hukum: </strong>
                {p.konsekuensi}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
