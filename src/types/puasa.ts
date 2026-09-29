export type FidyahReason =
  | 'sakit_sementara'
  | 'musafir'
  | 'haid_nifas'
  | 'tua_renta'
  | 'sakit_menahun'
  | 'hamil_khawatir_bayi'
  | 'hamil_khawatir_diri'
  | 'terlambat_qadha';

export interface PuasaSunnahItem {
  id: string;
  name: string;
  timing: string;
  virtue: string;
  dalil: string;
}

export interface PuasaQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
