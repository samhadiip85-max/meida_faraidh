export type AnimalType = 'kambing' | 'domba' | 'sapi' | 'unta';

export interface AnimalRequirement {
  type: AnimalType;
  name: string;
  nameArabic: string;
  minAge: string;
  ageArabicTerm: string;
  quotaPersons: number; // 1 for kambing/domba, 7 for sapi/unta
  description: string;
}

export interface DefectItem {
  id: string;
  name: string;
  nameArabic: string;
  status: 'membatalkan' | 'makruh' | 'dimaafkan';
  description: string;
  dalil: string;
}

export interface QurbanQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
