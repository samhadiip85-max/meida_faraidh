import { RukunWasiatItem, WasiatQuizQuestion } from '../types/wasiat';

export const RUKUN_WASIAT: RukunWasiatItem[] = [
  {
    id: 'al_mushi',
    name: '1. Al-Mūshī (Pewasiat)',
    nameArabic: 'المُوصِي',
    role: 'Orang yang memberikan wasiat harta/amanah',
    syaratSah: 'Baligh, berakal sehat, merdeka, dan bertindak atas kehendak sendiri tanpa paksaan.',
  },
  {
    id: 'al_musha_lahu',
    name: '2. Al-Mūshā lahū (Penerima Wasiat)',
    nameArabic: 'المُوصَى لَهُ',
    role: 'Pihak yang menerima manfaat wasiat',
    syaratSah: 'Bukan ahli waris yang berhak menerima warisan (kecuali diizinkan seluruh ahli waris), diketahui identitasnya, dan bukan orang yang membunuh si pewasiat.',
  },
  {
    id: 'al_musha_bihi',
    name: '3. Al-Mūshā bihī (Objek Harta Wasiat)',
    nameArabic: 'المُوصَى بِهِ',
    role: 'Harta benda atau manfaat yang diwasiatkan',
    syaratSah: 'Bernilai syar\'i (mutaqawwam), halal, milik sah pewasiat, tidak melebihi 1/3 harta bersih (setelah utang & tajhiz), dan bukan untuk tujuan maksiat.',
  },
  {
    id: 'ash_shighah',
    name: '4. Ash-Shīghah (Lafaz Ijab & Qabul)',
    nameArabic: 'الصِّيغَة',
    role: 'Pernyataan pelimpahan wasiat',
    syaratSah: 'Lafaz yang menunjukkan pemberian wasiat setelah wafat (baik sharih/kinayah atau tertulis). Penerima wasiat berhak menerima (qabul) atau menolak (radd) setelah pewasiat wafat.',
  },
];

export const URUTAN_HARTA_PENINGGALAN = [
  {
    urutan: 1,
    nama: '1. Biaya Tajhīz Jenazah (Pengurusan Jenazah)',
    deskripsi: 'Biaya memandikan, kain kafan, pemakaman secara wajar tanpa berlebih-lebihan (*Isrāf*). Didahulukan sebelum utang dan wasiat.',
    dalil: 'Ijma\' Fuqaha tentang kebutuhan sandang dan pemakaman mayit.',
  },
  {
    urutan: 2,
    nama: '2. Pelunasan Utang (Ad-Duyūn)',
    deskripsi: 'Melunasi seluruh utang pewaris, baik utang kepada Allah (zakat, fidyah, kafarat, nadzar) maupun utang kepada sesama manusia (kredit, pinjaman, sewa).',
    dalil: 'Sabda Nabi SAW: Jiwa seorang mukmin terkatung-katung karena utangnya hingga dilunasi (HR. Tirmidzi).',
  },
  {
    urutan: 3,
    nama: '3. Eksekusi Wasiat (Al-Washiyyah)',
    deskripsi: 'Mengeluarkan wasiat yang ditinggalkan pewaris, dengan batas maksimal 1/3 (sepertiga) dari harta bersih yang tersisa setelah pemakaman dan utang dilunasi.',
    dalil: 'QS. An-Nisa: 11: "Min ba\'di washiyyatin yūshī bihā aw dayn".',
  },
  {
    urutan: 4,
    nama: '4. Pembagian Waris (Al-Mawārīts / Al-Irts)',
    deskripsi: 'Sisa harta bersih yang telah bersih dari biaya kubur, utang, dan wasiat, kemudian dibagikan secara mutlak kepada para ahli waris sesuai ketentuan Al-Qur\'an (Faraidh).',
    dalil: 'QS. An-Nisa: 11-12 & Kitabullah Azza wa Jalla.',
  },
];

export { WASIAT_QUIZ } from './quizzes/wasiatQuizData';
