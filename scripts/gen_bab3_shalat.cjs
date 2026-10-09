// scripts/gen_bab3_shalat.cjs
const fs = require('fs');

const shalatQuestions = [
  {
    id: 'sq_1',
    question: 'Manakah di antara bacaan shalat berikut yang termasuk ke dalam Rukun Qauli (rukun ucapan) yang wajib dilafalkan hingga minimal terdengar oleh telinga mushalli sendiri?',
    options: [
      { id: 'a', text: 'Doa Iftitah (Wajjahtu wajhiya).' },
      { id: 'b', text: 'Surat Al-Fatihah pada setiap rakaat shalat.' },
      { id: 'c', text: 'Bacaan tasbih saat ruku\' (Subhana rabbiyal \'azhimi wa bihamdih).' },
      { id: 'd', text: 'Doa qunut pada shalat Subuh.' },
      { id: 'e', text: 'Bacaan tasyahhud awal pada rakaat kedua.' }
    ],
    correctOptionId: 'b',
    explanation: 'Rukun Qauli dalam shalat ada lima: (1) Takbiratul Ihram, (2) Membaca Al-Fatihah, (3) Membaca Tasyahhud Akhir, (4) Shalawat atas Nabi SAW pada tasyahhud akhir, dan (5) Salam pertama. Rukun qauli wajib dilafalkan dengan bibir dan terdengar oleh telinga sendiri jika pendengarannya normal.',
    dalil: 'HR. Bukhari no. 756 dan Muslim no. 394: "Lā shalāta liman lam yaqra\' bi fātihatil kitāb".'
  },
  {
    id: 'sq_2',
    question: 'Di antara perkara-perkara dalam shalat berikut ini, manakah yang termasuk kategori Sunnah Ab\'adh (sunnah muakkadah yang dianjurkan untuk ditambal dengan Sujud Sahwi jika terlupa)?',
    options: [
      { id: 'a', text: 'Membaca doa iftitah di awal shalat.' },
      { id: 'b', text: 'Tasyahhud Awal dan membaca shalawat kepada Nabi SAW di dalamnya.' },
      { id: 'c', text: 'Mengangkat kedua tangan saat takbiratul ihram dan ruku\'.' },
      { id: 'd', text: 'Meletakkan tangan kanan di atas pergelangan tangan kiri di dada.' },
      { id: 'e', text: 'Duduk iftirasy pada saat duduk di antara dua sujud.' }
    ],
    correctOptionId: 'b',
    explanation: 'Sunnah Ab\'adh dalam Mazhab Syafi\'i adalah amalan sunnah berbobot tinggi yang apabila tertinggal (baik sengaja maupun lupa) disunnahkan diganti dengan sujud sahwi. Termasuk di dalamnya: tasyahhud awal, duduk tasyahhud awal, shalawat atas nabi di tasyahhud awal, qunut subuh, berdiri qunut, dan shalawat atas keluarga nabi di tasyahhud akhir.',
    dalil: 'Kitab Safinatun Najah Bab Ab\'adhus Shalah & HR. Bukhari no. 829.'
  },
  {
    id: 'sq_3',
    question: 'Zaid sedang shalat Isya. Di rakaat kedua, setelah sujud kedua ia langsung bangkit berdiri ke rakaat ketiga dan lupa duduk tasyahhud awal. Ketika ia telah berdiri tegak dan mulai membaca Al-Fatihah, ia baru teringat. Bagaimanakah tindakan yang tepat menurut fiqih Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Wajib langsung duduk kembali ke tasyahhud awal seketika itu juga.' },
      { id: 'b', text: 'Tidak boleh kembali duduk; ia harus melanjutkan shalatnya dan disunnahkan melakukan sujud sahwi sebelum salam.' },
      { id: 'c', text: 'Shalatnya otomatis batal dan harus mengulang shalat Isya dari awal.' },
      { id: 'd', text: 'Duduk kembali ke tasyahhud awal lalu sujud tilawah.' },
      { id: 'e', text: 'Mengganti rakaat ketiga menjadi rakaat kedua.' }
    ],
    correctOptionId: 'b',
    explanation: 'Jika seseorang telah tegak berdiri untuk rakaat berikutnya, haram baginya kembali duduk tasyahhud awal karena ia telah masuk ke dalam rukun fardhu (berdiri/Fatihah). Jika ia sengaja kembali duduk padahal tahu hukumnya, shalatnya batal. Solusinya: teruskan shalat lalu sujud sahwi sebelum salam.',
    dalil: 'HR. Abu Dawud no. 1036 dan At-Tirmidzi no. 364 dari Al-Mughirah bin Syu\'bah ra.'
  },
  {
    id: 'sq_4',
    question: 'Seseorang yang sedang shalat Zhuhur ragu-ragu di pertengahan shalat: apakah ia saat ini sedang berada di rakaat ketiga atau sudah rakaat keempat. Berdasarkan kaidah baku fiqih, bagaimanakah sikap yang wajib ia ambil?',
    options: [
      { id: 'a', text: 'Mengambil jumlah rakaat yang terbanyak (rakaat ke-4) untuk mempercepat shalat.' },
      { id: 'b', text: 'Mengambil jumlah yang paling sedikit dan meyakinkan (rakaat ke-3), menambah 1 rakaat lagi, lalu sujud sahwi sebelum salam.' },
      { id: 'c', text: 'Membatalkan shalat seketika dan mengambil wudhu ulang.' },
      { id: 'd', text: 'Bertanya kepada orang di dekatnya dengan kode isyarat.' },
      { id: 'e', text: 'Melakukan sujud syukur setelah salam.' }
    ],
    correctOptionId: 'b',
    explanation: 'Kaidah nabawiyyah menegaskan: "Jika salah seorang di antara kalian ragu dalam shalatnya, sehingga tidak tahu apakah sudah tiga atau empat rakaat, hendaklah ia membuang keraguan dan menetapkan di atas apa yang ia yakini (yaitu jumlah terkecil), lalu sujud dua kali sebelum salam".',
    dalil: 'HR. Muslim no. 571 dari Abu Sa\'id Al-Khudri ra.'
  },
  {
    id: 'sq_5',
    question: 'Di antara amalan sunnah berikut, manakah yang merupakan Sunnah Hai\'ah (amalan sunnah yang jika tertinggal TIDAK disunnahkan sujud sahwi)?',
    options: [
      { id: 'a', text: 'Doa qunut pada shalat Subuh.' },
      { id: 'b', text: 'Tasyahhud awal.' },
      { id: 'c', text: 'Membaca surat pendek setelah Al-Fatihah pada dua rakaat pertama.' },
      { id: 'd', text: 'Duduk untuk tasyahhud awal.' },
      { id: 'e', text: 'Membaca shalawat kepada keluarga Nabi pada tasyahhud akhir.' }
    ],
    correctOptionId: 'c',
    explanation: 'Sunnah Hai\'ah adalah sunnah-sunnah pelengkap gerak dan bacaan shalat (seperti mengangkat tangan, doa iftitah, membaca surat, tasbih ruku\'/sujud, iftirasy, tawarruk). Jika tertinggal, tidak disyariatkan sujud sahwi.',
    dalil: 'Matan Al-Ghayah wat Taqrib Bab Hai\'atush Shalah.'
  },
  {
    id: 'sq_6',
    question: 'Kapan sajakah posisi pelaksanaan Sujud Sahwi yang tepat menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Tepat setelah salam kedua ke arah kiri.' },
      { id: 'b', text: 'Setelah selesai membaca tasyahhud akhir dan shalawat, SEBELUM mengucapkan salam pertama.' },
      { id: 'c', text: 'Pada saat sujud terakhir di rakaat penutup shalat.' },
      { id: 'd', text: 'Di luar shalat setelah membaca dzikir istighfar 3 kali.' },
      { id: 'e', text: 'Di antara salam pertama dan salam kedua.' }
    ],
    correctOptionId: 'b',
    explanation: 'Menurut Mazhab Syafi\'i, seluruh sujud sahwi dikerjakan sebanyak dua kali sujud di dalam shalat setelah selesai tasyahhud akhir sebelum salam pertama.',
    dalil: 'HR. Muslim no. 570 dari Abdullah bin Buhainah ra. & Kitab Al-Majmu\' juz 4.'
  },
  {
    id: 'sq_7',
    question: 'Ketika seorang qari\' membaca atau mendengar ayat sajdah (seperti akhir surat An-Najm atau Al-\'Alaq), ia disunnahkan melakukan Sujud Tilawah. Manakah syarat sah sujud tilawah di luar shalat?',
    options: [
      { id: 'a', text: 'Boleh dilakukan tanpa berwudhu dan tanpa menghadap kiblat.' },
      { id: 'b', text: 'Wajib suci dari hadats kecil dan besar, menutup aurat, menghadap kiblat, dan berniat.' },
      { id: 'c', text: 'Harus menunggu waktu shalat fardhu tiba terlebih dahulu.' },
      { id: 'd', text: 'Disyaratkan membaca Al-Fatihah satu kali sebelum sujud.' },
      { id: 'e', text: 'Harus dilakukan secara berjamaah minimal 2 orang.' }
    ],
    correctOptionId: 'b',
    explanation: 'Sujud tilawah di luar shalat dihukumi sebagaimana shalat: mensyaratkan suci dari hadats dan najis, menutup aurat, menghadap kiblat, takbiratul ihram disertai niat, sujud sekali, lalu bangkit dan salam.',
    dalil: 'Kitab Fathul Qarib Al-Mujib Bab Sujudut Tilawah.'
  },
  {
    id: 'sq_8',
    question: 'Bagaimanakah hukum melaksanakan Sujud Syukur saat seseorang sedang berada di dalam pelaksanaan shalat fardhu?',
    options: [
      { id: 'a', text: 'Sunnah muakkadah jika teringat nikmat Allah yang besar.' },
      { id: 'b', text: 'Membatalkan shalat secara mutlak karena menambah rukun sujud yang tidak disyariatkan di dalam shalat.' },
      { id: 'c', text: 'Makruh tanzih tetapi shalatnya tetap sah.' },
      { id: 'd', text: 'Wajib bagi orang yang selamat dari bahaya di dalam shalat.' },
      { id: 'e', text: 'Boleh dilakukan khusus pada shalat sunnah mutlak.' }
    ],
    correctOptionId: 'b',
    explanation: 'Sujud syukur haram dilakukan di dalam shalat dan shalatnya batal seketika bagi orang yang mengetahui keharamannya, karena sujud syukur adalah ibadah tersendiri yang sebabnya berasal dari luar shalat.',
    dalil: 'Kitab Minhajut Thalibin karya Imam An-Nawawi.'
  },
  {
    id: 'sq_9',
    question: 'Berapakah jumlah rakaat shalat Rawatib Mu\'akkadah (shalat sunnah pengiring fardhu yang sangat ditekankan dan selalu dirutinkan oleh Rasulullah SAW)?',
    options: [
      { id: 'a', text: '6 rakaat (2 rakaat sebelum Subuh, 2 rakaat sebelum Maghrib, 2 rakaat sebelum Isya).' },
      { id: 'b', text: '10 rakaat (2 sebelum Subuh, 2 sebelum Zhuhur, 2 setelah Zhuhur, 2 setelah Maghrib, 2 setelah Isya).' },
      { id: 'c', text: '16 rakaat.' },
      { id: 'd', text: '20 rakaat.' },
      { id: 'e', text: '4 rakaat saja sebelum shalat fardhu.' }
    ],
    correctOptionId: 'b',
    explanation: 'Dalam Mazhab Syafi\'i, rawatib mu\'akkadah ada 10 rakaat: 2 rakaat sebelum Subuh, 2 rakaat sebelum Zhuhur, 2 rakaat setelah Zhuhur, 2 rakaat setelah Maghrib, dan 2 rakaat setelah Isya (sebagian riwayat menyebut 12 rakaat dengan 4 rakaat sebelum Zhuhur).',
    dalil: 'HR. Bukhari no. 1180 dan Muslim no. 729 dari Abdullah bin Umar ra.'
  },
  {
    id: 'sq_10',
    question: 'Di antara gerakan shalat berikut, kapankah seorang mushalli disunnahkan mengangkat kedua tangan sejajar dengan telinga (bagi pria) atau dada (bagi wanita)?',
    options: [
      { id: 'a', text: 'Hanya saat takbiratul ihram saja.' },
      { id: 'b', text: 'Saat Takbiratul Ihram, saat hendak Ruku\', saat bangkit dari ruku\' (I\'tidal), dan saat bangkit dari Tasyahhud Awal menuju rakaat ketiga.' },
      { id: 'c', text: 'Saat hendak sujud dan bangkit dari sujud.' },
      { id: 'd', text: 'Saat duduk di antara dua sujud.' },
      { id: 'e', text: 'Setiap kali berganti gerakan dalam seluruh rakaat.' }
    ],
    correctOptionId: 'b',
    explanation: 'Empat tempat disunnahkannya mengangkat tangan dalam shalat: (1) Saat takbiratul ihram, (2) Saat turun menuju ruku\', (3) Saat bangkit dari ruku\' (i\'tidal), dan (4) Saat bangkit berdiri dari tasyahhud awal menuju rakaat ketiga.',
    dalil: 'HR. Bukhari no. 735 dan Muslim no. 390 dari Ibnu Umar ra.'
  },
  {
    id: 'sq_11',
    question: 'Thuma\'ninah (diam sejenak seukuran membaca "Subhanallah") merupakan rukun yang wajib ada di dalam shalat. Pada rukun fi\'li manakah thuma\'ninah WAJIB dipenuhi?',
    options: [
      { id: 'a', text: 'Hanya saat sujud pertama dan sujud kedua.' },
      { id: 'b', text: 'Pada Ruku\', I\'tidal, Sujud, dan Duduk di antara dua sujud.' },
      { id: 'c', text: 'Hanya pada saat berdiri membaca Al-Fatihah.' },
      { id: 'd', text: 'Pada saat takbiratul ihram dan salam.' },
      { id: 'e', text: 'Pada saat menoleh ke kanan dan ke kiri.' }
    ],
    correctOptionId: 'b',
    explanation: 'Thuma\'ninah adalah rukun fardhu pada empat rukun fi\'li: Ruku\', I\'tidal, Sujud, dan Duduk di antara dua sujud. Shalat seseorang tidak sah apabila bergerak cepat laksana patukan ayam tanpa thuma\'ninah.',
    dalil: 'Hadits al-Musi\'u Shalatahu (orang yang buruk shalatnya), HR. Bukhari no. 793.'
  },
  {
    id: 'sq_12',
    question: 'Seorang imam membaca Al-Fatihah, namun ia mengganti harakat dhommah pada lafal "An\'amta" menjadi dhommah "An\'amtu" (sehingga maknanya berubah dari "Engkau beri nikmat" menjadi "Aku beri nikmat"). Bagaimanakah status shalat makmum yang mengetahui kesalahan tersebut?',
    options: [
      { id: 'a', text: 'Shalat makmum tetap sah karena imam menanggung bacaan makmum.' },
      { id: 'b', text: 'Shalat makmum batal jika ia tetap bermakmum, dan makmum wajib segera mufaraqah (memisahkan diri dari imam).' },
      { id: 'c', text: 'Makmum cukup beristighfar dalam hati.' },
      { id: 'd', text: 'Makmum wajib sujud sahwi bersama imam.' },
      { id: 'e', text: 'Shalatnya makruh tanzih dan sah pahalanya.' }
    ],
    correctOptionId: 'b',
    explanation: 'Kaidah qira\'ah Al-Fatihah: Kesalahan harakat (lahn) yang merusak makna (lahn jali) membatalkan keabsahan bacaan Fatihah. Imam yang melakukan lahn jali tidak sah diimami oleh orang yang bacaannya benar, sehingga makmum wajib berniat mufaraqah.',
    dalil: 'Kitab Al-Majmu\' Syarah Al-Muhadzdzab juz 4 hal. 166.'
  },
  {
    id: 'sq_13',
    question: 'Waktu shalat fardhu Zhuhur dimulai sejak tergelincirnya matahari ke arah barat (zawalus syams). Kapankah batas akhir waktu shalat Zhuhur menurut nash syariat?',
    options: [
      { id: 'a', text: 'Saat matahari berada tepat di tengah langit (istiwa\').' },
      { id: 'b', text: 'Ketika panjang bayangan suatu benda sama dengan panjang benda aslinya (ditambah bayangan saat zawal).' },
      { id: 'c', text: 'Ketika mega merah (syafaqul ahmar) menghilang di ufuk barat.' },
      { id: 'd', text: 'Ketika fajar shadiq mulai terbit di ufuk timur.' },
      { id: 'e', text: 'Saat matahari terbenam sempurna.' }
    ],
    correctOptionId: 'b',
    explanation: 'Batas akhir waktu Zhuhur adalah ketika bayangan setiap benda sama panjang dengan ukuran benda aslinya selain bayangan yang ada saat matahari tergelincir (zawal), yang sekaligus menjadi tanda masuknya waktu Ashar.',
    dalil: 'HR. Muslim no. 612 dari Abdullah bin Amr ra. tentang waktu-waktu shalat.'
  },
  {
    id: 'sq_14',
    question: 'Manakah waktu yang DIHARAMKAN untuk melaksanakan shalat sunnah mutlak tanpa sebab terdahulu (tahrim tahriman)?',
    options: [
      { id: 'a', text: 'Setelah terbit fajar shadiq hingga terbit matahari dan setelah shalat Ashar hingga terbenam matahari.' },
      { id: 'b', text: 'Di sepertiga malam terakhir.' },
      { id: 'c', text: 'Antara adzan dan iqamah shalat Maghrib.' },
      { id: 'd', text: 'Pada hari Jumat saat khatib belum naik mimbar.' },
      { id: 'e', text: 'Pada waktu dhuha saat matahari mulai meninggi.' }
    ],
    correctOptionId: 'a',
    explanation: 'Lima waktu terlarang shalat sunnah mutlak: (1) Setelah shalat Subuh hingga matahari terbit, (2) Saat matahari terbit hingga naik setinggi tombak, (3) Saat istiwa\' (kecuali hari Jumat), (4) Setelah shalat Ashar hingga matahari terbenam, dan (5) Saat matahari menjelang terbenam.',
    dalil: 'HR. Bukhari no. 586 dan Muslim no. 827 dari Abu Sa\'id Al-Khudri ra.'
  },
  {
    id: 'sq_15',
    question: 'Bagaimanakah tata cara pelaksanaan Shalat Gerhana Matahari (Kusufus Syams) yang membedakannya secara mendasar dari shalat sunnah dua rakaat lainnya?',
    options: [
      { id: 'a', text: 'Dilakukan dengan 1 kali ruku\' dan 4 kali sujud pada tiap rakaat.' },
      { id: 'b', text: 'Pada tiap rakaat terdapat 2 kali berdiri (2 kali membaca Fatihah dan surat) serta 2 kali ruku\'.' },
      { id: 'c', text: 'Dikerjakan tanpa membaca surat Al-Fatihah sama sekali.' },
      { id: 'd', text: 'Dilaksanakan dengan 4 kali salam dalam waktu 1 jam.' },
      { id: 'e', text: 'Wajib dikerjakan secara sirriyah (bacaan pelan) meskipun gerhana bulan.' }
    ],
    correctOptionId: 'b',
    explanation: 'Karakteristik shalat gerhana (kusuf/khusuf) adalah terdiri dari 2 rakaat, di mana pada setiap rakaat terdapat 2 kali berdiri dengan membaca Fatihah dan surat, serta 2 kali ruku\' yang panjang, lalu 2 kali sujud.',
    dalil: 'HR. Bukhari no. 1044 dan Muslim no. 901 dari Aisyah ra.'
  },
  {
    id: 'sq_16',
    question: 'Seseorang menunaikan shalat Witir sebanyak 3 rakaat. Manakah cara pelaksanaan shalat witir 3 rakaat yang PALING UTAMA (afdlal) menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Melakukan 3 rakaat sekaligus dengan satu salam tanpa tasyahhud awal.' },
      { id: 'b', text: 'Melakukan 3 rakaat dengan dua kali salam: 2 rakaat salam (shalat syafa\'), lalu berdiri menambah 1 rakaat salam.' },
      { id: 'c', text: 'Melakukan 3 rakaat dengan dua tasyahhud mirip shalat Maghrib.' },
      { id: 'd', text: 'Menggabungkan 3 rakaat dalam 1 rakaat panjang.' },
      { id: 'e', text: 'Melakukan 3 rakaat di waktu Zhuhur.' }
    ],
    correctOptionId: 'b',
    explanation: 'Cara witir yang paling utama adalah fashl (memisahkan), yaitu mengerjakan dua rakaat lalu salam, kemudian bangkit mengerjakan satu rakaat lalu salam. Ini berdasarkan amalan Nabi SAW yang memisahkan witirnya dengan salam.',
    dalil: 'HR. Bukhari no. 991 dari Ibnu Umar ra.'
  },
  {
    id: 'sq_17',
    question: 'Jika seseorang tertidur pulas atau lupa sehingga terlewat dari menunaikan shalat fardhu hingga waktunya habis, apakah kewajiban syar\'i yang wajib ia lakukan?',
    options: [
      { id: 'a', text: 'Shalatnya gugur dan ia hanya diwajibkan membayar fidyah.' },
      { id: 'b', text: 'Ia wajib segera mengqadha shalat tersebut seketika ia terbangun atau teringat.' },
      { id: 'c', text: 'Mengqadhanya di waktu shalat yang sama pada keesokan harinya.' },
      { id: 'd', text: 'Cukup memperbanyak sedekah sunnah tanpa qadha.' },
      { id: 'e', text: 'Shalat fardhu tidak dapat diqadha dalam kondisi apa pun.' }
    ],
    correctOptionId: 'b',
    explanation: 'Rasulullah SAW bersabda: "Barangsiapa yang lupa shalat atau tertidur darinya, maka kaffarahnya adalah ia shalat ketika ia mengingatnya, tidak ada kaffarah selain itu".',
    dalil: 'HR. Bukhari no. 597 dan Muslim no. 684 dari Anas bin Malik ra.'
  },
  {
    id: 'sq_18',
    question: 'Apakah hukum membaca Basmalah ("Bismillāhir Rahmānir Rahīm") pada pembukaan surat Al-Fatihah di dalam shalat menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Sunnah muakkadah dan bukan bagian dari surat Al-Fatihah.' },
      { id: 'b', text: 'Rukun fardhu karena Basmalah merupakan ayat pertama dari surat Al-Fatihah yang sah.' },
      { id: 'c', text: 'Makruh dibaca secara jahr (keras).' },
      { id: 'd', text: 'Mubah dan boleh ditinggalkan sesuka hati.' },
      { id: 'e', text: 'Hanya dibaca pada shalat sunnah.' }
    ],
    correctOptionId: 'b',
    explanation: 'Dalam Mazhab Syafi\'i, Basmalah adalah ayat pertama yang sah dari tujuh ayat surat Al-Fatihah. Meninggalkan bacaan basmalah (atau tidak terdengar oleh diri sendiri) membatalkan bacaan Fatihah dan membatalkan shalat.',
    dalil: 'HR. Ad-Daraquthni dan Al-Baihaqi: "Idzā qara\'tumul fātiha faqra\'ū Bismillāhir rahmānir rahīm fa innahā ihdā āyātihā".'
  },
  {
    id: 'sq_19',
    question: 'Berapakah jarak minimal pandangan seorang mushalli saat shalat disunnahkan untuk diarahkan?',
    options: [
      { id: 'a', text: 'Menatap ke arah depan dada.' },
      { id: 'b', text: 'Mengarahkan pandangan ke tempat sujud (mawthi\'us sujud) secara khusyu\'.' },
      { id: 'c', text: 'Menatap ke arah langit dan awan.' },
      { id: 'd', text: 'Mempejamkan kedua mata sepanjang shalat.' },
      { id: 'e', text: 'Melihat ke arah jari-jemari kaki kanan.' }
    ],
    correctOptionId: 'b',
    explanation: 'Disunnahkan bagi orang yang shalat untuk mengarahkan pandangannya ke tempat sujud dalam setiap keadaan shalat guna menjaga kekhusyu\'an, kecuali saat membaca tasyahhud di mana pandangan diarahkan ke jari telunjuk kanan saat berisyarat.',
    dalil: 'Kitab Al-Majmu\' Syarah Al-Muhadzdzab juz 3 hal. 314.'
  },
  {
    id: 'sq_20',
    question: 'Di antara perkara berikut, manakah gerakan yang MEMBATALKAN shalat menurut ketetapan Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Menggerakkan jari tangan untuk berisyarat atau membetulkan kacamata satu kali gerakan ringan.' },
      { id: 'b', text: 'Melakukan tiga kali gerakan berturut-turut pada anggota badan yang besar (seperti melangkah kaki 3 kali tanpa jeda).' },
      { id: 'c', text: 'Menolehkan wajah ke samping sekali karena ada hajat mendesak.' },
      { id: 'd', text: 'Membunuh kalajengking dengan satu kali injakan ringan.' },
      { id: 'e', text: 'Menahan bersin dengan meletakkan tangan di mulut.' }
    ],
    correctOptionId: 'b',
    explanation: 'Dalam Mazhab Syafi\'i, tiga gerakan berturut-turut (tsalatsu khathawat mutawaliyat) pada anggota tubuh yang besar (seperti tangan atau kaki) membatalkan shalat secara mutlak, baik dilakukan sengaja maupun lupa.',
    dalil: 'Matan Taqrib Bab Mubthilatush Shalah & Minhajut Thalibin.'
  },
  {
    id: 'sq_21',
    question: 'Bagaimanakah hukum melafalkan niat shalat secara lisan (seperti membaca "Ushalli fardhazh Zhuhri...") sesaat sebelum takbiratul ihram menurut mu\'tamad Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Rukun fardhu dan shalat tidak sah jika lisan tidak berucap.' },
      { id: 'b', text: 'Sunnah untuk membantu memantapkan konsentrasi hati sebelum takbir.' },
      { id: 'c', text: 'Haram dan bid\'ah dhalalah yang membatalkan shalat.' },
      { id: 'd', text: 'Makruh bagi imam namun wajib bagi makmum.' },
      { id: 'e', text: 'Wajib khusus bagi orang yang menderita was-was.' }
    ],
    correctOptionId: 'b',
    explanation: 'Menurut Mazhab Syafi\'i, tempat niat hakiki adalah di dalam hati bersamaan dengan takbiratul ihram. Melafalkannya dengan lisan sebelum takbir hukumnya sunnah (li yu\'ina al-lisānu al-qalb) untuk menolong hati menghadirkan niat.',
    dalil: 'Kitab I\'anatut Thalibin juz 1 hal. 132.'
  },
  {
    id: 'sq_22',
    question: 'Pada duduk tasyahhud akhir dalam shalat 4 rakaat, bagaimanakah posisi duduk sunnah yang diajarkan Rasulullah SAW?',
    options: [
      { id: 'a', text: 'Duduk Iftirasy (menduduki kaki kiri dan menegakkan kaki kanan).' },
      { id: 'b', text: 'Duduk Tawarruk (menyilangkan kaki kiri di bawah tulang kering kanan dan pantat menempel ke lantai).' },
      { id: 'c', text: 'Duduk bersila dengan kedua telapak kaki menghadap ke depan.' },
      { id: 'd', text: 'Duduk berjongkok di atas kedua tumit kaki (Iq\'a\').' },
      { id: 'e', text: 'Duduk menjulurkan kedua kaki lurus ke kiblat.' }
    ],
    correctOptionId: 'b',
    explanation: 'Sunnah pada duduk tasyahhud akhir (yang diakhiri salam) adalah duduk tawarruk, yaitu pantat kiri menempel di lantai, kaki kiri dikeluarkan ke arah kanan di bawah betis kanan, dan kaki kanan ditegakkan.',
    dalil: 'HR. Bukhari no. 828 dari Abu Humaid As-Sa\'idi ra.'
  },
  {
    id: 'sq_23',
    question: 'Apakah bacaan yang disunnahkan saat seseorang melakukan Sujud Sahwi menurut anjuran para ulama fuqaha?',
    options: [
      { id: 'a', text: '"Astaghfirullāhal \'azhīm wa atūbu ilaih" sebanyak 10 kali.' },
      { id: 'b', text: '"Subhāna man lā yanāmu wa lā yashū" (Maha Suci Dzat yang tidak pernah tidur dan tidak pernah lupa).' },
      { id: 'c', text: 'Membaca doa qunut lengkap.' },
      { id: 'd', text: 'Membaca surat Al-Ikhlas tiga kali.' },
      { id: 'e', text: 'Diam tanpa melafalkan dzikir apa pun.' }
    ],
    correctOptionId: 'b',
    explanation: 'Para fuqaha menganjurkan membaca "Subhana man la yanamu wa la yashu" saat sujud sahwi, atau membaca tasbih sujud biasa seperti "Subhana rabbiyal a\'la wa bihamdih".',
    dalil: 'Kitab Nihayatuz Zain karya Syekh Nawawi Al-Bantani hal. 84.'
  },
  {
    id: 'sq_24',
    question: 'Seorang musafir yang bepergian sejauh 100 km hendak mengerjakan shalat Qashar. Shalat fardhu manakah yang DIPERBOLEHKAN untuk diqashar (diringkas jumlah rakaatnya)?',
    options: [
      { id: 'a', text: 'Seluruh lima waktu shalat fardhu.' },
      { id: 'b', text: 'Hanya shalat yang berjumlah 4 rakaat: Zhuhur, Ashar, dan Isya (diringkas menjadi 2 rakaat).' },
      { id: 'c', text: 'Shalat Maghrib dan shalat Subuh saja.' },
      { id: 'd', text: 'Shalat Zhuhur dan shalat Maghrib diringkas menjadi 1 rakaat.' },
      { id: 'e', text: 'Shalat Subuh diringkas menjadi 1 rakaat.' }
    ],
    correctOptionId: 'b',
    explanation: 'Shalat yang boleh diqashar hanyalah shalat fardhu yang berjumlah 4 rakaat (Zhuhur, Ashar, Isya) diringkas menjadi 2 rakaat. Shalat Maghrib (3 rakaat) dan Subuh (2 rakaat) tidak boleh diqashar menurut kesepakatan ijma\' ulama.',
    dalil: 'QS. An-Nisa: 101 dan HR. Muslim no. 686.'
  },
  {
    id: 'sq_25',
    question: 'Di antara hal-hal berikut, manakah yang MEMBATALKAN wudhu dan otomatis MEMBATALKAN shalat apabila terjadi di tengah-tengah shalat?',
    options: [
      { id: 'a', text: 'Menetesnya air mata karena menangis tersedu-sedu merenungi makna ayat Al-Qur\'an.' },
      { id: 'b', text: 'Terbukanya aurat seketika namun langsung ditutup kembali tanpa jeda waktu.' },
      { id: 'c', text: 'Keluarnya angin (kentut) dari jalan belakang (dubur).' },
      { id: 'd', text: 'Membunuh nyamuk yang menggigit leher dengan satu tepukan ringan.' },
      { id: 'e', text: 'Menelan ludah murni yang tidak bercampur dengan sisa makanan.' }
    ],
    correctOptionId: 'c',
    explanation: 'Keluarnya hadats (seperti kentut, buang air kecil) membatalkan wudhu seketika, dan hilangnya thaharah membatalkan shalat secara mutlak tanpa ada khilaf di antara ulama.',
    dalil: 'HR. Bukhari no. 135 dan Muslim no. 225: "Lā yaqbalullāhu shalāta ahadikum idzā ahdatsa hattā yatawadh-dha".'
  }
];

const content = `import { ShalatQuizQuestion } from '../../types/shalat';

export const SHALAT_QUIZ: ShalatQuizQuestion[] = ${JSON.stringify(shalatQuestions, null, 2)};
`;

fs.writeFileSync('src/data/quizzes/shalatQuizData.ts', content);
console.log('Successfully generated src/data/quizzes/shalatQuizData.ts with 25 questions');
