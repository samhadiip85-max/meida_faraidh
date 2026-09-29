import { PuasaQuizQuestion, PuasaSunnahItem } from '../types/puasa';

export const PEMBATAL_PUASA = [
  {
    number: 1,
    title: 'Memasukkan Benda ke Lubang Terbuka',
    desc: 'Memasukkan sesuatu zat (\'ain) ke dalam rongga tubuh melalui lubang terbuka (mulut, hidung hingga pangkal, telinga, kemaluan, atau dubur) secara sengaja dan mengetahui keharamannya.',
  },
  {
    number: 2,
    title: 'Muntah dengan Sengaja',
    desc: 'Sengaja memicu muntah (misal memasukkan jari ke tenggorokan). Jika muntah terjadi tanpa sengaja karena mual sakit, puasa tetap sah asalkan tidak menelan kembali muntahannya.',
  },
  {
    number: 3,
    title: 'Bersetubuh (Jima\') di Siang Hari',
    desc: 'Melakukan hubungan suami istri di siang hari Ramadhan secara sengaja. Puasa batal dan pelaku (laki-laki) terkena denda berat (Kaffarah \'Uzhma).',
  },
  {
    number: 4,
    title: 'Mengeluarkan Air Mani dengan Sengaja',
    desc: 'Mengeluarkan sperma karena onani/masturbasi atau persentuhan kulit secara langsung. Adapun mimpi basah (ihtilam) di siang hari TIDAK membatalkan puasa karena di luar kendali.',
  },
  {
    number: 5,
    title: 'Mengalami Haid atau Nifas',
    desc: 'Keluarnya darah haid atau nifas di tengah hari, meskipun hanya sesaat sebelum terbenam matahari (waktu maghrib).',
  },
  {
    number: 6,
    title: 'Gila (Junun)',
    desc: 'Hilang akal sehat atau gila, meskipun hanya berlangsung sekejap di siang hari.',
  },
  {
    number: 7,
    title: 'Pingsan atau Mabuk Sepanjang Hari Penuh',
    desc: 'Jika pingsan atau hilang kesadaran dari fajar shadiq hingga maghrib tanpa sempat sadar sekejap pun, maka puasanya tidak sah.',
  },
  {
    number: 8,
    title: 'Murtad (Keluar dari Agama Islam)',
    desc: 'Keluar dari Islam, baik dengan perbuatan, ucapan kufur, maupun niat di dalam hati (wal\'iyadzu billah).',
  },
];

export const PUASA_SUNNAH_LIST: PuasaSunnahItem[] = [
  {
    id: 'syawal',
    name: 'Puasa 6 Hari di Bulan Syawal',
    timing: 'Mulai tanggal 2 Syawal hingga akhir bulan Syawal (diutamakan berturut-turut).',
    virtue: 'Pahalanya setara dengan berpuasa selama satu tahun penuh.',
    dalil: 'Sabda Nabi SAW: "Man shāma Ramadhāna tsumma atba\'ahū sittan min Syawwāl kāna ka-shiyāmid dahri" (HR. Muslim no. 1164).',
  },
  {
    id: 'arafah',
    name: 'Puasa Hari Arafah (9 Dzulhijjah)',
    timing: 'Tanggal 9 Dzulhijjah (bagi yang tidak sedang menunaikan ibadah haji di Arafah).',
    virtue: 'Menghapuskan dosa-dosa kecil setahun yang lalu dan setahun yang akan datang.',
    dalil: 'Sabda Nabi SAW: "Yukaffirus sanatal māzhiyata wal-bāqiyah" (HR. Muslim no. 1162).',
  },
  {
    id: 'asyura',
    name: 'Puasa Tasu\'a & Asyura (9 & 10 Muharram)',
    timing: 'Tanggal 9 (Tasu\'a) dan tanggal 10 Muharram (Asyura).',
    virtue: 'Puasa Asyura menghapuskan dosa setahun yang lalu, disunnahkan berpuasa hari ke-9 untuk menyelisihi kaum Yahudi.',
    dalil: 'HR. Muslim no. 1162 & 1134.',
  },
  {
    id: 'senin_kamis',
    name: 'Puasa Hari Senin dan Kamis',
    timing: 'Setiap hari Senin dan Kamis sepanjang tahun.',
    virtue: 'Hari di mana seluruh catatan amal kebaikan diangkat dan dilaporkan kepada Allah SWT.',
    dalil: 'Sabda Nabi SAW: "Amal-amal manusia dilaporkan pada hari Senin dan Kamis, maka aku suka amalku dilaporkan saat aku sedang berpuasa" (HR. Tirmidzi).',
  },
  {
    id: 'ayyamul_bidh',
    name: 'Puasa Ayyamul Bidh (Hari-hari Putih)',
    timing: 'Tanggal 13, 14, dan 15 setiap bulan qamariyah / hijriyah.',
    virtue: 'Pahala seperti berpuasa sepanjang tahun karena setiap kebaikan dilipatgandakan 10 kali.',
    dalil: 'HR. Bukhari no. 1981 & Muslim no. 721.',
  },
  {
    id: 'daud',
    name: 'Puasa Nabi Daud \'Alaihissalam',
    timing: 'Sehari berpuasa dan sehari tidak berpuasa secara bergantian.',
    virtue: 'Puasa sunnah yang paling dicintai oleh Allah SWT dan paling utama.',
    dalil: 'Sabda Nabi SAW: "Ahabbus shiyāmi ilallāhi shiyāmu Dāwūda" (HR. Bukhari & Muslim).',
  },
];

