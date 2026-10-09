export type PerceraianSubTab =
  | 'perceraian-overview'
  | 'klasifikasi-thalaq'
  | 'thalaq-simulator'
  | 'perceraian-quiz';

export type ThalaqNumber = 1 | 2 | 3;
export type LafazType = 'sharih' | 'kinayah_niat' | 'kinayah_tanpa_niat';
export type WaktuType = 'sunni' | 'bidi_haid' | 'bidi_suci_gaul';
export type JenisPemutusan = 'thalaq' | 'khulu' | 'fasakh';

export interface ThalaqCaseResult {
  isJatuh: boolean;
  statusKategori: 'raj\'i' | 'ba\'in_sughra' | 'ba\'in_kubra' | 'batal';
  hukumWaktu: 'sunni_halal' | 'bidi_haram_berdosa' | 'tidak_berlaku';
  caraRujukKembali: string;
  penjelasan: string;
  dalil: string;
}

export interface PerceraianQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
