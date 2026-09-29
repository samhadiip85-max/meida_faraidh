import { AnimalRequirement, DefectItem, QurbanQuizQuestion } from '../types/qurban';

export const ANIMAL_REQUIREMENTS: AnimalRequirement[] = [
  {
    type: 'domba',
    name: 'Domba / Biri-biri (Dha\'n)',
    nameArabic: 'الضأن',
    minAge: 'Minimal 1 tahun penuh, atau genap 6 bulan & sudah berganti gigi seri depan',
    ageArabicTerm: 'Al-Jadza\' (الجذع)',
    quotaPersons: 1,
    description: 'Sah untuk 1 orang pekurban (pahalanya boleh diniatkan bagi keluarga yang dinafkahinya). Kriteria jadza\'ah (terlepas gigi depan) sah jika usianya sudah menginjak 6 bulan lebih.',
  },
  {
    type: 'kambing',
    name: 'Kambing Kacang / Jawa (Ma\'iz)',
    nameArabic: 'المعز',
    minAge: 'Minimal 2 tahun sempurna masuk tahun ke-3',
    ageArabicTerm: 'Ats-Tsaniyy (الثني)',
    quotaPersons: 1,
    description: 'Sah untuk 1 orang pekurban. Berbeda dengan domba, kambing jenis kacang/jawa wajib genap berusia 2 tahun sempurna (ditandai dengan copotnya dua gigi depan bawah).',
  },
  {
    type: 'sapi',
    name: 'Sapi / Kerbau (Baqar)',
    nameArabic: 'البقر والجاموس',
    minAge: 'Minimal 2 tahun sempurna masuk tahun ke-3',
    ageArabicTerm: 'Ats-Tsaniyy (الثني)',
    quotaPersons: 7,
    description: 'Sah untuk maksimal 7 orang pekurban secara patungan (syirkah). Boleh bercampur antara niat qurban sunnah, qurban nadzar, aqiqah, atau sekadar konsumsi daging.',
  },
  {
    type: 'unta',
    name: 'Unta (Ibil)',
    nameArabic: 'الإبل',
    minAge: 'Minimal 5 tahun sempurna masuk tahun ke-6',
    ageArabicTerm: 'Ats-Tsaniyy (الثني)',
    quotaPersons: 7,
    description: 'Sah untuk maksimal 7 orang pekurban. Merupakan hewan qurban paling utama jika disembelih utuh oleh satu orang, diikuti oleh sapi, lalu domba, lalu kambing kacang.',
  },
];

export const DEFECTS_LIST: DefectItem[] = [
  {
    id: 'buta_sebelah',
    name: 'Buta Sebelah yang Jelas (Al-\'Aura\')',
    nameArabic: 'العوراء البيّن عورها',
    status: 'membatalkan',
    description: 'Mata yang tampak cekung ke dalam atau menonjol keluar dan tidak bisa melihat sama sekali, sehingga menghalangi hewan mencari makan dengan baik.',
    dalil: 'HR. Tirmidzi no. 1497, An-Nasa\'i no. 4369 & Abu Dawud no. 2802: "Empat cacat yang tidak sah pada hewan kurban... al-\'aura\' al-bayyinu \'awaruha".',
  },
  {
    id: 'sakit_parah',
    name: 'Sakit Parah yang Tampak Jelas (Al-Maridhah)',
    nameArabic: 'المريضة البيّن مرضها',
    status: 'membatalkan',
    description: 'Penyakit yang jelas terlihat gejalanya (seperti demam tinggi, PMK akut dengan kuku copot, luka bernanah parah) yang merusak kualitas daging.',
    dalil: 'Hadits Al-Bara\' bin \'Azib radhiyallahu \'anhu.',
  },
  {
    id: 'pincang_berat',
    name: 'Pincang Nyata Tidak Mampu Berjalan (Al-\'Arja\')',
    nameArabic: 'العرجاء البيّن ظلعها',
    status: 'membatalkan',
    description: 'Pincang yang parah sehingga hewan tertinggal jauh di belakang kawanan gembalaannya saat digiring ke padang rumput.',
    dalil: 'Hadits Al-Bara\' bin \'Azib radhiyallahu \'anhu.',
  },
  {
    id: 'sangat_kurus',
    name: 'Sangat Kurus Kering Tanpa Sumsum (Al-\'Ajfa\')',
    nameArabic: 'العجفاء التي لا تنقي',
    status: 'membatalkan',
    description: 'Tubuh hewan yang sangat kurus hingga tulang-tulangnya menonjol dan tidak memiliki sumsum tulang (hilang lemak dan dagingnya).',
    dalil: 'Hadits Al-Bara\' bin \'Azib radhiyallahu \'anhu.',
  },
  {
    id: 'telinga_terpotong',
    name: 'Telinga Terpotong Sebagian Besar',
    nameArabic: 'مقطوعة الأذن أو بعضها',
    status: 'membatalkan',
    description: 'Jika daun telinga terpotong sebagian atau seluruhnya hingga mengurangi bagian daging yang bisa dimakan, maka TIDAK SAH menurut Madzhab Syafi\'i.',
    dalil: 'Kaidah Fiqih Syafi\'iyah: Setiap cacat yang mengurangi bagian daging atau anggota tubuh yang dimakan membatalkan qurban.',
  },
  {
    id: 'ekor_putus',
    name: 'Ekor Terputus Sebagian atau Seluruhnya',
    nameArabic: 'مقطوعة الذنب أو الألية',
    status: 'membatalkan',
    description: 'Hewan yang ekor atau lemak bokongnya (alyah) terpotong tidak sah dikurbankan karena berkurangnya bagian tubuh yang lezat dimakan.',
    dalil: 'Kitab Al-Majmu\' Syarah Al-Muhadzdzab.',
  },
  {
    id: 'tanduk_patah',
    name: 'Tanduk Pecah / Patah Luar (Tidak Melukai Otak)',
    nameArabic: 'مكسورة القرن بلا جرح',
    status: 'makruh',
    description: 'Hewan yang tanduknya patah bagian luar atau sejak lahir tidak bertanduk (al-jalha\') SAH dikurbankan, namun makruh (afdal yang bertanduk sempurna).',
    dalil: 'Tanduk bukan bagian yang dimakan dan tidak mengurangi kualitas daging.',
  },
  {
    id: 'kebiri',
    name: 'Hewan yang Dikebiri (Al-Majbub / Al-Khashiyy)',
    nameArabic: 'الخصي',
    status: 'dimaafkan',
    description: 'SAH bahkan BOLEH DAN BAGUS dikurbankan, karena pengebirian pada hewan ternak justru menambah gemuk, empuk, dan lezatnya daging.',
    dalil: 'Hadits riwayat Ahmad no. 25052: Nabi SAW berkurban dengan dua ekor kibasy yang putih bercampur hitam dan dikebiri (mukhshiyyaini).',
  },
];

