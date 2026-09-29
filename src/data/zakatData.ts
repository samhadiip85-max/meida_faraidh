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

export const ZAKAT_QUIZ: ZakatQuizQuestion[] = [
  {
    id: 'zq_1',
    question: 'Berapakah nisab zakat Emas murni dan kadar persentase zakat yang wajib dikeluarkan setelah genap haul 1 tahun?',
    options: [
      { id: 'a', text: 'Nisab 50 gram emas, zakat 5%' },
      { id: 'b', text: 'Nisab 85 gram emas murni (20 Dinar), zakat 2.5%' },
      { id: 'c', text: 'Nisab 100 gram emas, zakat 10%' },
      { id: 'd', text: 'Nisab 200 gram emas, zakat 2.5%' },
    ],
    correctOptionId: 'b',
    explanation: 'Nisab zakat emas adalah 20 Dinar emas yang setara dengan 85 gram emas murni (24 karat). Jika telah mencapai nisab dan tersimpan selama genap satu tahun hijriyah (haul), kadar zakat yang wajib dikeluarkan adalah 2.5% (seperempat puluh).',
    dalil: 'HR. Abu Dawud no. 1573 dan hadits Ali bin Abi Thalib ra.',
  },
  {
    id: 'zq_2',
    question: 'Berapakah nisab hasil pertanian makanan pokok (padi/gabah) dan berapakah kadar zakatnya jika menggunakan sistem irigasi alami (air hujan/sungai tanpa biaya)?',
    options: [
      { id: 'a', text: 'Nisab 5 Wasaq (± 653 kg gabah), kadar zakat 10%' },
      { id: 'b', text: 'Nisab 500 kg, kadar zakat 5%' },
      { id: 'c', text: 'Nisab 1.000 kg, kadar zakat 2.5%' },
      { id: 'd', text: 'Nisab 5 Wasaq, kadar zakat 2.5%' },
    ],
    correctOptionId: 'a',
    explanation: 'Nisab pertanian adalah 5 Wasaq (setara ± 653 kg gabah kering panen atau ± 520 kg beras). Jika diairi dengan air hujan/sungai tanpa biaya pompa, kadarnya adalah 10%. Jika diairi dengan pompa irigasi berbayar, kadarnya adalah 5%.',
    dalil: 'Sabda Nabi SAW: "Fīmā saqatis samā\'u wal-\'uyūnu al-\'usyru..." (HR. Bukhari no. 1483).',
  },
  {
    id: 'zq_3',
    question: 'Berapakah takaran Zakat Fitrah per jiwa untuk makanan pokok (beras di Indonesia) menurut Mazhab Syafi\'i dan standar BAZNAS?',
    options: [
      { id: 'a', text: '1 kilogram beras' },
      { id: 'b', text: '1 Sha\' (sekitar 2.5 kg atau 3.5 liter beras)' },
      { id: 'c', text: '5 kilogram beras' },
      { id: 'd', text: '10 liter beras' },
    ],
    correctOptionId: 'b',
    explanation: 'Kadar zakat fitrah adalah 1 Sha\' makanan pokok setempat. Dalam ukuran timbangan modern Indonesia, 1 Sha\' setara dengan 2.5 kg atau 3.5 liter beras (sebagian ulama dan BAZNAS menganjurkan 2.7 - 3.0 kg untuk kehati-hatian/ihtiyath).',
    dalil: 'Hadits Ibnu Umar ra. (HR. Bukhari no. 1503 & Muslim no. 984).',
  },
  {
    id: 'zq_4',
    question: 'Bolehkah seorang suami menyalurkan zakat mal miliknya kepada istri kandungnya sendiri?',
    options: [
      { id: 'a', text: 'Boleh dan sangat dianjurkan' },
      { id: 'b', text: 'Haram dan tidak sah zakatnya, karena istri wajib dinafkahi secara pribadi oleh suami' },
      { id: 'c', text: 'Boleh jika istri sedang berhutang' },
      { id: 'd', text: 'Boleh jika jumlah zakatnya banyak' },
    ],
    correctOptionId: 'b',
    explanation: 'Haram menyalurkan zakat kepada orang yang nafkahnya menjadi kewajiban pribadi muzakki (seperti istri, anak, dan orang tua). Jika zakat diberikan kepada mereka, seolah-olah muzakki mengambil manfaat untuk meringankan kewajiban nafkah pribadinya sendiri.',
    dalil: 'Kitab Al-Majmu\' Syarah Al-Muhadzdzab karya Imam An-Nawawi.',
  },
  {
    id: 'zq_5',
    question: 'Di antara 8 golongan penerima zakat (Asnaf Tsamaniyah) dalam QS. At-Taubah ayat 60, siapakah yang dimaksud dengan Al-Gharimin?',
    options: [
      { id: 'a', text: 'Orang yang bepergian menuntut ilmu' },
      { id: 'b', text: 'Orang yang terlilit hutang untuk kebutuhan mubah/kebaikan dan tidak sanggup melunasinya' },
      { id: 'c', text: 'Orang yang mengumpulkan zakat' },
      { id: 'd', text: 'Orang yang baru masuk Islam' },
    ],
    correctOptionId: 'b',
    explanation: 'Al-Gharimin adalah orang-orang yang memiliki tanggungan hutang yang digunakan untuk kemaslahatan yang mubah (seperti memenuhi nafkah dasar, biaya pengobatan darurat, atau mendamaikan persengketaan kaum muslimin) dan ia tidak memiliki harta untuk melunasinya.',
    dalil: 'QS. At-Taubah ayat 60 dan riwayat hadits Qabishah bin Mukhariq Al-Hilali ra.',
  },
];
