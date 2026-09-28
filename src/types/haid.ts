export type BloodType = 'haid' | 'nifas' | 'istihadhah';

export interface BloodRuleDetail {
  type: BloodType;
  title: string;
  arabicTerm: string;
  definition: string;
  minDuration: string;
  maxDuration: string;
  habitualDuration: string;
  legalStatus: string;
  colorCharacteristics: string[];
  dalil: string;
}

export interface HaidProhibition {
  id: string;
  title: string;
  desc: string;
  qadhaRule: 'wajib_qadha' | 'tidak_qadha' | 'bukan_ibadah';
  qadhaText: string;
  dalil: string;
}

export type MustahadhahCategory =
  | 'mubtadaah_mumayyizah'
  | 'mubtadaah_ghairu_mumayyizah'
  | 'mutadah_mumayyizah'
  | 'mutadah_ghairu_mumayyizah';

export interface BloodSimulationResult {
  totalDays: number;
  haidDays: number;
  istihadhahDays: number;
  categoryName: string;
  explanation: string;
  prayerObligation: string;
  mandiTime: string;
}
