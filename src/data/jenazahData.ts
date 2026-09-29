import { JenazahPrayerDoa, KafanDetail, JenazahQuizQuestion } from '../types/jenazah';

export const PRAYER_DOA_DATA: Record<string, JenazahPrayerDoa> = {
  laki: {
    gender: 'laki',
    title: 'Jenazah Laki-laki Dewasa',
    imamPosition: 'Imam berdiri sejajar lurus dengan KEPALA jenazah.',
    takbir3Arabic:
      'اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مَدْخَلَهُ وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ وَنَقِّهِ مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الأَبْيَضُ مِنَ الدَّنَسِ',
    takbir3Latin:
      'Allāhummaghfir lahu warhamhu wa \'āfihi wa\'fu \'anhu wa akrim nuzulahu wa wassi\' madkhalahu waghsilhu bil-mā\'i wat-tsalji wal-baradi wa naqqihi minal khathāyā kamā yunaqqats tsaubul abyadhu minad danas.',
    takbir3Translation:
      'Ya Allah, ampunilah dia, rahmatilah dia, selamatkanlah dia, dan maafkanlah dia. Muliakanlah tempat tinggalnya, lapangkanlah tempat masuknya, mandikanlah dia dengan air, es, dan embun, serta bersihkanlah dia dari segala dosa sebagaimana kain putih dibersihkan dari kotoran.',
    takbir4Arabic:
      'اللَّهُمَّ لاَ تَحْرِمْنَا أَجْرَهُ وَلاَ تَفْتِنَّا بَعْدَهُ وَاغْفِرْ لَنَا وَلَهُ',
    takbir4Latin:
      'Allāhumma lā tahrimnā ajrahu walā taftinnā ba\'dahu waghfir lanā wa lahu.',
    takbir4Translation:
      'Ya Allah, janganlah Engkau halangi kami dari pahalanya, janganlah Engkau timbulkan fitnah bagi kami sepeninggalnya, dan ampunilah kami serta dia.',
  },
  perempuan: {
    gender: 'perempuan',
    title: 'Jenazah Perempuan Dewasa',
    imamPosition: 'Imam berdiri sejajar lurus dengan PINGGUL / PANTAT jenazah.',
    takbir3Arabic:
      'اللَّهُمَّ اغْفِرْ لَهَا وَارْحَمْهَا وَعَافِهَا وَاعْفُ عَنْهَا وَأَكْرِمْ نُزُلَهَا وَوَسِّعْ مَدْخَلَهَا وَاغْسِلْهَا بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ وَنَقِّهَا مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الأَبْيَضُ مِنَ الدَّنَسِ',
    takbir3Latin:
      'Allāhummaghfir lahā warhamhā wa \'āfihā wa\'fu \'anhā wa akrim nuzulahā wa wassi\' madkhalahā waghsilhā bil-mā\'i wat-tsalji wal-baradi wa naqqihā minal khathāyā kamā yunaqqats tsaubul abyadhu minad danas.',
    takbir3Translation:
      'Ya Allah, ampunilah dia (perempuan), rahmatilah dia, selamatkanlah dia, dan maafkanlah dia. Muliakanlah tempat tinggalnya, lapangkanlah tempat masuknya, mandikanlah dia dengan air, es, dan embun, serta bersihkanlah dia dari segala dosa sebagaimana kain putih dibersihkan dari kotoran.',
    takbir4Arabic:
      'اللَّهُمَّ لاَ تَحْرِمْنَا أَجْرَهَا وَلاَ تَفْتِنَّا بَعْدَهَا وَاغْفِرْ لَنَا وَلَهَا',
    takbir4Latin:
      'Allāhumma lā tahrimnā ajrahā walā taftinnā ba\'dahā waghfir lanā wa lahā.',
    takbir4Translation:
      'Ya Allah, janganlah Engkau halangi kami dari pahalanya, janganlah Engkau beri fitnah bagi kami setelah kepergiannya, dan ampunilah kami dan dia.',
  },
  anak_laki: {
    gender: 'anak_laki',
    title: 'Jenazah Anak-anak (Belum Baligh)',
    imamPosition: 'Imam berdiri sejajar lurus dengan KEPALA (jika laki-laki) atau PINGGUL (jika perempuan).',
    takbir3Arabic:
      'اللَّهُمَّ اجْعَلْهُ فَرَطًا لأَبَوَيْهِ وَسَلَفًا وَذُخْرًا وَعِظَةً وَاعْتِبَارًا وَشَفِيعًا، وَثَقِّلْ بِهِ مَوَازِينَهُمَا، وَأَفْرِغِ الصَّبْرَ عَلَى قُلُوبِهِمَا',
    takbir3Latin:
      'Allāhummaj\'alhu farathan li-abawaihi wa salafan wa dzukhran wa \'izhatan wa\'tibāran wa syafī\'an, wa tsaqqil bihī mawāzīnahumā, wa afrighis shabra \'alā qulūbihimā.',
    takbir3Translation:
      'Ya Allah, jadikanlah dia sebagai simpanan pendahulu bagi kedua orang tuanya, tabungan pahala, pelajaran berharga, dan pemberi syafa\'at. Beratkanlah timbangan amal kebaikan kedua orang tuanya dan curahkanlah kesabaran di dalam hati mereka.',
    takbir4Arabic:
      'اللَّهُمَّ لاَ تَحْرِمْنَا أَجْرَهُ وَلاَ تَفْتِنَّا بَعْدَهُ وَاغْفِرْ لَنَا وَلَهُ',
    takbir4Latin:
      'Allāhumma lā tahrimnā ajrahu walā taftinnā ba\'dahu waghfir lanā wa lahu.',
    takbir4Translation:
      'Ya Allah, janganlah Engkau halangi kami dari pahalanya, janganlah Engkau uji kami setelah kepergiannya, dan ampunilah kami serta dia.',
  },
  jamaah: {
    gender: 'jamaah',
    title: 'Banyak Jenazah Sekaligus (Jamak)',
    imamPosition: 'Imam berdiri di depan jenazah terdekat (diutamakan jenazah laki-laki paling depan dekat imam).',
    takbir3Arabic:
      'اللَّهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَعَافِهِمْ وَاعْفُ عَنْهُمْ وَأَكْرِمْ نُزُلَهُمْ وَوَسِّعْ مَدْخَلَهُمْ',
    takbir3Latin:
      'Allāhummaghfir lahum warhamhum wa \'āfihim wa\'fu \'anhum wa akrim nuzulahum wa wassi\' madkhalahum.',
    takbir3Translation:
      'Ya Allah, ampunilah mereka semua, rahmatilah mereka, selamatkanlah mereka, maafkanlah mereka, muliakanlah tempat peristirahatan mereka, dan lapangkanlah kubur mereka.',
    takbir4Arabic:
      'اللَّهُمَّ لاَ تَحْرِمْنَا أَجْرَهُمْ وَلاَ تَفْتِنَّا بَعْدَهُمْ وَاغْفِرْ لَنَا وَلَهُمْ',
    takbir4Latin:
      'Allāhumma lā tahrimnā ajrahum walā taftinnā ba\'dahum waghfir lanā wa lahum.',
    takbir4Translation:
      'Ya Allah, janganlah Engkau halangi pahala mereka dari kami, janganlah Engkau uji kami sepeninggal mereka, dan ampunilah kami serta mereka semua.',
  },
};

