import {
  IddahCondition,
  IddahResult,
  MahramRelation,
  MarriageRulingDetail,
  WaliHierarchyItem,
} from '../types/munakahat';

export const MARRIAGE_RULINGS: MarriageRulingDetail[] = [
  {
    ruling: 'Wajib',
    arabicTerm: 'واجب (Wajib)',
    condition: 'Mampu secara finansial, fisik & biologis, serta khawatir terjerumus zina bila tidak menikah.',
    explanation:
      'Bagi orang yang telah memiliki kemampuan materiil dan fisik untuk berumah tangga, dan nafsunya telah mendesak sehingga jika tidak segera menikah ia sangat dikhawatirkan terjerumus ke dalam perbuatan zina.',
    dalil: 'Kaidah Fiqih: "Maa laa yatimmul waajibu illa bihi fahuwa waajib" & Hadits seruan pemuda (HR. Bukhari).',
  },
  {
    ruling: 'Sunnah',
    arabicTerm: 'سنة (Sunnah / Mustahab)',
    condition: 'Mampu secara lahir-batin dan berkeinginan menikah, namun masih mampu menahan diri dari zina.',
    explanation:
      'Kondisi ideal seorang muslim yang memiliki hasrat dan kesiapan membiayai nafkah keluarga, serta memiliki kendali moral yang baik sehingga tidak dalam kekhawatiran akut akan zina.',
    dalil: 'Sabda Nabi SAW: "Nikah adalah sunnahku, barangsiapa membenci sunnahku maka ia bukan golonganku" (HR. Bukhari & Muslim).',
  },
  {
    ruling: 'Mubah',
    arabicTerm: 'مباح (Mubah / Jaiz)',
    condition: 'Punya dorongan dan kemampuan wajar, serta tidak ada faktor mendesak yang mewajibkan atau mengharamkannya.',
    explanation:
      'Hukum asal pernikahan bagi orang yang berada di antara dorongan dan kemampuan standar. Pernikahan menjadi sarana fitrah manusiawi untuk menyalurkan syahwat dan melestarikan keturunan.',
    dalil: 'QS. An-Nur: 32 ("Dan kawinkanlah orang-orang yang sendirian di antara kamu...").',
  },
  {
    ruling: 'Makruh',
    arabicTerm: 'مكروه (Makruh)',
    condition: 'Belum siap nafkah materiil atau mental, atau tidak memiliki hasrat seksual, namun belum sampai tahap membahayakan istri.',
    explanation:
      'Bagi orang yang tidak memiliki dorongan kuat untuk menikah atau kondisi ekonominya masih sangat lemah sehingga dikhawatirkan hak-hak istri tidak tertunaikan secara sempurna.',
    dalil: 'Nasihat Rasulullah SAW bagi yang belum mampu berpuasalah, karena puasa adalah perisai (wija\').',
  },
  {
    ruling: 'Haram',
    arabicTerm: 'حرام (Haram)',
    condition: 'Tahu pasti atau yakin dirinya akan menzalimi, menganiaya, atau tidak mampu menunaikan hak pasangan.',
    explanation:
      'Apabila seseorang berniat menikah untuk menyakiti, membalas dendam, atau ia yakin dirinya memiliki penyakit menular berbahaya tanpa izin, atau tidak bernafkah sama sekali sehingga menelantarkan pasangannya.',
    dalil: 'Kaidah Fiqih: "Laa dharara wa laa dhiraar" (Tidak boleh menimbulkan kemudaratan dan membalas kemudaratan - HR. Ibnu Majah).',
  },
];

