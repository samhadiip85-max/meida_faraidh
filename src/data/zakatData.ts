import { AshnafItem, ZakatQuizQuestion } from '../types/zakat';

export const ASHNAF_LIST: AshnafItem[] = [
  {
    id: 'fakir',
    name: '1. Fakir (Al-Fuqara\')',
    nameArabic: 'الفقراء',
    description: 'Orang yang tidak memiliki harta dan tidak memiliki pekerjaan halal, atau memiliki penghasilan tetapi kurang dari 50% dari kebutuhan pokok hidupnya.',
    eligibilityCriteria: 'Kebutuhan hidup misal Rp 3.000.000/bln, namun pendapatannya hanya Rp 1.000.000 atau tidak ada sama sekali.',
    dalil: 'QS. At-Taubah: 60 ("Innamas shadaqātu lil-fuqarā\'i...").',
  },
  {
    id: 'miskin',
    name: '2. Miskin (Al-Masakin)',
    nameArabic: 'المساكين',
    description: 'Orang yang memiliki pekerjaan dan penghasilan, namun penghasilannya hanya mampu mencukupi sebagian kebutuhannya (antara 50% hingga kurang dari 100%).',
    eligibilityCriteria: 'Kebutuhan hidup Rp 3.000.000/bln, penghasilannya hanya sekitar Rp 2.000.000 (masih defisit untuk kebutuhan mendasar).',
    dalil: 'QS. At-Taubah: 60.',
  },
  {
    id: 'amil',
    name: '3. Amil Zakat (\'Amilina \'Alaiha)',
    nameArabic: 'العاملين عليها',
    description: 'Petugas atau panitia resmi yang diangkat oleh pemerintah atau lembaga yang berwenang (seperti BAZNAS / LAZ) untuk mengumpulkan, mencatat, dan mendistribusikan zakat.',
    eligibilityCriteria: 'Diberi bagian zakat sebagai upah atas kerja pengurusan zakat sesuai ketentuan syariat.',
    dalil: 'QS. At-Taubah: 60.',
  },
  {
    id: 'muallaf',
    name: '4. Mualaf (Al-Mu\'allafati Qulubuhum)',
    nameArabic: 'المؤلفة قلوبهم',
    description: 'Orang yang baru masuk Islam agar imannya semakin kokoh, atau tokoh masyarakat yang diharapkan keislamannya membawa kebaikan bagi dakwah Islam.',
    eligibilityCriteria: 'Muslim baru yang butuh penguatan ekonomi, sosial, dan akidah.',
    dalil: 'QS. At-Taubah: 60.',
  },
  {
    id: 'riqab',
    name: '5. Budak / Memerdekakan Tawanan (Fir-Riqab)',
    nameArabic: 'في الرقاب',
    description: 'Dahulu mencakup budak mukatab yang mencicil kemerdekaannya. Di era kontemporer mencakup pembebasan muslim yang tertawan atau korban perdagangan manusia (human trafficking).',
    eligibilityCriteria: 'Bantuan pembebasan jerat perbudakan dan penindasan fisik.',
    dalil: 'QS. At-Taubah: 60.',
  },
  {
    id: 'gharimin',
    name: '6. Orang Berhutang (Al-Gharimin)',
    nameArabic: 'الغارمين',
    description: 'Orang yang terlilit hutang untuk kemaslahatan mubah (kebutuhan hidup dasar keluarga, berobat, atau mendamaikan perselisihan kaum muslimin) dan tidak mampu melunasinya.',
    eligibilityCriteria: 'Bukan hutang karena judi, maksiat, atau foya-foya kemewahan.',
    dalil: 'QS. At-Taubah: 60.',
  },
  {
    id: 'fisabilillah',
    name: '7. Pejuang di Jalan Allah (Fi Sabilillah)',
    nameArabic: 'في سبيل الله',
    description: 'Relawan pejuang pembela agama Allah yang tidak mendapat gaji tetap dari kas negara, serta aktivitas penegakan dakwah dan syiar Islam.',
    eligibilityCriteria: 'Dakwah, pembinaan umat, dan penegakan kalimat Allah.',
    dalil: 'QS. At-Taubah: 60.',
  },
  {
    id: 'ibnusabil',
    name: '8. Musafir Terlantar (Ibnu Sabil)',
    nameArabic: 'ابن السبيل',
    description: 'Musafir yang bepergian untuk tujuan ketaatan atau hal mubah yang kehabisan bekal di tengah perjalanan sehingga tidak bisa pulang ke kampung halamannya.',
    eligibilityCriteria: 'Diberi bantuan secukupnya untuk biaya transportasi kembali ke tempat asalnya.',
    dalil: 'QS. At-Taubah: 60.',
  },
];

export const FORBIDDEN_RECIPIENTS = [
  {
    title: '1. Orang Kaya & Mampu Bekerja',
    desc: 'Orang yang berkecukupan harta atau memiliki fisik sehat dan mampu mencari nafkah halal. Sabda Nabi: "Lā tahillush shadaqatu li-ghaniyyin walā li-dzī mirratin sawiyy" (HR. Abu Dawud).',
  },
  {
    title: '2. Keluarga Keturunan Nabi SAW (Bani Hasyim & Bani Muthallib)',
    desc: 'Zakat diibaratkan kotoran pembersih harta manusia, sehingga keluarga Rasulullah SAW dimuliakan dari menerimanya. Mereka berhak atas bagian fa\'i dan ghanimah.',
  },
  {
    title: '3. Orang Kafir / Non-Muslim',
    desc: 'Zakat fardhu hanya dibagikan kepada fakir miskin muslim ("Tu\'khadzu min aghniyā\'ihim wa turaddu \'alā fuqarā\'ihim"). Adapun bantuan sosial biasa (sedekah sunnah) boleh diberikan.',
  },
  {
    title: '4. Orang yang Wajib Dinafkahi oleh Muzakki',
    desc: 'Haram menyalurkan zakat kepada istri, anak kandung, cucu, orang tua, atau kakek-nenek, karena nafkah mereka sudah menjadi kewajiban pribadi muzakki.',
  },
];

export const ZAKAT_FITRAH_TIMES = [
  {
    name: 'Waktu Mubah (Boleh)',
    desc: 'Sejak awal malam tanggal 1 Ramadhan hingga hari terakhir bulan Ramadhan.',
    status: 'Boleh dilakukan untuk memudahkan pembagian.',
  },
  {
    name: 'Waktu Wajib',
    desc: 'Saat terbenamnya matahari pada malam Idul Fitri (menemui sebagian Ramadhan dan sebagian Syawal).',
    status: 'Saat timbulnya kewajiban mutlak.',
  },
  {
    name: 'Waktu Afdhal (Paling Utama)',
    desc: 'Pagi hari raya Idul Fitri setelah shalat Shubuh sebelum shalat Idul Fitri dimulai.',
    status: 'Paling utama sesuai sunnah Rasulullah SAW.',
  },
  {
    name: 'Waktu Makruh',
    desc: 'Setelah selesainya shalat Idul Fitri sampai sebelum matahari terbenam pada tanggal 1 Syawal.',
    status: 'Makruh tanpa udzur syar\'i.',
  },
  {
    name: 'Waktu Haram & Menjadi Qadha\'',
    desc: 'Setelah terbenam matahari 1 Syawal. Zakatnya tetap wajib dikeluarkan sebagai qadha\', dan pelakunya berdosa jika menunda tanpa udzur.',
    status: 'Haram dan berdosa.',
  },
];

export { ZAKAT_QUIZ } from './quizzes/zakatQuizData';
