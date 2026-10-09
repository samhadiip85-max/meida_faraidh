import {
  NajisDetail,
  ThaharahQuizQuestion,
  WaterTypeDetail,
  WudhuStep,
} from '../types/thaharah';

export const WATER_TYPES: WaterTypeDetail[] = [
  {
    id: 'mutlak',
    nameIndo: 'Air Mutlak (Thahir Muthahhir Ghairu Makruh)',
    nameArabic: 'طاهر مطهر غير مكروه (الماء المطلق)',
    legalStatus: 'Suci dan Menyucikan (Tanpa Makruh)',
    purificationPermitted: true,
    definition:
      'Air murni yang masih berada pada sifat asalnya sebagaimana diciptakan Allah SWT, tanpa terikat oleh nama tambahan yang lazim atau tercampur zat yang merubah sifat kemutlakannya.',
    examples: [
      '1. Air Hujan (Mā\'us Samā\')',
      '2. Air Laut (Mā\'ul Bahr)',
      '3. Air Sungai (Mā\'un Nahr)',
      '4. Air Sumur (Mā\'ul Bi\'r)',
      '5. Air Mata Air (Mā\'ul \'Ain)',
      '6. Air Salju (Mā\'uts Tsalj)',
      '7. Air Embun (Mā\'ul Barad)',
    ],
    conditions: [
      'Boleh dan sah digunakan untuk bersuci dari hadats (wudhu dan mandi wajib).',
      'Boleh dan sah digunakan untuk membersihkan segala macam najis.',
      'Boleh diminum dan dikonsumsi.',
    ],
    dalil: 'QS. Al-Anfal: 11 ("وَيُنَزِّلُ عَلَيْكُم مِّنَ السَّمَاءِ مَاءً لِّيُطَهِّرَكُم بِهِ")',
  },
  {
    id: 'musyammas',
    nameIndo: 'Air Musyammas (Thahir Muthahhir Makruh)',
    nameArabic: 'طاهر مطهر مكروه استعماله (الماء المشمس)',
    legalStatus: 'Suci dan Menyucikan, tetapi Makruh Digunakan pada Tubuh',
    purificationPermitted: true,
    definition:
      'Air yang terpanaskan oleh sengatan sinar matahari langsung di dalam wadah bejana logam selain emas dan perak di daerah yang beriklim panas.',
    examples: [
      'Air dalam tong drum besi atau seng yang terjemur terik matahari di wilayah tropis/panas.',
    ],
    conditions: [
      'Makruh digunakan untuk bersuci pada badan karena dikhawatirkan memicu penyakit kusta/lepra (barash) akibat karat mikro logam.',
      'Tidak makruh jika digunakan untuk mencuci pakaian atau membersihkan lantai.',
      'Kemakruhan hilang bila air telah kembali dingin secara alami.',
      'Air yang dipanaskan menggunakan kompor/listrik TIDAK makruh hukumnya.',
    ],
    dalil: 'Atsar Umar bin Khattab ra. dan hadits riwayat Imam Asy-Syafi\'i.',
  },
  {
    id: 'mustamal',
    nameIndo: 'Air Musta\'mal & Mutaghayyir (Thahir Ghairu Muthahhir)',
    nameArabic: 'طاهر غير مطهر (المستعمل والمتغير)',
    legalStatus: 'Zatnya Suci, tetapi TIDAK Menyucikan',
    purificationPermitted: false,
    definition:
      'Air yang suci zatnya sehingga boleh diminum, namun tidak sah digunakan untuk berwudhu, mandi wajib, atau menyucikan najis. Mencakup 2 jenis: 1. Air Musta\'mal (bekas fardhu wudhu/mandi < 2 qullah), 2. Air Mutaghayyir (air yang berubah rasa, warna, atau baunya akibat tercampur zat suci lain seperti teh, kopi, sirup, atau sabun).',
    examples: [
      'Air tetesan/basuhan wudhu atau mandi wajib yang ditampung kembali.',
      'Air teh, kopi, susu, air kelapa, dan sari buah.',
      'Air kolam yang diberi pewangi/sabun hingga warnanya berubah pekat.',
    ],
    conditions: [
      'Boleh diminum dan dimanfaatkan untuk memasak.',
      'TIDAK SAH digunakan untuk wudhu dan mandi junub.',
      'TIDAK SAH digunakan untuk membasuh najis.',
    ],
    dalil: 'Ijma para Sahabat Nabi dan Kaidah Fiqih Mazhab Syafi\'i.',
  },
  {
    id: 'mutanajjis',
    nameIndo: 'Air Mutanajjis (Terkena Najis)',
    nameArabic: 'الماء المتنجس',
    legalStatus: 'Najis (Haram Dikonsumsi & Tidak Menyucikan)',
    purificationPermitted: false,
    definition:
      'Air yang terkena zat najis. Ketentuannya: Jika volumenya kurang dari 2 Qullah (± 216 Liter), seketika menjadi najis meskipun tidak berubah sifatnya. Jika volumenya 2 Qullah atau lebih, hanya menjadi najis apabila berubah salah satu dari 3 sifatnya: bau, rasa, atau warna.',
    examples: [
      'Air dalam ember kecil yang kemasukan kotoran cicak atau setetes air kencing.',
      'Air kolam besar (> 216 L) yang berubah baunya menjadi busuk karena bangkai.',
    ],
    conditions: [
      'Haram diminum atau digunakan memasak.',
      'Tidak sah sama sekali untuk wudhu, mandi wajib, maupun membasuh pakaian.',
      'Air mutanajjis yang mencapai 2 qullah bisa suci kembali jika perubahan baunya/warnanya hilang dengan sendirinya atau ditambah air mutlak.',
    ],
    dalil: 'Sabda Nabi SAW: "إِذَا كَانَ الْمَاءُ قُلَّتَيْنِ لَمْ يَحْمِلِ الْخَبَثَ" (HR. Abu Dawud & Tirmidzi).',
  },
];

