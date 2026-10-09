export type JualBeliSubTab =
  | 'jualbeli-overview'
  | 'khiyar-guide'
  | 'objek-jualbeli'
  | 'jualbeli-quiz';

export interface RukunJualBeli {
  id: string;
  name: string;
  nameArabic: string;
  syarat: string[];
  description: string;
  dalil: string;
}

export interface KhiyarType {
  id: string;
  name: string;
  nameArabic: string;
  duration: string;
  description: string;
  syaratSah: string[];
  contohKasus: string;
  dalil: string;
}

export interface BaiObjekType {
  id: 'musyahadah' | 'mausuf_zimmah' | 'ghaib';
  title: string;
  titleArabic: string;
  statusHukum: string;
  statusColor: 'emerald' | 'sky' | 'amber';
  definition: string;
  syaratKeabsahan: string[];
  contohKlasik: string;
  contohModern: string;
  perbedaanKunci: string;
  statusKhiyar: string;
  dalil: string;
}

export interface JualBeliQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
