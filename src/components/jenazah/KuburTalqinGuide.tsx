import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Info,
  HelpCircle,
  HeartHandshake,
  Footprints,
  AlertTriangle,
  BookOpen,
  Copy,
  Check,
  Layers,
  ChevronRight,
  ChevronLeft,
  Volume2,
  Scale,
  Award,
  RotateCcw,
} from 'lucide-react';

export function KuburTalqinGuide() {
  const [activeTab, setActiveTab] = useState<
    'pemakaman' | 'takziyah' | 'ziarah_talqin' | 'studi_kasus' | 'kuis_interaktif'
  >('pemakaman');

  // State for Sub-Tab 1: Pemakaman
  const [selectedSoilType, setSelectedSoilType] = useState<'keras' | 'gembur' | 'sempit'>('keras');
  const [activeStep, setActiveStep] = useState<number>(1);

  // State for Sub-Tab 2: Takziyah
  const [selectedDoaCategory, setSelectedDoaCategory] = useState<
    'dewasa' | 'anak' | 'musibah' | 'sabar'
  >('dewasa');
  const [copiedDoaId, setCopiedDoaId] = useState<string | null>(null);

  // State for Sub-Tab 3: Talqin
  const [talqinFontSize, setTalqinFontSize] = useState<'normal' | 'large'>('normal');

  // State for Sub-Tab 5: Kuis
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Copy helper
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedDoaId(id);
    setTimeout(() => {
      setCopiedDoaId(null);
    }, 2000);
  };

  // Doa data for Takziyah
  const DOA_TAKZIYAH_LIST = {
    dewasa: {
      id: 'doa_dewasa',
      title: 'Doa Takziyah untuk Jenazah Muslim Dewasa',
      context: 'Lafadz yang paling masyhur diajarkan para ulama mazhab Syafi\'i saat melayat:',
      arabic: 'أَعْظَمَ اللهُ أَجْرَكَ، وَأَحْسَنَ عَزَاءَكَ، وَغَفَرَ لِمَيِّتِكَ',
      latin: "A'zhamallāhu ajraka, wa ahsana 'azā'aka, wa ghafara li mayyitika.",
      arti: 'Semoga Allah melipatgandakan pahalamu, memperbagus penghiburan atas dukamu, dan mengampuni dosa saudaramu yang wafat.',
      penjelasan:
        'Lafadz ini mencakup tiga doa esensial: pahala besar bagi yang sabar, ketabahan hati dari kesedihan, dan ampunan maghfirah bagi mayit.',
    },
    anak: {
      id: 'doa_anak',
      title: 'Doa Takziyah bila Jenazah adalah Anak Kecil (Belum Baligh)',
      context: 'Karena anak kecil belum memiliki dosa mukallaf, fokus doa adalah tabungan pahala bagi kedua orang tuanya:',
      arabic: 'أَعْظَمَ اللهُ أَجْرَكُمْ، وَأَحْسَنَ عَزَاءَكُمْ، وَجَعَلَهُ لَكُمْ فَرَطًا وَذُخْرًا وَشَفِيعًا مُجَابًا',
      latin: "A'zhamallāhu ajrakum, wa ahsana 'azā'akum, wa ja'alahu lakum farathan wa dzukhran wa syafī'an mujābā.",
      arti: 'Semoga Allah memperbesar pahala kalian, memperbagus penghiburan kalian, dan menjadikannya tabungan pahala pendahulu, simpanan akhirat, serta pemberi syafaat yang dikabulkan bagi kalian.',
      penjelasan:
        'Anak kecil yang wafat menjadi dinding penghalang dari siksa api neraka bagi orang tua yang ikhlas dan ridha atas qadha Allah.',
    },
    musibah: {
      id: 'doa_musibah',
      title: 'Doa Istirja\' saat Mendengar Musibah Kematian',
      context: 'Doa yang dianjurkan dibaca pertama kali saat mendengar berita wafatnya seseorang (HR. Muslim):',
      arabic: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي، وَأَخْلِفْ لِي خَيْرًا مِنْهَا',
      latin: "Innā lillāhi wa innā ilaihi rāji'ūn, allāhumma-jurnī fī mushībatī, wa akhlif lī khairan minhā.",
      arti: 'Sesungguhnya kami adalah milik Allah dan kepada-Nya kami kembali. Ya Allah, berilah aku pahala atas musibah yang menimpaku ini, dan berilah aku ganti yang lebih baik daripadanya.',
      penjelasan:
        'Ummu Salamah RA membaca doa ini ketika suaminya (Abu Salamah) wafat, dan Allah menggantikannya dengan Rasulullah SAW sebagai suaminya.',
    },
    sabar: {
      id: 'doa_sabar',
      title: 'Lafadz Pesan Kesabaran Rasulullah SAW',
      context: 'Ucapan Rasulullah SAW kepada putri beliau Zainab saat putranya sakit parah menjelang ajal (HR. Bukhari & Muslim):',
      arabic: 'إِنَّ لِلَّهِ مَا أَخَذَ، وَلَهُ مَا أَعْطَى، وَكُلُّ شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمًّى، فَلْتَصْبِرْ وَلْتَحْتَسِبْ',
      latin: "Inna lillāhi mā akhadza, wa lahū mā a'thā, wa kullu syai'in 'indahū bi-ajalim musammā, faltashbir wal-tahtasib.",
      arti: 'Sesungguhnya milik Allah apa yang Dia ambil, dan milik-Nya pula apa yang Dia berikan. Segala sesuatu di sisi-Nya memiliki batas waktu yang telah ditentukan, maka bersabarlah dan berharaplah pahala dari-Nya.',
      penjelasan:
        'Mengingatkan keluarga bahwa kematian bukanlah kehilangan total, melainkan hak sang Pemilik sejati (Allah SWT) untuk mengambil amanah-Nya.',
    },
  };

  // 7 Langkah Pemakaman
  const PEMAKAMAN_STEPS = [
    {
      step: 1,
      title: 'Penurunan Jenazah ke Liang Kubur',
      arab: 'إِنْزَالُ المَيِّتِ',
      desc: 'Jenazah diturunkan secara perlahan dan hati-hati melalui arah kaki kuburan (arah selatan di wilayah Indonesia) dengan mendahulukan bagian kepala mayit.',
      dalil: 'Sunnah riwayat Abdullah bin Zaid RA bahwa Nabi SAW memasukkan jenazah dari arah kaki kubur.',
      tips: 'Sebaiknya diturunkan oleh 2-3 orang laki-laki yang berbadan kuat, diutamakan mahram atau keluarga terdekat yang pada malam sebelumnya tidak berhadats besar.',
    },
    {
      step: 2,
      title: 'Membaca Doa Peletakan Mayit',
      arab: 'بِسْمِ اللَّهِ وَعَلَى مِلَّةِ رَسُولِ اللَّهِ',
      desc: 'Orang yang menerima dan meletakkan jenazah ke dalam liang disunnahkan melafalkan doa:',
      doaArab: 'بِسْمِ اللَّهِ وَعَلَى مِلَّةِ رَسُولِ اللَّهِ',
      doaLatin: "Bismillāhi wa 'alā millati rasūlillāh",
      doaArti: 'Dengan nama Allah dan di atas agama serta sunnah Rasulullah SAW.',
      dalil: 'HR. Abu Dawud no. 3213 & At-Tirmidzi no. 1046 dari Ibnu Umar RA (Hadits Shahih).',
      tips: 'Boleh juga membaca lafadz: "Bismillāhi wa \'alā sunnati rasūlillāh".',
    },
    {
      step: 3,
      title: 'Memiringkan Jenazah Menghadap Kiblat',
      arab: 'تَوْجِيهُهُ إِلَى القِبْلَةِ',
      desc: 'Wajib menghadapkan jenazah ke arah Kiblat. Jenazah dibaringkan di atas lambung kanannya (bukan telentang atau tengkurap), sehingga wajah, dada, dan perutnya menghadap lurus ke Ka\'bah.',
      dalil: 'Nabi SAW bersabda mengenai Ka\'bah: "Kiblat kalian saat hidup maupun setelah mati" (HR. Abu Dawud).',
      tips: 'Jika jenazah dimakamkan membelakangi kiblat, wajib dibongkar kembali untuk diarahkan ke kiblat selama jasad belum rusak.',
    },
    {
      step: 4,
      title: 'Membuka Seluruh Simpul Tali Kafan',
      arab: 'حَلُّ عُقَدِ الكَفَنِ',
      desc: 'Seluruh ikatan tali kafan (dari kepala, dada, pinggang, lutut hingga kaki) dibuka simpulnya agar mayit tidak dalam keadaan terikat atau terbelenggu di alam barzakh.',
      dalil: 'Atsar sahabat Ibnu Mas\'ud RA: "Apabila kalian memasukkan mayit ke liang lahat, maka lepaskanlah simpul-simpul ikatannya".',
      tips: 'Inilah hikmah disunnahkannya mengikat tali kafan di sisi kiri tubuh saat mengafani, agar ketika jenazah dimiringkan ke kanan, simpul mudah dijangkau dari atas.',
    },
    {
      step: 5,
      title: 'Membuka Kafan Wajah & Pipi Menempel Tanah',
      arab: 'إِفْضَاءُ الخَدِّ إِلَى التُّرَابِ',
      desc: 'Kain kafan pada bagian wajah dibuka sedikit sehingga pipi kanan jenazah bersentuhan langsung dengan tanah dasar liang lahat sebagai lambang kerendahan dan tawadhu\' di hadapan Sang Pencipta.',
      dalil: 'Wasiat Umar bin Khattab RA menjelang wafatnya: "Rapatkan pipiku ke tanah agar Rabbku mengampuniku".',
      tips: 'Letakkan kepala mayit di atas gumpalan tanah yang agak tinggi sebagai bantalan alami (pengganti bantal).',
    },
    {
      step: 6,
      title: 'Mengganjal Punggung dengan Gumpalan Tanah',
      arab: 'وَضْعُ اللَّبِنَاتِ وَالتُّرَابِ',
      desc: 'Menaruh beberapa bulatan atau gumpalan tanah padat di belakang punggung dan tengkuk mayit agar posisi miringnya stabil dan tidak terjungkal telentang saat ditimbun tanah.',
      dalil: 'Amalan para sahabat Nabi SAW saat memakamkan jenazah para syuhada dan keluarga.',
      tips: 'Bila liang lahat telah rapi, tutupi rongga lahat dengan papan kayu atau batu bata mentah agar tanah timbunan tidak langsung menimpa tubuh mayit.',
    },
    {
      step: 7,
      title: 'Penimbunan, Pemadatan & Penataan Makam',
      arab: 'إِهَالَةُ التُّرَابِ وَالتَّسْوِيَةُ',
      desc: 'Tanah ditimbunkan secara perlahan. Disunnahkan bagi seluruh pelayat yang hadir menaburkan tiga genggam tanah dengan kedua tangannya ke arah liang kubur sambil mendoakan.',
      dalil: 'HR. Ibnu Majah: "Nabi SAW menaburkan tanah di atas kubur mayit sebanyak tiga kali dari arah kepalanya".',
      tips: 'Gundukan tanah ditinggikan sekadar satu jengkal (syibr) di atas permukaan tanah, diberi nisan penanda, disiram air dingin, dan ditaburi kerikil.',
    },
  ];

  // Kuis Data
  const KUIS_QUESTIONS = [
    {
      id: 1,
      q: 'Dalam kondisi tanah bagaimanakah Liang Lahad (Al-Lahd) paling afdhal digunakan menurut kesepakatan Jumhur Fuqaha?',
      options: [
        { key: 'A', text: 'Tanah yang gembur, berpasir, dan mudah longsor' },
        { key: 'B', text: 'Tanah yang padat, keras, dan tidak mudah runtuh' },
        { key: 'C', text: 'Tanah rawa berlumpur dan berair' },
        { key: 'D', text: 'Bebas di segala kondisi tanpa perbedaan hukum' },
      ],
      correct: 'B',
      explanation:
        'Liang Lahad (mengeruk dinding barat liang kubur) paling afdhal jika tanah padat dan keras. Bila tanah gembur/berpasir, afdhal memakai Liang Cempuri (Asy-Syaqq) untuk mencegah longsor.',
    },
    {
      id: 2,
      q: 'Bagaimanakah posisi jenazah yang wajib diarahkan saat diletakkan di dalam liang kubur menurut Mazhab Syafi\'i?',
      options: [
        { key: 'A', text: 'Telentang dengan wajah menghadap ke langit' },
        { key: 'B', text: 'Tengkurap menghadap ke bawah dasar kubur' },
        { key: 'C', text: 'Dimiringkan di atas lambung kanan dan wajah menghadap Kiblat' },
        { key: 'D', text: 'Duduk bersila bersandar pada papan kubur' },
      ],
      correct: 'C',
      explanation:
        'Wajib menghadapkan jenazah ke arah Kiblat dengan membaringkannya di atas lambung kanannya, sebagaimana Ka\'bah adalah kiblat kaum muslimin saat hidup dan mati.',
    },
    {
      id: 3,
      q: 'Apakah sunnah yang diajarkan Rasulullah SAW kepada para tetangga dan kerabat ketika ada keluarga yang tertimpa musibah kematian?',
      options: [
        { key: 'A', text: 'Meminta keluarga mayit menyembelih sapi untuk pesta kenduri bersama' },
        { key: 'B', text: 'Membuatkan dan mengantarkan makanan bagi keluarga yang berduka' },
        { key: 'C', text: 'Menyalakan kembang api dan membunyikan alat musik penghibur' },
        { key: 'D', text: 'Membebankan seluruh biaya jamuan para tamu kepada keluarga duka' },
      ],
      correct: 'B',
      explanation:
        'Nabi SAW bersabda: "Buatkanlah makanan untuk keluarga Ja\'far, karena sungguh telah datang kepada mereka urusan yang menyibukkan mereka" (HR. Abu Dawud & Tirmidzi). Menuntut jamuan dari keluarga duka termasuk perkara makruh/dilarang.',
    },
    {
      id: 4,
      q: 'Berapakah batas waktu yang disunnahkan untuk melakukan takziyah (melayat) menurut ketetapan mayoritas ulama Syafi\'iyyah?',
      options: [
        { key: 'A', text: 'Hanya 1 jam setelah pemakaman' },
        { key: 'B', text: 'Maksimal 3 hari setelah pemakaman (kecuali bagi yang sedang safar)' },
        { key: 'C', text: 'Selama 40 hari penuh tanpa henti' },
        { key: 'D', text: 'Selama 100 hari berturut-turut' },
      ],
      correct: 'B',
      explanation:
        'Batas waktu takziyah adalah tiga hari sejak pemakaman. Setelah lewat 3 hari makruh bertakziyah karena dikhawatirkan mengungkit dan memperbaharui luka kesedihan keluarga.',
    },
    {
      id: 5,
      q: 'Kapan waktu yang disunnahkan untuk membacakan Talqin Mayit di atas kuburan menurut tradisi keilmuan Mazhab Syafi\'i?',
      options: [
        { key: 'A', text: 'Saat jenazah baru dimandikan di rumah duka' },
        { key: 'B', text: 'Ketika jenazah sedang diusung di atas keranda jalan' },
        { key: 'C', text: 'Sesaat setelah kuburan selesai ditimbun sempurna dengan tanah' },
        { key: 'D', text: 'Tujuh hari setelah pemakaman berlangsung' },
      ],
      correct: 'C',
      explanation:
        'Sunnah mentalqin mayit yang mukallaf dilakukan sesaat setelah tanah kubur ditimbun sempurna, di mana para pelayat berdiri sejenak mendoakan keteguhan (tatsbit) iman mayit menghadapi pertanyaan Malaikat Munkar dan Nakir.',
    },
  ];

  const handleSelectQuiz = (questionId: number, optionKey: string) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionKey }));
  };

  const calculateQuizScore = () => {
    let correctCount = 0;
    KUIS_QUESTIONS.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) {
        correctCount += 1;
      }
    });
    return Math.round((correctCount / KUIS_QUESTIONS.length) * 100);
  };

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-emerald-800 tracking-wide uppercase">
            <span className="bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              BAB 5: Pemulasaran Jenazah · Modul 3
            </span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-500 font-sans normal-case text-xs">
              Kurikulum Fiqih MAPK Kemenag RI
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mt-2.5">
            Pemakaman, Takziyah & Ziarah Kubur
          </h1>

          <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed">
            Menyelami kewajiban fardhu kifayah terakhir terhadap jenazah muslim:{' '}
            <strong>pemakaman syar'i</strong> (perbedaan liang lahad dan cempuri), adab dan lafadz doa{' '}
            <strong>takziyah</strong> (melayat) tanpa membebani keluarga duka, tuntunan{' '}
            <strong>talqin mayit</strong>, serta panduan <strong>ziarah kubur</strong> yang bersih dari
            syirik dan khurafat.
          </p>
        </div>
      </div>

      {/* Main Feature Subtabs Navigation */}
      <div className="flex items-center gap-1.5 p-1.5 bg-stone-100/90 rounded-2xl border border-stone-200/80 overflow-x-auto scrollbar-thin">
        {[
          { id: 'pemakaman', label: '1. Pemakaman (Lahad & Syaqq)', icon: Compass },
          { id: 'takziyah', label: '2. Fiqih Takziyah & Doa', icon: HeartHandshake },
          { id: 'ziarah_talqin', label: '3. Talqin & Ziarah Kubur', icon: Footprints },
          { id: 'studi_kasus', label: '4. Studi Kasus Kontemporer', icon: Scale },
          { id: 'kuis_interaktif', label: '5. Kuis Pemahaman Modul', icon: Award },
        ].map((tab) => {
          const isSelected = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-200' : 'text-stone-500'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ============================================================ */}
      {/* SUBTAB 1: PEMAKAMAN (DAFN AL-MAYYIT) */}
      {/* ============================================================ */}
      {activeTab === 'pemakaman' && (
        <div className="space-y-6">
          {/* Bagian 1: Interaktif Pemilihan Bentuk Liang Kubur */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Simulasi Karakteristik Tanah & Bentuk Liang
                </span>
                <h2 className="text-lg font-bold text-stone-900 font-serif mt-0.5">
                  Bentuk Liang Kubur: Lahad (الَّلَحْدُ) vs Syaqq / Cempuri (الشَّقُّ)
                </h2>
              </div>
              <span className="text-xs text-stone-500 bg-stone-50 px-3 py-1 rounded-full border border-stone-200 self-start sm:self-auto font-medium">
                Pilih Tipe Tanah untuk Analisis Syar'i
              </span>
            </div>

            {/* Selector Tipe Tanah */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: 'keras',
                  title: 'Tanah Keras & Padat (Lempung / Padas)',
                  rekomendasi: 'Liang Lahad (Al-Lahd)',
                  status: 'Afdhal & Sunnah Utama',
                  badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
                },
                {
                  id: 'gembur',
                  title: 'Tanah Gembur / Pasir / Rawan Longsor',
                  rekomendasi: 'Liang Cempuri (Asy-Syaqq)',
                  status: 'Afdhal karena Darurat Longsor',
                  badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
                },
                {
                  id: 'sempit',
                  title: 'Lahan Kota Metropolitan (TPU Padat)',
                  rekomendasi: 'Makam Tumpang / Regulasi Khusus',
                  status: 'Rukhshah Fatwa Ulama',
                  badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
                },
              ].map((soil) => {
                const isSelected = selectedSoilType === soil.id;
                return (
                  <button
                    key={soil.id}
                    type="button"
                    onClick={() => setSelectedSoilType(soil.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? 'border-emerald-700 bg-emerald-50/70 ring-2 ring-emerald-600/20 shadow-xs'
                        : 'border-stone-200 bg-stone-50/50 hover:bg-stone-100/70 text-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${soil.badgeColor}`}>
                        {soil.status}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      )}
                    </div>
                    <strong className="text-xs sm:text-sm font-bold text-stone-900 block">
                      {soil.title}
                    </strong>
                    <span className="text-xs font-semibold text-emerald-900 mt-1 block">
                      Solusi: {soil.rekomendasi}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail Liang yang Terpilih */}
            {selectedSoilType === 'keras' && (
              <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50/40 rounded-xl border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-xs">
                      1
                    </span>
                    <h3 className="font-bold text-stone-900 text-sm">
                      Liang Lahad (Al-Lahd - اللَّحْدُ)
                    </h3>
                  </div>
                  <span className="font-arabic text-emerald-900 text-base font-bold">اللَّحْد</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  <strong>Definisi:</strong> Lubang galian mendatar yang dikeruk menjorok ke dalam pada
                  dinding dasar kubur sebelah barat (arah kiblat). Jenazah dimasukkan ke dalam relung tersebut,
                  kemudian mulut relung ditutup dengan papan kayu atau batu bata mentah sebelum ditimbun.
                </p>
                <div className="p-3 bg-white/90 rounded-lg border border-emerald-200/80 text-xs text-stone-700 space-y-1">
                  <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Dalil Syar'i (Sunnah Shahihah):</span>
                  </div>
                  <p className="font-arabic text-right text-emerald-950 text-sm leading-loose">
                    اللَّحْدُ لَنَا وَالشَّقُّ لِغَيْرِنَا
                  </p>
                  <p className="italic text-stone-600">
                    "Liang lahad adalah untuk kita (kaum muslimin), sedangkan liang syaqq adalah untuk selain kita." (HR. Abu Dawud no. 3208 & Tirmidzi no. 1045, dari Sa'ad bin Abi Waqqas RA).
                  </p>
                </div>
              </div>
            )}

            {selectedSoilType === 'gembur' && (
              <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50/40 rounded-xl border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-amber-700 text-white font-bold flex items-center justify-center text-xs">
                      2
                    </span>
                    <h3 className="font-bold text-stone-900 text-sm">
                      Liang Cempuri (Asy-Syaqq - الشَّقُّ)
                    </h3>
                  </div>
                  <span className="font-arabic text-amber-900 text-base font-bold">الشَّقّ</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  <strong>Definisi:</strong> Galian parit kecil yang dibuat persis di tengah-tengah dasar liang
                  kubur membujur dari utara ke selatan. Jenazah diletakkan di tengah parit tersebut, lalu diapit
                  papan atau bata mentah di kanan dan kirinya, serta ditutup bagian atasnya sebelum diurug tanah.
                </p>
                <div className="p-3 bg-white/90 rounded-lg border border-amber-200/80 text-xs text-stone-700 space-y-1">
                  <strong className="text-amber-950 block">Rukhshah dan Kapan Digunakan:</strong>
                  <p className="leading-relaxed">
                    Ulama Mazhab Syafi'i sepakat bahwa apabila tanah kubur berpasir, berlumpur, mudah runtuh,
                    atau basah berair di mana liang lahat mustahil dibuat tanpa longsor, maka{' '}
                    <strong>Asy-Syaqq menjadi pilihan paling utama</strong> demi menjaga kehormatan jasad mayit.
                  </p>
                </div>
              </div>
            )}

            {selectedSoilType === 'sempit' && (
              <div className="p-5 bg-gradient-to-br from-sky-50 to-blue-50/40 rounded-xl border border-sky-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-sky-700 text-white font-bold flex items-center justify-center text-xs">
                      3
                    </span>
                    <h3 className="font-bold text-stone-900 text-sm">
                      Makam Tumpang di Lahan Perkotaan Padat
                    </h3>
                  </div>
                  <span className="font-arabic text-sky-900 text-base font-bold">الدَّفْنُ الْمُتَعَدِّد</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  <strong>Hukum Asal:</strong> Satu jenazah dimakamkan dalam satu liang kubur secara mandiri.
                  Haram menumpuk atau menggabungkan jenazah lain selama jasad jenazah pertama belum hancur
                  menjadi tanah.
                </p>
                <div className="p-3 bg-white/90 rounded-lg border border-sky-200/80 text-xs text-stone-700 space-y-1">
                  <strong className="text-sky-950 block">Ketentuan Makam Tumpang Syar'i (Fatwa MUI):</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-600">
                    <li>Diperbolehkan karena darurat ketiadaan lahan baru pemakaman di kota besar.</li>
                    <li>
                      Telah melewati masa perkiraan hancurnya jasad jenazah terdahulu (minimal 3 s.d. 5 tahun
                      bergantung kondisi tanah).
                    </li>
                    <li>Sisa tulang-belulang yang ditemukan dikumpulkan dengan hormat di sisi liang kubur.</li>
                    <li>Mendapat persetujuan dari pihak keluarga/ahli waris jenazah terdahulu.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Standar Ukuran Liang Kubur */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-[11px] text-stone-400 font-bold uppercase block">Kedalaman Liang</span>
                <strong className="text-sm text-stone-900 block mt-0.5">Setinggi Orang Melambai (± 2 Meter)</strong>
                <p className="text-stone-500 text-[11px] mt-1">
                  Agar menahan bau busuk jasad keluar dan aman dari galian binatang buas pemakan bangkai.
                </p>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-[11px] text-stone-400 font-bold uppercase block">Panjang & Lebar</span>
                <strong className="text-sm text-stone-900 block mt-0.5">Panjang Mayit + 50 cm | Lebar ± 80-100 cm</strong>
                <p className="text-stone-500 text-[11px] mt-1">
                  Memberikan ruang gerak yang cukup dan lapang bagi 2 orang petugas yang menurunkan jenazah.
                </p>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-[11px] text-stone-400 font-bold uppercase block">Arah Liang</span>
                <strong className="text-sm text-stone-900 block mt-0.5">Membujur Utara ke Selatan</strong>
                <p className="text-stone-500 text-[11px] mt-1">
                  Agar kepala mayit berada di utara dan kaki di selatan, sehingga saat dimiringkan ke lambung kanan akan tepat menghadap barat (Kiblat di Indonesia).
                </p>
              </div>
            </div>
          </div>

          {/* Bagian 2: 7 Langkah Syar'i Memasukkan Jenazah (Interactive Step-by-Step) */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Panduan Praktik Lapangan
                </span>
                <h2 className="text-lg font-bold text-stone-900 font-serif">
                  7 Tahapan Syar'i Memasukkan Jenazah ke Liang Kubur
                </h2>
              </div>
              <span className="text-xs text-stone-500 font-medium">
                Klik tahapan untuk mempelajari detail panduannya:
              </span>
            </div>

            {/* Stepper Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {PEMAKAMAN_STEPS.map((s) => {
                const isCurrent = activeStep === s.step;
                return (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setActiveStep(s.step)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      isCurrent
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                    }`}
                  >
                    <span className="text-[10px] font-bold block opacity-80">Tahap {s.step}</span>
                    <strong className="text-xs line-clamp-1 mt-0.5">{s.title.split(' ')[0]}</strong>
                  </button>
                );
              })}
            </div>

            {/* Step Card View */}
            {(() => {
              const currentStepData = PEMAKAMAN_STEPS[activeStep - 1];
              return (
                <div className="p-5 sm:p-6 bg-stone-50/70 rounded-2xl border border-stone-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/80 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-emerald-800 text-white font-bold flex items-center justify-center text-sm shadow-2xs">
                        {currentStepData.step}
                      </span>
                      <div>
                        <h3 className="font-bold text-base text-stone-900">
                          {currentStepData.title}
                        </h3>
                        <span className="text-xs text-stone-500">Tahap ke-{currentStepData.step} dari 7 langkah pemakaman</span>
                      </div>
                    </div>
                    <span className="font-arabic text-emerald-900 text-base font-bold">
                      {currentStepData.arab}
                    </span>
                  </div>

                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                    {currentStepData.desc}
                  </p>

                  {/* Doa jika ada */}
                  {currentStepData.doaArab && (
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
                      <span className="text-xs font-bold text-emerald-950 block">Lafadz Bacaan:</span>
                      <p className="font-arabic text-lg text-emerald-950 text-right leading-loose">
                        {currentStepData.doaArab}
                      </p>
                      <p className="text-xs font-mono text-emerald-900 font-semibold">
                        "{currentStepData.doaLatin}"
                      </p>
                      <p className="text-xs text-stone-600 italic">
                        Artinya: {currentStepData.doaArti}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                      <strong className="text-stone-800 block text-[11px] uppercase font-bold text-emerald-800">
                        Dasar Dalil / Riwayat:
                      </strong>
                      <p className="text-stone-600 leading-relaxed">{currentStepData.dalil}</p>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                      <strong className="text-stone-800 block text-[11px] uppercase font-bold text-amber-800">
                        Catatan Fiqih & Tips Praktis:
                      </strong>
                      <p className="text-stone-600 leading-relaxed">{currentStepData.tips}</p>
                    </div>
                  </div>

                  {/* Next / Prev Step Controls */}
                  <div className="flex items-center justify-between pt-3 border-t border-stone-200 text-xs">
                    <button
                      type="button"
                      disabled={activeStep <= 1}
                      onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                      className="px-3 py-1.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-100 disabled:opacity-40 font-semibold flex items-center gap-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Langkah Sebelumnya
                    </button>

                    <span className="text-stone-400 font-mono">
                      {activeStep} / {PEMAKAMAN_STEPS.length}
                    </span>

                    <button
                      type="button"
                      disabled={activeStep >= PEMAKAMAN_STEPS.length}
                      onClick={() =>
                        setActiveStep((prev) => Math.min(PEMAKAMAN_STEPS.length, prev + 1))
                      }
                      className="px-3 py-1.5 rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 disabled:opacity-40 font-semibold flex items-center gap-1 shadow-2xs"
                    >
                      Langkah Berikutnya
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}

            {/* Sunnah Penimbunan & Larangan Makam */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
                <span className="font-bold text-emerald-950 block text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Sunnah Setelah Penimbunan Tanah:
                </span>
                <ul className="list-disc list-inside space-y-1.5 text-stone-700">
                  <li>Seluruh hadirin melempar 3 genggam tanah dengan kedua tangannya ke arah kubur.</li>
                  <li>Gundukan tanah ditinggikan <strong>sekadar satu jengkal (syibr)</strong> agar diketahui sebagai makam sehingga tidak diinjak.</li>
                  <li>Memasang batu nisan sederhana di atas kepala mayit sebagai tanda pengenal.</li>
                  <li>Menyiram air dingin dan menabur kerikil di atas permukaan makam untuk merapatkan tanah dari terpaan angin.</li>
                </ul>
              </div>

              <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-2">
                <span className="font-bold text-rose-950 block text-sm flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-700" />
                  Larangan Seputar Makam dalam Syariat:
                </span>
                <ul className="list-disc list-inside space-y-1.5 text-rose-900">
                  <li><strong>Duduk, Berpijak, atau Menginjak Kuburan:</strong> Nabi SAW bersabda ancamannya lebih buruk daripada duduk di atas bara api (HR. Muslim).</li>
                  <li><strong>Membangun Tembok / Kubah Megah:</strong> Menghamburkan harta dan menyerupai perbuatan kaum jahiliyah.</li>
                  <li><strong>Mengecat / Memplester Semen Permanen:</strong> Rasulullah SAW melarang mengecat dan menembok kuburan (HR. Muslim).</li>
                  <li><strong>Menuliskan Ayat Al-Qur'an pada Nisan:</strong> Dikhawatirkan terinjak atau kotor oleh kotoran burung.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUBTAB 2: TAKZIYAH & ADAB BELASUNGKAWA */}
      {/* ============================================================ */}
      {activeTab === 'takziyah' && (
        <div className="space-y-6">
          {/* Card Pengantar Takziyah */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <HeartHandshake className="w-4 h-4" />
              <span>Fiqih Takziyah (Belasungkawa & Melayat)</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 font-serif">
              Hakekat, Hukum, Batas Waktu & Adab Syar'i Takziyah
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              <strong>Takziyah (التَّعْزِيَة)</strong> secara etimologi bermakna <em>tasliyah</em> (menghibur
              dan memberi ketabahan). Dalam istilah fiqih adalah mengunjungi keluarga orang yang meninggal
              dunia untuk menganjurkan kesabaran, menghibur hati mereka dari duka mendalam, mendoakan ampunan
              bagi mayit, serta meringankan beban yang mereka pikul.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <strong className="text-stone-900 text-sm block">1. Hukum & Batas Waktu 3 Hari</strong>
                <p className="text-stone-600 leading-relaxed">
                  Hukum takziyah adalah <strong>Sunnah Muakkadah</strong> bagi setiap muslim. Waktu takziyah
                  dianjurkan sejak mayit wafat hingga <strong>tiga hari setelah pemakaman</strong>.
                </p>
                <div className="p-2.5 bg-amber-50 rounded-lg text-amber-900 font-medium border border-amber-200 text-[11px]">
                  <strong>Setelah lewat 3 hari:</strong> Makruh melakukan takziyah karena dikhawatirkan
                  membangkitkan dan mengungkit kembali kesedihan yang telah mulai mereda, kecuali jika pelayat
                  atau pihak keluarga baru saja pulang dari perjalanan jauh (safar).
                </div>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <strong className="text-stone-900 text-sm block">2. Sunnah Membawakan Makanan (Hadits Ja'far)</strong>
                <p className="text-stone-600 leading-relaxed">
                  Ketika Ja'far bin Abi Thalib RA gugur syahid dalam perang Mu'tah, Rasulullah SAW bersabda:
                </p>
                <p className="font-arabic text-emerald-950 text-right text-sm">
                  اصْنَعُوا لِآلِ جَعْفَرٍ طَعَامًا فَإِنَّهُ قَدْ أَتَاهُمْ مَا يَشْغَلُهُمْ
                </p>
                <p className="text-stone-500 italic text-[11px]">
                  "Buatkanlah makanan untuk keluarga Ja'far, karena sungguh telah datang kepada mereka urusan yang menyibukkan mereka." (HR. Abu Dawud & At-Tirmidzi).
                </p>
                <div className="p-2.5 bg-rose-50 rounded-lg text-rose-900 font-medium border border-rose-200 text-[11px]">
                  <strong>Kritik Sosial:</strong> Jangan sampai keluarga duka yang sedang bersedih justru dibebani memasak untuk para pelayat secara berlebih-lebihan.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Generator Lafadz Doa Takziyah */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Koleksi Doa Takziyah Ma'tsur
                </span>
                <h3 className="text-lg font-bold text-stone-900 font-serif">
                  Generator Lafadz Doa & Ucapan Belasungkawa
                </h3>
              </div>
              <span className="text-xs text-stone-500">Pilih situasi duka untuk teks doa lengkap</span>
            </div>

            {/* Doa Categories Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'dewasa', label: 'Jenazah Dewasa' },
                { id: 'anak', label: 'Jenazah Anak Kecil' },
                { id: 'musibah', label: 'Doa Istirja\' (Musibah)' },
                { id: 'sabar', label: 'Pesan Sabar Rasulullah' },
              ].map((c) => {
                const isSelected = selectedDoaCategory === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedDoaCategory(c.id as any)}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>

            {/* Display Doa Card */}
            {(() => {
              const currentDoa = DOA_TAKZIYAH_LIST[selectedDoaCategory];
              const isCopied = copiedDoaId === currentDoa.id;
              return (
                <div className="p-5 sm:p-6 bg-gradient-to-br from-emerald-50/60 to-stone-50 rounded-2xl border border-emerald-200 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                        {currentDoa.title}
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">{currentDoa.context}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          `${currentDoa.arabic}\n\n"${currentDoa.latin}"\n\nArtinya: ${currentDoa.arti}`,
                          currentDoa.id
                        )
                      }
                      className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 hover:bg-stone-50 text-xs font-bold text-stone-700 flex items-center gap-1.5 shadow-2xs transition-all shrink-0"
                      title="Salin doa ke clipboard"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span className="text-emerald-700">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-500" />
                          <span>Salin Doa</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Arabic Text */}
                  <div className="p-4 bg-white/90 rounded-xl border border-emerald-200/80 shadow-2xs">
                    <p className="font-arabic text-xl sm:text-2xl text-emerald-950 text-right leading-loose">
                      {currentDoa.arabic}
                    </p>
                  </div>

                  {/* Transliterasi & Arti */}
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <p className="font-mono text-emerald-900 font-semibold text-xs leading-relaxed">
                      "{currentDoa.latin}"
                    </p>
                    <p className="text-stone-700 italic leading-relaxed">
                      <strong>Artinya:</strong> "{currentDoa.arti}"
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-100/60 rounded-xl text-xs text-emerald-950 font-medium">
                    <strong>Faidah Ilmiah:</strong> {currentDoa.penjelasan}
                  </div>
                </div>
              );
            })()}

            {/* 4 Larangan saat Tertimpa Musibah */}
            <div className="p-5 bg-rose-50/70 border border-rose-200 rounded-xl space-y-3 text-xs">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>Larangan Keras Syariat Saat Tertimpa Musibah Kematian:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-rose-900">
                <div className="p-3 bg-white/80 rounded-lg border border-rose-200/80 space-y-1">
                  <strong>1. Meratap (An-Niyāhah)</strong>
                  <p className="text-stone-600">
                    Menangis histeris dengan berteriak-teriak dan menyebut-nyebut jasa mayit seolah memprotes takdir Allah.
                  </p>
                </div>
                <div className="p-3 bg-white/80 rounded-lg border border-rose-200/80 space-y-1">
                  <strong>2. Menampar Pipi & Merobek Baju</strong>
                  <p className="text-stone-600">
                    Nabi SAW berlepas diri dari orang yang menampar pipi, mencabik baju, dan menyeru seruan jahiliyah saat berduka (HR. Bukhari).
                  </p>
                </div>
                <div className="p-3 bg-white/80 rounded-lg border border-rose-200/80 space-y-1">
                  <strong>3. Membebani Finansial Keluarga</strong>
                  <p className="text-stone-600">
                    Menjadikan rumah duka tempat kenduri makan besar yang membebani finansial ahli waris mayit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUBTAB 3: TALQIN & ZIARAH KUBUR */}
      {/* ============================================================ */}
      {activeTab === 'ziarah_talqin' && (
        <div className="space-y-6">
          {/* Card 1: Fiqih Ziarah Kubur & Doa Salam */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Footprints className="w-4 h-4" />
              <span>Fiqih Ziarah Kubur Sunnah Nabi SAW</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 font-serif">
              Hukum, Hikmah & Adab Syar'i Ziarah Kubur
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Pada masa awal Islam, ziarah kubur sempat dilarang untuk memutus sisa-sisa kemusyrikan jahiliyah.
              Setelah akidah tauhid kokoh, Rasulullah SAW mensyariatkannya kembali secara tegas:
            </p>

            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2 text-xs">
              <p className="font-arabic text-base sm:text-lg text-emerald-950 text-right leading-loose">
                كُنْتُ نَهَيْتُكُمْ عَنْ زِيَارَةِ القُبُورِ، فَزُورُوهَا فَإِنَّهَا تُذَكِّرُكُمُ الآخِرَةَ
              </p>
              <p className="font-mono text-emerald-900 text-xs">
                "Kuntu nahaitukum 'an ziyāratil qubūr, fa zūrūhā fa-innahā tudzakkirukumul ākhirah."
              </p>
              <p className="text-stone-600 italic">
                "Dahulu aku melarang kalian berziarah kubur, maka sekarang berziarahlah kalian! Karena sesungguhnya ziarah kubur itu dapat mengingatkan kalian akan hari akhirat." (HR. Muslim no. 977).
              </p>
            </div>

            {/* Doa Salam saat Masuk Makam */}
            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <strong className="text-stone-900 text-xs sm:text-sm block">
                  Lafadz Doa Salam saat Masuk Area Pemakaman Muslim:
                </strong>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      "السَّلَامُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ، وَإِنَّا إِنْ شَاءَ اللهُ بِكُمْ لَاحِقُونَ، نَسْأَلُ اللهَ لَنَا وَلَكُمُ العَافِيَةَ\n\n\"Assalāmu 'alaikum dāra qaumim mu'minīn, wa innā insyā'allāhu bikum lāhiqūn, nas'alullāha lanā wa lakumul 'āfiyah.\"\n\n(HR. Muslim)",
                      'salam_kubur'
                    )
                  }
                  className="px-2.5 py-1 bg-white hover:bg-stone-100 rounded border border-stone-300 text-xs text-stone-700 font-semibold flex items-center gap-1 shadow-2xs"
                >
                  {copiedDoaId === 'salam_kubur' ? (
                    <span className="text-emerald-700 font-bold">Tersalin</span>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-stone-500" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              <p className="font-arabic text-lg sm:text-xl text-right text-stone-900 leading-loose">
                السَّلَامُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ، وَإِنَّا إِنْ شَاءَ اللهُ بِكُمْ لَاحِقُونَ، نَسْأَلُ اللهَ لَنَا وَلَكُمُ العَافِيَةَ
              </p>
              <p className="font-mono text-xs text-stone-700">
                "Assalāmu 'alaikum dāra qaumim mu'minīn, wa innā insyā'allāhu bikum lāhiqūn, nas'alullāha lanā wa lakumul 'āfiyah."
              </p>
              <p className="text-stone-500 italic text-xs">
                (Semoga keselamatan tercurah kepada kalian wahai penghuni perkampungan orang-orang mukmin, dan sesungguhnya kami insya Allah akan menyusul kalian. Kami memohon keselamatan kepada Allah untuk kami dan untuk kalian). (HR. Muslim).
              </p>
            </div>

            {/* 8 Adab Syar'i Ziarah Kubur */}
            <div className="space-y-3 pt-1">
              <strong className="text-xs uppercase font-bold text-stone-700 block">
                8 Adab Syar'i ketika Berziarah Kubur:
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {[
                  {
                    no: 1,
                    title: 'Niat Mengingat Akhirat',
                    desc: 'Tujuan utama adalah melembutkan hati dan mengingat kematian, bukan untuk rekreasi atau pamer.',
                  },
                  {
                    no: 2,
                    title: 'Mengucapkan Salam Syar\'i',
                    desc: 'Menyapa ahli kubur dengan doa salam sebagaimana diajarkan Rasulullah SAW.',
                  },
                  {
                    no: 3,
                    title: 'Menghadap Kiblat saat Berdoa',
                    desc: 'Saat mendoakan ampunan bagi mayit, disunnahkan menghadap ke arah Kiblat (bukan menghadap kuburan).',
                  },
                  {
                    no: 4,
                    title: 'Membaca Ayat Al-Qur\'an',
                    desc: 'Membaca surat Al-Fatihah atau Yasin dan memohon agar pahala bacaan dihadiahkan bagi almarhum.',
                  },
                  {
                    no: 5,
                    title: 'Dilarang Menginjak / Duduk di Atas Makam',
                    desc: 'Menjaga kehormatan makam kaum muslimin dan tidak menginjaknya.',
                  },
                  {
                    no: 6,
                    title: 'Melepas Sandal Bila Masuk Makam',
                    desc: 'Dianjurkan melepas alas kaki bila berjalan di sela-sela makam (bila aman dari duri/panas).',
                  },
                  {
                    no: 7,
                    title: 'Larangan Syirik & Minta Berkah',
                    desc: 'Haram meminta hajat atau pertolongan kepada mayit. Doa hanya boleh dipanjatkan kepada Allah SWT semata.',
                  },
                  {
                    no: 8,
                    title: 'Menjaga Lisan & Ketenangan',
                    desc: 'Tidak tertawa terbahak-bahak, bergunjing, atau berbicara kotor di area pemakaman.',
                  },
                ].map((item) => (
                  <div
                    key={item.no}
                    className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-md bg-emerald-700 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                      {item.no}
                    </span>
                    <div>
                      <strong className="text-stone-900 block text-xs">{item.title}</strong>
                      <p className="text-stone-500 text-[11px] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Panduan & Teks Lengkap Talqin Mayit */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Tradisi Keilmuan Mazhab Syafi'i
                </span>
                <h3 className="text-lg font-bold text-stone-900 font-serif">
                  Teks Lengkap Talqin Mayit Setelah Pemakaman
                </h3>
              </div>

              {/* Ukuran Font Toggle */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto">
                <span className="text-xs text-stone-500">Ukuran Font:</span>
                <button
                  type="button"
                  onClick={() => setTalqinFontSize('normal')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-bold border transition-colors ${
                    talqinFontSize === 'normal'
                      ? 'bg-emerald-800 text-white border-emerald-800'
                      : 'bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  Standar
                </button>
                <button
                  type="button"
                  onClick={() => setTalqinFontSize('large')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-bold border transition-colors ${
                    talqinFontSize === 'large'
                      ? 'bg-emerald-800 text-white border-emerald-800'
                      : 'bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  Besar
                </button>
              </div>
            </div>

            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
              <strong className="block text-sm">Sunnah Mentalqin Mayit Dewasa:</strong>
              <p className="leading-relaxed text-stone-700">
                Imam An-Nawawi dalam <em>Al-Majmu' Syarh Al-Muhadzdzab</em> menegaskan bahwa mentalqin mayit
                mukallaf setelah penimbunan kubur adalah <strong>Mustahab (Sunnah)</strong> menurut jumhur
                ashab Syafi'iyyah, berdasarkan hadits Abu Umamah Al-Bahili RA dan amalan penduduk Syam.
                Tujuannya untuk menuntun keteguhan akidah mayit saat dua malaikat (Munkar dan Nakir) datang menguji.
              </p>
            </div>

            {/* Teks Talqin Lengkap */}
            <div className="p-5 sm:p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-5">
              <div className="border-b border-stone-200 pb-3">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Teks Bacaan Talqin Arab Berharakat Penuh:
                </span>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  (Dibaca oleh orang yang berdiri di sisi kepala kubur menghadap wajah jenazah):
                </p>
              </div>

              {/* Teks Arab */}
              <div
                className={`space-y-4 font-arabic text-stone-900 text-right leading-loose bg-white p-5 rounded-xl border border-stone-200 shadow-2xs ${
                  talqinFontSize === 'large' ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
                }`}
              >
                <p>
                  يَا عَبْدَ اللهِ ابْنَ أَمَةِ اللهِ، اذْكُرِ العَهْدَ الَّذِي خَرَجْتَ عَلَيْهِ مِنَ الدُّنْيَا:
                  شَهَادَةَ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللهِ،
                  وَأَنَّ الجَنَّةَ حَقٌّ، وَأَنَّ النَّارَ حَقٌّ، وَأَنَّ البَعْثَ حَقٌّ،
                  وَأَنَّ السَّاعَةَ آتِيَةٌ لَا رَيْبَ فِيهَا، وَأَنَّ اللهَ يَبْعَثُ مَنْ فِي القُبُورِ.
                </p>
                <p>
                  وَأَنَّكَ رَضِيتَ بِاللهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا،
                  وَبِالقُرْآنِ إِمَامًا، وَبِالكَعْبَةِ قِبْلَةً، وَبِالمُؤْمِنِينَ إِخْوَانًا.
                </p>
                <p className="text-emerald-900 font-bold">
                  اللَّهُمَّ ثَبِّتْهُ عِنْدَ السُّؤَالِ، اللَّهُمَّ لَقِّنْهُ حُجَّتَهُ، وَاغْفِرْ لَنَا وَلَهُ يَا رَبَّ العَالَمِينَ.
                </p>
              </div>

              {/* Transliterasi & Arti Terjemahan */}
              <div className="space-y-2 text-xs text-stone-700 bg-white p-4 rounded-xl border border-stone-200 leading-relaxed">
                <strong className="text-stone-900 block font-semibold text-xs uppercase text-emerald-800">
                  Transliterasi & Arti Terjemahan:
                </strong>
                <p className="font-mono text-[11px] text-stone-800">
                  "Yā 'abdallāhibna amatillāh, idzkuril 'ahdal ladzī kharajta 'alaihi minad dunyā: syahādata an lā ilāha illallāh wa anna Muhammadar rasūlullāh, wa annal jannata haqqun, wa annan nāra haqqun, wa annal ba'tsa haqqun, wa annas sā'ata ātiyatun lā raiba fīhā, wa annallāha yab'atsu man fīl qubūr. Wa annaka radhīta billāhi Rabbā, wa bil-Islāmi dīnā, wa bi Muhammadin shallallāhu 'alaihi wa sallama Nabiyyā, wa bil-Qur'āni Imāmā, wa bil-Ka'bati Qiblah, wa bil-mu'minīna ikhwānā. Allāhumma tsabbithu 'indas su'āl..."
                </p>
                <p className="italic text-stone-600 mt-2">
                  "Wahai hamba Allah putra hamba perempuan Allah, ingatlah perjanjian yang engkau bawa keluar dari dunia ini: Kesaksian bahwa tiada Tuhan selain Allah dan bahwa Muhammad adalah utusan Allah; bahwa surga itu nyata, neraka itu nyata, hari kebangkitan itu nyata, dan hari kiamat pasti datang tanpa keraguan, serta Allah akan membangkitkan siapapun yang berada di dalam kubur. Dan engkau telah ridha Allah sebagai Tuhanmu, Islam sebagai agamamu, Muhammad SAW sebagai Nabimu, Al-Qur'an sebagai pedomanmu, Ka'bah sebagai kiblatmu, dan kaum mukminin sebagai saudaramu. Ya Allah, teguhkanlah ia saat menghadapi pertanyaan kubur..."
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      "يَا عَبْدَ اللهِ ابْنَ أَمَةِ اللهِ، اذْكُرِ العَهْدَ الَّذِي خَرَجْتَ عَلَيْهِ مِنَ الدُّنْيَا: شَهَادَةَ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللهِ، وَأَنَّ الجَنَّةَ حَقٌّ، وَأَنَّ النَّارَ حَقٌّ، وَأَنَّ البَعْثَ حَقٌّ، وَأَنَّ السَّاعَةَ آتِيَةٌ لَا رَيْبَ فِيهَا، وَأَنَّ اللهَ يَبْعَثُ مَنْ فِي القُبُورِ. وَأَنَّكَ رَضِيتَ بِاللهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا، وَبِالقُرْآنِ إِمَامًا، وَبِالكَعْبَةِ قِبْلَةً، وَبِالمُؤْمِنِينَ إِخْوَانًا. اللَّهُمَّ ثَبِّتْهُ عِنْدَ السُّؤَالِ...",
                      'talqin_text'
                    )
                  }
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-all"
                >
                  {copiedDoaId === 'talqin_text' ? (
                    <span>Teks Talqin Tersalin!</span>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Naskah Talqin</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUBTAB 4: STUDI KASUS & FATWA KONTEMPORER */}
      {/* ============================================================ */}
      {activeTab === 'studi_kasus' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Scale className="w-4 h-4" />
              <span>Fiqih Nawazil & Isu Kontemporer</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 font-serif">
              Studi Kasus Pemulasaran Jenazah di Era Modern
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Memahami hukum syariat Islam dalam menghadapi kondisi darurat dan perkembangan zaman
              berdasarkan fatwa ulama mu'tabar dan Majelis Ulama Indonesia (MUI):
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
              {/* Kasus 1: Meninggal di Kapal Laut */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm block flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-emerald-700" />
                  1. Jenazah Meninggal di Atas Kapal Laut
                </span>
                <p className="text-stone-600 leading-relaxed">
                  <strong>Masalah:</strong> Seorang muslim wafat di tengah pelayaran samudra yang jauh dari daratan.
                </p>
                <div className="p-3 bg-white rounded-lg border border-stone-200 text-stone-700 space-y-1">
                  <strong>Solusi Syariat (Mazhab Syafi'i):</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-600">
                    <li>Jika kapal diperkirakan tiba di daratan dalam waktu dekat tanpa khawatir jasad membusuk, wajib ditahan untuk dimakamkan di darat.</li>
                    <li>Jika daratan masih berhari-hari dan dikhawatirkan jasad rusak/membusuk: Jenazah tetap <strong>wajib dimandikan, dikafani, dan dishalatkan penuh</strong> di atas kapal.</li>
                    <li>Kemudian diikatkan dua bilah papan atau pemberat berat pada tubuhnya, lalu diturunkan perlahan ke dalam laut agar tenggelam ke dasar samudra.</li>
                  </ul>
                </div>
              </div>

              {/* Kasus 2: Korban Bencana Massal */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm block flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-700" />
                  2. Pemakaman Massal Korban Bencana / Pandemi
                </span>
                <p className="text-stone-600 leading-relaxed">
                  <strong>Masalah:</strong> Ratusan korban bencana alam (gempa/tsunami) di mana relawan terbatas dan tidak memungkinkan menggali liang satu per satu.
                </p>
                <div className="p-3 bg-white rounded-lg border border-stone-200 text-stone-700 space-y-1">
                  <strong>Ketetapan Syariat:</strong>
                  <p className="text-stone-600 leading-relaxed">
                    Boleh memakamkan banyak jenazah ke dalam <strong>satu liang lahat besar (kuburan massal)</strong> karena faktor darurat (*adh-dharurat tubihul mahzhurat*).
                    Dahulu Rasulullah SAW memakamkan dua atau tiga orang syuhada perang Uhud dalam satu liang kubur dengan mendahulukan yang paling banyak hafalan Al-Qur'annya dekat arah Kiblat.
                  </p>
                </div>
              </div>

              {/* Kasus 3: Otopsi Forensik Mayat */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm block flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  3. Otopsi Forensik Medis & Bedah Mayat
                </span>
                <p className="text-stone-600 leading-relaxed">
                  <strong>Masalah:</strong> Pihak kepolisian memerlukan otopsi bedah tubuh mayit guna mengungkap kasus pembunuhan berencana.
                </p>
                <div className="p-3 bg-white rounded-lg border border-stone-200 text-stone-700 space-y-1">
                  <strong>Fatwa MUI:</strong>
                  <p className="text-stone-600 leading-relaxed">
                    Hukum asal membedah tubuh mayat muslim adalah haram karena merusak kehormatan jasad (*kasru 'azhmil mayyiti ka-kasrihī hayyā*). Namun <strong>dibolehkan secara darurat (otopsi forensik)</strong> untuk menegakkan keadilan hukum pidana, membebaskan orang tak bersalah dari tuduhan, dengan syarat dilakukan seperlunya oleh dokter ahli dan jasad dijahit kembali secara rapi dan hormat.
                  </p>
                </div>
              </div>

              {/* Kasus 4: Memindahkan Kerangka Mayit */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm block flex items-center gap-1.5">
                  <Footprints className="w-4 h-4 text-emerald-700" />
                  4. Memindahkan Makam (Naqlul Mayyit)
                </span>
                <p className="text-stone-600 leading-relaxed">
                  <strong>Masalah:</strong> Keluarga ingin memindahkan kerangka makam leluhur ke kampung halaman atau lokasi lain.
                </p>
                <div className="p-3 bg-white rounded-lg border border-stone-200 text-stone-700 space-y-1">
                  <strong>Ketetapan Mazhab Syafi'i:</strong>
                  <p className="text-stone-600 leading-relaxed">
                    Haram membongkar dan memindahkan jenazah sebelum hancur menjadi tanah kecuali karena uzur darurat: seperti kuburan terancam abrasi laut, tanah longsor, terendam luapan air comberan/najis, atau tanah makam ternyata milik orang lain tanpa izin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUBTAB 5: KUIS PEMAHAMAN MODUL INTERAKTIF */}
      {/* ============================================================ */}
      {activeTab === 'kuis_interaktif' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Evaluasi Belajar Siswa
                </span>
                <h2 className="text-xl font-bold text-stone-900 font-serif">
                  Kuis Pemahaman: Pemakaman, Takziyah & Ziarah Kubur
                </h2>
              </div>

              {quizSubmitted ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-stone-600">Skor Anda:</span>
                  <span
                    className={`text-sm font-bold px-3 py-1 rounded-full ${
                      calculateQuizScore() >= 80
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-amber-100 text-amber-800 border border-amber-300'
                    }`}
                  >
                    {calculateQuizScore()} / 100
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setQuizAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-600"
                    title="Ulangi Kuis"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <span className="text-xs text-stone-500 font-medium">5 Soal Pilihan Ganda</span>
              )}
            </div>

            {/* List Soal */}
            <div className="space-y-5">
              {KUIS_QUESTIONS.map((q, idx) => {
                const selected = quizAnswers[q.id];
                const isCorrect = selected === q.correct;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border transition-all ${
                      quizSubmitted
                        ? isCorrect
                          ? 'border-emerald-300 bg-emerald-50/40'
                          : 'border-rose-300 bg-rose-50/40'
                        : 'border-stone-200 bg-stone-50/50'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <strong className="text-xs sm:text-sm text-stone-900 font-medium leading-relaxed">
                        {q.q}
                      </strong>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pl-8">
                      {q.options.map((opt) => {
                        const isChosen = selected === opt.key;
                        let optStyle =
                          'border-stone-200 bg-white hover:bg-stone-100 text-stone-700';

                        if (quizSubmitted) {
                          if (opt.key === q.correct) {
                            optStyle =
                              'border-emerald-600 bg-emerald-100 text-emerald-950 font-bold';
                          } else if (isChosen && !isCorrect) {
                            optStyle =
                              'border-rose-500 bg-rose-100 text-rose-950 font-medium';
                          } else {
                            optStyle = 'border-stone-200 bg-stone-50 opacity-60 text-stone-500';
                          }
                        } else if (isChosen) {
                          optStyle =
                            'border-emerald-700 bg-emerald-700 text-white font-bold shadow-2xs';
                        }

                        return (
                          <button
                            key={opt.key}
                            type="button"
                            disabled={quizSubmitted}
                            onClick={() => handleSelectQuiz(q.id, opt.key)}
                            className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center gap-2 ${optStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-[10px] shrink-0">
                              {opt.key}
                            </span>
                            <span className="leading-snug">{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembahasan jika sudah disubmit */}
                    {quizSubmitted && (
                      <div className="mt-3 pl-8 pt-2 border-t border-stone-200/60 text-xs">
                        <strong
                          className={`block text-[11px] uppercase ${
                            isCorrect ? 'text-emerald-800' : 'text-rose-800'
                          }`}
                        >
                          {isCorrect ? 'Jawaban Benar!' : `Jawaban Kurang Tepat (Kunci: ${q.correct})`}
                        </strong>
                        <p className="text-stone-600 mt-0.5 leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit Button */}
            {!quizSubmitted && (
              <div className="flex justify-end pt-3">
                <button
                  type="button"
                  disabled={Object.keys(quizAnswers).length < KUIS_QUESTIONS.length}
                  onClick={() => setQuizSubmitted(true)}
                  className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-xs disabled:opacity-40 transition-all flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Kirim Jawaban & Periksa Nilai</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
