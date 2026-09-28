export interface MasbuqScenario {
  id: string;
  name: string;
  joinPoint: 'takbir_berdiri' | 'ruku' | 'itidal' | 'sujud' | 'tasyahhud';
  imamStatus: string;
  tumaninahAchieved: boolean;
  rakaatCounted: boolean;
  explanation: string;
}

export interface KhutbahRukun {
  number: number;
  name: string;
  nameArabic: string;
  placement: string; // e.g. Khutbah 1 & 2, atau salah satunya
  description: string;
  exampleArabic?: string;
}

export interface VehiclePrayerGuide {
  vehicleType: 'pesawat' | 'kereta' | 'kapal' | 'bus_mobil';
  title: string;
  wudhuOption: string;
  qiblatRule: string;
  standingRule: string;
  statusHukum: string;
  qadhaRequired: boolean;
  practicalTips: string[];
}

export interface JamaahJumatQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
