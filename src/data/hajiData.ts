import { HajiQuizQuestion, LaranganIhramItem, ManasikDayStep } from '../types/haji';

export const RUKUN_HAJI_LIST = [
  {
    number: 1,
    name: '1. Ihram (Niat Masuk Manasik)',
    arabic: 'الإحرام',
    desc: 'Menyengaja masuk ke dalam ibadah haji dengan memakai pakaian ihram dan berniat di dalam hati: "Labbaikallāhumma hajjan" (disunnahkan mandi dan shalat sunnah ihram 2 rakaat).',
  },
  {
    number: 2,
    name: '2. Wukuf di Padang Arafah',
    arabic: 'الوقوف بعرفة',
    desc: 'Hadir di padang Arafah pada tanggal 9 Dzulhijjah mulai dari tergelincir matahari (waktu Dzuhur) hingga terbit fajar 10 Dzulhijjah. Merupakan rukun paling agung ("Al-Hajju \'Arafah").',
  },
  {
    number: 3,
    name: '3. Thawaf Ifadhah (Ziyarah)',
    arabic: 'طواف الإفاضة',
    desc: 'Mengelilingi Ka\'bah sebanyak 7 putaran sempurna berlawanan arah jarum jam dengan posisi Ka\'bah di sebelah kiri badan, dilakukan setelah wukuf di Arafah.',
  },
  {
    number: 4,
    name: '4. Sa\'i antara Shafa & Marwah',
    arabic: 'السعي',
    desc: 'Berjalan bolak-balik sebanyak 7 kali putaran dimulai dari bukit Shafa dan berakhir di bukit Marwah.',
  },
  {
    number: 5,
    name: '5. Tahallul (Cukur / Gunting Rambut)',
    arabic: 'الحلق أو التقصير',
    desc: 'Mencukur habis (halq) atau memendekkan rambut (taqshir) minimal 3 helai rambut kepala untuk melepaskan diri dari larangan ihram.',
  },
  {
    number: 6,
    name: '6. Tertib pada Sebagian Besar Rukun',
    arabic: 'الترتيب',
    desc: 'Mendahulukan ihram sebelum amalan lainnya, dan wukuf sebelum thawaf ifadhah dan tahallul.',
  },
];

export const WAJIB_HAJI_LIST = [
  {
    number: 1,
    name: '1. Ihram dari Miqat Makani',
    arabic: 'الإحرام من الميقات',
    desc: 'Memulai niat ihram dari batas wilayah geografis yang telah ditetapkan Rasulullah SAW (seperti Dzulhulaifah/Bir Ali, Yalamlam, dll) sebelum melintas masuk ke tanah haram.',
  },
  {
    number: 2,
    name: '2. Mabit di Muzdalifah',
    arabic: 'المبيت بمزدلفة',
    desc: 'Bermalam atau singgah di Muzdalifah pada malam 10 Dzulhijjah setelah tengah malam dan mengumpulkan kerikil untuk melempar jumrah.',
  },
  {
    number: 3,
    name: '3. Melempar Jumrah Aqabah',
    arabic: 'رمي جمرة العقبة',
    desc: 'Melempar 7 butir kerikil ke tiang Jumrah Aqabah pada hari raya Idul Adha (10 Dzulhijjah) setelah terbit matahari.',
  },
  {
    number: 4,
    name: '4. Mabit di Mina pada Hari Tasyriq',
    arabic: 'المبيت بمنى ليالي التشريق',
    desc: 'Bermalam di lembah Mina selama sebagian besar malam pada tanggal 11, 12 Dzulhijjah (bagi yang Nafar Awal), atau hingga 13 Dzulhijjah (bagi Nafar Tsani).',
  },
  {
    number: 5,
    name: '5. Melempar 3 Jumrah di Hari Tasyriq',
    arabic: 'رمي الجمرات الثلاث',
    desc: 'Melempar 7 kerikil secara tertib ke Jumrah Ula, Wustha, dan Aqabah pada setiap siang hari Tasyriq (total 21 butir per hari).',
  },
  {
    number: 6,
    name: '6. Thawaf Wada\' (Perpisahan)',
    arabic: 'طواف الوداع',
    desc: 'Thawaf 7 putaran perpisahan mengelilingi Ka\'bah sebelum meninggalkan kota Makkah untuk pulang ke tanah air (kecuali wanita haid yang dimaafkan).',
  },
];

