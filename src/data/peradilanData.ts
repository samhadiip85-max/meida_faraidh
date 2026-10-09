import { RukunQadhaItem, AlatBuktiItem, PeradilanQuizQuestion } from '../types/peradilan';

export const RUKUN_QADHA: RukunQadhaItem[] = [
  {
    id: 'qadhi',
    name: '1. Al-Qādhī (Hakim)',
    nameArabic: 'القَاضِي',
    role: 'Pihak Pemutus Hukum',
    explanation: 'Orang yang diangkat secara resmi oleh Kepala Negara/Penguasa untuk menyelesaikan sengketa dan menegakkan keadilan di antara manusia berdasarkan hukum syariat Allah SWT.',
  },
  {
    id: 'muqdhi_bihi',
    name: '2. Al-Muqdhī bihī (Ketetapan Hukum Syariat)',
    nameArabic: 'المَقْضِيُّ بِهِ',
    role: 'Sumber Norma Hukum',
    explanation: 'Hukum-hukum Allah dan Rasul-Nya (Al-Qur\'an, Sunnah, Ijma\', Qiyas, dan fatwa terpercaya) yang menjadi tolok ukur dan dasar pengambilan vonis oleh hakim.',
  },
  {
    id: 'muqdhi_lahu',
    name: '3. Al-Muqdhī lahū (Penggugat / Pihak Dimenangkan)',
    nameArabic: 'المَقْضِيُّ لَهُ',
    role: 'Pemilik Hak yang Menuntut',
    explanation: 'Pihak yang menuntut haknya (*Al-Mudda\'ī*) dan berhasil membuktikan gugatannya sehingga diputuskan menang oleh pengadilan.',
  },
  {
    id: 'muqdhi_alaih',
    name: '4. Al-Muqdhī \'alaih (Tergugat / Terpidana)',
    nameArabic: 'المَقْضِيُّ عَلَيْهِ',
    role: 'Pihak yang Dituntut',
    explanation: 'Pihak yang dikenai gugatan (*Al-Mudda\'ā \'alaih*) yang terbukti melanggar kewajiban atau melakukan kejahatan dan dijatuhi vonis hukuman/kewajiban membayar.',
  },
  {
    id: 'muqdha_fih',
    name: '5. Al-Muqdhā fīh (Objek Perkara Sengketa)',
    nameArabic: 'المَقْضِيُّ فِيهِ',
    role: 'Materi / Kasus Perkara',
    explanation: 'Harta benda, hak perdata, ikatan pernikahan, atau tindak pidana yang menjadi objek sengketa di meja hijau persidangan.',
  },
];

