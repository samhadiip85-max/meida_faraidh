import { PerceraianQuizQuestion } from '../types/perceraian';

export const PINTU_PEMUTUSAN_NIKAH = [
  {
    id: 'thalaq',
    name: '1. At-Thalāq (Hak Suami)',
    nameArabic: 'الطَّلَاق',
    pelaku: 'Suami secara sepihak',
    penjelasan: 'Pelepasan ikatan tali perkawinan yang dijatuhkan oleh suami kepada istrinya dengan lafaz sharih (tegas) atau kinayah (sindiran disertai niat).',
    konsekuensi: 'Mengurangi kuota talak (1, 2, atau 3). Pada talak 1 & 2 berstatus Raj\'i (bisa rujuk langsung selama masa \'iddah).',
  },
  {
    id: 'khulu',
    name: '2. Al-Khul\'u (Gugat Cerai Istri dengan Tebusan)',
    nameArabic: 'الخُلْع',
    pelaku: 'Inisiatif Istri dengan persetujuan Suami / Hakim',
    penjelasan: 'Perceraian yang terjadi atas permintaan istri dengan memberikan tebusan harta atau pengembalian mahar (*\'Iwadh*) kepada suami karena ketidakcocokan atau khawatir melanggar batasan Allah.',
    konsekuensi: 'Berstatus Thalaq Bā\'in Sughrā. Suami tidak berhak rujuk sepihak. Jika ingin kembali, wajib melakukan akad nikah baru dan mahar baru.',
  },
  {
    id: 'fasakh',
    name: '3. Al-Fasakh (Pembatalan Nikah oleh Hakim)',
    nameArabic: 'الفَسْخ',
    pelaku: 'Vonis Hakim Pengadilan Agama',
    penjelasan: 'Pemutusan ikatan perkawinan oleh hakim karena adanya cacat atau aib permanen pada salah satu pihak (seperti gila, impotensi, kusta), murtadnya salah satu pihak, atau suami hilang kabar (*Ghā\'ib*) tanpa menafkahi.',
    konsekuensi: 'Tidak mengurangi jatah/kuota talak tiga. Berstatus Bā\'in Sughrā (bisa kembali hanya dengan akad nikah baru).',
  },
  {
    id: 'lian',
    name: '4. Al-Li\'ān (Sumpah Tuduhan Zina Suami Istri)',
    nameArabic: 'اللِّعَان',
    pelaku: 'Sumpah antara Suami & Istri di depan Hakim',
    penjelasan: 'Suami menuduh istrinya berzina tanpa 4 saksi lalu keduanya saling melaknat dengan 5 kali sumpah syariat (QS. An-Nur: 6-9).',
    konsekuensi: 'Ikatan pernikahan putus seketika dan keduanya HARAM MENIKAH KEMBALI SELAMANYA (*Hurmah Mu\'abbadah*).',
  },
];

export const KLASIFIKASI_RUJUK = [
  {
    title: '1. Thalaq Raj\'ī (Talak yang Boleh Rujuk Langsung)',
    nameArabic: 'طَلَاق رَجْعِي',
    deskripsi: 'Talak satu (1) atau talak dua (2) yang dijatuhkan setelah hubungan intim (Ba\'dad Dukhūl) tanpa adanya tebusan harta (bukan khulu\').',
    statusRujuk: 'Suami BERHAK RUJUK SEPIHAK kapan saja selama istri masih berada dalam masa \'iddah tanpa memerlukan akad nikah baru, tanpa wali baru, dan tanpa mahar baru.',
    dalil: 'QS. Al-Baqarah: 228: "Wa bu\'ūlatuhunna ahaqqu biraddihinna fī dzālika in arādū ishlāhā".',
  },
  {
    title: '2. Thalaq Bā\'in Sughrā (Bain Kecil - Wajib Akad Baru)',
    nameArabic: 'طَلَاق بَائِن صُغْرَى',
    deskripsi: 'Perceraian yang melepaskan ikatan nikah seketika sehingga suami kehilangan hak rujuk sepihak. Contoh: 1) Talak sebelum hubungan intim; 2) Perceraian Khul\'u; 3) Pembatalan Fasakh; 4) Talak Raj\'i yang masa \'iddahnya telah habis tuntas.',
    statusRujuk: 'Suami TIDAK BISA RUJUK SEPIHAK. Keduanya hanya boleh bersatu kembali apabila sang mantan istri ridha dan diadakan AKAD NIKAH BARU, WALI BARU, serta MAHAR BARU.',
    dalil: 'Kaidah Fiqih Mazhab Syafi\'i & Jumhur Fuqaha.',
  },
  {
    title: '3. Thalaq Bā\'in Kubrā (Bain Besar - Talak Tiga)',
    nameArabic: 'طَلَاق بَائِن كُبْرَى',
    deskripsi: 'Talak yang dijatuhkan untuk ketiga kalinya (menghabiskan jatah 3 talak).',
    statusRujuk: 'HARAM RUJUK & HARAM MENIKAH KEMBALI, kecuali apabila mantan istri telah menikah sah secara murni dengan pria lain (bukan kawin kontrak/bukan muhallil rekayasa), telah bersetubuh nyata (*dzaqa \'usailataha*), lalu bercerai secara wajar/suami kedua wafat, dan masa \'iddahnya telah selesai tuntas.',
    dalil: 'QS. Al-Baqarah: 230 & HR. Bukhari no. 2639 (Hadits istri Rifa\'ah Al-Qurazhi).',
  },
];

export const URUTAN_HADHANAH = [
  { nomor: 1, pihak: 'Ibu Kandung', alasan: 'Paling penyayang, paling sabar, dan paling lembut merawat fisik serta psikis anak.' },
  { nomor: 2, pihak: 'Nenek dari pihak Ibu (Ibu dari Ibu)', alasan: 'Berada dalam garis kasih sayang keibuan yang paling dekat dengan anak.' },
  { nomor: 3, pihak: 'Ayah Kandung', alasan: 'Garis perwalian utama dan penanggung nafkah wajib syar\'i anak.' },
  { nomor: 4, pihak: 'Nenek dari pihak Ayah (Ibu dari Ayah)', alasan: 'Memiliki kedekatan nasab dan kasih sayang keluarga ayah.' },
  { nomor: 5, pihak: 'Saudari Kandung Anak', alasan: 'Memiliki ikatan darah terdekat di antara kaum wanita yang mahram.' },
];

export { PERCERAIAN_QUIZ } from './quizzes/perceraianQuizData';
