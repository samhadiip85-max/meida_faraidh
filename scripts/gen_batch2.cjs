// scripts/gen_batch2.cjs
const fs = require('fs');

// BAB 5: JENAZAH (25 Questions)
const jenazahQuestions = [
  {
    id: 'jq_1',
    question: 'Apakah hukum asal pemulasaran dan pengurusan jenazah seorang muslim (memandikan, mengafani, menyalatkan, dan menguburkan) bagi kaum muslimin di sekitarnya?',
    options: [
      { id: 'a', text: 'Fardhu \'Ain bagi setiap muslim yang mengenal almarhum.' },
      { id: 'b', text: 'Fardhu Kifayah, yang mana jika sebagian muslim telah melaksanakannya maka gugur dosa bagi yang lain.' },
      { id: 'c', text: 'Sunnah Mu\'akkadah yang berpahala besar namun tidak berdosa bila ditinggalkan.' },
      { id: 'd', text: 'Mubah tergantung kesepakatan ahli waris.' },
      { id: 'e', text: 'Wajib khusus hanya bagi keturunan dan keluarga sedarah almarhum.' }
    ],
    correctOptionId: 'b',
    explanation: 'Pengurusan jenazah muslim berstatus Fardhu Kifayah berdasarkan ijma\' ulama kaum muslimin. Jika ada sebagian kaum muslimin yang menanganinya dengan layak, gugur kewajiban dan dosa dari seluruh kaum muslimin lainnya di wilayah tersebut.',
    dalil: 'Kitab Al-Majmu\' Syarah Al-Muhadzdzab juz 5 hal. 104 & Matan Taqrib.'
  },
  {
    id: 'jq_2',
    question: 'Seorang pejuang muslim gugur di medan pertempuran saat membela agama dan tanah air dari agresi musuh (Syahid Ma\'rakah / Syahid Dunia-Akhirat). Bagaimanakah perlakuan syariat terhadap jenazah beliau?',
    options: [
      { id: 'a', text: 'Wajib dimandikan 3 kali basuhan dan dishalatkan secara berjamaah.' },
      { id: 'b', text: 'HARAM dimandikan dan HARAM dishalatkan; ia dimakamkan dengan pakaian yang berlumuran darah syahidnya.' },
      { id: 'c', text: 'Boleh dimandikan namun tidak boleh dikafani.' },
      { id: 'd', text: 'Wajib dishalatkan di masjid jami\' tanpa perlu dikafani.' },
      { id: 'e', text: 'Diperlakukan sama persis seperti jenazah muslim biasa yang wafat karena sakit.' }
    ],
    correctOptionId: 'b',
    explanation: 'Orang yang mati syahid di medan perang fi sabilillah (syahid ma\'rakah) haram dimandikan dan haram dishalatkan berdasarkan sabda Nabi SAW saat perang Uhud: "Kafanilah mereka bersama darah-darah mereka, karena tidaklah satu luka di jalan Allah kecuali memancar pada hari kiamat aroma kesturi".',
    dalil: 'HR. Bukhari no. 1343 dan Muslim no. 1876 dari Jabir bin Abdillah ra.'
  },
  {
    id: 'jq_3',
    question: 'Berapakah jumlah lapis kain kafan yang disunnahkan untuk jenazah laki-laki dan jenazah perempuan menurut sunnah Rasulullah SAW?',
    options: [
      { id: 'a', text: 'Laki-laki 1 lapis dan perempuan 2 lapis kain.' },
      { id: 'b', text: 'Laki-laki disunnahkan 3 lapis kain putih, sedangkan perempuan disunnahkan 5 lapis kain.' },
      { id: 'c', text: 'Laki-laki 5 lapis dan perempuan 7 lapis kain bermotif.' },
      { id: 'd', text: 'Kedua-duanya sama persis disunnahkan 4 lapis kain.' },
      { id: 'e', text: 'Tergantung pada kemampuan finansial keluarga duka tanpa batasan sunnah.' }
    ],
    correctOptionId: 'b',
    explanation: 'Sunnah mengafani jenazah: jenazah laki-laki dikafani dengan 3 lapis kain kafan putih yang menutup seluruh tubuh (sebagaimana jenazah Nabi SAW), sedangkan jenazah wanita dengan 5 lapis (kain basahan/sarung, baju kurung, kerudung, dan dua helai kain penutup).',
    dalil: 'HR. Bukhari no. 1264 dan Muslim no. 941 dari Aisyah ra. tentang kain kafan Nabi SAW.'
  },
  {
    id: 'jq_4',
    question: 'Di antara rangkaian rukun Shalat Jenazah berikut, manakah yang merupakan 4 bacaan yang dibaca secara berurutan setelah masing-masing dari 4 kali takbir?',
    options: [
      { id: 'a', text: 'Takbir 1: Doa Iftitah, Takbir 2: Al-Fatihah, Takbir 3: Shalawat, Takbir 4: Doa Mayit.' },
      { id: 'b', text: 'Takbir 1: Al-Fatihah, Takbir 2: Shalawat Nabi, Takbir 3: Doa untuk Jenazah, Takbir 4: Doa Penutup Jenazah & Kaum Muslimin.' },
      { id: 'c', text: 'Takbir 1: Surat Pendek, Takbir 2: Tasyahhud, Takbir 3: Ruku\', Takbir 4: Sujud.' },
      { id: 'd', text: 'Takbir 1: Shalawat, Takbir 2: Al-Fatihah, Takbir 3: Qunut, Takbir 4: Salam.' },
      { id: 'e', text: 'Takbir 1: Niat, Takbir 2: Tasbih, Takbir 3: Tahmid, Takbir 4: Tahlil.' }
    ],
    correctOptionId: 'b',
    explanation: 'Urutan rukun shalat jenazah: Takbir pertama membaca Al-Fatihah, takbir kedua membaca shalawat kepada Nabi SAW, takbir ketiga membaca doa khusus untuk jenazah (minimal: Allahummaghfir lahu warhamhu...), takbir keempat membaca doa untuk jenazah dan kaum muslimin lalu salam.',
    dalil: 'HR. Asy-Syafi\'i dalam Al-Umm dan Al-Baihaqi dari Abu Umamah bin Sahl ra.'
  },
  {
    id: 'jq_5',
    question: 'Di manakah posisi berdiri yang disunnahkan bagi Imam saat menyalatkan jenazah laki-laki dan saat menyalatkan jenazah perempuan?',
    options: [
      { id: 'a', text: 'Jenazah laki-laki di arah kaki, jenazah perempuan di arah kepala.' },
      { id: 'b', text: 'Jenazah laki-laki sejajar lurus dengan KEPALA jenazah, sedangkan jenazah perempuan sejajar lurus dengan PINGGUL/PINGGANG jenazah.' },
      { id: 'c', text: 'Kedua-duanya berdiri tepat di tengah dada jenazah.' },
      { id: 'd', text: 'Imam harus berdiri di sebelah barat jenazah membelakangi kiblat.' },
      { id: 'e', text: 'Jenazah laki-laki di arah pinggul dan jenazah perempuan di arah kepala.' }
    ],
    correctOptionId: 'b',
    explanation: 'Sunnah posisi imam shalat jenazah: jika jenazah laki-laki, imam berdiri sejajar dengan kepala jenazah. Jika jenazah perempuan, imam berdiri sejajar dengan arah pinggul/lambung jenazah.',
    dalil: 'HR. Abu Dawud no. 3194 dan At-Tirmidzi no. 1034 dari Anas bin Malik ra.'
  },
  {
    id: 'jq_6',
    question: 'Kondisi tanah di area pemakaman sangat gembur, berpasir, dan mudah longsor. Berdasarkan kaidah fiqih pemakaman, bentuk liang kubur manakah yang PALING TEPAT dan dianjurkan untuk digunakan?',
    options: [
      { id: 'a', text: 'Liang Lahad (Al-Lahd), yaitu mengeruk rongga ke arah dinding samping kiblat.' },
      { id: 'b', text: 'Liang Syaqq (Al-Khandaq / Cempuri), yaitu menggali ceruk di bagian tengah dasar kubur.' },
      { id: 'c', text: 'Peti besi kedap udara tanpa menggali tanah.' },
      { id: 'd', text: 'Membakar jenazah lalu melarung abu ke lautan.' },
      { id: 'e', text: 'Meletakkan jenazah di atas permukaan tanah lalu ditimbun bebatuan.' }
    ],
    correctOptionId: 'b',
    explanation: 'Jika tanah keras dan padat, liang lahad (al-lahd) lebih utama. Namun jika tanah gembur, berpasir, basah atau mudah longsor, para fuqaha sepakat bahwa liang cempuri/syaqq (menggali cekungan di tengah-tengah dasar liang) lebih utama demi keamanan jenazah.',
    dalil: 'Kitab Al-Majmu\' Syarah Al-Muhadzdzab juz 5 hal. 285 & Fathul Qarib.'
  },
  {
    id: 'jq_7',
    question: 'Bagaimanakah posisi pembaringan jenazah di dalam liang kubur yang disyariatkan oleh syariat Islam?',
    options: [
      { id: 'a', text: 'Terlentang dengan kepala di timur dan kaki di barat.' },
      { id: 'b', text: 'Dimiringkan di atas lambung sisi kanan menghadap ke arah Kiblat, dengan kepala di sisi utara dan kaki di sisi selatan.' },
      { id: 'c', text: 'Tengkurap menghadap ke dalam bumi.' },
      { id: 'd', text: 'Duduk bersila menghadap Ka\'bah.' },
      { id: 'e', text: 'Bebas menghadap ke arah mana pun sesuai bentuk petak makam.' }
    ],
    correctOptionId: 'b',
    explanation: 'Kewajiban mengubur jenazah adalah menghadapkannya ke arah kiblat. Caranya dengan membaringkannya miring di atas lambung kanannya (di atas rusuk kanan) dengan kepala di sebelah utara dan muka menghadap ke arah barat/kiblat.',
    dalil: 'HR. Al-Baihaqi dan Abu Dawud: "Al-Ka\'batu qiblatukum ahyā-an wa amwātā".'
  },
  {
    id: 'jq_8',
    question: 'Apakah bacaan yang disunnahkan untuk diucapkan oleh orang yang meletakkan jenazah ke dalam liang kubur?',
    options: [
      { id: 'a', text: '"Astaghfirullāha wa atūbu ilaih".' },
      { id: 'b', text: '"Bismillāhi wa \'alā millati Rasūlillāh" (Dengan nama Allah dan di atas millah/ajaran Rasulullah).' },
      { id: 'c', text: 'Membaca surat Al-Fatihah tujuh kali.' },
      { id: 'd', text: '"Lā hawla wa lā quwwata illā billāh".' },
      { id: 'e', text: 'Membaca doa qunut nazilah.' }
    ],
    correctOptionId: 'b',
    explanation: 'Disunnahkan membaca: "Bismillahi wa \'ala millati Rasulillah" (atau "wa \'ala sunnati Rasulillah") ketika memasukkan dan meletakkan jenazah ke dalam liang lahat.',
    dalil: 'HR. Abu Dawud no. 3213, At-Tirmidzi no. 1046, dan Ibnu Majah dari Ibnu Umar ra.'
  },
  {
    id: 'jq_9',
    question: 'Setelah jenazah selesai dimakamkan dan ditimbun tanah, Rasulullah SAW menganjurkan para pelayat untuk berdiri sejenak di sisi kuburnya. Amalan apakah yang diperintahkan Nabi SAW pada saat itu?',
    options: [
      { id: 'a', text: 'Membagikan makanan dan minuman mewah di area pemakaman.' },
      { id: 'b', text: 'Memohonkan ampunan (istighfar) dan memohonkan keteguhan (tatsbit) bagi almarhum karena ia sedang ditanya malaikat Munkar dan Nakir.' },
      { id: 'c', text: 'Menangis meratap keras-keras untuk menunjukkan rasa duka cita.' },
      { id: 'd', text: 'Menyembelih hewan qurban di atas nisan makam.' },
      { id: 'e', text: 'Membangun kubah marmer tinggi di atas kuburan.' }
    ],
    correctOptionId: 'b',
    explanation: 'Utsman bin Affan ra. meriwayatkan: Nabi SAW jika selesai memakamkan jenazah berdiri di sisinya dan bersabda: "Mohonkanlah ampunan untuk saudaramu dan mintakanlah ketetapan hati (tatsbit) untuknya, karena sesungguhnya ia sekarang sedang ditanya".',
    dalil: 'HR. Abu Dawud no. 3221 dan Al-Hakim, dishahihkan oleh Al-Hakim.'
  },
  {
    id: 'jq_10',
    question: 'Seorang janin mengalami keguguran (siqth). Janin tersebut berusia kandungan 5 bulan dan telah keluar dalam keadaan meninggal dunia namun bentuk fisiknya telah sempurna sebagai manusia. Bagaimanakah perlakuan syariat terhadap janin keguguran tersebut?',
    options: [
      { id: 'a', text: 'Cukup dibungkus kain dan langsung dikubur tanpa dimandikan dan tanpa dishalatkan.' },
      { id: 'b', text: 'Wajib dimandikan, dikafani, dishalatkan, dan dikuburkan seperti jenazah orang dewasa.' },
      { id: 'c', text: 'Dilarang dikubur di pemakaman muslim.' },
      { id: 'd', text: 'Hanya wajib dishalatkan tanpa perlu dimandikan.' },
      { id: 'e', text: 'Dibuang ke sungai karena belum bernyawa.' }
    ],
    correctOptionId: 'b',
    explanation: 'Dalam Mazhab Syafi\'i: jika janin gugur setelah berusia 4 bulan ke atas (ditiupkan ruh / telah nyata bentuk manusia) dan ada tanda-tanda kehidupan saat lahir (seperti menangis atau bergerak), wajib 4 perkara: dimandikan, dikafani, dishalatkan, dan dikubur.',
    dalil: 'Kitab Fathul Qarib Al-Mujib & HR. Abu Dawud no. 3180.'
  },
  {
    id: 'jq_11',
    question: 'Manakah batas maksimal durasi hari yang dianjurkan syariat untuk melaksanakan Takziyah (menghibur dan menguatkan keluarga jenazah) menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: '1 hari sejak wafatnya jenazah.' },
      { id: 'b', text: '3 hari sejak wafat atau dimakamkannya jenazah, kecuali bagi orang yang bepergian/jauh.' },
      { id: 'c', text: '7 hari 7 malam berturut-turut.' },
      { id: 'd', text: '40 hari pasca pemakaman.' },
      { id: 'e', text: '100 hari.' }
    ],
    correctOptionId: 'b',
    explanation: 'Batas waktu takziyah yang disunnahkan adalah 3 hari sejak kematian/pemakaman, agar tidak memperbarui dan memperpanjang kesedihan keluarga duka. Takziyah setelah 3 hari makruh kecuali bila orang yang bertakziyah atau keluarga duka sedang berada di luar kota saat itu.',
    dalil: 'HR. Bukhari no. 1280 dan Muslim no. 1486: "Lā yahillu li imra\'atin... an tuhidda fawqa tsalātsin...".'
  },
  {
    id: 'jq_12',
    question: 'Ketika mendengar kabar duka bahwa kerabatnya meninggal dunia di medan perang Mu\'tah, apakah yang diperintahkan oleh Rasulullah SAW kepada para tetangga sekitar rumah duka Ja\'far bin Abi Thalib ra.?',
    options: [
      { id: 'a', text: 'Meminta keluarga Ja\'far menyiapkan jamuan makan untuk para tamu pelayat.' },
      { id: 'b', text: 'Membuatkan dan mengirimkan makanan untuk keluarga Ja\'far karena mereka sedang sibuk dengan musibah kesedihan.' },
      { id: 'c', text: 'Meminta keluarga duka meminjam uang untuk biaya upacara.' },
      { id: 'd', text: 'Menyuruh keluarga duka berpuasa selama 3 hari berturut-turut.' },
      { id: 'e', text: 'Melarang siapa pun mendekati rumah duka.' }
    ],
    correctOptionId: 'b',
    explanation: 'Rasulullah SAW bersabda: "Buatkanlah makanan untuk keluarga Ja\'far, karena sesungguhnya telah datang perkara yang menyibukkan mereka (kesedihan mendalam)". Sunnah bagi tetangga menyuplai makanan bagi keluarga duka, bukan malah membebani keluarga duka.',
    dalil: 'HR. Abu Dawud no. 3132 dan At-Tirmidzi no. 998.'
  },
  {
    id: 'jq_13',
    question: 'Bagaimanakah hukum meratapi jenazah (Niyāhah) dengan cara menjerit-jerit histeris, menampar pipi, atau merobek-robek kerah baju karena tidak menerima takdir kematian?',
    options: [
      { id: 'a', text: 'Mubah sebagai ekspresi wajar rasa duka.' },
      { id: 'b', text: 'HARAM mutlak dan tergolong dosa besar peninggalan tradisi jahiliyyah.' },
      { id: 'c', text: 'Sunnah muakkadah bila jenazah adalah tokoh ulama.' },
      { id: 'd', text: 'Makruh tanzih tanpa dosa.' },
      { id: 'e', text: 'Hanya haram bagi pria namun mubah bagi wanita.' }
    ],
    correctOptionId: 'b',
    explanation: 'Nabi SAW bersabda: "Bukan dari golongan kami orang yang menampar pipi, merobek baju, dan menyeru dengan seruan jahiliyyah (niyahah)". Menangis tanpa suara air mata menetes adalah rahmat dan mubah, namun meratap histeris adalah haram.',
    dalil: 'HR. Bukhari no. 1294 dan Muslim no. 103 dari Abdullah bin Mas\'ud ra.'
  },
  {
    id: 'jq_14',
    question: 'Di antara tujuan utama disyariatkannya Ziarah Kubur bagi orang yang masih hidup adalah:',
    options: [
      { id: 'a', text: 'Meminta keberkahan duniawi, kekayaan, dan jodoh kepada arwah kubur.' },
      { id: 'b', text: 'Mengingat kematian dan akhirat (Tadzkiratul Maut), melembutkan hati, serta mendoakan ampunan bagi ahli kubur.' },
      { id: 'c', text: 'Menghias makam dengan lampu neon berwarna-warni.' },
      { id: 'd', text: 'Memperlihatkan status sosial keluarga almarhum.' },
      { id: 'e', text: 'Mencari nomor undian dan ramalan nasib.' }
    ],
    correctOptionId: 'b',
    explanation: 'Rasulullah SAW bersabda: "Dahulu aku melarang kalian berziarah kubur, sekarang berziarahlah kalian! Karena sesungguhnya ziarah kubur itu dapat melunakkan hati, meneteskan air mata, dan mengingatkan akan akhirat".',
    dalil: 'HR. Muslim no. 977 dan Al-Hakim dari Buraidah ra.'
  },
  {
    id: 'jq_15',
    question: 'Apakah lafal salam yang diajarkan Rasulullah SAW ketika memasuki kawasan pemakaman kaum muslimin?',
    options: [
      { id: 'a', text: '"Assalāmu \'alaikum ya ahlal qubūr, antum lana farathun wa nahnu bil atsar...".' },
      { id: 'b', text: '"Assalāmu \'alā ahlid diyāri minal mu\'minīna wal muslimīn, wa innā in syā\'allāhu bikum lāhiqūn, nas\'alullāha lanā wa lakumul \'āfiyah".' },
      { id: 'c', text: 'Membaca surat Yasin tanpa salam.' },
      { id: 'd', text: '"Yā ahlal qubūr aghtsūnā".' },
      { id: 'e', text: 'Membunyikan lonceng perunggu.' }
    ],
    correctOptionId: 'b',
    explanation: 'Doa ziarah kubur yang diajarkan Nabi SAW kepada Aisyah ra.: "Assalamu \'ala ahlid diyari minal mu\'minina wal muslimin, wa inna in sya\'allahu bikum lahiqun, yarhamullahul mustaqdimina minna wal musta\'khirin, nas\'alullaha lana wa lakumul \'afiyah".',
    dalil: 'HR. Muslim no. 974 dari Aisyah ra. dan Sulaiman bin Buraidah.'
  },
  {
    id: 'jq_16',
    question: 'Bagaimanakah hukum membangun bangunan semen/tembok permanen, mendirikan kubah, atau mengecat nisan secara berlebihan di atas tanah pemakaman umum (Waqaf/Musabbalah)?',
    options: [
      { id: 'a', text: 'Sunnah muakkadah demi memperindah makam.' },
      { id: 'b', text: 'HARAM menurut kesepakatan fuqaha karena menyempitkan lahan kubur bagi muslim lainnya dan dilarang oleh Rasulullah SAW.' },
      { id: 'c', text: 'Mubah tanpa ada celaan syariat.' },
      { id: 'd', text: 'Wajib bagi makam orang-orang kaya.' },
      { id: 'e', text: 'Hanya makruh bila bangunannya kurang dari 2 meter.' }
    ],
    correctOptionId: 'b',
    explanation: 'Nabi SAW melarang menyemen kuburan, mendudukinya, dan mendirikan bangunan di atasnya. Di pemakaman umum (musabbalah), para ulama Syafi\'iyyah menegaskan haramnya membangun tembok permanen dan bangunan tersebut wajib dirobohkan.',
    dalil: 'HR. Muslim no. 970 dari Jabir bin Abdillah ra. & Kitab Al-Majmu\' juz 5.'
  },
  {
    id: 'jq_17',
    question: 'Siapakah pihak yang PALING BERHAK memandikan jenazah seorang laki-laki yang telah berkeluarga jika tidak ada wasiat khusus?',
    options: [
      { id: 'a', text: 'Petugas kebersihan desa setempat.' },
      { id: 'b', text: 'Ayah kandungnya, kakeknya, lalu anak laki-lakinya, kerabat ashabah laki-laki, kemudian istrinya yang sah.' },
      { id: 'c', text: 'Ibu mertua perempuannya.' },
      { id: 'd', text: 'Tetangga terdekat yang bukan mahram.' },
      { id: 'e', text: 'Teman kerja sekantornya.' }
    ],
    correctOptionId: 'b',
    explanation: 'Urutan yang paling berhak memandikan jenazah laki-laki adalah: kerabat ashabah laki-laki terdekat (ayah, kakek, anak laki-laki, saudara kandung), karena mereka paling paham menjaga kehormatan mayit, kemudian istrinya.',
    dalil: 'Kitab Matan Taqrib & Tuhfatul Muhtaj fi Syarhil Minhaj.'
  },
  {
    id: 'jq_18',
    question: 'Bagaimanakah hukum seorang suami memandikan jenazah istrinya yang sah, atau seorang istri memandikan jenazah suaminya yang sah menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Haram mutlak karena akad nikah putus seketika dengan kematian.' },
      { id: 'b', text: 'DIPERBOLEHKAN (SAH), berdasarkan amalan para sahabat dan wasiat Rasulullah SAW kepada Aisyah ra.' },
      { id: 'c', text: 'Hanya boleh melihat tanpa menyentuh air.' },
      { id: 'd', text: 'Makruh dan wajib membayar kaffarah.' },
      { id: 'e', text: 'Hanya sah jika tidak ada orang lain di muka bumi.' }
    ],
    correctOptionId: 'b',
    explanation: 'Suami boleh memandikan jenazah istrinya, dan istri boleh memandikan jenazah suaminya. Rasulullah SAW pernah bersabda kepada Aisyah ra.: "Jika engkau wafat sebelumku, maka aku yang akan memandikanmu dan mengafanimu" (HR. Ibnu Majah). Ali ra. juga memandikan jenazah Fathimah ra.',
    dalil: 'HR. Ibnu Majah no. 1465 dan Ad-Daraquthni juz 2 hal. 79.'
  },
  {
    id: 'jq_19',
    question: 'Seorang muslim wafat dalam keadaan sedang melaksanakan ibadah Ihram Haji atau Umrah. Manakah kekhususan tata cara pengurusan jenazah orang yang wafat dalam keadaan ihram (Muhrim)?',
    options: [
      { id: 'a', text: 'Tidak boleh dimandikan sama sekali.' },
      { id: 'b', text: 'Dimandikan dengan air dan daun bidara, TIDAK BOLEH diberi wewangian/minyak wangi, dan KEPALANYA TIDAK BOLEH DITUTUP kain kafan.' },
      { id: 'c', text: 'Wajib dipakaikan jas dan dasi.' },
      { id: 'd', text: 'Harus disembelihkan unta di Mekkah terlebih dahulu sebelum dimakamkan.' },
      { id: 'e', text: 'Kain ihramnya harus dibakar.' }
    ],
    correctOptionId: 'b',
    explanation: 'Nabi SAW bersabda tentang orang yang jatuh dari unta saat ihram: "Mandikanlah ia dengan air dan daun bidara, kafanilah dengan dua helai kain ihramnya, jangan beri wewangian dan jangan tutup kepalanya, karena ia akan dibangkitkan pada hari kiamat dalam keadaan bertalbiyah".',
    dalil: 'HR. Bukhari no. 1265 dan Muslim no. 1206 dari Ibnu Abbas ra.'
  },
  {
    id: 'jq_20',
    question: 'Di antara rukun Shalat Jenazah, terdapat rukun yang membedakannya secara visual dari shalat-shalat fardhu lainnya, yaitu:',
    options: [
      { id: 'a', text: 'Dikerjakan dengan 4 kali ruku\' dan 8 kali sujud.' },
      { id: 'b', text: 'TIDAK ADA ruku\', i\'tidal, dan sujud sama sekali; seluruhnya dikerjakan dalam posisi berdiri tegak dengan 4 kali takbir.' },
      { id: 'c', text: 'Dikerjakan dengan duduk bersila di samping jenazah.' },
      { id: 'd', text: 'Wajib menoleh ke arah kiblat saat salam.' },
      { id: 'e', text: 'Dilakukan tanpa membaca surat Al-Fatihah.' }
    ],
    correctOptionId: 'b',
    explanation: 'Shalat jenazah tidak memiliki ruku\' maupun sujud. Seluruh rukunnya dilaksanakan sambil berdiri tegak (bagi yang mampu) yang diselingi dengan empat kali takbir dan ditutup dengan salam.',
    dalil: 'Kitab Safinatun Najah Bab Shalatil Janazah & Al-Fiqhul Manhaji.'
  },
  {
    id: 'jq_21',
    question: 'Apakah hukum melaksanakan Shalat Ghaib (menyalatkan jenazah muslim yang berada di luar daerah/kota yang jauh dan tidak berada di hadapan mushalli)?',
    options: [
      { id: 'a', text: 'Haram dan tidak sah karena jenazah tidak hadir di depan shaf.' },
      { id: 'b', text: 'DISUNNAHKAN (SAH), sebagaimana Rasulullah SAW menyalatkan An-Najasyi (Raja Habasyah) saat mendengar kabar kewafatannya.' },
      { id: 'c', text: 'Hanya sah untuk para raja dan presiden.' },
      { id: 'd', text: 'Hanya boleh dilaksanakan di Masjid Nabawi Madinah.' },
      { id: 'e', text: 'Wajib mengulang shalat Zhuhur setelah shalat ghaib.' }
    ],
    correctOptionId: 'b',
    explanation: 'Shalat ghaib disunnahkan dalam Mazhab Syafi\'i untuk jenazah muslim yang wafat di tempat yang jauh dari tempat mukim mushalli. Dalil utamanya adalah Nabi SAW mengumumkan wafatnya An-Najasyi lalu keluar bersama para sahabat ke mushalla dan menyalatkannya 4 takbir.',
    dalil: 'HR. Bukhari no. 1317 dan Muslim no. 951 dari Abu Hurairah ra.'
  },
  {
    id: 'jq_22',
    question: 'Seseorang menaburkan kerikil dan menyiram air dingin di atas pusara makam yang baru selesai ditimbun, serta menancapkan pelepah kurma atau tanaman basah. Apakah hikmah syar\'i dari amalan tersebut?',
    options: [
      { id: 'a', text: 'Membuat makam menjadi dingin seperti ruangan ber-AC.' },
      { id: 'b', text: 'Menjaga tanah agar padat tidak mudah diterbangkan angin, dan tanaman basah bertasbih kepada Allah sehingga meringankan siksa kubur almarhum.' },
      { id: 'c', text: 'Sebagai tumbal tolak bala bagi desa.' },
      { id: 'd', text: 'Kewajiban agar mayit bisa bernafas.' },
      { id: 'e', text: 'Mencegah hewan liar menggali kubur.' }
    ],
    correctOptionId: 'b',
    explanation: 'Rasulullah SAW membelah pelepah kurma basah menjadi dua dan menancapkannya di atas dua kubur seraya bersabda: "Semoga diringankan siksanya selama kedua pelepah ini belum kering" (karena tanaman basah bertasbih kepada Allah). Menyiram air juga sunnah untuk memadatkan tanah kubur.',
    dalil: 'HR. Bukhari no. 218 dan Muslim no. 292 dari Ibnu Abbas ra.'
  },
  {
    id: 'jq_23',
    question: 'Manakah batas kedalaman liang kubur yang disunnahkan agar jenazah terlindungi dari gangguan hewan buas dan aroma mayit tidak tercium keluar?',
    options: [
      { id: 'a', text: 'Cukup sedalam 30 cm sebatas menimbun tubuh.' },
      { id: 'b', text: 'Sedalam tinggi seorang laki-laki dewasa yang berdiri sambil meluruskan kedua tangannya ke atas (± 1,8 hingga 2 meter) dan seluas yang melapangkan.' },
      { id: 'c', text: 'Minimal sedalam 5 meter menembus mata air.' },
      { id: 'd', text: 'Sedalam lutut orang dewasa.' },
      { id: 'e', text: 'Tidak ada ukuran, asalkan tertutup pasir tipis.' }
    ],
    correctOptionId: 'b',
    explanation: 'Ukuran kedalaman kubur yang disunnahkan adalah "Qāmah wa Basthah" (setinggi postur orang dewasa ditambah lambaian tangannya ke atas, sekitar 1,8–2 meter). Nabi SAW memerintahkan: "Galilah, perluaslah, dan perdalamlah" (Ahsinū wa awsi\'ū wa a\'miqū).',
    dalil: 'HR. At-Tirmidzi no. 1713 dan An-Nasa\'i no. 2010 dari Hisyam bin Amir ra.'
  },
  {
    id: 'jq_24',
    question: 'Seorang jenazah telah dimakamkan selama 2 hari. Pihak kepolisian membutuhkan autopsi forensik untuk mengungkap tindak pidana pembunuhan berencana atas izin keluarga dan hakim. Bagaimanakah hukum membongkar kembali kuburan tersebut menurut kaidah fiqih Islam?',
    options: [
      { id: 'a', text: 'Haram mutlak dalam kondisi apa pun walau ada pembunuhan.' },
      { id: 'b', text: 'Boleh (mubah) karena adanya hajat darurat dan maslahat syar\'i yang kuat untuk menegakkan keadilan (Fatwa Komisi Fatwa MUI & Fuqaha Syafi\'iyyah).' },
      { id: 'c', text: 'Wajib dihukum gantung bagi dokter yang membongkarnya.' },
      { id: 'd', text: 'Hanya boleh jika mayat belum membusuk sama sekali.' },
      { id: 'e', text: 'Boleh jika diganti dengan mengubur hewan ternak.' }
    ],
    correctOptionId: 'b',
    explanation: 'Hukum asal membongkar makam adalah haram demi menjaga kehormatan mayit. Namun para fuqaha memperbolehkannya apabila terdapat dharurah atau hajat mendesak, seperti ada harta berharga yang terjatuh, autopsi forensik pengadilan untuk mengungkap pembunuhan, atau mayit belum menghadap kiblat.',
    dalil: 'Kitab Tuhfatul Muhtaj juz 3 hal. 202 & Fatwa MUI tentang Autopsi Jenazah.'
  },
  {
    id: 'jq_25',
    question: 'Talqin mayit di atas kubur (mengingatkan kembali kalimat tauhid dan jawaban atas pertanyaan malaikat Munkar dan Nakir) setelah pemakaman selesai dilaksanakan. Bagaimanakah hukum amalan talqin ini menurut jumhur ulama Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Haram dan bid\'ah tercela yang membatalkan iman.' },
      { id: 'b', text: 'DISUNNAHKAN bagi jenazah yang mukallaf (dewasa), berdasarkan hadits Abu Umamah Al-Bahili ra. dan atsar fuqaha muta\'akhirin.' },
      { id: 'c', text: 'Wajib bagi jenazah anak kecil yang belum baligh.' },
      { id: 'd', text: 'Hanya disunnahkan pada hari Jum\'at legi.' },
      { id: 'e', text: 'Membatalkan keabsahan pemakaman.' }
    ],
    correctOptionId: 'b',
    explanation: 'Dalam Mazhab Syafi\'i, mentalkin mayit dewasa (mukallaf) setelah penguburan hukumnya sunnah. Imam An-Nawawi menegaskan: "Disunnahkan mentalkin mayit setelah dikubur... sebagaimana dinyatakan oleh jamaah ulama ashab kami".',
    dalil: 'Kitab Al-Majmu\' Syarah Al-Muhadzdzab juz 5 hal. 303 & Al-Adzkar karya Imam An-Nawawi.'
  }
];

const contentJenazah = `import { JenazahQuizQuestion } from '../../types/jenazah';

export const JENAZAH_QUIZ: JenazahQuizQuestion[] = ${JSON.stringify(jenazahQuestions, null, 2)};
`;

fs.writeFileSync('src/data/quizzes/jenazahQuizData.ts', contentJenazah);
console.log('Successfully generated src/data/quizzes/jenazahQuizData.ts with 25 questions');
