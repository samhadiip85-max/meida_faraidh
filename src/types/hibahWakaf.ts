export type HibahWakafSubTab =
  | 'hibah-wakaf-overview'
  | 'hibah-guide'
  | 'wakaf-guide'
  | 'hibah-wakaf-simulator'
  | 'hibah-wakaf-quiz';

export interface RukunItem {
  name: string;
  nameArabic: string;
  description: string;
  syarat: string[];
}

export interface HibahWakafQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
