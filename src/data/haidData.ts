import { BloodColorDetail, ForbiddenAct, HaidQuizQuestion } from '../types/haid';

export const BLOOD_COLORS: BloodColorDetail[] = [
  {
    id: 'aswad',
    nameIndo: 'Hitam (Aswad)',
    nameArabic: 'الأسود',
    powerRank: 1,
    description: 'Tingkatan darah paling kuat (Dam Qawiy). Kental dan biasanya berbau menyengat.',
  },
  {
    id: 'ahmar',
    nameIndo: 'Merah (Ahmar)',
    nameArabic: 'الأحمر',
    powerRank: 2,
    description: 'Darah merah segar/alami. Lebih lemah dari hitam, namun lebih kuat dari warna di bawahnya.',
  },
  {
    id: 'asyqar',
    nameIndo: 'Coklat Kemerahan (Asyqar)',
    nameArabic: 'الأشقر',
    powerRank: 3,
    description: 'Darah berwarna cokelat atau merah kekuning-kuningan.',
  },
  {
    id: 'ashfar',
    nameIndo: 'Kuning (Ashfar)',
    nameArabic: 'الأصفر',
    powerRank: 4,
    description: 'Cairan kekuningan seperti nanah cair atau air luka.',
  },
  {
    id: 'kadir',
    nameIndo: 'Keruh (Kadir)',
    nameArabic: 'الكدر',
    powerRank: 5,
    description: 'Cairan keruh keputih-putihan atau kecokelatan kusam. Tingkatan darah paling lemah.',
  },
];

export const FORBIDDEN_ACTS: ForbiddenAct[] = [
  {
    id: 'shalat',
    name: 'Mengerjakan Shalat (Fardhu & Sunnah)',
    nameArabic: 'الصلاة',
    description: 'Haram shalat dan sujud tilawah/syukur. Shalat yang ditinggalkan TIDAK WAJIB diqadha\' sama sekali sebagai bentuk rahmat dan keringanan syariat.',
    qadhaRequired: false,
    dalil: 'Sabda Nabi SAW kepada Fatimah binti Abi Hubaisy: "Idzaa aqbalatil haidhatu fa da\'ish shalaata" (HR. Bukhari & Muslim).',
  },
  {
    id: 'puasa',
    name: 'Mengerjakan Puasa (Wajib & Sunnah)',
    nameArabic: 'الصوم',
    description: 'Haram berpuasa dan tidak sah jika dikerjakan. Hari-hari puasa wajib (Ramadhan atau nadzar) yang ditinggalkan WAJIB diqadha\' di kemudian hari.',
    qadhaRequired: true,
    dalil: 'Aisyah ra. berkata: "Kami diperintahkan mengqadha\' puasa dan tidak diperintahkan mengqadha\' shalat" (HR. Muslim no. 335).',
  },
  {
    id: 'thawaf',
    name: 'Thawaf di Ka\'bah',
    nameArabic: 'الطواف بالبيت',
    description: 'Haram thawaf karena thawaf mensyaratkan kesucian badan dari hadats besar dan hadats kecil laksana shalat.',
    qadhaRequired: false,
    dalil: 'Sabda Nabi SAW kepada Aisyah: "Lakukanlah apa yang dilakukan orang berhaji, kecuali jangan thawaf di Baitullah hingga engkau suci" (HR. Bukhari).',
  },
  {
    id: 'mushaf',
    name: 'Menyentuh & Membawa Mushaf Al-Qur\'an',
    nameArabic: 'مس المصحف وحمله',
    description: 'Haram menyentuh dan membawa lembaran mushaf Al-Qur\'an tanpa alas/pemisah, kecuali jika dalam kondisi darurat seperti menyelamatkannya dari kebakaran.',
    qadhaRequired: false,
    dalil: 'QS. Al-Waqi\'ah: 79 ("Lā yamassuhū illal muthahharūn").',
  },
  {
    id: 'tilawah',
    name: 'Membaca Al-Qur\'an dengan Niat Tilawah',
    nameArabic: 'قراءة القرآن',
    description: 'Haram melafalkan ayat Al-Qur\'an dengan sengaja berniat tilawah/membaca Al-Qur\'an. Namun BOLEH jika semata-mata berniat dzikir, doa, benteng diri (ta\'awwudz), atau hafalan bagi yang mengajar menurut qaul ulama.',
    qadhaRequired: false,
    dalil: 'HR. Tirmidzi no. 131 dari Ibnu Umar ra.',
  },
  {
    id: 'masjid',
    name: 'Berdiam Diri di Masjid (I\'tikaf)',
    nameArabic: 'اللبث في المسجد',
    description: 'Haram berdiam diri atau duduk di dalam masjid. Boleh sekadar lewat (melintas) jika darah tidak dikhawatirkan mengotori lantai masjid.',
    qadhaRequired: false,
    dalil: 'QS. An-Nisa: 43 ("...illā \'ābirī sabīl").',
  },
  {
    id: 'jima',
    name: 'Bersetubuh (Jima\') & Bersenang-senang',
    nameArabic: 'الوطء والاستمتاع بما بين السرة والركبة',
    description: 'Haram bersetubuh di kemaluan hingga darah berhenti dan selesai mandi wajib. Juga haram bersenang-senang secara langsung di antara pusar dan lutut tanpa busana penghalang.',
    qadhaRequired: false,
    dalil: 'QS. Al-Baqarah: 222 ("Fa\'tazilun nisā\'a fil mahīdh walā taqrabūhunna hattā yath-hurn").',
  },
  {
    id: 'thalaq',
    name: 'Ditalak oleh Suami (Thalaq Bid\'i)',
    nameArabic: 'الطلاق البدعي',
    description: 'Haram bagi suami menceraikan istrinya dalam kondisi haid atau nifas. Thalaqnya tetap sah jatuh, namun perbuatan suami berdosa karena memperpanjang masa iddah istri.',
    qadhaRequired: false,
    dalil: 'HR. Bukhari & Muslim dari riwayat Ibnu Umar ra. saat menceraikan istrinya dalam masa haid.',
  },
];

