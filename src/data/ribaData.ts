import { RibaTypeDetail, RibaCaseStudy, RibaQuizQuestion } from '../types/riba';

export const RIBA_TYPES: RibaTypeDetail[] = [
  // 1. Riba Qardh
  {
    id: 'qardh',
    name: '1. Ribā Qardh (Bunga Pinjaman Hutang)',
    nameArabic: 'رِبَا القَرْض',
    category: 'duyun',
    categoryLabel: 'Riba Duyūn (Hutang-Piutang)',
    definition: 'Kelebihan nominal atau keuntungan tambahan tertentu yang dipersyaratkan oleh kreditur/pemberi pinjaman kepada debitur atas pokok utang yang dipinjamkan.',
    contohKlasik: 'Seseorang meminjamkan uang 10 dirham kepada temannya dengan syarat harus dikembalikan sebesar 11 dirham bulan depan.',
    contohModern: 'Bunga kredit bank konvensional, bunga harian pinjaman online (pinjol), rente rentenir, bunga kartu kredit, dan bunga gadai konvensional.',
    solusiSyarie: 'Menggunakan akad Qardhul Hasan (pinjaman kebajikan murni tanpa bunga sepeser pun) atau menggunakan akad kemitraan bagi hasil (Mudharabah/Musyarakah) atau jual beli margin (Murabahah).',
    dalil: 'Kaidah Fiqih & Ijma\': "Kullu qardhin jarra manfa\'atan fahuwa ribā" (Setiap utang yang mendatangkan keuntungan bagi kreditur adalah riba).',
  },

  // 2. Riba Jahiliyyah
  {
    id: 'jahiliyyah',
    name: '2. Ribā Jāhiliyyah (Denda Berbunga Keterlambatan)',
    nameArabic: 'رِبَا الجَاهِلِيَّة',
    category: 'duyun',
    categoryLabel: 'Riba Duyūn (Hutang-Piutang)',
    definition: 'Tambahan utang berbunga majemuk yang dibebankan kepada debitur karena tidak mampu melunasi kewajiban utangnya pada saat jatuh tempo (*"Bayar sekarang atau utangmu berlipat ganda"*).',
    contohKlasik: 'Pada masa jahiliyyah, ketika piutang jatuh tempo, kreditur berkata: "Iqdhī au urbī" (Lunasi utangmu sekarang atau tambah bayarannya dengan tambahan tempo).',
    contohModern: 'Denda keterlambatan cicilan paylater / kartu kredit berbunga harian yang terus berlipat ganda (compounding penalty interest).',
    solusiSyarie: 'Dalam sistem syariah, orang yang mengalami kesulitan finansial riil (*mu\'sir*) wajib diberi kelonggaran tempo tanpa denda (QS. Al-Baqarah: 280). Denda finansial bagi orang mampu yang sengaja menunda pembayaran hanya boleh berupa *Ta\'zīr* yang disalurkan 100% untuk dana sosial kebajikan, bukan menjadi pendapatan laba bank.',
    dalil: 'QS. Ali Imran: 130: "Wahai orang-orang yang beriman! Janganlah kamu memakan riba dengan berlipat ganda...".',
  },

  // 3. Riba Fadhl
  {
    id: 'fadhl',
    name: '3. Ribā Fadhl (Kelebihan Takaran Barter Sejenis)',
    nameArabic: 'رِبَا الفَضْل',
    category: 'buyu',
    categoryLabel: 'Riba Buyū\' (Jual Beli & Barter)',
    definition: 'Kelebihan kuantitas, bobot timbangan, atau takaran dalam pertukaran (barter) antara dua barang ribawi yang SEJENIS, meskipun kualitas mutunya berbeda.',
    contohKlasik: 'Menukar 1 sha\' kurma kualitas tinggi (Barniy/Ajwah) dengan 2 sha\' kurma kualitas rendah (Jam\'an). Nabi SAW memerintahkan membatalkannya.',
    contohModern: 'Tukar tambah perhiasan emas lama 10 gram dengan emas model baru 8 gram tanpa ditransaksikan secara jual beli uang tunai terpisah.',
    solusiSyarie: 'Menjual barang ribawi lama terlebih dahulu dengan uang tunai, kemudian menggunakan uang hasil penjualan tersebut untuk membeli barang ribawi baru secara terpisah.',
    dalil: 'HR. Bukhari no. 2201 & Muslim no. 1593: "Janganlah kamu menjual kurma dengan kurma kecuali sama takarannya".',
  },

  // 4. Riba Nasi'ah
  {
    id: 'nasiah',
    name: '4. Ribā Nasī\'ah (Penundaan Tempo Barter Satu \'Illat)',
    nameArabic: 'رِبَا النَّسِيئَة',
    category: 'buyu',
    categoryLabel: 'Riba Buyū\' (Jual Beli & Barter)',
    definition: 'Penangguhan atau penundaan serah terima waktu (*tempo*) dalam transaksi pertukaran dua komoditas ribawi yang memiliki kesamaan \'illat (seperti sesama mata uang/logam mulia atau sesama bahan makanan).',
    contohKlasik: 'Menukar emas dengan perak secara tempo (emas diserahkan hari ini, perak diserahkan besok).',
    contohModern: 'Pertukaran valuta asing (Forex) secara forward / non-spot (beli USD dengan Rupiah secara tempo/tunda bayar) atau jual beli emas fisik dicicil tanpa serah terima seketika menurut jumhur ulama.',
    solusiSyarie: 'Pertukaran dua mata uang atau logam mulia wajib diserahterimakan secara tunai kontan seketika (*Taqābudh fīl Majlis*).',
    dalil: 'HR. Bukhari no. 2174: "Innamā ar-ribā fī an-nasī\'ah" (Sesungguhnya riba itu ada pada penundaan tempo) & HR. Muslim no. 1587.',
  },

  // 5. Riba Yad
  {
    id: 'yad',
    name: '5. Ribā Yad (Berpisah Sebelum Serah Terima Nyata)',
    nameArabic: 'رِبَا اليَد',
    category: 'buyu',
    categoryLabel: 'Riba Buyū\' (Jual Beli & Barter)',
    definition: 'Terjadinya transaksi barter komoditas ribawi di mana kedua belah pihak berpisah badan dari majelis akad sebelum terlaksananya serah terima fisik barang secara nyata (*Qabdh*), meskipun awalnya tidak disyaratkan tempo.',
    contohKlasik: 'A dan B sepakat menukar gandum dengan kurma. Namun sebelum gandum dan kurma diserahterimakan ke tangan masing-masing, salah satu pihak sudah pergi meninggalkan pasar.',
    contohModern: 'Transaksi money changer di mana satu pihak menyerahkan uang rupiah lalu pihak kasir menyuruhnya pulang dan menjanjikan dollar baru bisa diambil besok lusa.',
    solusiSyarie: 'Kedua pihak wajib berada di tempat transaksi hingga seluruh uang atau komoditas ribawi diserahterimakan tuntas (*Yadan bi Yadin*).',
    dalil: 'HR. Muslim no. 1587: "Fa-idza ikhtalafat hadzihil asynaf fabi\'u kaifa syi\'tum idza kana yadan bi yad" (Jika berbeda jenis barangnya, juallah sesukamu asalkan tunai tangan ke tangan).',
  },
];

