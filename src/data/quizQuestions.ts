export interface QuizQuestion {
  id: string;
  category: 'Konsep Dasar' | 'Ashabul Furudh' | 'Hijab Waris' | 'Hitungan Faraidh';
  level: 'Dasar' | 'Menengah' | 'Lanjutan';
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
  dalilReference: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'Konsep Dasar',
    level: 'Dasar',
    question: 'Di antara hak-hak atas harta peninggalan jenazah berikut, manakah urutan pelunasan yang paling tepat sebelum harta dibagikan kepada ahli waris?',
    options: [
      { id: 'a', text: 'Wasiat ➔ Hutang ➔ Biaya Pemakaman (Tajhiz) ➔ Bagi Waris' },
      { id: 'b', text: 'Biaya Pemakaman (Tajhiz) ➔ Hutang ➔ Wasiat (maks 1/3) ➔ Bagi Waris' },
      { id: 'c', text: 'Bagi Waris ➔ Hutang ➔ Wasiat ➔ Biaya Pemakaman' },
      { id: 'd', text: 'Hutang ➔ Bagi Waris ➔ Wasiat ➔ Biaya Pemakaman' },
    ],
    correctOptionId: 'b',
    explanation:
      'Urutan yang disepakati ulama (Jumhur): Pertama, biaya tajhiz jenazah (kain kafan, pemakaman secukupnya). Kedua, pelunasan hutang (baik hutang kepada Allah seperti zakat/kaffarah maupun kepada manusia). Ketiga, pemenuhan wasiat maksimal sepertiga dari harta sisa. Keempat, pembagian warisan kepada para ahli waris.',
    dalilReference: 'QS. An-Nisa: 11-12 & Kitab Bidayatul Mujtahid',
  },
  {
    id: 'q2',
    category: 'Ashabul Furudh',
    level: 'Dasar',
    question: 'Berapakah bagian pasti (fardh) bagi seorang suami apabila almarhumah istrinya TIDAK meninggalkan keturunan (anak maupun cucu)?',
    options: [
      { id: 'a', text: '1/4 (Seperempat)' },
      { id: 'b', text: '1/8 (Seperdelapan)' },
      { id: 'c', text: '1/2 (Setengah)' },
      { id: 'd', text: 'Seluruh harta sebagai Ashabah' },
    ],
    correctOptionId: 'c',
    explanation:
      'Suami berhak mendapatkan 1/2 bagian bila istri tidak mempunyai keturunan (anak/cucu). Bila istri memiliki keturunan, bagian suami turun (Hijab Nuqshan) menjadi 1/4.',
    dalilReference: 'QS. An-Nisa ayat 12: "وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ إِنْ لَمْ يَكُنْ لَهُنَّ وَلَدٌ"',
  },
  {
    id: 'q3',
    category: 'Ashabul Furudh',
    level: 'Menengah',
    question: 'Jika seseorang wafat dan meninggalkan 2 orang istri serta memiliki anak, berapakah porsi yang didapatkan oleh masing-masing istri?',
    options: [
      { id: 'a', text: 'Masing-masing mendapat 1/8' },
      { id: 'b', text: 'Bagian 1/8 dibagi rata berdua (masing-masing 1/16)' },
      { id: 'c', text: 'Masing-masing mendapat 1/4' },
      { id: 'd', text: 'Bagian 1/4 dibagi rata berdua (masing-masing 1/8)' },
    ],
    correctOptionId: 'b',
    explanation:
      'Bagian fardh istri ketika ada keturunan adalah 1/8 secara jama\'i (kolektif). Berapapun jumlah istri (1 sampai 4 orang), mereka bersekutu membagi rata bagian 1/8 tersebut. Jika ada 2 istri, masing-masing memperoleh separuh dari 1/8, yaitu 1/16.',
    dalilReference: 'QS. An-Nisa ayat 12: "فَإِنْ كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُمْ"',
  },
  {
    id: 'q4',
    category: 'Hijab Waris',
    level: 'Menengah',
    question: 'Siapakah yang menyebabkan Saudara Kandung Laki-laki terhalang sama sekali (Mahjub Hirman) dari mendapatkan warisan?',
    options: [
      { id: 'a', text: 'Ibu kandung dan Anak Perempuan' },
      { id: 'b', text: 'Anak Laki-laki atau Ayah kandung' },
      { id: 'c', text: 'Suami almarhumah dan Saudari Kandung' },
      { id: 'd', text: 'Paman kandung' },
    ],
    correctOptionId: 'b',
    explanation:
      'Saudara kandung laki-laki (kerabat hawasyi) terhalang total (mahjub hirman) oleh dua pihak utama: Ushul mudzakkar (Ayah) dan Furu\' mudzakkar (Anak laki-laki atau cucu laki-laki dari anak laki-laki).',
    dalilReference: 'Ijma Shahabat & Kaidah Fiqih Faraidh (Al-Aqrabu Yahjubul Ab\'ad)',
  },
  {
    id: 'q5',
    category: 'Hitungan Faraidh',
    level: 'Lanjutan',
    question: 'Seorang wanita wafat meninggalkan: Suami, 2 Saudari Kandung, dan Ibu. Kasus apakah yang terjadi pada pembagian warisan ini?',
    options: [
      { id: 'a', text: 'Kasus Normal (\'Adil)' },
      { id: 'b', text: 'Kasus \'Aul (Asal Masalah 6 naik menjadi 8)' },
      { id: 'c', text: 'Kasus Radd (pengembalian sisa ke ibu)' },
      { id: 'd', text: 'Kasus Gharrawain' },
    ],
    correctOptionId: 'b',
    explanation:
      'Perhitungannya: Suami mendapat 1/2 (3/6). Dua saudari kandung mendapat 2/3 (4/6). Ibu mendapat 1/6 (karena ada 2 saudara) = 1/6. Total saham = 3 + 4 + 1 = 8 saham! Karena total saham (8) melebihi asal masalah awal (6), terjadi \'AUL. Asal masalah dinaikkan menjadi 8 (Masalah Al-Mabhalah).',
    dalilReference: 'Ketetapan Khalifah Umar bin Khattab ra.',
  },
  {
    id: 'q6',
    category: 'Hitungan Faraidh',
    level: 'Lanjutan',
    question: 'Pewaris wafat meninggalkan harta bersih Rp 120.000.000. Ahli waris yang ada adalah: Ibu dan 1 Anak Perempuan saja. Berapakah harta yang diterima anak perempuan dengan memperhitungkan Radd?',
    options: [
      { id: 'a', text: 'Rp 60.000.000' },
      { id: 'b', text: 'Rp 80.000.000' },
      { id: 'c', text: 'Rp 90.000.000' },
      { id: 'd', text: 'Rp 100.000.000' },
    ],
    correctOptionId: 'c',
    explanation:
      'Anak perempuan fardh-nya 1/2 (3/6). Ibu fardh-nya 1/6 (1/6). Total saham = 3 + 1 = 4 saham (sisa 2 tidak ada ashabah). Sisa dikembalikan (Radd) sehingga Asal Masalah disederhanakan menjadi 4. Anak perempuan mendapat 3/4 x Rp 120.000.000 = Rp 90.000.000, dan Ibu mendapat 1/4 x Rp 120.000.000 = Rp 30.000.000.',
    dalilReference: 'Fatwa Ali bin Abi Thalib & Ibnu Mas\'ud ra. tentang Bab Ar-Radd',
  },
  {
    id: 'q7',
    category: 'Ashabul Furudh',
    level: 'Menengah',
    question: 'Apakah yang dimaksud dengan istilah "Ashabah bil Ghair" dalam pembagian warisan?',
    options: [
      { id: 'a', text: 'Ahli waris laki-laki yang menarik saudara perempuannya untuk bersama-sama menjadi penerima sisa dengan rasio 2:1' },
      { id: 'b', text: 'Saudari kandung yang menjadi ashabah karena bersama anak perempuan' },
      { id: 'c', text: 'Orang yang menerima sisa karena memerdekakan budak' },
      { id: 'd', text: 'Ahli waris yang mendapat bagian tetap 1/3 sisa' },
    ],
    correctOptionId: 'a',
    explanation:
      'Ashabah bil Ghair adalah ahli waris wanita yang fardh aslinya adalah 1/2 atau 2/3, namun karena ada saudara laki-lakinya yang sederajat, wanita tersebut beralih menjadi ashabah (penerima sisa) dengan ketentuan laki-laki mendapat dua kali bagian perempuan (2:1). Contoh: Anak perempuan bersama anak laki-laki.',
    dalilReference: 'QS. An-Nisa: 11 ("للذكر مثل حظ الأنثيين")',
  },
  {
    id: 'q8',
    category: 'Konsep Dasar',
    level: 'Dasar',
    question: 'Manakah di antara hal berikut yang BUKAN merupakan penghalang mewarisi (Mani\'ul Irtsi)?',
    options: [
      { id: 'a', text: 'Pembunuhan (ahli waris membunuh pewaris)' },
      { id: 'b', text: 'Perbedaan agama (Muslim dan non-Muslim)' },
      { id: 'c', text: 'Anak yang masih balita / belum dewasa' },
      { id: 'd', text: 'Perbudakan (ar-riqq)' },
    ],
    correctOptionId: 'c',
    explanation:
      'Dalam Islam, anak kecil (bahkan janin yang lahir hidup) berhak mewarisi secara sah dan penuh. Tiga penghalang waris yang disepakati ulama adalah: 1. Pembunuhan (Al-Qatlu), 2. Perbedaan Agama (Ikhtilaafud Diin), 3. Perbudakan (Ar-Riqq).',
    dalilReference: 'Hadits: "Laa yarithul qaatilu syai\'an" (HR. Abu Dawud)',
  },
];
