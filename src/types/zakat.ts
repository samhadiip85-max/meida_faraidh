export type ZakatType =
  | 'fitrah'
  | 'emas_tabungan'
  | 'perniagaan'
  | 'pertanian'
  | 'profesi';

export interface AshnafItem {
  id: string;
  name: string;
  nameArabic: string;
  description: string;
  eligibilityCriteria: string;
  dalil: string;
}

export interface ZakatQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
