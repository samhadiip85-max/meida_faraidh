export type JenazahGender = 'laki' | 'perempuan' | 'anak_laki' | 'anak_perempuan' | 'jamaah';

export interface JenazahPrayerDoa {
  gender: JenazahGender;
  title: string;
  takbir3Arabic: string;
  takbir3Latin: string;
  takbir3Translation: string;
  takbir4Arabic: string;
  takbir4Latin: string;
  takbir4Translation: string;
  imamPosition: string;
}

export interface KafanDetail {
  gender: 'laki' | 'perempuan';
  layerCountRecommended: number;
  layerCountMinimum: number;
  components: string[];
  ropeCount: string;
  procedure: string[];
}

export interface JenazahQuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  dalil: string;
}
