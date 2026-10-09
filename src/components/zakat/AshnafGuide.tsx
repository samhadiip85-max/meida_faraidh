import React, { useState } from 'react';
import { ASHNAF_LIST, FORBIDDEN_RECIPIENTS } from '../../data/zakatData';
import {
  Users,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  Info,
  BookOpen,
  HelpCircle,
  Scale,
  Check,
  X,
  ChevronRight,
  HeartHandshake,
  Coins,
  Building,
  GraduationCap,
} from 'lucide-react';

export function AshnafGuide() {
  const [selectedAshnafId, setSelectedAshnafId] = useState<string>('fakir');
  const [activeCheckerScenario, setActiveCheckerScenario] = useState<number | null>(null);

  const activeAshnaf =
    ASHNAF_LIST.find((a) => a.id === selectedAshnafId) || ASHNAF_LIST[0];

  // Data Kasus Simulasi Cek Kelayakan Mustahik
  const ELIGIBILITY_SCENARIOS = [
    {
      id: 1,
      title: 'Guru Ngaji / Guru Honorer dengan Gaji di Bawah UMR',
      person: 'Ustadz Ahmad (Guru Honorer)',
      kondisi: 'Mengajar full-time di madrasah dengan honor Rp 600.000/bulan, padahal kebutuhan hidup layak keluarganya Rp 2.500.000/bulan.',
      status: 'BERHAK MENERIMA ZAKAT',
      alasan: 'Masuk dalam asnaf Miskin (karena penghasilan riil hanya menutup sebagian kecil kebutuhan pokok). Sebagian ulama kontemporer juga membolehkan melalui asnaf Fisabilillah karena berjuang menegakkan syiar ilmu agama.',
      asnafKategori: 'Miskin / Fisabilillah',
      isEligible: true,
    },
    {
      id: 2,
      title: 'Pembangunan / Renovasi Masjid di Pemukiman',
      person: 'Panitia Pembangunan Masjid',
      kondisi: 'Mengajukan proposal dana zakat mal warga untuk memperluas kubah dan memasang pendingin ruangan (AC) masjid.',
      status: 'TIDAK BERHAK (MENURUT JUMHUR ULAMA)',
      alasan: 'Jumhur Ulama (Syafi\'i, Maliki, Hanafi, Hanbali) menegaskan zakat harus diserahkan sebagai kepemilikan pribadi manusia (tamlik lil-insan), bukan untuk bangunan fisik. Masjid sebaiknya didanai dari Infaq, Sedekah, atau Wakaf. Sebagian kecil ulama kontemporer membolehkan dengan syarat masjid sangat darurat.',
      asnafKategori: 'Bukan Mustahik Langsung (Alokasi Infaq/Wakaf)',
      isEligible: false,
    },
    {
      id: 3,
      title: 'Mahasiswa / Santri yang Kehabisan Bekal di Perantauan',
      person: 'Fatimah (Mahasiswi di Luar Daerah)',
      kondisi: 'Keluarganya di kampung berkecukupan, namun di kota perantauan mengalami musibah kehilangan dompet dan kehabisan bekal biaya kuliah serta makan.',
      status: 'BERHAK MENERIMA ZAKAT',
      alasan: 'Berhak menerima zakat sebagai Ibnu Sabil (musafir dalam perjalanan yang taat/mubah yang kehabisan bekal), sekadar jumlah yang mencukupi kebutuhannya untuk melanjutkan studi atau pulang ke kampung halamannya.',
      asnafKategori: 'Ibnu Sabil (Musafir)',
      isEligible: true,
    },
    {
      id: 4,
      title: 'Pengusaha yang Bangkrut Terlilit Utang Dagang Halal',
      person: 'Pak Hendra (Eks Pedagang)',
      kondisi: 'Usahanya bangkrut bukan karena judi atau foya-foya, melainkan kebakaran pasar. Memiliki utang dagang jatuh tempo yang tidak sanggup dilunasi.',
      status: 'BERHAK MENERIMA ZAKAT',
      alasan: 'Masuk dalam golongan Gharimin (orang yang terlilit utang demi kemaslahatan pribadi yang mubah). Dana zakat diberikan sejumlah utangnya yang jatuh tempo agar martabatnya terlindungi dari kurungan penjara.',
      asnafKategori: 'Gharimin (Gharim li Mashlahati Nafsihi)',
      isEligible: true,
    },
    {
      id: 5,
      title: 'Orang Tua Kandung Muzakki yang Sedang Mengalami Kesulitan',
      person: 'Ibu Kandung Muzakki',
      kondisi: 'Ayah dan ibu sudah lansia dan tidak memiliki penghasilan, lalu anaknya yang kaya ingin menyalurkan zakat malnya kepada orang tuanya tersebut.',
      status: 'HARAM / TIDAK SAH DIBERIKAN ZAKAT',
      alasan: 'Nafkah kedua orang tua kandung (ushul) dan anak kandung (furu\') adalah kewajiban mutlak anak yang mampu. Mengalihkan zakat kepada orang tua sama saja dengan melindungi harta pribadi dari kewajiban nafkah.',
      asnafKategori: 'Mahram Nafkah Wajib (Haram Menerima Zakat Anak)',
      isEligible: false,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-emerald-800 tracking-wide uppercase">
            <span className="bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-700" />
              BAB 6: Zakat · Modul 3
            </span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-500 font-sans normal-case text-xs">
              Distribusi Mustahik Syar'i (QS. At-Taubah: 60)
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mt-2.5">
            8 Asnaf Penerima Zakat & Golongan yang Diharamkan
          </h1>

          <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed">
            Penyaluran zakat telah dibatasi secara tegas dan qath'i oleh Allah SWT dalam Surah
            At-Taubah ayat 60 ke dalam <strong>delapan golongan (Ashnaf Tsamaniyah)</strong>.
            Zakat tidak sah jika dialokasikan di luar kedelapan kelompok ini. Pelajari kriteria kelayakan
            setiap asnaf, perbedaan fakir dan miskin, serta golongan yang diharamkan menerima zakat.
          </p>
        </div>
      </div>

      {/* Teks Ayat Surah At-Taubah: 60 */}
      <div className="bg-gradient-to-br from-emerald-50/80 to-teal-50/40 rounded-2xl border border-emerald-200 p-5 sm:p-6 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-emerald-700" />
            Dasar Al-Qur'an: QS. At-Taubah Ayat 60
          </span>
          <span className="text-[11px] font-mono text-emerald-800 bg-white/80 px-2 py-0.5 rounded border border-emerald-200">
            Hukum Tauqifi / Mutlak
          </span>
        </div>

        <p className="font-arabic text-lg sm:text-xl text-emerald-950 text-right leading-loose pt-1">
          إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ السَّبِيلِ ۖ فَرِيضَةً مِّنَ اللَّهِ ۗ وَاللَّهُ عَلِيمٌ حَكِيمٌ
        </p>

        <p className="text-xs text-stone-700 leading-relaxed italic border-t border-emerald-200/60 pt-2">
          "Sesungguhnya zakat-zakat itu, hanyalah untuk orang-orang fakir, orang-orang miskin, amil-amil zakat, para mu'allaf yang dibujuk hatinya, untuk (memerdekakan) budak, orang-orang yang berutang, untuk jalan Allah (fisabilillah), dan untuk mereka yang sedang dalam perjalanan (ibnu sabil), sebagai suatu ketetapan yang diwajibkan Allah; dan Allah Maha Mengetahui lagi Maha Bijaksana."
        </p>
      </div>

      {/* 8 Asnaf Interactive Grid */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
            Katalog 8 Golongan Mustahik
          </span>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-0.5">
            Kriteria Syar'i & Hak Penyaluran Tiap Asnaf
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Klik salah satu dari 8 golongan di bawah untuk mempelajari definisi, batasan kelayakan, dan dalilnya:
          </p>
        </div>

        {/* 8 Asnaf Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {ASHNAF_LIST.map((ashnaf, idx) => {
            const isSelected = selectedAshnafId === ashnaf.id;
            return (
              <button
                key={ashnaf.id}
                type="button"
                onClick={() => setSelectedAshnafId(ashnaf.id)}
                className={`p-3 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs ring-2 ring-emerald-600/20'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span
                    className={`font-bold px-1.5 py-0.2 rounded ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    Asnaf #{idx + 1}
                  </span>
                  <span
                    className={`font-arabic text-xs ${
                      isSelected ? 'text-emerald-200' : 'text-stone-400'
                    }`}
                  >
                    {ashnaf.nameArabic}
                  </span>
                </div>
                <strong className="text-xs block leading-snug">{ashnaf.name}</strong>
              </button>
            );
          })}
        </div>

        {/* Detail Panel of Selected Asnaf */}
        <div className="p-5 sm:p-6 bg-stone-50/70 rounded-2xl border border-stone-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/80 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                Rincian Fiqih Mustahik
              </span>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-0.5">
                {activeAshnaf.name}
              </h3>
            </div>
            <span className="font-arabic text-base sm:text-lg text-emerald-900 bg-white px-3 py-1 rounded-xl border border-stone-200 self-start sm:self-auto shadow-2xs font-bold">
              {activeAshnaf.nameArabic}
            </span>
          </div>

          <div className="space-y-1.5 text-xs sm:text-sm">
            <strong className="text-stone-900 block font-semibold text-xs uppercase text-emerald-800">
              Definisi & Hakekat Syar'i:
            </strong>
            <p className="text-stone-700 leading-relaxed bg-white p-3.5 rounded-xl border border-stone-200">
              {activeAshnaf.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1">
              <strong className="text-emerald-950 font-bold block text-[11px] uppercase">
                Kriteria Penentuan / Contoh Nyata:
              </strong>
              <p className="text-stone-600 leading-relaxed">
                {activeAshnaf.eligibilityCriteria}
              </p>
            </div>

            <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1">
              <strong className="text-amber-950 font-bold block text-[11px] uppercase">
                Landasan Dalil & Kaidah Fiqih:
              </strong>
              <p className="text-stone-600 leading-relaxed">{activeAshnaf.dalil}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabel Perbandingan: Fakir vs Miskin menurut Mazhab Syafi'i */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <Scale className="w-4 h-4" />
          <span>Analisis Fiqih Syafi'iyyah</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Perbedaan Fundamental Fakir (الفقير) vs Miskin (المسكين)
        </h2>
        <p className="text-xs text-stone-600 leading-relaxed">
          Dalam mazhab Syafi'i, kondisi Fakir jauh lebih memprihatinkan daripada Miskin. Oleh karena itu
          Allah SWT mendahulukan penyebutan Fakir di awal ayat sebelum golongan lainnya:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-100 text-stone-900 font-bold border-b border-stone-200">
              <tr>
                <th className="p-3 text-left">Aspek Pembeda</th>
                <th className="p-3 text-left bg-emerald-50 text-emerald-950">1. Orang Fakir (Al-Faqīr)</th>
                <th className="p-3 text-left bg-teal-50 text-teal-950">2. Orang Miskin (Al-Miskīn)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900 bg-stone-50/50">Tingkat Pemenuhan Kebutuhan</td>
                <td className="p-3 bg-emerald-50/30">
                  Hanya mampu memenuhi <strong>kurang dari 50%</strong> kebutuhan pokok hidupnya (atau sama sekali tidak memiliki harta dan penghasilan).
                </td>
                <td className="p-3 bg-teal-50/30">
                  Mampu memenuhi <strong>50% sampai 99%</strong> kebutuhan hidupnya, tetapi tetap tidak mencukupi 100%.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 bg-stone-50/50">Contoh Hitungan Konkret</td>
                <td className="p-3 bg-emerald-50/30">
                  Kebutuhan pokok Rp 2.000.000/bulan, hanya memiliki penghasilan Rp 600.000/bulan (di bawah 50%).
                </td>
                <td className="p-3 bg-teal-50/30">
                  Kebutuhan pokok Rp 2.000.000/bulan, memiliki penghasilan Rp 1.400.000/bulan (70% terpenuhi, kurang Rp 600.000).
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 bg-stone-50/50">Prioritas Penyaluran Zakat</td>
                <td className="p-3 bg-emerald-50/30 font-bold text-emerald-900">
                  Diprioritaskan paling pertama karena tingkat kedaruratannya paling tinggi.
                </td>
                <td className="p-3 bg-teal-50/30 font-bold text-teal-900">
                  Urutan kedua setelah fakir untuk menutupi kekurangan nafkahnya.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Mustahik Eligibility Checker */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              Studi Kasus Kontekstual Siswa MAPK
            </span>
            <h2 className="text-lg font-bold text-stone-900 font-serif mt-0.5">
              Simulasi Cek Kelayakan Mustahik Zakat (Real Case)
            </h2>
          </div>
          <span className="text-xs text-stone-500">Klik kasus untuk melihat fatwa status hukumnya</span>
        </div>

        <div className="space-y-3">
          {ELIGIBILITY_SCENARIOS.map((sc) => {
            const isOpened = activeCheckerScenario === sc.id;
            return (
              <div
                key={sc.id}
                className="border border-stone-200 rounded-xl overflow-hidden transition-all bg-stone-50/40"
              >
                <button
                  type="button"
                  onClick={() => setActiveCheckerScenario(isOpened ? null : sc.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-stone-100/70 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                        sc.isEligible
                          ? 'bg-emerald-700 text-white'
                          : 'bg-rose-700 text-white'
                      }`}
                    >
                      {sc.isEligible ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-stone-900 block">
                        {sc.title}
                      </strong>
                      <span className="text-[11px] text-stone-500">{sc.person}</span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded border whitespace-nowrap hidden sm:inline-block ${
                      sc.isEligible
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                        : 'bg-rose-100 text-rose-800 border-rose-300'
                    }`}
                  >
                    {sc.status.split(' ')[0]}
                  </span>
                </button>

                {isOpened && (
                  <div className="p-4 pt-1 bg-white border-t border-stone-200 text-xs space-y-2.5">
                    <div className="p-2.5 bg-stone-50 rounded-lg text-stone-600 leading-relaxed">
                      <strong>Kondisi Riil:</strong> {sc.kondisi}
                    </div>

                    <div
                      className={`p-3 rounded-lg border leading-relaxed space-y-1 ${
                        sc.isEligible
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-rose-50/70 border-rose-200 text-rose-950'
                      }`}
                    >
                      <strong className="block text-xs uppercase font-bold">
                        Status Fatwa: {sc.status}
                      </strong>
                      <p>{sc.alasan}</p>
                      <span className="text-[11px] font-bold block pt-1">
                        Kategori Asnaf: {sc.asnafKategori}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4 Golongan yang Haram Menerima Zakat */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
          <ShieldAlert className="w-4 h-4 text-rose-600" />
          <span>Larangan Penyaluran Zakat</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Golongan yang Diharamkan Menerima Zakat Fardhu
        </h2>
        <p className="text-xs text-stone-600 leading-relaxed">
          Zakat tidak boleh diserahkan sembarangan. Apabila muzakki menyalurkan zakat kepada golongan
          berikut, zakatnya batal dan tidak menggugurkan kewajiban fardhu:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
          {FORBIDDEN_RECIPIENTS.map((item) => (
            <div
              key={item.title}
              className="p-4 bg-rose-50/50 rounded-xl border border-rose-200 space-y-1.5"
            >
              <h3 className="font-bold text-rose-950 text-sm flex items-center gap-1.5">
                <X className="w-4 h-4 text-rose-600 shrink-0" />
                {item.title}
              </h3>
              <p className="text-stone-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}

          {/* Mahram yang Wajib Dinafkahi */}
          <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-200 space-y-1.5 md:col-span-2">
            <h3 className="font-bold text-rose-950 text-sm flex items-center gap-1.5">
              <X className="w-4 h-4 text-rose-600 shrink-0" />
              Keluarga / Kerabat yang Wajib Dinafkahi (Orang Tua, Anak, Istri)
            </h3>
            <p className="text-stone-700 leading-relaxed">
              Muzakki haram memberikan zakat kepada orang yang nafkahnya menjadi tanggung jawab pribadinya,
              seperti kedua orang tua kandung ke atas (kakek/nenek), anak kandung ke bawah (cucu), dan istri sah.
              Namun dibolehkan memberikan zakat kepada saudara kandung, paman, bibi, atau mertua selama mereka
              termasuk mustahik dan tidak berada dalam tanggungan nafkah wajib muzakki.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
