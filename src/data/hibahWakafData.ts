import { RukunItem, HibahWakafQuizQuestion } from '../types/hibahWakaf';

export const RUKUN_HIBAH: RukunItem[] = [
  {
    name: '1. Pemberi Hibah (Al-Wāhib)',
    nameArabic: 'الوَاهِب',
    description: 'Pihak yang menyerahkan kepemilikan hartanya kepada orang lain secara cuma-cuma.',
    syarat: [
      'Pemilik sah penuh atas harta yang dihibahkan (bukan barang milik orang lain atau titipan).',
      'Baligh dan berakal sehat (tidak sah hibah anak kecil atau orang hilang ingatan).',
      'Rasyīd (cerdas mengelola harta, tidak dalam kondisi pailit atau di bawah pengampuan/hajr).',
      'Atas kehendak sukarela tanpa paksaan sepihak.',
    ],
  },
  {
    name: '2. Penerima Hibah (Al-Mawhūb Lahu)',
    nameArabic: 'المَوْهُوبُ لَه',
    description: 'Pihak yang menerima pemindahan hak milik harta yang dihibahkan.',
    syarat: [
      'Nyata wujudnya saat akad berlangsung (tidak sah hibah kepada janin yang belum tentu lahir selamat menurut Syafi\'iyah).',
      'Layak memiliki harta secara sah.',
      'Jika penerima adalah anak kecil atau orang gila, maka qabdh (serah terima) diwakili oleh walinya.',
    ],
  },
  {
    name: '3. Harta yang Dihibahkan (Al-Mawhūb)',
    nameArabic: 'المَوْهُوب',
    description: 'Objek benda atau aset bernilai yang dipindahtangankan.',
    syarat: [
      'Suci zatnya (tidak sah menghibahkan babi, anjing, khamr, atau bangkai).',
      'Bermanfaat menurut tolok ukur syariat Islam.',
      'Dapat diserahterimakan secara nyata (tidak sah menghibahkan burung liar di udara atau ikan di lautan).',
      'Ada wujud fisiknya saat akad (tidak sah menghibahkan buah yang belum berbuah sama sekali).',
    ],
  },
  {
    name: '4. Ijab & Qabul (Ash-Shīghah)',
    nameArabic: 'الصِّيغَة (الإِيجَابُ وَالقَبُول)',
    description: 'Pernyataan penyerahan dari pemberi hibah dan penerimaan dari pihak penerima.',
    syarat: [
      'Lafaz ijab dan qabul bersambung jelas menunjukkan pengalihan kepemilikan tanpa imbalan.',
      'Tidak digantungkan pada syarat yang belum tentu terjadi (*Ta\'līq*).',
      'Tidak dibatasi jangka waktu tertentu (*At-Tauqīt*).',
    ],
  },
  {
    name: '5. Serah Terima Fisik (Al-Qabdh)',
    nameArabic: 'القَبْض',
    description: 'Penguasaan fisik secara nyata atas barang hibah oleh penerima dengan izin pemberi.',
    syarat: [
      'Dalam Mazhab Syafi\'i, akad hibah belum mengikat secara sempurna (lāzim) sebelum terjadinya serah terima fisik (*Qabdh*).',
      'Jika pemberi hibah meninggal sebelum serah terima terjadi, maka hak waris ahli waris berlaku atas barang tersebut.',
    ],
  },
];

export const RUKUN_WAKAF: RukunItem[] = [
  {
    name: '1. Pewakaf (Al-Wāqif)',
    nameArabic: 'الوَاقِف',
    description: 'Orang yang menahan pokok hartanya untuk disalurkan manfaatnya fi sabilillah.',
    syarat: [
      'Pemilik mutlak atas harta yang diwakafkan.',
      'Baligh, berakal sehat, dan merdeka.',
      'Rasyīd (tidak berada di bawah pengampuan pemborosan atau pailit utang).',
      'Ikhlas sukarela semata-mata mencari ridha Allah SWT.',
    ],
  },
  {
    name: '2. Harta yang Diwakafkan (Al-Mawqūf)',
    nameArabic: 'المَوْقُوف',
    description: 'Aset bernilai ekonomis yang tahan lama dan diambil manfaatnya terus-menerus.',
    syarat: [
      'Benda yang kekal zatnya (*tahsīsul ashli*) dan tidak habis sekali pakai (seperti tanah, bangunan, sumur, buku, uang dana abadi).',
      'Milik penuh pewakaf tanpa sengketa hukum.',
      'Bernilai syar\'i (bukan barang haram/najis).',
      'Dapat diambil manfaatnya secara berkelanjutan untuk kebajikan yang halal.',
    ],
  },
  {
    name: '3. Penerima Manfaat Wakaf (Al-Mawqūf \'Alaih)',
    nameArabic: 'المَوْقُوفُ عَلَيْه',
    description: 'Pihak yang berhak menikmati hasil dan manfaat dari harta wakaf tersebut.',
    syarat: [
      'Harus untuk tujuan kebajikan (*qurbah*) dan tidak bertentangan dengan syariat Islam.',
      'Wakaf Khairi: Ditujukan untuk kepentingan umum (masjid, madrasah, rumah sakit, jembatan, kaum fakir miskin).',
      'Wakaf Dzurri / Ahli: Ditujukan khusus untuk anak keturunan atau keluarga pewakaf guna mencegah kemiskinan keluarga.',
    ],
  },
  {
    name: '4. Ikrar Pernyataan Wakaf (Ash-Shīghah)',
    nameArabic: 'الصِّيغَة (صِيغَةُ الوَقْف)',
    description: 'Lafaz pernyataan kehendak wakaf dari pewakaf, baik lisan maupun tertulis.',
    syarat: [
      'Lafaz bersifat abadi selamanya (*At-Ta\'bīd*), tidak boleh dibatasi waktu (misal tidak sah: "Saya wakafkan tanah ini selama 5 tahun").',
      'Bersifat pasti seketika (*Tanjīz*), tidak boleh digantungkan pada syarat di masa depan (kecuali digantungkan pada kematian yang masuk hukum wasiat wakaf).',
      'Tegas dan mengikat: begitu ikrar terucap, kepemilikan manusia lepas beralih menjadi milik Allah SWT.',
    ],
  },
  {
    name: '5. Pengelola Wakaf (An-Nāzhir)',
    nameArabic: 'النَّاظِر',
    description: 'Pihak amanah yang bertugas memelihara, mengembangkan, dan mendistribusikan manfaat wakaf.',
    syarat: [
      'Muslim, baligh, dan berakal sehat.',
      'Amanah, jujur, dan berintegritas moral tinggi (*\'Adālah*).',
      'Memiliki kemampuan dan kompetensi manajerial dalam mengelola aset wakaf secara produktif (*Kifāyah*).',
    ],
  },
];

export { HIBAH_WAKAF_QUIZ } from './quizzes/hibahWakafQuizData';
