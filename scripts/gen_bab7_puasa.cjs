// scripts/gen_bab7_puasa.cjs
const fs = require('fs');

const puasaQuestions = [
  {
    id: 'pq_1',
    question: 'Kapankah batas waktu berniat yang diwajibkan (Tabyītun Niyyah) untuk puasa wajib seperti puasa Ramadhan, puasa qadha\', atau puasa nadzar menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Boleh dilakukan kapan saja sebelum matahari tergelincir (waktu Zhuhur).' },
      { id: 'b', text: 'Wajib dihadirkan di dalam hati pada waktu malam hari antara terbenamnya matahari (Maghrib) hingga sebelum terbit fajar shadiq (Subuh) pada setiap malamnya.' },
      { id: 'c', text: 'Cukup berniat satu kali di awal bulan Ramadhan untuk sebulan penuh.' },
      { id: 'd', text: 'Tepat saat menyantap suapan terakhir makan sahur.' },
      { id: 'e', text: 'Setelah selesai menunaikan shalat Tarawih berjamaah.' }
    ],
    correctOptionId: 'b',
    explanation: 'Dalam Mazhab Syafi\'i, puasa fardhu mensyaratkan tabyitun niyyah (berniat di malam hari sebelum fajar) dan ta\'yin (menentukan jenis puasa fardhu), serta wajib diulang setiap malam karena tiap hari puasa adalah ibadah independen.',
    dalil: 'HR. Abu Dawud no. 2454 dan An-Nasa\'i no. 2331 dari Hafshah ra.: "Man lam yubayyitis shiyāma qablal fajri falā shiyāma lah".'
  },
  {
    id: 'pq_2',
    question: 'Seorang pasien yang sedang berpuasa Ramadhan menerima suntikan infus cairan glukosa/nutrisi makanan melalui pembuluh darah vena (intravena) di rumah sakit. Bagaimanakah status puasa pasien tersebut menurut Fatwa Komisi Fatwa MUI dan Majma\' Al-Fiqh Al-Islami?',
    options: [
      { id: 'a', text: 'Puasanya tetap sah karena cairan tidak masuk melalui lubang alami (mulut/hidung).' },
      { id: 'b', text: 'Puasanya BATAL, karena infus cairan glukosa/nutrisi berfungsi menggantikan makanan dan minuman serta mengenyangkan tubuh.' },
      { id: 'c', text: 'Puasanya makruh dan wajib sujud sahwi.' },
      { id: 'd', text: 'Hanya batal jika pasien merasakan manis di lidahnya.' },
      { id: 'e', text: 'Pasien wajib membayar kaffarah berat 2 bulan berturut-turut.' }
    ],
    correctOptionId: 'b',
    explanation: 'Infus nutrisi glukosa langsung masuk ke aliran darah dan berfungsi hakiki memberi asupan energi/mengenyangkan laksana makan dan minum, sehingga membatalkan puasa menurut kesepakatan fuqaha mu\'ashirin.',
    dalil: 'Keputusan Majma\' Al-Fiqh Al-Islami OKI No. 93 (1/10) & Fatwa MUI.'
  },
  {
    id: 'pq_3',
    question: 'Di sisi lain, seorang peserta puasa menerima suntikan vaksinasi atau injeksi antibiotik ke dalam otot lengan (intramuskular) yang murni untuk pengobatan dan tidak mengandung nutrisi pengenyang. Bagaimanakah status puasanya?',
    options: [
      { id: 'a', text: 'Puasanya BATAL seketika karena jarum melubangi kulit.' },
      { id: 'b', text: 'Puasanya tetap SAH, karena suntikan intramuskular bukan makanan/minuman dan tidak masuk melalui rongga terbuka alami.' },
      { id: 'c', text: 'Puasanya makruh dan ia harus membatalkan puasa hari itu.' },
      { id: 'd', text: 'Sah asalkan disuntik oleh dokter yang beragama Islam.' },
      { id: 'e', text: 'Wajib mengqadha puasa di bulan Syawal.' }
    ],
    correctOptionId: 'b',
    explanation: 'Suntikan obat/vaksin intramuskular tidak masuk melalui jauf maftuh (rongga terbuka alami) dan tidak berfungsi sebagai pengganti makanan/minuman, sehingga tidak membatalkan puasa menurut Fatwa MUI No. 13 Tahun 2021.',
    dalil: 'Fatwa MUI No. 13 Tahun 2021 tentang Hukum Vaksinasi Saat Berpuasa.'
  },
  {
    id: 'pq_4',
    question: 'Seseorang yang sedang berpuasa merasakan mual yang hebat di dalam mobil karena mabuk perjalanan hingga akhirnya muntah keluar secara spontan tanpa ada niat atau kesengajaan sama sekali. Bagaimanakah status puasa orang tersebut?',
    options: [
      { id: 'a', text: 'Puasanya batal dan ia wajib segera makan dan minum.' },
      { id: 'b', text: 'Puasanya tetap SAH dan ia wajib melanjutkan puasanya hingga Maghrib, asalkan tidak ada cairan muntahan yang ditelan kembali.' },
      { id: 'c', text: 'Puasanya batal dan wajib membayar fidyah satu mud beras.' },
      { id: 'd', text: 'Puasanya sah jika ia berkumur dengan air sabun.' },
      { id: 'e', text: 'Puasanya gugur separuh pahalanya.' }
    ],
    correctOptionId: 'b',
    explanation: 'Muntah yang keluar tanpa sengaja (ghalabah) tidak membatalkan puasa berdasarkan sabda Nabi SAW: "Barangsiapa yang muntah tanpa sengaja maka tidak ada qadha baginya, dan barangsiapa yang sengaja memancing muntah maka wajib qadha".',
    dalil: 'HR. Abu Dawud no. 2380, At-Tirmidzi no. 720, dan Ibnu Majah dari Abu Hurairah ra.'
  },
  {
    id: 'pq_5',
    question: 'Seorang suami melakukan hubungan biologis (jima\') dengan istrinya di siang hari bulan Ramadhan dalam keadaan sadar, sengaja, dan mengetahui keharamannya saat sedang berpuasa. Apakah konsekuensi sanksi syar\'i (Kaffārah \'Udzmā) yang WAJIB ia tunaikan secara bertingkat (tartib)?',
    options: [
      { id: 'a', text: 'Cukup beristighfar 100 kali dan memberi sedekah uang seikhlasnya.' },
      { id: 'b', text: 'Memerdekakan seorang budak mukmin; jika tidak mampu, berpuasa 2 bulan berturut-turut; jika tidak mampu, memberi makan 60 orang miskin (masing-masing 1 mud beras); disertai wajib mengqadha hari tersebut.' },
      { id: 'c', text: 'Menyembelih 1 ekor unta di kota Mekkah.' },
      { id: 'd', text: 'Berpuasa selama 1 tahun penuh tanpa henti.' },
      { id: 'e', text: 'Membayar denda seberat 85 gram emas kepada kas negara.' }
    ],
    correctOptionId: 'b',
    explanation: 'Kaffarah \'Uzhma jima\' siang Ramadhan bersifat bertingkat (tartib): (1) Memerdekakan budak mukmin, jika tak mampu (2) Puasa 2 bulan berturut-turut, jika tak mampu (3) Memberi makan 60 orang miskin masing-masing 1 mud beras, di samping wajib mengqadha puasanya.',
    dalil: 'HR. Bukhari no. 1936 dan Muslim no. 1111 dari Abu Hurairah ra.'
  },
  {
    id: 'pq_6',
    question: 'Ibu Fatimah sedang menyusui bayinya yang baru berusia 2 bulan. Ia tidak berpuasa Ramadhan semata-mata karena KHAWATIR TERHADAP KESEHATAN BAYINYA (khawatir ASI mengering dan bayinya sakit/dehidrasi), sedangkan kondisi fisik ibu Fatimah sendiri kuat dan sehat. Bagaimanakah kewajiban pengganti puasa bagi ibu Fatimah menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Hanya wajib mengqadha puasa saja tanpa membayar fidyah.' },
      { id: 'b', text: 'Hanya wajib membayar fidyah saja tanpa perlu mengqadha puasa.' },
      { id: 'c', text: 'WAJIB mengqadha puasa DAN membayar fidyah (1 mud beras per hari) sekaligus.' },
      { id: 'd', text: 'Bebas dari qadha maupun fidyah karena udzur menyusui.' },
      { id: 'e', text: 'Wajib membayar kaffarah puasa 2 bulan berturut-turut.' }
    ],
    correctOptionId: 'c',
    explanation: 'Dalam Mazhab Syafi\'i, wanita hamil atau menyusui yang berbuka KARENA KHAWATIR PADA ANAKNYA SAJA (takut keguguran / ASI kering), wajib dua hal sekaligus: wajib QADHA hari yang ditinggalkan DAN wajib membayar FIDYAH 1 mud beras per hari.',
    dalil: 'QS. Al-Baqarah: 184 & Kitab Matan Al-Ghayah wat Taqrib Bab Ash-Shiyam.'
  },
  {
    id: 'pq_7',
    question: 'Sebaliknya, jika seorang ibu hamil berbuka puasa karena KHAWATIR TERHADAP KESELAMATAN DIRINYA SENDIRI (misalnya mengalami pendarahan hebat atau lemas kritis), bagaimanakah status kewajibannya?',
    options: [
      { id: 'a', text: 'Wajib qadha dan wajib fidyah sekaligus.' },
      { id: 'b', text: 'HANYA WAJIB QADHA SAJA tanpa kewajiban membayar fidyah.' },
      { id: 'c', text: 'Hanya wajib membayar fidyah tanpa qadha.' },
      { id: 'd', text: 'Gugur seluruh kewajiban ibadahnya.' },
      { id: 'e', text: 'Wajib menyembelih seekor kambing.' }
    ],
    correctOptionId: 'b',
    explanation: 'Jika ibu hamil/menyusui berbuka karena mengkhawatirkan keselamatan dirinya sendiri (atau khawatir diri dan bayinya sekaligus), ia disamakan kedudukannya dengan orang sakit biasa: HANYA WAJIB QADHA saja tanpa perlu membayar fidyah.',
    dalil: 'Kitab Fathul Qarib Al-Mujib & Kasyifatus Saja karya Syekh Nawawi Al-Bantani.'
  },
  {
    id: 'pq_8',
    question: 'Kakek Ahmad sudah berusia 88 tahun, fisiknya sangat lemah renta, dan dokter memvonis bahwa beliau tidak akan mampu lagi berpuasa sepanjang sisa hidupnya. Bagaimanakah syariat memberikan solusi bagi Kakek Ahmad?',
    options: [
      { id: 'a', text: 'Wajib dipaksakan berpuasa separuh hari.' },
      { id: 'b', text: 'Gugur kewajiban qadha puasa, dan diganti dengan MEMBAYAR FIDYAH sebesar 1 mud beras (± 675 gram) untuk setiap hari puasa yang ditinggalkan.' },
      { id: 'c', text: 'Kewajiban puasanya dialihkan kepada cucunya.' },
      { id: 'd', text: 'Wajib membayar fidyah 1 ekor sapi untuk satu bulan Ramadhan.' },
      { id: 'e', text: 'Tidak ada kewajiban apa pun baik puasa maupun fidyah.' }
    ],
    correctOptionId: 'b',
    explanation: 'Orang tua lanjut usia (syaikh kabir) dan penderita sakit menahun tanpa harapan sembuh dibebaskan dari puasa dan qadha, lalu diganti dengan membayar fidyah 1 mud makanan pokok per hari kepada fakir miskin.',
    dalil: 'QS. Al-Baqarah: 184 ("Wa \'alalladzīna yuthīqūnahū fidyatun tha\'āmu miskīn") & Tafsir Ibnu Abbas ra.'
  },
  {
    id: 'pq_9',
    question: 'Ahmad memiliki hutang puasa Ramadhan sebanyak 5 hari. Karena lalai dan menunda-nunda tanpa udzur syar\'i, ia belum mengqadha hutang tersebut hingga tiba bulan Ramadhan tahun berikutnya. Bagaimanakah konsekuensi hukum atas keterlambatan Ahmad?',
    options: [
      { id: 'a', text: 'Hutang puasanya otomatis hangus dan dimaafkan.' },
      { id: 'b', text: 'Ahmad tetap WAJIB mengqadha 5 hari puasa tersebut setelah Ramadhan usai, DAN ditambah denda membayar Fidyah 1 mud per hari yang berlipat ganda sesuai tahun keterlambatan.' },
      { id: 'c', text: 'Ia dihukum puasa 10 hari tanpa fidyah.' },
      { id: 'd', text: 'Cukup membayar fidyah saja dan bebas dari qadha.' },
      { id: 'e', text: 'Puasanya diqadha oleh walinya.' }
    ],
    correctOptionId: 'b',
    explanation: 'Menunda qadha puasa Ramadhan hingga melewati Ramadhan berikutnya tanpa udzur syar\'i berakibat dua hal: tetap wajib mengqadha hari yang terlewat, dan terkena kewajiban fidyah 1 mud per hari karena keterlambatan (fidyah ta\'khir) yang berlipat setiap tahun.',
    dalil: 'Fatwa Ibnu Abbas, Abu Hurairah, dan enam sahabat nabi (HR. Ad-Daraquthni & Al-Baihaqi).'
  },
  {
    id: 'pq_10',
    question: 'Di antara hari-hari berikut, manakah hari yang DIHARAMKAN secara mutlak untuk berpuasa (Ayyāmul Mahzhūrah)?',
    options: [
      { id: 'a', text: 'Hari Senin dan Kamis.' },
      { id: 'b', text: 'Hari Raya Idul Fitri (1 Syawal), Hari Raya Idul Adha (10 Dzulhijjah), dan Hari-Hari Tasyrik (11, 12, 13 Dzulhijjah).' },
      { id: 'c', text: 'Hari Asyura (10 Muharram).' },
      { id: 'd', text: 'Hari Arafah (9 Dzulhijjah).' },
      { id: 'e', text: 'Hari Ayyamul Bidh (13, 14, 15 penanggalan hijriyah selain Dzulhijjah).' }
    ],
    correctOptionId: 'b',
    explanation: 'Hari yang diharamkan berpuasa: 2 hari raya (1 Syawal dan 10 Dzulhijjah) dan 3 hari tasyrik (11, 12, 13 Dzulhijjah). Puasa pada hari-hari ini haram dan tidak sah.',
    dalil: 'HR. Bukhari no. 1995 dan Muslim no. 1140: "Nahā Rasūlullāh \'an shaumi yaumaini: yaumil fithri wa yaumin nahr".'
  },
  {
    id: 'pq_11',
    question: 'Apakah keutamaan pahala ibadah Puasa Sunnah Hari Arafah (9 Dzulhijjah) bagi muslim yang tidak sedang menunaikan ibadah haji?',
    options: [
      { id: 'a', text: 'Menghapuskan dosa-dosa selama 100 tahun.' },
      { id: 'b', text: 'Menghapuskan dosa-dosa kecil selama dua tahun: satu tahun yang telah lalu dan satu tahun yang akan datang.' },
      { id: 'c', text: 'Mendapatkan pahala setara ibadah haji mabrur.' },
      { id: 'd', text: 'Dibebaskan dari siksa kubur secara permanen.' },
      { id: 'e', text: 'Sama nilainya dengan berpuasa seumur hidup.' }
    ],
    correctOptionId: 'b',
    explanation: 'Nabi SAW bersabda mengenai puasa hari Arafah: "Yukaffiru as-sanatal mābiyata wal-bāqiyah" (Menghapuskan dosa setahun yang lalu dan setahun yang akan datang).',
    dalil: 'HR. Muslim no. 1162 dari Abu Qatadah Al-Anshari ra.'
  },
  {
    id: 'pq_12',
    question: 'Puasa sunnah 6 hari di bulan Syawwal memiliki keutamaan agung. Jika seseorang melaksanakannya setelah berpuasa Ramadhan penuh, pahalanya disetarakan dengan:',
    options: [
      { id: 'a', text: 'Berpuasa selama 40 hari.' },
      { id: 'b', text: 'Berpuasa sepanjang tahun (Shaumud Dahri).' },
      { id: 'c', text: 'Pahala seribu kali umrah di bulan Ramadhan.' },
      { id: 'd', text: 'Pahala puasa para nabi terdahulu.' },
      { id: 'e', text: 'Mendapatkan rumah mewah di surga Firdaus.' }
    ],
    correctOptionId: 'b',
    explanation: 'Nabi SAW bersabda: "Barangsiapa yang berpuasa Ramadhan kemudian mengikutinya dengan enam hari di bulan Syawwal, maka ia seperti berpuasa sepanjang tahun (karena 1 kebaikan dilipatgandakan 10 kali: 30 hari x 10 = 300, 6 hari x 10 = 60, total 360 hari setahun)".',
    dalil: 'HR. Muslim no. 1164 dari Abu Ayyub Al-Anshari ra.'
  },
  {
    id: 'pq_13',
    question: 'Di antara perkara berikut, manakah tindakan yang MAKRUH dilakukan oleh orang yang sedang berpuasa?',
    options: [
      { id: 'a', text: 'Menyegerakan berbuka puasa saat matahari terbenam.' },
      { id: 'b', text: 'Mencicipi makanan di ujung lidah tanpa ada hajat (kebutuhan memasak) dan berlebih-lebihan saat berkumur/istinsyaq.' },
      { id: 'c', text: 'Mengakhirkan makan sahur mendekati fajar.' },
      { id: 'd', text: 'Mandi basah untuk mendinginkan badan dari terik matahari.' },
      { id: 'e', text: 'Tidur sejenak sebelum waktu Zhuhur.' }
    ],
    correctOptionId: 'b',
    explanation: 'Makruh puasa meliputi: mencicipi makanan tanpa hajat mendesak, berlebih-lebihan menghirup air ke hidung saat wudhu (mubalaghah fil istinsyaq), mengunyah permen karet tanpa rasa, dan berbekam yang melemahkan badan.',
    dalil: 'HR. Abu Dawud no. 2366: "Wa bāligh fil istinsyāqi illā an takūna shā\'imā" & Matan Taqrib.'
  },
  {
    id: 'pq_14',
    question: 'Seseorang terbangun dari tidur di siang hari puasa Ramadhan dan mendapati dirinya bermimpi basah (Ihtilām) hingga keluar cairan sperma. Bagaimanakah status puasanya?',
    options: [
      { id: 'a', text: 'Puasanya batal dan ia wajib mengqadha hari itu.' },
      { id: 'b', text: 'Puasanya tetap SAH, karena mimpi basah terjadi di luar kehendak dan kesadaran sadar mushalli (tidak sengaja).' },
      { id: 'c', text: 'Puasanya batal dan wajib membayar kaffarah berat.' },
      { id: 'd', text: 'Puasanya makruh dan ia harus mandi 7 kali.' },
      { id: 'e', text: 'Puasanya sah jika ia tidak mandi junub hingga Maghrib.' }
    ],
    correctOptionId: 'b',
    explanation: 'Keluarnya mani yang membatalkan puasa disyaratkan terjadi karena mubasyarah (persentuhan langsung/onani secara sengaja). Adapun mimpi basah saat tidur tidak membatalkan puasa karena di luar ikhtiar manusia.',
    dalil: 'HR. Abu Dawud no. 2376: "Tsalātsun lā yufthirnash shā\'ima: al-hijāmah, wal qai\', wal ihtilām".'
  },
  {
    id: 'pq_15',
    question: 'Apakah yang dimaksud dengan "Yaumusy Syakk" (Hari Keraguan) yang diharamkan untuk berpuasa?',
    options: [
      { id: 'a', text: 'Hari tanggal 1 Ramadhan saat hilal sudah terlihat jelas.' },
      { id: 'b', text: 'Hari tanggal 30 Sya\'ban ketika orang-orang membicarakan rukyatul hilal namun kesaksiannya tidak terbukti secara syar\'i (tertutup mendung/saksi tidak adil).' },
      { id: 'c', text: 'Hari Jumat saat bertepatan dengan tanggal ganjil.' },
      { id: 'd', text: 'Hari raya Idul Fitri.' },
      { id: 'e', text: 'Hari pergantian tahun baru hijriyah.' }
    ],
    correctOptionId: 'b',
    explanation: 'Hari syak adalah tanggal 30 Sya\'ban ketika hilal dibicarakan namun tidak ada bukti rukyat yang sah menurut hakim syariat. Ammar bin Yasir ra. berkata: "Barangsiapa berpuasa pada hari yang diragukan manusia, maka ia telah mendurhakai Abul Qasim (Nabi Muhammad SAW)".',
    dalil: 'HR. Abu Dawud no. 2334 dan At-Tirmidzi no. 686.'
  },
  {
    id: 'pq_16',
    question: 'Bagaimanakah hukum memakai obat tetes mata (Eye Drops) saat sedang berpuasa menurut ketetapan fuqaha mu\'tabar?',
    options: [
      { id: 'a', text: 'Membatalkan puasa karena rasa pahit obat terasa di pangkal tenggorokan.' },
      { id: 'b', text: 'TIDAK MEMBATALKAN puasa, karena mata bukan merupakan rongga terbuka alami (bukan jauf maftūh) dan obat meresap melalui pori-pori halus.' },
      { id: 'c', text: 'Membatalkan puasa khusus di siang hari.' },
      { id: 'd', text: 'Wajib mengqadha puasa jika matanya berkedip.' },
      { id: 'e', text: 'Hanya boleh digunakan saat tidur.' }
    ],
    correctOptionId: 'b',
    explanation: 'Mata bukan rongga terbuka (jauf maftuh). Masuknya zat cair ke mata tidak membatalkan puasa menurut Mazhab Syafi\'i, meskipun bekas rasa pahit obat terasa di kerongkongan karena itu terserap lewat pori-pori bukan lubang terbuka.',
    dalil: 'Kitab Al-Majmu\' Syarah Al-Muhadzdzab juz 6 hal. 313 & Fathul Wahhab.'
  },
  {
    id: 'pq_17',
    question: 'Seseorang lupa bahwa dirinya sedang berpuasa Ramadhan. Ia makan sepiring nasi padang dan minum segelas es teh hingga kenyang. Sesaat setelah selesai makan, ia baru teringat bahwa hari ini sedang berpuasa. Bagaimanakah status puasanya?',
    options: [
      { id: 'a', text: 'Puasanya batal secara mutlak karena jumlah makanan yang masuk sangat banyak.' },
      { id: 'b', text: 'Puasanya tetap SAH dan ia wajib melanjutkan puasanya, karena makanan tersebut adalah rizki yang diberikan Allah kepadanya.' },
      { id: 'c', text: 'Puasanya sah tetapi wajib membayar denda fidyah beras.' },
      { id: 'd', text: 'Ia wajib memuntahkan kembali seluruh makanan tersebut.' },
      { id: 'e', text: 'Puasanya batal dan terkena kaffarah berat.' }
    ],
    correctOptionId: 'b',
    explanation: 'Rasulullah SAW bersabda: "Barangsiapa yang lupa padahal ia sedang berpuasa, lalu ia makan atau minum, maka hendaklah ia menyempurnakan puasanya, karena sesungguhnya Allah-lah yang memberinya makan dan minum".',
    dalil: 'HR. Bukhari no. 1933 dan Muslim no. 1155 dari Abu Hurairah ra.'
  },
  {
    id: 'pq_18',
    question: 'Seorang wanita haid mendapati darah haidnya menetes keluar pada pukul 17.58, yakni 2 menit sebelum kumandang adzan Maghrib (sebelum matahari terbenam sempurna). Bagaimanakah status puasa wanita tersebut pada hari itu?',
    options: [
      { id: 'a', text: 'Puasanya tetap sah karena darah keluar sudah mendekati waktu berbuka.' },
      { id: 'b', text: 'Puasanya BATAL seketika, dan ia wajib mengqadha hari tersebut setelah bulan Ramadhan usai.' },
      { id: 'c', text: 'Puasanya sah 99% dan mendapat pahala penuh.' },
      { id: 'd', text: 'Ia cukup membayar fidyah tanpa perlu mengqadha.' },
      { id: 'e', text: 'Puasanya menjadi makruh tanzih.' }
    ],
    correctOptionId: 'b',
    explanation: 'Syarat sah puasa adalah suci dari haid sepanjang waktu siang (dari terbit fajar hingga matahari terbenam sempurna). Keluarnya darah haid walau sesaat sebelum matahari terbenam membatalkan puasa hari itu secara mutlak.',
    dalil: 'Kitab Matan Taqrib & Safinatun Najah Bab Mubthilatush Shiyam.'
  },
  {
    id: 'pq_19',
    question: 'Apakah hukum mencium (qublah) istri bagi orang yang sedang berpuasa di siang hari?',
    options: [
      { id: 'a', text: 'Haram mutlak bagi semua orang.' },
      { id: 'b', text: 'Boleh/mubah bagi orang yang mampu menahan syahwatnya (seperti orang tua), dan MAKRUH bagi pemuda yang dikhawatirkan membangkitkan syahwat hingga keluar mani atau terjerumus jima\'.' },
      { id: 'c', text: 'Sunnah muakkadah sebelum shalat Zhuhur.' },
      { id: 'd', text: 'Membatalkan puasa meskipun tidak keluar mani.' },
      { id: 'e', text: 'Wajib membayar kaffarah 1 mud.' }
    ],
    correctOptionId: 'b',
    explanation: 'Nabi SAW mencium istrinya saat sedang berpuasa karena beliau orang yang paling mampu menguasai hawa nafsunya. Fuqaha menetapkan: mencium istri makruh bagi orang yang bergejolak syahwatnya dan mubah bagi yang aman dari syahwat.',
    dalil: 'HR. Bukhari no. 1927 dan Muslim no. 1106 dari Aisyah ra.'
  },
  {
    id: 'pq_20',
    question: 'Berikut ini adalah perkara-perkara yang DISUNNAHKAN saat seseorang menunaikan ibadah puasa, KECUALI:',
    options: [
      { id: 'a', text: 'Menyegerakan berbuka puasa (Ta\'jīlul Fithr) begitu yakin matahari telah terbenam.' },
      { id: 'b', text: 'Berbuka dengan ruthab (kurma basah), tamr (kurma kering), atau seteguk air putih.' },
      { id: 'c', text: 'Mengakhirkan santap sahur (Ta\'khīrus Sahūr) menjelang terbit fajar shadiq.' },
      { id: 'd', text: 'Memperbanyak sedekah dan tadarus membaca Al-Qur\'an.' },
      { id: 'e', text: 'Menghabiskan waktu dengan tidur seharian penuh dari Subuh hingga Maghrib tanpa shalat.' }
    ],
    correctOptionId: 'e',
    explanation: 'Sunnah puasa: menyegerakan berbuka, berbuka dengan kurma/air, membaca doa berbuka, mengakhirkan sahur, bersedekah, memberi makan orang berbuka, dan memperbanyak tilawah. Tidur seharian hingga meninggalkan shalat fardhu adalah keharaman dan merusak pahala puasa.',
    dalil: 'HR. Bukhari no. 1957 dan Muslim no. 1098: "Lā yazālun nāsu bi khairin mā \'ajjalul fithr".'
  },
  {
    id: 'pq_21',
    question: 'Apakah doa berbuka puasa yang diajarkan oleh Rasulullah SAW yang menegaskan hilangnya dahaga dan tetapnya pahala di sisi Allah?',
    options: [
      { id: 'a', text: '"Dzāhabazhzhamā\'u wabtallatil \'urūqu wa tsabatal ajru in syā\'allāh".' },
      { id: 'b', text: '"Allāhumma laka shumtu wa bika āmantu...".' },
      { id: 'c', text: '"Rabbanā ātinā fid dunyā hasanah...".' },
      { id: 'd', text: '"Astaghfirullāhal \'azhīm".' },
      { id: 'e', text: '"Bismillāhir rahmānir rahīm" saja.' }
    ],
    correctOptionId: 'a',
    explanation: 'Doa shahih yang diajarkan Nabi SAW saat berbuka puasa: "Dzahabazh zhama\'u wabtallatil \'uruqu wa tsabatal ajru in sya\'allah" (Telah hilang dahaga, telah basah tenggorokan, dan telah tetap pahala insya Allah).',
    dalil: 'HR. Abu Dawud no. 2357 dan An-Nasa\'i dari Ibnu Umar ra.'
  },
  {
    id: 'pq_22',
    question: 'Seorang pasien yang menderita asma menggunakan alat semprot inhaler (Metered Dose Inhaler/MDI) yang disemprotkan melalui mulut ke saluran pernapasan. Bagaimanakah tinjauan hukum fiqih Mazhab Syafi\'i klasik terhadap penggunaan inhaler semprot gas berbutir cair tersebut?',
    options: [
      { id: 'a', text: 'Puasanya sah secara mutlak tanpa syarat.' },
      { id: 'b', text: 'Membatalkan puasa menurut kaidah klasik Syafi\'iyyah karena ada zat zat cair obat yang masuk ke tenggorokan dan rongga paru-paru; pasien mengambil rukhshah berbuka jika darurat lalu mengqadha/fidyah.' },
      { id: 'c', text: 'Inhaler dihukumi seperti siwak.' },
      { id: 'd', text: 'Pasien dikenai denda dam 1 kambing.' },
      { id: 'e', text: 'Puasanya batal dan terkena kaffarah jima\'.' }
    ],
    correctOptionId: 'b',
    explanation: 'Dalam kaidah fiqih Mazhab Syafi\'i, inhaler semprotan aerosol mengandung butiran cairan obat yang nyata (\'ain) yang terhirup masuk melewati pangkal tenggorokan menuju paru-paru, sehingga membatalkan puasa. Pasien yang sesak asma boleh berbuka demi keselamatan jiwa lalu mengqadha setelah sembuh.',
    dalil: 'Kitab I\'anatut Thalibin juz 2 hal. 230 & Fatwa Lembaga Fiqih Islam.'
  },
  {
    id: 'pq_23',
    question: 'Bagaimanakah hukum berpuasa pada hari Jum\'at secara TUNGGAL (hanya berpuasa pada hari Jum\'at saja tanpa diiringi puasa pada hari Kamis sebelumnya atau hari Sabtu setelahnya)?',
    options: [
      { id: 'a', text: 'Sunnah muakkadah karena Jum\'at adalah hari mulia.' },
      { id: 'b', text: 'MAKRUH TANZIH, berdasarkan larangan tegas dari Rasulullah SAW.' },
      { id: 'c', text: 'Wajib bagi penuntut ilmu.' },
      { id: 'd', text: 'Membatalkan iman mushalli.' },
      { id: 'e', text: 'Mubah tanpa ada catatan makruh.' }
    ],
    correctOptionId: 'b',
    explanation: 'Makruh mengkhususkan hari Jumat untuk berpuasa sunnah secara tunggal, kecuali jika diiringi puasa hari sebelumnya (Kamis) atau hari sesudahnya (Sabtu), atau bertepatan dengan puasa rutin (seperti hari Arafah atau Daud).',
    dalil: 'HR. Bukhari no. 1985 dan Muslim no. 1144: "Lā yashumannā ahadukum yaumal jum\'ati illā an yashūma yauman qablahū aw yauman ba\'dah".'
  },
  {
    id: 'pq_24',
    question: 'Apakah hukum bagi orang yang berpuasa membersihkan gigi menggunakan Siwak atau sikat gigi setelah tergelincirnya matahari (waktu Zhuhur hingga Maghrib) menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Sunnah muakkadah sepanjang hari.' },
      { id: 'b', text: 'MAKRUH, karena menghilangkan aroma bau mulut orang berpuasa (khulūf) yang dicintai Allah SWT.' },
      { id: 'c', text: 'Membatalkan puasa seketika.' },
      { id: 'd', text: 'Wajib bagi yang hendak shalat Ashar.' },
      { id: 'e', text: 'Haram dan berdosa.' }
    ],
    correctOptionId: 'b',
    explanation: 'Dalam Mazhab Syafi\'i, bersiwak makruh setelah zawal (waktu Zhuhur ke atas) bagi orang yang berpuasa, berdasarkan hadits: "Sungguh aroma mulut orang yang berpuasa lebih harum di sisi Allah daripada aroma minyak kesturi" (HR. Bukhari & Muslim).',
    dalil: 'Kitab Matan Al-Ghayah wat Taqrib Bab As-Siwak & HR. Bukhari no. 1894.'
  },
  {
    id: 'pq_25',
    question: 'Pemberian makan fidyah puasa bagi fakir miskin diwajibkan menggunakan bahan makanan pokok mentah (seperti beras di Indonesia). Berapakah takaran minimal fidyah yang sah untuk setiap satu hari puasa yang ditinggalkan?',
    options: [
      { id: 'a', text: '1 Mud beras (setara dengan ± 675 gram atau 0,675 kg beras).' },
      { id: 'b', text: '1 Sha\' beras (± 2,5 kg beras).' },
      { id: 'c', text: '5 bungkus nasi kotak mewah.' },
      { id: 'd', text: 'Uang senilai Rp 1.000.000 per hari.' },
      { id: 'e', text: 'Setengah butir kurma.' }
    ],
    correctOptionId: 'a',
    explanation: 'Kadar fidyah puasa menurut Mazhab Syafi\'i adalah 1 Mud makanan pokok (beras) per hari yang ditinggalkan. Satu mud setara dengan seperempat sha\', yaitu sekitar 675 gram (0,675 kg) beras.',
    dalil: 'Kitab Fathul Qarib Al-Mujib & Al-Majmu\' juz 6 hal. 368.'
  }
];

const contentPuasa = `import { PuasaQuizQuestion } from '../../types/puasa';

export const PUASA_QUIZ: PuasaQuizQuestion[] = ${JSON.stringify(puasaQuestions, null, 2)};
`;

fs.writeFileSync('src/data/quizzes/puasaQuizData.ts', contentPuasa);
console.log('Successfully generated src/data/quizzes/puasaQuizData.ts with 25 questions');
