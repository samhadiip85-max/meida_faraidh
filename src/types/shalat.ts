export type RukunCategory = 'qalbi' | 'qauli' | 'fili' | 'manawi';

export interface RukunShalatItem {
  id: number;
  name: string;
  nameArabic: string;
  category: RukunCategory;
  categoryLabel: string;
  description: string;
  dalil?: string;
  tumaninahRequired: boolean;
}

export interface SunnahShalatItem {
  id: string;
  name: string;
  type: 'abadh' | 'haiah';
  description: string;
  sahwiCompensated: boolean; // true for ab'adh, false for hai'ah
  consequence: string;
}

export interface JamakQasharRule {
  prayerName: string;
  canBeShortened: boolean; // qashar (4 rakaat -> 2 rakaat)
  partnerPrayer?: string;   // dzuhur-ashar, maghrib-isya
  minimumDistanceKm: number; // 81 - 88 km
}

export interface ShalatQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
