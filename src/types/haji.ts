export type HajiType = 'tamattu' | 'ifrad' | 'qiran';

export interface ManasikDayStep {
  dayNumber: number;
  dateHijri: string;
  nameIndo: string;
  location: string;
  activities: string[];
  statusHukum: 'rukun' | 'wajib' | 'sunnah';
  tips: string;
}

export interface LaranganIhramItem {
  id: string;
  name: string;
  category: 'laki_laki' | 'perempuan' | 'bersama';
  damType: 'takhyir_taqdir' | 'tertib_taqdir' | 'tertib_tadil' | 'takhyir_tadil' | 'batal_nikah';
  consequence: string;
}

export interface HajiQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
