import {
  BloodRuleDetail,
  HaidProhibition,
} from '../types/haid';

export const BLOOD_RULES: BloodRuleDetail[] = [
  {
    type: 'haid',
    title: 'Darah Haid (Menstruasi Alami)',
    arabicTerm: 'دم الحيض (Damul Haidh)',
    definition:
      'Darah alami yang keluar dari rahim seorang wanita sehat yang telah mencapai usia minimal 9 tahun hijriyah, bukan karena sebab melahirkan dan bukan karena penyakit atau luka.',
    minDuration: '24 Jam (Sehari Semalam) baik keluar terus-menerus atau terputus-putus dalam 15 hari.',
    maxDuration: '15 Hari 15 Malam (jika melewati 15 hari, kelebihannya dihukumi Istihadhah).',
    habitualDuration: '6 atau 7 Hari 7 Malam (kebiasaan mayoritas wanita).',
    legalStatus: 'Hadats Besar. Menghalangi shalat, puasa, thawaf, dan bersetubuh. Wajib mandi janabah setelah darah berhenti.',
    colorCharacteristics: [
      '1. Hitam (Aswad): Paling kuat, panas, dan berbau menyengat.',
      '2. Merah (Ahmar): Darah segar standar.',
      '3. Cokelat / Keruh (Kudrah): Darah kecokelatan bercampur cairan rahim.',
      '4. Kuning (Shufrah): Cairan kekuningan seperti nanah tipis.',
    ],
    dalil: 'QS. Al-Baqarah: 222 ("وَيَسْأَلُونَكَ عَنِ الْمَحِيضِ قُلْ هُوَ أَذًى فَاعْتَزِلُوا النِّسَاءَ فِي الْمَحِيضِ")',
  },
  {
    type: 'nifas',
    title: 'Darah Nifas (Paska Persalinan)',
    arabicTerm: 'دم النفاس (Damun Nifas)',
    definition:
      'Darah yang keluar dari rahim wanita setelah selesainya proses persalinan (keluarnya seluruh tubuh bayi secara utuh), bukan darah yang keluar sebelum atau menyertai proses pembukaan.',
    minDuration: 'Sekejap / Setetes saja (Majjah / Lahzhah).',
    maxDuration: '60 Hari 60 Malam (bila lebih dari 60 hari, selebihnya dihukumi Istihadhah).',
    habitualDuration: '40 Hari 40 Malam.',
    legalStatus: 'Hadats Besar. Hukum dan larangannya persis sama seperti larangan saat haid. Wajib mandi besar setelah darah nifas bersih.',
    colorCharacteristics: [
      'Awalnya berupa darah merah kental kehitaman (lochia rubra).',
      'Kemudian berubah menjadi kecokelatan/kemerahan tipis (lochia serosa).',
      'Berakhir dengan cairan keputihan bening atau kekuningan pucat (lochia alba).',
    ],
    dalil: 'Hadits Ummu Salamah ra.: "Para wanita pada zaman Rasulullah SAW berdiam diri (menjalani nifas) selama empat puluh hari" (HR. Abu Dawud & Tirmidzi).',
  },
  {
    type: 'istihadhah',
    title: 'Darah Istihadhah (Pendarahan Abnormal / Penyakit)',
    arabicTerm: 'دم الاستحاضة (Damul Istihadhah)',
    definition:
      'Darah yang keluar dari pembuluh darah rahim (al-adzil) yang pecah di luar siklus waktu haid dan nifas, atau darah yang melebihi batas maksimal haid (> 15 hari) atau nifas (> 60 hari).',
    minDuration: 'Tidak ada batas minimal (bisa keluar sebentar atau berbulan-bulan).',
    maxDuration: 'Tidak ada batas maksimal.',
    habitualDuration: 'Tergantung kondisi medis dan siklus pendarahan wanita.',
    legalStatus: "Hadats Kecil yang Berkelanjutan (Da'imul Hadats). TIDAK MENGHALANGI shalat dan puasa. Wanita mustahadhah WAJIB shalat, puasa, dan boleh berhubungan dengan suaminya setelah bersuci.",
    colorCharacteristics: [
      'Umumnya berwarna merah segar encer seperti darah luka mimisan.',
      'Tidak memiliki aroma menyengat khas darah haid.',
      'Bisa membeku dengan cepat karena berasal dari pembuluh darah biasa.',
    ],
    dalil: 'Sabda Nabi SAW kepada Fatimah binti Abi Hubasy: "Itu hanyalah pembuluh darah (adzil) dan bukan darah haid. Maka jika tiba waktu haid tinggalkan shalat, dan jika telah selesai mandilah lalu shalatlah" (HR. Bukhari & Muslim).',
  },
];

