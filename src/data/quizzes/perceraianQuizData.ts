import { PerceraianQuizQuestion } from '../../types/perceraian';

export const PERCERAIAN_QUIZ: PerceraianQuizQuestion[] = [
  {
    "id": "pc_1",
    "question": "Bagaimanakah hukum asal perceraian (Thalaq) dalam syariat Islam sebagaimana disabdakan oleh Rasulullah SAW dalam hadits shahih riwayat Abu Dawud dan Ibnu Majah?",
    "options": [
      {
        "id": "a",
        "text": "Sunnah muakkadah bagi pasangan yang sering berselisih paham"
      },
      {
        "id": "b",
        "text": "Perkara mubah yang paling dibenci oleh Allah SWT (Abghadhul halāl ilallāhi ath-thalāq)"
      },
      {
        "id": "c",
        "text": "Haram mutlak dalam semua kondisi dan membatalkan keislaman"
      },
      {
        "id": "d",
        "text": "Wajib dilaksanakan jika mertua memintanya"
      },
      {
        "id": "e",
        "text": "Mubah tanpa ada penilaian pahala maupun dosa"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Rasulullah SAW bersabda: \"Perkara halal yang paling dibenci oleh Allah adalah thalaq (perceraian)\". Meskipun secara hukum dibolehkan saat terjadi kebuntuan rumah tangga, hukum asalnya makruh karena merusak ikatan mitsaqan ghalizha.",
    "dalil": "HR. Abu Dawud no. 2178, Ibnu Majah no. 2018, dan Al-Hakim no. 2/196."
  },
  {
    "id": "pc_2",
    "question": "Seorang suami berkata kepada istrinya dengan emosi: \"Mulai hari ini engkau aku talak!\". Suami tersebut tidak berniat sungguh-sungguh di dalam hatinya dan hanya bermaksud menggertak. Bagaimanakah status hukum jatuhnya talak tersebut?",
    "options": [
      {
        "id": "a",
        "text": "Talak tidak jatuh karena suami tidak berniat di dalam batinnya"
      },
      {
        "id": "b",
        "text": "Talak sah jatuh seketika, karena lafal \"talak\" adalah Lafal Sharīh (tegas) yang tidak memerlukan niat untuk sahnya thalaq"
      },
      {
        "id": "c",
        "text": "Talak baru jatuh jika diucapkan tiga kali berturut-turut"
      },
      {
        "id": "d",
        "text": "Wajib dibatalkan dengan membayar denda kafarat sumpah"
      },
      {
        "id": "e",
        "text": "Hanya berstatus talak gantung yang menunggu keputusan pengadilan"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam fiqih Islam, lafal thalaq sharih (seperti kata talak, cerai, pisah) langsung menjatuhkan talak secara otomatis begitu diucapkan oleh orang yang berakal dan baligh, baik ia berniat sungguh-sungguh maupun bercanda/menggertak.",
    "dalil": "HR. Abu Dawud no. 2194 & Tirmidzi no. 1184: \"Tiga perkara yang sungguh-sungguhnya jadi dan bercandanya pun jadi: nikah, talak, dan ruju'.\""
  },
  {
    "id": "pc_3",
    "question": "Suami berkata kepada istrinya: \"Kemasi barang-barangmu dan pulanglah ke rumah orang tuamu sekarang juga!\". Kalimat ini termasuk kategori Lafal Kināyah (sindiran). Kapan lafal kinayah tersebut dapat menjatuhkan talak?",
    "options": [
      {
        "id": "a",
        "text": "Otomatis jatuh talak walaupun suami hanya berniat menyuruh istri berlibur"
      },
      {
        "id": "b",
        "text": "HANYA JATUH TALAK jika saat mengucapkan kalimat tersebut terbersit niat thalaq di dalam hati sang suami"
      },
      {
        "id": "c",
        "text": "Jatuh talak tiga sekaligus tanpa hak ruju'"
      },
      {
        "id": "d",
        "text": "Tidak pernah bisa menjatuhkan talak dalam kondisi apa pun"
      },
      {
        "id": "e",
        "text": "Jatuh talak jika istri menangis tersedu-sedu"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Lafal Kināyah adalah kalimat kiasan yang memiliki makna ganda (bisa bermakna cerai atau sekadar kemarahan). Talak tidak jatuh melalui lafal kinayah KECUALI jika disertai niat thalaq saat mengucapkannya.",
    "dalil": "Kitab Matan Al-Ghayah wat Taqrib, Fashl Ahkam Ath-Thalaq."
  },
  {
    "id": "pc_4",
    "question": "Apakah yang dimaksud dengan \"Thalaq Sunnī\" yang diperintahkan oleh syariat jika seorang suami terpaksa menceraikan istrinya?",
    "options": [
      {
        "id": "a",
        "text": "Mentalak istri sebanyak 3 talak dalam satu ucapan di depan penghulu"
      },
      {
        "id": "b",
        "text": "Mentalak istri dengan SATU talak pada masa suci di mana istri belum pernah digauli (jima') pada masa suci tersebut"
      },
      {
        "id": "c",
        "text": "Mentalak istri pada saat sedang mengalami siklus haid"
      },
      {
        "id": "d",
        "text": "Mentalak istri di hadapan seluruh kerabat keluarga besar"
      },
      {
        "id": "e",
        "text": "Mentalak istri yang sedang menjalani puasa Ramadhan"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Thalaq Sunni adalah thalaq yang sesuai tuntunan syariat: dijatuhkan satu kali talak saat istri dalam kondisi suci dari haid dan belum pernah digauli selama masa suci tersebut, sehingga masa iddahnya menjadi jelas dan tidak diperpanjang.",
    "dalil": "QS. At-Talaq: 1: \"Wahai Nabi! Apabila kamu menceraikan istri-istrimu maka ceraikanlah mereka pada waktu mereka dapat (menghadapi) iddahnya (yang wajar)...\""
  },
  {
    "id": "pc_5",
    "question": "Abdullah bin Umar radhiyallahu 'anhuma mentalak istrinya saat sang istri sedang dalam kondisi haid. Rasulullah SAW marah dan memerintahkan Ibnu Umar untuk merujuk istrinya kembali. Tindakan mentalak istri saat haid ini dinamakan:",
    "options": [
      {
        "id": "a",
        "text": "Thalaq Sunni"
      },
      {
        "id": "b",
        "text": "Thalaq Bid'ī (haram berdosa, namun menurut jumhur thalaqnya tetap jatuh)"
      },
      {
        "id": "c",
        "text": "Thalaq Raj'i yang dianjurkan"
      },
      {
        "id": "d",
        "text": "Thalaq Ba'in Kubra otomatis"
      },
      {
        "id": "e",
        "text": "Fasakh pernikahan"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Thalaq Bid'i adalah mentalak istri saat sedang haid atau pada masa suci yang telah dicampuri. Pelakunya berdosa besar, dan Rasulullah SAW memerintahkan Ibnu Umar untuk ruju' hingga istrinya suci lalu haid lagi lalu suci, baru kemudian boleh ditalak jika mau.",
    "dalil": "HR. Bukhari no. 5251 & Muslim no. 1471 dari Abdullah bin Umar RA."
  },
  {
    "id": "pc_6",
    "question": "Apakah hak syar'i yang dimiliki oleh seorang suami terhadap istrinya yang dijatuhi \"Thalaq Raj'ī\" (talak satu atau dua) selama sang istri masih berada dalam masa iddah?",
    "options": [
      {
        "id": "a",
        "text": "Suami tidak berhak ruju' kecuali dengan mahar baru dan wali baru"
      },
      {
        "id": "b",
        "text": "Suami berhak penuh untuk merujuk kembali istrinya kapan saja tanpa perlu akad baru, tanpa mahar baru, dan bahkan tanpa memerlukan persetujuan istri"
      },
      {
        "id": "c",
        "text": "Suami wajib mengusir istri keluar dari rumah malam itu juga"
      },
      {
        "id": "d",
        "text": "Istri haram diberi nafkah tempat tinggal"
      },
      {
        "id": "e",
        "text": "Pernikahan otomatis menjadi batal demi hukum"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam masa iddah Thalaq Raj'i, ikatan perkawinan belum putus sempurna. Suami memiliki hak prerogatif untuk ruju' tanpa akad dan mahar baru. Allah berfirman: \"Dan suami-suaminya berhak merujukinya dalam masa itu, jika mereka menghendaki ishlah\" (QS. Al-Baqarah: 228).",
    "dalil": "QS. Al-Baqarah: 228 & Kitab Fathul Qarib."
  },
  {
    "id": "pc_7",
    "question": "Seorang suami telah menjatuhkan talak satu kepada istrinya, namun masa iddah istri (tiga kali suci) telah habis sebelum suami sempat merujuknya. Status talak tersebut berubah menjadi:",
    "options": [
      {
        "id": "a",
        "text": "Thalaq Ba'in Kubra"
      },
      {
        "id": "b",
        "text": "Thalaq Ba'in Sughrā (mereka boleh bersatu kembali, namun wajib dengan AKAD NIKAH BARU, MAHAR BARU, dan izin wali nikah)"
      },
      {
        "id": "c",
        "text": "Thalaq Raj'i abadi"
      },
      {
        "id": "d",
        "text": "Haram dinikahi kembali selamanya"
      },
      {
        "id": "e",
        "text": "Nikah Syighar"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Thalaq Ba'in Sughra memutuskan kepemilikan nikah suami. Jika masa iddah talak raj'i habis tanpa ruju', mantan suami hanya bisa kembali kepada mantan istrinya melalui akad pernikahan baru seperti layaknya pria lain.",
    "dalil": "Kitab Al-Mu'tamad fil Fiqh Asy-Syafi'i Jilid 4."
  },
  {
    "id": "pc_8",
    "question": "Seorang suami telah menjatuhkan talak yang ketiga kalinya (Thalaq Ba'in Kubrā) kepada istrinya. Apakah syarat mutlak agar wanita tersebut halal dinikahi kembali oleh sang mantan suami pertama?",
    "options": [
      {
        "id": "a",
        "text": "Cukup menunggu masa iddah 1 tahun lalu menikah kembali"
      },
      {
        "id": "b",
        "text": "Wanita tersebut harus menikah sah terlebih dahulu dengan pria lain (suami kedua), terjadi hubungan intim nyata (dukhūl) di antara keduanya, lalu bercerai secara wajar/alami tanpa rekayasa, dan telah habis masa iddahnya dari suami kedua"
      },
      {
        "id": "c",
        "text": "Suami pertama membayar denda emas senilai 100 dinar"
      },
      {
        "id": "d",
        "text": "Suami kedua menandatangani kontrak cerai sebelum akad nikah"
      },
      {
        "id": "e",
        "text": "Wanita tersebut berpuasa selama 3 bulan berturut-turut"
      }
    ],
    "correctOptionId": "b",
    "explanation": "QS. Al-Baqarah: 230 menegaskan bahwa wanita ditalak tiga haram bagi mantan suaminya hingga ia menikah dengan suami lain dan merasakan hubungan intim nyata (dzauqul 'usailah). Praktik nikah rekayasa (tahlil) dilaknat syariat.",
    "dalil": "QS. Al-Baqarah: 230 & HR. Bukhari no. 5261 (Hadits Rifa'ah Al-Qurazhi)."
  },
  {
    "id": "pc_9",
    "question": "Istri Sahabat Tsabit bin Qais RA datang mengadu kepada Nabi SAW bahwa ia tidak mencela akhlak maupun agama suaminya, namun ia sangat khawatir kufur nikmat karena tidak mampu mencintai fisik suaminya. Nabi SAW menyuruhnya mengembalikan kebun mahar kepada Tsabit, lalu Tsabit menceraikannya. Perceraian atas inisiatif istri dengan tebusan harta ini dinamakan:",
    "options": [
      {
        "id": "a",
        "text": "Li'an"
      },
      {
        "id": "b",
        "text": "Al-Khulu' (Gugat Cerai Tebus / Tebus Talak)"
      },
      {
        "id": "c",
        "text": "Ila'"
      },
      {
        "id": "d",
        "text": "Zhihar"
      },
      {
        "id": "e",
        "text": "Fasakh"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Al-Khulu' adalah pemutusan ikatan perkawinan atas kesepakatan kedua pihak atau gugatan istri dengan memberikan ganti rugi tebusan harta ('iwadh) dari pihak istri kepada suami.",
    "dalil": "HR. Bukhari no. 5273 dari Ibnu Abbas RA & QS. Al-Baqarah: 229."
  },
  {
    "id": "pc_10",
    "question": "Apakah status pemutusan pernikahan yang diakibatkan oleh akad Khulu' (cerai tebusan)?",
    "options": [
      {
        "id": "a",
        "text": "Thalaq Raj'i di mana suami boleh ruju' sepihak"
      },
      {
        "id": "b",
        "text": "Thalaq Ba'in Sughrā (atau Fasakh), di mana suami TIDAK MEMILIKI HAK RUJU' sepihak dalam masa iddah dan hanya bisa kembali dengan akad nikah baru atas kerelaan mantan istri"
      },
      {
        "id": "c",
        "text": "Thalaq Ba'in Kubra seketika"
      },
      {
        "id": "d",
        "text": "Pernikahan tetap sah dan istri wajib membayar denda bulanan"
      },
      {
        "id": "e",
        "text": "Haram bersatu kembali untuk selamanya"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Tujuan utama khulu' adalah membebaskan istri dari ikatan suami yang tidak diinginkannya. Jika suami diberi hak ruju' sepihak, tujuan tebusan akan sia-sia. Maka khulu' berstatus Ba'in Sughra tanpa hak ruju'.",
    "dalil": "Kitab Al-Mughni karya Ibnu Qudamah & Matan Minhajut Thalibin."
  },
  {
    "id": "pc_11",
    "question": "Pembatalan ikatan pernikahan oleh hakim pengadilan agama karena adanya cacat fisik permanen pada suami (seperti impoten/jabb/khisha'), murtadnya salah satu pasangan, atau suami hilang tanpa kabar (mafqūd) dan tidak memberi nafkah lahir batin disebut:",
    "options": [
      {
        "id": "a",
        "text": "Thalaq Sunni"
      },
      {
        "id": "b",
        "text": "Al-Fasakh"
      },
      {
        "id": "c",
        "text": "Al-Khulu'"
      },
      {
        "id": "d",
        "text": "Al-Ila'"
      },
      {
        "id": "e",
        "text": "Az-Zhihar"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Al-Fasakh adalah pembatalan dan pemutusan akad nikah oleh hakim pengadilan syariah karena adanya cacat/aib atau penyebab yang merusak keabsahan dan tujuan kelangsungan rumah tangga. Fasakh tidak mengurangi kuota talak 3 suami.",
    "dalil": "Kitab Al-Fiqh Al-Manhaji Jilid 4 & KHI Pasal 125."
  },
  {
    "id": "pc_12",
    "question": "Seorang suami bersumpah demi Allah tidak akan menyetubuhi istrinya selama lebih dari 4 bulan (atau selamanya) dengan tujuan menzalimi istrinya. Tindakan sumpah pantang jima' ini dalam fiqih disebut:",
    "options": [
      {
        "id": "a",
        "text": "Az-Zhihār"
      },
      {
        "id": "b",
        "text": "Al-Īlā'"
      },
      {
        "id": "c",
        "text": "Al-Li'ān"
      },
      {
        "id": "d",
        "text": "Al-Khulu'"
      },
      {
        "id": "e",
        "text": "Al-Fasakh"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Al-Īlā' adalah sumpah suami demi Allah untuk tidak menyetubuhi istrinya selama lebih dari 4 bulan. Syariat memberi tenggat waktu 4 bulan: suami harus memilih ruju' menyetubuhi istrinya dan membayar kaffarah sumpah, atau menceraikannya.",
    "dalil": "QS. Al-Baqarah: 226-227: \"Bagi orang-orang yang meng-ilaa' istrinya diberi tangguh empat bulan...\""
  },
  {
    "id": "pc_13",
    "question": "Suami berkata kepada istrinya: \"Bagiku punggungmu sama haramnya dengan punggung ibu kandungku!\". Ucapan jahiliyah yang mengharamkan istri dengan menyamakannya pada mahram abadi ini dinamakan:",
    "options": [
      {
        "id": "a",
        "text": "Al-Īlā'"
      },
      {
        "id": "b",
        "text": "Azh-Zhihār"
      },
      {
        "id": "c",
        "text": "Al-Li'ān"
      },
      {
        "id": "d",
        "text": "Al-Khabal"
      },
      {
        "id": "e",
        "text": "Al-Qadzaf"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Azh-Zhihār adalah ucapan suami yang menyerupakan istrinya dengan wanita yang haram dinikahi selamanya baginya (seperti ibu atau saudara perempuan). Perbuatan ini dosa besar (munkaran minal qauli wa zūra).",
    "dalil": "QS. Al-Mujadilah: 2-3."
  },
  {
    "id": "pc_14",
    "question": "Apakah kaffarah berat yang WAJIB ditunaikan oleh seorang suami yang men-zhihar istrinya SEBELUM ia boleh menyentuh atau menyetubuhi istrinya kembali menurut Surah Al-Mujadilah ayat 3-4?",
    "options": [
      {
        "id": "a",
        "text": "Membayar denda 100 ekor kambing"
      },
      {
        "id": "b",
        "text": "Memerdekakan seorang budak; jika tidak mampu wajib berpuasa 2 bulan berturut-turut; jika tidak mampu wajib memberi makan 60 orang miskin"
      },
      {
        "id": "c",
        "text": "Berpuasa 3 hari dan memberi makan 10 anak yatim"
      },
      {
        "id": "d",
        "text": "Cukup beristighfar 33 kali setelah shalat fardhu"
      },
      {
        "id": "e",
        "text": "Menikahkan mantan istrinya dengan pria lain"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Kaffarah zhihar diatur bertingkat dalam QS. Al-Mujadilah: 3-4: 1. Memerdekakan budak, 2. Jika tak mampu: puasa 2 bulan berturut-turut sebelum bercampur, 3. Jika tak mampu: memberi makan 60 fakir miskin.",
    "dalil": "QS. Al-Mujadilah: 3-4."
  },
  {
    "id": "pc_15",
    "question": "Berapakah masa iddah bagi seorang wanita yang diceraikan suaminya dalam kondisi SEDANG HAMIL?",
    "options": [
      {
        "id": "a",
        "text": "3 kali masa suci"
      },
      {
        "id": "b",
        "text": "4 bulan 10 hari"
      },
      {
        "id": "c",
        "text": "Sampai wanita tersebut melahirkan kandungannya (Wadh'ul Hamli)"
      },
      {
        "id": "d",
        "text": "9 bulan 10 hari"
      },
      {
        "id": "e",
        "text": "Tergantung jenis kelamin bayi yang dilahirkan"
      }
    ],
    "correctOptionId": "c",
    "explanation": "Berdasarkan ketetapan qath'i QS. At-Talaq: 4, masa iddah wanita hamil (baik karena ditalak maupun ditinggal mati suami) berakhir seketika saat ia melahirkan kandungannya, meskipun persalinan terjadi hanya beberapa saat setelah perceraian.",
    "dalil": "QS. At-Talaq: 4: \"Wa ulātul ahmāli ajāluhunna an yadha'na hamlahunn...\" & HR. Bukhari no. 5318 (Hadits Subai'ah Al-Aslamiyyah)."
  },
  {
    "id": "pc_16",
    "question": "Berapakah masa iddah bagi seorang istri yang ditalak (cerai hidup) yang masih memiliki siklus menstruasi teratur menurut Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "Tiga kali masa haid"
      },
      {
        "id": "b",
        "text": "Tiga kali masa suci (Tsalātsata Qurū')"
      },
      {
        "id": "c",
        "text": "Tiga bulan kalender masehi"
      },
      {
        "id": "d",
        "text": "40 hari pasca talak"
      },
      {
        "id": "e",
        "text": "Satu tahun hijriyah"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam Mazhab Syafi'i dan Maliki, kata \"Al-Qurū'\" dalam QS. Al-Baqarah: 228 dimaknai sebagai masa suci (Ath-Thuhr). Sehingga iddahnya adalah melewati tiga kali masa suci (bukan tiga kali darah haid).",
    "dalil": "QS. Al-Baqarah: 228 & Kitab Al-Umm karya Imam Asy-Syafi'i."
  },
  {
    "id": "pc_17",
    "question": "Berapakah masa iddah bagi seorang istri yang ditalak hidup yang sudah tidak mengalami haid lagi karena menopause (Al-Ā'isah) atau perempuan yang belum pernah mengalami haid?",
    "options": [
      {
        "id": "a",
        "text": "30 hari"
      },
      {
        "id": "b",
        "text": "Tiga (3) bulan kalender hijriyah"
      },
      {
        "id": "c",
        "text": "4 bulan 10 hari"
      },
      {
        "id": "d",
        "text": "Tidak ada masa iddah baginya"
      },
      {
        "id": "e",
        "text": "100 hari kalender"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Al-Qur'an secara tegas menetapkan masa iddah bagi wanita yang menopause atau belum haid adalah selama 3 bulan kalender.",
    "dalil": "QS. At-Talaq: 4: \"Dan perempuan-perempuan yang tidak haid lagi (menopause) di antara perempuan-perempuanmu jika kamu ragu-ragu, maka iddah mereka adalah tiga bulan; dan begitu pula perempuan-perempuan yang tidak haid.\""
  },
  {
    "id": "pc_18",
    "question": "Berapakah masa iddah bagi seorang wanita yang diceraikan oleh suaminya SEBELUM mereka berdua sempat melakukan hubungan intim (Qabla ad-Dukhūl)?",
    "options": [
      {
        "id": "a",
        "text": "1 kali masa suci"
      },
      {
        "id": "b",
        "text": "TIDAK ADA MASA IDDAH sama sekali baginya, dan ia halal langsung menikah dengan pria lain seketika setelah ditalak"
      },
      {
        "id": "c",
        "text": "3 bulan"
      },
      {
        "id": "d",
        "text": "40 hari"
      },
      {
        "id": "e",
        "text": "4 bulan 10 hari"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Al-Qur'an menegaskan bahwa wanita yang ditalak sebelum disentuh/disetubuhi tidak memiliki masa iddah sama sekali karena rahimnya dipastikan bersih.",
    "dalil": "QS. Al-Ahzab: 49: \"Wahai orang-orang yang beriman! Apabila kamu menikahi perempuan-perempuan mukmin, kemudian kamu ceraikan mereka sebelum kamu mencampurinya, maka tidak ada masa iddah atas mereka yang kamu minta memperhitungkannya.\""
  },
  {
    "id": "pc_19",
    "question": "Berapakah masa iddah bagi seorang istri yang DITINGGAL WAFAT oleh suaminya dalam kondisi TIDAK sedang hamil?",
    "options": [
      {
        "id": "a",
        "text": "3 kali masa suci"
      },
      {
        "id": "b",
        "text": "Empat bulan sepuluh hari (4 bulan 10 hari / Arba'ata asyhurin wa 'asyrā)"
      },
      {
        "id": "c",
        "text": "1 tahun penuh"
      },
      {
        "id": "d",
        "text": "3 bulan kalender"
      },
      {
        "id": "e",
        "text": "40 hari setelah pemakaman"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Al-Qur'an menetapkan masa iddah wafat (tanpa hamil) adalah 4 bulan 10 hari sebagai bentuk penghormatan ikatan pernikahan dan masa berkabung resmi.",
    "dalil": "QS. Al-Baqarah: 234: \"Dan orang-orang yang mati di antara kamu serta meninggalkan istri-istri hendaklah mereka (istri-istri) menangguhkan dirinya (beriddah) empat bulan sepuluh hari.\""
  },
  {
    "id": "pc_20",
    "question": "Apakah kewajiban berkabung \"Al-Ihdād\" yang diwajibkan syariat atas seorang wanita yang sedang menjalani masa iddah kematian suaminya?",
    "options": [
      {
        "id": "a",
        "text": "Mengurung diri di kamar gelap gulita tanpa boleh melihat sinar matahari"
      },
      {
        "id": "b",
        "text": "Menahan diri dari berhias, tidak memakai wewangian, tidak memakai perhiasan mencolok, pakaian bersolek, dan menetap di rumah suami kecuali untuk hajat mendesak di siang hari"
      },
      {
        "id": "c",
        "text": "Merobek-robek pakaian dan memukul pipi"
      },
      {
        "id": "d",
        "text": "Tidak boleh berbicara dengan siapa pun selama 4 bulan"
      },
      {
        "id": "e",
        "text": "Wajib mengenakan pakaian berwarna hitam legam saja"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Al-Ihdād adalah larangan berhias bagi wanita yang beriddah wafat (menjauhi parfum, celak, pacar kuku, perhiasan emas, baju mencolok) sebagai wujud adab kesetiaan dan duka cita.",
    "dalil": "HR. Bukhari no. 5341 & Muslim no. 1486 dari Ummu 'Athiyyah RA."
  },
  {
    "id": "pc_21",
    "question": "Bagaimanakah hak tempat tinggal dan nafkah bagi seorang istri yang sedang menjalani masa iddah Thalaq Raj'ī?",
    "options": [
      {
        "id": "a",
        "text": "Istri wajib keluar dari rumah suami pada hari pertama talak"
      },
      {
        "id": "b",
        "text": "Istri WAJIB TETAP TINGGAL di rumah suaminya dan BERHAK PENUH atas nafkah makan, pakaian, dan tempat tinggal yang ditanggung oleh suaminya"
      },
      {
        "id": "c",
        "text": "Istri hanya berhak mendapat tempat tinggal tanpa nafkah makan"
      },
      {
        "id": "d",
        "text": "Suami tidak berkewajiban memberi nafkah sepeser pun"
      },
      {
        "id": "e",
        "text": "Biaya nafkah dipotong dari mahar istri"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Al-Qur'an melarang mengeluarkan istri yang beriddah talak raj'i dari rumahnya: \"Lā tukhrijūhunna min buyūtihinna wa lā yakhrujna\". Istri tetap berhak mendapat nafkah penuh dan tempat tinggal dari suami agar membuka peluang ruju'.",
    "dalil": "QS. At-Talaq: 1 & QS. At-Talaq: 6."
  },
  {
    "id": "pc_22",
    "question": "Apakah rukun dan syarat sah tindakan Ruju' (kembali rujuk) dari seorang suami kepada istrinya dalam masa iddah Thalaq Raj'i menurut Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "Wajib melakukan akad nikah baru di hadapan penghulu KUA"
      },
      {
        "id": "b",
        "text": "Diucapkan dengan lafal lisan yang jelas (Shighat Ruju'), dilakukan semasa istri masih dalam masa iddah, dan disunnahkan dipersaksikan kepada dua orang saksi adil"
      },
      {
        "id": "c",
        "text": "Cukup dengan niat di dalam hati tanpa ucapan lisan"
      },
      {
        "id": "d",
        "text": "Wajib membayar mahar baru senilai mahar awal"
      },
      {
        "id": "e",
        "text": "Ruju' baru sah jika disetujui secara tertulis oleh mertua"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam Mazhab Syafi'i, ruju' wajib dengan lafal lisan (seperti: \"Aku merujukmu kembali sebagai istriku\") dan tidak cukup hanya dengan bersetubuh tanpa lafal. Sunnah menghadirkan dua saksi adil berdasarkan QS. At-Talaq: 2.",
    "dalil": "QS. At-Talaq: 2: \"Wa asy-hidū dzawai 'adlin minkum\" & Kitab Fathul Qarib."
  },
  {
    "id": "pc_23",
    "question": "Siapakah pihak yang paling berhak memegang hak pengasuhan anak kecil yang belum mumayyiz (Hadhanah) pasca terjadinya perceraian suami-istri menurut sunnah Nabi SAW?",
    "options": [
      {
        "id": "a",
        "text": "Ayah kandung secara mutlak"
      },
      {
        "id": "b",
        "text": "Ibu kandung, selama sang ibu belum menikah lagi dengan pria lain (mā lam tankihī)"
      },
      {
        "id": "c",
        "text": "Kakek dari pihak ayah"
      },
      {
        "id": "d",
        "text": "Panti asuhan terdekat"
      },
      {
        "id": "e",
        "text": "Diserahkan kepada undian koin"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Rasulullah SAW bersabda kepada seorang wanita yang bercerai: \"Engkau lebih berhak atas anakmu selama engkau belum menikah lagi\". Kasih sayang ibu pada usia balita tidak tergantikan oleh siapa pun.",
    "dalil": "HR. Abu Dawud no. 2276, Ahmad no. 2/182, dan Al-Hakim no. 2/207."
  },
  {
    "id": "pc_24",
    "question": "Ketika seorang anak yang diasuh telah mencapai usia Mumayyiz (sekitar 7-8 tahun yang sudah mampu mandiri membedakan baik dan buruk), bagaimanakah penentuan hak asuhnya menurut hadits Nabi SAW?",
    "options": [
      {
        "id": "a",
        "text": "Otomatis ditarik paksa oleh sang ayah"
      },
      {
        "id": "b",
        "text": "Anak tersebut diberikan hak memilih (Takhyīr) antara tinggal bersama ayahnya atau ibunya"
      },
      {
        "id": "c",
        "text": "Hak asuh otomatis gugur"
      },
      {
        "id": "d",
        "text": "Anak wajib diasuh oleh negara"
      },
      {
        "id": "e",
        "text": "Diputuskan berdasarkan siapa yang memiliki rumah lebih megah"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Nabi SAW memberi pilihan (takhyir) kepada anak yang sudah mumayyiz untuk memilih apakah ia ingin ikut ayahnya atau ibunya, lalu anak tersebut memilih salah satunya.",
    "dalil": "HR. Abu Dawud no. 2277 & At-Tirmidzi no. 1357 dari Abu Hurairah RA."
  },
  {
    "id": "pc_25",
    "question": "Meskipun hak asuh anak kecil (Hadhanah) berada di tangan sang ibu pasca perceraian, siapakah pihak yang WAJIB menanggung seluruh biaya nafkah makan, pakaian, pendidikan, dan kesehatan anak tersebut?",
    "options": [
      {
        "id": "a",
        "text": "Ditanggung sepenuhnya oleh ibu kandung dari uang gajinya"
      },
      {
        "id": "b",
        "text": "Tetap menjadi kewajiban mutlak atas sang AYAH KANDUNG sesuai kemampuan ekonominya"
      },
      {
        "id": "c",
        "text": "Dibagi rata antara paman dan kakek"
      },
      {
        "id": "d",
        "text": "Ditanggung oleh suami baru dari sang ibu"
      },
      {
        "id": "e",
        "text": "Kewajiban nafkah anak gugur saat terjadi perceraian"
      }
    ],
    "correctOptionId": "b",
    "explanation": "Perceraian tidak pernah menggugurkan kewajiban ayah kandung untuk menafkahi darah dagingnya. Tanggung jawab nafkah anak (makanan, tempat tinggal, sekolah, obat) tetap wajib dipikul ayah kandung hingga anak mandiri atau dewasa.",
    "dalil": "QS. Al-Baqarah: 233: \"Dan kewajiban ayah menanggung nafkah dan pakaian mereka dengan cara yang patut.\""
  }
];
