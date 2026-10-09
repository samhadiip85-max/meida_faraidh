import { MilkiyyahType, SebabTamalluk, IhyaMawatCase, MilkiyyahQuizQuestion } from '../types/milkiyyah';

export const MILKIYYAH_TYPES: MilkiyyahType[] = [
  {
    id: 'milkut_tamm',
    name: '1. Kepemilikan Sempurna (Al-Milkut-Tāmm)',
    nameArabic: 'المِلْكُ التَّامّ',
    category: 'individu',
    scope: 'sempurna',
    definition: 'Kepemilikan seseorang terhadap materi fisik suatu benda (Dzat / Raqabah) sekaligus seluruh hak pemanfaatannya (Manfa\'ah).',
    characteristics: [
      'Berlaku secara permanen tanpa ada batasan waktu tertentu.',
      'Pemilik berhak penuh menggunakan, menyewakan, menjual, menghibahkan, mewakafkan, atau mewariskannya.',
      'Tidak dapat digugurkan atau dibatalkan sepihak oleh orang lain kecuali atas izin pemilik sah atau putusan hakim syar\'i.',
      'Kewajiban menanggung segala beban pemeliharaan dan kerusakan ada pada pemilik.',
    ],
    examples: [
      'Rumah yang dibeli secara lunas dan bersertifikat.',
      'Tanah hasil warisan orang tua yang telah dibagi sesuai faraidh.',
      'Kendaraan pribadi yang dibeli dari penghasilan halal.',
      'Pakaian dan perkakas yang dimiliki secara sah.',
    ],
    dalil: 'QS. Al-Baqarah: 188 ("Dan janganlah kamu memakan harta sebagian yang lain di antara kamu dengan jalan yang batil...").',
  },
  {
    id: 'milkun_naqis_manfaat',
    name: '2. Kepemilikan Tidak Sempurna (Al-Milkun-Nāqis)',
    nameArabic: 'المِلْكُ النَّاقِص (مِلْكُ المَنْفَعَة)',
    category: 'individu',
    scope: 'tidak_sempurna',
    definition: 'Kepemilikan yang hanya mencakup hak pemanfaatan (Milkul Manfa\'ah) saja tanpa memiliki fisik bendanya, atau sebaliknya memiliki fisiknya saja tanpa hak memanfaatkan.',
    characteristics: [
      'Bersifat temporer (dibatasi oleh durasi waktu tertentu atau hingga penyewa/peminjam meninggal).',
      'Penyewa/peminjam tidak berhak menjual atau mewariskan benda fisiknya.',
      'Pemanfaatan terikat pada kesepakatan akad (tidak boleh melebihi batas yang diizinkan).',
      'Jika bendanya rusak tanpa kelalaian penyewa, penyewa tidak wajib mengganti ganti rugi (yad amanah).',
    ],
    examples: [
      'Penyewa rumah kontrakan (memiliki hak huni selama 1 tahun, tapi fisik rumah milik tuan tanah).',
      'Peminjam sepeda motor dari sahabat (hak pakai sementara tanpa biaya/I\'ārah).',
      'Penerima wasiat hak pakai seumur hidup (Wasiyyah bil Manfa\'ah).',
    ],
    dalil: 'QS. An-Nisa: 29 ("Wahai orang-orang yang beriman, janganlah kamu saling memakan harta sesamamu dengan jalan yang batil, kecuali dengan jalan perniagaan yang berlaku dengan suka sama-suka...").',
  },
  {
    id: 'milkiyyah_ammah',
    name: '3. Kepemilikan Umum / Publik (Al-Milkiyyah Al-\'Āmmah)',
    nameArabic: 'المِلْكِيَّةُ العَامَّة',
    category: 'publik',
    scope: 'sempurna',
    definition: 'Harta dan sumber daya alam yang diperuntukkan bagi kemaslahatan seluruh masyarakat secara bersama, sehingga diharamkan dikuasai atau dimonopoli oleh individu atau korporasi swasta.',
    characteristics: [
      'Milik bersama seluruh umat manusia/rakyat.',
      'Dilarang keras diprivatisasi, dijualbelikan, atau dipagari untuk kepentingan segelintir orang.',
      'Negara bertindak sebagai pengelola dan pengawas agar manfaatnya terdistribusi merata kepada rakyat.',
      'Termasuk fasilitas umum yang jika dihilangkan akan menyebabkan kesulitan hidup bagi masyarakat banyak.',
    ],
    examples: [
      'Air mengalir (sungai, danau, mata air umum).',
      'Padang rumput terbuka / hutan gembala ternak.',
      'Api dan sumber energi primer (tambang minyak bumi, gas alam, batu bara, listrik skala masif).',
      'Jalan raya, laut bebas, dan udara.',
    ],
    dalil: 'HR. Abu Dawud no. 3477 & Ibnu Majah no. 2472: "Al-Muslimūna syurakā\'u fī tsalātsin: fīl-mā\'i wal-kalā\'i wan-nāri" (Kaum muslimin berserikat dalam tiga perkara: air, padang rumput, dan api).',
  },
  {
    id: 'milkiyyah_daulah',
    name: '4. Kepemilikan Negara (Milkiyyah Ad-Daulah)',
    nameArabic: 'مِلْكِيَّةُ الدَّوْلَة',
    category: 'negara',
    scope: 'sempurna',
    definition: 'Harta yang menjadi hak seluruh kaum muslimin/rakyat namun hak pengelolaannya berada di tangan kepala negara (pemerintah) melalui Baitul Mal untuk kemaslahatan umum.',
    characteristics: [
      'Dikelola oleh pemerintah sesuai pertimbangan syariat dan kemaslahatan publik (Siyasah Syar\'iyyah).',
      'Pemerintah boleh mengalokasikannya untuk subsidi fakir miskin, membangun jembatan, rumah sakit, dan pertahanan.',
      'Dapat diberikan hak guna lahan kepada warga yang sanggup mengelolanya (Iqthā\').',
    ],
    examples: [
      'Pajak tanah (Kharāj) dan rampasan perang tanpa pertempuran (Fai\').',
      'Aset peninggalan orang yang wafat tanpa memiliki ahli waris maupun penerima wasiat.',
      'Gedung-gedung pemerintahan, persenjataan militer, dan bandara negara.',
      'Tanah terlantar yang disita negara karena tidak diolah lebih dari 3 tahun.',
    ],
    dalil: 'Kaidah Fiqih Siyasah: "Tasharruful imāmi \'alar-ra\'iyyati manūthun bil-mashlahah" (Tindakan pemimpin terhadap rakyatnya harus didasarkan pada kemaslahatan umum).',
  },
];

