export type PeradilanSubTab =
  | 'peradilan-overview'
  | 'hakim-adab'
  | 'peradilan-simulator'
  | 'peradilan-quiz';

export interface RukunQadhaItem {
  id: string;
  name: string;
  nameArabic: string;
  role: string;
  explanation: string;
}

export interface AlatBuktiItem {
  id: string;
  name: string;
  nameArabic: string;
  tingkatan: number;
  definition: string;
  syaratSah: string;
  penerapanPerkara: string;
  dalil: string;
}

export interface PeradilanQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
