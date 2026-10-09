import { HududItem, HududQuizQuestion } from '../types/hudud';

export const HUDUD_LIST: HududItem[] = [
  // 1. ZINA
  {
    id: 'zina',
    name: '1. Had Zina (حَدُّ الزِّنَا)',
    nameArabic: 'حَدُّ الزِّنَا',
    definition: 'Hubungan persetubuhan seksual biologis antara laki-laki dan perempuan di luar ikatan pernikahan yang sah dan tanpa syubhat kepemilikan.',
    hukumanSyariat: '1) Pelaku Muhshan (pernah/sudah menikah sah): Hukuman Mati RAJAM (dilempari batu hingga meninggal). 2) Pelaku Ghairu Muhshan (belum pernah menikah sah): Didera CAMBUK 100 KALI JILID dan DIASINGKAN (Taghrīb) selama 1 tahun.',
    syaratPenjatuhan: [
      'Pelaku Mukallaf (baligh, berakal sehat, dan atas kehendak sendiri tanpa paksaan/bukan korban perkosaan).',
      'Telah terjadi persetubuhan nyata (tenggelamnya hasyafah ke dalam kemaluan).',
      'Pembuktian yang sangat ketat: Menghadirkan 4 ORANG SAKSI LAKI-LAKI MUSLIM ADIL yang melihat secara langsung dan detail persetubuhan tersebut.',
      'ATAU adanya pengakuan sukarela (Iqrār) dari pelaku sebanyak 4 kali berturut-turut tanpa paksaan.',
    ],
    faktorPenggugur: [
      'Adanya unsur paksaan (korban perkosaan bebas mutlak dari had).',
      'Jumlah saksi kurang dari 4 orang (para saksi yang kurang justru dicambuk had Qadzaf 80 jilid).',
      'Salah satu saksi mencabut kesaksiannya sebelum eksekusi.',
      'Pelaku menarik kembali pengakuannya (rujū\' \'anil iqrār) sebelum atau saat eksekusi rajam.',
      'Adanya syubhat akad nikah (misal nikah tanpa wali karena ketidaktahuan).',
    ],
    dalil: 'QS. An-Nūr: 2 (had cambuk 100x), Hadits Sahih Bukhari & Muslim tentang Rajam (Kisah Ma\'iz dan Al-Ghamidiyyah).',
  },

  // 2. QADZAF
  {
    id: 'qadzaf',
    name: '2. Had Qadzaf (Tuduhan Zina Palsu)',
    nameArabic: 'حَدُّ القَذْف',
    definition: 'Menuduh seseorang yang baik-baik (Muhshan/Muhshanah: muslim, baligh, berakal, merdeka, dan terjaga kehormatannya) telah berbuat zina, atau menuduh bahwa anak seseorang bukan anak kandungnya tanpa bukti 4 saksi adil.',
    hukumanSyariat: 'Tiga sanksi sekaligus (QS. An-Nur: 4): 1) Didera CAMBUK 80 KALI JILID; 2) Hak kesaksiannya DITOLAK SELAMANYA dalam urusan hukum; 3) Dicap resmi sebagai orang FASIK.',
    syaratPenjatuhan: [
      'Penuduh baligh, berakal sehat, dan sengaja melontarkan tuduhan zina.',
      'Korban yang dituduh berstatus Muhshan (terjaga kehormatannya dan bersih dari perbuatan keji).',
      'Lafaz tuduhan jelas (*Sharīh*) seperti: "Kamu pezina!", atau sindiran (*Kināyah*) dengan niat menuduh.',
      'Penuduh GAGAL menghadirkan 4 saksi laki-laki adil di hadapan sidang pengadilan.',
    ],
    faktorPenggugur: [
      'Penuduh berhasil membuktikan tuduhannya dengan menghadirkan 4 orang saksi laki-laki adil.',
      'Korban yang dituduh memaafkan penuduh sebelum perkara diajukan ke pengadilan.',
      'Jika penuduh adalah suami terhadap istrinya, had qadzaf gugur apabila suami melakukan sumpah LI\'ĀN (4x bersumpah demi Allah bahwa ia benar + 1x sumpah memohon laknat Allah jika berdusta).',
    ],
    dalil: 'QS. An-Nūr: 4: "Dan orang-orang yang menuduh perempuan-perempuan yang baik (berzina) dan mereka tidak mendatangkan empat orang saksi, maka deralah mereka delapan puluh kali deraan, dan janganlah kamu terima kesaksian mereka untuk selama-lamanya...".',
  },

  // 3. SARIQAH (MENCURI)
  {
    id: 'sariqah',
    name: '3. Had Mencuri (As-Sariqah)',
    nameArabic: 'حَدُّ السَّرِقَة',
    definition: 'Mengambil harta orang lain yang berharga secara diam-diam dan sembunyi-sembunyi dari tempat penyimpanan yang semestinya (*Hirz*).',
    hukumanSyariat: 'Hukuman POTONG TANGAN (Qath\'ul Yad): 1) Pencurian pertama: potong tangan kanan hingga pergelangan; 2) Pencurian kedua: potong kaki kiri hingga mata kaki; 3) Pencurian ketiga: potong tangan kiri; 4) Pencurian keempat: potong kaki kanan; 5) Pencurian selanjutnya: dipenjara/ta\'zīr sampai bertobat.',
    syaratPenjatuhan: [
      'Harta yang dicuri mencapai NISHAB: minimal 1/4 Dinar Emas (sekitar 1,0625 gram emas murni) atau 3 Dirham perak.',
      'Harta diambil dari HIRZ (tempat penyimpanan yang layak dan terkunci aman, seperti lemari besi, brankas, rumah terkunci).',
      'Pencurian dilakukan secara sembunyi-sembunyi (bukan merampas terang-terangan/Ghasab atau mencopet/Ikhtilās yang sanksinya ta\'zir).',
      'Harta yang dicuri bernilai syar\'i (mencuri babi, anjing, atau khamr tidak dipotong tangan).',
      'Pelaku tidak memiliki syubhat kepemilikan atas harta tersebut.',
    ],
    faktorPenggugur: [
      'Harta yang dicuri kurang dari nishab 1/4 Dinar emas.',
      'Harta diletakkan di tempat terbuka yang teledor (bukan di dalam Hirz).',
      'Pencurian terjadi di tengah bencana KELAPARAN DARURAT (kebijakan Khalifah Umar bin Khattab saat tahun paceklik/\'Āmur Ramādah).',
      'Pencurian antara orang tua dan anak (karena ada syubhat kepemilikan harta: "Anta wa māluka li-abīka").',
      'Pemilik barang menghibahkan atau memaafkan sebelum perkara dibawa ke pengadilan.',
    ],
    dalil: 'QS. Al-Mā\'idah: 38 & HR. Bukhari no. 6789 ("Tangan pencuri dipotong pada pencurian senilai seperempat dinar atau lebih").',
  },

  // 4. SYURBUL KHAMR
  {
    id: 'khamr',
    name: '4. Had Meminum Minuman Keras (Syurbul Khamr)',
    nameArabic: 'حَدُّ شُرْبِ الخَمْر',
    definition: 'Mengkonsumsi zat cair, padat, atau obat-obatan memabukkan (*Muskir*) yang menghilangkan akal sehat, baik dalam jumlah banyak maupun sedikit.',
    hukumanSyariat: 'Didera CAMBUK SEBANYAK 40 KALI JILID menurut Mazhab Syafi\'i (berdasarkan ketetapan Rasulullah SAW & Abu Bakar), atau boleh ditambah menjadi 80 KALI JILID sebagai ta\'zir kemaslahatan menurut ijtihad Umar bin Khattab dan Jumhur Ulama.',
    syaratPenjatuhan: [
      'Pelaku beragama Islam, baligh, dan berakal sehat.',
      'Meminum atas kehendak sendiri secara sadar (bukan karena dipaksa atau tersedak darurat saat tidak ada air lain).',
      'Mengetahui bahwa yang diminumnya adalah zat memabukkan (khamr).',
      'Pembuktian: Adanya pengakuan sukarela pelaku ATAU kesaksian 2 orang saksi laki-laki muslim yang adil.',
    ],
    faktorPenggugur: [
      'Diminum dalam kondisi terpaksa/dipaksa di bawah ancaman pembunuhan.',
      'Ketidaktahuan bagi orang yang baru masuk Islam (*Hadītsu \'ahdin bil Islām*) bahwa zat tersebut adalah khamr.',
      'Kondisi darurat medis menurut sebagian ulama jika benar-benar tidak ada obat lain yang dapat menyelamatkan nyawanya.',
    ],
    dalil: 'HR. Muslim no. 1706 & HR. Abu Dawud no. 4480 tentang hukuman cambuk 40 kali bagi peminum khamr.',
  },

  // 5. BUGHAT (PEMBERONTAKAN)
  {
    id: 'bughat',
    name: '5. Had Bughāt / Makar (Pemberontakan Bersenjata)',
    nameArabic: 'حَدُّ البُغَاة',
    definition: 'Gerakan sekelompok kaum muslimin yang memberontak dan membangkang terhadap Pemerintahan/Kepala Negara Islam yang sah dan adil dengan menggunakan kekuatan senjata dan memiliki ideologi takwil yang keliru.',
    hukumanSyariat: 'DIPERANGI (Qitālul Bughāt) oleh pemerintah demi memulihkan stabilitas negara, namun dengan ETIKA PERANG KHUSUS: bukan untuk dibasmi, melainkan untuk menyadarkan dan mengembalikan mereka ke barisan persatuan umat.',
    syaratPenjatuhan: [
      'Memiliki KEKUATAN & KELOMPOK BERSENJATA (*Syaukah*).',
      'Keluar dari ketaatan terhadap Kepala Negara/Pemerintah yang sah.',
      'Memiliki TAKWIL (dalih/alasan ideologis) tertentu meskipun takwil tersebut batil/keliru.',
      'Memiliki seorang PEMIMPIN (Amīr) yang ditaati dalam barisan pemberontak.',
    ],
    faktorPenggugur: [
      'Tahapan wajib penanganan sebelum perang: 1) Utusan dialog dan tabayyun klarifikasi syubhat; 2) Diajak berdamai dan kembali taat; 3) Diberi peringatan/ultimatum.',
      'Jika mereka meletakkan senjata dan menyatakan taubat kembali taat, maka PERANG WAJIB DIHENTIKAN SEKETIKA.',
      'ETIKA PERANG BUGHAT: Haram mengejar pemberontak yang melarikan diri, haram membunuh yang terluka/menyerah, dan harta mereka TIDAK BOLEH dijadikan rampasan perang (Ghanimah).',
    ],
    dalil: 'QS. Al-Hujurāt: 9: "Dan jika ada dua golongan orang-orang beriman berperang, maka damaikanlah antara keduanya. Jika salah satu dari keduanya berbuat zalim terhadap yang lain, maka perangilah golongan yang berbuat zalim itu sehingga golongan itu kembali kepada perintah Allah...".',
  },
];

export { HUDUD_QUIZ } from './quizzes/hududQuizData';
