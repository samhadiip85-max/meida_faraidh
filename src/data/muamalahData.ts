import { AkadMuamalah, MuamalahQuizQuestion } from '../types/muamalah';

export const AKAD_MUAMALAH_LIST: AkadMuamalah[] = [
  // 1. Musaqah
  {
    id: 'musaqah',
    name: '1. Musāqāh (Pemeliharaan Kebun Pohon Berbuah)',
    nameArabic: 'المُسَاقَاة',
    category: 'pertanian',
    categoryLabel: 'Kerja Sama Pertanian & Perkebunan',
    definition: 'Akad kerja sama antara pemilik kebun pohon berbuah dengan penggarap untuk menyiram, memupuk, dan merawat tanaman hingga panen, dengan imbalan bagian tertentu dari hasil buah yang dipanen.',
    rukun: [
      'Dua pihak: Pemilik kebun (Mālik) dan Penggarap perawat (Amil).',
      'Objek tanaman: Pohon yang berbuah yang telah tertanam kokoh (kurma, anggur, kelapa sawit, mangga, durian).',
      'Pekerjaan: Penyiraman, pemangkasan ranting, penyerbukan, pemupukan, hingga panen.',
      'Hasil buah: Dibagi berdasarkan persentase nisbah yang disepakati (misal 50%:50% atau 60%:40%).',
      'Shighah: Ijab dan Qabul.',
    ],
    syaratSah: [
      'Pohon sudah ada dan berakar hidup di tanah (bukan menanam bibit baru dari nol).',
      'Bagian keuntungan ditentukan dengan persentase bagian (nisbah pecahan), BUKAN jumlah takaran kuantitas tetap (misal tidak boleh: "kamu dapat 50 kg, sisanya saya").',
      'Waktu pemeliharaan ditentukan jelas hingga masa panen.',
    ],
    skemaKerja: 'Pemilik menyediakan kebun kurma/sawit -> Penggarap merawat dan menyiram -> Saat panen, total buah dibagi sesuai nisbah persentase yang disepakati bersama.',
    modernApplication: 'Kemitraan bagi hasil perkebunan kelapa sawit rakyat, kebun durian montong, atau perkebunan buah komersial (plasma inti).',
    dalil: 'HR. Bukhari no. 2328 & Muslim no. 1551: "Rasulullah SAW mempekerjakan penduduk Khaibar dengan bagian separuh dari apa yang dihasilkan dari tanaman atau buah-buahannya".',
  },

  // 2. Muzara'ah
  {
    id: 'muzaraah',
    name: '2. Muzāra\'ah (Pengolahan Tanah Pertanian, Benih dari Pemilik)',
    nameArabic: 'المُزَارَعَة',
    category: 'pertanian',
    categoryLabel: 'Kerja Sama Pertanian & Perkebunan',
    definition: 'Kerja sama pengolahan lahan tanah pertanian antara pemilik tanah dengan petani penggarap, di mana benih/bibit tanaman BERASAL DARI PEMILIK TANAH, dan hasilnya dibagi sesuai persentase kesepakatan.',
    rukun: [
      'Pemilik tanah dan Petani penggarap.',
      'Lahan tanah yang siap digarap.',
      'Benih tanaman (disediakan oleh PEMILIK TANAH).',
      'Pekerjaan membajak, menanam, dan merawat.',
      'Nisbah bagi hasil panen (misal 60% pemilik : 40% petani).',
    ],
    syaratSah: [
      'Tanah jelas batas dan lokasinya serta layak ditanami.',
      'Benih disiapkan oleh pemilik tanah.',
      'Pembagian hasil berupa persentase dari total panen riil, bukan hasil petak tertentu.',
    ],
    skemaKerja: 'Pemilik menyerahkan tanah + benih padi -> Petani mengolah dan mencangkul -> Hasil padi dibagi sesuai nisbah.',
    modernApplication: 'Kemitraan agribisnis korporasi pangan (pemilik tanah/investor menyediakan lahan dan bibit unggul, petani lokal mengerjakan penanaman).',
    dalil: 'HR. Bukhari no. 2329 dari Sahabat Ibnu Umar radhiyallahu \'anhuma.',
  },

  // 3. Mukhabarah
  {
    id: 'mukhabarah',
    name: '3. Mukhābarah (Pengolahan Tanah Pertanian, Benih dari Penggarap)',
    nameArabic: 'المُخَابَرَة',
    category: 'pertanian',
    categoryLabel: 'Kerja Sama Pertanian & Perkebunan',
    definition: 'Kerja sama pengolahan lahan tanah pertanian antara pemilik tanah dengan petani penggarap, di mana benih/bibit tanaman BERASAL DARI PETANI PENGGARAP, dan hasilnya dibagi sesuai persentase yang disepakati.',
    rukun: [
      'Pemilik tanah dan Petani penggarap.',
      'Lahan tanah kosong milik pemilik.',
      'Benih tanaman (disediakan oleh PETANI PENGGARAP).',
      'Pekerjaan menggarap.',
      'Nisbah pembagian hasil panen.',
    ],
    syaratSah: [
      'Tanah diserahkan utuh kepada petani penggarap.',
      'Biaya benih ditanggung petani penggarap.',
      'Imam Syafi\'i membolehkan muzara\'ah dan mukhabarah jika mengikuti akad musaqah atau atas dasar hajat umum masyarakat.',
    ],
    skemaKerja: 'Pemilik hanya menyediakan tanah kosong -> Petani modal benih jagung + tenaga kerja -> Panen jagung dibagi 50%:50%.',
    modernApplication: 'Skema sewa-kelola garapan sawah desa di mana petani membawa benih sendiri dan membagi hasil panen gabah dengan pemilik lahan.',
    dalil: 'HR. Muslim no. 1536 dari Sahabat Zaid bin Tsabit radhiyallahu \'anhu.',
  },

  // 4. Qiradh / Mudharabah
  {
    id: 'qiradh',
    name: '4. Qirādh / Mudhārabah (Kemitraan Modal & Pengelola)',
    nameArabic: 'القِرَاض / المُضَارَبَة',
    category: 'kemitraan',
    categoryLabel: 'Kemitraan Usaha & Investasi',
    definition: 'Akad kerja sama usaha antara pemilik modal (Shahibul Mal) yang menyediakan 100% modal finansial dengan pengelola usaha (Mudharib) yang menyediakan keahlian dan tenaga, dengan keuntungan dibagi sesuai nisbah kesepakatan, dan kerugian finansial ditanggung pemilik modal selama bukan karena kelalaian pengelola.',
    rukun: [
      'Shahibul Mal (Investor pemodal) dan Mudharib (Pengelola bisnis).',
      'Modal finansial (Ra\'sul Mal): harus uang tunai yang jelas nominalnya.',
      'Pekerjaan usaha (Amal): usaha halal yang tidak dibatasi secara zalim.',
      'Nisbah bagi hasil (Ribh): persentase laba disepakati di awal (misal 70%:30%).',
      'Shighah (Ijab-Qabul).',
    ],
    syaratSah: [
      'Modal harus tunai, bukan berupa piutang atau barang yang belum ditaksir.',
      'Keuntungan dibagi berdasarkan persentase laba bersih riil, BUKAN persentase bunga pasti dari total modal (misal tidak boleh: "tiap bulan pasti dapat 10 juta").',
      'Jika terjadi kerugian bisnis normal: Pemilik modal rugi dana, pengelola rugi waktu dan tenaga.',
      'Jika rugi karena kecerobohan/kelalaian (*ta\'addi*) pengelola: Pengelola wajib mengganti modal.',
    ],
    skemaKerja: 'Investor setor modal Rp 100 juta -> Pengelola menjalankan kedai kopi -> Laba bersih per bulan dibagi sesuai nisbah (60:40) -> Jika bangkrut tanpa kelalaian, modal berkurang ditanggung investor.',
    modernApplication: 'Produk Deposito Syariah, Tabungan Mudharabah, dan Pembiayaan Modal Kerja Usaha Mikro di Bank Syariah.',
    dalil: 'HR. Ibnu Majah no. 2289: "Tiga perkara yang di dalamnya terdapat keberkahan: jual beli tempo, muqaradhah (qiradh/mudharabah), dan mencampur gandum dengan sya\'ir untuk keperluan rumah bukan untuk dijual".',
  },

  // 5. Syirkah
  {
    id: 'syirkah',
    name: '5. Syirkah (Perserikatan Kongsi Dagang / Musyarakah)',
    nameArabic: 'الشَّرِكَة / المُشَارَكَة',
    category: 'kemitraan',
    categoryLabel: 'Kemitraan Usaha & Investasi',
    definition: 'Perkongsian antara dua pihak atau lebih dalam kepemilikan modal atau keahlian usaha secara bersama untuk menjalankan bisnis halal, di mana keuntungan dibagi sesuai kesepakatan dan kerugian ditanggung sebanding dengan proporsi modal masing-masing.',
    rukun: [
      'Dua sekutu atau lebih (Asy-Syurakā\').',
      'Objek kerja sama: modal dana (Māl) dan pekerjaan (Amal).',
      'Nisbah bagi hasil keuntungan.',
      'Shighah (Ijab-Qabul).',
    ],
    syaratSah: [
      'Bentuk utama: Syirkah \'Inān (setor modal dan sama-sama mengelola bisnis - sah menurut ijma\').',
      'Syirkah Abdān (perserikatan tenaga/profesi, seperti 2 arsitek membuka biro bersama).',
      'Kaidah Kerugian: "Al-Wadhī\'atu \'alā qadril māl" (Kerugian finansial wajib ditanggung sesuai proporsi setoran modal, tidak boleh dialihkan).',
    ],
    skemaKerja: 'A setor Rp 60 juta (60%), B setor Rp 40 juta (40%) -> Keduanya bersama mengelola toko ritel -> Laba dibagi sesuai akad -> Jika rugi, A menanggung 60% dan B menanggung 40%.',
    modernApplication: 'Pendirian Perseroan Terbatas (PT), CV, ventura bersama (Joint Venture), dan Pembiayaan Musyarakah Mutanaqisah (KPR Syariah kepemilikan berkurang).',
    dalil: 'Hadits Qudsi riwayat Abu Dawud no. 3383: "Allah berfirman: Aku adalah pihak ketiga dari dua orang yang berserikat selama salah seorang di antara mereka tidak mengkhianati sahabatnya".',
  },

  // 6. Syuf'ah
  {
    id: 'syufah',
    name: '6. Syuf\'ah (Hak Prioritas Beli Bagian Sekutu)',
    nameArabic: 'الشُّفْعَة',
    category: 'penjaminan',
    categoryLabel: 'Jaminan, Proteksi Hak & Sengketa',
    definition: 'Hak istimewa bagi salah satu sekutu (pemilik bersama) untuk membeli secara paksa bagian kepemilikan sekutunya yang hendak dijual kepada pihak ketiga asing, dengan harga yang sama, guna mencegah timbulnya kerugian atau ketidakcocokan dari orang asing.',
    rukun: [
      'Asy-Syafī\' (Sekutu lama yang menuntut hak beli).',
      'Al-Masyfū\' \'alaih / Al-Musytarī (Pihak ketiga pembeli).',
      'Al-Masyfū\' fīh (Barang properti tak bergerak yang berserikat, seperti tanah, kebun, rumah).',
      'Harga pembelian yang sama dengan yang disepakati pihak ketiga.',
    ],
    syaratSah: [
      'Hanya berlaku pada harta tak bergerak yang belum dibagi petak fisiknya (*ghairu maqsūm*).',
      'Hak syuf\'ah harus segera dituntut begitu sekutu mengetahui adanya penjualan (*\'alal faur*).',
      'Syafi\' membayar penuh harga pembelian kepada pembeli ketiga.',
    ],
    skemaKerja: 'A dan B berserikat memiliki sebidang tanah warisan yang belum dipecah sertifikat -> B diam-diam menjual bagiannya ke orang asing C -> A berhak mengambil alih tanah tersebut dari C dengan membayar lunas harga yang telah dibayar C.',
    modernApplication: 'Hak opsi prioritas beli saham terlebih dahulu (*Right of First Refusal*) antar-pemegang saham pendiri perusahaan sebelum dilepas ke investor luar.',
    dalil: 'HR. Bukhari no. 2213 & Muslim no. 1608: "Rasulullah SAW menetapkan hak syuf\'ah pada setiap harta bersama yang belum dibagi. Jika telah diberi batas dan dibuat jalannya, maka tidak ada lagi syuf\'ah".',
  },

  // 7. Wakalah
  {
    id: 'wakalah',
    name: '7. Wakālah (Pendelegasian Kuasa Perwakilan)',
    nameArabic: 'الوِكَالَة',
    category: 'jasa_sosial',
    categoryLabel: 'Akad Jasa & Penitipan',
    definition: 'Pelimpahan kekuasaan/wewenang dari seseorang kepada orang lain untuk melakukan suatu tindakan hukum syar\'i yang boleh diwakilkan selama pemberi kuasa masih hidup.',
    rukun: [
      'Al-Muwakkil (Pemberi kuasa).',
      'Al-Wakīl (Penerima kuasa).',
      'Al-Muwakkal fīh (Objek urusan yang dikuasakan: jual beli, sewa, pernikahan, gugatan hukum, pembayaran zakat).',
      'Shighah (Surat kuasa / Ijab Qabul).',
    ],
    syaratSah: [
      'Pemberi kuasa memiliki hak penuh atas tindakan yang diwakilkan.',
      'Penerima kuasa berakal dan cakap bertindak.',
      'Objek urusan diketahui jelas dan bukan ibadah badaniyah murni yang tidak bisa diwakilkan (seperti shalat dan puasa).',
      'Boleh tanpa upah (tabarru\') atau dengan upah jasa (*Wakālah bil-Ujrah*).',
    ],
    skemaKerja: 'Seseorang tidak sempat ke pasar -> Menguasakan temannya membeli laptop -> Transaksi teman atas nama pemberi kuasa sah secara syariat.',
    modernApplication: 'Surat Kuasa Notaris, Pialang Efek (Broker), Letter of Credit (L/C) impor di Bank Syariah, dan jasa transfer kliring perbankan.',
    dalil: 'QS. Al-Kahfi: 19: "Maka utuslah salah seorang di antaramu pergi ke kota dengan membawa uang perakmu ini..." & HR. Bukhari.',
  },

  // 8. Shuluh
  {
    id: 'shuluh',
    name: '8. Shulūh (Perdamaian Penyelesaian Sengketa Finansial)',
    nameArabic: 'الصُّلْح',
    category: 'penjaminan',
    categoryLabel: 'Jaminan, Proteksi Hak & Sengketa',
    definition: 'Akad perjanjian damai antara dua pihak yang berselisih sengketa hak finansial untuk mengakhiri permusuhan dengan cara saling melepaskan sebagian hak atau memberikan kompensasi damai yang disepakati.',
    rukun: [
      'Dua pihak yang bersengketa (Al-Mushālihān).',
      'Objek yang disengketakan (Al-Mushālah \'alaih).',
      'Kompensasi pengganti damai (Al-Mushālah bihi / Badalush-Shulh).',
      'Shighah perdamaian.',
    ],
    syaratSah: [
      'Tidak menghalalkan yang haram atau mengharamkan yang halal.',
      'Dilakukan atas dasar kerelaan tanpa paksaan.',
      'Shuluh Iqrār: Terjadi setelah pihak lawan mengakui haknya lalu berdamai dengan diskon potongan hutang.',
    ],
    skemaKerja: 'A menuntut ganti rugi Rp 50 juta karena pagarnya ditabrak B -> Setelah mediasi, B setuju membayar kompensasi Rp 25 juta dan A merelakan sisanya -> Sengketa ditutup damai secara sah.',
    modernApplication: 'Mediasi sengketa perdata di Pengadilan Agama / Badan Arbitrase Syariah Nasional (BASYARNAS) dan restrukturisasi utang bermasalah (*haircut debt*).',
    dalil: 'QS. An-Nisa: 128: "Wash-shulhu khair" (Dan perdamaian itu lebih baik) & HR. Tirmidzi no. 1352: "Perdamaian itu boleh di antara kaum muslimin kecuali perdamaian yang mengharamkan yang halal atau menghalalkan yang haram".',
  },

  // 9. Dhaman
  {
    id: 'dhaman',
    name: '9. Dhamān (Penjaminan Pembayaran Utang / Finansial)',
    nameArabic: 'الضَّمَان',
    category: 'penjaminan',
    categoryLabel: 'Jaminan, Proteksi Hak & Sengketa',
    definition: 'Komitmen seseorang (Dhāmin) untuk ikut menanggung kewajiban finansial atau pembayaran utang orang lain (Madhmūn \'anhu) kepada pihak kreditur, sehingga kreditur berhak menagih utang tersebut kepada peminjam asli maupun kepada pihak penjamin.',
    rukun: [
      'Adh-Dhāmin (Penjamin utang).',
      'Al-Madhmūn lahu (Kreditur / pemilik piutang).',
      'Al-Madhmūn \'anhu (Debitur / pihak yang berutang).',
      'Al-Madhmūn bihi (Kewajiban utang yang dijamin: nominal jelas).',
      'Shighah penjaminan.',
    ],
    syaratSah: [
      'Penjamin bertindak sukarela dan cakap finansial (dewasa, berakal, tidak pailit).',
      'Utang yang dijamin sah menurut syariat dan telah tetap menjadi kewajiban.',
      'Kreditur boleh menagih penjamin jika debitur gagal bayar (wanprestasi).',
    ],
    skemaKerja: 'Ali meminjam uang Rp 10 juta ke Bank Syariah -> Zaid menjadi Dhāmin (penjamin utang) -> Jika Ali kabur/gagal bayar saat jatuh tempo, Zaid wajib melunasi utang tersebut.',
    modernApplication: 'Corporate Guarantee, Personal Guarantee dalam pembiayaan komersial, dan asuransi kredit syariah.',
    dalil: 'HR. Abu Dawud no. 3565 & Tirmidzi no. 1265: "Az-Za\'īmu ghārim" (Penjamin utang adalah orang yang berkewajiban menanggung/membayar).',
  },

  // 10. Kafalah
  {
    id: 'kafalah',
    name: '10. Kafālah (Penjaminan Kehadiran Fisik Orang / Badan)',
    nameArabic: 'الكَفَالَة (كَفَالَةُ الوَجْهِ / البَدَن)',
    category: 'penjaminan',
    categoryLabel: 'Jaminan, Proteksi Hak & Sengketa',
    definition: 'Jaminan seseorang (Kafīl) untuk menghadirkan fisik orang yang sedang berperkara atau tertuduh berutang (Makfūl bihi) ke hadapan pengadilan atau majelis kreditur pada waktu yang ditentukan.',
    rukun: [
      'Al-Kafīl (Pihak penjamin kehadiran).',
      'Al-Makfūl lahu (Pihak yang menuntut kehadiran).',
      'Al-Makfūl bihi / Al-Ashīl (Orang yang dijamin kehadirannya).',
      'Shighah penjaminan kehadiran.',
    ],
    syaratSah: [
      'Kafilah tahu identitas orang yang dijamin.',
      'Bukan dalam perkara hukuman hudud atau qishash murni (menurut sebagian fuqaha).',
      'Jika kafil gagal menghadirkan orang tersebut tanpa uzur, kafil dapat dipaksa bertanggung jawab menanggung kewajibannya.',
    ],
    skemaKerja: 'Terdakwa sengketa utang ditahan -> Temannya menjadi Kafil (penjamin penangguhan penahanan) dan berjanji menghadirkannya di setiap persidangan -> Terdakwa bebas sementara di bawah pengawasan Kafil.',
    modernApplication: 'Penjaminan penangguhan penahanan (Bail Bond) dalam hukum pidana/perdata dan Bank Garansi proyek pengadaan (*Performance Bond*).',
    dalil: 'QS. Yusuf: 79 & QS. Yusuf: 72: "Dan bagi siapa yang dapat mengembalikannya akan memperoleh bahan makanan seberat beban unta, dan aku menjaminnya (za\'īm/kafīl)".',
  },

  // 11. Murabahah
  {
    id: 'murabahah',
    name: '11. Murābahah (Jual Beli Cost-Plus Margin Terbuka)',
    nameArabic: 'المُرَابَحَة',
    category: 'komersial',
    categoryLabel: 'Akad Jual Beli Komersial',
    definition: 'Akad jual beli suatu barang dengan menegaskan secara jujur dan transparan harga perolehan pokok aset (*cost price*) kepada pembeli, kemudian disepakati tambahan margin laba keuntungan tertentu (*mark-up profit*) untuk penjual.',
    rukun: [
      'Penjual (Bank / Penyedia barang) dan Pembeli (Nasabah).',
      'Barang yang diperjualbelikan (harus halal dan telah dimiliki/dikuasai penjual sebelum dijual kembali).',
      'Harga pokok beli awal yang disebutkan transparan.',
      'Margin keuntungan (misal laba Rp 10 juta atau 10%).',
      'Shighah (Ijab-Qabul jual beli).',
    ],
    syaratSah: [
      'Penjual wajib jujur mengungkapkan harga beli aslinya dan biaya-biaya terkait.',
      'Barang sudah sah dibeli dan dimiliki penjual sebelum diakadkan ke pembeli akhir (tidak boleh menjual barang yang belum dimiliki).',
      'Skema pembayaran boleh tunai di muka atau dicicil angsuran dengan tenor tertentu (*Murābahah li Āmir bisy-Syirā\'*).',
    ],
    skemaKerja: 'Nasabah butuh mobil -> Bank Syariah membeli mobil seharga Rp 200 juta tunai dari dealer -> Bank menjual mobil ke nasabah seharga Rp 230 juta (margin Rp 30 juta) dicicil selama 3 tahun -> Transaksi sah dan halal.',
    modernApplication: 'Pembiayaan Rumah (KPR Syariah), Pembiayaan Kendaraan Bermotor, dan Pengadaan Mesin Industri di Bank Syariah.',
    dalil: 'QS. Al-Baqarah: 275 ("Allah menghalalkan jual beli") & Kaidah Fiqih Buyu\'ul Amanah.',
  },

  // 12. Hawalah (Tambahan Pelengkap)
  {
    id: 'hawalah',
    name: '12. Hawālah (Pengalihan Hak Tagih Utang-Piutang)',
    nameArabic: 'الحَوَالَة',
    category: 'penjaminan',
    categoryLabel: 'Jaminan, Proteksi Hak & Sengketa',
    definition: 'Pemindahan tanggungan utang dari pundak orang yang berutang (Muhīl) kepada pihak ketiga (Muhāl \'alaih) yang juga memiliki utang kepadanya, sehingga kreditur beralih menagih ke pihak ketiga tersebut.',
    rukun: [
      'Muhīl (Debitur awal pemindah utang).',
      'Muhāl (Kreditur pemilik piutang).',
      'Muhāl \'alaih (Pihak ketiga yang menerima pengalihan utang).',
      'Hutang yang dialihkan (nominal dan jatuh tempo sama).',
    ],
    syaratSah: [
      'Kerelaan pihak yang berutang dan persetujuan pihak kreditur.',
      'Pihak ketiga memiliki utang yang setara kepada debitur awal.',
      'Setelah hawalah sah, debitur awal bebas dari kewajiban menanggung utang.',
    ],
    skemaKerja: 'A punya utang Rp 5 juta ke B. Tapi C punya utang Rp 5 juta ke A. Maka A mengalihkan B agar menagih langsung uang Rp 5 juta tersebut ke C. Hubungan utang A ke B selesai.',
    modernApplication: 'Pengalihan piutang (*Factoring* / Anjak Piutang Syariah), Wesel Tagih (Bill of Exchange), dan Transfer Saldo Kliring Antarbank.',
    dalil: 'HR. Bukhari no. 2287 & Muslim no. 1564: "Menunda pembayaran utang bagi orang yang mampu adalah kezaliman. Jika salah seorang dari kamu dialihkan kepada orang yang mampu, hendaklah ia menerimanya".',
  },

  // 13. Rahn (Tambahan Pelengkap)
  {
    id: 'rahn',
    name: '13. Rahn (Gadai Syariah / Jaminan Kebendaan)',
    nameArabic: 'الرَّهْن',
    category: 'penjaminan',
    categoryLabel: 'Jaminan, Proteksi Hak & Sengketa',
    definition: 'Menahan harta bernilai milik peminjam sebagai jaminan keamanan atas utang yang diterimanya, yang memungkinkan kreditur melunasi utangnya dari hasil penjualan barang jaminan tersebut apabila peminjam gagal bayar saat jatuh tempo.',
    rukun: [
      'Ar-Rāhin (Pemberi gadai / debitur).',
      'Al-Murtahin (Penerima gadai / kreditur).',
      'Al-Marhūn (Barang yang digadaikan: emas, tanah, BPKB motor).',
      'Al-Marhūn bihi (Utang yang dijamin).',
    ],
    syaratSah: [
      'Barang gadai bernilai ekonomis dan dapat dijual jika terjadi wanprestasi.',
      'Penerima gadai DILARANG mengambil manfaat dari barang gadai (karena utang yang menarik manfaat adalah riba).',
      'Biaya penitipan/pemeliharaan barang gadai boleh dikenakan sesuai biaya riil operasional (*Ujrah*).',
    ],
    skemaKerja: 'Nasabah butuh dana tunai Rp 10 juta -> Menyerahkan emas 15 gram ke Pegadaian Syariah sebagai agunan jaminan utang -> Saat lunas, emas dikembalikan utuh.',
    modernApplication: 'Pegadaian Syariah, Collateral / Agunan Kredit Bank Syariah.',
    dalil: 'QS. Al-Baqarah: 283: "Jika kamu dalam perjalanan dan bermuamalah tidak secara tunai sedang kamu tidak memperoleh seorang penulis, maka hendaklah ada barang tanggungan yang dipegang (farihānun maqbūdhah)".',
  },

  // 14. Ijarah (Tambahan Pelengkap)
  {
    id: 'ijarah',
    name: '14. Ijārah (Sewa-Menyewa Manfaat Aset / Jasa Upah Tenaga)',
    nameArabic: 'الإِجَارَة',
    category: 'komersial',
    categoryLabel: 'Akad Jual Beli Komersial',
    definition: 'Akad pemindahan hak guna (manfaat) atas suatu barang atau jasa tenaga kerja dalam periode waktu tertentu dengan pembayaran upah sewa (*Ujrah*), tanpa diikuti dengan pemindahan kepemilikan fisik barang itu sendiri.',
    rukun: [
      'Mu\'jir (Pemberi sewa) dan Musta\'jir (Penyewa).',
      'Manfaat barang / tenaga kerja (diketahui spesifikasi dan durasinya).',
      'Ujrah (Biaya sewa / upah gaji yang disepakati).',
      'Shighah (Ijab-Qabul).',
    ],
    syaratSah: [
      'Manfaat halal dan jelas (sewa rumah untuk tempat tinggal, bukan gudang miras).',
      'Waktu durasi sewa ditentukan pasti (misal 1 tahun).',
      'Upah gaji tenaga kerja wajib disepakati di awal sebelum mulai bekerja.',
    ],
    skemaKerja: 'Sewa rumah tinggal Rp 25 juta/tahun, rental mobil Rp 500 ribu/hari, atau gaji upah karyawan bulanan.',
    modernApplication: 'Leasing Ijarah Muntahiyah Bittamlik (IMBT / sewa beli diakhiri hibah), Sukuk Ijarah Negara, dan kontrak ketenagakerjaan.',
    dalil: 'QS. Az-Zukhruf: 32 & HR. Ibnu Majah: "Berikanlah upah pekerja sebelum keringatnya kering".',
  },

  // 15. Wadi'ah (Tambahan Pelengkap)
  {
    id: 'wadiah',
    name: '15. Wadī\'ah (Titipan Murni Barang Amanah)',
    nameArabic: 'الوَدِيعَة',
    category: 'jasa_sosial',
    categoryLabel: 'Akad Jasa & Penitipan',
    definition: 'Akad penitipan barang atau uang dari pihak pemilik (Mūdi\') kepada pihak penerima titipan (Mūda\') untuk dijaga dan dipelihara keamanannya.',
    rukun: [
      'Al-Mūdi\' (Penitip) dan Al-Mūda\' (Penerima titipan).',
      'Barang titipan (Al-Wadī\'ah).',
      'Shighah penitipan.',
    ],
    syaratSah: [
      'Wadī\'ah Yad Amānah: Titipan murni di mana penerima titipan tidak boleh memanfaatkan barang dan tidak menanggung ganti rugi jika rusak tanpa kelalaian.',
      'Wadī\'ah Yad Dhamānah: Penerima titipan diizinkan memanfaatkan dana/barang titipan (seperti giro/tabungan bank), sehingga wajib menjamin uang kembali 100% saat ditarik.',
    ],
    skemaKerja: 'Nasabah menitipkan dana di Rekening Giro Wadiah Bank Syariah -> Bank menjaga dana dan boleh memanfaatkannya -> Nasabah bisa mengambil uangnya kapan saja secara utuh.',
    modernApplication: 'Rekening Tabungan & Giro Wadiah di Bank Syariah, Safe Deposit Box (SDB), dan jasa penitipan bagasi.',
    dalil: 'QS. An-Nisa: 58: "Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang berhak menerimanya".',
  },

  // 16. Qardh (Tambahan Pelengkap)
  {
    id: 'qardh_hasan',
    name: '16. Qardh / Qardhul Hasan (Pinjaman Kebajikan Murni Tanpa Bunga)',
    nameArabic: 'القَرْض / القَرْض الحَسَن',
    category: 'jasa_sosial',
    categoryLabel: 'Akad Jasa & Penitipan',
    definition: 'Pemberian pinjaman harta atau uang kepada pihak yang membutuhkan dengan syarat penerima pinjaman wajib mengembalikan jumlah pokok yang sama persis tanpa tambahan nominal bunga sedikit pun.',
    rukun: [
      'Al-Muqridh (Pemberi pinjaman) dan Al-Muqtaridh (Peminjam).',
      'Harta pinjaman (uang atau barang terukur).',
      'Kewajiban pengembalian nominal pokok yang setara.',
      'Shighah.',
    ],
    syaratSah: [
      'MUTLAK DILARANG mempersyaratkan penambahan keuntungan, hadiah, atau bunga (karena setiap utang yang menghasilkan keuntungan bagi kreditur adalah Riba).',
      'Peminjam disunnahkan memberikan hadiah sukarela saat pelunasan tanpa perjanjian sebelumnya (*Husnul Qadhā\'*).',
    ],
    skemaKerja: 'Lembaga Amil Zakat / Bank Syariah meminjamkan modal Rp 3 juta kepada pedagang gerobak dhuafa -> Pedagang mencicil tanpa bunga hingga lunas Rp 3 juta.',
    modernApplication: 'Pembiayaan Talangan Haji, Pinjaman Dana Bergulir BAZNAS / Lembaga Keuangan Mikro Syariah (BMT).',
    dalil: 'QS. Al-Hadid: 11: "Siapakah yang mau meminjamkan kepada Allah pinjaman yang baik (qardhan hasanan)..." & HR. Ibnu Majah.',
  },
];

export { MUAMALAH_QUIZ } from './quizzes/muamalahQuizData';