export const HAID_PROHIBITIONS: HaidProhibition[] = [
  {
    id: 'shalat',
    title: 'Menunaikan Shalat (Fardhu & Sunnah)',
    desc: 'Haram melakukan shalat dan shalatnya tidak sah.',
    qadhaRule: 'tidak_qadha',
    qadhaText: 'TIDAK PERLU DIQADHA sama sekali (keringanan syariat / takhfif).',
    dalil: 'HR. Bukhari & Muslim dari Sayyidah Aisyah ra.',
  },
  {
    id: 'puasa',
    title: 'Menjalankan Ibadah Puasa (Ramadhan & Sunnah)',
    desc: 'Haram berpuasa dan puasanya tidak sah.',
    qadhaRule: 'wajib_qadha',
    qadhaText: 'WAJIB DIQADHA di luar bulan Ramadhan sejumlah hari yang ditinggalkan.',
    dalil: 'Aisyah ra. berkata: "Kami diperintahkan mengqadha puasa dan tidak diperintahkan mengqadha shalat" (HR. Muslim).',
  },
  {
    id: 'thawaf',
    title: 'Thawaf Mengelilingi Ka\'bah',
    desc: 'Thawaf mensyaratkan kesucian dari hadats besar layaknya shalat.',
    qadhaRule: 'wajib_qadha',
    qadhaText: 'Ditunda hingga suci dan mandi besar sebelum melakukan thawaf.',
    dalil: 'Sabda Nabi SAW kepada Aisyah ra.: "Lakukan apa yang dilakukan jamaah haji selain thawaf di Ka\'bah sampai engkau suci" (HR. Bukhari).',
  },
  {
    id: 'mushaf',
    title: 'Menyentuh dan Membawa Mushaf Al-Qur\'an',
    desc: 'Haram menyentuh lembaran dan tulisan ayat suci Al-Qur\'an tanpa alas/pemisah suci.',
    qadhaRule: 'bukan_ibadah',
    qadhaText: 'Boleh membaca terjemahan atau membuka aplikasi Al-Qur\'an di layar gawai/smartphone.',
    dalil: 'QS. Al-Waqi\'ah: 79 ("لَّا يَمَسُّهُ إِلَّا الْمُطَهَّرُونَ").',
  },
  {
    id: 'masjid',
    title: 'Berdiam Diri di Dalam Masjid (Al-Muktsu)',
    desc: 'Haram duduk atau berdiam di dalam masjid karena dikhawatirkan mengotori kesucian tempat ibadah.',
    qadhaRule: 'bukan_ibadah',
    qadhaText: 'Hanya boleh sekadar lewat (murur) bila yakin darah tidak menetes.',
    dalil: 'Sabda Nabi SAW: "Aku tidak menghalalkan masjid bagi orang yang junub dan wanita haid" (HR. Abu Dawud).',
  },
  {
    id: 'jima',
    title: 'Bersetubuh (Jima\' / Hubungan Suami-Istri)',
    desc: 'Haram secara kesepakatan ijma ulama melakukan penetrasi seksual selama darah masih mengalir dan belum mandi besar.',
    qadhaRule: 'bukan_ibadah',
    qadhaText: 'Boleh bersenang-senang pada anggota tubuh di luar area antara pusar dan lutut.',
    dalil: 'QS. Al-Baqarah: 222 ("فَاعْتَزِلُوا النِّسَاءَ فِي الْمَحِيضِ وَلَا تَقْرَبُوهُنَّ حَتَّىٰ يَطْهُرْنَ").',
  },
  {
    id: 'talak',
    title: 'Ditalak oleh Suami (Talak Bid\'i)',
    desc: 'Haram bagi suami menceraikan istrinya saat sedang haid (hukumnya berdosa, namun talak tetap jatuh menurut jumhur).',
    qadhaRule: 'bukan_ibadah',
    qadhaText: 'Menghindari perpanjangan masa iddah yang menyusahkan wanita.',
    dalil: 'Hadits Ibnu Umar ra. saat menceraikan istrinya yang sedang haid (HR. Bukhari & Muslim).',
  },
];

export const ISTIHADHAH_STEPS = [
  {
    step: 1,
    title: 'Bersihkan Kemaluan (Istinja)',
    desc: 'Membasuh dan mencuci bersih area organ kewanitaan dari darah yang keluar menggunakan air mutlak.',
  },
  {
    step: 2,
    title: 'Sumbat & Balut dengan Rapat',
    desc: 'Menutup area keluarnya darah menggunakan pembalut rapat agar darah tidak tercecer saat shalat.',
  },
  {
    step: 3,
    title: 'Wudhu SETELAH Masuk Waktu Shalat',
    desc: 'Wudhu wanita istihadhah tidak sah bila dilakukan sebelum adzan atau masuknya waktu shalat fardhu yang bersangkutan.',
  },
  {
    step: 4,
    title: 'Niat Khusus Wudhu Istihadhah',
    desc: 'Berniat: "Nawaitul wudhu-a li istibahatis shalati" (Saya niat wudhu untuk membolehkan shalat, bukan untuk menghilangkan hadats).',
  },
  {
    step: 5,
    title: 'Segera Shalat Tanpa Menunda',
    desc: 'Segera mendirikan shalat tanpa jeda waktu lama (kecuali untuk hal terkait kemaslahatan shalat seperti menjawab adzan atau menutup aurat). Satu wudhu berlaku untuk 1 shalat fardhu dan bebas shalat sunnah.',
  },
];