export const MAHRAM_RELATIONS: MahramRelation[] = [
  // Mahram Nasab (Haram Selamanya)
  {
    id: 'ibu',
    nameIndo: 'Ibu, Nenek, dan Leluhur Wanita ke Atas',
    nameArabic: 'الأمهات والجدات',
    category: 'nasab',
    isPermanent: true,
    dalil: 'QS. An-Nisa: 23 ("حُرِّمَتْ عَلَيْكُمْ أُمَّهَاتُكُمْ")',
  },
  {
    id: 'anak_perempuan',
    nameIndo: 'Anak Perempuan, Cucu Perempuan, dan Keturunan ke Bawah',
    nameArabic: 'البنات وبنات الأبناء',
    category: 'nasab',
    isPermanent: true,
    dalil: 'QS. An-Nisa: 23 ("وَبَنَاتُكُمْ")',
  },
  {
    id: 'saudari',
    nameIndo: 'Saudari Kandung, Seayah, atau Seibu',
    nameArabic: 'الأخوات (شقيقة، لأب، لأم)',
    category: 'nasab',
    isPermanent: true,
    dalil: 'QS. An-Nisa: 23 ("وَأَخَوَاتُكُمْ")',
  },
  {
    id: 'bibi_ayah',
    nameIndo: 'Bibi dari Jalur Ayah (Saudari Ayah / \'Ammāt)',
    nameArabic: 'العمات',
    category: 'nasab',
    isPermanent: true,
    dalil: 'QS. An-Nisa: 23 ("وَعَمَّاتُكُمْ")',
  },
  {
    id: 'bibi_ibu',
    nameIndo: 'Bibi dari Jalur Ibu (Saudari Ibu / Khālāt)',
    nameArabic: 'الخالات',
    category: 'nasab',
    isPermanent: true,
    dalil: 'QS. An-Nisa: 23 ("وَخَالَاتُكُمْ")',
  },
  {
    id: 'keponakan_saudara',
    nameIndo: 'Keponakan Perempuan (Anak perempuan Saudara Laki-laki)',
    nameArabic: 'بنات الأخ',
    category: 'nasab',
    isPermanent: true,
    dalil: 'QS. An-Nisa: 23 ("وَبَنَاتُ الْأَخِ")',
  },
  {
    id: 'keponakan_saudari',
    nameIndo: 'Keponakan Perempuan (Anak perempuan Saudari Perempuan)',
    nameArabic: 'بنات الأخت',
    category: 'nasab',
    isPermanent: true,
    dalil: 'QS. An-Nisa: 23 ("وَبَنَاتُ الْأُخْتِ")',
  },

  // Mahram Mushaharah (Pernikahan)
  {
    id: 'ibu_mertua',
    nameIndo: 'Ibu Mertua (Ibunya Istri ke atas)',
    nameArabic: 'أمهات نسائكم',
    category: 'mushaharah',
    isPermanent: true,
    conditions: 'Menjadi mahram seketika setelah akad nikah sah dengan putrinya (meski belum dukhul/berhubungan).',
    dalil: 'QS. An-Nisa: 23 ("وَأُمَّهَاتُ نِسَائِكُمْ")',
  },
  {
    id: 'anak_tiri',
    nameIndo: 'Anak Tiri Perempuan (Rabibah)',
    nameArabic: 'الربائب',
    category: 'mushaharah',
    isPermanent: true,
    conditions: 'Hanya menjadi mahram bila suami SUDAH dukhul (bercampur) dengan ibu anak tiri tersebut.',
    dalil: 'QS. An-Nisa: 23 ("وَرَبَائِبُكُمُ اللَّاتِي فِي حُجُورِكُم مِّن نِّسَائِكُمُ اللَّاتِي دَخَلْتُم بِهِنَّ")',
  },
  {
    id: 'menantu',
    nameIndo: 'Menantu Perempuan (Istri dari Anak Laki-laki Kandung)',
    nameArabic: 'حلائل أبنائكم',
    category: 'mushaharah',
    isPermanent: true,
    conditions: 'Haram selamanya bagi ayah mertua sejak akad nikah anaknya terjadi.',
    dalil: 'QS. An-Nisa: 23 ("وَحَلَائِلُ أَبْنَائِكُمُ الَّذِينَ مِنْ أَصْلَابِكُمْ")',
  },
  {
    id: 'ibu_tiri',
    nameIndo: 'Ibu Tiri (Mantan Istri Ayah/Kakek)',
    nameArabic: 'زوجات الآباء',
    category: 'mushaharah',
    isPermanent: true,
    conditions: 'Haram dinikahi oleh anak atau cucunya selamanya.',
    dalil: 'QS. An-Nisa: 22 ("وَلَا تَنكِحُوا مَا نَكَحَ آبَاؤُكُم مِّنَ النِّسَاءِ")',
  },

  // Mahram Radla'ah (Persusuan)
  {
    id: 'ibu_susu',
    nameIndo: 'Ibu yang Menyusui (Ibu Susu)',
    nameArabic: 'الأمهات من الرضاعة',
    category: 'radlaah',
    isPermanent: true,
    conditions: 'Menyusu minimal 5 kali susuan yang mengenyangkan sebelum usia bayi 2 tahun menurut Mazhab Syafi\'i.',
    dalil: 'QS. An-Nisa: 23 ("وَأُمَّهَاتُكُمُ اللَّاتِي أَرْضَعْنَكُمْ")',
  },
  {
    id: 'saudara_susu',
    nameIndo: 'Saudari Sepersusuan',
    nameArabic: 'الأخوات من الرضاعة',
    category: 'radlaah',
    isPermanent: true,
    conditions: 'Kaidah Umum: Segala yang haram karena nasab, haram pula karena persusuan.',
    dalil: 'Sabda Nabi SAW: "يحرم من الرضاعة ما يحرم من النسب" (HR. Bukhari & Muslim).',
  },

  // Mahram Muaqqat (Haram Sementara)
  {
    id: 'saudari_istri',
    nameIndo: 'Saudari Istri (Ipar Perempuan) / Mengumpulkan 2 Bersaudari',
    nameArabic: 'الجمع بين الأختين',
    category: 'muaqqat',
    isPermanent: false,
    conditions: 'Haram dimadu/dinikahi bersamaan. Boleh dinikahi jika istrinya telah meninggal atau ditalak dan masa iddahnya habis.',
    dalil: 'QS. An-Nisa: 23 ("وَأَن تَجْمَعُوا بَيْنَ الْأُخْتَيْنِ")',
  },
  {
    id: 'bibi_istri',
    nameIndo: 'Bibi Istri (dari pihak Ayah atau Ibu Istri)',
    nameArabic: 'الجمع بين المرأة وعمتها أو خالتها',
    category: 'muaqqat',
    isPermanent: false,
    conditions: 'Haram dimadu bersamaan dengan keponakannya.',
    dalil: 'HR. Bukhari & Muslim: "Tidak boleh dikumpulkan antara seorang wanita dengan bibinya".',
  },
  {
    id: 'istri_orang_iddah',
    nameIndo: 'Wanita yang Bersuami atau Sedang Masa Iddah',
    nameArabic: 'المعتدة وذات الزوج',
    category: 'muaqqat',
    isPermanent: false,
    conditions: 'Haram dinikahi selama masih dalam ikatan pernikahan atau masa iddah orang lain.',
    dalil: 'QS. An-Nisa: 24 ("وَالْمُحْصَنَاتُ مِنَ النِّسَاءِ")',
  },
  {
    id: 'talak_tiga',
    nameIndo: 'Mantan Istri yang Ditalak Tiga (Ba\'in Kubra)',
    nameArabic: 'المطلقة ثلاثاً',
    category: 'muaqqat',
    isPermanent: false,
    conditions: 'Haram dinikahi kembali sampai wanita tersebut menikah dengan pria lain secara wajar (bukan tahlil), dukhul, lalu bercerai dan habis iddahnya.',
    dalil: 'QS. Al-Baqarah: 230.',
  },
];

