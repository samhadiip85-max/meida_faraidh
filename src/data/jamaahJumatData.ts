import {
  JamaahJumatQuizQuestion,
  KhutbahRukun,
  MasbuqScenario,
  VehiclePrayerGuide,
} from '../types/jamaahJumat';

export const MASBUQ_SCENARIOS: MasbuqScenario[] = [
  {
    id: 'ruku_tumaninah',
    name: 'Mendapati Imam saat Ruku\' dan Sempat Thuma\'ninah',
    joinPoint: 'ruku',
    imamStatus: 'Imam sedang ruku\' stabil',
    tumaninahAchieved: true,
    rakaatCounted: true,
    explanation:
      'Makmum melakukan takbiratul ihram sambil berdiri tegak, lalu langsung membungkuk ruku\' dan sempat merasakan thuma\'ninah bersama imam sebelum imam bangkit i\'tidal. Rakaat ini TERHITUNG 1 rakaat sah bagi makmum.',
  },
  {
    id: 'ruku_tanpa_tumaninah',
    name: 'Mendapati Ruku\' tetapi Imam Keburu Bangkit I\'tidal',
    joinPoint: 'ruku',
    imamStatus: 'Imam sudah mulai bergerak bangkit ke i\'tidal saat makmum baru membungkuk',
    tumaninahAchieved: false,
    rakaatCounted: false,
    explanation:
      'Karena makmum tidak sempat merasakan diam sejenak (thuma\'ninah) bersama imam dalam posisi ruku\', maka rakaat tersebut TIDAK TERHITUNG. Makmum wajib menambah 1 rakaat setelah imam salam.',
  },
  {
    id: 'itidal_ke_bawah',
    name: 'Masuk saat Imam sedang I\'tidal, Sujud, atau Duduk',
    joinPoint: 'itidal',
    imamStatus: 'Imam sedang i\'tidal, sujud, atau tasyahhud',
    tumaninahAchieved: false,
    rakaatCounted: false,
    explanation:
      'Makmum takbiratul ihram lalu langsung mengikuti posisi imam. Rakaat ini TIDAK TERHITUNG karena batas minimal mendapatkan rakaat adalah ruku\' dengan thuma\'ninah. Makmum menyempurnakan seluruh rakaat yang tertinggal setelah imam salam.',
  },
  {
    id: 'tasyahhud_akhir',
    name: 'Masuk saat Imam sedang Tasyahhud Akhir (Sebelum Salam)',
    joinPoint: 'tasyahhud',
    imamStatus: 'Imam sedang duduk membaca tasyahhud akhir',
    tumaninahAchieved: false,
    rakaatCounted: false,
    explanation:
      'Makmum tetap mendapatkan keutamaan pahala shalat berjama\'ah (27 derajat) asalkan sempat takbiratul ihram sebelum imam mengucapkan huruf "mim" pada salam pertama ("As-salamu \'alaikum"). Setelah imam salam, makmum bangkit berdiri menyempurnakan seluruh rakaat shalatnya.',
  },
];