export const MANASIK_STEPS: ManasikDayStep[] = [
  {
    dayNumber: 1,
    dateHijri: '8 Dzulhijjah',
    nameIndo: 'Hari Tarwiyah di Mina',
    location: 'Mina',
    activities: [
      'Memakai pakaian ihram dan berniat haji dari penginapan / hotel Makkah.',
      'Berangkat menuju Mina sebelum waktu Dzuhur.',
      'Melaksanakan shalat Dzuhur, Ashar, Maghrib, Isya, dan Shubuh di Mina secara qashar tanpa jamak.',
      'Bermalam (mabit) di kemah Mina menyongsong fajar 9 Dzulhijjah.',
    ],
    statusHukum: 'sunnah',
    tips: 'Sunnah muakkadah yang dianjurkan; jamaah haji reguler modern biasanya langsung dipersiapkan menuju Arafah.',
  },
  {
    dayNumber: 2,
    dateHijri: '9 Dzulhijjah',
    nameIndo: 'Puncak Haji: Wukuf di Padang Arafah',
    location: 'Arafah & Muzdalifah',
    activities: [
      'Berangkat ke padang Arafah setelah terbit matahari tanggal 9 Dzulhijjah.',
      'Memasuki waktu Wukuf saat tergelincir matahari (waktu Dzuhur).',
      'Shalat jamak taqdim qashar Dzuhur dan Ashar di kemah Arafah.',
      'Memperbanyak doa, dzikir, istighfar, membaca Al-Qur\'an, dan talbiyah hingga matahari terbenam.',
      'Setelah Maghrib, bergerak (ifadhah) menuju Muzdalifah dengan tenang.',
      'Mabit di Muzdalifah setelah lewat tengah malam dan memungut batu kerikil.',
    ],
    statusHukum: 'rukun',
    tips: 'Inilah inti puncak haji ("Al-Hajju \'Arafah"). Wajib berada di Arafah meski hanya sejenak.',
  },
  {
    dayNumber: 3,
    dateHijri: '10 Dzulhijjah',
    nameIndo: 'Hari Nahar (Idul Adha): Lempar Aqabah & Tahallul',
    location: 'Mina & Masjidil Haram',
    activities: [
      'Menuju Mina dari Muzdalifah setelah shalat Shubuh.',
      'Melempar Jumrah Aqabah dengan 7 butir kerikil sambil bertakbir di setiap lemparan.',
      'Menyembelih hewan Dam (bagi yang berhaji Tamattu\' atau Qiran).',
      'Tahallul Awal (mencukur/memotong minimal 3 helai rambut) -> Boleh memakai baju biasa dan lepas larangan ihram KECUALI jima\'.',
      'Menuju Masjidil Haram Makkah untuk melaksanakan Thawaf Ifadhah dan Sa\'i.',
      'Tahallul Tsani (seluruh larangan ihram termasuk hubungan suami-istri telah halal).',
      'Kembali ke Mina untuk bermalam (mabit).',
    ],
    statusHukum: 'rukun',
    tips: 'Hari paling padat dalam manasik; fisik harus prima dan terhidrasi dengan baik.',
  },
  {
    dayNumber: 4,
    dateHijri: '11 Dzulhijjah',
    nameIndo: 'Hari Tasyriq Pertama di Mina',
    location: 'Mina',
    activities: [
      'Bermalam (mabit) di Mina.',
      'Setelah matahari tergelincir (masuk waktu Dzuhur), berjalan menuju Jamarat.',
      'Melempar 3 Jumrah secara berurutan: Jumrah Ula (7 batu) -> berdoa, Jumrah Wustha (7 batu) -> berdoa, Jumrah Aqabah (7 batu). Total 21 batu.',
      'Kembali ke kemah Mina untuk istirahat dan berdzikir.',
    ],
    statusHukum: 'wajib',
    tips: 'Waktu melempar dimulai setelah tergelincir matahari (zawal) hingga malam hari.',
  },
  {
    dayNumber: 5,
    dateHijri: '12 Dzulhijjah',
    nameIndo: 'Hari Tasyriq Kedua (Nafar Awal)',
    location: 'Mina / Makkah',
    activities: [
      'Bermalam di Mina.',
      'Setelah tergelincir matahari, melempar kembali 3 Jumrah (Ula, Wustha, Aqabah) masing-masing 7 butir (total 21 butir).',
      'PILIHAN NAFAR AWAL: Jamaah boleh meninggalkan Mina menuju Makkah sebelum terbenam matahari tanggal 12 Dzulhijjah.',
      'Bagi yang memilih Nafar Tsani, tetap tinggal di Mina untuk menginap malam ke-13.',
    ],
    statusHukum: 'wajib',
    tips: 'Nafar Awal sah jika jamaah keluar dari perbatasan Mina sebelum matahari terbenam 12 Dzulhijjah.',
  },
  {
    dayNumber: 6,
    dateHijri: '13 Dzulhijjah',
    nameIndo: 'Hari Tasyriq Ketiga (Nafar Tsani)',
    location: 'Mina & Makkah',
    activities: [
      'Melempar 3 Jumrah (Ula, Wustha, Aqabah) masing-masing 7 butir batu (total 21 butir).',
      'Meninggalkan Mina menuju Makkah (Nafar Tsani selesai).',
      'Menyelesaikan Thawaf Ifadhah & Sa\'i jika belum dikerjakan pada 10 Dzulhijjah.',
      'Melaksanakan Thawaf Wada\' (thawaf perpisahan) sebelum jadwal kepulangan ke tanah air.',
    ],
    statusHukum: 'wajib',
    tips: 'Setelah Thawaf Wada\', tidak boleh lagi berlama-lama belanja atau berdiam di Makkah, kecuali menunggu bus/keberangkatan.',
  },
];

