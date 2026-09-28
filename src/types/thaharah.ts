export type WaterCategory =
  | 'mutlak'       // Thahir Muthahhir Ghairu Makruh
  | 'musyammas'    // Thahir Muthahhir Makruh
  | 'mustamal'     // Thahir Ghairu Muthahhir
  | 'mutanajjis';   // Najis

export interface WaterTypeDetail {
  id: WaterCategory;
  nameIndo: string;
  nameArabic: string;
  legalStatus: string;
  purificationPermitted: boolean;
  definition: string;
  examples: string[];
  conditions: string[];
  dalil: string;
}

export type NajisTier = 'mukhaffafah' | 'mutawassithah' | 'mughallazhah';

export interface NajisDetail {
  id: string;
  name: string;
  tier: NajisTier;
  tierArabic: string;
  examples: string[];
  cleansingMethod: string[];
  dalil: string;
}

export interface WudhuStep {
  stepNumber: number;
  name: string;
  nameArabic: string;
  isFardhu: boolean; // true = rukun, false = sunnah
  description: string;
  dalilText?: string;
}

export interface ThaharahQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