export const TAHAPAN_PENGHARAMAN_RIBA = [
  {
    fase: 'Tahap I: Teguran Moral Halus',
    surah: 'QS. Ar-Rūm: 39',
    periode: 'Periode Makkah (Makkiyyah)',
    pesan: 'Menegaskan bahwa harta yang diberikan dengan riba untuk menambah harta manusia di mata Allah tidaklah menambah kebaikan sedikit pun, berbeda dengan zakat yang mencari keridhaan Allah.',
    ayatArabic: 'وَمَآ ءَاتَيْتُم مِّن رِّبًۭا لِّيَرْبُوَا۟ فِىٓ أَمْوَٰلِ ٱلنَّاسِ فَلَا يَرْبُوا۟ عِندَ ٱللَّهِ...',
  },
  {
    fase: 'Tahap II: Kecaman atas Praktik Kaum Terdahulu',
    surah: 'QS. An-Nisā\': 160-161',
    periode: 'Awal Periode Madinah (Madaniyyah)',
    pesan: 'Menceritakan azab pedih yang ditimpakan kepada kaum Yahudi akibat mereka memakan harta riba padahal telah dilarang bagi mereka, sebagai peringatan awal bagi kaum mukminin.',
    ayatArabic: 'وَأَخْذِهِمُ ٱلرِّبَوٰا۟ وَقَدْ نُهُوا۟ عَنْهُ وَأَكْلِهِمْ أَمْوَٰلَ ٱلنَّاسِ بِٱلْبَـٰطِلِ...',
  },
  {
    fase: 'Tahap III: Larangan Riba Berlipat Ganda',
    surah: 'QS. Āli \'Imrān: 130',
    periode: 'Tahun 3 Hijriyah (Pasca Perang Uhud)',
    pesan: 'Melarang tegas praktik riba berlipat ganda (*Adh\'āfan Mudhā\'afah*) yang menjadi adat kebiasaan kaum jahiliyyah yang memeras debitur miskin dengan bunga menumpuk.',
    ayatArabic: 'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَأْكُلُوا۟ ٱلرِّبَوٰٓا۟ أَضْعَـٰفًۭا مُّضَـٰعَفَةًۭ ۖ وَٱتَّقُوا۟ ٱللَّهَ لَعَلَّكُمْ تُفْلِحُونَ',
  },
  {
    fase: 'Tahap IV: Pengharaman Mutlak & Maklumat Perang',
    surah: 'QS. Al-Baqarah: 275-279',
    periode: 'Akhir Hayat Rasulullah SAW (Madaniyyah)',
    pesan: 'Pengharaman total segala bentuk sisa riba tanpa pandang bulu, menghalalkan jual beli dan mengharamkan riba, serta mengumumkan maklumat perang dari Allah dan Rasul-Nya bagi orang yang enggan meninggalkan riba.',
    ayatArabic: 'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ وَذَرُوا۟ مَا بَقِىَ مِنَ ٱلرِّبَوٰٓا۟ إِن كُنتُم مُّؤْمِنِينَ ۝ فَإِن لَّمْ تَفْعَلُوا۟ فَأْذَنُوا۟ بِحَرْبٍۢ مِّنَ ٱللَّهِ وَرَسُولِهِۦ...',
  },
];