export const HAID_QUIZ_QUESTIONS = [
  {
    id: 'h_q1',
    question: 'Berapakah durasi waktu maksimal bagi keluarnya darah haid menurut ketentuan Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: '7 hari 7 malam' },
      { id: 'b', text: '10 hari 10 malam' },
      { id: 'c', text: '15 hari 15 malam' },
      { id: 'd', text: '40 hari 40 malam' },
    ],
    correctOptionId: 'c',
    explanation:
      'Dalam Mazhab Syafi\'i, durasi maksimal haid adalah 15 hari 15 malam. Jika seorang wanita mengeluarkan darah melebihi rentang 15 hari 15 malam, maka kelebihan darah tersebut dihukumi sebagai darah penyakit (Istihadhah).',
    dalil: 'Hasil riset istiqra\' (penelitian induktif) Imam Asy-Syafi\'i terhadap kebiasaan wanita Arab.',
  },
  {
    id: 'h_q2',
    question: 'Seorang wanita yang sedang haid meninggalkan ibadah shalat fardhu dan puasa Ramadhan selama 7 hari. Bagaimanakah kewajiban qadha baginya setelah suci?',
    options: [
      { id: 'a', text: 'Wajib mengqadha shalat dan wajib mengqadha puasa' },
      { id: 'b', text: 'Hanya wajib mengqadha puasa, sedangkan shalat TIDAK perlu diqadha' },
      { id: 'c', text: 'Hanya wajib mengqadha shalat, sedangkan puasa cukup bayar fidyah' },
      { id: 'd', text: 'Tidak wajib mengqadha shalat maupun puasa' },
    ],
    correctOptionId: 'b',
    explanation:
      'Berdasarkan ijma ulama dan hadits Sayyidah Aisyah ra., wanita yang selesai haid WAJIB mengqadha puasa Ramadhan yang ditinggalkannya, namun TIDAK PERLU mengqadha shalat sebagai bentuk keringanan (rukhsah) dari Allah SWT.',
    dalil: 'HR. Muslim: "Kana yushibuna dzalika fa namuru bi qadha-is shaumi wa la namuru bi qadha-is shalat".',
  },
  {
    id: 'h_q3',
    question: 'Berapakah batas waktu minimal masa suci di antara dua periode haid menurut Fiqih Islam?',
    options: [
      { id: 'a', text: '7 hari 7 malam' },
      { id: 'b', text: '10 hari 10 malam' },
      { id: 'c', text: '15 hari 15 malam' },
      { id: 'd', text: '30 hari' },
    ],
    correctOptionId: 'c',
    explanation:
      'Masa suci minimal di antara dua masa haid adalah 15 hari 15 malam. Jika seorang wanita suci selama kurang dari 15 hari lalu mengeluarkan darah lagi, maka darah kedua tersebut dihukumi sebagai darah Istihadhah (bukan haid baru).',
    dalil: 'Kitab Matan Taqrib & Fathul Qarib Al-Mujib.',
  },
  {
    id: 'h_q4',
    question: 'Bagaimanakah status ibadah shalat dan puasa bagi seorang wanita yang mengalami pendarahan Istihadhah?',
    options: [
      { id: 'a', text: 'Haram shalat dan haram puasa seperti wanita haid' },
      { id: 'b', text: 'Tetap wajib mendirikan shalat dan berpuasa, serta bersuci khusus setiap masuk waktu shalat' },
      { id: 'c', text: 'Boleh shalat tetapi dilarang berpuasa' },
      { id: 'd', text: 'Wajib shalat tetapi tidak perlu berwudhu' },
    ],
    correctOptionId: 'b',
    explanation:
      'Wanita yang mengalami istihadhah tetap berstatus suci secara hukum besar. Ia WAJIB mendirikan shalat fardhu dan WAJIB menjalankan puasa. Ia cukup membersihkan kemaluan, membalutnya, dan berwudhu setiap kali masuk waktu shalat fardhu.',
    dalil: 'Sabda Nabi SAW kepada Fatimah binti Abi Hubasy ra. (HR. Bukhari no. 306).',
  },
  {
    id: 'h_q5',
    question: 'Berapakah batas waktu maksimal bagi masa pendarahan Nifas (setelah melahirkan)?',
    options: [
      { id: 'a', text: '15 hari' },
      { id: 'b', text: '40 hari' },
      { id: 'c', text: '60 hari' },
      { id: 'd', text: '90 hari' },
    ],
    correctOptionId: 'c',
    explanation:
      'Masa nifas maksimal menurut Mazhab Syafi\'i adalah 60 hari 60 malam, meskipun kebiasaan umumnya (ghalib) berlangsung sekitar 40 hari. Darah yang keluar melebihi hari ke-60 dihukumi sebagai darah istihadhah.',
    dalil: 'Kitab Kifayatul Akhyar & Al-Majmu\' Syarah Al-Muhadzdzab.',
  },
];