export const SEBAB_TAMALLUK_LIST: SebabTamalluk[] = [
  {
    id: 'ikhraz_mubahat',
    title: '1. Menguasai Benda Mubah (Ihrāz Al-Mubāhāt)',
    titleArabic: 'إحْرَازُ المُبَاحَات',
    description: 'Tindakan seseorang mengambil atau menguasai benda-benda alam yang belum dimiliki oleh siapa pun dan diperbolehkan syariat untuk diambil.',
    syaratSah: [
      'Benda tersebut berstatus mubah (belum ada kepemilikan orang lain sebelumnya).',
      'Ada niat nyata untuk memiliki benda tersebut (bukan sekadar melihat atau lewat).',
      'Terjadi penguasaan fisik secara nyata (Ihyā\' atau Qabdh), seperti memagari, menjala ikan, atau menampung air.',
    ],
    contohPenerapan: [
      'Menangkap ikan di laut bebas atau sungai umum.',
      'Menebang kayu bakar di hutan belantara yang bukan hutan lindung milik negara.',
      'Mengambil burung liar di udara atau hewan buruan di padang lepas.',
      'Membuka tanah mati yang belum bertuan (Ihyā\'ul Mawāt).',
      'Menemukan harta karun jahiliyah kuno di tanah tak bertuan (Ar-Rikāz).',
    ],
    dalil: 'QS. Al-Jatsiyah: 13 ("Dan Dia telah menundukkan untukmu apa yang ada di langit dan apa yang ada di bumi semuanya sebagai rahmat dari-Nya").',
  },
  {
    id: 'uqud_naqilah',
    title: '2. Akad Pemindahan Hak Milik (Al-\'Uqūd An-Nāqilah)',
    titleArabic: 'العُقُودُ النَّاقِلَةُ لِلْمِلْكِيَّة',
    description: 'Perpindahan kepemilikan suatu harta dari satu pihak ke pihak lain melalui akad syar\'i yang sah, baik akad timbal-balik komersial maupun akad sosial cuma-cuma.',
    syaratSah: [
      'Kedua pihak memiliki kecakapan bertindak hukum (Aqil, Baligh, Rasyid / Cakap finansial).',
      'Kerelaan kedua belah pihak tanpa ada paksaan (Antarādhā).',
      'Objek akad suci, bermanfaat secara syar\'i, dapat diserahterimakan, dan diketahui spesifikasinya tanpa gharar (ketidakjelasan).',
    ],
    contohPenerapan: [
      'Akad Jual-Beli (Al-Bai\'): Perpindahan hak milik barang dengan imbalan uang.',
      'Akad Hibah & Hadiah: Pemberian hak milik sukarela tanpa menuntut imbalan apapun.',
      'Akad Wasiat (Al-Wasiyyah): Pemberian hak milik harta setelah pemiliknya wafat (maksimal 1/3 harta).',
      'Akad Sedekah: Penyerahan harta untuk mendekatkan diri kepada Allah SWT.',
    ],
    dalil: 'QS. Al-Baqarah: 275 ("Dan Allah telah menghalalkan jual beli dan mengharamkan riba").',
  },
  {
    id: 'al_khalafiyyah',
    title: '3. Penggantian Kepemilikan (Al-Khalafiyyah)',
    titleArabic: 'الخَلَفِيَّة',
    description: 'Seseorang atau suatu benda menggantikan posisi pemilik atau benda sebelumnya dalam kepemilikan secara otomatis menurut ketentuan hukum syariat.',
    syaratSah: [
      'Khalafiyyah Syakhsh \'an Syakhsh (Orang ganti orang): Terjadi saat pemilik wafat, maka para ahli waris menggantikan posisi mayit menerima seluruh harta tirkah.',
      'Khalafiyyah Syay\' \'an Syay\' (Barang ganti barang): Terjadi ganti rugi (Dhaman) atas barang orang lain yang dirusak atau dirampas (Ghashab), sehingga uang kompensasi menggantikan barang yang musnah.',
    ],
    contohPenerapan: [
      'Pembagian harta pusaka warisan (Al-Irts / Faraidh) kepada anak, istri, orang tua, dsb.',
      'Ganti rugi dari pelaku tabrakan yang merusak mobil orang lain, maka uang ganti rugi menjadi hak milik korban.',
    ],
    dalil: 'QS. An-Nisa: 7 ("Bagi orang laki-laki ada hak bagian dari harta peninggalan ibu-bapak dan kerabatnya...").',
  },
  {
    id: 'at_tawallud',
    title: '4. Hasil Kembang Biak Harta Milik (At-Tawallud minal Mamlūk)',
    titleArabic: 'التَّوَلُّدُ مِنَ المَمْلُوك',
    description: 'Segala sesuatu yang lahir, tumbuh, berkembang, atau dihasilkan secara alami dari harta yang telah dimiliki sah oleh seseorang, maka hasilnya otomatis menjadi hak milik pemilik pokok.',
    syaratSah: [
      'Benda pokok/induknya adalah milik sah pemohon.',
      'Bukan hasil curian, ghashab (rampasan), atau barang pinjaman sewa tanpa izin.',
    ],
    contohPenerapan: [
      'Anak kambing atau anak sapi yang lahir dari induk sapi milik sendiri.',
      'Buah-buahan, getah, dan kayu yang dipanen dari kebun tanaman milik sendiri.',
      'Susu segar dan bulu wol yang diperas/dicukur dari hewan ternak sendiri.',
      'Telur yang dihasilkan oleh ayam petelur milik sendiri.',
    ],
    dalil: 'Kaidah Fiqih: "At-Tābi\'u tābi\'un" (Sesuatu yang mengikuti itu hukumnya mengikuti induk pokoknya) & "Al-Kharāju bidh-dhamān" (Keuntungan adalah kompensasi atas risiko penjaminan - HR. Tirmidzi).',
  },
];