export const WALI_HIERARCHY: WaliHierarchyItem[] = [
  {
    order: 1,
    roleIndo: 'Ayah Kandung',
    roleArabic: 'الأب',
    category: 'wali_nasab_aqrab',
    conditions: 'Wali nasab paling utama dan terdekat (Wali Mujbir). Berhak menikahkan anak perempuannya yang masih gadis.',
  },
  {
    order: 2,
    roleIndo: 'Kakek Sahih (Ayahnya Ayah) ke atas',
    roleArabic: 'الجد (أبو الأب)',
    category: 'wali_nasab_aqrab',
    conditions: 'Menggantikan kedudukan ayah bila ayah kandung telah wafat atau hilang akal.',
  },
  {
    order: 3,
    roleIndo: 'Saudara Kandung Laki-laki (Kakak/Adik Kandung)',
    roleArabic: 'الأخ الشقيق',
    category: 'wali_nasab_abad',
    conditions: 'Berhak menjadi wali jika ayah dan kakek sudah tiada.',
  },
  {
    order: 4,
    roleIndo: 'Saudara Seayah Laki-laki',
    roleArabic: 'الأخ لأب',
    category: 'wali_nasab_abad',
    conditions: 'Menggantikan kedudukan saudara kandung laki-laki.',
  },
  {
    order: 5,
    roleIndo: 'Keponakan Laki-laki (Anak Laki-laki Saudara Kandung)',
    roleArabic: 'ابن الأخ الشقيق',
    category: 'wali_nasab_abad',
    conditions: 'Berhak bila tidak ada saudara laki-laki kandung/seayah.',
  },
  {
    order: 6,
    roleIndo: 'Keponakan Laki-laki (Anak Laki-laki Saudara Seayah)',
    roleArabic: 'ابن الأخ لأب',
    category: 'wali_nasab_abad',
    conditions: 'Menggantikan keponakan kandung.',
  },
  {
    order: 7,
    roleIndo: 'Paman Kandung (Saudara Kandung Ayah)',
    roleArabic: 'العم الشقيق',
    category: 'wali_nasab_abad',
    conditions: 'Kerabat paman terdekat dari jalur nasab ayah.',
  },
  {
    order: 8,
    roleIndo: 'Paman Seayah (Saudara Seayah dari Ayah)',
    roleArabic: 'العم لأب',
    category: 'wali_nasab_abad',
    conditions: 'Menggantikan paman kandung.',
  },
  {
    order: 9,
    roleIndo: 'Sepupu Laki-laki (Anak Laki-laki Paman Kandung/Seayah)',
    roleArabic: 'ابن العم',
    category: 'wali_nasab_abad',
    conditions: 'Kerabat ashabah terdekat berikutnya.',
  },
  {
    order: 10,
    roleIndo: 'Wali Hakim (Pejabat KUA / Qadhi Syar\'i)',
    roleArabic: 'ولي الحاكم / السلطان',
    category: 'wali_hakim',
    conditions: 'Menjadi wali bila seluruh wali nasab tidak ada, ghaib (hilang kontak jarak jauh), enggan/adhal secara zalim, atau sedang berihram.',
  },
];

