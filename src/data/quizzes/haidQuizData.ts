import { HaidQuizQuestion } from '../../types/haid';

export const HAID_QUIZ: HaidQuizQuestion[] = [
  {
    "id": "hq_1",
    "question": "Berapakah batas minimal durasi akumulasi keluarnya darah agar sah dihukumi sebagai darah haid menurut Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "12 jam keluarnya darah secara terus-menerus tanpa jeda."
      },
      {
        "id": "b",
        "text": "24 jam (sehari semalam) baik secara bersambung maupun akumulatif dalam rentang 15 hari."
      },
      {
        "id": "c",
        "text": "3 hari 3 malam (72 jam) terhitung sejak awal tetesan darah keluar."
      },
      {
        "id": "d",
        "text": "Satu kali tetesan darah yang keluar bertepatan dengan tanggal rutin bulanan."
      },
      {
        "id": "e",
        "text": "6 hari 6 malam sebagaimana kebiasaan umum wanita pada umumnya."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Batas minimal haid menurut Mazhab Syafi'i adalah 24 jam (sehari semalam / yaum wa lailah). Darah ini bisa keluar secara muttashil (bersambung terus-menerus) atau munqathi' (terputus-putus) yang jika diakumulasikan dalam masa 15 hari mencapai minimal 24 jam.",
    "dalil": "Kitab Al-Majmu' Syarah Al-Muhadzdzab karya Imam An-Nawawi & Risalatul Mahidh."
  },
  {
    "id": "hq_2",
    "question": "Fathimah mengeluarkan darah selama 17 hari berturut-turut tanpa pernah berhenti sedetik pun. Berdasarkan batasan maksimal haid dalam fiqih Islam, bagaimanakah status darah yang dialami Fathimah?",
    "options": [
      {
        "id": "a",
        "text": "Seluruh 17 hari darah tersebut dihukumi sebagai darah nifas."
      },
      {
        "id": "b",
        "text": "Darah tersebut telah melampaui batas maksimal haid (15 hari 15 malam) sehingga terjadi kasus istihadhah (darah penyakit)."
      },
      {
        "id": "c",
        "text": "Seluruh 17 hari tetap dihukumi haid karena toleransi maksimal adalah 20 hari."
      },
      {
        "id": "d",
        "text": "Darah tersebut dihukumi darah wiladah dan wajib mandi besar setiap waktu shalat."
      },
      {
        "id": "e",
        "text": "Fathimah wajib menunggu hingga hari ke-30 untuk menentukan status darahnya."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Batas maksimal masa haid adalah 15 hari 15 malam. Apabila darah keluar melebihi 15 hari, maka wanita tersebut mengalami istihadhah (pendarahan di luar siklus haid alami) dan wajib mengklasifikasikan status darahnya berdasarkan hukum istihadhah.",
    "dalil": "Matan Al-Ghayah wat Taqrib karya Al-Qadhi Abu Syuja'."
  },
  {
    "id": "hq_3",
    "question": "Berapakah batas minimal masa suci (thuhur) yang memisahkan antara siklus dua periode haid menurut kesepakatan ulama Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "7 hari 7 malam."
      },
      {
        "id": "b",
        "text": "10 hari terhitung sejak mandi wajib."
      },
      {
        "id": "c",
        "text": "15 hari 15 malam."
      },
      {
        "id": "d",
        "text": "21 hari sesuai siklus hormonal medis."
      },
      {
        "id": "e",
        "text": "Tidak ada batas minimal asalkan darah sudah berhenti."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Masa suci minimal antara dua siklus haid adalah 15 hari 15 malam. Jika seorang wanita suci kurang dari 15 hari lalu mengeluarkan darah kembali, maka darah kedua tersebut bukan haid baru melainkan darah istihadhah atau kelanjutan masa sebelumnya.",
    "dalil": "Kitab Fathul Qarib Al-Mujib Bab Al-Haidh wan Nifas."
  },
  {
    "id": "hq_4",
    "question": "Aisyah radhiyallahu 'anha meriwayatkan hukum fiqih fundamental terkait kewajiban wanita yang telah suci dari haid. Manakah pernyataan yang tepat mengenai kewajiban qadha bagi wanita yang haid?",
    "options": [
      {
        "id": "a",
        "text": "Wajib mengqadha shalat dan wajib mengqadha puasa yang tertinggal."
      },
      {
        "id": "b",
        "text": "Wajib mengqadha puasa yang tertinggal, namun TIDAK wajib mengqadha shalat yang ditinggalkan."
      },
      {
        "id": "c",
        "text": "Wajib mengqadha shalat, namun gugur kewajiban mengqadha puasa."
      },
      {
        "id": "d",
        "text": "Bebas dari kewajiban qadha shalat maupun puasa secara mutlak."
      },
      {
        "id": "e",
        "text": "Cukup membayar fidyah satu mud beras untuk setiap shalat yang ditinggalkan."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Berdasarkan hadits shahih, wanita yang haid diperintahkan untuk mengqadha puasa Ramadhan yang terlewat, namun dibebaskan dari mengqadha shalat fardhu karena shalat berulang lima kali sehari sehingga mengqadhanya akan menimbulkan masyaqqah (kesulitan yang berat).",
    "dalil": "HR. Muslim no. 335 dari Mu'adzah: \"Kunnā nahīdhu 'alā 'ahdi Rasūlillāh fa nu'maru bi qadhā'is shaumi wa lā nu'maru bi qadhā'is shalāt\"."
  },
  {
    "id": "hq_5",
    "question": "Berikut ini adalah amalan yang DIHARAMKAN bagi wanita yang sedang dalam kondisi haid menurut syariat Islam, KECUALI:",
    "options": [
      {
        "id": "a",
        "text": "Melaksanakan shalat fardhu maupun shalat sunnah."
      },
      {
        "id": "b",
        "text": "Menyentuh dan membawa mushaf Al-Qur'an tanpa alas/sampul terpisah."
      },
      {
        "id": "c",
        "text": "Thawaf mengelilingi Ka'bah di Masjidil Haram."
      },
      {
        "id": "d",
        "text": "Berdzikir, membaca shalawat nabi, berdoa, dan mendengarkan lantunan ayat suci Al-Qur'an."
      },
      {
        "id": "e",
        "text": "Berdiam diri (i'tikaf) atau menetap di dalam masjid."
      }
    ],
    "correctOptionId": "d",
    "explanation": "Wanita haid diharamkan shalat, puasa, thawaf, menyentuh/membawa mushaf, membaca Al-Qur'an dengan niat tilawah, diam di masjid, jima', dan istimta' antara pusar dan lutut. Adapun membaca dzikir, istighfar, shalawat, berdoa, dan mendengarkan kajian/murottal hukumnya mubah dan dianjurkan.",
    "dalil": "Kitab Safinatun Najah Bab Mahzhuratul Haidh."
  },
  {
    "id": "hq_6",
    "question": "Seorang wanita baru pertama kali mengalami haid dalam hidupnya (mubtada'ah). Darah keluar terus-menerus selama 18 hari tanpa henti, dan warna darahnya sama persis dari hari pertama hingga hari terakhir (ghairu mumayyizah). Bagaimanakah cara ia menentukan masa haid dan istihadhahnya?",
    "options": [
      {
        "id": "a",
        "text": "Haidnya dihukumi 15 hari penuh dan sisanya 3 hari adalah istihadhah."
      },
      {
        "id": "b",
        "text": "Haidnya dihukumi sehari semalam (24 jam), dan selebihnya selama 17 hari adalah darah istihadhah."
      },
      {
        "id": "c",
        "text": "Seluruh 18 hari dihukumi istihadhah sehingga ia wajib mengqadha seluruh shalatnya."
      },
      {
        "id": "d",
        "text": "Haidnya dihukumi 7 hari sesuai kebiasaan kerabat wanitanya."
      },
      {
        "id": "e",
        "text": "Haidnya dibagi rata menjadi 9 hari haid dan 9 hari suci."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Hukum bagi mubtada'ah ghairu mumayyizah (wanita baru haid yang darahnya melampaui 15 hari tanpa bisa membedakan sifat darah) adalah mengembalikan masa haidnya ke batas minimal haid, yaitu sehari semalam (24 jam), dan sisanya dihukumi istihadhah.",
    "dalil": "Kitab Al-Ibanah wal Ifadhah fi Ahkamil Haidh karya Sayyid Abdurrahman As-Saqqaf."
  },
  {
    "id": "hq_7",
    "question": "Darah haid memiliki tingkatan kekuatan warna dan kepekatan yang digunakan untuk membedakan (tamyiz) antara darah haid dan istihadhah. Manakah urutan tingkatan darah haid dari yang paling KUAT ke yang paling LEMAH?",
    "options": [
      {
        "id": "a",
        "text": "Merah ➔ Hitam ➔ Kuning ➔ Keruh ➔ Coklat"
      },
      {
        "id": "b",
        "text": "Hitam ➔ Merah ➔ Coklat (Asyqar) ➔ Kuning (Shafra') ➔ Keruh (Kudrah)"
      },
      {
        "id": "c",
        "text": "Kuning ➔ Keruh ➔ Merah ➔ Coklat ➔ Hitam"
      },
      {
        "id": "d",
        "text": "Coklat ➔ Hitam ➔ Merah ➔ Kuning ➔ Bening"
      },
      {
        "id": "e",
        "text": "Hitam ➔ Coklat ➔ Kuning ➔ Merah ➔ Keruh"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Urutan kekuatan darah menurut fuqaha Syafi'iyyah berdasarkan warna adalah: (1) Hitam (Aswad), (2) Merah (Ahmar), (3) Coklat/Pirang (Asyqar), (4) Kuning (Shafra'), dan (5) Keruh (Kudrah). Darah yang lebih kental dan berbau busuk lebih kuat dari yang cair dan tidak berbau.",
    "dalil": "Kitab Tuhfatul Muhtaj fi Syarhil Minhaj juz 1 hal. 398."
  },
  {
    "id": "hq_8",
    "question": "Seorang wanita yang mengalami pendarahan istihadhah hendak menunaikan shalat fardhu. Bagaimanakah prosedur bersuci dan wudhu yang wajib ia laksanakan sesuai kaidah da'imul hadats (orang yang terus-menerus berhadats)?",
    "options": [
      {
        "id": "a",
        "text": "Cukup berwudhu satu kali di waktu Subuh untuk seluruh lima waktu shalat fardhu."
      },
      {
        "id": "b",
        "text": "Membersihkan kemaluan, menyumbat/membalutnya, berwudhu setelah masuk waktu shalat, dan segera menunaikan shalat tanpa menunda-nunda."
      },
      {
        "id": "c",
        "text": "Wajib mandi besar setiap kali hendak mengerjakan satu rakaat shalat."
      },
      {
        "id": "d",
        "text": "Bertayamum saja tanpa menggunakan air agar darah tidak semakin deras."
      },
      {
        "id": "e",
        "text": "Tidak perlu bersuci karena status darah istihadhah dimaafkan secara mutlak tanpa syarat."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Syarat bersuci mustahadhah: (1) Dilakukan setelah masuk waktu shalat fardhu, (2) Membersihkan farji, (3) Membalut dengan rapat, (4) Berwudhu dengan niat istibahatus shalah, dan (5) Segera shalat (muwalat). Satu wudhu hanya berlaku untuk 1 shalat fardhu.",
    "dalil": "HR. Bukhari no. 228 dari Aisyah ra. tentang Fatimah binti Abi Hubaits."
  },
  {
    "id": "hq_9",
    "question": "Berapakah durasi maksimal masa Nifas (darah yang keluar menyertai dan setelah proses persalinan) menurut Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "40 hari 40 malam."
      },
      {
        "id": "b",
        "text": "50 hari terhitung sejak kontraksi."
      },
      {
        "id": "c",
        "text": "60 hari 60 malam."
      },
      {
        "id": "d",
        "text": "90 hari pasca operasi caesar."
      },
      {
        "id": "e",
        "text": "Tidak ada batas maksimal selama ibu masih menyusui."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Durasi minimal nifas adalah lahdhah (sekejap/sesaat), durasi kebiasaannya (ghalib) adalah 40 hari, dan durasi maksimalnya menurut penelitian induktif Imam Syafi'i adalah 60 hari 60 malam.",
    "dalil": "Kitab Matan Ghayatut Taqrib Bab An-Nifas."
  },
  {
    "id": "hq_10",
    "question": "Jika seorang ibu melahirkan anak kembar, terhitung kapankah dimulainya masa nifas bagi ibu tersebut?",
    "options": [
      {
        "id": "a",
        "text": "Sejak keluarnya bayi pertama secara utuh."
      },
      {
        "id": "b",
        "text": "Sejak keluarnya bayi kedua (terakhir) dan terlepasnya seluruh kandungan."
      },
      {
        "id": "c",
        "text": "Sejak air ketuban pertama pecah di rumah sakit."
      },
      {
        "id": "d",
        "text": "Tiga hari setelah kedua bayi dilahirkan dengan selamat."
      },
      {
        "id": "e",
        "text": "Sejak tali pusar bayi dipotong oleh dokter."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Nifas secara syar'i adalah darah yang keluar setelah rahim kosong dari kandungan secara total (ba'da faraghir rahim). Jika anak kembar, maka permulaan nifas dihitung sejak lahirnya anak yang terakhir.",
    "dalil": "Kitab Hasyiyah Al-Bajuri 'ala Syarhi Ibni Qasim Al-Ghazi."
  },
  {
    "id": "hq_11",
    "question": "Tanda suci dari haid dapat diketahui dengan dua indikator utama. Manakah di antara pilihan berikut yang merupakan tanda berakhirnya masa haid yang diakui syariat?",
    "options": [
      {
        "id": "a",
        "text": "Rasa nyeri di perut bawah mereda sepenuhnya."
      },
      {
        "id": "b",
        "text": "Keluarnya cairan putih bening laksana benang (Al-Qashshah Al-Baidha') atau keringnya kapas bersih (An-Naqa')."
      },
      {
        "id": "c",
        "text": "Darah berubah warna menjadi merah muda kekuningan."
      },
      {
        "id": "d",
        "text": "Genapnya waktu 7 hari tanpa perlu memeriksa kapas."
      },
      {
        "id": "e",
        "text": "Munculnya keringat dingin di malam hari."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Aisyah ra. menegaskan kepada para wanita yang mengirimkan kapas berlumur cairan kuning agar tidak terburu-buru hingga melihat Al-Qashshah Al-Baidha' (cairan putih jernih) atau terbukti An-Naqa' (kering murni, kapas dimasukkan ke kemaluan dan keluar dalam keadaan putih bersih tanpa noda darah/keruh).",
    "dalil": "Atsar riwayat Bukhari secara mu'allaq dalam Kitab Al-Haidh."
  },
  {
    "id": "hq_12",
    "question": "Darah haid seorang wanita berhenti pada pukul 17.30 (30 menit sebelum matahari terbenam/waktu Maghrib). Ia memiliki cukup waktu untuk mandi besar dan mendapati minimal satu rakaat shalat Ashar. Shalat fardhu manakah yang WAJIB ia kerjakan (dan qadha)?",
    "options": [
      {
        "id": "a",
        "text": "Hanya shalat Ashar saja."
      },
      {
        "id": "b",
        "text": "Shalat Ashar DAN shalat Zhuhur (karena Zhuhur dapat dijamak dengan Ashar)."
      },
      {
        "id": "c",
        "text": "Hanya shalat Maghrib setelah masuk waktunya."
      },
      {
        "id": "d",
        "text": "Seluruh lima waktu shalat pada hari tersebut."
      },
      {
        "id": "e",
        "text": "Tidak ada kewajiban shalat karena waktu Ashar sudah hampir habis."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Kaidah fiqih Syafi'iyyah: Jika wanita suci dari haid di waktu kedua shalat yang bisa dijamak (seperti Ashar atau Isya) dan mendapati waktu minimal satu takbiratul ihram, maka ia wajib mengerjakan shalat waktu tersebut (Ashar) dan shalat waktu sebelumnya yang sepasang dengannya (Zhuhur).",
    "dalil": "Fatwa Ibnu Abbas dan Abdurrahman bin Auf ra., Kitab Al-Majmu' juz 3 hal. 67."
  },
  {
    "id": "hq_13",
    "question": "Sebaliknya, jika darah haid keluar pada pukul 12.30 (setelah masuk waktu Zhuhur berselang 30 menit), dan wanita tersebut belum sempat shalat Zhuhur padahal ia memiliki kesempatan waktu yang cukup untuk mengerjakannya. Bagaimanakah status shalat Zhuhur tersebut setelah ia suci kelak?",
    "options": [
      {
        "id": "a",
        "text": "Gugur secara mutlak dan tidak perlu diqadha."
      },
      {
        "id": "b",
        "text": "Wajib diqadha setelah ia suci dan mandi besar karena ia sempat mendapati waktu Zhuhur yang cukup untuk shalat namun mengulur-ulurnya."
      },
      {
        "id": "c",
        "text": "Cukup diganti dengan membayar fidyah beras."
      },
      {
        "id": "d",
        "text": "Wajib diqadha bersama dengan shalat Subuh hari itu."
      },
      {
        "id": "e",
        "text": "Hukumnya sunnah untuk diqadha."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Jika waktu shalat fardhu telah masuk dan berlalu rentang waktu yang cukup untuk bersuci dan mengerjakan shalat fardhu secara wajar, lalu wanita tersebut mendapati darah haid keluar, maka shalat fardhu tersebut menjadi hutang di pundaknya dan wajib diqadha setelah suci.",
    "dalil": "Kitab Fathul Mu'in bi Syarhi Qurratil 'Ain."
  },
  {
    "id": "hq_14",
    "question": "Berapakah usia minimal seorang anak perempuan secara fitrah biologis qamariyyah (penanggalan hijriyah) memungkinkan untuk mengeluarkan darah haid pertama kali?",
    "options": [
      {
        "id": "a",
        "text": "Sempurna 7 tahun qamariyyah."
      },
      {
        "id": "b",
        "text": "Genap 9 tahun qamariyyah (atau kurang sedikit di bawah 16 hari dari 9 tahun)."
      },
      {
        "id": "c",
        "text": "Genap 12 tahun masehi."
      },
      {
        "id": "d",
        "text": "Genap 15 tahun saat tanda baligh fisik muncul."
      },
      {
        "id": "e",
        "text": "Tidak ada patokan usia, bayi pun bisa dihukumi haid."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Batas minimal usia wanita mengalami haid adalah 9 tahun qamariyyah secara taqribi (kurang lebih, dengan toleransi kekurangan kurang dari 16 hari). Darah yang keluar sebelum usia tersebut dihukumi darah penyakit/istihadhah atau luka.",
    "dalil": "Kitab Al-Umm karya Imam Asy-Syafi'i & Kasyifatus Saja."
  },
  {
    "id": "hq_15",
    "question": "Seorang wanita memiliki siklus rutin (mu'tadah) haid selama 7 hari setiap bulan. Pada bulan ini, darahnya keluar selama 7 hari, lalu berhenti dan bersih total selama 4 hari, kemudian keluar lagi darah selama 2 hari (total rentang dari hari ke-1 hingga ke-13 adalah 13 hari). Berdasarkan Qaul Sahbu (pendapat yang diunggulkan dalam Mazhab Syafi'i), bagaimanakah status masa 4 hari suci di antara dua darah tersebut?",
    "options": [
      {
        "id": "a",
        "text": "Masa 4 hari tersebut dihukumi masa suci murni (Qaul Laqthi)."
      },
      {
        "id": "b",
        "text": "Masa 4 hari jeda tersebut dihukumi sebagai rangkaian masa haid karena masih berada di dalam koridor maksimal 15 hari haid (Qaul Sahbu)."
      },
      {
        "id": "c",
        "text": "Seluruh 13 hari berubah menjadi istihadhah."
      },
      {
        "id": "d",
        "text": "Darah kedua selama 2 hari adalah darah nifas."
      },
      {
        "id": "e",
        "text": "Wanita tersebut wajib mengulang seluruh shalat yang ia kerjakan pada masa jeda 4 hari."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Menurut Qaul Sahbi (pendapat mu'tamad Syafi'iyyah), masa bersih yang berada di antara dua darah haid dalam rentang 15 hari dihukumi sebagai masa haid (menarik status suci menjadi haid), asalkan total darah tidak melebihi 15 hari.",
    "dalil": "Kitab Al-Minhaj karya Imam An-Nawawi & Al-Fiqhul Manhaji."
  },
  {
    "id": "hq_16",
    "question": "Bagaimanakah hukum seorang suami melakukan hubungan biologis (jima') dengan istrinya yang sedang dalam kondisi haid?",
    "options": [
      {
        "id": "a",
        "text": "Makruh tanzih apabila dilakukan dengan persetujuan istri."
      },
      {
        "id": "b",
        "text": "Haram mutlak berdasarkan nash Al-Qur'an dan ijma' seluruh ulama kaum muslimin."
      },
      {
        "id": "c",
        "text": "Mubah jika suami khawatir terjerumus zina."
      },
      {
        "id": "d",
        "text": "Boleh asalkan menggunakan alat kontrasepsi kedap darah."
      },
      {
        "id": "e",
        "text": "Haram bagi suami namun mubah bagi istri."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Menyetubuhi istri yang sedang haid pada farji adalah haram berdasarkan nash qath'i QS. Al-Baqarah: 222 (\"Maka jauhilah wanita di waktu haid dan jangan kamu dekati mereka sampai mereka suci\"). Pelakunya berdosa besar.",
    "dalil": "QS. Al-Baqarah ayat 222."
  },
  {
    "id": "hq_17",
    "question": "Jika seseorang terlanjur menyetubuhi istrinya saat darah haid sedang deras-derasnya mengalir, sunnah baginya membayar kaffarah (tebusan) sebagaimana anjuran hadits Nabi SAW riwayat Ibnu Abbas ra., yaitu sebesar:",
    "options": [
      {
        "id": "a",
        "text": "Memberi makan 60 orang miskin."
      },
      {
        "id": "b",
        "text": "Bersedekah 1 Dinar emas (± 4,25 gram emas) atau setengah Dinar."
      },
      {
        "id": "c",
        "text": "Menyembelih seekor kambing jantan."
      },
      {
        "id": "d",
        "text": "Berpuasa selama 2 bulan berturut-turut."
      },
      {
        "id": "e",
        "text": "Memberikan pakaian lengkap kepada 10 orang anak yatim."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dianjurkan bagi orang yang menyetubuhi istri saat darah haid sedang deras bersedekah 1 dinar (4,25 gram emas), dan jika saat darah sudah surut/kekuningan bersedekah setengah dinar.",
    "dalil": "HR. Abu Dawud no. 264, At-Tirmidzi no. 136 dari Ibnu Abbas ra."
  },
  {
    "id": "hq_18",
    "question": "Apakah hukum bagi wanita haid yang membaca Al-Qur'an dengan tujuan berdzikir, memohon perlindungan, atau membaca doa (seperti membaca Basmalah saat makan atau Istirja' saat tertimpa musibah)?",
    "options": [
      {
        "id": "a",
        "text": "Tetap haram mutlak karena lidah wanita haid tidak boleh melafalkan ayat quran."
      },
      {
        "id": "b",
        "text": "Diperbolehkan (mubah) asalkan murni berniat dzikir/doa dan tidak berniat membaca Al-Qur'an (tilawah)."
      },
      {
        "id": "c",
        "text": "Makruh dan wajib disucikan dengan berkumur air mawar."
      },
      {
        "id": "d",
        "text": "Hanya boleh dilafalkan dalam hati tanpa menggerakkan bibir."
      },
      {
        "id": "e",
        "text": "Wajib membayar fidyah setiap kali melafalkan kalimat thayyibah."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Keharaman membaca Al-Qur'an bagi wanita haid berlaku jika dimaksudkan untuk qira'ah/tilawah semata. Jika diniatkan semata-mata sebagai dzikir, doa, atau wirid pelindung (seperti ayat kursi sebelum tidur atau al-fatihah untuk ruqyah), maka hukumnya mubah.",
    "dalil": "Kitab I'anatut Thalibin juz 1 hal. 83."
  },
  {
    "id": "hq_19",
    "question": "Seorang wanita yang sedang haid hendak masuk ke dalam masjid. Manakah perincian hukum yang tepat terkait keberadaannya di dalam masjid?",
    "options": [
      {
        "id": "a",
        "text": "Haram berdiam diri (al-mukts) di masjid, namun boleh sekadar melintas (al-'ubūr) jika aman dari mengotori masjid."
      },
      {
        "id": "b",
        "text": "Boleh berdiam diri di masjid selama mengenakan pembalut medis berlapis."
      },
      {
        "id": "c",
        "text": "Haram melintas maupun berdiam diri secara mutlak dalam kondisi apa pun."
      },
      {
        "id": "d",
        "text": "Sunnah berada di masjid untuk mendengarkan khutbah Jumat."
      },
      {
        "id": "e",
        "text": "Boleh jika masjid tersebut merupakan masjid kampus atau mushalla umum."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Wanita haid diharamkan berdiam diri di masjid (al-mukts). Adapun sekadar melintas/lewat (al-'ubur/al-murur), hukumnya diperbolehkan dengan syarat yakin darahnya tidak akan menetes dan mengotori masjid.",
    "dalil": "QS. An-Nisa: 43 dan Sabda Nabi SAW: \"Lā uhillul masjida li hā-idhin wa lā junub\" (HR. Abu Dawud)."
  },
  {
    "id": "hq_20",
    "question": "Kapan sajakah seorang wanita haid yang telah berhenti darahnya DIPERBOLEHKAN untuk disetubuhi oleh suaminya?",
    "options": [
      {
        "id": "a",
        "text": "Seketika setelah darah berhenti meskipun belum mandi besar."
      },
      {
        "id": "b",
        "text": "Setelah darah berhenti DAN ia telah selesai melaksanakan mandi besar secara sah."
      },
      {
        "id": "c",
        "text": "Cukup setelah ia mencuci organ intimnya dengan sabun wangi."
      },
      {
        "id": "d",
        "text": "Setelah berwudhu tanpa perlu mandi besar."
      },
      {
        "id": "e",
        "text": "Menunggu 24 jam setelah darah benar-benar kering."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Syariat melarang suami menyetubuhi istri yang baru suci hingga istrinya mandi janabah/mandi haid terlebih dahulu. Firman Allah: \"Fa idzā tathah-harna fa'tūhunna min haitsu amarakumullāh\" (QS. Al-Baqarah: 222). Makna tathah-harna adalah bersuci dengan air (mandi).",
    "dalil": "QS. Al-Baqarah ayat 222 & Tafsir Ibnu Katsir."
  },
  {
    "id": "hq_21",
    "question": "Seorang wanita melahirkan melalui operasi caesar (bedah sesar) dan rahimnya dibersihkan secara medis sehingga tidak ada darah nifas yang keluar sama sekali setelah operasi. Apakah wanita tersebut tetap WAJIB melaksanakan mandi besar?",
    "options": [
      {
        "id": "a",
        "text": "Tidak wajib mandi karena tidak ada darah nifas yang mengalir."
      },
      {
        "id": "b",
        "text": "Tetap wajib mandi besar karena proses persalinan (wiladah) itu sendiri merupakan sebab independen yang mewajibkan mandi."
      },
      {
        "id": "c",
        "text": "Hanya disunnahkan berwudhu sebelum menyusui bayinya."
      },
      {
        "id": "d",
        "text": "Wajib tayamum sebagai pengganti mandi wiladah."
      },
      {
        "id": "e",
        "text": "Hanya wajib mandi setelah masa 40 hari berlalu."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam Mazhab Syafi'i, melahirkan anak (al-wiladah) adalah sebab tersendiri yang mewajibkan mandi besar, baik disertai keluarnya darah nifas maupun lahir dalam keadaan kering murni tanpa darah.",
    "dalil": "Kitab Nihayatuz Zain karya Syekh Nawawi Al-Bantani hal. 31."
  },
  {
    "id": "hq_22",
    "question": "Jika darah haid telah berhenti sebelum fajar terbit (misalnya pukul 04.00 Subuh), namun wanita tersebut baru sempat mandi besar pada pukul 06.00 pagi setelah matahari terbit. Bagaimanakah status ibadah PUASA RAMADHAN yang ia jalankan pada hari tersebut?",
    "options": [
      {
        "id": "a",
        "text": "Puasanya batal karena syarat sah puasa adalah sudah suci dan mandi sebelum adzan Subuh."
      },
      {
        "id": "b",
        "text": "Puasanya tetap SAH, asalkan darah haid sudah berhenti sebelum fajar dan ia berniat puasa di malam hari."
      },
      {
        "id": "c",
        "text": "Puasanya makruh dan ia wajib membayar fidyah."
      },
      {
        "id": "d",
        "text": "Ia wajib mengqadha puasa hari tersebut setelah bulan Ramadhan usai."
      },
      {
        "id": "e",
        "text": "Puasanya sah separuh hari hingga waktu Zhuhur."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Mandi janabah/mandi haid bukan merupakan syarat sah puasa. Syarat sah puasa adalah terbebasnya tubuh dari darah haid saat fajar shadiq terbit. Jika darah telah bersih sebelum fajar dan telah berniat, puasanya sah walau mandinya ditunda hingga setelah Subuh.",
    "dalil": "HR. Bukhari no. 1926 dan Muslim no. 1109 tentang Nabi SAW mendapati fajar dalam keadaan junub lalu mandi dan berpuasa."
  },
  {
    "id": "hq_23",
    "question": "Darah istihadhah berbeda secara sifat biologis dan hukum dari darah haid. Manakah karakteristik klinis dan syar'i yang membedakan darah istihadhah dari darah haid?",
    "options": [
      {
        "id": "a",
        "text": "Darah istihadhah berwarna hitam pekat, kental, dan beraroma anyir menusuk."
      },
      {
        "id": "b",
        "text": "Darah istihadhah berwarna merah segar, encer, keluar dari pembuluh darah yang pecah ('irqun 'adzil), dan membeku bila ditampung."
      },
      {
        "id": "c",
        "text": "Darah istihadhah keluar dari rahim bagian dalam melalui mulut rahim."
      },
      {
        "id": "d",
        "text": "Darah istihadhah mengharamkan wanita untuk menunaikan shalat lima waktu."
      },
      {
        "id": "e",
        "text": "Darah istihadhah hanya terjadi pada wanita yang sudah menopause."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Nabi SAW menjelaskan bahwa darah istihadhah adalah darah penyakit yang memancar dari pecahnya pembuluh darah ('irqun yanfajiru), warnanya merah segar, encer, tidak beraroma khas haid, dan cepat membeku. Darah ini tidak menghalangi shalat dan puasa.",
    "dalil": "HR. Abu Dawud no. 286 dan An-Nasa'i no. 215."
  },
  {
    "id": "hq_24",
    "question": "Seorang wanita lupa sama sekali kapan waktu rutin siklus haidnya dan berapa hari biasanya darah keluar (dikenal dalam fiqih sebagai Mutahayyirah Muthlaqah / Dhallah). Bagaimanakah status ibadahnya menurut Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "Dianggap suci secara mutlak sepanjang tahun tanpa perlu mandi."
      },
      {
        "id": "b",
        "text": "Ia berhati-hati (ihtiyath): wajib mandi setiap waktu shalat fardhu karena ada kemungkinan suci, dan haram disetubuhi karena ada kemungkinan haid."
      },
      {
        "id": "c",
        "text": "Mengikuti siklus haid ibu kandungnya secara otomatis."
      },
      {
        "id": "d",
        "text": "Bebas dari seluruh kewajiban shalat hingga ingatannya pulih."
      },
      {
        "id": "e",
        "text": "Haidnya ditetapkan 15 hari setiap bulan secara bergantian."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Wanita mutahayyirah muthlaqah (lupa tanggal dan durasi kebiasaan) wajib mengambil jalan ikhtiyath (kehati-hatian tinggi): ia dianggap seperti wanita suci dalam kewajiban shalat dan puasa (sehingga wajib mandi setiap hendak shalat fardhu), namun dianggap seperti wanita haid dalam hal keharaman jima', talak, dan menyentuh mushaf.",
    "dalil": "Kitab Al-Majmu' Syarah Al-Muhadzdzab juz 2 hal. 421."
  },
  {
    "id": "hq_25",
    "question": "Ketika seorang wanita telah selesai mandi haid, apakah disunnahkan baginya membersihkan bekas darah pada kemaluannya dengan kapas yang diberi wewangian (misk)?",
    "options": [
      {
        "id": "a",
        "text": "Tidak disunnahkan karena wewangian makruh bagi wanita yang bersuci."
      },
      {
        "id": "b",
        "text": "Sunnah muakkadah berdasarkan perintah Rasulullah SAW kepada Asma' binti Syakal untuk menghilangkan aroma sisa darah."
      },
      {
        "id": "c",
        "text": "Wajib, dan jika ditinggalkan maka mandi haidnya tidak sah."
      },
      {
        "id": "d",
        "text": "Hanya disunnahkan bagi wanita yang hendak melangsungkan akad nikah."
      },
      {
        "id": "e",
        "text": "Haram karena memasukkan zat asing ke dalam rongga kemaluan."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Rasulullah SAW mengajarkan kepada wanita anshar: \"Ambillah sepotong kapas yang diberi wangi kasturi (misk), lalu bersihkanlah bekas darah dengannya\" untuk menghilangkan sisa aroma darah haid yang kurang sedap.",
    "dalil": "HR. Bukhari no. 314 dan Muslim no. 332 dari Aisyah ra."
  }
];
