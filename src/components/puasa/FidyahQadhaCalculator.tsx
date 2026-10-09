import React, { useState } from 'react';
import { FidyahReason } from '../../types/puasa';
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Info,
  ShieldCheck,
  HeartPulse,
  Flame,
  Check,
  X,
  Stethoscope,
  Scale,
  Award,
  RotateCcw,
  BookOpen,
  Wheat,
  Activity,
  Layers,
} from 'lucide-react';

export function FidyahQadhaCalculator() {
  const [activeSubTab, setActiveSubTab] = useState<
    'pembatal_puasa' | 'kategori_konsekuensi' | 'kalkulator_fidyah' | 'kuis_evaluasi'
  >('pembatal_puasa');

  // State for Calculator
  const [selectedReason, setSelectedReason] = useState<FidyahReason>('sakit_sementara');
  const [missedDays, setMissedDays] = useState<number>(7);
  const [yearsDelayed, setYearsDelayed] = useState<number>(1); // keterlambatan tahun
  const [ricePricePerKg, setRicePricePerKg] = useState<number>(15000);

  // State for Interactive Medis Filter
  const [selectedMedicalItem, setSelectedMedicalItem] = useState<string | null>(null);

  // State for Mini Quiz
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Standard 1 Mud = 0.675 kg (675 gram)
  const mudPerDayKg = 0.675;

  // Syar'i Analysis for Calculator
  let mustQadha = false;
  let mustFidyah = false;
  let fidyahMultiplier = 1;
  let statusVerdict = '';
  let explanation = '';
  let badgeStyle = '';

  switch (selectedReason) {
    case 'sakit_sementara':
      mustQadha = true;
      mustFidyah = false;
      statusVerdict = 'Wajib Qadha\' Saja (Tanpa Fidyah)';
      badgeStyle = 'bg-emerald-100 text-emerald-950 border-emerald-300';
      explanation =
        'Orang yang sakit sementara waktu dan masih memiliki harapan sembuh wajib mengqadha\' hari-hari puasa yang ditinggalkan setelah sembuh di luar bulan Ramadhan.';
      break;

    case 'musafir':
      mustQadha = true;
      mustFidyah = false;
      statusVerdict = 'Wajib Qadha\' Saja (Tanpa Fidyah)';
      badgeStyle = 'bg-emerald-100 text-emerald-950 border-emerald-300';
      explanation =
        'Musafir yang menempuh perjalanan mubah sejauh minimal 2 Marhalah (± 81 km) mendapatkan rukhshah (keringanan) berbuka dan wajib mengqadha\' puasanya setelah pulang.';
      break;

    case 'haid_nifas':
      mustQadha = true;
      mustFidyah = false;
      statusVerdict = 'Wajib Qadha\' Saja (Tanpa Fidyah)';
      badgeStyle = 'bg-emerald-100 text-emerald-950 border-emerald-300';
      explanation =
        'Wanita yang mengalami haid atau nifas diharamkan berpuasa dan WAJIB mengqadha\' hari-hari yang terlewat sebelum tiba Ramadhan tahun berikutnya.';
      break;

    case 'tua_renta':
      mustQadha = false;
      mustFidyah = true;
      statusVerdict = 'Wajib Fidyah Saja (Bebas Qadha\')';
      badgeStyle = 'bg-amber-100 text-amber-950 border-amber-300';
      explanation =
        'Orang tua lanjut usia yang sudah sangat lemah dan tidak mampu lagi berpuasa dibebaskan dari kewajiban qadha\', dan diganti dengan membayar Fidyah 1 mud beras per hari.';
      break;

    case 'sakit_menahun':
      mustQadha = false;
      mustFidyah = true;
      statusVerdict = 'Wajib Fidyah Saja (Bebas Qadha\')';
      badgeStyle = 'bg-amber-100 text-amber-950 border-amber-300';
      explanation =
        'Penderita penyakit berat/kronis yang menurut keterangan dokter tidak ada harapan sembuh untuk berpuasa, cukup membayar Fidyah tanpa kewajiban qadha\'.';
      break;

    case 'hamil_khawatir_bayi':
      mustQadha = true;
      mustFidyah = true;
      statusVerdict = 'Wajib Qadha\' DAN Fidyah Sekaligus';
      badgeStyle = 'bg-rose-100 text-rose-950 border-rose-300';
      explanation =
        'Menurut Mazhab Syafi\'i, ibu hamil atau menyusui yang berbuka KARENA KHAWATIR TERHADAP BAYI/JANINNYA SAJA (takut keguguran / ASI kering), wajib mengqadha\' puasanya DAN membayar Fidyah 1 mud beras per hari.';
      break;

    case 'hamil_khawatir_diri':
      mustQadha = true;
      mustFidyah = false;
      statusVerdict = 'Wajib Qadha\' Saja (Tanpa Fidyah)';
      badgeStyle = 'bg-emerald-100 text-emerald-950 border-emerald-300';
      explanation =
        'Jika ibu hamil/menyusui berbuka karena mengkhawatirkan keselamatan dirinya sendiri (atau khawatir diri dan bayinya sekaligus), maka ia dihukumi laksana orang sakit: HANYA WAJIB QADHA\' saja tanpa fidyah.';
      break;

    case 'terlambat_qadha':
      mustQadha = true;
      mustFidyah = true;
      fidyahMultiplier = Math.max(1, yearsDelayed);
      statusVerdict = 'Wajib Qadha\' & Fidyah (Berlipat per Tahun)';
      badgeStyle = 'bg-rose-100 text-rose-950 border-rose-300';
      explanation = `Orang yang menunda qadha' puasa Ramadhan hingga melewati bulan Ramadhan berikutnya tanpa udzur syar'i, tetap wajib mengqadha' puasanya dan wajib membayar fidyah yang berlipat ganda sesuai jumlah tahun keterlambatan (${yearsDelayed} tahun).`;
      break;
  }

  // Calculations
  const totalFidyahKg = mustFidyah ? missedDays * mudPerDayKg * fidyahMultiplier : 0;
  const totalFidyahRupiah = totalFidyahKg * ricePricePerKg;

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Data 10 Pembatal Puasa
  const PEMBATAL_LIST = [
    {
      no: 1,
      title: 'Masuknya Benda ke Rongga Terbuka (Al-Jauf Al-Maftūh)',
      arab: 'دُخُولُ عَيْنٍ إِلَى الجَوْفِ',
      desc: 'Sampainya suatu benda padat, cair, atau gas berwujud (‘ain) ke dalam rongga tubuh bagian dalam melalui lubang terbuka alami: mulut, hidung, telinga, qubul, atau dubur secara sengaja dan mengetahui keharamannya.',
      syarat: 'Batal jika masuk melewati batas pangkal tenggorokan (telinga melewati gendang telinga, hidung melewati pangkal insang).',
      contoh: 'Makan, minum, menelan ludah yang bercampur darah/makanan, menghisap rokok.',
    },
    {
      no: 2,
      title: 'Muntah dengan Sengaja (Al-Istiqā’ah)',
      arab: 'الاسْتِقَاءَةُ عَمْدًا',
      desc: 'Sengaja memancing muntah keluar dengan memasukkan jari ke tenggorokan atau mencium bau busuk secara sengaja.',
      syarat: 'Jika muntah keluar tanpa sengaja (karena mual/mabuk perjalanan) dan tidak ada cairan muntahan yang ditelan kembali, maka puasanya TIDAK BATAL.',
      contoh: 'Nabi SAW bersabda: "Barangsiapa yang muntah tanpa sengaja maka tidak ada qadha baginya, dan siapa yang sengaja muntah maka wajib qadha" (HR. Abu Dawud).',
    },
    {
      no: 3,
      title: 'Bersetubuh di Siang Hari (Al-Jimā’)',
      arab: 'الجِمَاعُ عَمْدًا',
      desc: 'Berhubungan suami-istri di siang hari bulan Ramadhan secara sengaja dalam keadaan mengetahui bahwa dirinya sedang berpuasa.',
      syarat: 'Pembatal terberat dalam puasa. Masuknya hasyafah (ujung kemaluan) ke dalam farji membatalkan puasa baik keluar mani maupun tidak.',
      contoh: 'Konsekuensi: Wajib mengqadha\' puasa dan terkena sanksi Kaffarah ‘Uzhma (denda kafarat berat bertingkat).',
    },
    {
      no: 4,
      title: 'Keluar Mani dengan Sengaja (Al-Inzāl)',
      arab: 'إِنْزَالُ المَنِيِّ عَمْدًا',
      desc: 'Keluarnya sperma/mani yang disebabkan oleh persentuhan fisik secara langsung, seperti onani/masturbasi, berpelukan, atau mencium dengan syahwat.',
      syarat: 'Jika keluar mani karena mimpi basah (ihtilām) saat tidur atau sekadar pandangan/pikiran tanpa sentuhan, maka puasanya TIDAK BATAL.',
      contoh: 'Onani membatalkan puasa dan wajib qadha\', namun tidak dikenai kaffarah jima\'.',
    },
    {
      no: 5,
      title: 'Haid (Darah Menstruasi)',
      arab: 'الحَيْضُ',
      desc: 'Keluarnya darah haid dari rahim wanita, meskipun keluar sesaat menjelang waktu berbuka (matahari terbenam).',
      syarat: 'Begitu darah haid keluar, puasa otomatis batal seketika dan haram melanjutkan puasa. Wajib mengqadha\' di hari lain.',
      contoh: 'Darah haid yang menetes 1 menit sebelum azan Maghrib tetap membatalkan puasa hari tersebut.',
    },
    {
      no: 6,
      title: 'Nifas (Darah Pasca Persalinan)',
      arab: 'النِّفَاسُ',
      desc: 'Keluarnya darah nifas setelah melahirkan anak. Hukum dan ketentuannya sama persis seperti haid.',
      syarat: 'Haram berpuasa dan wajib mengqadha\' puasa yang ditinggalkan setelah suci.',
      contoh: 'Darah nifas yang keluar selama masa pemulihan pasca melahirkan (maksimal 60 hari).',
    },
    {
      no: 7,
      title: 'Gila / Hilang Akal (Al-Junūn)',
      arab: 'الجُنُونُ',
      desc: 'Hilangnya akal sehat karena gila, meskipun hanya berlangsung sesaat atau satu detik di siang hari puasa.',
      syarat: 'Karena syarat sah puasa adalah berakal sehat (tamyiz). Berbeda dengan pingsan, gila membatalkan seketika.',
      contoh: 'Kambuhnya penyakit gangguan jiwa di siang hari Ramadhan.',
    },
    {
      no: 8,
      title: 'Pingsan atau Mabuk Seharian Penuh',
      arab: 'الإِغْمَاءُ وَالسُّكْرُ طُولَ النَّهَارِ',
      desc: 'Orang yang pingsan atau mabuk terus-menerus sejak sebelum fajar terbit hingga terbenamnya matahari tanpa sadar sedetik pun.',
      syarat: 'Jika orang yang pingsan sempat sadar sebentar saja di siang hari (meski hanya 1 menit), maka puasanya SAH.',
      contoh: 'Korban kecelakaan yang koma seharian penuh dari subuh sampai maghrib.',
    },
    {
      no: 9,
      title: 'Murtad (Keluar dari Agama Islam)',
      arab: 'الرِّدَّةُ',
      desc: 'Keluar dari agama Islam, baik melalui niat, ucapan kekafiran, maupun perbuatan syirik akbar di siang hari puasa.',
      syarat: 'Murtad menghapus seluruh amal kebaikan seketika (QS. Al-Baqarah: 217). Jika kembali masuk Islam, wajib mengqadha\' puasanya.',
      contoh: 'Menghina syariat Allah, menyembah berhala, atau meyakini ada nabi setelah Nabi Muhammad SAW.',
    },
    {
      no: 10,
      title: 'Melahirkan Anak (Al-Wilādah)',
      arab: 'الوِلَادَةُ',
      desc: 'Proses persalinan melahirkan bayi, baik persalinan normal maupun caesar, disertai keluarnya darah ataupun tidak.',
      syarat: 'Menurut ulama Mazhab Syafi\'i, melahirkan itu sendiri membatalkan puasa karena anak adalah zat yang keluar dari jauf.',
      contoh: 'Melahirkan anak pada siang hari puasa Ramadhan.',
    },
  ];

  // Data Fiqih Medis Kontemporer
  const MEDICAL_DATA = [
    {
      id: 'infus',
      name: 'Infus Nutrisi Makanan (Intravena Glukosa)',
      status: 'MEMBATALKAN PUASA',
      isBatal: true,
      alasan:
        'Cairan infus yang mengandung zat makanan/nutrisi glukosa langsung masuk ke pembuluh darah dan mengenyangkan tubuh, sehingga mengambil fungsi makan dan minum secara hakiki.',
      fatwa: 'Keputusan Majma\' Al-Fiqh Al-Islami & Komisi Fatwa MUI.',
    },
    {
      id: 'injeksi_otot',
      name: 'Suntik Obat / Vaksin / Pereda Nyeri (Intramuskular)',
      status: 'TIDAK MEMBATALKAN PUASA',
      isBatal: false,
      alasan:
        'Suntikan obat ke dalam otot (bukan melalui rongga terbuka) dan tidak berfungsi sebagai pengganti makanan atau minuman, melainkan sekadar terapi obat.',
      fatwa: 'Fatwa mayoritas ulama kontemporer (Syaikh Wahbah Az-Zuhaili, DSN-MUI).',
    },
    {
      id: 'tetes_mata',
      name: 'Obat Tetes Mata (Kloramfenikol / Tetes Mata Alami)',
      status: 'TIDAK MEMBATALKAN PUASA',
      isBatal: false,
      alasan:
        'Mata bukan merupakan rongga terbuka (bukan jauf maftuh). Meskipun rasa pahit obat terkadang sampai ke tenggorokan melalui pori-pori halus, hal itu tidak membatalkan puasa.',
      fatwa: 'Ijma\' Fuqaha Mu\'ashirin.',
    },
    {
      id: 'tetes_telinga',
      name: 'Obat Tetes Telinga',
      status: 'KHILAF (TIDAK BATAL BILA GENDANG TELINGA UTUH)',
      isBatal: false,
      alasan:
        'Mazhab Syafi\'i klasik menganggap batal bila cairan masuk ke liang telinga. Namun riset medis modern membuktikan bahwa liang telinga buntu jika gendang telinga tidak robek, sehingga fatwa kontemporer menilainya tidak batal.',
      fatwa: 'Keputusan Majma\' Fiqh Islami OKI.',
    },
    {
      id: 'inhaler_asma',
      name: 'Inhaler / Semprotan Obat Asma (Ventolin)',
      status: 'TIDAK MEMBATALKAN PUASA (DARURAT NAFAS)',
      isBatal: false,
      alasan:
        'Gas aerosol yang disemprotkan bertujuan membuka saluran pernapasan di paru-paru, bukan menuju lambung, dan takarannya sangat sedikit (seperti berkumur saat wudhu).',
      fatwa: 'Fatwa Syaikh Ibnu Utsaimin & Majma\' Fiqh.',
    },
    {
      id: 'swab_pcr',
      name: 'Tes Swab PCR / Antigen Hidung & Tenggorokan',
      status: 'TIDAK MEMBATALKAN PUASA',
      isBatal: false,
      alasan:
        'Alat swab kapas hanya mengusap lendir di nasofaring dan orofaring tanpa memasukkan benda atau zat makanan yang mengendap di dalam rongga tubuh.',
      fatwa: 'Fatwa MUI No. 23 Tahun 2021.',
    },
    {
      id: 'donor_darah',
      name: 'Donor Darah / Pengambilan Sampel Darah',
      status: 'TIDAK MEMBATALKAN PUASA',
      isBatal: false,
      alasan:
        'Keluarnya darah bukan termasuk pembatal puasa. Namun makruh hukumnya jika donor darah menyebabkan tubuh menjadi sangat lemas dan tidak kuat melanjutkan puasa.',
      fatwa: 'Fatwa MUI & Jumhur Fuqaha.',
    },
  ];

  // Soal Kuis Interaktif
  const QUIZ_LIST = [
    {
      id: 1,
      q: 'Manakah di antara tindakan medis berikut yang MEMBATALKAN puasa menurut kesepakatan ulama?',
      options: [
        { key: 'A', text: 'Suntik vaksin influenza pada otot lengan' },
        { key: 'B', text: 'Infus cairan glukosa/nutrisi makanan ke pembuluh darah' },
        { key: 'C', text: 'Penggunaan obat tetes mata' },
        { key: 'D', text: 'Pemeriksaan swab PCR di rongga hidung' },
      ],
      correct: 'B',
      explanation:
        'Infus nutrisi makanan membatalkan puasa karena menyuplai sari makanan yang mengenyangkan dan menggantikan fungsi makan/minum secara langsung.',
    },
    {
      id: 2,
      q: 'Seorang ibu menyusui tidak berpuasa Ramadhan karena KHAWATIR TERHADAP BAYINYA SAJA (takut ASI berkurang drastis). Apakah kewajibannya menurut Mazhab Syafi\'i?',
      options: [
        { key: 'A', text: 'Hanya wajib Qadha\' saja tanpa fidyah' },
        { key: 'B', text: 'Hanya wajib membayar Fidyah saja' },
        { key: 'C', text: 'Wajib Qadha\' DAN membayar Fidyah sekaligus' },
        { key: 'D', text: 'Bebas dari qadha\' dan fidyah' },
      ],
      correct: 'C',
      explanation:
        'Dalam Mazhab Syafi\'i, jika ibu hamil/menyusui berbuka murni karena mengkhawatirkan janin/bayinya, ia wajib Qadha\' puasa dan wajib Fidyah 1 mud beras per hari.',
    },
    {
      id: 3,
      q: 'Berapakah takaran standar Fidyah beras per hari menurut ketetapan mayoritas ulama fiqih?',
      options: [
        { key: 'A', text: '1 Gantang (± 3,5 kg)' },
        { key: 'B', text: '1 Mud (± 675 gram / 0,675 kg beras)' },
        { key: 'C', text: '1 Sha\' (± 2,5 kg beras)' },
        { key: 'D', text: '10 Kilogram beras' },
      ],
      correct: 'B',
      explanation:
        'Kadar fidyah per hari adalah 1 Mud, yaitu cakupan dua telapak tangan orang dewasa normal, atau setara dengan ± 675 gram (0,675 kg) beras bahan pokok.',
    },
    {
      id: 4,
      q: 'Apakah sanksi Kaffarah ‘Uzhma (kafarat berat) yang wajib ditunaikan bagi orang yang sengaja bersetubuh (jima\') di siang hari Ramadhan?',
      options: [
        { key: 'A', text: 'Memberi makan 10 orang miskin atau memerdekakan budak' },
        { key: 'B', text: 'Puasa 2 bulan berturut-turut atau memberi makan 60 orang miskin' },
        { key: 'C', text: 'Membayar denda emas 85 gram' },
        { key: 'D', text: 'Mengqadha\' puasa 100 hari berturut-turut' },
      ],
      correct: 'B',
      explanation:
        'Urutan Kaffarah ‘Uzhma: 1) Memerdekakan budak mukmin; jika tidak mampu: 2) Berpuasa 2 bulan berturut-turut tanpa putus; jika tidak mampu: 3) Memberi makan 60 orang miskin.',
    },
    {
      id: 5,
      q: 'Seorang muslim menunda qadha\' puasa Ramadhannya hingga melewati 2 kali bulan Ramadhan berikutnya tanpa uzur syar\'i. Bagaimanakah ketentuan fidyahnya?',
      options: [
        { key: 'A', text: 'Fidyahnya gugur karena sudah kedaluwarsa' },
        { key: 'B', text: 'Fidyah tetap 1 mud tanpa terpengaruh tahun' },
        { key: 'C', text: 'Fidyahnya berlipat ganda menjadi 2x lipat (2 mud per hari)' },
        { key: 'D', text: 'Hukumnya berubah menjadi kafarat memerdekakan budak' },
      ],
      correct: 'C',
      explanation:
        'Dalam Mazhab Syafi\'i, fidyah karena kelalaian menunda qadha\' melipat ganda sesuai dengan jumlah tahun keterlambatan Ramadhan yang dilewatinya.',
    },
  ];

  const handleSelectQuiz = (qId: number, key: string) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: key }));
  };

  const calculateScore = () => {
    let c = 0;
    QUIZ_LIST.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) c += 1;
    });
    return Math.round((c / QUIZ_LIST.length) * 100);
  };

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-emerald-800 tracking-wide uppercase">
            <span className="bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-emerald-700" />
              BAB 7: Puasa · Modul 2
            </span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-500 font-sans normal-case text-xs">
              Fiqih Pembatal Puasa, Qadha, Fidyah & Kaffarah
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mt-2.5">
            Pembatal Puasa, Qadha, Fidyah & Kaffarah
          </h1>

          <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed">
            Panduan lengkap mengenai <strong>10 perkara yang membatalkan puasa</strong> menurut Mazhab
            Syafi'i, fatwa medis modern (infus, injeksi, swab PCR), 4 klasifikasi konsekuensi hukum
            pengganti puasa, serta <strong>kalkulator interaktif simulasi qadha dan fidyah</strong>.
          </p>
        </div>
      </div>

      {/* Subtabs Switcher */}
      <div className="flex items-center gap-1.5 p-1.5 bg-stone-100/90 rounded-2xl border border-stone-200/80 overflow-x-auto scrollbar-thin">
        {[
          { id: 'pembatal_puasa', label: '1. 10 Pembatal Puasa & Fiqih Medis', icon: AlertTriangle },
          { id: 'kategori_konsekuensi', label: '2. 4 Golongan Konsekuensi', icon: Scale },
          { id: 'kalkulator_fidyah', label: '3. Kalkulator Qadha & Fidyah', icon: Calculator },
          { id: 'kuis_evaluasi', label: '4. Kuis Pemahaman Modul', icon: Award },
        ].map((tab) => {
          const isSelected = activeSubTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSubTab(tab.id as any)}
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
      {/* SUBTAB 1: 10 PEMBATAL PUASA & FIQIH MEDIS MODERN */}
      {/* ============================================================ */}
      {activeSubTab === 'pembatal_puasa' && (
        <div className="space-y-6">
          {/* Card 1: 10 Pembatal Puasa */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-5">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Rujukan: Matan Ghāyah wat-Taqrīb (Abu Syujā’)
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 font-serif mt-0.5">
                10 Perkara yang Membatalkan Puasa dalam Mazhab Syafi'i
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Hal-hal yang apabila dilakukan dengan sengaja, sadar, dan tanpa paksaan akan merusak keabsahan puasa:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {PEMBATAL_LIST.map((item) => (
                <div
                  key={item.no}
                  className="p-4 sm:p-5 bg-stone-50/70 rounded-xl border border-stone-200 space-y-2 hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">
                        {item.no}
                      </span>
                      <strong className="text-xs sm:text-sm text-stone-900 block font-bold">
                        {item.title}
                      </strong>
                    </div>
                    <span className="font-arabic text-emerald-900 text-xs sm:text-sm font-bold">
                      {item.arab}
                    </span>
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed">{item.desc}</p>

                  <div className="p-2.5 bg-white rounded-lg border border-stone-200/80 text-[11px] text-stone-600 space-y-1">
                    <strong className="text-emerald-950 block">Ketentuan Fiqih:</strong>
                    <p>{item.syarat}</p>
                    <p className="text-stone-500 italic pt-0.5">Contoh/Dalil: {item.contoh}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Fiqih Medis Kontemporer */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Stethoscope className="w-4 h-4 text-emerald-700" />
              <span>Fiqih Medis Nawazil (Kontemporer)</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              Status Tindakan Medis & Pengobatan Saat Berpuasa
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Ketetapan hukum fatwa medis para ulama kontemporer (Majma' Al-Fiqh Al-Islami OKI & Fatwa
              MUI) mengenai peralatan pengobatan modern di bulan Ramadhan:
            </p>

            <div className="space-y-3">
              {MEDICAL_DATA.map((med) => {
                const isSelected = selectedMedicalItem === med.id;
                return (
                  <div
                    key={med.id}
                    className="border border-stone-200 rounded-xl overflow-hidden transition-all bg-stone-50/40"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedMedicalItem(isSelected ? null : med.id)
                      }
                      className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-stone-100/70 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                            med.isBatal ? 'bg-rose-700 text-white' : 'bg-emerald-700 text-white'
                          }`}
                        >
                          {med.isBatal ? <X className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                        </span>
                        <strong className="text-xs sm:text-sm font-bold text-stone-900">
                          {med.name}
                        </strong>
                      </div>

                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded border whitespace-nowrap ${
                          med.isBatal
                            ? 'bg-rose-100 text-rose-800 border-rose-300'
                            : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                        }`}
                      >
                        {med.status.split(' ')[0]}
                      </span>
                    </button>

                    {isSelected && (
                      <div className="p-4 pt-1 bg-white border-t border-stone-200 text-xs space-y-2">
                        <p className="text-stone-700 leading-relaxed">
                          <strong>Keterangan Hukum:</strong> {med.alasan}
                        </p>
                        <span className="text-[11px] text-stone-500 font-mono block">
                          Landasan: {med.fatwa}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 3: Perkara Makruh vs Mubah */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-5 bg-amber-50/60 rounded-xl border border-amber-200 space-y-2">
              <strong className="text-amber-950 font-bold block text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                Perkara yang Dimakruhkan Saat Puasa:
              </strong>
              <ul className="list-disc list-inside space-y-1 text-stone-700">
                <li>Berkumur-kumur atau istinsyaq (menghirup air ke hidung) secara berlebihan saat wudhu.</li>
                <li>Bersiwak atau menyikat gigi setelah matahari tergelincir (zawal / setelah azan Dzuhur).</li>
                <li>Mencicipi makanan di ujung lidah tanpa ditelan bila tidak ada hajat memasak.</li>
                <li>Mencium pasangan dengan syahwat jika dikhawatirkan membangkitkan nafsu berjima'.</li>
                <li>Bekam atau donor darah jika dikhawatirkan membuat badan lemas.</li>
              </ul>
            </div>

            <div className="p-5 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2">
              <strong className="text-emerald-950 font-bold block text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                Perkara yang Boleh (Mubah) & Tidak Batal:
              </strong>
              <ul className="list-disc list-inside space-y-1 text-stone-700">
                <li>Menelan air liur sendiri yang murni dan bersih dari dalam rongga mulut.</li>
                <li>Mandi basah atau berendam di air dingin untuk menyegarkan badan dari terik panas.</li>
                <li>Mimpi basah di siang hari saat tidur (karena terjadi di luar kehendak sadar).</li>
                <li>Memakai wewangian / parfum / minyak wangi.</li>
                <li>Makan atau minum karena benar-benar lupa (rezeki dari Allah, puasanya tetap sah).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUBTAB 2: 4 GOLONGAN KONSEKUENSI PENGGANTI PUASA */}
      {/* ============================================================ */}
      {activeSubTab === 'kategori_konsekuensi' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Scale className="w-4 h-4 text-emerald-700" />
              <span>Klasifikasi Syar'i Mazhab Syafi'i</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 font-serif">
              4 Kategori Konsekuensi Akibat Batal atau Meninggalkan Puasa
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Dalam fiqih Islam, orang yang tidak berpuasa Ramadhan atau membatalkan puasanya terbagi
              menjadi empat tingkatan konsekuensi hukum syar'i:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
              {/* Kategori 1 */}
              <div className="p-5 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-md bg-emerald-700 text-white font-bold flex items-center justify-center text-xs">
                    1
                  </span>
                  <span className="font-bold text-emerald-900 bg-white px-2 py-0.5 rounded border border-emerald-200">
                    Qadha' Saja
                  </span>
                </div>
                <h3 className="font-bold text-sm text-stone-900">1. Wajib Qadha' Saja (Tanpa Fidyah)</h3>
                <p className="text-stone-700 leading-relaxed">
                  Orang yang memiliki uzur sementara dan mampu berpuasa di hari lain:
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-stone-600">
                  <li>Orang sakit yang masih memiliki harapan sembuh.</li>
                  <li>Musafir yang menempuh perjalanan jauh (≥ 81 km).</li>
                  <li>Wanita yang sedang haid atau nifas.</li>
                  <li>Orang yang membatalkan puasa karena makan/minum sengaja.</li>
                  <li>Ibu hamil/menyusui yang khawatir terhadap kesehatan dirinya sendiri.</li>
                </ul>
              </div>

              {/* Kategori 2 */}
              <div className="p-5 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-md bg-amber-700 text-white font-bold flex items-center justify-center text-xs">
                    2
                  </span>
                  <span className="font-bold text-amber-900 bg-white px-2 py-0.5 rounded border border-amber-200">
                    Fidyah Saja
                  </span>
                </div>
                <h3 className="font-bold text-sm text-stone-900">2. Wajib Fidyah Saja (Bebas Qadha')</h3>
                <p className="text-stone-700 leading-relaxed">
                  Orang yang tidak mampu lagi berpuasa secara permanen sepanjang hayatnya:
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-stone-600">
                  <li>Orang tua lanjut usia yang sudah sangat renta dan lemah fisiknya.</li>
                  <li>Penderita sakit menahun (kronis) yang menurut dokter mustahil sembuh.</li>
                  <li>Pekerja berat tambang/kebun yang tidak punya mata pencaharian lain dan terancam binasa jika berpuasa.</li>
                </ul>
              </div>

              {/* Kategori 3 */}
              <div className="p-5 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-md bg-rose-700 text-white font-bold flex items-center justify-center text-xs">
                    3
                  </span>
                  <span className="font-bold text-rose-900 bg-white px-2 py-0.5 rounded border border-rose-200">
                    Qadha' + Fidyah
                  </span>
                </div>
                <h3 className="font-bold text-sm text-stone-900">3. Wajib Qadha' DAN Fidyah Sekaligus</h3>
                <p className="text-stone-700 leading-relaxed">
                  Gabungan kewajiban mengganti puasa dan membayar denda beras:
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-stone-600">
                  <li>
                    <strong>Ibu hamil/menyusui</strong> yang tidak berpuasa murni karena mengkhawatirkan
                    keselamatan bayinya saja (takut keguguran / bayi kekurangan ASI).
                  </li>
                  <li>
                    <strong>Orang yang menunda qadha'</strong> puasa Ramadhan tanpa uzur hingga melewati bulan
                    Ramadhan berikutnya. Fidyahnya berlipat ganda per tahun penundaan.
                  </li>
                </ul>
              </div>

              {/* Kategori 4 */}
              <div className="p-5 bg-purple-50/70 rounded-xl border border-purple-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-md bg-purple-700 text-white font-bold flex items-center justify-center text-xs">
                    4
                  </span>
                  <span className="font-bold text-purple-900 bg-white px-2 py-0.5 rounded border border-purple-200">
                    Qadha' + Kafarat Berat
                  </span>
                </div>
                <h3 className="font-bold text-sm text-stone-900">4. Wajib Qadha' DAN Kaffarah ‘Uzhma</h3>
                <p className="text-stone-700 leading-relaxed">
                  Sanksi pelanggaran terberat akibat merusak kehormatan ibadah bulan Ramadhan:
                </p>
                <p className="text-stone-600">
                  Dikenakan bagi laki-laki yang melakukan <strong>hubungan suami-istri (jima') secara sengaja</strong> di siang hari bulan Ramadhan. Wajib mengqadha' puasa hari tersebut dan menunaikan kafarat bertingkat (tertib).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUBTAB 3: KALKULATOR & SIMULATOR FIDYAH */}
      {/* ============================================================ */}
      {activeSubTab === 'kalkulator_fidyah' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Simulator Interaktif
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 font-serif mt-0.5">
                Kalkulator Penentuan Status Qadha' & Takaran Fidyah
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Pilihlah salah satu alasan di bawah yang sesuai dengan kondisi nyata Anda:
              </p>
            </div>

            {/* Reason Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {[
                { id: 'sakit_sementara', label: 'Sakit Ada Harapan Sembuh' },
                { id: 'musafir', label: 'Musafir Perjalanan Jauh (≥ 81 km)' },
                { id: 'haid_nifas', label: 'Wanita Haid / Nifas' },
                { id: 'tua_renta', label: 'Orang Tua Lanjut Usia / Renta' },
                { id: 'sakit_menahun', label: 'Sakit Menahun (Kronis)' },
                { id: 'hamil_khawatir_bayi', label: 'Hamil/Menyusui (Khawatir Bayi Saja)' },
                { id: 'hamil_khawatir_diri', label: 'Hamil/Menyusui (Khawatir Diri)' },
                { id: 'terlambat_qadha', label: 'Terlambat Qadha\' Lewat Ramadhan' },
              ].map((item) => {
                const isSelected = selectedReason === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedReason(item.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-emerald-800 text-white border-emerald-800 font-bold shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                    }`}
                  >
                    <span className="text-xs block leading-snug">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Inputs & Result Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
              <div className="lg:col-span-6 space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-stone-700 mb-1">
                    <span>Jumlah Hari Puasa yang Ditinggalkan:</span>
                    <span className="font-bold text-emerald-950 text-sm">{missedDays} Hari</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={missedDays}
                    onChange={(e) => setMissedDays(Number(e.target.value))}
                    className="w-full accent-emerald-700"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                    <span>1 Hari</span>
                    <span>15 Hari</span>
                    <span>30 Hari (Sebulan Penuh)</span>
                  </div>
                </div>

                {selectedReason === 'terlambat_qadha' && (
                  <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1">
                    <div className="flex justify-between font-semibold text-rose-950 mb-1">
                      <span>Jumlah Tahun Keterlambatan Qadha':</span>
                      <span className="font-bold text-rose-900 text-sm">{yearsDelayed} Tahun</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={yearsDelayed}
                      onChange={(e) => setYearsDelayed(Number(e.target.value))}
                      className="w-full accent-rose-700"
                    />
                    <span className="text-[10px] text-rose-800 block">
                      Fidyah berlipat ganda menjadi {yearsDelayed}x lipat karena melompati {yearsDelayed} kali bulan Ramadhan.
                    </span>
                  </div>
                )}

                {mustFidyah && (
                  <div className="space-y-1">
                    <label className="font-bold text-stone-900 block">
                      Harga Beras yang Dikonsumsi (Rp / Kg):
                    </label>
                    <input
                      type="number"
                      value={ricePricePerKg}
                      onChange={(e) => setRicePricePerKg(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg font-bold"
                    />
                    <span className="text-[10px] text-stone-400">
                      Standar takaran fidyah per hari: 1 Mud = 675 gram (0.675 kg) beras.
                    </span>
                  </div>
                )}
              </div>

              {/* Result Panel */}
              <div className="lg:col-span-6 bg-stone-50 rounded-2xl border border-stone-200 p-5 sm:p-6 space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
                  <span className="uppercase font-bold tracking-wider text-stone-400 text-[10px]">
                    Hasil Ketetapan Hukum
                  </span>
                  <span className={`px-2.5 py-1 rounded-md font-bold text-xs border ${badgeStyle}`}>
                    {statusVerdict}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 bg-white rounded-xl border border-stone-200 text-center space-y-0.5">
                    <span className="text-[11px] text-stone-500 block">Kewajiban Qadha':</span>
                    <div className="text-2xl font-bold font-mono-num text-stone-900">
                      {mustQadha ? `${missedDays} Hari` : 'Bebas'}
                    </div>
                    <span className="text-[10px] text-stone-400">
                      {mustQadha ? 'Wajib puasa pengganti' : 'Tidak perlu qadha\''}
                    </span>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-stone-200 text-center space-y-0.5">
                    <span className="text-[11px] text-stone-500 block">Kewajiban Fidyah:</span>
                    <div className="text-2xl font-bold font-mono-num text-emerald-900">
                      {mustFidyah ? `${totalFidyahKg.toFixed(2)} Kg` : 'Bebas'}
                    </div>
                    <span className="text-[10px] text-stone-400">
                      {mustFidyah ? `(${formatIDR(totalFidyahRupiah)})` : 'Tidak perlu fidyah'}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1.5">
                  <strong className="text-stone-900 block font-semibold text-xs uppercase text-emerald-800">
                    Penjelasan Fiqih Syar'i:
                  </strong>
                  <p className="text-stone-700 leading-relaxed">{explanation}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rincian Kaffarah Udzma */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Kaffarah ‘Uzhma (Denda Hubungan Badan di Siang Ramadhan)</span>
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">
              Tingkatan Sanksi Kafarat Bertingkat (Tartīb)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Bagi yang sengaja berhubungan suami-istri di siang hari Ramadhan, selain wajib mengqadha'
              puasa hari itu, ia wajib membayar kafarat berurutan secara bertingkat:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                <span className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <strong className="text-stone-900 block text-sm">Memerdekakan Budak Mukmin</strong>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Tingkatan pertama yang wajib dipilih apabila budak sahaya masih ada.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                <span className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <strong className="text-stone-900 block text-sm">Puasa 2 Bulan Berturut-turut</strong>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Jika tidak mampu/tidak ada budak: wajib puasa 60 hari berturut-turut tanpa terputus. Jika terputus sehari tanpa uzur syar'i, wajib mengulang dari awal.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                <span className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <strong className="text-stone-900 block text-sm">Memberi Makan 60 Orang Miskin</strong>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Jika tidak mampu berpuasa 2 bulan (karena tua/sakit parah): memberi makan 60 orang miskin, masing-masing 1 mud (675 gram) beras.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUBTAB 4: KUIS PEMAHAMAN MODUL */}
      {/* ============================================================ */}
      {activeSubTab === 'kuis_evaluasi' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Evaluasi Belajar Siswa
                </span>
                <h2 className="text-xl font-bold text-stone-900 font-serif">
                  Kuis Pemahaman: Pembatal Puasa, Qadha & Fidyah
                </h2>
              </div>

              {quizSubmitted ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-stone-600">Skor Anda:</span>
                  <span
                    className={`text-sm font-bold px-3 py-1 rounded-full ${
                      calculateScore() >= 80
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-amber-100 text-amber-800 border border-amber-300'
                    }`}
                  >
                    {calculateScore()} / 100
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
              {QUIZ_LIST.map((q, idx) => {
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
                  disabled={Object.keys(quizAnswers).length < QUIZ_LIST.length}
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