export const KAFAN_DATA: Record<string, KafanDetail> = {
  laki: {
    gender: 'laki',
    layerCountRecommended: 3,
    layerCountMinimum: 1,
    components: [
      '3 lapis kain kafan putih bersih berukuran sama yang menutupi seluruh tubuh (afdal tanpa baju kurung dan surban menurut mu\'tamad Syafi\'i).',
      'Kapas secukupnya untuk lubang-lubang tubuh (hidung, telinga, mata, mulut, kemaluan).',
      'Wewangian / serbuk kapur barus yang ditaburkan di setiap lapisan kain.',
      'Tali pengikat kafan sebanyak ganjil (3, 5, atau 7 tali).',
    ],
    ropeCount: 'Ganjil: 5 atau 7 ikatan (ujung kepala, dada, pinggang, lutut, ujung kaki). Simpul diikat di sebelah kiri tubuh.',
    procedure: [
      '1. Hamparkan tali kafan ganjil di atas lantai/meja.',
      '2. Letakkan lapisan kain pertama, taburi wewangian/kapur barus.',
      '3. Tumpuk lapisan kain kedua dan ketiga dengan rapi.',
      '4. Letakkan jenazah perlahan di atas kain kafan dengan tetap menutup auratnya.',
      '5. Tutup lubang tubuh dengan kapas berwangi dan posisikan tangan bersedekap di dada.',
      '6. Balutkan kain sisi kiri ke kanan, lalu sisi kanan ke kiri secara rapat.',
      '7. Ikat tali kafan dengan simpul hidup di sebelah kiri tubuh jenazah.',
    ],
  },
  perempuan: {
    gender: 'perempuan',
    layerCountRecommended: 5,
    layerCountMinimum: 1,
    components: [
      '1 kain sarung (izar) untuk menutupi pusar hingga mata kaki.',
      '1 baju kurung (gamis/qamish) berlubang leher menutupi bahu hingga betis.',
      '1 kerudung/tudung kepala (khimar).',
      '2 lapis kain penutup lebar yang membungkus seluruh tubuh dari ujung kepala hingga kaki.',
    ],
    ropeCount: 'Ganjil: 5 atau 7 ikatan. Simpul diikat di sisi kiri jenazah.',
    procedure: [
      '1. Siapkan tali pengikat dan hamparkan 2 kain pembungkus luar.',
      '2. Hamparkan kain sarung (izar) di bagian bawah dan baju kurung di bagian tengah.',
      '3. Letakkan jenazah dan kenakan kain sarungnya terlebih dahulu.',
      '4. Pasangkan baju kurung dan rapikan rambut jenazah menjadi 3 pintalan/kepangan ke belakang.',
      '5. Pasangkan kerudung (khimar) di kepala jenazah.',
      '6. Lipatkan 2 kain penutup luar secara rapat.',
      '7. Ikat seluruh simpul tali di sebelah kiri tubuh agar mudah dilepas di liang kubur.',
    ],
  },
};

