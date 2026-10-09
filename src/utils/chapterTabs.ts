import { MainChapter } from '../components/Header';

export interface ChapterTabItem {
  id: string;
  label: string;
}

export function getChapterTabs(chapter: MainChapter): ChapterTabItem[] {
  switch (chapter) {
    case 'thaharah':
      return [
        { id: 'thaharah-overview', label: 'Hakekat & 4 Macam Air' },
        { id: 'wudhu-simulator', label: 'Wudhu, Tayamum & Mandi' },
        { id: 'najis-guide', label: 'Najis, Istinja & Khuff' },
        { id: 'thaharah-quiz', label: 'Latihan Soal BAB 1' },
      ];
    case 'haid':
      return [
        { id: 'haid-overview', label: 'Hakekat & Siklus Darah' },
        { id: 'blood-simulator', label: 'Simulator Status Darah' },
        { id: 'istihadhah', label: 'Panduan Istihadhah & Nifas' },
        { id: 'haid-quiz', label: 'Latihan Soal BAB 2' },
      ];
    case 'shalat':
      return [
        { id: 'shalat-overview', label: 'Syarat & 13 Rukun Shalat' },
        { id: 'sunnah-sahwi', label: 'Ab\'adh, Hai\'ah & Sahwi' },
        { id: 'jamak-qashar', label: 'Kalkulator Jamak & Qashar' },
        { id: 'shalat-quiz', label: 'Latihan Soal BAB 3' },
      ];
    case 'jamaah_jumat':
      return [
        { id: 'jamaah-overview', label: 'Fiqih Shalat Jama\'ah' },
        { id: 'jumat-guide', label: 'Fiqih Shalat Jum\'at' },
        { id: 'musafir-guide', label: 'Panduan Shalat Musafir' },
        { id: 'jj-quiz', label: 'Latihan Soal BAB 4' },
      ];
    case 'jenazah':
      return [
        { id: 'jenazah-overview', label: '4 Kewajiban Terhadap Jenazah' },
        { id: 'shalat-jenazah', label: 'Panduan Shalat Jenazah 4 Takbir' },
        { id: 'kubur-ziarah', label: 'Pemakaman, Takziyah & Ziarah' },
        { id: 'jenazah-quiz', label: 'Latihan Soal BAB 5' },
      ];
    case 'zakat':
      return [
        { id: 'zakat-overview', label: 'Zakat Fitrah & Syarat Wajib' },
        { id: 'zakat-calculator', label: 'Kalkulator Zakat Mal & Emas' },
        { id: 'ashnaf-guide', label: '8 Asnaf Mustahiq Zakat' },
        { id: 'zakat-quiz', label: 'Latihan Soal BAB 6' },
      ];
    case 'puasa':
      return [
        { id: 'puasa-overview', label: 'Rukun & Syarat Puasa Ramadhan' },
        { id: 'fidyah-qadha', label: 'Pembatal Puasa, Qadha & Fidyah' },
        { id: 'puasa-sunnah', label: 'Puasa Sunnah & Hari Diharamkan' },
        { id: 'puasa-quiz', label: 'Latihan Soal BAB 7' },
      ];
    case 'haji':
      return [
        { id: 'haji-overview', label: 'Syarat, Rukun & Wajib Haji' },
        { id: 'manasik-simulator', label: 'Miqat, Larangan & Peta Thawaf' },
        { id: 'larangan-dam', label: 'Ifrad, Qiran, Tamattu & Dam' },
        { id: 'haji-quiz', label: 'Latihan Soal BAB 8' },
      ];
    case 'qurban':
      return [
        { id: 'qurban-overview', label: 'Syarat Hewan & Waktu Qurban' },
        { id: 'qurban-calculator', label: 'Kalkulator Patungan Qurban' },
        { id: 'aqiqah-guide', label: 'Fiqih Aqiqah & Distribusi Daging' },
        { id: 'qurban-quiz', label: 'Latihan Soal BAB 9' },
      ];
    case 'sembelih':
      return [
        { id: 'sembelih-overview', label: 'Rukun & Syarat Penyembelihan' },
        { id: 'berburu-guide', label: 'Fiqih Berburu & Hewan Buruan' },
        { id: 'halal-checker', label: 'Kriteria Makanan Halal & Haram' },
        { id: 'sembelih-quiz', label: 'Latihan Soal BAB 10' },
      ];
    case 'milkiyyah':
      return [
        { id: 'milkiyyah-overview', label: 'Hakekat & 3 Kategori Kepemilikan' },
        { id: 'sebab-tamalluk', label: '4 Sebab Kepemilikan & Ihrazul Mubahat' },
        { id: 'ihya-mawat', label: 'Simulator Ihya\'ul Mawat (Lahan Tidur)' },
        { id: 'milkiyyah-quiz', label: 'Latihan Soal BAB 11' },
      ];
    case 'jualbeli':
      return [
        { id: 'jualbeli-overview', label: 'Rukun & 3 Bentuk Jual Beli' },
        { id: 'khiyar-guide', label: 'Hak Khiyar (Majlis, Syarat & Aib)' },
        { id: 'objek-jualbeli', label: 'Syarat Sah Objek Transaksi' },
        { id: 'jualbeli-quiz', label: 'Latihan Soal BAB 12' },
      ];
    case 'muamalah':
      return [
        { id: 'muamalah-overview', label: 'Katalog Akad Muamalah Islam' },
        { id: 'akad-catalog', label: 'Syirkah, Mudharabah & Bagi Hasil' },
        { id: 'skema-simulator', label: 'Ijarah, Rahn & Wadi\'ah' },
        { id: 'muamalah-quiz', label: 'Latihan Soal BAB 13' },
      ];
    case 'hibah_wakaf':
      return [
        { id: 'hibah-wakaf-overview', label: 'Filantropi Islam: Hibah & Hadiah' },
        { id: 'hibah-guide', label: 'Panduan Praktik Hibah & Sedekah' },
        { id: 'wakaf-guide', label: 'Fiqih Wakaf & UU Wakaf Indonesia' },
        { id: 'hibah-wakaf-simulator', label: 'Simulator Wakaf Produktif' },
        { id: 'hibah-wakaf-quiz', label: 'Latihan Soal BAB 14' },
      ];
    case 'riba':
      return [
        { id: 'riba-overview', label: 'Hukum & Bahaya Dosa Riba' },
        { id: 'macam-riba', label: '4 Jenis Riba: Fadhl, Nasi\'ah, Qardh, Yad' },
        { id: 'barter-simulator', label: 'Simulator Barter Ribawi' },
        { id: 'riba-detector-cases', label: 'Studi Kasus & Fatwa DSN-MUI' },
        { id: 'riba-quiz', label: 'Latihan Soal BAB 15' },
      ];
    case 'jinayat':
      return [
        { id: 'jinayat-overview', label: 'Hukum Pidana Islam & Qishash' },
        { id: 'qishash-guide', label: 'Syarat Eksekusi & Pemaafan Qishash' },
        { id: 'diyat-calculator', label: 'Taksiran Diyat & Denda Syar\'i' },
        { id: 'jinayat-quiz', label: 'Latihan Soal BAB 16' },
      ];
    case 'hudud':
      return [
        { id: 'hudud-overview', label: 'Hakekat Tindak Pidana Hudūd' },
        { id: 'materi-hudud', label: '7 Jenis Hudud: Zina, Qadzaf, Sariqah, dll' },
        { id: 'hudud-simulator', label: 'Simulator Pembuktian Hudud' },
        { id: 'hudud-quiz', label: 'Latihan Soal BAB 17' },
      ];
    case 'peradilan':
      return [
        { id: 'peradilan-overview', label: 'Lembaga Peradilan Al-Qadha\'' },
        { id: 'hakim-adab', label: 'Syarat & Kode Etik Hakim Syar\'i' },
        { id: 'peradilan-simulator', label: 'Simulator Sidang & Pembuktian' },
        { id: 'peradilan-quiz', label: 'Latihan Soal BAB 18' },
      ];
    case 'munakahat':
      return [
        { id: 'overview', label: 'Hakekat & 5 Rukun Nikah' },
        { id: 'mahram', label: 'Pohon Mahram & Golongan Terlarang' },
        { id: 'wali', label: 'Urutan Wali Nasab & Wali Hakim' },
        { id: 'iddah', label: 'Kalkulator Masa Iddah Wanita' },
        { id: 'munakahat-quiz', label: 'Latihan Soal BAB 19' },
      ];
    case 'perceraian':
      return [
        { id: 'perceraian-overview', label: 'Hukum & Hakekat Perceraian' },
        { id: 'klasifikasi-thalaq', label: 'Thalaq Raj\'i, Ba\'in & Fasakh' },
        { id: 'thalaq-simulator', label: 'Simulator Iddah & Hak Hadhanah' },
        { id: 'perceraian-quiz', label: 'Latihan Soal BAB 20' },
      ];
    case 'faraidh':
      return [
        { id: 'calculator', label: 'Kalkulator Waris' },
        { id: 'theory', label: 'Materi Furudh' },
        { id: 'hijab-tree', label: 'Pohon Hijab' },
        { id: 'special-cases', label: 'Kasus Khusus' },
        { id: 'quiz', label: 'Latihan Soal BAB 21' },
        { id: 'tajhiz', label: 'Panduan Tajhiz' },
      ];
    case 'wasiat':
      return [
        { id: 'wasiat-overview', label: 'Hakekat & 4 Rukun Wasiat' },
        { id: 'panduan-wasiat', label: 'Syarat & Wasiat Wajibah' },
        { id: 'wasiat-simulator', label: 'Simulator Wasiat (1/3)' },
        { id: 'wasiat-quiz', label: 'Latihan Soal BAB 22' },
      ];
    case 'pustaka':
      return [
        { id: 'pustaka-overview', label: 'Bibliografi Lengkap (20 Referensi)' },
      ];
    default:
      return [];
  }
}
