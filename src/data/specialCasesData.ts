import { HeirInput } from '../types/faraidh';

export interface SpecialCase {
  id: string;
  name: string;
  arabicName: string;
  historicalContext: string;
  decisionMaker: string;
  heirsDescription: string;
  deceasedGender: 'male' | 'female';
  presetHeirs: { role: HeirInput['role']; count: number }[];
  theProblem: string;
  theResolution: string;
  ruleTakeaway: string;
}

export const SPECIAL_CASES_DATA: SpecialCase[] = [
  {
    id: 'gharrawain-suami',
    name: 'Al-Gharrawain (Kasus Suami)',
    arabicName: 'المسألة الغرّاوية / العمريتان',
    decisionMaker: 'Khalifah Umar bin Khattab ra., disepakati Utsman, Ali, dan Zaid bin Tsabit',
    historicalContext:
      'Dinamakan "Al-Gharrawain" (dua bintang yang sangat cemerlang) atau "Al-Umariyatain" (dua keputusan Khalifah Umar) karena kemasyhuran fatwanya di kalangan para sahabat Nabi SAW.',
    heirsDescription: 'Seorang wanita wafat meninggalkan: Suami, Ibu, dan Ayah.',
    deceasedGender: 'female',
    presetHeirs: [
      { role: 'husband', count: 1 },
      { role: 'mother', count: 1 },
      { role: 'father', count: 1 },
    ],
    theProblem:
      'Jika diterapkan teks harfiah: Suami dapat 1/2 (3/6), Ibu dapat 1/3 harta penuh (2/6), dan Ayah sebagai Ashabah hanya mendapat sisa 1/6. Hal ini menyebabkan bagian wanita (Ibu) lebih besar daripada bagian pria (Ayah), bertentangan dengan kaidah umum lil-dzakari mitslu hazh-zhil unutsayain.',
    theResolution:
      'Sayyidina Umar ra. menetapkan: Suami mengambil haknya 1/2. Dari sisa harta (1/2 atau 3/6), Ibu mengambil 1/3 dari sisa (yaitu 1/6 harta total). Sisa berikutnya (2/6 harta total) diberikan kepada Ayah. Dengan demikian, bagian Ayah (2 bagian) tetap dua kali lipat bagian Ibu (1 bagian).',
    ruleTakeaway:
      'Kaidah Tsulutsul Baqi (Sepertiga dari Sisa): Diberlakukan khusus bila hanya ada salah satu pasangan + Ibu + Ayah tanpa keturunan dan tanpa 2 saudara.',
  },
  {
    id: 'gharrawain-istri',
    name: 'Al-Gharrawain (Kasus Istri)',
    arabicName: 'الغراوية مع الزوجة',
    decisionMaker: 'Khalifah Umar bin Khattab ra.',
    historicalContext: 'Bentuk kedua dari kasus Al-Umariyatain.',
    heirsDescription: 'Seorang pria wafat meninggalkan: Istri, Ibu, dan Ayah.',
    deceasedGender: 'male',
    presetHeirs: [
      { role: 'wives', count: 1 },
      { role: 'mother', count: 1 },
      { role: 'father', count: 1 },
    ],
    theProblem:
      'Istri mendapat 1/4 (karena tidak ada anak). Jika Ibu diberi 1/3 harta utuh, tersisa 5/12 untuk Ayah. Walaupun bagian Ayah lebih besar, rasio antara Ayah dan Ibu menjadi tidak tepat 2 : 1.',
    theResolution:
      'Istri mengambil 1/4 (1 dari 4). Dari sisa 3 bagian, Ibu mendapat 1/3 sisa (1 bagian), dan Ayah mendapat sisa 2 bagian. Rasio Ayah : Ibu menjadi sempurna 2 : 1.',
    ruleTakeaway:
      'Ibu mendapat 1/3 sisa setelah fardh pasangan diambil, menjaga prinsip keadilan gender setara dalam Fiqh faraidh.',
  },
  {
    id: 'musytarakah',
    name: 'Al-Musytarakah (Al-Himariyah / Al-Hajariyah)',
    arabicName: 'المسألة المشتركة / الحمارية / الحجرية',
    decisionMaker: 'Khalifah Umar bin Khattab & Zaid bin Tsabit ra.',
    historicalContext:
      'Kasus ketika seorang wanita wafat meninggalkan Suami, Ibu, saudara seibu, dan saudara kandung. Saudara kandung berkata: "Wahai Amirul Mukminin, anggaplah ayah kami seekor keledai (himar) atau batu yang dilempar ke laut (hajar), bukankah ibu kami tetap satu?"',
    heirsDescription: 'Wanita wafat meninggalkan: Suami, Ibu, 2 Saudara Seibu, dan 1 Saudara Kandung Laki-laki.',
    deceasedGender: 'female',
    presetHeirs: [
      { role: 'husband', count: 1 },
      { role: 'mother', count: 1 },
      { role: 'uterine_sibling', count: 2 },
      { role: 'full_brother', count: 1 },
    ],
    theProblem:
      'Suami dapat 1/2 (3/6), Ibu dapat 1/6 (1/6), 2 Saudara seibu dapat 1/3 (2/6). Total saham furudh = 3 + 1 + 2 = 6/6 (100% habis!). Saudara kandung sebagai Ashabah tidak kebagian sisa sama sekali (0), padahal mereka memiliki hubungan nasab lebih kuat (seayah dan seibu) dibanding saudara seibu.',
    theResolution:
      'Sayyidina Umar menyatukan (menyerikatkan) saudara kandung dengan saudara seibu dalam bagian 1/3 fardh seibu, dibagi rata di antara mereka.',
    ruleTakeaway:
      'Penyatuan hak (Tasyrik) untuk mewujudkan maqashid syariah dan mencegah terzaliminya kerabat sekandung.',
  },
  {
    id: 'akdariyah',
    name: 'Al-Akdariyah (Kasus Kakek & Saudari)',
    arabicName: 'المسألة الأكدرية',
    decisionMaker: 'Zaid bin Tsabit ra.',
    historicalContext:
      'Dinamakan Akdariyah karena mengeruhkan (kaddarat) kaidah umum Zaid bin Tsabit tentang pembagian waris kakek bersama saudara, atau dinisbatkan kepada penanya bernama Al-Akdari.',
    heirsDescription: 'Wanita wafat meninggalkan: Suami, Ibu, Kakek, dan 1 Saudari Kandung.',
    deceasedGender: 'female',
    presetHeirs: [
      { role: 'husband', count: 1 },
      { role: 'mother', count: 1 },
      { role: 'paternal_grandfather', count: 1 },
      { role: 'full_sister', count: 1 },
    ],
    theProblem:
      'Suami dapat 1/2 (3/6), Ibu dapat 1/3 (2/6), Kakek dapat 1/6 (1/6), Saudari dapat 1/2 (3/6). Total saham = 3 + 2 + 1 + 3 = 9/6 (\'Aul menjadi 9). Saudari seharusnya tidak mewarisi fardh bersama kakek menurut kaidah ashabah, namun juga tidak boleh digugurkan.',
    theResolution:
      'Asal masalah di-\'aul-kan dari 6 menjadi 9. Kemudian bagian kakek (1) dan bagian saudari (3) dijumlahkan menjadi 4, lalu dibagi bersama secara ashabah (kakek 2 bagian, saudari 1 bagian = butuh tashih perkalian 3).',
    ruleTakeaway:
      'Satu-satunya kasus dalam fiqih di mana kakek meng-\'aul-kan saudari perempuan dan menggabungkan saham fardh untuk dibagi secara ashabah.',
  },
  {
    id: 'mimbariah',
    name: 'Al-Mimbariah (Fatwa Mimbar Kufah)',
    arabicName: 'المسألة المنبرية',
    decisionMaker: 'Khalifah Ali bin Abi Thalib ra.',
    historicalContext:
      'Ali bin Abi Thalib ra. sedang berkhutbah di atas mimbar masjid Kufah. Seseorang bertanya tentang pembagian waris kasus ini. Beliau langsung menjawab spontan: "Bagian seperdelapan istri berubah menjadi sepersembilan!"',
    heirsDescription: 'Pria wafat meninggalkan: Istri, 2 Anak Perempuan, Ayah, dan Ibu.',
    deceasedGender: 'male',
    presetHeirs: [
      { role: 'wives', count: 1 },
      { role: 'daughter', count: 2 },
      { role: 'father', count: 1 },
      { role: 'mother', count: 1 },
    ],
    theProblem:
      'Istri mendapat 1/8 (3/24). Dua Anak Perempuan mendapat 2/3 (16/24). Ayah mendapat 1/6 (4/24). Ibu mendapat 1/6 (4/24). Total saham = 3 + 16 + 4 + 4 = 27/24. Saham melebihi Asal Masalah 24.',
    theResolution:
      'Asal Masalah dinaikkan (\'Aul) dari 24 menjadi 27. Bagian istri yang awalnya 3/24 (1/8) menjadi 3/27 (1/9). Semua ahli waris berkurang porsinya secara proporsional dan adil.',
    ruleTakeaway:
      'Contoh paling representatif dari Asal Masalah 24 yang ber-\'Aul menjadi 27 dalam sejarah fikih mawarith.',
  },
];