export const IHYA_MAWAT_CASES: IhyaMawatCase[] = [
  {
    id: 'kasus_tanam_lahan_mati',
    scenario: 'Ahmad menemukan sebidang tanah gersang tak bertuan di tepi bukit. Ia membersihkan semak belukar, menggali sumur air, memasang pagar keliling, dan menanaminya dengan 100 pohon kurma hingga subur.',
    status: 'sah_milik',
    statusLabel: 'SAH MENJADI HAK MILIK PENUH (MILKUT TAMM)',
    penjelasanFiqih: 'Tindakan Ahmad memenuhi kriteria Ihyā\'ul Mawāt yang sempurna. Menghidupkan tanah mati dengan cara mengalirkan air, memagari, dan bercocok tanam otomatis mengubah status tanah tak bertuan menjadi milik pribadi yang sah dan dilindungi syariat.',
    kaidahUshul: 'Sabda Nabi SAW: "Barangsiapa menghidupkan tanah yang mati, maka tanah itu menjadi miliknya."',
    dalil: 'HR. Tirmidzi no. 1378 & Abu Dawud no. 3073 (Hadits Shahih).',
  },
  {
    id: 'kasus_tahjir_3_tahun',
    scenario: 'Budi memasang patok batu dan pagar tali di tanah tandus tak bertuan seluas 5 hektar (Tahjīr), lalu meninggalkannya begitu saja selama 4 tahun tanpa pernah mengolah, menyiram, maupun menanaminya.',
    status: 'batal_kembali_ke_negara',
    statusLabel: 'HAK PENGUASAAN BATAL (KEMBALI KE NEGARA / PUBLIK)',
    penjelasanFiqih: 'Hanya memasang patok (Tahjīr) tanpa mengolah diberi batas tenggang maksimal 3 tahun. Khalifah Umar bin Khattab radhiyallahu \'anhu menetapkan bahwa jika setelah 3 tahun tanah dibiarkan terlantar, haknya gugur seketika dan tanah tersebut disita negara untuk diserahkan kepada pihak yang sanggup memakmurkannya.',
    kaidahUshul: 'Ketetapan Khalifah Umar bin Khattab: "Bagi pematok batas tidak ada hak kepemilikan setelah lewat 3 tahun (Laysa li muhtajirin haqqun ba\'da tsalāts sinīn)."',
    dalil: 'Kitab Al-Amwāl karya Abu \'Ubaid no. 696 & As-Sunan Al-Kubrā karya Al-Baihaqi.',
  },
  {
    id: 'kasus_privatisasi_danau',
    scenario: 'Sebuah perusahaan swasta membeli tanah di sekeliling danau alami yang merupakan satu-satunya sumber air minum desa, lalu memagari seluruh danau dan melarang warga desa mengambil air minum.',
    status: 'haram_merampas',
    statusLabel: 'HARAM MUTLAK & BATAL DEMI HUKUM SYARIAT',
    penjelasanFiqih: 'Mata air alami dan danau umum adalah Kepemilikan Publik (Milkiyyah \'Ammah) yang mutlak diharamkan diprivatisasi atau dimonopoli perorangan/swasta. Syariat menetapkan seluruh umat manusia berserikat dalam air, padang rumput, dan api/energi.',
    kaidahUshul: 'Kaidah Fiqih: "Mā kāna min marāfiqil jamā\'ah fa huwal-milkul \'āmmu lā yajūzu tamallukuhu fardiyyan."',
    dalil: 'HR. Abu Dawud no. 3477: "Kaum muslimin berserikat dalam tiga perkara: air, padang rumput, dan api".',
  },
  {
    id: 'kasus_sewa_rumah',
    scenario: 'Hasan menyewa ruko selama 2 tahun dengan biaya Rp 50 juta. Pada tahun kedua, Hasan merombak ruko menjadi gudang dan berniat menjual bangunan ruko tersebut kepada orang lain tanpa izin pemilik.',
    status: 'hanya_manfaat',
    statusLabel: 'BATAL AKAD PENJUALAN & PIDANA GHASHAB (MERAMPAS)',
    penjelasanFiqih: 'Penyewa hanya memiliki Kepemilikan Manfaat (Milkul Manfa\'ah), bukan kepemilikan fisik benda (Milkur-Raqabah). Menjual fisik benda sewaan tanpa izin pemilik adalah transaksi bathil dan tergolong perbuatan zalim merampas harta orang lain (Ghashab).',
    kaidahUshul: 'Kaidah Fiqih: "Fāqidul syay\'i lā yu\'thīhi" (Orang yang tidak memiliki suatu hak tidak dapat memberikan hak tersebut kepada orang lain).',
    dalil: 'QS. An-Nisa: 29 & HR. Ahmad: "Tidak halal harta seorang muslim kecuali dengan kerelaan hatinya".',
  },
];

export { MILKIYYAH_QUIZ } from './quizzes/milkiyyahQuizData';
