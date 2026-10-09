import { ZakatQuizQuestion } from '../../types/zakat';

export const ZAKAT_QUIZ: ZakatQuizQuestion[] = [
  {
    "id": "zq_1",
    "question": "Berapakah nisab zakat Emas murni yang wajib dikeluarkan zakatnya setelah genap masa kepemilikan selama satu tahun (haul), dan berapakah persentase kadar zakatnya?",
    "options": [
      {
        "id": "a",
        "text": "Nisab 50 gram emas murni dengan kadar zakat 5%."
      },
      {
        "id": "b",
        "text": "Nisab 85 gram emas murni (20 Dinar Mitsqal) dengan kadar zakat 2,5%."
      },
      {
        "id": "c",
        "text": "Nisab 100 gram emas murni dengan kadar zakat 10%."
      },
      {
        "id": "d",
        "text": "Nisab 200 gram emas murni dengan kadar zakat 2,5%."
      },
      {
        "id": "e",
        "text": "Nisab 85 gram emas murni dengan kadar zakat 10%."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Nisab emas menurut hadits shahih adalah 20 Dinar mitsqal emas murni, yang setara dengan 85 gram emas murni. Apabila telah mencapai nisab dan berlalu haul (satu tahun qamariyyah), wajib dikeluarkan zakatnya sebesar 2,5% (seperempat puluh).",
    "dalil": "HR. Abu Dawud no. 1573 dari Ali bin Abi Thalib ra.: \"Fa idzā kānat laka 'isyrūna dīnāran wa hāla 'alaihal hawl fa fīhā nishfu dīnār\"."
  },
  {
    "id": "zq_2",
    "question": "Seorang petani memanen padi dari sawah tadah hujan miliknya yang murni diairi oleh air hujan alami dan aliran sungai pegunungan tanpa mengeluarkan biaya irigasi atau pompa air. Berapakah persentase kadar zakat hasil panen yang wajib ia keluarkan?",
    "options": [
      {
        "id": "a",
        "text": "2,5% dari total berat gabah kering."
      },
      {
        "id": "b",
        "text": "5% dari total berat gabah bersih."
      },
      {
        "id": "c",
        "text": "10% dari total hasil panen gabah bersih."
      },
      {
        "id": "d",
        "text": "20% dari total penjualan gabah."
      },
      {
        "id": "e",
        "text": "Bebas zakat karena tidak menggunakan modal irigasi."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Rasulullah SAW menetapkan: \"Pada tanaman yang diairi oleh air hujan dan mata air atau yang menyerap air dari tanah (tanpa biaya), zakatnya adalah 10% (sepersepuluh). Sedangkan tanaman yang diairi dengan kincir/pompa berbiaya, zakatnya adalah 5% (seperduapuluh)\".",
    "dalil": "HR. Bukhari no. 1483 dari Abdullah bin Umar ra."
  },
  {
    "id": "zq_3",
    "question": "Berapakah nisab minimal hasil panen biji-bijian makanan pokok (seperti padi/gandum) menurut ukuran 5 Wasaq (Ausuq) dalam konversi timbangan kilogram beras/gabah kontemporer?",
    "options": [
      {
        "id": "a",
        "text": "Kurang lebih 200 kg beras."
      },
      {
        "id": "b",
        "text": "Kurang lebih 653 kg gabah kering giling (atau setara ± 520 kg beras putih bersih)."
      },
      {
        "id": "c",
        "text": "Minimal 1.000 kg (1 ton) gabah."
      },
      {
        "id": "d",
        "text": "Minimal 2.500 kg hasil panen kotor."
      },
      {
        "id": "e",
        "text": "Tidak ada batasan nisab untuk pertanian."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Nisab hasil pertanian adalah 5 wasaq (300 sha'). Satu sha' setara dengan 4 mud (± 2,176 kg beras). Maka 5 wasaq setara dengan kurang lebih 653 kg gabah kering giling atau sekitar 520–524 kg beras putih.",
    "dalil": "HR. Bukhari no. 1484 dan Muslim no. 979: \"Laisa fīmā dūna khamsati ausuqin shadaqah\"."
  },
  {
    "id": "zq_4",
    "question": "Seorang penambang menemukan peninggalan harta karun purbakala peninggalan zaman jahiliyyah yang terpendam di dalam bumi (Rikaz). Berapakah kadar zakat yang wajib ia keluarkan seketika saat penemuan tersebut?",
    "options": [
      {
        "id": "a",
        "text": "2,5% setelah menunggu haul 1 tahun."
      },
      {
        "id": "b",
        "text": "5% setelah dipotong biaya penggalian."
      },
      {
        "id": "c",
        "text": "10% diserahkan kepada kas RT setempat."
      },
      {
        "id": "d",
        "text": "20% (Khumus / seperlima) dikeluarkan seketika tanpa mensyaratkan haul."
      },
      {
        "id": "e",
        "text": "Seluruhnya menjadi milik penemu tanpa kewajiban zakat."
      }
    ],
    "correctOptionId": "d",
    "explanation": "Nabi SAW bersabda: \"Wa fir rizkāzil khumus\" (Dan pada harta temuan rikaz, kewajiban zakatnya adalah seperlima atau 20%). Zakat rikaz wajib dikeluarkan saat itu juga tanpa menunggu haul.",
    "dalil": "HR. Bukhari no. 1499 dan Muslim no. 1710 dari Abu Hurairah ra."
  },
  {
    "id": "zq_5",
    "question": "Siapakah di antara golongan kerabat berikut yang DIHARAMKAN untuk menerima zakat mal dari seorang muzakki?",
    "options": [
      {
        "id": "a",
        "text": "Saudara sepupu jauh yang berstatus miskin."
      },
      {
        "id": "b",
        "text": "Orang tua kandung (ayah/ibu) dan anak kandung yang berada di bawah kewajiban nafkah muzakki."
      },
      {
        "id": "c",
        "text": "Paman kandung dari jalur ibu yang terlilit hutang mubah."
      },
      {
        "id": "d",
        "text": "Tetangga muslim yang sedang menempuh studi sarjana fiqih."
      },
      {
        "id": "e",
        "text": "Saudara ipar yang fakir."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Zakat diharamkan diberikan kepada orang-orang yang nafkah hidupnya wajib ditanggung secara syar'i oleh muzakki, yaitu ushul (ayah, ibu, kakek, nenek ke atas) dan furu' (anak kandung, cucu ke bawah), serta istri.",
    "dalil": "Kitab Al-Majmu' Syarah Al-Muhadzdzab juz 6 hal. 229 & Ijma' Ulama."
  },
  {
    "id": "zq_6",
    "question": "Kapan sajakah batas WAKTU WAJIB (Waqtul Wujūb) ditetapkannya kewajiban membayar Zakat Fitrah bagi seorang muslim?",
    "options": [
      {
        "id": "a",
        "text": "Pada awal malam tanggal 1 Ramadhan."
      },
      {
        "id": "b",
        "text": "Saat terbenamnya matahari pada malam hari raya Idul Fitri (bertemunya bagian akhir Ramadhan dan bagian awal Syawal)."
      },
      {
        "id": "c",
        "text": "Setelah selesai khutbah shalat Idul Fitri."
      },
      {
        "id": "d",
        "text": "Pada pertengahan bulan Ramadhan (malam 15)."
      },
      {
        "id": "e",
        "text": "Tepat saat fajar shadiq terbit pada tanggal 1 Syawal."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Waktu wajib zakat fitrah dalam Mazhab Syafi'i adalah saat mendapati terbenamnya matahari pada hari terakhir Ramadhan (peralihan dari akhir Ramadhan ke awal Syawal). Anak yang lahir sebelum maghrib dan hidup setelahnya wajib dizakati.",
    "dalil": "Matan Al-Ghayah wat Taqrib Bab Zakatil Fithr."
  },
  {
    "id": "zq_7",
    "question": "Jika seseorang membayar zakat fitrah SETELAH pelaksanaan shalat Idul Fitri hingga sebelum matahari terbenam pada tanggal 1 Syawal tanpa ada udzur syar'i, bagaimanakah status hukum pembayarannya?",
    "options": [
      {
        "id": "a",
        "text": "Hukumnya Sunnah dan berpahala penuh."
      },
      {
        "id": "b",
        "text": "Hukumnya MAKRUH, namun tetap sah sebagai zakat fitrah."
      },
      {
        "id": "c",
        "text": "Hukumnya HARAM dan otomatis berubah menjadi sedekah sunnah biasa."
      },
      {
        "id": "d",
        "text": "Membatalkan seluruh pahala puasa Ramadhannya."
      },
      {
        "id": "e",
        "text": "Wajib mengulang pembayaran zakat pada tahun depan."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Waktu pembayaran zakat fitrah terbagi 5: Waktu mubah (awal Ramadhan), waktu wajib (tenggelam matahari akhir Ramadhan), waktu afdhal (pagi sebelum shalat Id), waktu makruh (setelah shalat Id sampai maghrib 1 Syawal), dan waktu haram/qadha (setelah maghrib 1 Syawal).",
    "dalil": "Kitab Fathul Qarib Al-Mujib & Nihayatuz Zain hal. 176."
  },
  {
    "id": "zq_8",
    "question": "Berapakah takaran standar Zakat Fitrah per jiwa menurut ketentuan hadits Nabi SAW jika dikonversikan ke dalam satuan makanan pokok beras di Indonesia menurut ketetapan BAZNAS dan MUI?",
    "options": [
      {
        "id": "a",
        "text": "1 mud beras (± 675 gram)."
      },
      {
        "id": "b",
        "text": "1 sha' beras (setara dengan 4 mud / ± 2,5 kg hingga 3 kg atau 3,5 liter beras)."
      },
      {
        "id": "c",
        "text": "5 kg beras premium."
      },
      {
        "id": "d",
        "text": "10 liter beras ketan."
      },
      {
        "id": "e",
        "text": "Bebas sesuai keikhlasan muzakki."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Zakat fitrah diwajibkan sebesar 1 sha' kurma atau gandum/beras makanan pokok. Satu sha' adalah 4 mud. Di Indonesia, para ulama BAZNAS dan MUI menetapkan takaran kehati-hatian 1 sha' setara dengan 2,5 kg atau 3,5 liter beras (disunnahkan menggenapkan 2,7 - 3 kg).",
    "dalil": "HR. Bukhari no. 1503 dan Muslim no. 984 dari Ibnu Umar ra."
  },
  {
    "id": "zq_9",
    "question": "Di dalam QS. At-Taubah ayat 60, Allah SWT merinci 8 golongan Mustahiq (penerima zakat). Siapakah yang dimaksud dengan asnaf \"Gharim\" (Al-Ghārimūn)?",
    "options": [
      {
        "id": "a",
        "text": "Orang yang bepergian jauh untuk berwisata."
      },
      {
        "id": "b",
        "text": "Orang yang terlilit hutang untuk kemaslahatan mubah atau mendamaikan sengketa masyarakat dan tidak sanggup melunasinya."
      },
      {
        "id": "c",
        "text": "Orang yang baru masuk Islam untuk dilunakkan hatinya."
      },
      {
        "id": "d",
        "text": "Petugas penarik dan pengelola zakat resmi."
      },
      {
        "id": "e",
        "text": "Orang yang berjihad mengangkat senjata di garis depan."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Al-Gharimun adalah orang-orang yang memiliki tanggungan hutang (gharamah), baik berhutang demi kemaslahatan pribadi yang mubah (bukan maksiat) lalu bangkrut, atau berhutang untuk mendamaikan sengketa perselisihan antar pihak (ishlāhu dzātil bain).",
    "dalil": "QS. At-Taubah ayat 60 & Kitab Al-Fiqhul Manhaji juz 1."
  },
  {
    "id": "zq_10",
    "question": "Apakah perbedaan mendasar antara asnaf \"Fakir\" dan asnaf \"Miskin\" dalam klasifikasi kemandirian ekonomi menurut fuqaha Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "Fakir memiliki penghasilan di atas UMR, sedangkan miskin tidak berpenghasilan."
      },
      {
        "id": "b",
        "text": "Fakir adalah orang yang tidak memiliki harta atau penghasilan sama sekali, atau memiliki penghasilan kurang dari 50% kebutuhannya; sedangkan Miskin memiliki penghasilan 50% atau lebih namun belum mencukupi 100% kebutuhan pokoknya."
      },
      {
        "id": "c",
        "text": "Miskin lebih parah dan lebih terlantar keadaannya daripada fakir."
      },
      {
        "id": "d",
        "text": "Fakir wajib bekerja sedangkan miskin dilarang bekerja."
      },
      {
        "id": "e",
        "text": "Tidak ada perbedaan sama sekali antara keduanya."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam Mazhab Syafi'i, kondisi Fakir lebih membutuhkan dibanding Miskin. Fakir hanya mampu memenuhi kurang dari separuh (< 50%) kebutuhan primernya. Sedangkan Miskin mampu memenuhi separuh atau lebih (50%–99%) tetapi belum mencukupi 100% kecukupan hidupnya.",
    "dalil": "Kitab Fathul Mu'in Bab Qismatish Shadaqat & Tuhfatul Muhtaj."
  },
  {
    "id": "zq_11",
    "question": "Seorang pedagang toko kelontong menghitung zakat perniagaannya (Urudhut Tijarah) di akhir haul. Rumus penghitungan harta perniagaan yang wajib dizakati menurut kaidah fiqih adalah:",
    "options": [
      {
        "id": "a",
        "text": "Hanya menghitung laba bersih bulanan saja dikalikan 10%."
      },
      {
        "id": "b",
        "text": "(Nilai barang dagangan siap jual + Uang kas/tabungan lancar + Piutang yang diharapkan cair) dikurangi Hutang jatuh tempo; jika sisa bersih mencapai nisab 85 gr emas, dikeluarkan 2,5%."
      },
      {
        "id": "c",
        "text": "Menghitung seluruh aset gedung toko, tanah, dan rak etalase."
      },
      {
        "id": "d",
        "text": "Mengeluarkan 2,5% dari omset kotor harian tanpa memotong modal."
      },
      {
        "id": "e",
        "text": "Hanya menghitung uang kembalian di meja kasir."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Kaidah zakat perniagaan: Aset lancar perniagaan (stok barang dagangan seharga pasar saat tutup buku + uang tunai + piutang lancar) dikurangi hutang operasional jangka pendek yang jatuh tempo. Jika nilai bersihnya mencapai nisab 85 gram emas, zakatnya 2,5%.",
    "dalil": "Fatwa Sahabat Samurah bin Jundub ra. (HR. Abu Dawud no. 1562) & Fatwa DSN-MUI."
  },
  {
    "id": "zq_12",
    "question": "Berapakah nisab zakat Perak murni dan kadar persentase zakat yang wajib ditunaikan setelah genap haul 1 tahun?",
    "options": [
      {
        "id": "a",
        "text": "Nisab 100 gram perak, zakat 5%."
      },
      {
        "id": "b",
        "text": "Nisab 595 gram perak murni (200 Dirham), zakat 2,5%."
      },
      {
        "id": "c",
        "text": "Nisab 1.000 gram perak, zakat 10%."
      },
      {
        "id": "d",
        "text": "Nisab 200 gram perak murni, zakat 2,5%."
      },
      {
        "id": "e",
        "text": "Perak tidak dikenai kewajiban zakat."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Nisab perak murni adalah 200 Dirham syar'i, yang setara dengan 595 gram perak murni. Kadar zakat yang wajib dikeluarkan setelah genap haul adalah 2,5% (seperempat puluh).",
    "dalil": "HR. Bukhari no. 1454 dari Anas bin Malik ra. tentang risalah zakat Abu Bakar ra."
  },
  {
    "id": "zq_13",
    "question": "Seorang peternak memiliki 35 ekor sapi yang digembalakan di padang rumput bebas (Sā'imah) selama genap 1 tahun. Berapakah zakat ternak yang wajib ia keluarkan?",
    "options": [
      {
        "id": "a",
        "text": "1 ekor kambing betina."
      },
      {
        "id": "b",
        "text": "1 ekor anak sapi jantan berumur 1 tahun genap menginjak tahun ke-2 (Tabī')."
      },
      {
        "id": "c",
        "text": "1 ekor sapi betina berumur 2 tahun genap (Musinnah)."
      },
      {
        "id": "d",
        "text": "2 ekor sapi jantan dewasa."
      },
      {
        "id": "e",
        "text": "Bebas zakat karena belum mencapai 40 ekor sapi."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Nisab sapi: 30 ekor sapi wajib mengeluarkan 1 ekor Tabi' (anak sapi jantan/betina usia 1 tahun masuk tahun ke-2). Jika mencapai 40 ekor, wajib 1 ekor Musinnah (sapi betina usia 2 tahun masuk tahun ke-3). Karena jumlahnya 35 ekor, zakatnya tetap 1 ekor Tabi'.",
    "dalil": "HR. Abu Dawud no. 1572 dan At-Tirmidzi no. 622 dari Mu'adz bin Jabal ra."
  },
  {
    "id": "zq_14",
    "question": "Berapakah nisab minimal kepemilikan hewan ternak Kambing/Domba yang digembalakan bebas (sā'imah) agar terkena kewajiban zakat?",
    "options": [
      {
        "id": "a",
        "text": "5 ekor kambing."
      },
      {
        "id": "b",
        "text": "20 ekor kambing."
      },
      {
        "id": "c",
        "text": "40 ekor kambing (zakatnya 1 ekor kambing)."
      },
      {
        "id": "d",
        "text": "100 ekor kambing."
      },
      {
        "id": "e",
        "text": "120 ekor kambing."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Nisab kambing dimulai dari 40 ekor hingga 120 ekor, zakatnya 1 ekor kambing. Dari 121 hingga 200 ekor zakatnya 2 ekor kambing. Dari 201 hingga 399 ekor zakatnya 3 ekor kambing. Setiap kelipatan 100 berikutnya zakatnya bertambah 1 ekor kambing.",
    "dalil": "HR. Bukhari no. 1454 dari Anas bin Malik ra."
  },
  {
    "id": "zq_15",
    "question": "Bagaimanakah hukum memberikan harta zakat kepada keluarga dekat Rasulullah SAW (Bani Hasyim dan Bani Muthallib serta para keturunannya)?",
    "options": [
      {
        "id": "a",
        "text": "Sunnah muakkadah sebagai wujud cinta kepada Ahlul Bait."
      },
      {
        "id": "b",
        "text": "HARAM mutlak bagi Ahlul Bait menerima zakat, karena zakat adalah kotoran harta manusia."
      },
      {
        "id": "c",
        "text": "Mubah jika mereka tidak memiliki pekerjaan tetap."
      },
      {
        "id": "d",
        "text": "Wajib mengutamakan mereka di atas asnaf fakir miskin lainnya."
      },
      {
        "id": "e",
        "text": "Boleh asalkan berupa zakat fitrah bukan zakat mal."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Nabi SAW bersabda: \"Sesungguhnya sedekah/zakat ini tidak halal bagi keluarga Muhammad, karena sesungguhnya ia merupakan kotoran/pencuci harta manusia\". Ahlul Bait dimuliakan syariat dan mendapatkan hak nafkah dari seperlima ghanimah/fai'.",
    "dalil": "HR. Muslim no. 1072 dari Al-Muthallib bin Rabi'ah ra."
  },
  {
    "id": "zq_16",
    "question": "Ibu Maryam memiliki perhiasan emas murni seberat 95 gram yang murni digunakan sebagai perhiasan sehari-hari secara wajar (tidak berlebihan) dan tidak diniatkan untuk timbunan investasi perdagangan. Bagaimanakah hukum zakat atas perhiasan emas tersebut menurut Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "Wajib dizakati setiap tahun sebesar 2,5%."
      },
      {
        "id": "b",
        "text": "TIDAK WAJIB dizakati, karena perhiasan emas yang mubah dan dipakai secara wajar dikecualikan dari kewajiban zakat."
      },
      {
        "id": "c",
        "text": "Wajib dizakati 10% saat pertama kali dibeli."
      },
      {
        "id": "d",
        "text": "Haram dipakai dan wajib dilebur menjadi koin."
      },
      {
        "id": "e",
        "text": "Wajib dizakati dengan beras seberat emas tersebut."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam Mazhab Syafi'i, perhiasan emas atau perak yang halal dipakai oleh wanita dalam batas kewajaran (bukan tabungan investasi dan bukan perhiasan haram seperti bejana emas) tidak wajib dizakati.",
    "dalil": "Atsar Jabir bin Abdillah ra.: \"Laisa fil huliyyi zakāh\" (HR. Al-Baihaqi) & Kitab Al-Umm."
  },
  {
    "id": "zq_17",
    "question": "Seorang profesional dokter/insinyur berpenghasilan bersih bulanan yang jika diakumulasikan dalam setahun melebihi nisab 85 gram emas. Berdasarkan Fatwa MUI No. 3 Tahun 2003, zakat penghasilan/profesi ini dikeluarkan sebesar:",
    "options": [
      {
        "id": "a",
        "text": "1% setiap pergantian tahun."
      },
      {
        "id": "b",
        "text": "2,5% dari penghasilan bersih saat menerima gaji bulanan atau diakumulasi setahun."
      },
      {
        "id": "c",
        "text": "5% disamakan dengan zakat irigasi."
      },
      {
        "id": "d",
        "text": "10% disamakan dengan zakat buah-buahan."
      },
      {
        "id": "e",
        "text": "20% disamakan dengan zakat rikaz."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Berdasarkan Fatwa MUI No. 3 Tahun 2003 tentang Zakat Penghasilan: Semua bentuk penghasilan halal wajib dizakati dengan nisab setara 85 gram emas per tahun dan kadar zakat 2,5%, yang dapat dikeluarkan per bulan saat menerima gaji.",
    "dalil": "QS. Al-Baqarah: 267 (\"Nafkahkanlah sebagian dari hasil usahamu yang baik-baik\") & Fatwa MUI No. 3/2003."
  },
  {
    "id": "zq_18",
    "question": "Apakah yang dimaksud dengan asnaf \"Fī Sabīlillāh\" dalam ketentuan pembagian zakat menurut tinjauan fuqaha Mazhab Syafi'i klasik?",
    "options": [
      {
        "id": "a",
        "text": "Pembangunan jembatan dan jalan raya desa."
      },
      {
        "id": "b",
        "text": "Para pejuang sukarela yang berperang membela Islam di jalan Allah dan tidak mendapatkan gaji tetap dari kas negara (Al-Ghazāh al-mutathawwi'ah)."
      },
      {
        "id": "c",
        "text": "Biaya pembelian seragam pengurus takmir masjid."
      },
      {
        "id": "d",
        "text": "Pengadaan kendaraan dinas aparat pemerintah."
      },
      {
        "id": "e",
        "text": "Seluruh orang yang berniat berbuat baik kepada sesama manusia."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Menurut Jumhur Ulama termasuk Mazhab Syafi'i, makna fi sabilillah dalam ayat zakat adalah mujahidin sukarela yang tidak memiliki tunjangan gaji resmi dari dewan militer negara. Sebagian ulama kontemporer meluaskan pada dakwah penegakan syiar Islam.",
    "dalil": "Kitab Al-Majmu' juz 6 hal. 212 & Tafsir Ibnu Katsir."
  },
  {
    "id": "zq_19",
    "question": "Siapakah yang dimaksud dengan asnaf \"Ibnu Sabil\" (Musafir) yang berhak menerima bagian zakat?",
    "options": [
      {
        "id": "a",
        "text": "Pelancong yang bepergian untuk tujuan maksiat atau judi."
      },
      {
        "id": "b",
        "text": "Musafir yang kehabisan bekal perjalanan di perantauan dalam perjalanan yang mubah/ketaatan, meskipun di negeri asalnya ia orang kaya."
      },
      {
        "id": "c",
        "text": "Anak yatim piatu yang ditinggal wafat orang tuanya."
      },
      {
        "id": "d",
        "text": "Orang yang tidak memiliki rumah tempat tinggal di kampungnya."
      },
      {
        "id": "e",
        "text": "Sopir angkutan umum yang sedang bekerja harian."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Ibnu sabil adalah orang yang sedang menempuh perjalanan (atau hendak memulai safar) yang mubah, lalu kehabisan bekal untuk sampai ke tempat tujuan atau pulang ke negerinya, ia diberi zakat secukupnya untuk sampai ke tempat tujuan.",
    "dalil": "Kitab Matan Ghayatut Taqrib Bab Mustahiqquz Zakah."
  },
  {
    "id": "zq_20",
    "question": "Bolehkah seorang muzakki memindahkan penyaluran harta zakatnya (Naqluz Zakah) ke kota atau negara lain yang jauh, sementara di daerah tempat harta itu berada masih banyak kaum dhuafa yang membutuhkan?",
    "options": [
      {
        "id": "a",
        "text": "Sunnah muakkadah demi pemerataan internasional."
      },
      {
        "id": "b",
        "text": "TIDAK DIPERBOLEHKAN (haram/makruh dan tidak sah menurut qaul mu'tamad Syafi'iyyah), karena zakat wajib diprioritaskan bagi fakir miskin daerah setempat."
      },
      {
        "id": "c",
        "text": "Wajib dipindahkan ke pusat ibukota negara."
      },
      {
        "id": "d",
        "text": "Boleh jika kota tujuan adalah kota kelahirannya."
      },
      {
        "id": "e",
        "text": "Zakat wajib diserahkan ke luar negeri setiap tahun."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam qaul azh-zhar Mazhab Syafi'i, haram memindahkan zakat ke luar daerah jika masih ada mustahiq di daerah asal harta. Nabi SAW berpesan kepada Mu'adz ra.: \"Zakat diambil dari orang-orang kaya mereka dan dibagikan kepada orang-orang fakir mereka (penduduk Yaman)\".",
    "dalil": "HR. Bukhari no. 1395 dan Muslim no. 19 dari Ibnu Abbas ra."
  },
  {
    "id": "zq_21",
    "question": "Jika seseorang memiliki hutang jatuh tempo sebesar Rp 50.000.000 yang wajib dilunasi bulan ini, dan saldo tabungannya saat haul genap berjumlah Rp 100.000.000 (melebihi nisab emas). Bagaimanakah status kewajiban zakat tabungannya?",
    "options": [
      {
        "id": "a",
        "text": "Wajib mengeluarkan zakat dari seluruh Rp 100.000.000 tanpa memotong hutang."
      },
      {
        "id": "b",
        "text": "Hutang jatuh tempo dipotong terlebih dahulu sehingga sisa harta adalah Rp 50.000.000; jika sisa tersebut di bawah nisab 85 gr emas maka bebas zakat."
      },
      {
        "id": "c",
        "text": "Zakatnya diganti dengan puasa 10 hari."
      },
      {
        "id": "d",
        "text": "Hutang tidak mempengaruhi zakat tabungan sama sekali."
      },
      {
        "id": "e",
        "text": "Wajib membayar zakat dua kali lipat."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Dalam fiqih zakat kontemporer dan qaul fuqaha, hutang mendesak yang jatuh tempo mengurangi nilai aset likuid wajib zakat karena melunasi hutang mendahului kewajiban menimbun harta.",
    "dalil": "Atsar Utsman bin Affan ra.: \"Hādzā syahru zakātikum, fa man kāna 'alaihi dainun fal yaqdhi dainahu\" (HR. Malik dalam Al-Muwaththa')."
  },
  {
    "id": "zq_22",
    "question": "Apakah hukum mempercepat pengeluaran zakat mal sebelum genap haul satu tahun (Ta'jīluz Zakāh), misalnya dikeluarkan 3 bulan lebih awal saat terjadi bencana kelaparan?",
    "options": [
      {
        "id": "a",
        "text": "Haram dan tidak sah karena haul adalah rukun mutlak."
      },
      {
        "id": "b",
        "text": "DIPERBOLEHKAN (Mubah/Sunnah), asalkan hartanya sudah mencapai nisab dan diserahkan kepada mustahiq yang berhak."
      },
      {
        "id": "c",
        "text": "Membatalkan seluruh pahala zakat."
      },
      {
        "id": "d",
        "text": "Hanya boleh dipercepat 1 hari sebelum haul."
      },
      {
        "id": "e",
        "text": "Wajib membayar denda tambahan 5%."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Diperbolehkan mempercepat zakat (ta'jiluz zakah) maksimal satu tahun sebelum haul genap, dengan syarat saat dibayarkan harta telah mencapai nisab. Dalilnya Nabi SAW menerima zakat paman beliau Abbas ra. untuk dua tahun ke depan sekaligus.",
    "dalil": "HR. Abu Dawud no. 1624 dan At-Tirmidzi no. 678 dari Ali bin Abi Thalib ra."
  },
  {
    "id": "zq_23",
    "question": "Siapakah yang dimaksud dengan asnaf \"Mu'allaf\" (Al-Mu'allafatu Qulūbuhum) yang berhak menerima zakat?",
    "options": [
      {
        "id": "a",
        "text": "Orang non-muslim yang kaya raya dan memusuhi Islam."
      },
      {
        "id": "b",
        "text": "Orang yang baru masuk Islam agar imannya semakin teguh, atau tokoh berpengaruh agar kaumnya tertarik masuk Islam."
      },
      {
        "id": "c",
        "text": "Orang yang sudah hafal Al-Qur'an sejak masa kanak-kanak."
      },
      {
        "id": "d",
        "text": "Penulis buku-buku agama Islam."
      },
      {
        "id": "e",
        "text": "Muzakki yang rajin membayar zakat setiap bulan."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Mu'allafatu qulubuhum adalah orang-orang yang dilunakkan hatinya kepada Islam: muslim yang baru masuk Islam agar imannya kokoh, atau orang yang diharapkan keislamannya dan tercegah kejahatannya terhadap kaum muslimin.",
    "dalil": "QS. At-Taubah ayat 60 & Kitab Minhajut Thalibin."
  },
  {
    "id": "zq_24",
    "question": "Jika seorang muzakki membagikan zakat malnya secara mandiri langsung kepada mustahiq tanpa melalui Amil zakat resmi pemerintah, bagaimanakah status keabsahan zakatnya menurut Mazhab Syafi'i?",
    "options": [
      {
        "id": "a",
        "text": "Zakatnya batal dan wajib disita oleh negara."
      },
      {
        "id": "b",
        "text": "Zakatnya SAH dan menggugurkan kewajiban fardhunya, namun menyalurkannya melalui amil terpercaya lebih afdhal demi ketertiban syiar."
      },
      {
        "id": "c",
        "text": "Berubah statusnya menjadi sedekah sunnah tanpa menggugurkan kewajiban zakat."
      },
      {
        "id": "d",
        "text": "Dikenai sanksi cambuk oleh pengadilan."
      },
      {
        "id": "e",
        "text": "Hanya sah untuk zakat fitrah saja."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Muzakki diperbolehkan membagikan zakatnya sendiri secara langsung kepada para mustahiq yang dikenalnya di lingkungannya, dan zakatnya sah menggugurkan kewajiban fardhu.",
    "dalil": "Kitab Fathul Qarib Al-Mujib & Al-Majmu' Syarah Al-Muhadzdzab juz 6."
  },
  {
    "id": "zq_25",
    "question": "Apakah ancaman bagi orang yang memiliki harta emas, perak, atau ternak yang telah mencapai nisab namun enggan dan bakhil menunaikan zakatnya berdasarkan QS. At-Taubah ayat 34-35?",
    "options": [
      {
        "id": "a",
        "text": "Hartanya akan dipanaskan di neraka Jahanam lalu disetrikakan ke dahi, lambung, dan punggung mereka pada hari kiamat."
      },
      {
        "id": "b",
        "text": "Hanya ditegur dengan lisan di akhirat."
      },
      {
        "id": "c",
        "text": "Hartanya akan dibagikan kepada ahli warisnya secara paksa."
      },
      {
        "id": "d",
        "text": "Tidak ada ancaman khusus selama ia rajin shalat malam."
      },
      {
        "id": "e",
        "text": "Hartanya akan disita oleh malaikat pencatat amal."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Allah SWT mengancam penolak zakat dalam QS. At-Taubah: 34-35: \"Pada hari dipanaskan emas perak itu dalam neraka Jahannam, lalu dibakarlah dengannya dahi mereka, lambung dan punggung mereka (lalu dikatakan): Inilah harta bendamu yang kamu simpan untuk dirimu sendiri...\".",
    "dalil": "QS. At-Taubah ayat 34-35 & HR. Muslim no. 987 dari Abu Hurairah ra."
  }
];
