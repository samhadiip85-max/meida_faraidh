// scripts/gen_bab10_sembelih.cjs
const fs = require('fs');

const sembelihQuestions = [
  {
    id: 'sq_1',
    question: 'Dua saluran leher manakah yang WAJIB terputus secara sempurna agar penyembelihan hewan darat dihukumi sah dan halal menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Saluran air liur dan saluran pembuluh darah vena.' },
      { id: 'b', text: 'Al-Hulqūm (saluran pernapasan / tenggorokan) dan Al-Marī\' (saluran makanan dan minuman / kerongkongan).' },
      { id: 'c', text: 'Al-Wadajān (dua urat leher pembuluh darah) saja.' },
      { id: 'd', text: 'Tulang sumsum leher belakang.' },
      { id: 'e', text: 'Kulit leher bagian luar saja.' }
    ],
    correctOptionId: 'b',
    explanation: 'Dalam Mazhab Syafi\'i, batas minimal kesempurnaan penyembelihan hewan adalah terputusnya Al-Hulqum (saluran nafas) dan Al-Mari\' (saluran makanan) secara total sekaligus. Jika salah satunya belum terputus sempurna, sembelihan tidak halal.',
    dalil: 'Kitab Matan Taqrib Bab Adz-Dzaba\'ih & Fathul Qarib Al-Mujib.'
  },
  {
    id: 'sq_2',
    question: 'Ditinjau dari bahan alat pemotong, manakah jenis benda yang DIHARAMKAN secara mutlak untuk digunakan menyembelih hewan menurut sabda Rasulullah SAW?',
    options: [
      { id: 'a', text: 'Bilah pisau baja yang sangat tajam.' },
      { id: 'b', text: 'Batu pipih yang diasah tajam.' },
      { id: 'c', text: 'Kuku (kuku binatang/manusia) dan Tulang/Gigi (Al-Azhfār wal-\'Izhām).' },
      { id: 'd', text: 'Sembilu bambu runcing yang tajam.' },
      { id: 'e', text: 'Kaca yang bertepi runcing tajam.' }
    ],
    correctOptionId: 'c',
    explanation: 'Nabi SAW bersabda: "Alat apa saja yang dapat mengalirkan darah dan disebut nama Allah atasnya maka makanlah, asalkan bukan gigi dan kuku. Adapun gigi itu adalah tulang, sedangkan kuku adalah pisaunya orang Habasyah".',
    dalil: 'HR. Bukhari no. 5498 dan Muslim no. 1968 dari Rafi\' bin Khadij ra.'
  },
  {
    id: 'sq_3',
    question: 'Seorang pemburu muslim melepaskan anjing pemburu terlatih (Kalbun Mu\'allam) setelah membaca Basmalah. Anjing tersebut mengejar kijang hutan, menggigit lehernya hingga mati, dan tidak memakan sedikit pun dari daging kijang tersebut saat tuannya tiba. Bagaimanakah status kehalalan kijang hasil buruan tersebut?',
    options: [
      { id: 'a', text: 'Haram karena dibunuh oleh anjing tanpa pisau.' },
      { id: 'b', text: 'HALAL dimakan, karena anjing pemburu terlatih yang dilepas dengan bismillah membunuh hewan buruan untuk tuannya (bukan untuk dirinya sendiri).' },
      { id: 'c', text: 'Makruh dan wajib dicuci 7 kali tanah.' },
      { id: 'd', text: 'Hanya boleh dimakan kulitnya saja.' },
      { id: 'e', text: 'Haram jika anjingnya berbulu hitam legam.' }
    ],
    correctOptionId: 'b',
    explanation: 'QS. Al-Ma\'idah: 4 memperbolehkan hewan buruan yang ditangkap oleh anjing/elang pemburu terlatih (mu\'allam) yang dilepas dengan nama Allah, dengan syarat hewan buruan ditangkap untuk tuannya (anjing tidak memakan sedikit pun darinya).',
    dalil: 'QS. Al-Ma\'idah ayat 4 & HR. Bukhari no. 5475 dari \'Adi bin Hatim ra.'
  },
  {
    id: 'sq_4',
    question: 'Sebaliknya, jika anjing pemburu yang dilepaskan tersebut MEMAKAN sebagian daging hewan buruan saat pemburu menemukannya, bagaimanakah status hewan buruan tersebut?',
    options: [
      { id: 'a', text: 'Tetap halal bagian yang tersisa.' },
      { id: 'b', text: 'HARAM dimakan, karena hal itu menjadi bukti bahwa anjing tersebut menangkap buruan untuk dirinya sendiri, bukan untuk tuannya.' },
      { id: 'c', text: 'Halal jika dicampur dengan daging ayam.' },
      { id: 'd', text: 'Boleh dimakan setelah dimasak matang.' },
      { id: 'e', text: 'Halal asalkan kepalanya dibuang.' }
    ],
    correctOptionId: 'b',
    explanation: 'Nabi SAW bersabda kepada \'Adi bin Hatim: "Jika anjing itu memakan sebagiannya maka janganlah engkau makan, karena ia menangkap buruan itu untuk dirinya sendiri, bukan untukmu".',
    dalil: 'HR. Bukhari no. 175 dan Muslim no. 1929.'
  },
  {
    id: 'sq_5',
    question: 'Seekor sapi betina yang sedang bunting disembelih secara syar\'i. Saat perutnya dibelah, ditemukan janin anak sapi di dalam kandungannya dalam kondisi sudah mati lemas tanpa bernafas. Bagaimanakah hukum memakan daging janin tersebut?',
    options: [
      { id: 'a', text: 'Haram dan berstatus bangkai yang najis.' },
      { id: 'b', text: 'HALAL dikonsumsi tanpa perlu disembelih ulang, karena penyembelihan induknya telah mencakup penyembelihan janinnya.' },
      { id: 'c', text: 'Wajib disembelih ulang meskipun sudah mati.' },
      { id: 'd', text: 'Hanya boleh dimakan oleh orang fakir miskin.' },
      { id: 'e', text: 'Makruh dan wajib dibuang sebagian paha janin.' }
    ],
    correctOptionId: 'b',
    explanation: 'Nabi SAW bersabda: "Dzakātul janīni dzakātu ummih" (Penyembelihan janin adalah dengan penyembelihan induknya). Jika induk disembelih syar\'i dan janin mati di perut, janin itu halal dimakan.',
    dalil: 'HR. Abu Dawud no. 2828, At-Tirmidzi no. 1476, dan Ahmad dari Abu Sa\'id Al-Khudri ra.'
  },
  {
    id: 'sq_6',
    question: 'Manakah kriteria syar\'i yang membedakan penyembelihan hewan yang lehernya dapat dijangkau (Maqdūr \'alaih) dengan hewan liar/terperosok yang lehernya tidak dapat dijangkau (Ghairu Maqdūr \'alaih)?',
    options: [
      { id: 'a', text: 'Hewan yang tidak terjangkau lehernya tidak halal dimakan sama sekali.' },
      { id: 'b', text: 'Hewan maqdūr \'alaih wajib disembelih di lehernya (hulqum dan mari\'); sedangkan ghairu maqdūr \'alaih cukup dilukai dengan benda tajam di bagian tubuh mana pun yang mematikan disertai membaca Basmalah (Idhthirari).' },
      { id: 'c', text: 'Hewan liar wajib ditangkap hidup-hidup lalu dimandikan.' },
      { id: 'd', text: 'Hewan terperosok cukup dipukul kepalanya dengan kayu.' },
      { id: 'e', text: 'Hewan liar boleh diracun hingga mati.' }
    ],
    correctOptionId: 'b',
    explanation: 'Hewan yang kabur liar atau terperosok ke sumur sehingga lehernya tak bisa dijangkau disembelih secara idhthirari: ditombak/dipanah di bagian tubuh mana saja yang mematikan disertai basmalah.',
    dalil: 'HR. Bukhari no. 5498 dan Muslim no. 1968 tentang unta yang kabur lalu dipanah sahabat.'
  },
  {
    id: 'sq_7',
    question: 'Bagaimanakah hukum memakan daging hewan hasil sembelihan seorang penganut agama Majusi (penyembah api) atau orang murtad?',
    options: [
      { id: 'a', text: 'Halal jika membaca nama Allah.' },
      { id: 'b', text: 'HARAM dimakan dan sembelihannya berstatus bangkai najis, karena syarat penyembelih harus seorang muslim atau ahli kitab asli (Yahudi/Nasrani).' },
      { id: 'c', text: 'Makruh jika tidak ada daging lain.' },
      { id: 'd', text: 'Halal bagi musafir.' },
      { id: 'e', text: 'Halal asalkan pisaunya terbuat dari perak.' }
    ],
    correctOptionId: 'b',
    explanation: 'Syarat sah penyembelih adalah muslim atau ahli kitab. Sembelihan orang majusi, penyembah berhala (musyrik), dan murtad haram dimakan secara ijma\'.',
    dalil: 'QS. Al-Ma\'idah: 5 & Kitab Al-Majmu\' juz 9 hal. 75.'
  },
  {
    id: 'sq_8',
    question: 'Apakah hukum teknik pemingsanan hewan (Stunning) modern sebelum penyembelihan menggunakan arus listrik ringan atau gas?',
    options: [
      { id: 'a', text: 'Haram mutlak dalam segala kondisi.' },
      { id: 'b', text: 'HALAL dan diperbolehkan oleh Komisi Fatwa MUI, dengan syarat pemingsanan hanya membuat hewan pingsan sementara, tidak menyebabkan hewan mati sebelum disembelih, dan tidak merusak tulang kepala.' },
      { id: 'c', text: 'Membatalkan kehalalan daging secara permanen.' },
      { id: 'd', text: 'Wajib dilakukan pada semua Rumah Potong Hewan.' },
      { id: 'e', text: 'Mengubah status hewan menjadi bangkai murni.' }
    ],
    correctOptionId: 'b',
    explanation: 'Berdasarkan Fatwa MUI No. 12 Tahun 2009 tentang Standar Penyembelihan Halal: Stunning diperbolehkan dengan ketentuan alat bersifat pingsan sementara (reversible) dan hewan masih hidup saat lehernya disembelih.',
    dalil: 'Fatwa MUI No. 12 Tahun 2009 & Kaidah Sadduz Dzari\'ah.'
  },
  {
    id: 'sq_9',
    question: 'Manakah di antara jenis binatang berikut yang DIHARAMKAN untuk dikonsumsi dalam syariat Islam karena memiliki taring tajam untuk memangsa mangsanya (Dzū nābin minas sibā\')?',
    options: [
      { id: 'a', text: 'Kelinci dan rusa tutul.' },
      { id: 'b', text: 'Harimau, singa, serigala, dan anjing.' },
      { id: 'c', text: 'Unta dan jerapah.' },
      { id: 'd', text: 'Kuda dan keledai jinak.' },
      { id: 'e', text: 'Ayam hutan dan bebek liar.' }
    ],
    correctOptionId: 'b',
    explanation: 'Nabi SAW melarang memakan setiap binatang buas yang bertaring (dzu nabin minas siba\') dan setiap burung yang memiliki cakar mencengkeram (dzu mikhlabin minat thair).',
    dalil: 'HR. Muslim no. 1934 dari Abu Hurairah ra. & HR. Muslim no. 1932 dari Ibnu Abbas ra.'
  },
  {
    id: 'sq_10',
    question: 'Bagaimanakah hukum memotong anggota tubuh hewan ternak (seperti memotong paha atau buntut kambing) saat hewan tersebut masih HIDUP sehat?',
    options: [
      { id: 'a', text: 'Boleh jika segera diobati lukanya.' },
      { id: 'b', text: 'HARAM, dan potongan daging yang terpotong tersebut berstatus sebagai BANGKAI yang najis dan haram dimakan.' },
      { id: 'c', text: 'Halal jika dipotong menggunakan pisau tajam.' },
      { id: 'd', text: 'Hanya boleh untuk ekor sapi.' },
      { id: 'e', text: 'Makruh tanzih.' }
    ],
    correctOptionId: 'b',
    explanation: 'Kaidah nabawiyyah menegaskan: "Mā quthi\'a minal bahīmati wa hiya hayyatun fa hiya maitatun" (Apa saja yang dipotong dari binatang ternak saat binatang itu masih hidup, maka potongan itu adalah bangkai najis).',
    dalil: 'HR. Abu Dawud no. 2858 dan At-Tirmidzi no. 1480 dari Abu Waqid Al-Laitsi ra.'
  },
  {
    id: 'sq_11',
    question: 'Di antara hewan-hewan berikut, manakah hewan yang DIHARAMKAN untuk dimakan karena syariat melarang untuk membunuhnya (An-Nahyu \'an qatlihā)?',
    options: [
      { id: 'a', text: 'Tikus got dan burung gagak.' },
      { id: 'b', text: 'Semut, lebah madu, burung hud-hud, dan burung shurad.' },
      { id: 'c', text: 'Kambing liar dan domba.' },
      { id: 'd', text: 'Kalajengking dan ular derik.' },
      { id: 'e', text: 'Ikan mas dan udang.' }
    ],
    correctOptionId: 'b',
    explanation: 'Ibnu Abbas ra. meriwayatkan: "Sesungguhnya Nabi SAW melarang membunuh empat macam binatang: semut, lebah, burung hud-hud, dan burung shurad". Kaidah fiqih menetapkan: setiap hewan yang dilarang dibunuh hukumnya haram dimakan.',
    dalil: 'HR. Abu Dawud no. 5267 dan Ahmad dengan sanad shahih.'
  },
  {
    id: 'sq_12',
    question: 'Sebaliknya, hewan apakah yang DIHARAMKAN untuk dimakan karena syariat MEMERINTAHKAN untuk membunuhnya (Al-Fawāsiqul Khams)?',
    options: [
      { id: 'a', text: 'Burung merpati dan burung perkutut.' },
      { id: 'b', text: 'Ular, burung gagak belang, tikus, anjing gila, dan burung elang.' },
      { id: 'c', text: 'Kelinci dan landak.' },
      { id: 'd', text: 'Kuda laut dan kepiting.' },
      { id: 'e', text: 'Bebek dan angsa.' }
    ],
    correctOptionId: 'b',
    explanation: 'Lima hewan fasik perusak yang diperintahkan dibunuh baik di tanah halal maupun haram: gagak, elang, tikus, kalajengking/ular, dan anjing gila. Hewan yang diperintahkan dibunuh haram dimakan.',
    dalil: 'HR. Bukhari no. 1829 dan Muslim no. 1198 dari Aisyah ra.'
  },
  {
    id: 'sq_13',
    question: 'Apakah hukum mengonsumsi hewan yang hidup di dua alam (amfibi seperti Katak) menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Halal jika disembelih di darat.' },
      { id: 'b', text: 'HARAM dikonsumsi karena Rasulullah SAW melarang membunuh katak untuk obat dan tergolong hewan khabā\'its (menjijikkan).' },
      { id: 'c', text: 'Mubah bagi penderita penyakit asma.' },
      { id: 'd', text: 'Sunnah dimakan paha belakangnya.' },
      { id: 'e', text: 'Halal menurut seluruh mazhab.' }
    ],
    correctOptionId: 'b',
    explanation: 'Dalam Mazhab Syafi\'i, katak haram dimakan berdasarkan larangan Nabi SAW kepada seorang tabib yang hendak menjadikan katak sebagai campuran obat (HR. Abu Dawud no. 3871 dan An-Nasa\'i no. 4355).',
    dalil: 'HR. Abu Dawud no. 3871 dan Kitab Al-Majmu\' juz 9 hal. 30.'
  },
  {
    id: 'sq_14',
    question: 'Bagaimanakah hukum memakan Daging Kuda (Al-Khail) menurut pendapat mu\'tamad Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Haram mutlak seperti keledai jinak.' },
      { id: 'b', text: 'HALAL dimakan berdasarkan riwayat shahih Asma\' binti Abi Bakar ra. yang menyembelih kuda di zaman Nabi SAW.' },
      { id: 'c', text: 'Makruh tahrim.' },
      { id: 'd', text: 'Hanya halal susunya bukan dagingnya.' },
      { id: 'e', text: 'Hanya boleh dimakan saat perang.' }
    ],
    correctOptionId: 'b',
    explanation: 'Daging kuda halal dimakan dalam Mazhab Syafi\'i. Asma\' ra. berkata: "Kami menyembelih seekor kuda pada masa Rasulullah SAW di Madinah lalu kami memakan dagingnya" (HR. Bukhari no. 5510 dan Muslim no. 1942). Berbeda dengan keledai jinak (himar ahli) yang diharamkan pada perang Khaibar.',
    dalil: 'HR. Bukhari no. 5510 dan Muslim no. 1942.'
  },
  {
    id: 'sq_15',
    question: 'Bangkai binatang darat haram dikonsumsi secara qath\'i. Namun ada bagian dari bangkai hewan halal yang SUCI dan boleh dimanfaatkan menurut Mazhab Syafi\'i, yaitu:',
    options: [
      { id: 'a', text: 'Darah dan lemak bangkai.' },
      { id: 'b', text: 'Kulit bangkai setelah melalui proses penyamakan (Ad-Dibāgh), serta bulu/wol dari hewan yang halal dimakan.' },
      { id: 'c', text: 'Tulang sumsum leher.' },
      { id: 'd', text: 'Organ hati dan paru-paru bangkai.' },
      { id: 'e', text: 'Air liur bangkai kambing.' }
    ],
    correctOptionId: 'b',
    explanation: 'Semua bagian bangkai adalah najis kecuali kulitnya yang menjadi suci setelah disamak sempurna (kecuali anjing dan babi), serta bulu hewan halal yang terpisah saat hidup/setelah mati menurut sebagian fuqaha.',
    dalil: 'HR. Muslim no. 366 dari Ibnu Abbas ra. & Matan Taqrib.'
  },
  {
    id: 'sq_16',
    question: 'Apakah yang dimaksud dengan "Al-Jallālah" dalam fiqih hewan konsumsi dan bagaimanakah hukum mengonsumsi daging serta susunya?',
    options: [
      { id: 'a', text: 'Hewan yang tidak pernah melahirkan anak.' },
      { id: 'b', text: 'Hewan ternak halal yang sebagian besar makanannya memakan kotoran najis sehingga merubah bau dan rasa dagingnya; hukum memakannya MAKRUH hingga dikarantina dan diberi makanan bersih.' },
      { id: 'c', text: 'Hewan yang memiliki tanduk spiral melingkar.' },
      { id: 'd', text: 'Hewan yang disembelih pada waktu malam.' },
      { id: 'e', text: 'Hewan liar yang jinak di kebun binatang.' }
    ],
    correctOptionId: 'b',
    explanation: 'Al-Jallalah adalah hewan yang terbiasa makan kotoran/tinja najis. Nabi SAW melarang memakan daging dan meminum susu jallalah hingga hewan tersebut dikarantina dan diberi pakan suci sampai hilang bau dan sifat kotorannya.',
    dalil: 'HR. Abu Dawud no. 3785 dan At-Tirmidzi no. 1824 dari Ibnu Umar ra.'
  },
  {
    id: 'sq_17',
    question: 'Di antara adab penyembelihan yang disunnahkan, bagaimanakah posisi hewan saat direbahkan untuk disembelih?',
    options: [
      { id: 'a', text: 'Direbahkan di atas lambung sebelah kanan.' },
      { id: 'b', text: 'Direbahkan di atas rusuk/lambung sebelah KIRI dengan leher menghadap ke arah Kiblat.' },
      { id: 'c', text: 'Diberdirikan tegak di atas empat kakinya.' },
      { id: 'd', text: 'Digantung terbalik dengan kepala di bawah.' },
      { id: 'e', text: 'Ditelentangkan di atas punggungnya.' }
    ],
    correctOptionId: 'b',
    explanation: 'Sunnah merebahkan hewan sembelihan (selain unta) di atas lambung kirinya agar penyembelih mudah memegang pisau dengan tangan kanan dan menahan leher hewan dengan tangan kiri, serta menghadapkan lehernya ke kiblat.',
    dalil: 'Kitab Al-Majmu\' Syarah Al-Muhadzdzab juz 9 hal. 81 & HR. Muslim no. 1967.'
  },
  {
    id: 'sq_18',
    question: 'Bagaimanakah tata cara penyembelihan khusus untuk hewan jenis UNTA (An-Nahr) yang membedakannya dari sapi dan kambing (Adz-Dzabh)?',
    options: [
      { id: 'a', text: 'Unta ditenggelamkan ke dalam air.' },
      { id: 'b', text: 'Unta disembelih dengan cara ditusuk pada pangkal leher bawah dekat dada (Al-Wahdah / Labbah) dalam posisi berdiri terikat satu kaki kirinya.' },
      { id: 'c', text: 'Unta dipukul kepalanya hingga pingsan.' },
      { id: 'd', text: 'Unta direbahkan di atas pasir panas.' },
      { id: 'e', text: 'Unta disembelih di ujung moncong kepalanya.' }
    ],
    correctOptionId: 'b',
    explanation: 'Sunnah pada unta adalah An-Nahr (menusuk lubang di pangkal leher dekat dada/labbah) saat unta berdiri dengan kaki kiri depan diikat, berdasarkan QS. Al-Hajj: 36 dan amalan Nabi SAW.',
    dalil: 'HR. Abu Dawud no. 1767 dan Bukhari no. 1713 dari Ibnu Umar ra.'
  },
  {
    id: 'sq_19',
    question: 'Seseorang berburu menggunakan senapan angin atau senapan peluru timah bundar yang membunuh hewan buruan dengan tekanan berat dan benturan keras (bukan dengan ketajaman proyektil tajam). Bagaimanakah status hewan buruan tersebut?',
    options: [
      { id: 'a', text: 'Halal secara mutlak.' },
      { id: 'b', text: 'Tergolong hewan "Al-Waqīdzah" (mati karena pukulan benda tumpul) yang dihukumi BANGKAI dan HARAM dimakan, kecuali sempat disembelih syar\'i sebelum mati.' },
      { id: 'c', text: 'Halal jika ditembak di kepala.' },
      { id: 'd', text: 'Sunnah dimakan dagingnya.' },
      { id: 'e', text: 'Halal asalkan penembaknya membaca tasbih.' }
    ],
    correctOptionId: 'b',
    explanation: 'Hewan buruan yang mati terkena benturan benda tumpul tanpa ketajaman yang melukai tembus (mitsqal / waqīdzah) dihukumi bangkai haram menurut QS. Al-Ma\'idah: 3 dan hadits \'Adi bin Hatim ra.',
    dalil: 'QS. Al-Ma\'idah: 3 & HR. Bukhari no. 5476.'
  },
  {
    id: 'sq_20',
    question: 'Apakah hukum menyembelih hewan dengan memenggal leher hewan hingga putus kepalanya secara total seketika?',
    options: [
      { id: 'a', text: 'Daging sembelihan menjadi haram dimakan.' },
      { id: 'b', text: 'Dagingnya tetap HALAL dimakan, namun tindakan memenggal hingga putus seketika tersebut hukumnya MAKRUH karena menyiksa hewan melebihi batas yang disyariatkan.' },
      { id: 'c', text: 'Penyembelih wajib membayar denda diyat.' },
      { id: 'd', text: 'Sunnah muakkadah agar hewan cepat mati.' },
      { id: 'e', text: 'Hewan berubah status menjadi rikaz.' }
    ],
    correctOptionId: 'b',
    explanation: 'Memutuskan leher hewan sampai kepalanya terpisah saat menyembelih hukumnya makruh karena menyiksa hewan, namun daging sembelihan tetap halal dimakan karena kedua saluran wajib (hulqum dan mari\') telah terputus sempurna.',
    dalil: 'Kitab Fathul Wahhab karya Syekh Zakariya Al-Anshari juz 2 hal. 238.'
  },
  {
    id: 'sq_21',
    question: 'Manakah di antara jenis hewan air/laut berikut yang HALAL dikonsumsi menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Hanya ikan bersisik saja yang halal.' },
      { id: 'b', text: 'Seluruh hewan air laut yang hanya bisa hidup di dalam air (ikan, cumi-cumi, udang, kepiting laut) halal dikonsumsi bangkainya maupun tangkapannya.' },
      { id: 'c', text: 'Hewan laut yang bentuknya menyerupai hewan darat haram dimakan.' },
      { id: 'd', text: 'Ikan paus haram karena bertubuh besar.' },
      { id: 'e', text: 'Bangkai ikan yang mengapung di laut haram dimakan.' }
    ],
    correctOptionId: 'b',
    explanation: 'Rasulullah SAW bersabda tentang air laut: "Huwat thahūru mā\'uhū al-hillu maitatuh" (Laut itu suci airnya dan halal bangkainya). Seluruh hewan yang hidup murni di dalam air halal dimakan tanpa perlu disembelih.',
    dalil: 'HR. Abu Dawud no. 83, At-Tirmidzi no. 69, dan An-Nasa\'i no. 59.'
  },
  {
    id: 'sq_22',
    question: 'Bagaimanakah hukum memakan Belalang (Al-Jarād) yang mati tanpa melalui proses penyembelihan?',
    options: [
      { id: 'a', text: 'Haram karena belalang adalah serangga kotor.' },
      { id: 'b', text: 'HALAL dimakan berdasarkan nash hadits shahih yang mengecualikan bangkai belalang dan ikan dari keharaman bangkai.' },
      { id: 'c', text: 'Hanya boleh dimakan sayapnya saja.' },
      { id: 'd', text: 'Wajib dipotong lehernya dengan gunting.' },
      { id: 'e', text: 'Makruh tanzih.' }
    ],
    correctOptionId: 'b',
    explanation: 'Rasulullah SAW bersabda: "Dihalalkan bagi kita dua bangkai dan dua darah: dua bangkai itu adalah ikan dan belalang, sedangkan dua darah itu adalah hati dan limpa".',
    dalil: 'HR. Ibnu Majah no. 3218 dan Ahmad dari Ibnu Umar ra.'
  },
  {
    id: 'sq_23',
    question: 'Seorang pemburu memanah kijang dan mengenai tubuh kijang tersebut hingga terluka. Kijang itu kemudian melompat jatuh ke dalam sungai dan tenggelam hingga mati. Bagaimanakah status kijang buruan tersebut?',
    options: [
      { id: 'a', text: 'Halal karena anak panah mengenai tubuhnya.' },
      { id: 'b', text: 'HARAM dimakan, karena ada kemungkinan besar kijang tersebut mati akibat tenggelam di air bukan murni akibat luka panah.' },
      { id: 'c', text: 'Halal jika sungai tersebut airnya jernih.' },
      { id: 'd', text: 'Halal separuh badannya yang tidak basah.' },
      { id: 'e', text: 'Boleh dimakan setelah dikeringkan di bawah terik matahari.' }
    ],
    correctOptionId: 'b',
    explanation: 'Nabi SAW bersabda kepada \'Adi bin Hatim: "Jika engkau memanah buruanmu lalu mendapatinya telah jatuh ke dalam air, janganlah engkau makan! Karena engkau tidak tahu apakah air yang membunuhnya ataukah panahmu".',
    dalil: 'HR. Bukhari no. 5484 dan Muslim no. 1929.'
  },
  {
    id: 'sq_24',
    question: 'Apakah hukum memakan bagian hati (al-kabd) dan limpa (ath-thihāl) dari hewan sembelihan yang halal?',
    options: [
      { id: 'a', text: 'Haram karena hati dan limpa merupakan gumpalan darah kotor.' },
      { id: 'b', text: 'HALAL dikonsumsi berdasarkan sabda Rasulullah SAW yang mengecualikan dua darah yang halal.' },
      { id: 'c', text: 'Makruh dan harus direbus 7 kali.' },
      { id: 'd', text: 'Hanya halal bagi orang yang sedang sakit anemia.' },
      { id: 'e', text: 'Haram bagi wanita hamil.' }
    ],
    correctOptionId: 'b',
    explanation: 'Hati dan limpa dikecualikan dari keharaman darah yang mengalir (damman masfūhā). Nabi SAW menegaskan kehalalannya bersama bangkai ikan dan belalang.',
    dalil: 'HR. Ibnu Majah no. 3314 dan Ahmad dari Ibnu Umar ra.'
  },
  {
    id: 'sq_25',
    question: 'Di antara adab ihsan dalam penyembelihan hewan yang diperintahkan Rasulullah SAW dalam hadits Syaddad bin Aus ra. adalah:',
    options: [
      { id: 'a', text: 'Menyembelih dengan pisau tumpul secara perlahan agar hewan tidak kaget.' },
      { id: 'b', text: 'Menajamkan bilah pisau sembelihan dan menenangkan/menyenangkan hewan yang akan disembelih (Fa liyuhidda ahadukum syafratahū wal yuri\' dzabīhatah).' },
      { id: 'c', text: 'Menyeret kaki hewan di hadapan kerumunan hewan lain.' },
      { id: 'd', text: 'Menguliti hewan saat jantungnya masih berdenyut.' },
      { id: 'e', text: 'Memotong telinga hewan sebelum lehernya dipotong.' }
    ],
    correctOptionId: 'b',
    explanation: 'Rasulullah SAW bersabda: "Sesungguhnya Allah mewajibkan berbuat ihsan dalam segala hal. Apabila kalian menyembelih, sembelihlah dengan baik: hendaklah salah seorang di antara kalian menajamkan pisaunya dan memberi kenyamanan pada hewan sembelihannya".',
    dalil: 'HR. Muslim no. 1955 dari Syaddad bin Aus ra.'
  }
];

const content = `import { SembelihQuizQuestion } from '../../types/sembelih';

export const SEMBELIH_QUIZ: SembelihQuizQuestion[] = ${JSON.stringify(sembelihQuestions, null, 2)};
`;

fs.writeFileSync('src/data/quizzes/sembelihQuizData.ts', content);
console.log('Successfully generated src/data/quizzes/sembelihQuizData.ts with 25 questions');