export const ALAT_BUKTI_LIST: AlatBuktiItem[] = [
  {
    id: 'iqrar',
    name: '1. Al-Iqrār (Pengakuan Terdakwa)',
    nameArabic: 'الإِقْرَار',
    tingkatan: 1,
    definition: 'Pernyataan sukarela dari seseorang di hadapan hakim yang membenarkan adanya hak orang lain atas dirinya atau mengakui perbuatan pidana yang dituduhkan.',
    syaratSah: 'Pelaku baligh, berakal sehat, merdeka, dan mengucapkan atas kehendak sendiri tanpa paksaan/siksaan fisik.',
    penerapanPerkara: 'Merupakan "Sayyidul Adillah" (Raja Alat Bukti) yang berlaku pada seluruh perkara perdata, utang piutang, jinayat, dan hudud.',
    dalil: 'Kaidah Fiqih: "Al-Iqrāru hujjatun qāshi-rah \'alal muqirri" (Pengakuan adalah bukti kuat yang mengikat diri orang yang mengaku).',
  },
  {
    id: 'syahadah',
    name: '2. Asy-Syahādah (Kesaksian Saksi Adil)',
    nameArabic: 'الشَّهَادَة',
    tingkatan: 2,
    definition: 'Pemberitahuan yang benar oleh saksi yang jujur dan adil di hadapan sidang majelis hakim untuk menetapkan hak bagi orang lain.',
    syaratSah: 'Islam, Baligh, Berakal sehat, Adil (tidak fasik, tidak suka berdosa besar), tidak ada permusuhan pribadi dengan terdakwa, dan melihat/mendengar langsung kejadian.',
    penerapanPerkara: 'Kuota saksi: 1) Zina: 4 pria adil; 2) Pidana/Jinayat: 2 pria adil; 3) Perdata/Harta: 2 pria adil ATAU 1 pria + 2 wanita adil; 4) Aib khusus kewanitaan: 4 wanita.',
    dalil: 'QS. Al-Baqarah: 282 & QS. At-Talaq: 2 ("Wa asyhidū dzawai \'adlim minkum").',
  },
  {
    id: 'yamin',
    name: '3. Al-Yamīn (Sumpah Syar\'i Demi Allah)',
    nameArabic: 'اليَمِين',
    tingkatan: 3,
    definition: 'Pernyataan kesaksian yang dikukuhkan dengan menyebut nama Allah SWT atau sifat-Nya untuk menepis tuduhan atau menguatkan hak.',
    syaratSah: 'Hanya boleh bersumpah atas nama Allah (Wallāhi / Billāhi / Tallāhi). Diucapkan oleh pihak yang disyariatkan dalam hukum acara.',
    penerapanPerkara: 'Berlaku bagi TERGUGAT yang mengingkari tuduhan tanpa bukti penggugat. Jika tergugat menolak sumpah (*Nukūl*), sumpah dialihkan kepada penggugat (*Yamīn Mardūdah*).',
    dalil: 'Hadits Shahih: "Al-Bayyinatu \'alal mudda\'ī wal-yamīnu \'alā man ankar" (Bukti wajib bagi penggugat, sumpah bagi yang mengingkari) (HR. Al-Baihaqi & Bukhari/Muslim).',
  },
  {
    id: 'qarinah',
    name: '4. Al-Qarīnah (Bukti Petunjuk / Forensik)',
    nameArabic: 'القَرِينَة القَطْعِيَّة',
    tingkatan: 4,
    definition: 'Tanda-tanda, indikasi riil, atau bukti saintifik/forensik yang jelas dan pasti yang menghubungkan antara peristiwa dengan pelaku kejahatan.',
    syaratSah: 'Harus berupa Qarīnah Qath\'iyyah (indikasi kuat dan meyakinkan tanpa menyisakan keraguan yang masuk akal).',
    penerapanPerkara: 'Hasil visum dokter, sidik jari, jejak digital otentik, kehamilan wanita tanpa suami, atau muntah khamr bagi peminum.',
    dalil: 'Kisah Nabi Yusuf AS (pakaian yang robek dari belakang membuktikan kejujuran Yusuf) QS. Yusuf: 26-28.',
  },
];

export const TIGA_GOLONGAN_HAKIM = [
  {
    kategori: '1. Hakim Penghuni Surga (Fīl Jannah)',
    status: 'SURGA',
    color: 'emerald',
    deskripsi: 'Hakim yang mengetahui kebenaran hukum Allah dan memutuskan perkara manusia berdasarkan kebenaran tersebut dengan adil tanpa suap.',
  },
  {
    kategori: '2. Hakim Penghuni Neraka (Fīn Nār) - Mengetahui Kebenaran tapi Zalim',
    status: 'NERAKA',
    color: 'rose',
    deskripsi: 'Hakim yang mengetahui kebenaran syariat, namun sengaja menyelewengkannya demi hawa nafsu, suap harta, atau tekanan politik kekuasaan.',
  },
  {
    kategori: '3. Hakim Penghuni Neraka (Fīn Nār) - Memutus Tanpa Ilmu',
    status: 'NERAKA',
    color: 'rose',
    deskripsi: 'Hakim yang bodoh dalam ilmu fiqih dan hukum syariat, lalu memberanikan diri memutus perkara manusia di atas kebodohannya.',
  },
];

export { PERADILAN_QUIZ } from './quizzes/peradilanQuizData';
