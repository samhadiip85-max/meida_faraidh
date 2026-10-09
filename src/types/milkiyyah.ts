export type MilkiyyahSubTab =
  | 'milkiyyah-overview'
  | 'sebab-tamalluk'
  | 'ihya-mawat'
  | 'milkiyyah-quiz';

export type MilkiyyahScope = 'sempurna' | 'tidak_sempurna';
export type MilkiyyahCategory = 'individu' | 'publik' | 'negara';

export interface MilkiyyahType {
  id: string;
  name: string;
  nameArabic: string;
  category: MilkiyyahCategory;
  scope: MilkiyyahScope;
  definition: string;
  characteristics: string[];
  examples: string[];
  dalil: string;
}

export interface SebabTamalluk {
  id: string;
  title: string;
  titleArabic: string;
  description: string;
  syaratSah: string[];
  contohPenerapan: string[];
  dalil: string;
}

export interface IhyaMawatCase {
  id: string;
  scenario: string;
  status: 'sah_milik' | 'batal_kembali_ke_negara' | 'hanya_manfaat' | 'haram_merampas';
  statusLabel: string;
  penjelasanFiqih: string;
  kaidahUshul: string;
  dalil: string;
}

export interface MilkiyyahQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