export const COMPARISON_QURBAN_AQIQAH = [
  {
    aspect: '1. Dalil & Dasar Syariat',
    qurban: 'QS. Al-Kautsar: 2 ("Fa shalli lirabbika wan-har") & Sunnah Nabi SAW.',
    aqiqah: 'Hadits Samurah bin Jundub: "Kullu ghulāmin murtahanun bi \'aqīqatihi" (Setiap anak tergadai dengan aqiqahnya).',
  },
  {
    aspect: '2. Waktu Pelaksanaan',
    qurban: 'Terbatas hanya 4 hari: Hari Idul Adha (10 Dzulhijjah) & 3 Hari Tasyriq (11, 12, 13 Dzulhijjah).',
    aqiqah: 'Fleksibel: Sangat dianjurkan pada hari ke-7 kelahiran, atau ke-14, ke-21, atau kapan saja sebelum baligh.',
  },
  {
    aspect: '3. Jumlah Hewan',
    qurban: 'Sama untuk laki-laki maupun wanita: 1 kambing per orang, atau 1/7 sapi/unta.',
    aqiqah: 'Anak Laki-laki: 2 ekor kambing sepadan. Anak Perempuan: 1 ekor kambing.',
  },
  {
    aspect: '4. Cara Pendistribusian Daging',
    qurban: 'Afdhal dibagikan dalam kondisi MENTAH SEGAR (agar fakir miskin leluasa mengolah/menjualnya).',
    aqiqah: 'Sunnah dimasak terlebih dahulu dengan rasa MANIS (thabkhul hilwa) sebagai tafa\'ul manisnya akhlak anak.',
  },
  {
    aspect: '5. Hadiah untuk Tenaga Medis / Bidan',
    qurban: 'Haram memberikan daging/kulit sebagai UPAH jagal (harus diupah dari uang saku lain).',
    aqiqah: 'Disunnahkan memotong bagian paha kaki belakang (al-fakhdz) yang matang untuk dihadiahkan kepada bidan/dokter penolong persalinan.',
  },
  {
    aspect: '6. Hak Makan Pekurban / Orang Tua',
    qurban: 'Qurban Sunnah: Boleh makan 1/3 (atau sebuku berkah). Qurban Nadzar: HARAM makan sedikitpun.',
    aqiqah: 'Keluarga dan orang tua anak disunnahkan memakan sebagian daging aqiqah bersama kerabat dan tetangga.',
  },
];

