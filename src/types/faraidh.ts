export type DeceasedGender = 'male' | 'female';

export type HeirRole =
  | 'husband'                // Suami (Zauj)
  | 'wives'                  // Istri (Zaujah)
  | 'son'                    // Anak Laki-laki (Ibn)
  | 'daughter'               // Anak Perempuan (Bint)
  | 'grandson'               // Cucu Laki-laki dari Anak Laki-laki (Ibn Ibn)
  | 'granddaughter'          // Cucu Perempuan dari Anak Laki-laki (Bint Ibn)
  | 'father'                 // Ayah (Ab)
  | 'mother'                 // Ibu (Umm)
  | 'paternal_grandfather'   // Kakek Sahih / Ayahnya Ayah (Jadd Shahih)
  | 'paternal_grandmother'   // Nenek dari Ayah (Jaddah Shahihah - Umm Ab)
  | 'maternal_grandmother'   // Nenek dari Ibu (Jaddah Shahihah - Umm Umm)
  | 'full_brother'           // Saudara Kandung Laki-laki (Akh Syaqiq)
  | 'full_sister'            // Saudari Kandung Perempuan (Ukht Syaqiqah)
  | 'consanguine_brother'    // Saudara Seayah Laki-laki (Akh li Ab)
  | 'consanguine_sister'     // Saudari Seayah Perempuan (Ukht li Ab)
  | 'uterine_sibling'        // Saudara/Saudari Seibu (Akh/Ukht li Umm)
  | 'full_nephew'            // Anak Laki-laki Saudara Kandung (Ibn Akh Syaqiq)
  | 'consanguine_nephew'     // Anak Laki-laki Saudara Seayah (Ibn Akh li Ab)
  | 'full_uncle'             // Paman Kandung (Amm Syaqiq - Saudara kandung ayah)
  | 'consanguine_uncle';     // Paman Seayah (Amm li Ab)

export interface HeirInput {
  role: HeirRole;
  nameIndo: string;
  nameArabic: string;
  count: number;
  category: 'spouse' | 'descendant' | 'ascendant' | 'sibling' | 'extended';
  gender: 'male' | 'female';
}

export type FurudhShareType = 
  | '1/2' 
  | '1/4' 
  | '1/8' 
  | '2/3' 
  | '1/3' 
  | '1/6' 
  | '1/3 sisa' 
  | 'Ashabah bi Nafsihi' 
  | 'Ashabah bil Ghair' 
  | 'Ashabah ma\'al Ghair' 
  | 'Mahjub Hirman'
  | 'Tidak Ada Bagian';

export interface CalculatedHeir {
  role: HeirRole;
  nameIndo: string;
  nameArabic: string;
  count: number;
  category: 'spouse' | 'descendant' | 'ascendant' | 'sibling' | 'extended';
  isMahjub: boolean;
  mahjubBy?: string[];
  furudhShare: FurudhShareType;
  shareFractionNum: number; // e.g. 1
  shareFractionDen: number; // e.g. 4
  initialSaham: number;    // share in initial asal masalah
  adjustedSaham: number;   // share after 'aul or radd or tashih
  percentage: number;      // 0 - 100%
  totalAmount: number;     // rupiah for group
  amountPerPerson: number; // rupiah per individual
  dalilDescription: string;
  explanation: string;
}

export interface EstateDeductions {
  grossEstate: number;     // Total Harta Kotor
  funeralCost: number;     // Biaya Pengurusan Jenazah (Tajhiz)
  debtAllah: number;       // Hutang kepada Allah (Zakat, Kaffarah, Nadzar)
  debtHuman: number;       // Hutang kepada Manusia
  bequestAmount: number;   // Wasiat (maksimal 1/3 sisa setelah hutang & tajhiz)
}

export interface FaraidhResult {
  deceasedGender: DeceasedGender;
  grossEstate: number;
  totalDeductions: number;
  netEstate: number;       // Tirkah yang siap dibagikan
  bequestWarning?: string; // Jika wasiat dipotong menjadi maks 1/3
  
  heirs: CalculatedHeir[];
  activeHeirs: CalculatedHeir[];
  mahjubHeirs: CalculatedHeir[];

  initialAsalMasalah: number;
  finalAsalMasalah: number;
  caseType: 'Adil (Normal)' | 'Aul' | 'Radd' | 'Gharrawain';
  caseDescription: string;
  hasTashih: boolean;
  tashihMultiplier: number;

  steps: {
    title: string;
    description: string;
    details?: string[];
  }[];
}
