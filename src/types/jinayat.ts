export type JinayatSubTab =
  | 'jinayat-overview'
  | 'qishash-guide'
  | 'diyat-calculator'
  | 'jinayat-quiz';

export type PembunuhanType = 'amd' | 'syibhu_amd' | 'khatha';

export interface PembunuhanDetail {
  id: PembunuhanType;
  name: string;
  nameArabic: string;
  definition: string;
  alatDigunakan: string;
  unsurNiat: string;
  hukumanPokok: string;
  hukumanPengganti: string;
  bebanDiyat: string;
  kaffarah: string;
  dalil: string;
}

export interface DiyatOrganItem {
  id: string;
  organName: string;
  persentaseDiyat: number;
  jumlahUnta: number;
  keterangan: string;
}

export interface JinayatQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