export const QURBAN_QUIZ: QurbanQuizQuestion[] = [
  {
    id: 'qq_1',
    question: 'Berapakah jumlah maksimal orang yang boleh bersekutu (patungan) dalam satu ekor sapi atau unta untuk ibadah qurban menurut kesepakatan Jumhur Ulama?',
    options: [
      { id: 'a', text: 'Maksimal 3 orang' },
      { id: 'b', text: 'Maksimal 5 orang' },
      { id: 'c', text: 'Maksimal 7 orang' },
      { id: 'd', text: 'Maksimal 10 orang' },
    ],
    correctOptionId: 'c',
    explanation: 'Berdasarkan hadits Jabir bin Abdillah ra., Rasulullah SAW memerintahkan para sahabat untuk bersekutu dalam unta dan sapi masing-masing untuk 7 orang saat peristiwa Hudaibiyah.',
    dalil: 'HR. Muslim no. 1318: "Naharnā ma\'a Rasūlillāhi SAW \'āmal-Hudaibiyyati al-badanata \'an sab\'atin wal-baqarata \'an sab\'atin".',
  },
  {
    id: 'qq_2',
    question: 'Jika seseorang berqurban dengan niat QURBAN NADZAR (misalnya bernadzar: "Jika saya lulus ujian, saya bernadzar qurban kambing"), bagaimanakah hukum memakan daging qurban tersebut bagi dirinya dan keluarganya?',
    options: [
      { id: 'a', text: 'Sunnah memakan sepertiga dari dagingnya' },
      { id: 'b', text: 'Boleh memakan secukupnya untuk lauk sehari-hari' },
      { id: 'c', text: 'HARAM memakan sedikit pun darinya; 100% daging wajib disedekahkan ke fakir miskin' },
      { id: 'd', text: 'Wajib dimakan habis bersama keluarga dan tidak boleh dibagi ke orang lain' },
    ],
    correctOptionId: 'c',
    explanation: 'Dalam fiqih Madzhab Syafi\'i, orang yang bernadzar qurban (qurban wajib) serta orang-orang yang wajib dinafkahinya HARAM memakan sedikit pun dari daging qurban tersebut. Jika sempat termakan, wajib mengganti seharga daging yang dimakan untuk disedekahkan.',
    dalil: 'Kitab Fathul Qarib Al-Mujib & Kifayatul Akhyar: "Wa lā ya\'kulu al-mudhahhī minal-udh-hiyyati al-mandzūrati syai-an".',
  },
  {
    id: 'qq_3',
    question: 'Manakah di antara kondisi cacat fisik berikut yang MENYEBABKAN HEWAN TIDAK SAH dijadikan qurban menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Hewan yang tidak bertanduk sejak lahir (al-jalha\')' },
      { id: 'b', text: 'Hewan jantan yang telah dikebiri (al-khashiyy)' },
      { id: 'c', text: 'Hewan yang sebagian daun telinganya terpotong nyata' },
      { id: 'd', text: 'Hewan yang kulitnya memiliki cap/tanda besi panas kepemilikan' },
    ],
    correctOptionId: 'c',
    explanation: 'Kaidah Madzhab Syafi\'i menetapkan bahwa setiap cacat yang mengurangi bagian daging atau anggota tubuh yang biasa dimakan (termasuk telinga dan ekor) membatalkan keabsahan qurban. Adapun hewan kebiri sah karena dagingnya justru bertambah empuk dan gemuk.',
    dalil: 'Matan Al-Ghayah wat Taqrib karya Al-Qadhi Abu Syuja\'.',
  },
  {
    id: 'qq_4',
    question: 'Kapan batas akhir waktu penyembelihan hewan qurban yang sah menurut syariat Islam?',
    options: [
      { id: 'a', text: 'Tepat saat maghrib tanggal 10 Dzulhijjah (Hari Idul Adha)' },
      { id: 'b', text: 'Tepat saat terbenamnya matahari tanggal 13 Dzulhijjah (Hari Tasyriq terakhir)' },
      { id: 'c', text: 'Hingga akhir bulan Dzulhijjah' },
      { id: 'd', text: 'Sebelum shalat Idul Adha dimulai' },
    ],
    correctOptionId: 'b',
    explanation: 'Waktu penyembelihan qurban dimulai setelah selesainya shalat Idul Adha dan khutbahnya pada tanggal 10 Dzulhijjah, dan berakhir saat matahari terbenam pada tanggal 13 Dzulhijjah (hari tasyriq ke-3). Penyembelihan setelah maghrib 13 Dzulhijjah hanya bernilai sedekah biasa.',
    dalil: 'HR. Ibnu Hibban: "Kullu ayyāmit-tasyzīqi dzabhun" (Semua hari Tasyriq adalah waktu penyembelihan).',
  },
  {
    id: 'qq_5',
    question: 'Berapakah ketentuan jumlah hewan kambing untuk aqiqah anak laki-laki dan anak perempuan menurut sunnah Rasulullah SAW?',
    options: [
      { id: 'a', text: 'Laki-laki 1 kambing, Perempuan 2 kambing' },
      { id: 'b', text: 'Laki-laki 2 kambing, Perempuan 1 kambing' },
      { id: 'c', text: 'Laki-laki dan Perempuan masing-masing 1 kambing' },
      { id: 'd', text: 'Laki-laki 1 sapi, Perempuan 1 kambing' },
    ],
    correctOptionId: 'b',
    explanation: 'Sunnah muakkadah aqiqah bagi anak laki-laki adalah menyembelih dua ekor kambing yang sepadan usianya, sedangkan untuk anak perempuan adalah menyembelih satu ekor kambing.',
    dalil: 'HR. Tirmidzi & Abu Dawud dari Ummu Kurz: "Nabi SAW memerintahkan aqiqah bagi anak laki-laki dua ekor kambing yang setara, dan untuk anak perempuan seekor kambing".',
  },
];