export const NAJIS_LIST: NajisDetail[] = [
  {
    id: 'mukhaffafah',
    name: 'Najis Mukhaffafah (Najis Ringan)',
    tier: 'mukhaffafah',
    tierArabic: 'النجاسة المخففة',
    examples: [
      'Air kencing bayi laki-laki yang usianya belum genap 2 tahun dan belum mengonsumsi apapun kecuali Air Susu Ibu (ASI).',
    ],
    cleansingMethod: [
      '1. Hilangkan zat cairan najis terlebih dahulu (bila basah dilap kain kering).',
      '2. Percikkan air mutlak secara merata di atas seluruh area yang terkena najis sampai basah.',
      '3. Tidak disyaratkan air harus mengalir atau diperas.',
      'Catatan: Jika bayi perempuan (meski belum 2 tahun dan hanya minum ASI), najisnya tetap tergolong Mutawassithah (wajib dibasuh hingga air mengalir).',
    ],
    dalil: 'HR. Bukhari & Muslim dari Ummu Qais binti Mihshan ra.',
  },
  {
    id: 'mutawassithah',
    name: 'Najis Mutawassithah (Najis Sedang)',
    tier: 'mutawassithah',
    tierArabic: 'النجاسة المتوسطة',
    examples: [
      'Kotoran manusia (feses & urin dewasa/bayi perempuan)',
      'Kotoran hewan (kotoran sapi, kambing, ayam, dll.)',
      'Darah haid, nifas, istihadlah, dan darah luka yang mengalir',
      'Nanah busuk',
      'Muntahan isi lambung',
      'Bangkai hewan darat (kecuali bangkai ikan dan belalang)',
      'Minuman keras yang memabukkan (Khamr)',
    ],
    cleansingMethod: [
      'Dibagi menjadi 2 bentuk:',
      'A. Najis \'Ainiyah (Tampak bendanya/baunya/warnanya): Wajib dihilangkan wujud zatnya terlebih dahulu, lalu dibasuh dengan air mengalir sampai hilang Bau, Rasa, dan Warnanya.',
      'B. Najis Hukmiyah (Zatnya sudah kering/hilang, tidak ada bau dan warna, tapi belum disucikan): Cukup mengalirkan air mutlak satu kali di atas tempat tersebut.',
    ],
    dalil: 'Hadits pembasuhan kencing orang badui di masjid Nabawi (HR. Bukhari).',
  },
  {
    id: 'mughallazhah',
    name: 'Najis Mughallazhah (Najis Berat)',
    tier: 'mughallazhah',
    tierArabic: 'النجاسة المغلظة',
    examples: [
      'Air liur anjing, urin, kotoran, dan seluruh bagian tubuh anjing.',
      'Babi beserta seluruh bagian tubuh, kulit, lemak, dan tulangnya.',
      'Keturunan hasil persilangan salah satunya dengan hewan lain yang suci.',
    ],
    cleansingMethod: [
      '1. Bersihkan wujud zat najis terlebih dahulu.',
      '2. Basuh area tersebut sebanyak 7 kali basuhan dengan air mutlak yang mengalir.',
      '3. Salah satu dari 7 basuhan tersebut WAJIB dicampur dengan tanah/debu yang suci (biasanya pada basuhan pertama atau kedua).',
    ],
    dalil: 'Sabda Nabi SAW: "طهور إناء أحدكم إذا ولغ فيه الكلب أن يغسله سبع مرات أولاهن بالتراب" (HR. Muslim).',
  },
];

