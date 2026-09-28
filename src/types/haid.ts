export type BloodType = 'haid' | 'istihadhah' | 'nifas';

export type BloodColor =
  | 'aswad'   // Hitam (Paling Kuat)
  | 'ahmar'   // Merah
  | 'asyqar'  // Coklat kemerahan
  | 'ashfar'  // Kuning
  | 'kadir';  // Keruh (Paling Lemah)

export interface BloodColorDetail {
  id: BloodColor;
  nameIndo: string;
  nameArabic: string;
  powerRank: number; // 1 = paling kuat, 5 = paling lemah
  description: string;
}

export interface ForbiddenAct {
  id: string;
  name: string;
  nameArabic: string;
  description: string;
  qadhaRequired: boolean; // misal puasa wajib qadha, shalat tidak qadha
  dalil: string;
}

export interface HaidQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
