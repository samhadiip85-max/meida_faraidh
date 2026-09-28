export interface AshabulFurudhItem {
  fraction: '1/2' | '1/4' | '1/8' | '2/3' | '1/3' | '1/6';
  fractionArabic: string;
  nameIndo: string;
  beneficiariesCount: number;
  beneficiaries: {
    title: string;
    arabicTitle: string;
    conditions: string[];
    dalilText: string;
    dalilSource: string;
  }[];
}

export const ASHABUL_FURUDH_DATA: AshabulFurudhItem[] = [
  {
    fraction: '1/2',
    fractionArabic: 'النصف (An-Nishf)',
    nameIndo: 'Setengah (1/2)',
    beneficiariesCount: 5,
    beneficiaries: [
      {
        title: 'Suami (Az-Zauj)',
        arabicTitle: 'الزوج',
        conditions: ['Istri tidak meninggalkan anak kandung atau cucu (furu\' waris) baik laki-laki maupun perempuan.'],
        dalilText: 'وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ إِنْ لَمْ يَكُنْ لَهُنَّ وَلَدٌ',
        dalilSource: 'QS. An-Nisa: 12',
      },
      {
        title: 'Anak Perempuan Tunggal (Al-Bint)',
        arabicTitle: 'البنت الصلبية',
        conditions: [
          'Hanya ada 1 orang anak perempuan (tunggal).',
          'Tidak ada anak laki-laki kandung (yang menjadikannya ashabah bil ghair).',
        ],
        dalilText: 'وَإِنْ كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ',
        dalilSource: 'QS. An-Nisa: 11',
      },
      {
        title: 'Cucu Perempuan dari Anak Laki-laki (Bint Al-Ibn)',
        arabicTitle: 'بنت الابن',
        conditions: [
          'Hanya 1 orang cucu perempuan.',
          'Tidak ada anak kandung (laki-laki maupun perempuan).',
          'Tidak ada cucu laki-laki selevel (mu\'ashshib).',
        ],
        dalilText: 'Kedudukan cucu menggantikan anak saat anak tidak ada (Ijma Shahabat).',
        dalilSource: 'Ijma & Sunnah',
      },
      {
        title: 'Saudari Kandung Tunggal (Al-Ukht Asy-Syaqiqah)',
        arabicTitle: 'الأخت الشقيقة',
        conditions: [
          'Hanya 1 orang saudari kandung.',
          'Tidak ada furu\' waris (anak/cucu).',
          'Tidak ada ushul mudzakkar (ayah atau kakek).',
          'Tidak ada saudara kandung laki-laki (mu\'ashshib).',
        ],
        dalilText: 'إِنِ امْرُؤٌ هَلَكَ لَيْسَ لَهُ وَلَدٌ وَلَهُ أُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَ',
        dalilSource: 'QS. An-Nisa: 176',
      },
      {
        title: 'Saudari Seayah Tunggal (Al-Ukht li Ab)',
        arabicTitle: 'الأخت لأب',
        conditions: [
          'Hanya 1 orang saudari seayah.',
          'Tidak ada anak/cucu dan tidak ada ayah/kakek.',
          'Tidak ada saudara/saudari kandung.',
          'Tidak ada saudara seayah laki-laki.',
        ],
        dalilText: 'Kedudukan saudari seayah menggantikan posisi saudari kandung bila tidak ada saudari kandung.',
        dalilSource: 'QS. An-Nisa: 176 & Qiyas',
      },
    ],
  },
  {
    fraction: '1/4',
    fractionArabic: 'الربع (Ar-Rubu\')',
    nameIndo: 'Seperempat (1/4)',
    beneficiariesCount: 2,
    beneficiaries: [
      {
        title: 'Suami (Az-Zauj)',
        arabicTitle: 'الزوج',
        conditions: ['Istri meninggalkan keturunan (anak kandung atau cucu dari anak laki-laki).'],
        dalilText: 'فَإِنْ كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ مِمَّا تَرَكْنَ مِنْ بَعْدِ وَصِيَّةٍ يُوصِينَ بِهَا أَوْ دَيْنٍ',
        dalilSource: 'QS. An-Nisa: 12',
      },
      {
        title: 'Istri / Para Istri (Az-Zaujah)',
        arabicTitle: 'الزوجة / الزوجات',
        conditions: [
          'Suami yang meninggal TIDAK meninggalkan anak kandung atau cucu.',
          'Bila istri lebih dari satu (maksimal 4), bagian 1/4 dibagi rata di antara mereka.',
        ],
        dalilText: 'وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ إِنْ لَمْ يَكُنْ لَكُمْ وَلَدٌ',
        dalilSource: 'QS. An-Nisa: 12',
      },
    ],
  },
  {
    fraction: '1/8',
    fractionArabic: 'الثمن (Ats-Tsumun)',
    nameIndo: 'Seperdelapan (1/8)',
    beneficiariesCount: 1,
    beneficiaries: [
      {
        title: 'Istri / Para Istri (Az-Zaujah)',
        arabicTitle: 'الزوجة / الزوجات',
        conditions: [
          'Suami yang meninggal meninggalkan keturunan (anak atau cucu dari anak laki-laki).',
          'Bila terdapat lebih dari satu orang istri, bagian 1/8 dibagi sama rata di antara seluruh istri.',
        ],
        dalilText: 'فَإِنْ كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُمْ مِنْ بَعْدِ وَصِيَّةٍ تُوصُونَ بِهَا أَوْ دَيْنٍ',
        dalilSource: 'QS. An-Nisa: 12',
      },
    ],
  },
  {
    fraction: '2/3',
    fractionArabic: 'الثلثان (Ats-Tsulutsan)',
    nameIndo: 'Dua Pertiga (2/3)',
    beneficiariesCount: 4,
    beneficiaries: [
      {
        title: 'Dua Anak Perempuan atau Lebih (Al-Banat)',
        arabicTitle: 'البنتان فصاعداً',
        conditions: [
          'Berjumlah 2 orang atau lebih.',
          'Tidak ada anak laki-laki kandung.',
        ],
        dalilText: 'فَإِنْ كُنَّ نِسَاءً فَوْقَ اثْنَتَيْنِ فَلَهُنَّ ثُلُثَا مَا تَرَكَ',
        dalilSource: 'QS. An-Nisa: 11',
      },
      {
        title: 'Dua Cucu Perempuan atau Lebih (Banat Al-Ibn)',
        arabicTitle: 'بنتا الابن فصاعداً',
        conditions: [
          'Berjumlah 2 orang atau lebih.',
          'Tidak ada anak kandung sama sekali.',
          'Tidak ada cucu laki-laki yang sederajat.',
        ],
        dalilText: 'Kedudukan cucu menggantikan anak perempuan saat tidak ada anak perempuan.',
        dalilSource: 'Ijma Shahabat',
      },
      {
        title: 'Dua Saudari Kandung atau Lebih (Al-Akhawat Asy-Syaqiqat)',
        arabicTitle: 'الأختان الشقيقتان فصاعداً',
        conditions: [
          'Berjumlah 2 orang atau lebih.',
          'Tidak ada anak/cucu dan tidak ada ayah/kakek.',
          'Tidak ada saudara kandung laki-laki.',
        ],
        dalilText: 'فَإِنْ كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثَانِ مِمَّا تَرَكَ',
        dalilSource: 'QS. An-Nisa: 176',
      },
      {
        title: 'Dua Saudari Seayah atau Lebih (Al-Akhawat li Ab)',
        arabicTitle: 'الأختان لأب فصاعداً',
        conditions: [
          'Berjumlah 2 orang atau lebih.',
          'Tidak ada anak/cucu, ayah/kakek, dan saudara/saudari kandung.',
          'Tidak ada saudara seayah laki-laki.',
        ],
        dalilText: 'Kedudukan saudari seayah menggantikan posisi saudari kandung saat ketiadaan mereka.',
        dalilSource: 'QS. An-Nisa: 176',
      },
    ],
  },
  {
    fraction: '1/3',
    fractionArabic: 'الثلث (Ats-Tsuluts)',
    nameIndo: 'Sepertiga (1/3)',
    beneficiariesCount: 2,
    beneficiaries: [
      {
        title: 'Ibu (Al-Umm)',
        arabicTitle: 'الأم',
        conditions: [
          'Pewaris tidak meninggalkan keturunan (anak/cucu).',
          'Pewaris tidak meninggalkan 2 orang saudara/i atau lebih (baik kandung, seayah, maupun seibu).',
          'Bukan dalam kasus Gharrawain (Suami/Istri + Ibu + Ayah).',
        ],
        dalilText: 'فَإِنْ لَمْ يَكُنْ لَهُ وَلَدٌ وَوَرِثَهُ أَبَوَاهُ فَلِأُمِّهِ الثُّلُثُ',
        dalilSource: 'QS. An-Nisa: 11',
      },
      {
        title: 'Dua Saudara/i Seibu atau Lebih (Al-Ikhwah li Umm)',
        arabicTitle: 'الإخوة لأم (اثنان فصاعداً)',
        conditions: [
          'Berjumlah 2 orang atau lebih.',
          'Tidak ada keturunan (anak/cucu) dan tidak ada ushul laki-laki (ayah/kakek).',
          'Dibagi rata antara laki-laki dan perempuan (tanpa rasio 2:1).',
        ],
        dalilText: 'فَإِنْ كَانُوا أَكْثَرَ مِنْ ذَٰلِكَ فَهُمْ شُرَكَاءُ فِي الثُّلُثِ',
        dalilSource: 'QS. An-Nisa: 12',
      },
    ],
  },
  {
    fraction: '1/6',
    fractionArabic: 'السدس (As-Sudus)',
    nameIndo: 'Seperenam (1/6)',
    beneficiariesCount: 7,
    beneficiaries: [
      {
        title: 'Ayah (Al-Ab)',
        arabicTitle: 'الأب',
        conditions: ['Pewaris meninggalkan anak laki-laki atau cucu laki-laki.'],
        dalilText: 'وَلِأَبَوَيْهِ لِكُلِّ وَاحِدٍ مِنْهُمَا السُّدُسُ مِمَّا تَرَكَ إِنْ كَانَ لَهُ وَلَدٌ',
        dalilSource: 'QS. An-Nisa: 11',
      },
      {
        title: 'Ibu (Al-Umm)',
        arabicTitle: 'الأم',
        conditions: [
          'Pewaris meninggalkan keturunan (anak atau cucu), ATAU',
          'Pewaris meninggalkan 2 orang saudara/i atau lebih (kandung, seayah, atau seibu).',
        ],
        dalilText: 'فَإِنْ كَانَ لَهُ إِخْوَةٌ فَلِأُمِّهِ السُّدُسُ',
        dalilSource: 'QS. An-Nisa: 11',
      },
      {
        title: 'Kakek Sahih (Al-Jadd Shahih)',
        arabicTitle: 'الجد الصحيح (أبو الأب)',
        conditions: [
          'Ada anak/cucu laki-laki.',
          'Tidak ada ayah kandung (ayah memahjub kakek).',
        ],
        dalilText: 'Kakek menggantikan kedudukan ayah saat ayah tiada.',
        dalilSource: 'Ijma Shahabat',
      },
      {
        title: 'Nenek Sahihah (Al-Jaddah Shahihah)',
        arabicTitle: 'الجدة الصحيحة',
        conditions: [
          'Tidak ada ibu kandung (ibu memahjub seluruh nenek).',
          'Nenek dari pihak ayah tidak terhalang bila ayah tidak ada.',
          'Bila ada nenek dari ayah dan nenek dari ibu, keduanya berbagi rata 1/6.',
        ],
        dalilText: 'Ketetapan Khalifah Abu Bakar Ash-Shiddiq ra. berdasarkan sunnah Nabi SAW.',
        dalilSource: 'HR. Abu Dawud & Tirmidzi',
      },
      {
        title: 'Cucu Perempuan dari Anak Laki-laki (Bint Al-Ibn)',
        arabicTitle: 'بنت الابن',
        conditions: [
          'Ada HANYA 1 orang anak perempuan kandung (yang mengambil fardh 1/2).',
          'Sebagai pelengkap dua pertiga (Takmilatuts Tsulutsain).',
          'Tidak ada cucu laki-laki yang menjadi mu\'ashshib.',
        ],
        dalilText: 'Putusan Rasulullah SAW dalam kasus 1 anak perempuan, 1 cucu perempuan, dan 1 saudari kandung.',
        dalilSource: 'HR. Bukhari',
      },
      {
        title: 'Saudari Seayah (Al-Ukht li Ab)',
        arabicTitle: 'الأخت لأب',
        conditions: [
          'Ada HANYA 1 orang saudari kandung (yang mengambil fardh 1/2).',
          'Sebagai penyempurna 2/3 (Takmilatuts Tsulutsain).',
          'Tidak ada saudara seayah laki-laki.',
        ],
        dalilText: 'Disamakan dengan kedudukan cucu perempuan bersama satu anak perempuan.',
        dalilSource: 'Qiyas & Ijma',
      },
      {
        title: 'Satu Orang Saudara / Saudari Seibu (Al-Akh / Al-Ukht li Umm)',
        arabicTitle: 'الواحد من الإخوة لأم',
        conditions: [
          'Hanya 1 orang (baik laki-laki maupun perempuan).',
          'Tidak ada keturunan (anak/cucu) dan tidak ada ushul laki-laki (ayah/kakek).',
        ],
        dalilText: 'وَإِنْ كَانَ رَجُلٌ يُورَثُ كَلَالَةً أَوِ امْرَأَةٌ وَلَهُ أَخٌ أَوْ أُخْتٌ فَلِكُلِّ وَاحِدٍ مِنْهُمَا السُّدُسُ',
        dalilSource: 'QS. An-Nisa: 12',
      },
    ],
  },
];