export const KHUTBAH_RUKUNS: KhutbahRukun[] = [
  {
    number: 1,
    name: 'Memuji Allah (Hamdalah)',
    nameArabic: 'حمد الله تعالى',
    placement: 'Wajib pada Khutbah Pertama & Khutbah Kedua',
    description: 'Wajib menggunakan lafadz yang berasal dari kata "hamada" dan menyebut nama Allah (lafadz jalalah).',
    exampleArabic: 'الْحَمْدُ لِلَّهِ (Alhamdulillah)',
  },
  {
    number: 2,
    name: 'Membaca Shalawat atas Nabi Muhammad SAW',
    nameArabic: 'الصلاة على النبي صلى الله عليه وسلم',
    placement: 'Wajib pada Khutbah Pertama & Khutbah Kedua',
    description: 'Wajib menggunakan lafadz shalawat yang jelas dan menyebut nama Nabi SAW atau sifat ar-Rasul.',
    exampleArabic: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ',
  },
  {
    number: 3,
    name: 'Berwasiat Taqwa',
    nameArabic: 'الوصية بالتقوى',
    placement: 'Wajib pada Khutbah Pertama & Khutbah Kedua',
    description: 'Mengajak dan mengingatkan jamaah untuk taat kepada Allah serta menjauhi maksiat.',
    exampleArabic: 'أُوصِيكُمْ وَنَفْسِي بِتَقْوَى اللَّهِ (Ittaqullah)',
  },
  {
    number: 4,
    name: 'Membaca Satu Ayat Al-Qur\'an yang Memahamkan',
    nameArabic: 'قراءة آية من القرآن مفهمة',
    placement: 'Wajib pada salah satu dari dua khutbah (lebih utama pada khutbah pertama)',
    description: 'Minimal membaca satu ayat penuh yang memiliki makna utuh/sempurna, bukan potongan huruf terputus.',
    exampleArabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ',
  },
  {
    number: 5,
    name: 'Mendoakan Kaum Mukminin',
    nameArabic: 'الدعاء للمؤمنين والمؤمنات',
    placement: 'Wajib pada Khutbah Kedua',
    description: 'Mendoakan ampunan dan keselamatan urusan akhirat bagi kaum mukminin dan mukminat secara umum.',
    exampleArabic: 'اللَّهُمَّ اغْفِرْ لِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ',
  },
];

export const VEHICLE_PRAYERS: VehiclePrayerGuide[] = [
  {
    vehicleType: 'pesawat',
    title: 'Shalat di Pesawat Terbang',
    wudhuOption: 'Wudhu dengan air di toilet wastafel (secukupnya tanpa boros), atau Tayammum dengan debu suci pada dinding kabin pesawat bila air tidak memungkinkan.',
    qiblatRule: 'Wajib berusaha menghadap kiblat saat Takbiratul Ihram dengan melihat layar info penerbangan atau kompas. Jika arah pesawat berbelok di udara dan sulit mengikuti kiblat, teruskan shalat.',
    standingRule: 'Jika memungkinkan berdiri di lorong atau dekat pintu darurat/galley dengan izin pramugari tanpa membahayakan, maka wajib berdiri. Jika dilarang/ada turbulensi, shalat sambil duduk di kursi.',
    statusHukum: 'Jika dikerjakan sambil duduk tanpa berdiri dan tidak sempurna kiblat/thaharah, shalat tersebut berstatus "Shalat Li Hurmatil Waqti" (menghormati waktu), dan wajib diqadha\' setelah mendarat menurut Mazhab Syafi\'i.',
    qadhaRequired: true,
    practicalTips: [
      'Gunakan fasilitas Jamak dan Qashar di bandara sebelum boarding jika waktu memungkinkan.',
      'Jika penerbangan menyeberangi beberapa zona waktu shalat, pantau waktu shalat setempat atau koordinat matahari.',
    ],
  },
  {
    vehicleType: 'kereta',
    title: 'Shalat di Kereta Api',
    wudhuOption: 'Wudhu di toilet gerbong kereta atau memanfaatkan mushala khusus yang disediakan pada kereta jarak jauh.',
    qiblatRule: 'Gunakan mushala kereta yang menghadap kiblat (atau ikuti perkiraan arah kiblat). Di kursi duduk, menghadap sesuai arah hadap kereta bila darurat.',
    standingRule: 'Di mushala kereta wajib shalat berdiri sempurna dengan ruku\' dan sujud normal. Di kursi, hanya jika darurat dan tidak ada space mushala.',
    statusHukum: 'Jika shalat dilakukan di mushala kereta dengan wudhu sempurna, berdiri, dan menghadap kiblat, maka shalat SAH dan TIDAK PERLU diqadha\'. Jika shalat di kursi tanpa menghadap kiblat, wajib qadha\'.',
    qadhaRequired: false,
    practicalTips: [
      'Prioritaskan shalat di gerbong mushala atau bordes yang stabil.',
      'Bila kereta berhenti lama di stasiun besar, manfaatkan mushala stasiun.',
    ],
  },
  {
    vehicleType: 'kapal',
    title: 'Shalat di Kapal Laut / Feri',
    wudhuOption: 'Wudhu dengan air tawar kapal atau air laut (air mutlak yang suci dan menyucikan sesuai hadits "Huwat thahūru mā\'uhu").',
    qiblatRule: 'Wajib menghadap kiblat saat takbir dan wajib berputar mengikuti perubahan arah kapal jika kapal berbelok selama shalat.',
    standingRule: 'Wajib berdiri tegak, kecuali jika gelombang sangat besar hingga pusing/mual laut (mabuk laut parah).',
    statusHukum: 'Shalat SAH sempurna dan TIDAK PERLU diqadha\' karena terpenuhi rukun wudhu, berdiri, dan kiblat.',
    qadhaRequired: false,
    practicalTips: [
      'Gunakan mushala kapal yang umumnya dilengkapi penunjuk kiblat kompas laut dinamis.',
    ],
  },
  {
    vehicleType: 'bus_mobil',
    title: 'Shalat di Bus Malam / Mobil Pribadi',
    wudhuOption: 'Jika mobil pribadi, wajib berhenti di Rest Area/Masjid pinggir jalan untuk shalat sempurna. Jika bus umum yang tidak mau berhenti dan waktu shalat akan habis, tayamum/wudhu semampunya.',
    qiblatRule: 'Menghadap ke arah laju jalan kendaraan bus.',
    standingRule: 'Shalat duduk di kursi bus dengan isyarat ruku\' dan sujud (posisi sujud lebih rendah dari ruku\').',
    statusHukum: 'Shalat di kursi bus bergerak tanpa kiblat dan tanpa berdiri dihukumi Shalat Li Hurmatil Waqti (wajib diulang/diqadha\' setelah tiba).',
    qadhaRequired: true,
    practicalTips: [
      'Sebaiknya lakukan Jamak Taqdim atau Jamak Ta\'khir di terminal atau rest area saat bus berhenti istirahat makan.',
    ],
  },
];