export const JENAZAH_QUIZ: JenazahQuizQuestion[] = [
  {
    id: 'jq_1',
    question: 'Apakah hukum asal pengurusan dan pemulasaran jenazah seorang muslim bagi kaum muslimin di sekitarnya?',
    options: [
      { id: 'a', text: 'Sunnah Muakkadah' },
      { id: 'b', text: 'Fardhu Kifayah' },
      { id: 'c', text: 'Fardhu \'Ain bagi semua orang' },
      { id: 'd', text: 'Mubah' },
    ],
    correctOptionId: 'b',
    explanation: 'Pemulasaran jenazah (memandikan, mengafani, menshalatkan, dan menguburkan) hukumnya adalah Fardhu Kifayah. Apabila sudah ada sebagian muslim yang melaksanakannya dengan benar, maka gugur kewajiban dan dosa bagi seluruh muslim lainnya di wilayah tersebut.',
    dalil: 'Ijma\' Ulama Kaum Muslimin dan sunnah Rasulullah SAW.',
  },
  {
    id: 'jq_2',
    question: 'Siapakah golongan jenazah yang TIDAK BOLEH dimandikan dan TIDAK BOLEH dishalatkan menurut syariat Islam?',
    options: [
      { id: 'a', text: 'Orang yang meninggal karena sakit perut atau tenggelam' },
      { id: 'b', text: 'Orang yang mati syahid di medan perang melawan orang kafir (Syahid Ma\'rakah)' },
      { id: 'c', text: 'Orang yang meninggal saat melahirkan' },
      { id: 'd', text: 'Anak kecil yang belum baligh' },
    ],
    correctOptionId: 'b',
    explanation: 'Orang yang mati syahid di medan pertempuran menegakkan kalimat Allah (Syahid Ma\'rakah) haram dimandikan dan haram dishalatkan. Mereka dimakamkan langsung bersama pakaian darah mereka sebagai saksi kemuliaan di hari kiamat.',
    dalil: 'Sabda Nabi SAW mengenai korban perang Uhud: "Janganlah kalian mandikan mereka, karena setiap luka akan memancarkan wangi kesturi pada hari kiamat" (HR. Ahmad).',
  },
  {
    id: 'jq_3',
    question: 'Di manakah posisi imam yang disunnahkan saat menshalatkan jenazah PEREMPUAN dewasa?',
    options: [
      { id: 'a', text: 'Sejajar dengan kepala jenazah' },
      { id: 'b', text: 'Sejajar dengan pinggul / lambung jenazah' },
      { id: 'c', text: 'Sejajar dengan kedua kaki jenazah' },
      { id: 'd', text: 'Bebas di mana saja' },
    ],
    correctOptionId: 'b',
    explanation: 'Sunnah posisi imam saat menshalatkan jenazah: Berdiri lurus sejajar dengan KEPALA jenazah jika laki-laki, dan berdiri lurus sejajar dengan PINGGUL/LAMBUNG (bagian tengah tubuh) jika jenazahnya perempuan.',
    dalil: 'Hadits Samurah bin Jundub ra. dan Anas bin Malik ra. (HR. Muslim no. 964 & Abu Dawud no. 3194).',
  },
  {
    id: 'jq_4',
    question: 'Berapakah jumlah takbir dalam shalat jenazah dan apakah terdapat ruku\' serta sujud di dalamnya?',
    options: [
      { id: 'a', text: '5 takbir dengan ruku\' dan 2 sujud' },
      { id: 'b', text: '4 takbir tanpa ruku\' dan tanpa sujud sama sekali' },
      { id: 'c', text: '2 takbir dengan sujud sahwi' },
      { id: 'd', text: '3 takbir dengan 1 ruku\'' },
    ],
    correctOptionId: 'b',
    explanation: 'Shalat jenazah terdiri dari 4 takbir dan dilakukan seluruhnya dalam posisi berdiri tegak tanpa ruku\', i\'tidal, maupun sujud: Takbir 1 (Al-Fatihah), Takbir 2 (Shalawat), Takbir 3 (Doa mayit), Takbir 4 (Doa penutup & salam).',
    dalil: 'HR. Bukhari no. 1318 dari Abu Hurairah ra. saat Nabi SAW menshalatkan Raja Najasyi.',
  },
  {
    id: 'jq_5',
    question: 'Bagaimanakah posisi jenazah yang benar saat dibaringkan di dalam liang lahat pemakaman?',
    options: [
      { id: 'a', text: 'Terlentang dengan kepala menghadap ke langit' },
      { id: 'b', text: 'Tengkurap dengan kepala menghadap ke tanah' },
      { id: 'c', text: 'Dimiringkan ke lambung kanan dan wajah menghadap ke arah Kiblat' },
      { id: 'd', text: 'Duduk bersila bersandar pada dinding lahat' },
    ],
    correctOptionId: 'c',
    explanation: 'Jenazah wajib dibaringkan miring di atas lambung kanannya dengan dada dan wajah menghadap ke arah kiblat. Disunnahkan melepas simpul tali kafan dan membuka kain yang menutupi pipi kanan agar bersentuhan langsung dengan tanah.',
    dalil: 'Sabda Nabi SAW tentang Ka\'bah: "Qiblatukum ahyā\'an wa amwātan" (Kiblat kalian saat hidup dan setelah mati - HR. Abu Dawud).',
  },
];