export const ASAL_MASALAH_GUIDE = [
  {
    asalMasalah: 2,
    source: 'Dari fardh 1/2',
    canAul: false,
    example: 'Suami (1/2) dan Saudara Laki-laki kandung (Ashabah)',
  },
  {
    asalMasalah: 3,
    source: 'Dari fardh 1/3 atau 2/3',
    canAul: false,
    example: 'Ibu (1/3) dan Paman kandung (Ashabah)',
  },
  {
    asalMasalah: 4,
    source: 'Dari fardh 1/4',
    canAul: false,
    example: 'Istri (1/4) dan Anak Laki-laki (Ashabah)',
  },
  {
    asalMasalah: 6,
    source: 'Dari perpaduan 1/6 dengan 1/2, 1/3, atau 2/3',
    canAul: true,
    aulValues: [7, 8, 9, 10],
    example: 'Suami (1/2 = 3/6), 2 Saudari Kandung (2/3 = 4/6) ➔ Saham = 7, Asal Masalah \'Aul jadi 7',
  },
  {
    asalMasalah: 8,
    source: 'Dari fardh 1/8 dengan ashabah atau furudh lainnya',
    canAul: false,
    example: 'Istri (1/8) dan Anak Laki-laki (Ashabah)',
  },
  {
    asalMasalah: 12,
    source: 'Dari perpaduan 1/4 dengan 1/3, 2/3, atau 1/6',
    canAul: true,
    aulValues: [13, 15, 17],
    example: 'Suami (1/4 = 3/12), 2 Anak Perempuan (2/3 = 8/12), Ibu (1/6 = 2/12) ➔ Saham = 13, \'Aul jadi 13',
  },
  {
    asalMasalah: 24,
    source: 'Dari perpaduan 1/8 dengan 2/3 atau 1/6',
    canAul: true,
    aulValues: [27],
    example: 'Istri (1/8 = 3/24), 2 Anak Perempuan (2/3 = 16/24), Ayah (1/6 = 4/24), Ibu (1/6 = 4/24) ➔ Saham = 27 (Masalah Mimbariah)',
  },
];