export const LARANGAN_IHRAM: LaranganIhramItem[] = [
  {
    id: 'pakaian_jahit',
    name: 'Memakai Pakaian Berjahit (Kemeja, Celana, Jubah)',
    category: 'laki_laki',
    damType: 'takhyir_taqdir',
    consequence: 'Dam Takhyir & Taqdir: Boleh memilih menyembelih 1 kambing, atau puasa 3 hari, atau bersedekah 3 sha\' makanan pokok kepada 6 orang miskin (masing-masing 1/2 sha\').',
  },
  {
    id: 'tutup_kepala',
    name: 'Menutup Kepala dengan Benda Menempel (Peci, Sorban, Topi)',
    category: 'laki_laki',
    damType: 'takhyir_taqdir',
    consequence: 'Dam Takhyir & Taqdir (Kambing / Puasa 3 hari / Makanan 6 miskin). Payung atau atap mobil diperbolehkan karena tidak menempel di kepala.',
  },
  {
    id: 'tutup_wajah_tangan',
    name: 'Menutup Wajah (Cadar) & Memakai Sarung Tangan',
    category: 'perempuan',
    damType: 'takhyir_taqdir',
    consequence: 'Dam Takhyir & Taqdir. Wanita wajib menampakkan wajah dan kedua telapak tangan saat ihram.',
  },
  {
    id: 'potong_kuku_rambut',
    name: 'Memotong Kuku, Mencukur atau Mencabut Rambut / Bulu Tubuh',
    category: 'bersama',
    damType: 'takhyir_taqdir',
    consequence: 'Memotong ≥ 3 helai rambut atau 3 kuku dikenai Dam Takhyir & Taqdir penuh. Jika 1 helai/kuku: 1 mud beras; jika 2 helai/kuku: 2 mud beras.',
  },
  {
    id: 'wewangian',
    name: 'Memakai Minyak Wangi (Parfum) pada Badan atau Pakaian',
    category: 'bersama',
    damType: 'takhyir_taqdir',
    consequence: 'Dam Takhyir & Taqdir jika sengaja memakai wewangian setelah berniat ihram.',
  },
  {
    id: 'minyak_rambut',
    name: 'Memakai Minyak Rambut atau Minyak Jenggot',
    category: 'bersama',
    damType: 'takhyir_taqdir',
    consequence: 'Dam Takhyir & Taqdir.',
  },
  {
    id: 'berburu_hewan',
    name: 'Membunuh atau Memburu Hewan Darat Liar Tanah Haram',
    category: 'bersama',
    damType: 'takhyir_tadil',
    consequence: 'Dam Takhyir & Ta\'dil: Mengganti hewan ternak yang sepadan nilainya, atau sedekah makanan seharga hewan tersebut, atau berpuasa 1 hari per 1 mud makanan.',
  },
  {
    id: 'tebang_pohon',
    name: 'Menebang atau Mencabut Pepohonan / Rumput Tanah Haram',
    category: 'bersama',
    damType: 'takhyir_tadil',
    consequence: 'Dam sesuai ukuran pohon: pohon besar diganti 1 ekor sapi/unta, pohon kecil diganti 1 ekor kambing.',
  },
  {
    id: 'akad_nikah',
    name: 'Melakukan Akad Nikah (Menikah atau Menikahkan)',
    category: 'bersama',
    damType: 'batal_nikah',
    consequence: 'Akad nikahnya BATAL (tidak sah) menurut syariat. Tidak ada denda dam materi, tetapi pernikahannya tidak diakui.',
  },
  {
    id: 'jima_sebelum_tahallul',
    name: 'Bersetubuh (Jima\') Sebelum Tahallul Awal',
    category: 'bersama',
    damType: 'tertib_tadil',
    consequence: 'PELANGGARAN TERBERAT: Hajinya seketika FASID (RUSAK/BATAL), namun ia wajib meneruskan manasik hingga tuntas, wajib mengqadha\' haji tahun depan, dan wajib membayar Dam 1 ekor unta (jika tak mampu: sapi; jika tak mampu: 7 kambing).',
  },
];

export { HAJI_QUIZ } from './quizzes/hajiQuizData';
