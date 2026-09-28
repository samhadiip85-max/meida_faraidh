export type MarriageRuling = 'Wajib' | 'Sunnah' | 'Mubah' | 'Makruh' | 'Haram';

export interface MarriageRulingDetail {
  ruling: MarriageRuling;
  arabicTerm: string;
  condition: string;
  explanation: string;
  dalil: string;
}

export type MahramCategory = 'nasab' | 'mushaharah' | 'radlaah' | 'muaqqat';

export interface MahramRelation {
  id: string;
  nameIndo: string;
  nameArabic: string;
  category: MahramCategory;
  isPermanent: boolean; // true = mu'abbad, false = mu'aqqat
  conditions?: string;
  dalil: string;
}

export interface WaliHierarchyItem {
  order: number;
  roleIndo: string;
  roleArabic: string;
  category: 'wali_nasab_aqrab' | 'wali_nasab_abad' | 'wali_hakim';
  conditions: string;
}

export type IddahCondition =
  | 'divorce_menstruating'      // Cerai hidup, masih haid (3 quru')
  | 'divorce_non_menstruating'  // Cerai hidup, belum/tidak haid (3 bulan)
  | 'death_not_pregnant'        // Ditinggal wafat, tidak hamil (4 bulan 10 hari)
  | 'pregnant_any'              // Cerai hidup/mati dalam kondisi hamil (sampai melahirkan)
  | 'divorce_before_dukhul';    // Cerai sebelum berhubungan suami-istri (tanpa iddah)

export interface IddahResult {
  condition: IddahCondition;
  title: string;
  durationText: string;
  dalilArabic: string;
  dalilSource: string;
  rightsDuringIddah: string[];
  rujukAllowed: boolean;
}
