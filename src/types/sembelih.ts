export type SembelihSubTab =
  | 'sembelih-overview'
  | 'berburu-guide'
  | 'halal-checker'
  | 'sembelih-quiz';

export interface SembelihPillar {
  name: string;
  nameArabic: string;
  syarat: string[];
  description: string;
  dalil: string;
}

export type HalalStatus = 'halal' | 'haram' | 'makruh' | 'khilaf';

export interface FoodAnimalItem {
  id: string;
  name: string;
  nameArabic?: string;
  category: 'darat' | 'laut_air' | 'unggas_burung' | 'serangga_melata' | 'olahan_modern';
  status: HalalStatus;
  statusLabel: string;
  reason: string;
  dalil: string;
  detailFiqih: string;
}

export interface HuntingCondition {
  aspect: string;
  aspectArabic: string;
  syaratSah: string[];
  kondisiBatal: string[];
  dalil: string;
}

export interface SembelihQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