export const JAMAAH_JUMAT_QUIZ: JamaahJumatQuizQuestion[] = [
  {
    id: 'jj_1',
    question: 'Berapakah jumlah minimal jama\'ah Shalat Jum\'at yang memenuhi kriteria mustautin (penduduk tetap yang mukallaf, merdeka, dan laki-laki) menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: '3 orang jama\'ah' },
      { id: 'b', text: '12 orang jama\'ah' },
      { id: 'c', text: '40 orang jama\'ah' },
      { id: 'd', text: '50 orang jama\'ah' },
    ],
    correctOptionId: 'c',
    explanation: 'Menurut qaul mu\'tamad Mazhab Syafi\'i, syarat sah berdirinya shalat Jum\'at adalah dihadiri minimal 40 orang jama\'ah yang berstatus Mustautin (penduduk menetap), berakal, baligh, merdeka, dan berjenis kelamin laki-laki dari awal khutbah hingga salam shalat.',
    dalil: 'Atsar Ka\'ab bin Malik ra. mengenai shalat Jum\'at pertama di Madinah (HR. Abu Dawud no. 1069).',
  },
  {
    id: 'jj_2',
    question: 'Kapankah seorang makmum masbuq terhitung mendapatkan 1 rakaat shalat bersama imam?',
    options: [
      { id: 'a', text: 'Cukup mendapati imam sedang membaca Al-Fatihah' },
      { id: 'b', text: 'Sempat ruku\' dan thuma\'ninah bersama imam sebelum imam bangkit i\'tidal' },
      { id: 'c', text: 'Mendapati imam saat i\'tidal' },
      { id: 'd', text: 'Mendapati imam saat sujud pertama' },
    ],
    correctOptionId: 'b',
    explanation: 'Patokan sah terhitungnya satu rakaat bagi makmum adalah mendapati ruku\' bersama imam dengan thuma\'ninah (diam sejenak) sebelum imam mulai bangkit mengangkat punggungnya menuju i\'tidal.',
    dalil: 'Sabda Nabi SAW: "Man adraka rak\'atan minash shalāti qabla an yaqūmal imāmu faqad adrakahā" (HR. Bukhari & Muslim).',
  },
  {
    id: 'jj_3',
    question: 'Bagaimanakah cara makmum mengingatkan imam yang lupa jumlah rakaat atau keliru dalam gerakan shalat?',
    options: [
      { id: 'a', text: 'Mengucapkan "Allahu Akbar" keras-keras bagi semua jamaah' },
      { id: 'b', text: 'Membaca tasbih "Subhanallah" bagi laki-laki, dan bertepuk tangan (tashfiq) bagi wanita' },
      { id: 'c', text: 'Menepuk pundak makmum di depannya' },
      { id: 'd', text: 'Berbicara menegur kesalahan imam secara langsung' },
    ],
    correctOptionId: 'b',
    explanation: 'Sunnah mengingatkan imam: Laki-laki melafalkan tasbih "Subhanallah" dengan niat dzikir atau dzikir sekaligus memberitahu imam. Sedangkan bagi wanita adalah dengan menepukkan telapak tangan kanan ke punggung tangan kiri (tashfiq) agar tidak memperdengarkan suara.',
    dalil: 'Sabda Nabi SAW: "At-Tasbīhu lir-rijāl wat-tashfīqu lin-nisā\'" (HR. Bukhari & Muslim).',
  },
  {
    id: 'jj_4',
    question: 'Berapakah batas maksimal durasi hari bagi seorang musafir untuk tetap boleh menjamak dan mengqashar shalat di kota tujuan jika ia berniat menetap sementara waktu?',
    options: [
      { id: 'a', text: 'Maksimal 1 hari saja' },
      { id: 'b', text: 'Maksimal 3 hari 3 malam (di luar hari kedatangan dan hari kepulangan)' },
      { id: 'c', text: 'Maksimal 7 hari' },
      { id: 'd', text: 'Maksimal 40 hari' },
    ],
    correctOptionId: 'b',
    explanation: 'Bila seorang musafir berniat tinggal di suatu kota selama 4 hari penuh atau lebih (di luar hari masuk dan hari keluar), maka sejak ia tiba di kota tersebut status musafirnya gugur dan ia menjadi muqim. Keringanan jamak qashar hanya berlaku jika ia berniat tinggal maksimal 3 hari saja.',
    dalil: 'Hadits Al-Ala\' bin Al-Hadhrami ra. dari Nabi SAW (HR. Bukhari & Muslim).',
  },
  {
    id: 'jj_5',
    question: 'Manakah di antara hal berikut yang BUKAN merupakan rukun dari dua khutbah Jum\'at menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Memuji Allah (Hamdalah) pada kedua khutbah' },
      { id: 'b', text: 'Membaca Shalawat atas Nabi SAW pada kedua khutbah' },
      { id: 'c', text: 'Berkhutbah memakai pakaian serba putih dan memegang tongkat' },
      { id: 'd', text: 'Berwasiat taqwa pada kedua khutbah' },
    ],
    correctOptionId: 'c',
    explanation: 'Memakai pakaian putih dan memegang tongkat adalah Sunnah Khutbah, bukan rukun. Lima rukun khutbah adalah: 1. Hamdalah, 2. Shalawat Nabi, 3. Wasiat Taqwa pada kedua khutbah, 4. Membaca satu ayat Al-Qur\'an pada salah satunya, 5. Doa untuk mukminin pada khutbah kedua.',
    dalil: 'Kitab Safinatun Najah & Matan Taqrib karya Syekh Abu Syuja\'.',
  },
];
