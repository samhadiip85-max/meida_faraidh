export type HududSubTab =
  | 'hudud-overview'
  | 'materi-hudud'
  | 'hudud-simulator'
  | 'hudud-quiz';

export type HududKind = 'zina' | 'qadzaf' | 'sariqah' | 'khamr' | 'bughat';

export interface HududItem {
  id: HududKind;
  name: string;
  nameArabic: string;
  definition: string;
  hukumanSyariat: string;
  syaratPenjatuhan: string[];
  faktorPenggugur: string[];
  dalil: string;
}

export interface HududQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
