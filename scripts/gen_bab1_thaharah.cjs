// scripts/gen_bab1_thaharah.js
const fs = require('fs');

const thaharahQuestions = [
  {
    id: 'th_q1',
    question: 'Sebuah bak penampungan air berbentuk kubus dengan panjang sisi 60 cm terisi air bersih hingga penuh. Berdasarkan takaran Mazhab Syafi\'i, volume air tersebut setara dengan kategori dua qullah. Jika ke dalam bak tersebut terjatuh kotoran cicak sebesar biji beras namun air tidak mengalami perubahan warna, bau, maupun rasa, bagaimanakah status kesucian air tersebut?',
    options: [
      { id: 'a', text: 'Air menjadi mutanajjis secara mutlak karena kemasukan najis meskipun volumenya banyak.' },
      { id: 'b', text: 'Air tetap suci dan menyucikan (thahir muthahhir) karena mencapai dua qullah dan sifat fisiknya tidak berubah.' },
      { id: 'c', text: 'Air berstatus suci tetapi tidak dapat digunakan untuk bersuci (thahir ghairu muthahhir).' },
      { id: 'd', text: 'Air menjadi makruh digunakan untuk berwudhu karena bersentuhan dengan benda najis.' },
      { id: 'e', text: 'Air wajib dikuras separuh volumenya agar dapat kembali digunakan untuk bersuci.' }
    ],
    correctOptionId: 'b',
    explanation: 'Kaidah fiqih Syafi\'iyyah menyatakan bahwa air yang mencapai dua qullah (± 216 liter) tidak menjadi najis apabila kemasukan benda najis selama tidak ada perubahan pada salah satu dari tiga sifatnya: warna, rasa, atau bau.',
    dalil: 'HR. Abu Dawud no. 63 dan At-Tirmidzi no. 67 dari Ibnu Umar ra.: "Idza balaghal ma-u qullataini lam yahmilil khabats".'
  },
  {
    id: 'th_q2',
    question: 'Seseorang berwudhu menggunakan air dalam ember berukuran 10 liter. Tetesan air dari basuhan wajahnya jatuh kembali ke dalam ember tersebut. Bagaimanakah status sisa air di dalam ember menurut tinjauan hukum fiqih Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Menjadi air mutanajjis sehingga tidak halal diminum maupun dipakai bersuci.' },
      { id: 'b', text: 'Menjadi air musta\'mal sehingga suci zatnya tetapi tidak dapat menyucikan hadats lagi.' },
      { id: 'c', text: 'Tetap suci dan menyucikan secara sempurna karena air belum berubah warna dan aroma.' },
      { id: 'd', text: 'Menjadi air musyammas yang hukum penggunaannya makruh bagi tubuh.' },
      { id: 'e', text: 'Dihukumi air mutlak kembali apabila telah didiamkan hingga mengendap.' }
    ],
    correctOptionId: 'b',
    explanation: 'Air yang terpisah dari basuhan wajib pada rukun bersuci dan volumenya kurang dari dua qullah dikategorikan sebagai air musta\'mal. Air ini suci untuk diminum tetapi tidak sah digunakan bersuci ulang.',
    dalil: 'Kitab Fathul Qarib Al-Mujib & Matan Taqrib karya Syekh Abu Syuja\'.'
  },
  {
    id: 'th_q3',
    question: 'Seorang ibu mendapati pakaian bayinya yang berusia 7 bulan terkena air kencing. Bayi tersebut berjenis kelamin laki-laki dan hingga saat ini hanya mengonsumsi Air Susu Ibu (ASI) tanpa makanan pendamping apa pun. Bagaimanakah prosedur pensucian pakaian tersebut sesuai tuntunan syariat?',
    options: [
      { id: 'a', text: 'Dicuci sebanyak 7 kali basuhan dengan salah satunya dicampur debu tanah suci.' },
      { id: 'b', text: 'Cukup dipercikkan air mutlak secara merata pada area yang terkena air kencing hingga basah.' },
      { id: 'c', text: 'Wajib dialirkan air mengalir deras hingga hilang bau pesing dan warna kekuningannya.' },
      { id: 'd', text: 'Direndam dengan detergen selama 24 jam kemudian dibilas dengan tiga gayung air bersih.' },
      { id: 'e', text: 'Cukup dijemur di bawah terik matahari hingga kering tanpa perlu dipercikkan air.' }
    ],
    correctOptionId: 'b',
    explanation: 'Air kencing bayi laki-laki di bawah dua tahun yang murni hanya minum ASI dikategorikan sebagai najis mukhaffafah (ringan). Pensuciannya cukup dengan memercikkan air suci ke tempat najis hingga basah merata.',
    dalil: 'HR. Bukhari no. 223 dan Muslim no. 287 dari Ummu Qais binti Mihshan ra.'
  },
  {
    id: 'th_q4',
    question: 'Sebuah bejana tembikar dijilat oleh anjing pemburu. Sebelum digunakan kembali untuk memuat makanan, pemilik bejana wajib menyucikannya. Manakah tata cara penyucian yang benar sesuai hadits Rasulullah SAW?',
    options: [
      { id: 'a', text: 'Dibasuh sebanyak 3 kali dengan air mendidih lalu dikeringkan.' },
      { id: 'b', text: 'Dicuci sebanyak 7 kali basuhan air dan salah satu basuhannya dicampur dengan debu tanah suci.' },
      { id: 'c', text: 'Dibersihkan dengan sabun antiseptik kimia tanpa perlu campuran tanah sama sekali.' },
      { id: 'd', text: 'Dibakar di atas bara api sampai bekas air liur anjing menguap seluruhnya.' },
      { id: 'e', text: 'Cukup dibasuh 1 kali dengan air mengalir deras dari mata air.' }
    ],
    correctOptionId: 'b',
    explanation: 'Najis anjing dan babi tergolong najis mughalladhah (berat). Cara pensuciannya wajib dicuci sebanyak 7 kali dan salah satunya dicampur debu tanah suci.',
    dalil: 'HR. Muslim no. 279 dari Abu Hurairah ra.: "Thuhuru ina-i ahadikum idza walaghal kalbu fihi an yaghsilahu sab\'a marratin ulaahunna bit turab".'
  },
  {
    id: 'th_q5',
    question: 'Di antara rangkaian gerakan bersuci berikut, manakah yang seluruhnya merupakan rukun fardhu wudhu menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Membaca basmalah, membasuh muka, mengusap telinga, dan membasuh kaki.' },
      { id: 'b', text: 'Berkumur-kumur, menghirup air ke hidung, membasuh tangan sampai siku, dan tertib.' },
      { id: 'c', text: 'Niat, membasuh wajah, membasuh kedua tangan sampai siku, mengusap sebagian kepala, membasuh kaki sampai mata kaki, dan tertib.' },
      { id: 'd', text: 'Niat, menyela-nyela jenggot, membasuh tangan sampai siku, dan membasuh leher.' },
      { id: 'e', text: 'Membasuh wajah, mengusap seluruh kepala, membasuh kedua daun telinga, dan mendahulukan kanan.' }
    ],
    correctOptionId: 'c',
    explanation: 'Rukun fardhu wudhu dalam Mazhab Syafi\'i ada 6: Niat saat membasuh muka, membasuh muka, membasuh kedua tangan hingga siku, mengusap sebagian kepala, membasuh kedua kaki hingga mata kaki, serta tertib.',
    dalil: 'QS. Al-Ma\'idah ayat 6.'
  },
  {
    id: 'th_q6',
    question: 'Seseorang hendak menunaikan shalat Zhuhur di daerah yang mengalami krisis air parah. Setelah berusaha mencari air hingga batas radius yang ditentukan syariat dan tidak menemukannya, ia memilih bertayamum. Manakah rukun fardhu tayamum yang benar?',
    options: [
      { id: 'a', text: 'Niat mengangkat hadats besar, membasuh wajah, mengusap kepala, dan membasuh kaki.' },
      { id: 'b', text: 'Niat untuk diperbolehkan shalat (istibahatus shalah), mengusap wajah, mengusap kedua tangan sampai siku dengan debu, dan tertib.' },
      { id: 'c', text: 'Mengusap wajah, berkumur-kumur dengan debu halus, dan mengusap kedua telapak tangan.' },
      { id: 'd', text: 'Membaca basmalah, mengusap wajah, mengusap telinga, dan mengusap kaki sampai mata kaki.' },
      { id: 'e', text: 'Niat wudhu, menepuk dinding 3 kali, mengusap wajah, dan mengusap leher.' }
    ],
    correctOptionId: 'b',
    explanation: 'Niat tayamum bukan berniat mengangkat hadats (karena debu tidak mengangkat hadats melainkan hanya membolehkan shalat), melainkan berniat li istibahatis shalah. Dilanjutkan mengusap wajah, mengusap kedua tangan sampai siku dengan 2 kali tepukan debu, dan tertib.',
    dalil: 'QS. An-Nisa ayat 43 dan Matan Safinatun Najah.'
  },
  {
    id: 'th_q7',
    question: 'Ketika seseorang sedang menjalankan shalat fardhu dengan bersuci menggunakan tayamum karena ketiadaan air, tiba-tiba hujan deras turun sehingga air melimpah ruah di sekitarnya. Bagaimanakah status shalat orang tersebut jika ia berada di luar kawasan pemukiman (musafir)?',
    options: [
      { id: 'a', text: 'Shalatnya otomatis batal seketika dan ia wajib berwudhu dengan air lalu mengulang shalat dari awal.' },
      { id: 'b', text: 'Shalatnya tetap sah dan boleh dilanjutkan hingga salam tanpa perlu mengulang (qadha) setelahnya.' },
      { id: 'c', text: 'Shalatnya menjadi makruh dan ia harus sujud sahwi sebelum salam.' },
      { id: 'd', text: 'Shalatnya sah namun setelah selesai ia wajib mengulanginya kembali dengan wudhu air.' },
      { id: 'e', text: 'Ia wajib membatalkan shalat hanya jika air hujan menyentuh kulit tubuhnya langsung.' }
    ],
    correctOptionId: 'b',
    explanation: 'Jika orang yang bertayamum karena ketiadaan air melihat atau mendapati air saat sudah masuk ke dalam shalat, dan shalatnya adalah shalat yang tidak wajib diqadha (seperti musafir di tempat yang umumnya tidak ada air), maka ia tidak wajib membatalkan shalatnya dan shalatnya sah.',
    dalil: 'Kitab Al-Majmu\' Syarah Al-Muhadzdzab karya Imam An-Nawawi.'
  },
  {
    id: 'th_q8',
    question: 'Dalam fiqih Mazhab Syafi\'i, kapankah waktu yang diwajibkan untuk melafalkan atau menghadirkan niat di dalam hati saat seseorang mengambil wudhu?',
    options: [
      { id: 'a', text: 'Saat pertama kali membasuh kedua telapak tangan di awal wudhu.' },
      { id: 'b', text: 'Tepat bersamaan dengan saat air pertama kali menyentuh bagian dari permukaan wajah.' },
      { id: 'c', text: 'Ketika berkumur-kumur dan membersihkan rongga mulut.' },
      { id: 'd', text: 'Sesaat sebelum melangkah menuju tempat mengambil air wudhu.' },
      { id: 'e', text: 'Setelah selesai membasuh seluruh anggota wudhu sebagai penutup.' }
    ],
    correctOptionId: 'b',
    explanation: 'Kaidah niat dalam ibadah adalah muqaranatun niyyah bil fi\'li (menyertakan niat bersamaan dengan awal mula pelaksanaan perbuatan fardhu). Karena basuhan telapak tangan adalah sunnah dan basuhan muka adalah fardhu pertama wudhu, maka niat wajib hadir bersamaan dengan basuhan awal wajah.',
    dalil: 'Matan Al-Ghayah wat Taqrib karya Al-Qadhi Abu Syuja\'.'
  },
  {
    id: 'th_q9',
    question: 'Ahmad selesai menunaikan shalat Ashar. Tiga puluh menit kemudian, ia teringat dengan pasti bahwa saat berwudhu tadi ia melupakan rukun mengusap sebagian kepala, namun ia langsung membasuh kaki dan tertib dengan rukun lainnya. Bagaimanakah status shalat Ashar yang telah dikerjakannya?',
    options: [
      { id: 'a', text: 'Shalatnya tetap sah karena rukun mengusap kepala dapat digantikan dengan membaca istighfar.' },
      { id: 'b', text: 'Shalatnya tidak sah karena wudhunya batal, sehingga ia wajib mengulang wudhu secara sempurna dan mengqadha shalat Ashar.' },
      { id: 'c', text: 'Shalatnya sah asalkan ia melakukan sujud sahwi secara tersendiri di luar shalat.' },
      { id: 'd', text: 'Cukup mengusap kepala saat itu juga tanpa perlu mengulangi shalat Ashar.' },
      { id: 'e', text: 'Shalatnya berstatus makruh tanzih dan pahalanya berkurang separuh.' }
    ],
    correctOptionId: 'b',
    explanation: 'Mengusap sebagian kepala adalah rukun fardhu wudhu berdasarkan nash Al-Qur\'an. Tertinggalnya satu rukun membatalkan keabsahan wudhu secara keseluruhan, sehingga shalat yang dikerjakan tanpa thaharah yang sah menjadi tidak sah.',
    dalil: 'QS. Al-Ma\'idah: 6 dan Hadits Nabi SAW: "La yaqbalullahu shalata ahadikum idza ahdatsa hatta yatawadh-dha".'
  },
  {
    id: 'th_q10',
    question: 'Ditinjau dari hukum Islam, air musyammas (air yang terpanaskan oleh sinar matahari) makruh digunakan untuk bersuci pada anggota badan apabila memenuhi syarat-syarat tertentu. Manakah kriteria yang tepat terkait kemakruhan air musyammas?',
    options: [
      { id: 'a', text: 'Dipanaskan dalam wadah kaca transparan di daerah beriklim dingin.' },
      { id: 'b', text: 'Terkena sinar matahari di daerah beriklim tropis/panas dalam wadah logam berkarat selain emas dan perak.' },
      { id: 'c', text: 'Air yang dipanaskan di atas kompor dengan wadah periuk tembaga murni.' },
      { id: 'd', text: 'Air danau luas yang terpapar matahari sepanjang siang hari.' },
      { id: 'e', text: 'Air yang dihangatkan menggunakan pemanas listrik modern.' }
    ],
    correctOptionId: 'b',
    explanation: 'Kemakruhan air musyammas disyaratkan: terjadi di negeri yang beriklim panas, dalam wadah logam yang dapat ditempa (seperti besi, tembaga, seng) yang dapat mengeluarkan zat karat (zuhumah) pemicu penyakit kulit (barash/kusta), dan digunakan saat masih panas pada badan.',
    dalil: 'Atsar Umar bin Khaththab ra. dan penjelasan Imam Syafi\'i dalam Kitab Al-Umm.'
  },
  {
    id: 'th_q11',
    question: 'Berikut adalah perkara-perkara yang membatalkan wudhu menurut Mazhab Syafi\'i, KECUALI:',
    options: [
      { id: 'a', text: 'Keluarnya sesuatu dari salah satu dari dua jalan (qubul atau dubur).' },
      { id: 'b', text: 'Hilang akal karena tidur pulas dalam posisi pantat tidak menempel mantap pada lantai.' },
      { id: 'c', text: 'Bersentuhan kulit antara laki-laki dan perempuan ajnabi (bukan mahram) tanpa penghalang.' },
      { id: 'd', text: 'Menyentuh kemaluan manusia dengan telapak tangan bagian dalam tanpa pembatas.' },
      { id: 'e', text: 'Keluarnya darah mimisan dari hidung atau darah dari luka di lengan tangan.' }
    ],
    correctOptionId: 'e',
    explanation: 'Keluarnya darah mimisan, luka berdarah, atau muntah tidak membatalkan wudhu dalam Mazhab Syafi\'i (berbeda dengan Mazhab Hanafi). Pembatal wudhu hanya 4 perkara: keluar sesuatu dari dua jalan, hilang akal/tidur tidak mantap, sentuhan kulit bukan mahram, dan sentuh kemaluan dengan telapak tangan bagian dalam.',
    dalil: 'Matan Safinatun Najah & Al-Majmu\' karya An-Nawawi.'
  },
  {
    id: 'th_q12',
    question: 'Seorang musafir mengenakan sepasang sepatu khuff (kulit yang menutup mata kaki) setelah bersuci secara sempurna dari hadats kecil dan besar. Berapa lamakah batas maksimal ia diperbolehkan mengusap bagian atas khuff sebagai pengganti basuhan kaki saat berwudhu?',
    options: [
      { id: 'a', text: '1 hari 1 malam (24 jam) terhitung sejak mulai berhadas.' },
      { id: 'b', text: '3 hari 3 malam (72 jam) terhitung sejak berhadas pertama kali setelah memakai khuff.' },
      { id: 'c', text: '5 hari 5 malam selama khuff tidak dilepas sama sekali.' },
      { id: 'd', text: '7 hari terhitung sejak dimulainya keberangkatan safar.' },
      { id: 'e', text: 'Tidak ada batas waktu selama masih dalam status musafir.' }
    ],
    correctOptionId: 'b',
    explanation: 'Masa rukhshah mengusap khuff bagi musafir adalah 3 hari 3 malam (72 jam), sedangkan bagi orang mukim (menetap) adalah 1 hari 1 malam (24 jam). Perhitungan dimulai sejak terjadinya hadats pertama setelah mengenakan khuff.',
    dalil: 'HR. Muslim no. 276 dari Ali bin Abi Thalib ra.'
  },
  {
    id: 'th_q13',
    question: 'Dalam tata cara mengusap khuff, bagaimanakah cara pengusapan yang diwajibkan oleh syariat agar wudhu dinyatakan sah?',
    options: [
      { id: 'a', text: 'Mengusap seluruh permukaan bawah telapak sepatu khuff hingga merata.' },
      { id: 'b', text: 'Mengusap bagian atas punggung sepatu khuff walau hanya beberapa garis basuhan.' },
      { id: 'c', text: 'Membasahi seluruh bagian tumit dan sisi belakang khuff.' },
      { id: 'd', text: 'Mencelupkan kedua kaki yang bersepatu ke dalam wadah air mengalir.' },
      { id: 'e', text: 'Mengusap bagian dalam sepatu khuff secara langsung ke kulit.' }
    ],
    correctOptionId: 'b',
    explanation: 'Kewajiban mengusap khuff terletak pada bagian atas punggung sepatu (zhahirul khuff). Ali ra. berkata: "Sekiranya agama itu dengan akal pikiran semata, niscaya bagian bawah khuff lebih utama diusap daripada bagian atasnya, padahal aku melihat Rasulullah SAW mengusap bagian atas khuffnya."',
    dalil: 'HR. Abu Dawud no. 162 dengan sanad shahih.'
  },
  {
    id: 'th_q14',
    question: 'Manakah di antara sebab-sebab berikut yang mewajibkan seseorang melaksanakan Mandi Besar (Ghusl Janabah)?',
    options: [
      { id: 'a', text: 'Keluarnya cairan madzi saat syahwat memuncak.' },
      { id: 'b', text: 'Keluarnya cairan wadi setelah buang air kecil.' },
      { id: 'c', text: 'Bertemunya dua kemaluan (khitan) atau masuknya hasyafah ke dalam farji meskipun tidak keluar mani.' },
      { id: 'd', text: 'Menyentuh bangkai binatang halal yang disembelih tidak syar\'i.' },
      { id: 'e', text: 'Terbangun dari tidur dalam keadaan bermimpi buruk tanpa mendapati bekas basah mani.' }
    ],
    correctOptionId: 'c',
    explanation: 'Sebab yang mewajibkan mandi besar ada 6 perkara: keluarnya mani, bertemunya dua kemaluan (jima\'), haid, nifas, melahirkan (wiladah), dan kematian.',
    dalil: 'HR. Muslim no. 349: "Idzal taqal khitanani fa qad wajabal ghuslu".'
  },
  {
    id: 'th_q15',
    question: 'Apakah rukun fardhu mandi besar yang wajib dipenuhi agar seseorang suci kembali dari hadats besar menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Membaca basmalah, berwudhu sebelum mandi, dan membasuh kaki di akhir.' },
      { id: 'b', text: 'Niat mengangkat hadats besar dan meratakan air ke seluruh permukaan kulit dan rambut luar-dalam.' },
      { id: 'c', text: 'Menggosok seluruh tubuh dengan sabun dan wewangian non-alkohol.' },
      { id: 'd', text: 'Menyiram kepala sebanyak 3 kali dan berkumur-kumur hingga tenggorokan.' },
      { id: 'e', text: 'Niat mandi, membasuh anggota wudhu, dan berdiam diri sejenak di bawah pancuran.' }
    ],
    correctOptionId: 'b',
    explanation: 'Rukun fardhu mandi besar hanya ada dua: (1) Niat menghilangkan hadats besar bersamaan dengan basuhan pertama pada tubuh, dan (2) Meratakan air ke seluruh permukaan kulit tubuh serta rambut luar maupun dalam sampai ke akar-akarnya.',
    dalil: 'QS. An-Nisa: 43, QS. Al-Ma\'idah: 6, dan Matan Safinatun Najah.'
  },
  {
    id: 'th_q16',
    question: 'Seorang wanita selesai bersuci dari hadats besar dengan mandi janabah. Setelah selesai dan berpakaian, ia menyadari ada cat kuku kedap air (kuteks non-breathable) seluas kuku jari manisnya yang belum dibersihkan sehingga menghalangi sampainya air ke kuku. Bagaimanakah tindakan yang wajib ia lakukan?',
    options: [
      { id: 'a', text: 'Cukup berwudhu biasa tanpa perlu mengulangi basuhan pada kuku tersebut.' },
      { id: 'b', text: 'Menghilangkan cat kuku tersebut dan membasuh kuku jari manis tersebut dengan air, tanpa harus mengulang seluruh mandi dari awal.' },
      { id: 'c', text: 'Wajib mengulangi seluruh rangkaian mandi janabah dari awal secara total.' },
      { id: 'd', text: 'Membayar fidyah satu mud beras karena ketidaksengajaan tersebut.' },
      { id: 'e', text: 'Melakukan tayamum khusus untuk menggantikan anggota tubuh yang tertutup kuteks.' }
    ],
    correctOptionId: 'b',
    explanation: 'Dalam mandi besar tidak disyaratkan muwalat (bersambung terus-menerus tanpa jeda) menurut Mazhab Syafi\'i. Jika ada bagian anggota tubuh yang belum terkena air karena tertutup penghalang, cukup hilangkan penghalang tersebut lalu basuh bagian tersebut dengan niat menyempurnakan mandi.',
    dalil: 'Kitab Fathul Mu\'in bi Syarhi Qurratil \'Ain.'
  },
  {
    id: 'th_q17',
    question: 'Jika seseorang ingin beristinja\' menggunakan batu atau benda padat lainnya tanpa menggunakan air, syariat menetapkan beberapa syarat keabsahan. Manakah di antara kriteria berikut yang BUKAN merupakan syarat sah istinja\' dengan batu?',
    options: [
      { id: 'a', text: 'Menggunakan minimal 3 buah batu atau 1 batu yang memiliki minimal 3 sisi bersih.' },
      { id: 'b', text: 'Kotoran yang keluar belum mengering.' },
      { id: 'c', text: 'Kotoran tidak berpindah melewati batas lingkaran dubur atau kepala kemaluan.' },
      { id: 'd', text: 'Kotoran tidak tercampur dengan benda asing lainnya yang basah.' },
      { id: 'e', text: 'Batu yang digunakan harus dipanaskan terlebih dahulu agar higienis.' }
    ],
    correctOptionId: 'e',
    explanation: 'Syarat istinja dengan batu: minimal 3 usapan batu bersih, kotoran belum kering, kotoran tidak berpindah dari tempat keluarnya, kotoran tidak terkena cairan lain, batu harus suci dan kasap (dapat membersihkan) serta tidak dimuliakan. Memanaskan batu bukan syarat syariat.',
    dalil: 'Matan Taqrib & Safinatun Najah Bab Syuruthul Istinja\'.'
  },
  {
    id: 'th_q18',
    question: 'Bagaimanakah hukum beristinja\' menggunakan kertas lembaran yang bertuliskan ayat-ayat Al-Qur\'an, hadits Nabi, atau nama-nama ilmu syar\'i?',
    options: [
      { id: 'a', text: 'Mubah jika dalam kondisi darurat tidak menemukan batu sama sekali.' },
      { id: 'b', text: 'Makruh tanzih karena kertas merupakan benda yang mudah robek.' },
      { id: 'c', text: 'Haram mutlak dan tidak sah istinja\'nya karena melecehkan hal yang dimuliakan syariat.' },
      { id: 'd', text: 'Boleh asalkan tulisannya dihapus terlebih dahulu dengan air liur.' },
      { id: 'e', text: 'Sunnah apabila dimaksudkan untuk memusnahkan mushaf yang rusak.' }
    ],
    correctOptionId: 'c',
    explanation: 'Benda yang digunakan untuk istinja disyaratkan bukan benda yang dihormati (ghairu muhtaram). Menggunakan makanan atau kertas yang memuat nama Allah, ayat Al-Qur\'an, dan ilmu syar\'i hukumnya haram keras dan pelakunya berdosa besar.',
    dalil: 'I\'anatut Thalibin juz 1 hal. 110.'
  },
  {
    id: 'th_q19',
    question: 'Ketika seseorang membasuh anggota wudhu, ia dianjurkan menyempurnakan basuhan melebihi batas fardhu, yaitu membasuh lengan hingga melampaui siku dan membasuh kaki hingga betis. Praktik sunnah ini dalam istilah fiqih disebut:',
    options: [
      { id: 'a', text: 'Al-Ghurrah dan At-Tahjil' },
      { id: 'b', text: 'Al-Muwalat dan At-Tartib' },
      { id: 'c', text: 'Al-Istinsyaq dan Al-Madhmadlah' },
      { id: 'd', text: 'At-Tasmiyah dan At-Tayammun' },
      { id: 'e', text: 'Ad-Dalk dan At-Takhlil' }
    ],
    correctOptionId: 'a',
    explanation: 'Al-Ghurrah adalah membasuh bagian depan kepala bersama wajah melebihi batas wajib, sedangkan At-Tahjil adalah membasuh lengan melebihi siku dan kaki melebihi mata kaki hingga betis.',
    dalil: 'HR. Bukhari no. 136 dan Muslim no. 246: "Inna ummati yud\'auna yaumal qiyamati ghurran muhajjalina min atsāril wudhū\'".'
  },
  {
    id: 'th_q20',
    question: 'Seorang pasien dipasangi gips (pembalut luka/jabirah) pada seluruh pergelangan tangan kirinya akibat patah tulang. Ketika hendak shalat, bagaimana tata cara bersucinya menurut Mazhab Syafi\'i?',
    options: [
      { id: 'a', text: 'Cukup berwudhu biasa tanpa menyentuh area gips sama sekali.' },
      { id: 'b', text: 'Wajib meninggalkan shalat hingga gips dibuka oleh dokter ortopedi.' },
      { id: 'c', text: 'Membasuh anggota wudhu yang sehat, mengusap air di atas permukaan gips, dan bertayamum untuk mengganti anggota yang tertutup gips.' },
      { id: 'd', text: 'Hanya melakukan tayamum saja tanpa perlu membasuh anggota badan yang sehat.' },
      { id: 'e', text: 'Menyiram seluruh gips dengan air mengalir sampai basah kuyup ke dalam kulit.' }
    ],
    correctOptionId: 'c',
    explanation: 'Tata cara bersuci orang yang memakai perban/jabirah dalam Mazhab Syafi\'i adalah membasuh anggota tubuh yang sehat, mengusap bagian atas jabirah dengan air, dan melakukan tayamum sebagai pengganti basuhan pada bagian yang terhalang perban.',
    dalil: 'Kitab Al-Majmu\' Syarah Al-Muhadzdzab karya Imam An-Nawawi.'
  },
  {
    id: 'th_q21',
    question: 'Zaid ragu-ragu di tengah pelaksanaan shalat apakah ia masih dalam keadaan suci atau sudah berhadats kentut. Sebelum shalat ia yakin 100% telah berwudhu. Berdasarkan kaidah fiqih universal, bagaimanakah status wudhu Zaid?',
    options: [
      { id: 'a', text: 'Wudhunya batal seketika karena keraguan membatalkan kepastian.' },
      { id: 'b', text: 'Wudhunya tetap sah dan ia harus melanjutkan shalatnya karena keyakinan tidak dapat dihilangkan oleh keraguan.' },
      { id: 'c', text: 'Ia wajib membatalkan shalat dan mengulang wudhu agar hatinya tenteram.' },
      { id: 'd', text: 'Shalatnya sah asalkan diakhiri dengan dua sujud sahwi.' },
      { id: 'e', text: 'Ia harus bertanya kepada orang di sebelahnya apakah mencium aroma tidak sedap.' }
    ],
    correctOptionId: 'b',
    explanation: 'Berdasarkan kaidah fiqih "Al-Yaqīnu lā yazūlu bisy-syakk" (Keyakinan tidak bisa dihilangkan dengan keraguan). Karena keadaan awal yang meyakinkan adalah bersuci, maka keraguan akan adanya hadats diabaikan sampai ada bukti jelas (suara atau bau).',
    dalil: 'HR. Bukhari no. 137 dan Muslim no. 361.'
  },
  {
    id: 'th_q22',
    question: 'Manakah di antara jenis air berikut ini yang tergolong sebagai "Air Thahir Ghairu Muthahhir" (Suci Zatnya tetapi Tidak Menyucikan)?',
    options: [
      { id: 'a', text: 'Air embun murni yang menempel pada dedaunan di pagi hari.' },
      { id: 'b', text: 'Air teh manis atau air kopi yang telah diseduh hingga berubah warna, bau, dan rasanya secara permanen.' },
      { id: 'c', text: 'Air sumur yang kemasukan debu jalanan namun tetap jernih.' },
      { id: 'd', text: 'Air laut yang berasa sangat asin dan berbusa.' },
      { id: 'e', text: 'Air salju yang mencair menjadi air dingin mengalir.' }
    ],
    correctOptionId: 'b',
    explanation: 'Air yang suci tetapi tidak menyucikan meliputi air musta\'mal dan air mutlak yang tercampur dengan zat suci (mukhalith) yang merubah nama dan sifat air secara drastis (seperti air teh, susu, kopi, sirop) sehingga terlepas predikat "air mutlak".',
    dalil: 'Kitab Matan Al-Ghayah wat Taqrib.'
  },
  {
    id: 'th_q23',
    question: 'Di antara bangkai binatang berikut, manakah bangkai yang dihukumi SUCI dan halal dikonsumsi tanpa melalui proses penyembelihan syar\'i?',
    options: [
      { id: 'a', text: 'Bangkai ayam dan bangkai bebek.' },
      { id: 'b', text: 'Bangkai ikan dan bangkai belalang.' },
      { id: 'c', text: 'Bangkai kambing dan bangkai sapi yang tercekik.' },
      { id: 'd', text: 'Bangkai burung merpati yang terjatuh dari pohon.' },
      { id: 'e', text: 'Bangkai kelinci liar yang tertabrak kendaraan.' }
    ],
    correctOptionId: 'b',
    explanation: 'Seluruh bangkai binatang adalah najis kecuali dua macam bangkai yang dihalalkan syariat, yaitu bangkai ikan dan bangkai belalang.',
    dalil: 'HR. Ibnu Majah no. 3218 dan Ahmad dari Ibnu Umar ra.: "Uhillat lanā maitatāni wa damāni: fa ammal maitatāni fal hūtu wal jarād...".'
  },
  {
    id: 'th_q24',
    question: 'Seorang penyamak kulit mengolah kulit bangkai kambing dengan membersihkan lendir, darah, dan daging sisa menggunakan bahan penyamak yang sepat dan pahit (qardh). Bagaimanakah status kesucian kulit tersebut setelah disamak sempurna?',
    options: [
      { id: 'a', text: 'Tetap najis mughalladhah selamanya dan haram dimanfaatkan.' },
      { id: 'b', text: 'Kulit menjadi suci bagian luar dan dalamnya sehingga boleh dimanfaatkan sebagai pakaian atau alas shalat.' },
      { id: 'c', text: 'Hanya suci bagian luarnya saja sedangkan bagian dalamnya tetap najis.' },
      { id: 'd', text: 'Boleh dijualbelikan tetapi haram disentuh saat berwudhu.' },
      { id: 'e', text: 'Hanya suci jika kulit tersebut berasal dari hewan yang disembelih secara syar\'i.' }
    ],
    correctOptionId: 'b',
    explanation: 'Kaidah menyamak (dibagh): Seluruh kulit bangkai menjadi suci dengan cara disamak, kecuali kulit anjing dan babi serta peranakan dari salah satunya.',
    dalil: 'HR. Muslim no. 366 dari Ibnu Abbas ra.: "Idza dubighal ihabu fa qad thahura".'
  },
  {
    id: 'th_q25',
    question: 'Ketika membersihkan kotoran kencing pada lantai keramik, seseorang mengelap cairan kencing dengan kain pel basah sekali saja tanpa mengeringkan atau membilasnya dengan air mengalir, sehingga lantai masih tercium aroma pesing yang tajam. Bagaimanakah status lantai tersebut?',
    options: [
      { id: 'a', text: 'Lantai telah suci sempurna karena najis sudah terbasuh oleh air pel.' },
      { id: 'b', text: 'Lantai masih berstatus mutanajjis (najis \'ainiyyah) karena bau pesing sebagai sifat najis masih tertinggal.' },
      { id: 'c', text: 'Lantai berstatus makruh untuk diinjak namun sah untuk sujud shalat.' },
      { id: 'd', text: 'Najisnya telah berubah menjadi najis hukmiyyah yang dimaafkan.' },
      { id: 'e', text: 'Lantai menjadi suci otomatis setelah mengering terkena tiupan angin.' }
    ],
    correctOptionId: 'b',
    explanation: 'Pensucian najis \'ainiyyah (najis yang masih memiliki wujud, warna, rasa, atau bau) mewajibkan hilangnya seluruh zat dan sifat-sifat najis tersebut. Jika bau najis masih ada dan mudah dihilangkan, maka tempat tersebut masih najis mutanajjis.',
    dalil: 'Kitab Kasyifatus Saja Syarah Safinatin Naja karya Syekh Nawawi Al-Bantani.'
  }
];

const content = `import { ThaharahQuizQuestion } from '../../types/thaharah';

export const THAHARAH_QUIZ: ThaharahQuizQuestion[] = ${JSON.stringify(thaharahQuestions, null, 2)};
`;

fs.writeFileSync('src/data/quizzes/thaharahQuizData.ts', content);
console.log('Successfully generated src/data/quizzes/thaharahQuizData.ts with 25 questions');
