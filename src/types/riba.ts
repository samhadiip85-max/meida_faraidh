export type RibaSubTab =
  | 'riba-overview'
  | 'macam-riba'
  | 'barter-simulator'
  | 'riba-detector-cases'
  | 'riba-quiz';

export type RibaKind = 'qardh' | 'jahiliyyah' | 'fadhl' | 'nasiah' | 'yad';

export interface RibaTypeDetail {
  id: RibaKind;
  name: string;
  nameArabic: string;
  category: 'duyun' | 'buyu';
  categoryLabel: string;
  definition: string;
  contohKlasik: string;
  contohModern: string;
  solusiSyarie: string;
  dalil: string;
}

export interface RibaCaseStudy {
  id: string;
  title: string;
  category: RibaKind;
  categoryLabel: string;
  description: string;
  statusHukum: 'haram_riba' | 'sah_halal' | 'khilaf_fatwa';
  statusLabel: string;
  alasanFiqih: string;
  solusiSyarie: string;
  dalil: string;
}

export interface RibaQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
