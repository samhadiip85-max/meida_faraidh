export type MuamalahSubTab =
  | 'muamalah-overview'
  | 'akad-catalog'
  | 'skema-simulator'
  | 'muamalah-quiz';

export type AkadCategory =
  | 'pertanian'
  | 'kemitraan'
  | 'komersial'
  | 'penjaminan'
  | 'jasa_sosial';

export interface AkadMuamalah {
  id: string;
  name: string;
  nameArabic: string;
  category: AkadCategory;
  categoryLabel: string;
  definition: string;
  rukun: string[];
  syaratSah: string[];
  skemaKerja: string;
  modernApplication: string;
  dalil: string;
}

export interface MuamalahQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