export const MUSTAHADHAH_CATEGORIES = [
  {
    id: 'mubtadaah_mumayyizah',
    name: '1. Mubtada\'ah Mumayyizah',
    arabic: 'المبتدأة المميزة',
    definition: 'Wanita yang baru pertama kali mengalami haid dalam hidupnya, dan darah yang keluar beraneka warna/sifat sehingga bisa dibedakan antara darah kuat (Qawiy) dan darah lemah (Dha\'if).',
    rule: 'Darah kuat dihukumi HAID (minimal 24 jam dan maksimal 15 hari), sedangkan darah lemah dihukumi ISTIHADHAH (wajib mandi dan shalat).',
  },
  {
    id: 'mubtadaah_ghairu_mumayyizah',
    name: '2. Mubtada\'ah Ghairu Mumayyizah',
    arabic: 'المبتدأة غير المميزة',
    definition: 'Wanita yang baru pertama kali mengalami haid dan darahnya keluar melebihi 15 hari terus-menerus dengan sifat/warna yang seragam (satu warna saja, tidak bisa dibedakan).',
    rule: 'Haidnya ditetapkan 1 hari 1 malam (24 jam) di awal, dan sisanya (29 hari atau hari-hari setelahnya) dihukumi ISTIHADHAH.',
  },
  {
    id: 'mutadah_mumayyizah',
    name: '3. Mu\'tadah Mumayyizah',
    arabic: 'المعتادة المميزة',
    definition: 'Wanita yang pernah mengalami haid sebelumnya (punya siklus kebiasaan), kemudian keluar darah melebihi 15 hari dan sifat darahnya bisa dibedakan (kuat dan lemah).',
    rule: 'Hukum tamyiz diutamakan daripada kebiasaan: Darah kuat dihukumi HAID, dan darah lemah dihukumi ISTIHADHAH.',
  },
  {
    id: 'mutadah_ghairu_mumayyizah_dzakirah',
    name: '4. Mu\'tadah Ghairu Mumayyizah (Dzakirah)',
    arabic: 'المعتادة غير المميزة الذاكرة لعادتها',
    definition: 'Wanita yang punya siklus kebiasaan haid, darah keluar >15 hari seragam satu warna, dan ia ingat betul berapa hari kebiasaannya (misal 7 hari) dan tanggal mulainya.',
    rule: 'Haidnya dikembalikan kepada siklus kebiasaan bulan lalunya (misal 7 hari sebagai Haid), dan kelebihannya dihukumi ISTIHADHAH.',
  },
  {
    id: 'mutahayyirah_mutlaqah',
    name: '5. Mutahayyirah Mutlaqah (Nasiyah lil \'Adah wal Waqti)',
    arabic: 'المتحيرة المطلقة',
    definition: 'Wanita yang lupa sama sekali terhadap durasi hari kebiasaannya dan lupa kapan tanggal waktu mulainya, serta darahnya tidak bisa dibedakan.',
    rule: 'Dihukumi berhati-hati (Ihtiyath): wajib mandi setiap kali hendak shalat fardhu dan wajib berpuasa.',
  },
];

export { HAID_QUIZ } from './quizzes/haidQuizData';