export const WUDHU_STEPS: WudhuStep[] = [
  {
    stepNumber: 1,
    name: 'Niat Wudhu',
    nameArabic: 'النية',
    isFardhu: true,
    description: 'Niat di dalam hati saat pertama kali air membasuh bagian wajah: "Nawaitul wudhu\'a li raf\'il hadatsil ashghari fardhan lillaahi ta\'aalaa".',
  },
  {
    stepNumber: 2,
    name: 'Membasuh Seluruh Wajah',
    nameArabic: 'غسل الوجه',
    isFardhu: true,
    description: 'Batasan wajah: dari tempat tumbuh rambut kepala bagian atas hingga ujung dagu, dan dari telinga kanan hingga telinga kiri.',
    dalilText: 'QS. Al-Maidah: 6 ("فَاغْسِلُوا وُجُوهَكُمْ")',
  },
  {
    stepNumber: 3,
    name: 'Membasuh Kedua Tangan sampai Siku',
    nameArabic: 'غسل اليدين إلى المرفقين',
    isFardhu: true,
    description: 'Membasuh tangan kanan dan kiri mulai ujung jari hingga melewati kedua siku.',
    dalilText: 'QS. Al-Maidah: 6 ("وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ")',
  },
  {
    stepNumber: 4,
    name: 'Mengusap Sebagian Kepala',
    nameArabic: 'مسح بعض الرأس',
    isFardhu: true,
    description: 'Mengusap minimal sebagian rambut yang berada dalam batasan kepala dengan tangan basah.',
    dalilText: 'QS. Al-Maidah: 6 ("وَامْسَحُوا بِرُءُوسِكُمْ")',
  },
  {
    stepNumber: 5,
    name: 'Membasuh Kedua Kaki sampai Mata Kaki',
    nameArabic: 'غسل الرجلين إلى الكعبين',
    isFardhu: true,
    description: 'Membasuh kaki kanan dan kiri mulai dari ujung jari hingga melebihi kedua mata kaki.',
    dalilText: 'QS. Al-Maidah: 6 ("وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ")',
  },
  {
    stepNumber: 6,
    name: 'Tertib Berurutan',
    nameArabic: 'الترتيب',
    isFardhu: true,
    description: 'Mengerjakan seluruh rukun wudhu secara berurutan sesuai yang disebutkan dalam ayat Al-Qur\'an.',
  },
];

export { THAHARAH_QUIZ } from './quizzes/thaharahQuizData';