export const RIBA_CASES: RibaCaseStudy[] = [
  {
    id: 'case_emas_tukar',
    title: 'Tukar Tambah Perhiasan Emas Lama vs Baru',
    category: 'fadhl',
    categoryLabel: 'Riba Fadhl',
    description: 'Ibu Aisyah membawa kalung emas lama 10 gram kadar 70% ke toko emas, lalu menukarnya dengan gelang emas baru 8 gram model terkini dengan menambah uang tunai Rp 1.500.000 sebagai ongkos bikin.',
    statusHukum: 'haram_riba',
    statusLabel: 'HARAM TERINDIKASI RIBA FADHL',
    alasanFiqih: 'Pertukaran emas dengan emas adalah pertukaran komoditas ribawi sejenis. Syarat mutlaknya adalah Tamātsul (sama persis berat gramnya) dan Taqābudh (tunai di tempat). Penambahan uang tunai pada barter emas beda bobot dihukumi Riba Fadhl secara ijma\' fuqaha.',
    solusiSyarie: 'Pisahkan menjadi 2 akad independen: 1) Jual kalung lama secara terpisah hingga menerima uang tunai penuh; 2) Gunakan uang tersebut untuk membeli gelang baru secara tunai.',
    dalil: 'HR. Bukhari no. 2201 (Kisah Bilal menukar kurma kualitas rendah dengan kurma bagus yang ditegur Nabi SAW: "Awwāh! \'Ainur ribā! Jangan lakukan itu!").',
  },
  {
    id: 'case_kredit_emas',
    title: 'Pembelian Logam Mulia Emas Batangan Secara Angsuran / Kredit',
    category: 'nasiah',
    categoryLabel: 'Riba Nasi\'ah / Khilaf Fatwa',
    description: 'Seseorang membeli emas batangan Antam 10 gram di platform e-commerce dengan sistem cicilan selama 12 bulan (emas baru diserahkan setelah cicilan lunas atau emas langsung diserahkan namun uangnya dicicil).',
    statusHukum: 'khilaf_fatwa',
    statusLabel: 'DIBOLEHKAN FATWA DSN-MUI (KHILAF JUMHUR)',
    alasanFiqih: 'Menurut Jumhur Ulama klasik (Syafi\'i, Maliki, Hanafi, Hanbali), emas adalah komoditas ribawi tsamaniyyah sehingga haram diperjualbelikan secara tempo (Riba Nasi\'ah). Namun Fatwa DSN-MUI No. 77/DSN-MUI/V/2010 dan pendapat Ibnu Taimiyyah & Ibnul Qayyim membolehkan jual beli emas kredit jika emas sudah menjadi komoditas perhiasan/investasi (sil\'ah) dan bukan lagi mata uang resmi.',
    solusiSyarie: 'Bagi yang ingin keluar dari khilaf ulama (*Al-Khurūj minal Khilāf Mustahabb*), sangat dianjurkan menabung uang hingga cukup lalu membeli emas batangan secara tunai serah terima fisik langsung di gerai resmi.',
    dalil: 'HR. Muslim no. 1587 vs Fatwa DSN-MUI No. 77/2010 tentang Jual Beli Emas Secara Tidak Tunai.',
  },
  {
    id: 'case_pinjol_bunga',
    title: 'Pinjaman Online (Pinjol) & Paylater dengan Biaya Harian',
    category: 'qardh',
    categoryLabel: 'Riba Qardh',
    description: 'Ahmad meminjam uang dana talangan darurat Rp 2.000.000 melalui aplikasi pinjaman online dengan tenor 30 hari. Aplikasi membebankan biaya bunga/layanan sebesar 0.4% per hari sehingga Ahmad harus mengembalikan Rp 2.240.000.',
    statusHukum: 'haram_riba',
    statusLabel: 'MUTLAK HARAM (RIBA QARDH)',
    alasanFiqih: 'Setiap tambahan nominal uang atas pokok pinjaman hutang (*qardh*) adalah Riba Qardh, terlepas apapun istilah yang digunakan (bunga, bunga flat, biaya layanan persentase, atau biaya administrasi berbanding nominal modal).',
    solusiSyarie: 'Mengajukan pembiayaan syariah yang berakar pada sektor riil (seperti Murabahah jika butuh barang atau Ijarah jika butuh jasa) atau meminjam melalui Baitul Mal / pinjaman kebajikan tanpa bunga (*Qardhul Hasan*).',
    dalil: 'QS. Al-Baqarah: 275 & Kaidah: "Kullu qardhin jarra manfa\'atan fahuwa ribā".',
  },
  {
    id: 'case_valas_spot',
    title: 'Penukaran Valuta Asing (Ash-Sharf) di Money Changer',
    category: 'fadhl',
    categoryLabel: 'Jual Beli Valas',
    description: 'Seorang calon jamaah haji menukarkan uang Rupiah Rp 10.000.000 dengan mata uang Riyal Arab Saudi di loket money changer resmi, di mana uang diserahkan dan diterima seketika di meja kasir.',
    statusHukum: 'sah_halal',
    statusLabel: 'SAH DAN HALAL (ASH-SHARF TUNAI)',
    alasanFiqih: 'Pertukaran mata uang beda negara (Rupiah dengan Riyal) adalah pertukaran barang ribawi yang beda jenis namun satu \'illat (tsamaniyyah). Kaidahnya: Boleh berbeda takaran/kurs (*Tafadhul*), asalkan diserahterimakan secara tunai kontan seketika (*Taqabudh fīl Majlis*).',
    solusiSyarie: 'Transaksi sah selama transaksi berbentuk transaksi Spot (kontan di tempat), dan haram jika transaksi Forward/Swap (tempo/spekulasi).',
    dalil: 'HR. Muslim no. 1587 & Fatwa DSN-MUI No. 28/DSN-MUI/III/2002 tentang Jual Beli Mata Uang (Al-Sharf).',
  },
];

export { RIBA_QUIZ } from './quizzes/ribaQuizData';
