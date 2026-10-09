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

export { PUASA_QUIZ } from './quizzes/puasaQuizData';
