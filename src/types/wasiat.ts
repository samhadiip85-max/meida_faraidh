export type WasiatSubTab =
  | 'wasiat-overview'
  | 'panduan-wasiat'
  | 'wasiat-simulator'
  | 'wasiat-quiz';

export interface RukunWasiatItem {
  id: string;
  name: string;
  nameArabic: string;
  role: string;
  syaratSah: string;
}

export interface WasiatQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
