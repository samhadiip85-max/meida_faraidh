import React, { useState } from 'react';
import { WUDHU_STEPS } from '../../data/thaharahData';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Wind,
  Droplets,
  BookOpen,
  Info,
  Check,
  ChevronRight,
  Flame,
} from 'lucide-react';

export function WudhuGhuslGuide() {
  const [activeSubTab, setActiveSubTab] = useState<'wudhu' | 'ghusl' | 'tayammum'>('wudhu');
  const [simStep, setSimStep] = useState<number>(1);

  const WUDHU_INTERACTIVE_STEPS = [
    {
      id: 1,
      name: 'Membaca Basmalah & Mencuci Telapak Tangan',
      nameArabic: 'التَّسْمِيَة وَغَسْلُ الكَفَّيْنِ',
      status: 'Sunnah Muakkadah',
      desc: 'Membaca "Bismillāhir-Rahmānir-Rahīm" dan membasuh kedua telapak tangan hingga pergelangan tangan sebanyak 3 kali serta menyela-nyela jari.',
      doText: 'Membasuh sela-sela jari tangan',
    },
    {
      id: 2,
      name: 'Berkumur-kumur (Al-Madhmadhoh)',
      nameArabic: 'المَضْمَضَةُ',
      status: 'Sunnah Muakkadah',
      desc: 'Memasukkan air ke dalam mulut menggunakan tangan kanan, memutarnya di dalam rongga mulut untuk membersihkan sisa makanan, lalu mengeluarkannya sebanyak 3 kali.',
      doText: 'Membersihkan sela-sela gigi dan rongga mulut',
    },
    {
      id: 3,
      name: 'Menghirup Air ke Hidung & Mengeluarkannya',
      nameArabic: 'الاِسْتِنْشَاقُ وَالاِسْتِنْثَارُ',
      status: 'Sunnah Muakkadah',
      desc: 'Menghirup air ke dalam lubang hidung dengan tangan kanan (istinsyaq), lalu menghembuskannya keluar dengan memencet hidung menggunakan tangan kiri (istintsar) sebanyak 3 kali.',
      doText: 'Menghirup air perlahan agar tidak tersedak',
    },
    {
      id: 4,
      name: 'Membasuh Wajah & Niat di Dalam Hati',
      nameArabic: 'غَسْلُ الوَجْهِ مَعَ النِّيَّةِ',
      status: 'RUKUN FARDHU (WAJIB)',
      desc: 'Rukun Pertama & Kedua: Niat di dalam hati bersamaan saat air pertama kali menyentuh wajah ("Nawaitu raf\'al hadatsil ashghari fardhan lillāhi ta\'ālā"). Batas wajah: panjangnya dari tempat tumbuhnya rambut kepala hingga dagu bawah; lebarnya dari telinga kanan ke telinga kiri.',
      doText: 'Meratakan air ke seluruh wajah, alis, kumis, dan jenggot tipis',
    },
    {
      id: 5,
      name: 'Membasuh Kedua Tangan Sampai Siku',
      nameArabic: 'غَسْلُ اليَدَيْنِ إِلَى المِرْفَقَيْنِ',
      status: 'RUKUN FARDHU (WAJIB)',
      desc: 'Rukun Ketiga: Membasuh kedua tangan dari ujung jari hingga melewati siku (kedua siku wajib terbasuh sempurna), dimulai dari tangan kanan 3 kali lalu tangan kiri 3 kali.',
      doText: 'Pastikan siku dan lipatan kulit terbasuh air merata',
    },
    {
      id: 6,
      name: 'Mengusap Sebagian Kepala / Rambut',
      nameArabic: 'مَسْحُ بَعْضِ الرَّأْسِ',
      status: 'RUKUN FARDHU (WAJIB)',
      desc: 'Rukun Keempat: Mengusap sebagian kepala atau beberapa helai rambut yang masih berada di batas area kepala dengan tangan yang dibasahi air. (Sunnah: mengusap seluruh kepala).',
      doText: 'Minimal satu atau beberapa helai rambut di kepala tersentuh basahan',
    },
    {
      id: 7,
      name: 'Mengusap Kedua Telinga Luar dan Dalam',
      nameArabic: 'مَسْحُ الأُذُنَيْنِ ظَاهِرِهِمَا وَبَاطِنِهِمَا',
      status: 'Sunnah Muakkadah',
      desc: 'Mengusap daun telinga bagian luar dengan ibu jari dan bagian dalam (lekukan telinga) dengan jari telunjuk menggunakan air baru yang bersih sebanyak 3 kali.',
      doText: 'Jari telunjuk di bagian dalam dan jempol di bagian daun telinga belakang',
    },
    {
      id: 8,
      name: 'Membasuh Kedua Kaki Sampai Mata Kaki',
      nameArabic: 'غَسْلُ الرِّجْلَيْنِ إِلَى الكَعْبَيْنِ',
      status: 'RUKUN FARDHU (WAJIB)',
      desc: 'Rukun Kelima: Membasuh kedua kaki hingga mata kaki terendam/terbasuh sempurna. Disunnahkan menyela-nyela jari kaki dengan jari kelingking tangan kiri, kanan 3x lalu kiri 3x.',
      doText: 'Pastikan tumit belakang dan mata kaki tidak kering',
    },
    {
      id: 9,
      name: 'Tertib (Berurutan Tanpa Terbalik)',
      nameArabic: 'التَّرْتِيبُ',
      status: 'RUKUN FARDHU (WAJIB)',
      desc: 'Rukun Keenam: Menjalankan urutan rukun sesuai yang difirmankan Allah SWT dalam QS. Al-Maidah: 6: Niat + Wajah -> Tangan -> Kepala -> Kaki.',
      doText: 'Tidak boleh membasuh kaki mendahului membasuh wajah',
    },
    {
      id: 10,
      name: 'Membaca Doa Setelah Selesai Wudhu',
      nameArabic: 'الدُّعَاءُ عَقِبَ الوُضُوءِ',
      status: 'Sunnah Muakkadah (Fadhilah Agung)',
      desc: 'Menghadap kiblat dan mengangkat tangan seraya membaca doa syahadat wudhu. Rasulullah SAW bersabda: barangsiapa membacanya, dibukakan baginya 8 pintu surga (HR. Muslim).',
      doText: 'Asyhadu allā ilāha illallāh wahdahu lā syarīka lah...',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Droplets className="w-4 h-4 text-emerald-700" />
          <span>BAB 1: Fiqih Thaharah · Bersuci dari Hadats</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Wudhu, Mandi Wajib (Ghusl) & Tayammum
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Hadats adalah keadaan maknawi pada diri seorang muslim yang menghalangi sahnya shalat dan ibadah tertentu.
          Hadats kecil disucikan dengan <strong>Wudhu</strong>, hadats besar disucikan dengan <strong>Mandi Wajib (Ghusl)</strong>,
          dan keduanya dapat digantikan oleh <strong>Tayammum</strong> dengan debu suci apabila ada udzur syar'i.
        </p>
      </div>

      {/* Switcher Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-3">
        {[
          { id: 'wudhu', label: '1. Fiqih Wudhu & Simulator Rukun' },
          { id: 'ghusl', label: '2. Mandi Wajib (Ghusl Janabah)' },
          { id: 'tayammum', label: '3. Fiqih Tayammum (Debu Suci)' },
        ].map((tab) => {
          const isSelected = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                isSelected
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ============================================================ */}
      {/* SUBTAB 1: WUDHU */}
      {/* ============================================================ */}
      {activeSubTab === 'wudhu' && (
        <div className="space-y-6">
          {/* Simulator Interaktif Langkah Wudhu */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  <Sparkles className="w-4 h-4" />
                  <span>Simulator Praktik 10 Urutan Wudhu Sempurna</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-stone-900 font-serif mt-0.5">
                  Langkah {simStep} dari 10: {WUDHU_INTERACTIVE_STEPS[simStep - 1].name}
                </h2>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  WUDHU_INTERACTIVE_STEPS[simStep - 1].status.includes('RUKUN')
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                }`}
              >
                {WUDHU_INTERACTIVE_STEPS[simStep - 1].status}
              </span>
            </div>

            {/* Stepper Buttons */}
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
              {WUDHU_INTERACTIVE_STEPS.map((st) => {
                const isActive = simStep === st.id;
                const isRukun = st.status.includes('RUKUN');
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSimStep(st.id)}
                    className={`py-2 px-1 rounded-lg text-center font-bold text-xs transition-all border ${
                      isActive
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : isRukun
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <span className="block text-[10px] opacity-75">#{st.id}</span>
                    <span className="truncate block">{isRukun ? 'Rukun' : 'Sunnah'}</span>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Box */}
            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-stone-400">
                  LANGKAH KE-{simStep}
                </span>
                <span className="font-arabic text-base sm:text-lg font-bold text-emerald-800">
                  {WUDHU_INTERACTIVE_STEPS[simStep - 1].nameArabic}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                {WUDHU_INTERACTIVE_STEPS[simStep - 1].desc}
              </p>

              <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center justify-between gap-3 text-xs">
                <span className="text-stone-600">
                  <strong>Poin Kunci Gerakan: </strong>
                  {WUDHU_INTERACTIVE_STEPS[simStep - 1].doText}
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    disabled={simStep === 1}
                    onClick={() => setSimStep((prev) => Math.max(1, prev - 1))}
                    className="px-2.5 py-1 text-xs rounded border border-stone-300 disabled:opacity-40 hover:bg-stone-100"
                  >
                    ← Sebelumnya
                  </button>
                  <button
                    type="button"
                    disabled={simStep === 10}
                    onClick={() => setSimStep((prev) => Math.min(10, prev + 1))}
                    className="px-2.5 py-1 text-xs rounded bg-emerald-700 text-white disabled:opacity-40 hover:bg-emerald-800"
                  >
                    Lanjut →
                  </button>
                </div>
              </div>
            </div>

            {/* Doa Sesudah Wudhu */}
            {simStep === 10 && (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2 text-xs">
                <span className="font-bold text-emerald-900 block text-sm">
                  Lafadz Doa Selesai Wudhu:
                </span>
                <p className="font-arabic text-base text-right text-emerald-950 leading-loose">
                  أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ، وَاجْعَلْنِي مِنَ المُتَطَهِّرِينَ، وَاجْعَلْنِي مِنْ عِبَادِكَ الصَّالِحِينَ
                </p>
                <p className="text-stone-600 italic">
                  "Asyhadu allā ilāha illallāh wahdahu lā syarīka lah, wa asyhadu anna Muhammadan 'abduhū wa rasūluh. Allāhummaj'alnī minat-tawwābīna waj'alnī minal mutathahhirīna waj'alnī min 'ibādikash-shālihīn."
                </p>
              </div>
            )}
          </div>

          {/* 6 Rukun Fardhu Wudhu (Teori Pokok) */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-stone-900 font-serif">
                6 Rukun Fardhu Wudhu (QS. Al-Maidah: 6)
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Bila salah satu rukun fardhu ini terlewat atau tidak terpenuhi, maka wudhu tidak sah:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {WUDHU_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-md bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                      {step.stepNumber}
                    </span>
                    <span className="font-arabic text-stone-500 text-[11px]">{step.nameArabic}</span>
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm">{step.name}</h3>
                  <p className="text-stone-600 leading-relaxed">{step.description}</p>
                  {step.dalilText && (
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block font-mono">
                      {step.dalilText}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4 Pembatal Wudhu */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm uppercase tracking-wide">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>4 Perkara yang Membatalkan Wudhu (Mazhab Syafi'i)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-200 space-y-1">
                <strong className="text-rose-950 block font-semibold">
                  1. Keluarnya Sesuatu dari Dua Jalan (Qubul & Dubur)
                </strong>
                <p className="text-rose-900">
                  Keluarnya angin (kentut), air kencing, kotoran (feses), madzi, wadi, ulat, atau darah, baik yang biasa maupun yang langka.
                </p>
              </div>

              <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-200 space-y-1">
                <strong className="text-rose-950 block font-semibold">
                  2. Hilangnya Akal / Kesadaran
                </strong>
                <p className="text-rose-900">
                  Hilang akal karena tidur, mabuk, pingsan, gila, atau pengaruh obat bius. <em>Pengecualian:</em> tidur duduk dengan posisi pantat mantap menempel di lantai.
                </p>
              </div>

              <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-200 space-y-1">
                <strong className="text-rose-950 block font-semibold">
                  3. Bersentuhan Kulit Lawan Jenis Bukan Mahram
                </strong>
                <p className="text-rose-900">
                  Persentuhan kulit langsung antara laki-laki dan perempuan yang sudah baligh serta bukan mahram tanpa penghalang kain (termasuk suami-istri menurut Mazhab Syafi'i).
                </p>
              </div>

              <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-200 space-y-1">
                <strong className="text-rose-950 block font-semibold">
                  4. Menyentuh Kemaluan dengan Telapak Tangan
                </strong>
                <p className="text-rose-900">
                  Menyentuh kemaluan (qubul) manusia atau lingkaran dubur dengan bagian dalam telapak tangan atau bagian dalam jari-jemari tanpa alas.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUBTAB 2: MANDI WAJIB (GHUSL) */}
      {/* ============================================================ */}
      {activeSubTab === 'ghusl' && (
        <div className="space-y-6">
          {/* 6 Sebab Wajib Mandi */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              6 Sebab yang Mewajibkan Mandi Besar (Ghusl Janabah)
            </h2>
            <p className="text-xs text-stone-500">
              3 sebab terjadi pada laki-laki dan perempuan, dan 3 sebab lainnya khusus dialami oleh perempuan:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {[
                { title: '1. Keluarnya Mani (Sperma)', desc: 'Keluarnya air mani dengan syahwat atau karena mimpi basah (*ihtilām*).' },
                { title: '2. Bersetubuh (Jima\' / Dukhul)', desc: 'Masuknya kepala kemaluan (*hasyafah*) ke dalam farji, meskipun tanpa disertai keluarnya air mani.' },
                { title: '3. Meninggal Dunia', desc: 'Wafatnya seorang muslim (wajib dimandikan fardhu kifayah, kecuali mati syahid di medan perang).' },
                { title: '4. Berhentinya Darah Haid', desc: 'Selesainya masa darah haid bulanan bagi wanita muslimah.' },
                { title: '5. Berhentinya Darah Nifas', desc: 'Selesainya masa darah nifas setelah melahirkan (maksimal 60 hari).' },
                { title: '6. Melahirkan (Wiladah)', desc: 'Proses persalinan bayi atau keguguran gumpalan darah/daging, meskipun tanpa disertai darah.' },
              ].map((item) => (
                <div key={item.title} className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                  <strong className="text-stone-900 block font-semibold">{item.title}</strong>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2 Rukun Mandi Wajib */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
              Hanya Ada 2 Rukun Fardhu Mandi Wajib
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-1.5">
                <span className="font-bold text-emerald-900 block text-sm">
                  Rukun 1: Niat Mandi Wajib di Dalam Hati
                </span>
                <p className="text-stone-700 leading-relaxed">
                  Berniat di dalam hati saat air pertama kali menyiram salah satu bagian tubuh:
                </p>
                <div className="p-2.5 bg-white rounded border border-emerald-200 text-emerald-950 font-mono text-[11px]">
                  "Nawaitul ghusla li raf'il hadatsil akbari fardhan lillāhi ta'ālā"
                </div>
                <span className="text-[10px] text-stone-500">
                  (Aku berniat mandi untuk menghilangkan hadats besar fardhu karena Allah Ta'ala)
                </span>
              </div>

              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-1.5">
                <span className="font-bold text-emerald-900 block text-sm">
                  Rukun 2: Meratakan Air ke Seluruh Tubuh
                </span>
                <p className="text-stone-700 leading-relaxed">
                  Menyiramkan air mutlak hingga membasahi seluruh permukaan kulit tubuh dan helai rambut tanpa ada yang tertinggal, termasuk pangkal rambut, lubang telinga luar, pusar, dan sela-sela lipatan badan.
                </p>
              </div>
            </div>
          </div>

          {/* Tata Cara Mandi Junub Sunnah Nabi */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
              7 Langkah Mandi Junub Sesuai Sunnah Nabi SAW (HR. Bukhari & Muslim)
            </h3>
            <ol className="space-y-2 text-xs list-decimal list-inside text-stone-700">
              <li className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong>Mencuci kedua tangan:</strong> Membasuh telapak tangan sebanyak 3 kali di luar bejana.
              </li>
              <li className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong>Istinja' & mencuci kemaluan:</strong> Menggunakan tangan kiri untuk membersihkan kotoran dan najis di kemaluan dan dubur.
              </li>
              <li className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong>Mencuci tangan kembali:</strong> Menggosok tangan kiri dengan sabun atau tanah lalu membilasnya.
              </li>
              <li className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong>Berwudhu secara sempurna:</strong> Sebagaimana wudhu untuk shalat.
              </li>
              <li className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong>Menyela-nyela pangkal rambut:</strong> Memasukkan jari-jemari basah ke pangkal rambut kepala 3 kali.
              </li>
              <li className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong>Menyiram seluruh kepala 3 kali:</strong> Kemudian mengguyur badan sebelah kanan lalu badan sebelah kiri.
              </li>
              <li className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong>Membasuh kedua kaki:</strong> Bergeser sedikit dari tempat mandi semula untuk membilas kedua kaki.
              </li>
            </ol>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUBTAB 3: TAYAMMUM */}
      {/* ============================================================ */}
      {activeSubTab === 'tayammum' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-stone-900 font-serif">
                Fiqih Tayammum: Keringanan Bersuci dengan Debu Suci
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Tayammum adalah rukhsah (keringanan) syariat sebagai pengganti wudhu dan mandi wajib ketika ada halangan syar'i:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 block text-sm">4 Sebab Sahnya Tayammum:</span>
                <ul className="space-y-1 list-disc list-inside text-stone-700">
                  <li>Ketiadaan air mutlak setelah berusaha mencari setelah masuk waktu shalat.</li>
                  <li>Sakit atau luka parah yang dikhawatirkan bertambah buruk jika terkena air.</li>
                  <li>Suhu dingin ekstrem yang membahayakan jiwa jika memakai air.</li>
                  <li>Air yang ada hanya mencukupi kebutuhan minum manusia atau hewan ternak.</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 block text-sm">4 Rukun Fardhu Tayammum:</span>
                <ol className="space-y-1.5 list-decimal list-inside text-stone-700">
                  <li><strong>Niat:</strong> Niat untuk membolehkan shalat (*istibāhah*), bukan menghilangkan hadats.</li>
                  <li><strong>Mengusap Wajah:</strong> Dengan tepukan debu suci pertama.</li>
                  <li><strong>Mengusap Kedua Tangan sampai Siku:</strong> Dengan tepukan debu suci kedua.</li>
                  <li><strong>Tertib:</strong> Mendahulukan usapan wajah sebelum usapan tangan.</li>
                </ol>
              </div>
            </div>

            {/* Praktik 2 Kali Tepukan Debu */}
            <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2 text-xs">
              <span className="font-bold text-amber-950 block text-sm">
                Tata Cara Dua Tepukan Debu (Adh-Dharbatāni):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-white rounded border border-amber-200 space-y-1">
                  <strong className="text-stone-900 block">Tepukan Pertama (Untuk Wajah):</strong>
                  <p className="text-stone-600">
                    Menepukkan kedua telapak tangan ke permukaan tanah/dinding berdebu suci, meniupnya sedikit agar debu tidak terlalu tebal, lalu mengusapkannya ke seluruh wajah bersamaan dengan niat tayammum.
                  </p>
                </div>
                <div className="p-3 bg-white rounded border border-amber-200 space-y-1">
                  <strong className="text-stone-900 block">Tepukan Kedua (Untuk Kedua Tangan):</strong>
                  <p className="text-stone-600">
                    Menepukkan kedua telapak tangan ke debu kedua, lalu mengusap tangan kanan dari ujung jari hingga melewati siku menggunakan tangan kiri, dan sebaliknya untuk tangan kiri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
