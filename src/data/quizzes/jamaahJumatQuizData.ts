import { JamaahJumatQuizQuestion } from '../../types/jamaahJumat';

export const JAMAAH_JUMAT_QUIZ: JamaahJumatQuizQuestion[] = [
  {
    "id": "jj_1",
    "question": "Berapakah jumlah minimal jama'ah Shalat Jum'at yang memenuhi kriteria mustautin (penduduk tetap yang mukallaf, merdeka, dan laki-laki) menurut ketentuan mu'tamad Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "Cukup 3 orang (1 imam dan 2 makmum)."
      },
      {
        "id": "b",
        "text": "Minimal 12 orang sebagaimana riwayat kafilah dagang Dihyah Al-Kalbi."
      },
      {
        "id": "c",
        "text": "Minimal 40 orang mustautin dari awal khutbah hingga salam shalat selesai."
      },
      {
        "id": "d",
        "text": "Minimal 7 orang dari kalangan sesepuh kampung."
      },
      {
        "id": "e",
        "text": "Tidak ada batas minimal asalkan diadakan di masjid jami'."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Dalam Mazhab Syafi'i, syarat sah berdirinya shalat Jum'at adalah dihadiri minimal 40 orang jamaah yang memenuhi kriteria: muslim, baligh, berakal, laki-laki, merdeka, dan mustautin (penduduk yang bertempat tinggal tetap, bukan musafir atau muqim musiman).",
    "dalil": "HR. Al-Baihaqi dan Ad-Daraquthni dari Jabir bin Abdillah ra., serta riwayat Ka'ab bin Malik tentang Jum'at pertama di Madinah (40 orang)."
  },
  {
    "id": "jj_2",
    "question": "Seorang makmum masbuq mendapati imam shalat Jum'at sedang berada pada posisi tasyahhud akhir di rakaat kedua. Makmum tersebut segera bertakbiratul ihram dan duduk mengikuti imam hingga salam. Bagaimanakah makmum tersebut menyempurnakan shalatnya?",
    "options": [
      {
        "id": "a",
        "text": "Bangkit menambah 2 rakaat shalat Jum'at."
      },
      {
        "id": "b",
        "text": "Bangkit menyempurnakan shalat menjadi 4 rakaat Shalat Zhuhur."
      },
      {
        "id": "c",
        "text": "Shalatnya otomatis batal dan ia wajib mengulang shalat Zhuhur dari takbiratul ihram baru."
      },
      {
        "id": "d",
        "text": "Cukup menambah 1 rakaat shalat Jum'at dan sujud sahwi."
      },
      {
        "id": "e",
        "text": "Shalatnya sah sebagai shalat Jum'at tanpa perlu menambah rakaat."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Kaidah mendapatkan shalat Jum'at: \"Barangsiapa mendapati satu rakaat dari shalat Jum'at (yakni mendapati ruku' bersama imam pada rakaat kedua), maka ia telah mendapati Jum'at dan cukup menambah 1 rakaat. Namun jika mendapati setelah ruku' rakaat kedua, ia wajib menyempurnakannya sebagai shalat Zhuhur 4 rakaat\".",
    "dalil": "HR. Ad-Daraquthni no. 1578 dan Al-Hakim: \"Man adraka minash shalātil jum'ati rak'atan fa liyudhaf ilaihā ukhrā...\"."
  },
  {
    "id": "jj_3",
    "question": "Di antara rukun-rukun Khutbah Jum'at berikut, manakah rukun yang WAJIB dibaca pada KEDUA khutbah (khutbah pertama dan khutbah kedua)?",
    "options": [
      {
        "id": "a",
        "text": "Membaca satu ayat Al-Qur'an secara utuh."
      },
      {
        "id": "b",
        "text": "Memuji Allah (Hamdalah), Shalawat atas Nabi SAW, dan Wasiat Taqwa."
      },
      {
        "id": "c",
        "text": "Mendoakan kaum mukminin dan mukminat."
      },
      {
        "id": "d",
        "text": "Duduk istirahat di antara dua khutbah."
      },
      {
        "id": "e",
        "text": "Membaca surat Al-Ikhlas."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Lima rukun khutbah Jum'at: (1) Hamdalah, (2) Shalawat Nabi, dan (3) Wasiat Taqwa (ketiganya wajib ada pada kedua khutbah), (4) Membaca ayat Al-Qur'an pada salah satu dari dua khutbah, dan (5) Doa ampunan bagi kaum mukminin pada khutbah kedua.",
    "dalil": "Kitab Matan Al-Ghayah wat Taqrib Bab Shalatil Jum'ah."
  },
  {
    "id": "jj_4",
    "question": "Apakah hukum asal shalat berjamaah pada shalat fardhu lima waktu bagi laki-laki mukim (tidak bepergian) di suatu perkampungan menurut pendapat mu'tamad Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "Fardhu 'Ain bagi setiap individu muslim."
      },
      {
        "id": "b",
        "text": "Fardhu Kifayah sehingga syiar shalat berjamaah wajib tampak di perkampungan tersebut."
      },
      {
        "id": "c",
        "text": "Sunnah Ghairu Mu'akkadah."
      },
      {
        "id": "d",
        "text": "Syarat sah bagi diterimanya shalat fardhu."
      },
      {
        "id": "e",
        "text": "Mubah tergantung kesibukan masing-masing."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Menurut pendapat mu'tamad Imam Asy-Syafi'i dan mayoritas ashab (seperti Imam An-Nawawi), hukum shalat berjamaah untuk shalat lima waktu adalah Fardhu Kifayah bagi laki-laki mukallaf. Jika tidak ada satu pun yang melaksanakannya secara terbuka, seluruh penduduk berdosa.",
    "dalil": "HR. Abu Dawud no. 547 dan An-Nasa'i no. 848 dari Abu Darda' ra.: \"Mā min tsalātsatin fī qaryatin... illā qadistahwadza 'alaihimusy syaithān\"."
  },
  {
    "id": "jj_5",
    "question": "Seorang makmum masbuq datang saat imam sedang ruku'. Kapankah makmum masbuq tersebut dinyatakan secara sah MENDAPATKAN hitungan 1 rakaat bersama imam?",
    "options": [
      {
        "id": "a",
        "text": "Cukup mendapati imam sebelum imam mengucapkan salam kedua."
      },
      {
        "id": "b",
        "text": "Jika makmum berhasil melakukan ruku' dan thuma'ninah bersama imam sebelum imam bangkit dari batas minimal ruku'."
      },
      {
        "id": "c",
        "text": "Jika makmum sempat membaca surat Al-Fatihah walaupun imam sudah sujud."
      },
      {
        "id": "d",
        "text": "Jika makmum berhasil menyentuh pundak makmum lain di shaf."
      },
      {
        "id": "e",
        "text": "Hanya jika makmum mendapati takbiratul ihram imam sejak awal rakaat."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Ukuran mendapatkan satu rakaat adalah mendapati ruku' bersama imam dengan thuma'ninah yang meyakinkan sebelum imam bergerak naik menuju i'tidal. Berdasarkan sabda Nabi SAW: \"Man adrakar rukū'a fa qad adrakar rak'ah\" (HR. Abu Dawud).",
    "dalil": "HR. Abu Dawud no. 893 dan Kitab Al-Majmu' juz 4 hal. 188."
  },
  {
    "id": "jj_6",
    "question": "Di antara syarat sah makmum mengikuti imam (qudwah), manakah aturan penataan posisi fisik antara imam dan makmum yang WAJIB dipatuhi?",
    "options": [
      {
        "id": "a",
        "text": "Makmum wajib berdiri sejajar persis dengan tumit kaki imam."
      },
      {
        "id": "b",
        "text": "Posisi tumit kaki makmum tidak boleh berada lebih depan daripada tumit kaki imam."
      },
      {
        "id": "c",
        "text": "Makmum wajib berdiri dengan jarak minimal 3 meter di belakang imam."
      },
      {
        "id": "d",
        "text": "Imam harus berdiri di atas panggung yang lebih tinggi daripada makmum."
      },
      {
        "id": "e",
        "text": "Makmum wanita harus berdiri sejajar di sebelah kiri imam pria."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Syarat qudwah: makmum tidak boleh berada di depan imam dalam hal posisi berdirinya. Patokannya adalah tumit kaki (aqib). Jika tumit makmum lebih maju daripada tumit imam, shalat makmum batal seketika.",
    "dalil": "Kitab Fathul Mu'in Bab Shalatil Jama'ah."
  },
  {
    "id": "jj_7",
    "question": "Khatib sedang menyampaikan khutbah Jum'at di atas mimbar. Tiba-tiba seorang jamaah berbicara kepada jamaah di sebelahnya: \"Diamlah dan dengarkan khatib!\". Bagaimanakah tinjauan syar'i terhadap tindakan orang tersebut berdasarkan hadits Nabi SAW?",
    "options": [
      {
        "id": "a",
        "text": "Tindakannya sangat terpuji dan berpahala ganda karena menegakkan amar ma'ruf."
      },
      {
        "id": "b",
        "text": "Tindakannya dihukumi lagha (sia-sia pahala Jum'atnya) karena melanggar larangan berbicara saat khutbah berlangsung."
      },
      {
        "id": "c",
        "text": "Shalat Jum'at orang tersebut otomatis batal dan wajib shalat Zhuhur."
      },
      {
        "id": "d",
        "text": "Ia wajib membayar kaffarah satu dirham perak."
      },
      {
        "id": "e",
        "text": "Shalatnya sah hanya jika khatib mengizinkannya berbicara."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Rasulullah SAW bersabda: \"Jika engkau berkata kepada sahabatmu pada hari Jum'at: 'Diamlah!' padahal imam sedang berkhutbah, maka sungguh engkau telah berbuat sia-sia (lagha/gugur pahala keutamaan Jum'at)\" (HR. Bukhari no. 934 dan Muslim no. 851).",
    "dalil": "HR. Bukhari no. 934 dan Muslim no. 851 dari Abu Hurairah ra."
  },
  {
    "id": "jj_8",
    "question": "Seorang makmum yang shalat di belakang imam tiba-tiba ingin memisahkan diri dan menyelesaikan shalatnya sendiri (mufaraqah). Bagaimanakah ketentuan hukum mufaraqah dalam Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "Mufaraqah haram mutlak dan membatalkan shalat dalam segala kondisi."
      },
      {
        "id": "b",
        "text": "Diperbolehkan dengan niat mufaraqah di dalam hati; jika ada udzur syar'i (seperti sakit, imam terlalu lama, hajat mendesak) hukumnya mubah tanpa makruh."
      },
      {
        "id": "c",
        "text": "Makmum wajib berteriak memberitahu imam sebelum mufaraqah."
      },
      {
        "id": "d",
        "text": "Shalatnya sah tetapi harus diulang dari rakaat pertama."
      },
      {
        "id": "e",
        "text": "Hanya boleh dilakukan pada shalat sunnah tarawih."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam Mazhab Syafi'i, makmum diperbolehkan berniat mufaraqah (memutuskan ikatan berjamaah) kapan saja di tengah shalat. Jika ada udzur syar'i (seperti imam membaca surat terlalu panjang sehingga makmum khawatir terlewat waktu tugas atau sakit), hukumnya mubah tanpa makruh dan shalatnya sah.",
    "dalil": "Kisah sahabat Mu'adz bin Jabal ra. yang mengimami dengan surat panjang lalu makmum mufaraqah dan dibenarkan oleh Nabi SAW (HR. Bukhari no. 705)."
  },
  {
    "id": "jj_9",
    "question": "Jika seseorang terlambat datang ke masjid pada hari Jum'at dan mendapati khatib sedang berkhutbah di atas mimbar, apakah yang disunnahkan baginya sebelum duduk?",
    "options": [
      {
        "id": "a",
        "text": "Langsung duduk mendengarkan khutbah tanpa melakukan shalat apa pun."
      },
      {
        "id": "b",
        "text": "Melaksanakan shalat sunnah Tahiyyatul Masjid sebanyak 2 rakaat secara ringkas (khafifatain) lalu duduk."
      },
      {
        "id": "c",
        "text": "Melaksanakan shalat sunnah 4 rakaat dengan membaca surat panjang."
      },
      {
        "id": "d",
        "text": "Berdiri mematung di shaf belakang hingga khutbah selesai."
      },
      {
        "id": "e",
        "text": "Menunggu adzan selesai lalu sujud syukur."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Nabi SAW memerintahkan Sulaik Al-Ghathafani yang masuk masjid saat beliau berkhutbah: \"Apakah engkau telah shalat dua rakaat?\" Ia menjawab: \"Belum.\" Nabi bersabda: \"Bangkitlah dan shalatlah dua rakaat, dan ringkaslah keduanya!\".",
    "dalil": "HR. Bukhari no. 930 dan Muslim no. 875."
  },
  {
    "id": "jj_10",
    "question": "Di antara kriteria berikut ini, manakah urutan prioritas yang PALING UTAMA dalam memilih Imam shalat berjamaah menurut kaidah fiqih Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "Yang paling kaya hartanya ➔ yang paling tua ➔ yang paling tampan."
      },
      {
        "id": "b",
        "text": "Yang paling mendalam pemahaman fiqihnya (Al-Afqah) ➔ yang paling fasih bacaan Al-Qur'annya (Al-Aqra') ➔ yang paling wara'/shaleh ➔ yang paling tua usianya."
      },
      {
        "id": "c",
        "text": "Yang paling merdu suaranya ➔ yang berpakaian paling mewah."
      },
      {
        "id": "d",
        "text": "Yang paling muda usianya agar energik."
      },
      {
        "id": "e",
        "text": "Yang ditunjuk secara acak melalui undian."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam Mazhab Syafi'i, orang yang paling paham hukum fiqih shalat (al-afqah) lebih diutamakan daripada yang sekadar banyak hafal Al-Qur'an (al-aqra'), karena imam sewaktu-waktu membutuhkan ijtihad cepat jika terjadi pembatal atau keraguan dalam shalat.",
    "dalil": "Kitab Al-Majmu' Syarah Al-Muhadzdzab juz 4 hal. 278 & HR. Muslim no. 673."
  },
  {
    "id": "jj_11",
    "question": "Seorang makmum laki-laki dewasa shalat berjamaah hanya berdua dengan seorang imam laki-laki. Di manakah posisi berdiri yang disunnahkan bagi makmum tersebut?",
    "options": [
      {
        "id": "a",
        "text": "Tepat di belakang imam persis sejauh 1 meter."
      },
      {
        "id": "b",
        "text": "Di sebelah kanan imam, dengan posisi ujung jari kaki makmum sedikit mundur dari tumit kaki imam."
      },
      {
        "id": "c",
        "text": "Di sebelah kiri imam sejajar dengan pundak imam."
      },
      {
        "id": "d",
        "text": "Di depan imam untuk memandu kiblat."
      },
      {
        "id": "e",
        "text": "Boleh di mana saja selama masih berada di dalam ruangan yang sama."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Jika jamaah hanya terdiri dari satu imam dan satu makmum laki-laki, sunnah bagi makmum berdiri di sebelah kanan imam dan posisinya sedikit mundur dari imam.",
    "dalil": "Hadits Ibnu Abbas ra. ketika shalat malam bersama Nabi SAW (HR. Bukhari no. 138 dan Muslim no. 763)."
  },
  {
    "id": "jj_12",
    "question": "Bagaimanakah hukum seorang laki-laki dewasa bermakmum kepada seorang wanita dalam shalat fardhu maupun shalat sunnah?",
    "options": [
      {
        "id": "a",
        "text": "Sah secara mutlak jika wanita tersebut hafal 30 juz Al-Qur'an."
      },
      {
        "id": "b",
        "text": "Tidak sah shalat laki-laki tersebut menurut kesepakatan empat mazhab (Jumhur Fuqaha)."
      },
      {
        "id": "c",
        "text": "Makruh tanzih tetapi shalatnya tetap sah."
      },
      {
        "id": "d",
        "text": "Hanya sah pada shalat sunnah tarawih di rumah sendiri."
      },
      {
        "id": "e",
        "text": "Boleh jika imam wanita tersebut adalah ibu kandungnya sendiri."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Syarat imam bagi makmum laki-laki adalah imam harus berjenis kelamin laki-laki. Laki-laki tidak sah bermakmum kepada wanita atau khuntsa musykil (berkelamin ganda) berdasarkan sabda Nabi SAW dan ijma' sahabat.",
    "dalil": "HR. Ibnu Majah no. 1081: \"Lā ta'ummanna imra'atun rajulan\" & Matan Taqrib."
  },
  {
    "id": "jj_13",
    "question": "Jika seorang imam shalat fardhu batal wudhunya di tengah rakaat shalat (misalnya buang angin), apakah tindakan yang disyariatkan bagi imam dan jamaah?",
    "options": [
      {
        "id": "a",
        "text": "Seluruh makmum wajib membatalkan shalat mereka seketika dan bubar."
      },
      {
        "id": "b",
        "text": "Imam segera memegang hidung (seolah mimisan) lalu keluar mundur, dan menunjuk salah satu makmum di belakangnya untuk maju menggantikan posisi imam (Istikhlaf)."
      },
      {
        "id": "c",
        "text": "Imam tetap melanjutkan shalat hingga selesai tanpa wudhu."
      },
      {
        "id": "d",
        "text": "Makmum berteriak mengingatkan imam agar menahan hadats."
      },
      {
        "id": "e",
        "text": "Shalat dilanjutkan tanpa imam dengan gerakan bebas masing-masing."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Disyariatkan istikhlaf (penunjukan imam pengganti): imam yang berhadats menutupi wajah/hidung lalu menunjuk makmum di belakangnya untuk maju memimpin shalat melanjutkan rakaat yang tersisa tanpa harus mengulang dari awal.",
    "dalil": "Amalan Umar bin Khaththab ra. saat ditikam di dalam shalat Subuh, beliau menarik Abdurrahman bin Auf ra. untuk maju (HR. Bukhari no. 3700)."
  },
  {
    "id": "jj_14",
    "question": "Berikut ini adalah udzur-udzur syar'i yang MEMPERBOLEHKAN seseorang meninggalkan shalat berjamaah dan shalat Jum'at, KECUALI:",
    "options": [
      {
        "id": "a",
        "text": "Sakit berat yang menyulitkan untuk berjalan menuju masjid."
      },
      {
        "id": "b",
        "text": "Hujan lebat disertai angin kencang dan jalanan berlumpur parah."
      },
      {
        "id": "c",
        "text": "Merawat keluarga dekat yang sedang kritis tanpa ada pengganti lain."
      },
      {
        "id": "d",
        "text": "Takut terhadap ancaman bahaya musuh atau kezaliman penguasa terhadap jiwa dan hartanya."
      },
      {
        "id": "e",
        "text": "Sedang asyik menonton siaran langsung pertandingan olahraga di televisi."
      }
    ],
    "correctOptionId": "e",
    "explanation": "Udzur syar'i yang menggugurkan kewajiban shalat Jum'at/jamaah adalah hal-hal darurat dan masyaqqah berat yang diakui agama (sakit, hujan lebat, takut ancaman jiwa/harta, merawat orang sakit gawat). Hiburan duniawi bukan udzur syar'i.",
    "dalil": "Kitab Safinatun Najah Bab A'dzarul Jum'ah wal Jama'ah & HR. Abu Dawud no. 551."
  },
  {
    "id": "jj_15",
    "question": "Apakah hukum mengingatkan imam shalat yang lupa atau keliru gerakannya dengan cara mengucapkan tasbih (\"Subhanallah\") bagi makmum laki-laki, dan bertepuk tangan (tashfiq) bagi makmum wanita?",
    "options": [
      {
        "id": "a",
        "text": "Sunnah berdasarkan hadits shahih Rasulullah SAW."
      },
      {
        "id": "b",
        "text": "Membatalkan shalat makmum karena berbicara."
      },
      {
        "id": "c",
        "text": "Makruh bagi wanita dan haram bagi pria."
      },
      {
        "id": "d",
        "text": "Hanya boleh dilakukan oleh muadzin masjid."
      },
      {
        "id": "e",
        "text": "Wajib bertepuk tangan bagi makmum pria dan wanita."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Rasulullah SAW bersabda: \"Barangsiapa mendapati kekeliruan dalam shalat, hendaklah ia bertasbih (mengucapkan Subhanallah bagi pria), dan sesungguhnya tepukan tangan itu khusus bagi wanita\" (HR. Bukhari no. 1204 dan Muslim no. 422).",
    "dalil": "HR. Bukhari no. 1204 dan Muslim no. 422 dari Sahl bin Sa'ad As-Sa'idi ra."
  },
  {
    "id": "jj_16",
    "question": "Seorang makmum mendahului gerakan imam sebanyak DUA RUKUN FI'LI secara sengaja tanpa udzur syar'i (misalnya makmum sudah ruku' dan i'tidal sementara imam masih berdiri membaca surat). Bagaimanakah status shalat makmum tersebut?",
    "options": [
      {
        "id": "a",
        "text": "Shalat makmum tetap sah namun pahalanya berkurang 27 derajat."
      },
      {
        "id": "b",
        "text": "Shalat makmum BATAL seketika karena mendahului imam sebanyak dua rukun fi'li berturut-turut."
      },
      {
        "id": "c",
        "text": "Shalatnya makruh dan makmum wajib sujud sahwi."
      },
      {
        "id": "d",
        "text": "Makmum otomatis menjadi imam baru bagi shaf belakang."
      },
      {
        "id": "e",
        "text": "Shalatnya sah asalkan makmum menunggu imam saat sujud."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam Mazhab Syafi'i, mendahului imam dengan dua rukun fi'li (musabaqatul imam bi ruknaini fi'liyyaini) secara sengaja membatalkan shalat makmum seketika, karena bertentangan dengan prinsip mutaba'ah (mengikuti imam).",
    "dalil": "Kitab Al-Majmu' Syarah Al-Muhadzdzab juz 4 hal. 197 & HR. Bukhari no. 732."
  },
  {
    "id": "jj_17",
    "question": "Sebaliknya, jika makmum tertinggal di belakang imam sebanyak dua rukun fi'li tanpa udzur syar'i (misalnya imam sudah selesai sujud kedua sementara makmum masih berdiri melamun tanpa membaca Fatihah), bagaimanakah status shalat makmum?",
    "options": [
      {
        "id": "a",
        "text": "Shalatnya tetap sah sempurna."
      },
      {
        "id": "b",
        "text": "Shalat makmum batal karena tertinggal dua rukun fi'li tanpa udzur."
      },
      {
        "id": "c",
        "text": "Makmum cukup membayar dam satu ekor kambing."
      },
      {
        "id": "d",
        "text": "Shalatnya beralih menjadi shalat qashar."
      },
      {
        "id": "e",
        "text": "Imam wajib mengulang rakaat tersebut untuk makmum."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Tertinggal dari imam sebanyak dua rukun fi'li (at-takhalluf bi ruknaini fi'liyyaini) tanpa adanya udzur syar'i yang sah membatalkan shalat makmum seketika.",
    "dalil": "Kitab Fathul Qarib Al-Mujib Bab Syuruthul Qudwah."
  },
  {
    "id": "jj_18",
    "question": "Di antara amalan sunnah pada hari Jum'at sebelum berangkat ke masjid untuk menunaikan shalat Jum'at, manakah amalan yang DIANJURKAN oleh Rasulullah SAW?",
    "options": [
      {
        "id": "a",
        "text": "Mandi sunnah Jum'at, memotong kuku, memakai wewangian, dan mengenakan pakaian terbaik (putih)."
      },
      {
        "id": "b",
        "text": "Berpuasa sunnah khusus hanya pada hari Jum'at saja."
      },
      {
        "id": "c",
        "text": "Tidur sepanjang pagi hingga adzan berkumandang."
      },
      {
        "id": "d",
        "text": "Makan bawang putih mentah agar tubuh hangat."
      },
      {
        "id": "e",
        "text": "Menghindari mandi agar aroma tubuh alami."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Sunnah hari Jum'at: Mandi sunnah Jum'at (ghuslul jum'ah), bersiwak, memakai wewangian, memotong kuku dan merapikan rambut, memakai pakaian putih/terbaik, datang lebih awal ke masjid, dan membaca surat Al-Kahfi.",
    "dalil": "HR. Bukhari no. 883 dari Salman Al-Farisi ra. & HR. Muslim no. 857."
  },
  {
    "id": "jj_19",
    "question": "Seorang musafir berangkat dari rumahnya pada hari Jum'at pukul 03.00 dini hari (sebelum terbit fajar Subuh) untuk perjalanan mubah sejauh 150 km. Apakah ia tetap WAJIB melaksanakan shalat Jum'at di kota tujuannya?",
    "options": [
      {
        "id": "a",
        "text": "Tetap wajib shalat Jum'at dan haram shalat Zhuhur."
      },
      {
        "id": "b",
        "text": "Gugur kewajiban shalat Jum'at baginya dan ia diperbolehkan shalat Zhuhur (atau jamak qashar Zhuhur dengan Ashar) karena safarnya dimulai sebelum fajar."
      },
      {
        "id": "c",
        "text": "Ia tidak boleh shalat apa pun di hari Jum'at."
      },
      {
        "id": "d",
        "text": "Ia wajib membayar denda kafarat puasa 2 bulan."
      },
      {
        "id": "e",
        "text": "Ia wajib berhenti di setiap masjid yang dilewati."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Jika safar dimulai sebelum fajar shadiq pada hari Jum'at, maka musafir tidak terkena kewajiban shalat Jum'at dan boleh shalat Zhuhur. Berbeda jika safar baru dimulai setelah terbit fajar shadiq pada hari Jum'at, hukumnya haram bepergian kecuali ia yakin akan mendapati shalat Jum'at di jalan.",
    "dalil": "Kitab Al-Majmu' Syarah Al-Muhadzdzab juz 4 hal. 500 & Matan Taqrib."
  },
  {
    "id": "jj_20",
    "question": "Bagaimanakah urutan susunan shaf shalat berjamaah yang paling ideal dan sempurna menurut sunnah Nabi SAW jika jamaah terdiri dari berbagai kalangan?",
    "options": [
      {
        "id": "a",
        "text": "Anak-anak di depan ➔ laki-laki dewasa di tengah ➔ wanita di belakang."
      },
      {
        "id": "b",
        "text": "Laki-laki dewasa di shaf terdepan ➔ anak-anak laki-laki di belakangnya ➔ jamaah wanita di shaf paling belakang."
      },
      {
        "id": "c",
        "text": "Bercampur baur antara laki-laki dan wanita asalkan satu keluarga."
      },
      {
        "id": "d",
        "text": "Wanita di shaf terdepan menghadap imam."
      },
      {
        "id": "e",
        "text": "Orang tua di sebelah kanan, pemuda di sebelah kiri."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Susunan shaf yang disyariatkan: shaf pertama tepat di belakang imam diisi laki-laki dewasa yang berilmu (ulul ahlam wan nuha), lalu anak-anak laki-laki, lalu makmum wanita di bagian belakang dengan tabir pemisah.",
    "dalil": "HR. Muslim no. 432 dari Abdullah bin Mas'ud ra. & HR. Muslim no. 440 dari Abu Hurairah ra."
  },
  {
    "id": "jj_21",
    "question": "Makmum sedang shalat bermakmum kepada imam di dalam masjid. Antara shaf makmum dengan imam terhalang tembok dinding yang memiliki pintu terbuka. Makmum dapat mendengar suara imam lewat pengeras suara dan mengetahui perpindahan gerakannya. Bagaimanakah keabsahan shalat berjamaah makmum tersebut?",
    "options": [
      {
        "id": "a",
        "text": "Batal karena terhalang oleh tembok fisik bangunan."
      },
      {
        "id": "b",
        "text": "Sah, karena pintu terbuka memungkinkan akses jalan tembus menuju imam dan makmum mengetahui perpindahan gerakan imam."
      },
      {
        "id": "c",
        "text": "Makruh dan makmum wajib mengulang shalat sendirian."
      },
      {
        "id": "d",
        "text": "Hanya sah jika makmum dapat melihat wajah imam secara langsung."
      },
      {
        "id": "e",
        "text": "Sah jika jaraknya tidak melebihi 300 hasta di luar masjid."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Jika shalat berada di dalam satu kawasan masjid atau bangunan yang terhubung dengan pintu terbuka (ada al-istithraq / jalan menuju imam) dan makmum dapat mengetahui gerakan imam melalui suara atau melihat sebagian jamaah, maka qudwah sah.",
    "dalil": "Kitab Fathul Mu'in Bab Shalatil Jama'ah & Al-Fiqhul Manhaji."
  },
  {
    "id": "jj_22",
    "question": "Kapankah seorang makmum yang shalat di belakang imam DISUNNAHKAN membaca surat Al-Fatihah pada shalat Jahr (shalat yang bacaannya dikeraskan seperti Maghrib, Isya, dan Subuh)?",
    "options": [
      {
        "id": "a",
        "text": "Bersamaan dengan saat imam membaca surat Al-Fatihah kata per kata."
      },
      {
        "id": "b",
        "text": "Setelah imam selesai membaca Al-Fatihah dan mengucapkan \"Aamiin\", di sela jeda diamnya imam (saktah) sebelum imam membaca surat pendek."
      },
      {
        "id": "c",
        "text": "Saat imam sedang ruku'."
      },
      {
        "id": "d",
        "text": "Makmum tidak perlu membaca Fatihah sama sekali pada shalat jahr."
      },
      {
        "id": "e",
        "text": "Setelah salam shalat selesai dikerjakan."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam Mazhab Syafi'i, makmum tetap wajib membaca Al-Fatihah baik pada shalat sirr maupun jahr. Waktu yang paling utama pada shalat jahr adalah setelah imam selesai membaca Fatihah dan mengucap Aamiin, memanfaatkan jeda diam sunnah imam (saktah) agar makmum dapat menyimak bacaan surat imam setelahnya.",
    "dalil": "HR. Abu Dawud no. 823 dan At-Tirmidzi no. 311 dari Ubadah bin Shamit ra."
  },
  {
    "id": "jj_23",
    "question": "Jika seseorang menunaikan shalat fardhu secara munfarid (sendirian), kemudian ia mendapati jamaah shalat fardhu yang sama baru saja dimulai di masjid, disunnahkan baginya mengulang shalat tersebut bersama jamaah (I'adatus Shalah). Bagaimanakah status kedua shalat tersebut?",
    "options": [
      {
        "id": "a",
        "text": "Shalat pertama batal dan shalat kedua menjadi fardhu."
      },
      {
        "id": "b",
        "text": "Shalat pertama berkedudukan sebagai penunai fardhu, sedangkan shalat kedua dihitung sebagai ibadah sunnah yang menyempurnakan pahala."
      },
      {
        "id": "c",
        "text": "Kedua-duanya bernilai makruh karena mengulang shalat fardhu."
      },
      {
        "id": "d",
        "text": "Shalat kedua membatalkan pahala shalat pertama."
      },
      {
        "id": "e",
        "text": "Wajib berniat shalat qadha pada shalat kedua."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Disunnahkan mengulang shalat (i'adatus shalah) bersama jamaah sekali lagi. Shalat pertama yang menggugurkan kewajiban fardhu di pundaknya, sedangkan shalat kedua menjadi nafilah (sunnah) baginya, berdasarkan sabda Nabi SAW kepada dua sahabat yang telah shalat di tenda lalu mendapati jamaah di masjid Khaif.",
    "dalil": "HR. Abu Dawud no. 575 dan At-Tirmidzi no. 219."
  },
  {
    "id": "jj_24",
    "question": "Apakah hukum makmum berniat shalat fardhu dengan mengikuti imam yang sedang menunaikan shalat sunnah (misalnya makmum berniat shalat Isya 4 rakaat bermakmum kepada imam yang sedang shalat Tarawih 2 rakaat) menurut Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "Batal secara mutlak karena niat imam dan makmum harus identik."
      },
      {
        "id": "b",
        "text": "SAH, asalkan keselarasan rukun fi'li dasar shalat tetap terpenuhi."
      },
      {
        "id": "c",
        "text": "Haram bagi makmum dan berdosa."
      },
      {
        "id": "d",
        "text": "Hanya sah jika imam mengetahui niat makmum."
      },
      {
        "id": "e",
        "text": "Shalat makmum otomatis berubah menjadi shalat sunnah."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam Mazhab Syafi'i, sah orang yang shalat fardhu bermakmum kepada orang yang shalat sunnah (mutanaffil), dan sebaliknya. Contohnya Mu'adz bin Jabal ra. shalat Isya fardhu bersama Nabi SAW lalu pulang mengimami kaumnya yang shalat Isya fardhu sementara bagi Mu'adz adalah sunnah.",
    "dalil": "HR. Bukhari no. 711 dan Muslim no. 465."
  },
  {
    "id": "jj_25",
    "question": "Di antara syarat sah Khutbah Jum'at adalah Khatib wajib suci dari hadats kecil dan besar serta menutup aurat. Jika khatib berhadats di tengah-tengah khutbah, bagaimanakah status khutbahnya?",
    "options": [
      {
        "id": "a",
        "text": "Khutbahnya tetap sah asalkan khatib berwudhu sebelum mengimami shalat."
      },
      {
        "id": "b",
        "text": "Khutbahnya terputus/batal; khatib harus segera bersuci dan menyambung rukun khutbah jika jedanya singkat, atau mengulang khutbah jika jedanya lama."
      },
      {
        "id": "c",
        "text": "Khutbah digantikan dengan membaca tahlil bersama."
      },
      {
        "id": "d",
        "text": "Shalat Jum'at otomatis beralih menjadi shalat Zhuhur."
      },
      {
        "id": "e",
        "text": "Khatib cukup bertayamum di atas mimbar."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Suci dari hadats kecil dan hadats besar serta menutup aurat adalah syarat sah khutbah Jum'at dalam Mazhab Syafi'i karena khutbah menempati posisi dua rakaat shalat. Jika khatib berhadats, ia wajib bersuci dan mengulang atau menyambung khutbah dengan menjaga muwalat.",
    "dalil": "Kitab Al-Majmu' Syarah Al-Muhadzdzab juz 4 hal. 513."
  }
];