export const IDDAH_CASES: Record<IddahCondition, IddahResult> = {
  pregnant_any: {
    condition: 'pregnant_any',
    title: 'Wanita Hamil (Cerai Hidup maupun Ditinggal Wafat)',
    durationText: 'Sampai Melahirkan Kandungannya',
    dalilArabic: 'وَأُولَاتُ الْأَحْمَالِ أَجَلُهُنَّ أَن يَضَعْنَ حَمْلَهُنَّ',
    dalilSource: 'QS. At-Thalaq: 4',
    rightsDuringIddah: [
      'Berhak atas nafkah tempat tinggal (sukna) dan nafkah belanja penuh sampai melahirkan.',
      'Bila ditalak raj\'i, suami berhak rujuk selama belum melahirkan.',
      'Saling mewarisi bila salah satu meninggal sebelum melahirkan (pada talak raj\'i).',
    ],
    rujukAllowed: true,
  },
  death_not_pregnant: {
    condition: 'death_not_pregnant',
    title: 'Ditinggal Wafat oleh Suami (Tidak Sedang Hamil)',
    durationText: '4 Bulan 10 Hari (± 130 Hari)',
    dalilArabic: 'وَالَّذِينَ يُتَوَفَّوْنَ مِنكُمْ وَيَذَرُونَ أَزْوَاجًا يَتَرَبَّصْنَ بِأَنفُسِهِنَّ أَرْبَعَةَ أَشْهُرٍ وَعَشْرًا',
    dalilSource: 'QS. Al-Baqarah: 234',
    rightsDuringIddah: [
      'Wajib ihdad (berkabung: tidak berhias, tidak memakai wewangian, tidak memakai perhiasan mencolok).',
      'Tetap tinggal di rumah suaminya selama iddah berlangsung.',
      'Mendapatkan hak warisan dari almarhum suami sesuai ketentuan Faraidh (1/4 atau 1/8).',
    ],
    rujukAllowed: false,
  },
  divorce_menstruating: {
    condition: 'divorce_menstruating',
    title: 'Cerai Hidup Bagi Wanita yang Masih Haid Rutin',
    durationText: '3 Kali Suci (Tsalatsata Quru\') menurut Mazhab Syafi\'i',
    dalilArabic: 'وَالْمُطَلَّقَاتُ يَتَرَبَّصْنَ بِأَنفُسِهِنَّ ثَلَاثَةَ قُرُوءٍ',
    dalilSource: 'QS. Al-Baqarah: 228',
    rightsDuringIddah: [
      'Bila Talak 1 atau 2 (Raj\'i): Berhak nafkah lahir penuh dan tempat tinggal dari mantan suami.',
      'Suami berhak merujuk kembali tanpa akad dan mahar baru selama belum selesai masa suci ketiga.',
      'Bila salah satu meninggal dalam masa iddah talak raj\'i, keduanya saling mewarisi.',
    ],
    rujukAllowed: true,
  },
  divorce_non_menstruating: {
    condition: 'divorce_non_menstruating',
    title: 'Cerai Hidup Bagi Wanita yang Tidak Haid (Menopause / Belum Haid)',
    durationText: '3 Bulan Kalender Hijriyah',
    dalilArabic: 'وَاللَّائِي يَئِسْنَ مِنَ الْمَحِيضِ مِن نِّسَائِكُمْ إِنِ ارْتَبْتُمْ فَعِدَّتُهُنَّ ثَلَاثَةُ أَشْهُرٍ وَاللَّائِي لَمْ يَحِضْنَ',
    dalilSource: 'QS. At-Thalaq: 4',
    rightsDuringIddah: [
      'Hak tempat tinggal dan nafkah bila dalam talak raj\'i.',
      'Suami berhak rujuk dalam rentang waktu 3 bulan tersebut.',
    ],
    rujukAllowed: true,
  },
  divorce_before_dukhul: {
    condition: 'divorce_before_dukhul',
    title: 'Cerai Hidup Sebelum Melakukan Hubungan Suami-Istri (Qablal Dukhul)',
    durationText: 'Tidak Ada Masa Iddah (Seketika Halal Menikah Lagi)',
    dalilArabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نَكَحْتُمُ الْمُؤْمِنَاتِ ثُمَّ طَلَّقْتُمُوهُنَّ مِن قَبْلِ أَن تَمَسُّوهُنَّ فَمَا لَكُمْ عَلَيْهِنَّ مِنْ عِدَّةٍ تَعْتَدُّونَهَا',
    dalilSource: 'QS. Al-Ahzab: 49',
    rightsDuringIddah: [
      'Mantan istri berhak langsung menikah dengan laki-laki lain tanpa harus menunggu waktu iddah.',
      'Istri berhak menerima separuh (1/2) dari mahar yang telah disebutkan saat akad (QS. Al-Baqarah: 237).',
    ],
    rujukAllowed: false,
  },
};

export interface MunakahatQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}

export { MUNAKAHAT_QUIZ } from './quizzes/munakahatQuizData';