export const HARI_HARAM_PUASA = [
  {
    name: '1. Hari Raya Idul Fitri (1 Syawal)',
    desc: 'Hari kemenangan dan berbuka bagi kaum muslimin setelah sebulan penuh berpuasa.',
  },
  {
    name: '2. Hari Raya Idul Adha (10 Dzulhijjah)',
    desc: 'Hari raya kurban; kaum muslimin diperintahkan menyembelih hewan dan makan dari hasil kurban.',
  },
  {
    name: '3. Hari-Hari Tasyriq (11, 12, dan 13 Dzulhijjah)',
    desc: 'Tiga hari setelah Idul Adha. Sabda Nabi SAW: "Hari-hari tasyriq adalah hari makan, minum, dan berdzikir mengingat Allah" (HR. Muslim).',
  },
  {
    name: '4. Hari Syak (30 Sya\'ban yang diragukan hilal)',
    desc: 'Diharamkan berpuasa mendahului Ramadhan pada hari syak, kecuali bagi orang yang memiliki kebiasaan puasa sunnah (seperti Senin-Kamis atau Daud) atau sedang mengqadha\' puasa.',
  },
];

export const PUASA_QUIZ: PuasaQuizQuestion[] = [
  {
    id: 'pq_1',
    question: 'Kapankah batas waktu berniat yang diwajibkan (Tabyitun Niyyah) untuk puasa wajib seperti puasa Ramadhan, qadha\', atau nadzar menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Boleh dilakukan kapan saja sebelum shalat Dzuhur' },
      { id: 'b', text: 'Wajib dilakukan pada malam hari antara waktu Maghrib hingga sebelum terbit Fajar Shubuh' },
      { id: 'c', text: 'Cukup berniat sekali untuk sebulan penuh di awal malam Ramadhan' },
      { id: 'd', text: 'Wajib berniat tepat saat azan Shubuh berkumandang' },
    ],
    correctOptionId: 'b',
    explanation: 'Dalam Mazhab Syafi\'i, untuk puasa fardhu (Ramadhan, qadha, nadzar, kaffarah), wajib memperbarui niat setiap malam hari (Tabyitun Niyyah) sebelum terbit fajar shadiq (waktu Shubuh) untuk tiap-tiap hari puasa.',
    dalil: 'Sabda Nabi SAW: "Man lam yubayyitis shiyāma qablal fajri falā shiyāma lahū" (HR. Abu Dawud, Tirmidzi, dan An-Nasa\'i).',
  },
  {
    id: 'pq_2',
    question: 'Bagaimanakah ketentuan kewajiban bagi seorang ibu hamil atau menyusui yang tidak berpuasa Ramadhan semata-mata karena KHOUF / KHAWATIR terhadap KESELAMATAN BAYINYA saja?',
    options: [
      { id: 'a', text: 'Hanya wajib mengqadha\' puasa saja tanpa fidyah' },
      { id: 'b', text: 'Hanya wajib membayar fidyah saja tanpa qadha\'' },
      { id: 'c', text: 'Wajib mengqadha\' puasa DAN wajib membayar Fidyah sekaligus' },
      { id: 'd', text: 'Bebas dari qadha\' dan bebas dari fidyah' },
    ],
    correctOptionId: 'c',
    explanation: 'Dalam Mazhab Syafi\'i, jika ibu hamil atau menyusui berbuka semata-mata karena mengkhawatirkan keselamatan bayinya (takut keguguran atau ASI kering), maka ia WAJIB MENGQADHA\' puasanya dan sekaligus WAJIB MEMBAYAR FIDYAH (1 mud beras per hari). Namun jika ia khawatir terhadap keselamatan dirinya sendiri atau khawatir terhadap diri dan bayinya sekaligus, ia hanya wajib qadha\' saja tanpa fidyah.',
    dalil: 'Kitab Matan Ghayah wat Taqrib dan Al-Majmu\' Syarah Al-Muhadzdzab.',
  },
  {
    id: 'pq_3',
    question: 'Berapakah takaran Fidyah per hari puasa yang ditinggalkan menurut ukuran Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: '1 Mud makanan pokok (sekitar 675 gram / 0.75 kg beras)' },
      { id: 'b', text: '1 Sha\' (2.5 kg beras)' },
      { id: 'c', text: '5 kilogram beras' },
      { id: 'd', text: '10 liter beras' },
    ],
    correctOptionId: 'a',
    explanation: 'Kadar fidyah untuk satu hari puasa yang ditinggalkan adalah 1 Mud makanan pokok setempat (di Indonesia beras), yang setara dengan kurang lebih 675 gram atau 0.675 - 0.75 kg beras untuk diberikan kepada seorang fakir atau miskin.',
    dalil: 'QS. Al-Baqarah: 184 ("Wa \'alalladzīna yuthīqūnahū fidyatun tha\'āmu miskīn").',
  },
  {
    id: 'pq_4',
    question: 'Apakah sanksi Kaffarah \'Uzhma (denda berat) bagi seorang suami yang dengan sengaja merusak puasa Ramadhannya dengan berjima\' (bersetubuh) di siang hari?',
    options: [
      { id: 'a', text: 'Cukup beristighfar dan mengqadha\' 1 hari puasa' },
      { id: 'b', text: 'Memerdekakan budak, jika tidak mampu: puasa 2 bulan berturut-turut, jika tidak mampu: memberi makan 60 orang miskin' },
      { id: 'c', text: 'Membayar denda uang 1 juta rupiah' },
      { id: 'd', text: 'Berpuasa 1 tahun penuh' },
    ],
    correctOptionId: 'b',
    explanation: 'Kaffarah \'Uzhma wajib secara berurutan (tartib): 1. Memerdekakan seorang budak mukmin; jika tidak mampu, 2. Berpuasa selama 2 bulan berturut-turut (60 hari tanpa putus); jika tidak mampu secara fisik, 3. Memberi makan kepada 60 orang miskin (masing-masing 1 mud beras). Selain itu, ia tetap wajib mengqadha\' puasa hari tersebut.',
    dalil: 'Hadits shahih riwayat Abu Hurairah ra. tentang lelaki yang datang kepada Nabi SAW mengeluh celaka (HR. Bukhari no. 1936 & Muslim no. 1111).',
  },
  {
    id: 'pq_5',
    question: 'Manakah di antara hari-hari berikut yang DIHARAMKAN bagi seorang muslim untuk mengerjakan puasa di dalamnya?',
    options: [
      { id: 'a', text: 'Hari Senin dan Kamis' },
      { id: 'b', text: 'Hari Arafah (9 Dzulhijjah)' },
      { id: 'c', text: 'Dua Hari Raya (Idul Fitri & Idul Adha) serta Hari Tasyriq (11, 12, 13 Dzulhijjah)' },
      { id: 'd', text: 'Hari Asyura (10 Muharram)' },
    ],
    correctOptionId: 'c',
    explanation: 'Hari-hari yang diharamkan berpuasa secara mutlak adalah: Hari Raya Idul Fitri (1 Syawal), Hari Raya Idul Adha (10 Dzulhijjah), serta Hari-Hari Tasyriq (11, 12, dan 13 Dzulhijjah). Puasa pada hari-hari ini hukumnya haram dan tidak sah.',
    dalil: 'HR. Bukhari no. 1991 dan HR. Muslim no. 1141 dari Abu Sa\'id Al-Khudri ra.',
  },
];
