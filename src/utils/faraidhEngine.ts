import {
  CalculatedHeir,
  DeceasedGender,
  EstateDeductions,
  FaraidhResult,
  HeirInput,
  HeirRole,
} from '../types/faraidh';

// Helper math: Greatest Common Divisor (FPB)
export function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

// Helper math: Least Common Multiple (KPK)
export function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs((a * b) / gcd(a, b));
}

// Find LCM of an array of numbers
export function lcmArray(numbers: number[]): number {
  const filtered = numbers.filter((n) => n > 0);
  if (filtered.length === 0) return 1;
  return filtered.reduce((acc, curr) => lcm(acc, curr), 1);
}

// Format Rupiah currency
export function formatRupiah(amount: number): string {
  const safe = typeof amount === 'number' && !isNaN(amount) && isFinite(amount) ? Math.round(amount) : 0;
  try {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(safe);
  } catch {
    return `Rp ${safe.toLocaleString('id-ID')}`;
  }
}

// Default list of all possible heirs in order of fardh & hierarchy
export const INITIAL_HEIRS_LIST: HeirInput[] = [
  // Pasangan
  { role: 'husband', nameIndo: 'Suami', nameArabic: 'الزوج (Az-Zauj)', count: 0, category: 'spouse', gender: 'male' },
  { role: 'wives', nameIndo: 'Istri', nameArabic: 'الزوجة (Az-Zaujah)', count: 0, category: 'spouse', gender: 'female' },
  // Furu' (Keturunan)
  { role: 'son', nameIndo: 'Anak Laki-laki', nameArabic: 'الابن (Al-Ibn)', count: 0, category: 'descendant', gender: 'male' },
  { role: 'daughter', nameIndo: 'Anak Perempuan', nameArabic: 'البنت (Al-Bint)', count: 0, category: 'descendant', gender: 'female' },
  { role: 'grandson', nameIndo: 'Cucu Laki-laki (dari anak lk)', nameArabic: 'ابن الابن (Ibn Al-Ibn)', count: 0, category: 'descendant', gender: 'male' },
  { role: 'granddaughter', nameIndo: 'Cucu Perempuan (dari anak lk)', nameArabic: 'بنت الابن (Bint Al-Ibn)', count: 0, category: 'descendant', gender: 'female' },
  // Ushul (Orang Tua & Kakek Nenek)
  { role: 'father', nameIndo: 'Ayah', nameArabic: 'الأب (Al-Ab)', count: 0, category: 'ascendant', gender: 'male' },
  { role: 'mother', nameIndo: 'Ibu', nameArabic: 'الأم (Al-Umm)', count: 0, category: 'ascendant', gender: 'female' },
  { role: 'paternal_grandfather', nameIndo: 'Kakek Sahih (Ayahnya Ayah)', nameArabic: 'الجد الصحيح (Al-Jadd)', count: 0, category: 'ascendant', gender: 'male' },
  { role: 'paternal_grandmother', nameIndo: 'Nenek dari Ayah (Ibunya Ayah)', nameArabic: 'الجدة من الأب (Umm Al-Ab)', count: 0, category: 'ascendant', gender: 'female' },
  { role: 'maternal_grandmother', nameIndo: 'Nenek dari Ibu (Ibunya Ibu)', nameArabic: 'الجدة من الأم (Umm Al-Umm)', count: 0, category: 'ascendant', gender: 'female' },
  // Hawasyi (Saudara & Keturunan Saudara)
  { role: 'full_brother', nameIndo: 'Saudara Kandung Laki-laki', nameArabic: 'الأخ الشقيق (Al-Akh Asy-Syaqiq)', count: 0, category: 'sibling', gender: 'male' },
  { role: 'full_sister', nameIndo: 'Saudari Kandung Perempuan', nameArabic: 'الأخت الشقيقة (Al-Ukht Asy-Syaqiqah)', count: 0, category: 'sibling', gender: 'female' },
  { role: 'consanguine_brother', nameIndo: 'Saudara Seayah Laki-laki', nameArabic: 'الأخ لأب (Al-Akh li Ab)', count: 0, category: 'sibling', gender: 'male' },
  { role: 'consanguine_sister', nameIndo: 'Saudari Seayah Perempuan', nameArabic: 'الأخت لأب (Al-Ukht li Ab)', count: 0, category: 'sibling', gender: 'female' },
  { role: 'uterine_sibling', nameIndo: 'Saudara/i Seibu', nameArabic: 'الإخوة لأم (Al-Ikhwah li Umm)', count: 0, category: 'sibling', gender: 'male' },
  { role: 'full_nephew', nameIndo: 'Keponakan Laki-laki (Anak lk Saudara Kandung)', nameArabic: 'ابن الأخ الشقيق (Ibn Al-Akh Asy-Syaqiq)', count: 0, category: 'extended', gender: 'male' },
  { role: 'consanguine_nephew', nameIndo: 'Keponakan Laki-laki (Anak lk Saudara Seayah)', nameArabic: 'ابن الأخ لأب (Ibn Al-Akh li Ab)', count: 0, category: 'extended', gender: 'male' },
  // Paman (Amm)
  { role: 'full_uncle', nameIndo: 'Paman Kandung (Saudara kandung ayah)', nameArabic: 'العم الشقيق (Al-Amm Asy-Syaqiq)', count: 0, category: 'extended', gender: 'male' },
  { role: 'consanguine_uncle', nameIndo: 'Paman Seayah (Saudara seayah dari ayah)', nameArabic: 'العم لأب (Al-Amm li Ab)', count: 0, category: 'extended', gender: 'male' },
];

export function calculateFaraidh(
  deceasedGender: DeceasedGender,
  heirsInput: HeirInput[],
  deductions: EstateDeductions
): FaraidhResult {
  const steps: { title: string; description: string; details?: string[] }[] = [];

  // 1. Tirkah Calculation (Hak-hak atas harta sebelum dibagikan)
  const totalDeductionsBeforeBequest =
    deductions.funeralCost + deductions.debtAllah + deductions.debtHuman;
  const estateAfterDebt = Math.max(0, deductions.grossEstate - totalDeductionsBeforeBequest);

  // Wasiat rule: maksimal 1/3 dari harta sisa setelah tajhiz & hutang
  const maxAllowableBequest = estateAfterDebt / 3;
  let finalBequest = Math.min(deductions.bequestAmount, estateAfterDebt);
  let bequestWarning: string | undefined = undefined;

  if (deductions.bequestAmount > maxAllowableBequest && maxAllowableBequest > 0) {
    finalBequest = maxAllowableBequest;
    bequestWarning = `Wasiat dibatasi maksimal 1/3 harta bersih (${formatRupiah(maxAllowableBequest)}) sesuai sabda Rasulullah SAW: "الثُّلُثُ وَالثُّلُثُ كَثِيرٌ" (Sepertiga, dan sepertiga itu sudah banyak - HR. Bukhari & Muslim). Kelebihan wasiat memerlukan keridhaan seluruh ahli waris.`;
  }

  const netEstate = Math.max(0, estateAfterDebt - finalBequest);
  const totalDeductions = totalDeductionsBeforeBequest + finalBequest;

  steps.push({
    title: 'Langkah 1: Pembersihan Harta Peninggalan (Tirkah)',
    description: `Harta kotor sebesar ${formatRupiah(deductions.grossEstate)} disucikan terlebih dahulu untuk memenuhi 4 hak berurutan sebelum warisan:`,
    details: [
      `1. Biaya Tajhiz / Pemakaman: ${formatRupiah(deductions.funeralCost)}`,
      `2. Pelunasan Hutang Allah & Manusia: ${formatRupiah(deductions.debtAllah + deductions.debtHuman)}`,
      `3. Pelaksanaan Wasiat (Maks 1/3 sisa): ${formatRupiah(finalBequest)}`,
      `➔ Harta Bersih (Tirkah Shafi'ah) yang siap dibagi waris: ${formatRupiah(netEstate)}`,
    ],
  });

  // Filter input to count > 0 and gender consistency
  const activeInputMap = new Map<HeirRole, HeirInput>();
  heirsInput.forEach((h) => {
    // If deceased is male, wife can exist, husband cannot
    if (deceasedGender === 'male' && h.role === 'husband') return;
    // If deceased is female, husband can exist, wives cannot
    if (deceasedGender === 'female' && h.role === 'wives') return;

    if (h.count > 0) {
      activeInputMap.set(h.role, { ...h });
    }
  });

  const getCount = (role: HeirRole): number => activeInputMap.get(role)?.count || 0;

  const numSons = getCount('son');
  const numDaughters = getCount('daughter');
  const numGrandsons = getCount('grandson');
  const numGranddaughters = getCount('granddaughter');
  const numFather = getCount('father');
  const numMother = getCount('mother');
  const numPaternalGrandfather = getCount('paternal_grandfather');
  const numPaternalGrandmother = getCount('paternal_grandmother');
  const numMaternalGrandmother = getCount('maternal_grandmother');
  const numFullBrothers = getCount('full_brother');
  const numFullSisters = getCount('full_sister');
  const numConsanguineBrothers = getCount('consanguine_brother');
  const numConsanguineSisters = getCount('consanguine_sister');
  const numUterineSiblings = getCount('uterine_sibling');
  const numFullNephews = getCount('full_nephew');
  const numConsanguineNephews = getCount('consanguine_nephew');
  const numFullUncles = getCount('full_uncle');
  const numConsanguineUncles = getCount('consanguine_uncle');
  const numHusband = getCount('husband');
  const numWives = getCount('wives');

  const hasChildren = numSons + numDaughters > 0;
  const hasGrandchildren = numGrandsons + numGranddaughters > 0;
  const hasDescendants = hasChildren || hasGrandchildren;
  const hasMaleDescendant = numSons > 0 || numGrandsons > 0;
  const totalSiblingsCount =
    numFullBrothers +
    numFullSisters +
    numConsanguineBrothers +
    numConsanguineSisters +
    numUterineSiblings;

  // 2. HIJAB HIRMAN (Penghalangan total hak waris)
  const mahjubReasons = new Map<HeirRole, string[]>();

  const markMahjub = (role: HeirRole, reason: string) => {
    if (getCount(role) > 0) {
      const existing = mahjubReasons.get(role) || [];
      existing.push(reason);
      mahjubReasons.set(role, existing);
    }
  };

  // Son blocks: grandson, granddaughter (unless grandson makes her ashabah), siblings, nephews, uncles
  if (numSons > 0) {
    markMahjub('grandson', 'Terhalang (Mahjub Hirman) oleh Anak Laki-laki kandung');
    markMahjub('granddaughter', 'Terhalang (Mahjub Hirman) oleh Anak Laki-laki kandung');
    markMahjub('full_brother', 'Terhalang oleh Anak Laki-laki');
    markMahjub('full_sister', 'Terhalang oleh Anak Laki-laki');
    markMahjub('consanguine_brother', 'Terhalang oleh Anak Laki-laki');
    markMahjub('consanguine_sister', 'Terhalang oleh Anak Laki-laki');
    markMahjub('uterine_sibling', 'Terhalang oleh Furu\' (Anak Laki-laki)');
    markMahjub('full_nephew', 'Terhalang oleh Anak Laki-laki');
    markMahjub('consanguine_nephew', 'Terhalang oleh Anak Laki-laki');
    markMahjub('full_uncle', 'Terhalang oleh Anak Laki-laki');
    markMahjub('consanguine_uncle', 'Terhalang oleh Anak Laki-laki');
  }

  // Grandson (when no son) blocks lower descendants, siblings, nephews, uncles
  if (numGrandsons > 0 && numSons === 0) {
    markMahjub('full_brother', 'Terhalang oleh Cucu Laki-laki (Furu\' Mudzakkar)');
    markMahjub('full_sister', 'Terhalang oleh Cucu Laki-laki');
    markMahjub('consanguine_brother', 'Terhalang oleh Cucu Laki-laki');
    markMahjub('consanguine_sister', 'Terhalang oleh Cucu Laki-laki');
    markMahjub('uterine_sibling', 'Terhalang oleh Cucu Laki-laki');
    markMahjub('full_nephew', 'Terhalang oleh Cucu Laki-laki');
    markMahjub('consanguine_nephew', 'Terhalang oleh Cucu Laki-laki');
    markMahjub('full_uncle', 'Terhalang oleh Cucu Laki-laki');
    markMahjub('consanguine_uncle', 'Terhalang oleh Cucu Laki-laki');
  }

  // Daughters 2+ block granddaughter unless grandson is present
  if (numDaughters >= 2 && numSons === 0 && numGrandsons === 0) {
    markMahjub(
      'granddaughter',
      'Terhalang karena bagian 2/3 anak perempuan sudah habis diambil 2+ anak perempuan'
    );
  }

  // Father blocks: grandfather, paternal grandmother, all siblings, nephews, uncles
  if (numFather > 0) {
    markMahjub('paternal_grandfather', 'Terhalang oleh Ayah kandung (Ushul terdekat)');
    markMahjub('paternal_grandmother', 'Terhalang oleh Ayah (karena nasabnya melalui ayah)');
    markMahjub('full_brother', 'Terhalang oleh Ayah (Ushul mudzakkar)');
    markMahjub('full_sister', 'Terhalang oleh Ayah');
    markMahjub('consanguine_brother', 'Terhalang oleh Ayah');
    markMahjub('consanguine_sister', 'Terhalang oleh Ayah');
    markMahjub('uterine_sibling', 'Terhalang oleh Ayah (Ushul)');
    markMahjub('full_nephew', 'Terhalang oleh Ayah');
    markMahjub('consanguine_nephew', 'Terhalang oleh Ayah');
    markMahjub('full_uncle', 'Terhalang oleh Ayah');
    markMahjub('consanguine_uncle', 'Terhalang oleh Ayah');
  }

  // Mother blocks: all grandmothers (both maternal and paternal)
  if (numMother > 0) {
    markMahjub('maternal_grandmother', 'Terhalang oleh Ibu kandung');
    markMahjub('paternal_grandmother', 'Terhalang oleh Ibu kandung');
  }

  // Grandfather (if father absent) blocks uterine siblings, nephews, uncles
  if (numPaternalGrandfather > 0 && numFather === 0) {
    markMahjub('uterine_sibling', 'Terhalang oleh Kakek Sahih (Ushul)');
    markMahjub('full_nephew', 'Terhalang oleh Kakek');
    markMahjub('consanguine_nephew', 'Terhalang oleh Kakek');
    markMahjub('full_uncle', 'Terhalang oleh Kakek');
    markMahjub('consanguine_uncle', 'Terhalang oleh Kakek');
  }

  // Uterine siblings blocked by female descendants too (Daughter/Granddaughter)
  if (numDaughters > 0 || numGranddaughters > 0) {
    markMahjub('uterine_sibling', 'Terhalang oleh Furu\' (Anak/Cucu Perempuan)');
  }

  // Full brother blocks: consanguine siblings, nephews, uncles
  if (numFullBrothers > 0 && numSons === 0 && numGrandsons === 0 && numFather === 0) {
    markMahjub('consanguine_brother', 'Terhalang oleh Saudara Kandung Laki-laki');
    markMahjub('consanguine_sister', 'Terhalang oleh Saudara Kandung Laki-laki');
    markMahjub('full_nephew', 'Terhalang oleh Saudara Kandung Laki-laki');
    markMahjub('consanguine_nephew', 'Terhalang oleh Saudara Kandung Laki-laki');
    markMahjub('full_uncle', 'Terhalang oleh Saudara Kandung Laki-laki');
    markMahjub('consanguine_uncle', 'Terhalang oleh Saudara Kandung Laki-laki');
  }

  // Full sister as Ashabah Ma'al Ghair (with daughters/granddaughters) acts like full brother
  const isFullSisterAshabahMaalGhair =
    numFullSisters > 0 &&
    numFullBrothers === 0 &&
    (numDaughters > 0 || numGranddaughters > 0) &&
    numSons === 0 &&
    numGrandsons === 0 &&
    numFather === 0;

  if (isFullSisterAshabahMaalGhair) {
    markMahjub(
      'consanguine_brother',
      'Terhalang oleh Saudari Kandung yang menjadi Ashabah Ma\'al Ghair bersama anak/cucu perempuan'
    );
    markMahjub('consanguine_sister', 'Terhalang oleh Saudari Kandung (Ashabah Ma\'al Ghair)');
    markMahjub('full_nephew', 'Terhalang oleh Saudari Kandung (Ashabah Ma\'al Ghair)');
    markMahjub('consanguine_nephew', 'Terhalang oleh Saudari Kandung (Ashabah Ma\'al Ghair)');
    markMahjub('full_uncle', 'Terhalang oleh Saudari Kandung (Ashabah Ma\'al Ghair)');
    markMahjub('consanguine_uncle', 'Terhalang oleh Saudari Kandung (Ashabah Ma\'al Ghair)');
  }

  // Consanguine brother blocks nephews and uncles
  if (
    numConsanguineBrothers > 0 &&
    numFullBrothers === 0 &&
    !isFullSisterAshabahMaalGhair &&
    numSons === 0 &&
    numGrandsons === 0 &&
    numFather === 0
  ) {
    markMahjub('full_nephew', 'Terhalang oleh Saudara Seayah Laki-laki');
    markMahjub('consanguine_nephew', 'Terhalang oleh Saudara Seayah Laki-laki');
    markMahjub('full_uncle', 'Terhalang oleh Saudara Seayah Laki-laki');
    markMahjub('consanguine_uncle', 'Terhalang oleh Saudara Seayah Laki-laki');
  }

  // Full nephew blocks consanguine nephew and uncles
  if (
    numFullNephews > 0 &&
    numFullBrothers === 0 &&
    numConsanguineBrothers === 0 &&
    !isFullSisterAshabahMaalGhair &&
    numSons === 0 &&
    numGrandsons === 0 &&
    numFather === 0
  ) {
    markMahjub('consanguine_nephew', 'Terhalang oleh Keponakan Kandung Laki-laki');
    markMahjub('full_uncle', 'Terhalang oleh Keponakan Kandung Laki-laki');
    markMahjub('consanguine_uncle', 'Terhalang oleh Keponakan Kandung Laki-laki');
  }

  // Consanguine nephew blocks uncles
  if (
    numConsanguineNephews > 0 &&
    numFullNephews === 0 &&
    numFullBrothers === 0 &&
    numConsanguineBrothers === 0 &&
    !isFullSisterAshabahMaalGhair &&
    numSons === 0 &&
    numGrandsons === 0 &&
    numFather === 0
  ) {
    markMahjub('full_uncle', 'Terhalang oleh Keponakan Seayah Laki-laki');
    markMahjub('consanguine_uncle', 'Terhalang oleh Keponakan Seayah Laki-laki');
  }

  // Full uncle blocks consanguine uncle
  if (numFullUncles > 0 && numFather === 0 && numSons === 0 && numGrandsons === 0) {
    markMahjub('consanguine_uncle', 'Terhalang oleh Paman Kandung (lebih dekat kekerabatannya)');
  }

  // Check Gharrawain (Umariyatain) condition:
  // Deceased leaves: (Husband OR Wife) + Mother + Father, and NO children, NO grandchildren, NO 2+ siblings.
  const isGharrawain =
    (numHusband > 0 || numWives > 0) &&
    numMother > 0 &&
    numFather > 0 &&
    !hasDescendants &&
    totalSiblingsCount < 2;

  // 3. FURUDH ASSIGNMENT
  type InternalShare = {
    role: HeirRole;
    nameIndo: string;
    nameArabic: string;
    count: number;
    category: HeirInput['category'];
    isMahjub: boolean;
    mahjubReasons: string[];
    isAshabah: boolean;
    ashabahType?: 'Ashabah bi Nafsihi' | 'Ashabah bil Ghair' | 'Ashabah ma\'al Ghair';
    ashabahWeight?: number; // male 2, female 1
    fractionNum: number;
    fractionDen: number;
    furudhLabel: string;
    dalil: string;
    explanation: string;
  };

  const calculatedList: InternalShare[] = [];

  activeInputMap.forEach((heir, role) => {
    const isMahjub = mahjubReasons.has(role);
    const reasons = mahjubReasons.get(role) || [];

    if (isMahjub) {
      calculatedList.push({
        role,
        nameIndo: heir.nameIndo,
        nameArabic: heir.nameArabic,
        count: heir.count,
        category: heir.category,
        isMahjub: true,
        mahjubReasons: reasons,
        isAshabah: false,
        fractionNum: 0,
        fractionDen: 1,
        furudhLabel: 'Mahjub Hirman',
        dalil: 'Kaidah Fiqih Mawarith: Seseorang gugur hak warisnya bila ada kerabat yang lebih dekat derajat nasabnya.',
        explanation: reasons.join('; '),
      });
      return;
    }

    // Now assign share for non-mahjub heirs:
    switch (role) {
      case 'husband': {
        const hasChild = hasDescendants;
        const num = 1;
        const den = hasChild ? 4 : 2;
        calculatedList.push({
          role,
          nameIndo: heir.nameIndo,
          nameArabic: heir.nameArabic,
          count: 1,
          category: heir.category,
          isMahjub: false,
          mahjubReasons: [],
          isAshabah: false,
          fractionNum: num,
          fractionDen: den,
          furudhLabel: `1/${den}`,
          dalil: 'QS. An-Nisa: 12',
          explanation: hasChild
            ? 'Mendapat 1/4 karena almarhumah meninggalkan keturunan (anak/cucu).'
            : 'Mendapat 1/2 karena almarhumah tidak meninggalkan keturunan.',
        });
        break;
      }
      case 'wives': {
        const hasChild = hasDescendants;
        const num = 1;
        const den = hasChild ? 8 : 4;
        calculatedList.push({
          role,
          nameIndo: heir.nameIndo,
          nameArabic: heir.nameArabic,
          count: heir.count,
          category: heir.category,
          isMahjub: false,
          mahjubReasons: [],
          isAshabah: false,
          fractionNum: num,
          fractionDen: den,
          furudhLabel: `1/${den}`,
          dalil: 'QS. An-Nisa: 12',
          explanation: `${hasChild ? 'Mendapat 1/8' : 'Mendapat 1/4'} karena almarhum ${
            hasChild ? 'memiliki' : 'tidak memiliki'
          } keturunan. Porsi ini dibagi rata untuk ${heir.count} orang istri.`,
        });
        break;
      }
      case 'daughter': {
        if (numSons > 0) {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: true,
            ashabahType: 'Ashabah bil Ghair',
            ashabahWeight: 1,
            fractionNum: 0,
            fractionDen: 1,
            furudhLabel: 'Ashabah bil Ghair',
            dalil: 'QS. An-Nisa: 11',
            explanation:
              'Menjadi penerima sisa bersama saudara laki-lakinya (anak laki-laki) dengan perbandingan 2 : 1.',
          });
        } else {
          const isSingle = heir.count === 1;
          const num = isSingle ? 1 : 2;
          const den = isSingle ? 2 : 3;
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: false,
            fractionNum: num,
            fractionDen: den,
            furudhLabel: isSingle ? '1/2' : '2/3',
            dalil: 'QS. An-Nisa: 11',
            explanation: isSingle
              ? 'Mendapat 1/2 karena hanya 1 orang anak perempuan tunggal tanpa anak laki-laki.'
              : `Mendapat 2/3 karena berjumlah ${heir.count} orang perempuan tanpa anak laki-laki (dibagi rata).`,
          });
        }
        break;
      }
      case 'son': {
        calculatedList.push({
          role,
          nameIndo: heir.nameIndo,
          nameArabic: heir.nameArabic,
          count: heir.count,
          category: heir.category,
          isMahjub: false,
          mahjubReasons: [],
          isAshabah: true,
          ashabahType: numDaughters > 0 ? 'Ashabah bil Ghair' : 'Ashabah bi Nafsihi',
          ashabahWeight: 2,
          fractionNum: 0,
          fractionDen: 1,
          furudhLabel: numDaughters > 0 ? 'Ashabah bil Ghair (2:1)' : 'Ashabah bi Nafsihi',
          dalil: 'QS. An-Nisa: 11 & HR. Bukhari (Aqlihu lil-Aula)',
          explanation:
            numDaughters > 0
              ? 'Menjadi Ashabah bil Ghair bersama saudari perempuan (rasio 2 bagian untuk laki-laki, 1 untuk wanita).'
              : 'Ashabah bi Nafsihi: mengambil seluruh sisa harta warisan setelah ashabul furudh.',
        });
        break;
      }
      case 'granddaughter': {
        if (numGrandsons > 0) {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: true,
            ashabahType: 'Ashabah bil Ghair',
            ashabahWeight: 1,
            fractionNum: 0,
            fractionDen: 1,
            furudhLabel: 'Ashabah bil Ghair',
            dalil: 'Ijma Ulama & HR. Bukhari',
            explanation: 'Bersama cucu laki-laki menjadi Ashabah bil Ghair (rasio 2:1).',
          });
        } else if (numDaughters === 1) {
          // Takmilah li ats-tsulutsain (penyempurna 2/3)
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: false,
            fractionNum: 1,
            fractionDen: 6,
            furudhLabel: '1/6',
            dalil: 'HR. Bukhari dari Ibnu Mas\'ud ra.',
            explanation:
              'Mendapat 1/6 sebagai penyempurna dua pertiga (takmilatuts tsulutsain) karena hanya ada 1 anak perempuan yang mengambil 1/2.',
          });
        } else {
          const isSingle = heir.count === 1;
          const num = isSingle ? 1 : 2;
          const den = isSingle ? 2 : 3;
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: false,
            fractionNum: num,
            fractionDen: den,
            furudhLabel: isSingle ? '1/2' : '2/3',
            dalil: 'Qiyas atas kedudukan anak perempuan',
            explanation: isSingle
              ? 'Mendapat 1/2 karena cucu perempuan tunggal tanpa adanya anak kandung.'
              : `Mendapat 2/3 dibagi rata untuk ${heir.count} cucu perempuan tanpa anak kandung.`,
          });
        }
        break;
      }
      case 'grandson': {
        calculatedList.push({
          role,
          nameIndo: heir.nameIndo,
          nameArabic: heir.nameArabic,
          count: heir.count,
          category: heir.category,
          isMahjub: false,
          mahjubReasons: [],
          isAshabah: true,
          ashabahType: numGranddaughters > 0 ? 'Ashabah bil Ghair' : 'Ashabah bi Nafsihi',
          ashabahWeight: 2,
          fractionNum: 0,
          fractionDen: 1,
          furudhLabel: numGranddaughters > 0 ? 'Ashabah bil Ghair (2:1)' : 'Ashabah bi Nafsihi',
          dalil: 'HR. Bukhari (Alhiqu al-fara\'idha bi ahliha)',
          explanation: 'Menerima sisa harta (Ashabah) menggantikan kedudukan anak laki-laki.',
        });
        break;
      }
      case 'father': {
        if (numSons > 0 || numGrandsons > 0) {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: 1,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: false,
            fractionNum: 1,
            fractionDen: 6,
            furudhLabel: '1/6',
            dalil: 'QS. An-Nisa: 11',
            explanation: 'Mendapat 1/6 murni karena almarhum meninggalkan anak/cucu laki-laki.',
          });
        } else if (numDaughters > 0 || numGranddaughters > 0) {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: 1,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: true,
            ashabahType: 'Ashabah bi Nafsihi', // Takes 1/6 + residue
            ashabahWeight: 1,
            fractionNum: 1,
            fractionDen: 6,
            furudhLabel: '1/6 + Ashabah',
            dalil: 'QS. An-Nisa: 11 & Sunnah',
            explanation:
              'Mendapat 1/6 sebagai fardh pasti, dan berhak atas sisa (Ashabah) bila ada kelebihan setelah furudh lainnya terbagi.',
          });
        } else {
          // No descendants
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: 1,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: true,
            ashabahType: 'Ashabah bi Nafsihi',
            ashabahWeight: 1,
            fractionNum: 0,
            fractionDen: 1,
            furudhLabel: 'Ashabah bi Nafsihi',
            dalil: 'QS. An-Nisa: 11',
            explanation:
              'Menjadi Ashabah bi Nafsihi (mengambil sisa atau seluruh harta) karena tidak ada keturunan.',
          });
        }
        break;
      }
      case 'mother': {
        const hasChild = hasDescendants;
        const hasTwoPlusSiblings = totalSiblingsCount >= 2;

        if (hasChild || hasTwoPlusSiblings) {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: 1,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: false,
            fractionNum: 1,
            fractionDen: 6,
            furudhLabel: '1/6',
            dalil: 'QS. An-Nisa: 11',
            explanation: hasChild
              ? 'Mendapat 1/6 karena almarhum meninggalkan anak/cucu.'
              : 'Mendapat 1/6 karena almarhum meninggalkan 2 orang saudara atau lebih.',
          });
        } else if (isGharrawain) {
          // Masalah Gharrawain (Umariyatain)
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: 1,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: false,
            fractionNum: 1,
            fractionDen: 3, // handled in special case resolver
            furudhLabel: '1/3 Sisa (Tsulutsul Baqi)',
            dalil: 'Fatwa Khalifah Umar bin Khattab, disepakati Utsman, Ali, Zaid bin Tsabit, dan Jumhur Sahabat',
            explanation:
              'Dalam kasus Al-Gharrawain (Suami/Istri + Ibu + Ayah), Ibu mendapat 1/3 dari SISA setelah bagian pasangan diambil, agar bagian ayah tetap 2x bagian ibu.',
          });
        } else {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: 1,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: false,
            fractionNum: 1,
            fractionDen: 3,
            furudhLabel: '1/3',
            dalil: 'QS. An-Nisa: 11',
            explanation:
              'Mendapat 1/3 harta karena almarhum tidak meninggalkan keturunan dan saudara kurang dari 2 orang.',
          });
        }
        break;
      }
      case 'paternal_grandfather': {
        if (numSons > 0 || numGrandsons > 0) {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: 1,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: false,
            fractionNum: 1,
            fractionDen: 6,
            furudhLabel: '1/6',
            dalil: 'Qiyas atas kedudukan Ayah ketika Ayah tiada',
            explanation: 'Mendapat 1/6 karena ada anak/cucu laki-laki dan ayah sudah wafat.',
          });
        } else if (numDaughters > 0 || numGranddaughters > 0) {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: 1,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: true,
            ashabahType: 'Ashabah bi Nafsihi',
            ashabahWeight: 1,
            fractionNum: 1,
            fractionDen: 6,
            furudhLabel: '1/6 + Ashabah',
            dalil: 'Qiyas atas Ayah saat tidak ada anak laki-laki',
            explanation: 'Mendapat 1/6 sebagai fardh pasti dan mengambil sisa jika masih ada sisa.',
          });
        } else {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: 1,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: true,
            ashabahType: 'Ashabah bi Nafsihi',
            ashabahWeight: 1,
            fractionNum: 0,
            fractionDen: 1,
            furudhLabel: 'Ashabah bi Nafsihi',
            dalil: 'Kedudukan Kakek menggantikan Ayah bila tidak ada ayah',
            explanation: 'Mengambil sisa (Ashabah) bila tidak ada keturunan dan ayah.',
          });
        }
        break;
      }
      case 'paternal_grandmother':
      case 'maternal_grandmother': {
        // Grandmothers share 1/6 equally if both present and unblocked
        const bothPresent =
          !mahjubReasons.has('paternal_grandmother') &&
          !mahjubReasons.has('maternal_grandmother') &&
          numPaternalGrandmother > 0 &&
          numMaternalGrandmother > 0;
        calculatedList.push({
          role,
          nameIndo: heir.nameIndo,
          nameArabic: heir.nameArabic,
          count: 1,
          category: heir.category,
          isMahjub: false,
          mahjubReasons: [],
          isAshabah: false,
          fractionNum: 1,
          fractionDen: bothPresent ? 12 : 6, // 1/6 shared between two = 1/12 each
          furudhLabel: bothPresent ? '1/6 (dibagi 2)' : '1/6',
          dalil: 'Sunnah Nabi SAW & Ketetapan Abu Bakar ra.',
          explanation: bothPresent
            ? 'Nenek dari pihak ayah dan ibu bersekutu berbagi rata bagian 1/6.'
            : 'Mendapat 1/6 tunggal karena tidak ada ibu kandung yang menghalangi.',
        });
        break;
      }
      case 'uterine_sibling': {
        const isSingle = heir.count === 1;
        const num = 1;
        const den = isSingle ? 6 : 3;
        calculatedList.push({
          role,
          nameIndo: heir.nameIndo,
          nameArabic: heir.nameArabic,
          count: heir.count,
          category: heir.category,
          isMahjub: false,
          mahjubReasons: [],
          isAshabah: false,
          fractionNum: num,
          fractionDen: den,
          furudhLabel: isSingle ? '1/6' : '1/3',
          dalil: 'QS. An-Nisa: 12 (Kalaalah li Umm)',
          explanation: isSingle
            ? 'Mendapat 1/6 karena hanya 1 orang saudara/i seibu.'
            : `Mendapat 1/3 dibagi rata sesama saudara/i seibu (${heir.count} orang, pria dan wanita sama rata tanpa rasio 2:1).`,
        });
        break;
      }
      case 'full_brother': {
        calculatedList.push({
          role,
          nameIndo: heir.nameIndo,
          nameArabic: heir.nameArabic,
          count: heir.count,
          category: heir.category,
          isMahjub: false,
          mahjubReasons: [],
          isAshabah: true,
          ashabahType: numFullSisters > 0 ? 'Ashabah bil Ghair' : 'Ashabah bi Nafsihi',
          ashabahWeight: 2,
          fractionNum: 0,
          fractionDen: 1,
          furudhLabel: numFullSisters > 0 ? 'Ashabah bil Ghair (2:1)' : 'Ashabah bi Nafsihi',
          dalil: 'QS. An-Nisa: 176',
          explanation: 'Ashabah mengambil sisa setelah ashabul furudh menerima haknya.',
        });
        break;
      }
      case 'full_sister': {
        if (numFullBrothers > 0) {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: true,
            ashabahType: 'Ashabah bil Ghair',
            ashabahWeight: 1,
            fractionNum: 0,
            fractionDen: 1,
            furudhLabel: 'Ashabah bil Ghair (2:1)',
            dalil: 'QS. An-Nisa: 176',
            explanation: 'Menjadi Ashabah bil Ghair bersama saudara kandung laki-laki.',
          });
        } else if (numDaughters > 0 || numGranddaughters > 0) {
          // Ashabah ma'al ghair
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: true,
            ashabahType: 'Ashabah ma\'al Ghair',
            ashabahWeight: 1,
            fractionNum: 0,
            fractionDen: 1,
            furudhLabel: 'Ashabah ma\'al Ghair',
            dalil: 'Hadits: "Jadikanlah saudari-saudari perempuan bersama anak perempuan sebagai ashabah" (HR. Bukhari)',
            explanation:
              'Menjadi Ashabah ma\'al Ghair bersama anak/cucu perempuan dan mengambil seluruh sisa.',
          });
        } else {
          const isSingle = heir.count === 1;
          const num = isSingle ? 1 : 2;
          const den = isSingle ? 2 : 3;
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: false,
            fractionNum: num,
            fractionDen: den,
            furudhLabel: isSingle ? '1/2' : '2/3',
            dalil: 'QS. An-Nisa: 176',
            explanation: isSingle
              ? 'Mendapat 1/2 karena hanya 1 orang saudari kandung.'
              : `Mendapat 2/3 dibagi rata untuk ${heir.count} orang saudari kandung.`,
          });
        }
        break;
      }
      case 'consanguine_brother': {
        calculatedList.push({
          role,
          nameIndo: heir.nameIndo,
          nameArabic: heir.nameArabic,
          count: heir.count,
          category: heir.category,
          isMahjub: false,
          mahjubReasons: [],
          isAshabah: true,
          ashabahType: numConsanguineSisters > 0 ? 'Ashabah bil Ghair' : 'Ashabah bi Nafsihi',
          ashabahWeight: 2,
          fractionNum: 0,
          fractionDen: 1,
          furudhLabel: numConsanguineSisters > 0 ? 'Ashabah bil Ghair (2:1)' : 'Ashabah bi Nafsihi',
          dalil: 'QS. An-Nisa: 176',
          explanation: 'Ashabah mengambil sisa bila tidak ada saudara kandung.',
        });
        break;
      }
      case 'consanguine_sister': {
        if (numConsanguineBrothers > 0) {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: true,
            ashabahType: 'Ashabah bil Ghair',
            ashabahWeight: 1,
            fractionNum: 0,
            fractionDen: 1,
            furudhLabel: 'Ashabah bil Ghair (2:1)',
            dalil: 'QS. An-Nisa: 176',
            explanation: 'Ashabah bil Ghair bersama saudara seayah laki-laki.',
          });
        } else if (numFullSisters === 1) {
          // Takmilah li ats-tsulutsain
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: false,
            fractionNum: 1,
            fractionDen: 6,
            furudhLabel: '1/6',
            dalil: 'Ijma Shahabat (Takmilatuts Tsulutsain)',
            explanation:
              'Mendapat 1/6 sebagai penyempurna 2/3 karena ada 1 orang saudari kandung yang mengambil 1/2.',
          });
        } else if (numDaughters > 0 || numGranddaughters > 0) {
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: true,
            ashabahType: 'Ashabah ma\'al Ghair',
            ashabahWeight: 1,
            fractionNum: 0,
            fractionDen: 1,
            furudhLabel: 'Ashabah ma\'al Ghair',
            dalil: 'HR. Bukhari',
            explanation:
              'Menjadi Ashabah ma\'al Ghair bersama anak/cucu perempuan karena tidak ada saudara/i kandung.',
          });
        } else {
          const isSingle = heir.count === 1;
          const num = isSingle ? 1 : 2;
          const den = isSingle ? 2 : 3;
          calculatedList.push({
            role,
            nameIndo: heir.nameIndo,
            nameArabic: heir.nameArabic,
            count: heir.count,
            category: heir.category,
            isMahjub: false,
            mahjubReasons: [],
            isAshabah: false,
            fractionNum: num,
            fractionDen: den,
            furudhLabel: isSingle ? '1/2' : '2/3',
            dalil: 'QS. An-Nisa: 176',
            explanation: isSingle
              ? 'Mendapat 1/2 tunggal (tidak ada saudara kandung).'
              : `Mendapat 2/3 dibagi rata untuk ${heir.count} orang saudari seayah.`,
          });
        }
        break;
      }
      case 'full_nephew':
      case 'consanguine_nephew':
      case 'full_uncle':
      case 'consanguine_uncle': {
        calculatedList.push({
          role,
          nameIndo: heir.nameIndo,
          nameArabic: heir.nameArabic,
          count: heir.count,
          category: heir.category,
          isMahjub: false,
          mahjubReasons: [],
          isAshabah: true,
          ashabahType: 'Ashabah bi Nafsihi',
          ashabahWeight: 1,
          fractionNum: 0,
          fractionDen: 1,
          furudhLabel: 'Ashabah bi Nafsihi',
          dalil: 'HR. Bukhari (Al-Aqrabi fal-Aqrabi)',
          explanation: 'Mendapat sisa harta sebagai kerabat laki-laki terdekat yang masih ada.',
        });
        break;
      }
    }
  });

  const activeNonMahjub = calculatedList.filter((h) => !h.isMahjub);

  // 4. PENENTUAN ASAL MASALAH & HITUNGAN SAHAM
  let initialAsalMasalah = 1;
  let finalAsalMasalah = 1;
  let caseType: FaraidhResult['caseType'] = 'Adil (Normal)';
  let caseDescription = 'Pembagian waris normal (total saham tepat sama dengan asal masalah atau sisa diambil ashabah).';
  let hasTashih = false;
  let tashihMultiplier = 1;

  interface IntermediateResult {
    role: HeirRole;
    nameIndo: string;
    nameArabic: string;
    count: number;
    category: HeirInput['category'];
    isMahjub: boolean;
    furudhShare: CalculatedHeir['furudhShare'];
    fractionNum: number;
    fractionDen: number;
    initialSaham: number;
    adjustedSaham: number;
    percentage: number;
    totalAmount: number;
    amountPerPerson: number;
    dalilDescription: string;
    explanation: string;
  }

  const finalHeirResults: IntermediateResult[] = [];

  // Special Handling: GHARRAWAIN (UMARIYATAIN)
  if (isGharrawain) {
    caseType = 'Gharrawain';
    caseDescription =
      'Kasus Gharrawain (Umariyatain): Diselesaikan dengan kaidah Sayyidina Umar ra. Ibu mendapat 1/3 dari sisa setelah bagian suami/istri dikeluarkan, sehingga ayah mendapat 2/3 dari sisa (menjaga rasio 2:1 pria dan wanita pada derajat setara).';

    if (numHusband > 0) {
      // Suami (1/2), Ibu (1/3 sisa), Ayah (Sisa = 2/3 sisa)
      // Asal Masalah = 6
      // Suami = 3 (1/2 dari 6)
      // Sisa = 3 -> Ibu = 1 (1/3 dari 3), Ayah = 2 (2/3 dari 3)
      initialAsalMasalah = 6;
      finalAsalMasalah = 6;

      calculatedList.forEach((h) => {
        if (h.role === 'husband') {
          finalHeirResults.push({
            ...h,
            furudhShare: '1/2',
            initialSaham: 3,
            adjustedSaham: 3,
            percentage: (3 / 6) * 100,
            totalAmount: (netEstate * 3) / 6,
            amountPerPerson: (netEstate * 3) / 6,
            dalilDescription: h.dalil,
          });
        } else if (h.role === 'mother') {
          finalHeirResults.push({
            ...h,
            furudhShare: '1/3 sisa',
            fractionNum: 1,
            fractionDen: 6,
            initialSaham: 1,
            adjustedSaham: 1,
            percentage: (1 / 6) * 100,
            totalAmount: (netEstate * 1) / 6,
            amountPerPerson: (netEstate * 1) / 6,
            dalilDescription: h.dalil,
          });
        } else if (h.role === 'father') {
          finalHeirResults.push({
            ...h,
            furudhShare: 'Ashabah bi Nafsihi',
            fractionNum: 2,
            fractionDen: 6,
            initialSaham: 2,
            adjustedSaham: 2,
            percentage: (2 / 6) * 100,
            totalAmount: (netEstate * 2) / 6,
            amountPerPerson: (netEstate * 2) / 6,
            dalilDescription: h.dalil,
          });
        }
      });
    } else {
      // Istri (1/4), Ibu (1/3 sisa), Ayah (Sisa = 2/3 sisa)
      // Asal Masalah = 4 (atau 12)
      // Istri = 1/4 -> 1 dari 4. Sisa = 3.
      // Ibu = 1/3 dari 3 = 1.
      // Ayah = 2/3 dari 3 = 2.
      initialAsalMasalah = 4;
      finalAsalMasalah = 4;

      calculatedList.forEach((h) => {
        if (h.role === 'wives') {
          finalHeirResults.push({
            ...h,
            furudhShare: '1/4',
            initialSaham: 1,
            adjustedSaham: 1,
            percentage: (1 / 4) * 100,
            totalAmount: (netEstate * 1) / 4,
            amountPerPerson: (netEstate * 1) / 4 / h.count,
            dalilDescription: h.dalil,
          });
        } else if (h.role === 'mother') {
          finalHeirResults.push({
            ...h,
            furudhShare: '1/3 sisa',
            fractionNum: 1,
            fractionDen: 4,
            initialSaham: 1,
            adjustedSaham: 1,
            percentage: (1 / 4) * 100,
            totalAmount: (netEstate * 1) / 4,
            amountPerPerson: (netEstate * 1) / 4,
            dalilDescription: h.dalil,
          });
        } else if (h.role === 'father') {
          finalHeirResults.push({
            ...h,
            furudhShare: 'Ashabah bi Nafsihi',
            fractionNum: 2,
            fractionDen: 4,
            initialSaham: 2,
            adjustedSaham: 2,
            percentage: (2 / 4) * 100,
            totalAmount: (netEstate * 2) / 4,
            amountPerPerson: (netEstate * 2) / 4,
            dalilDescription: h.dalil,
          });
        }
      });
    }
  } else {
    // STANDARD / GENERAL CALCULATION FLOW
    const furudhHeirs = activeNonMahjub.filter((h) => !h.isAshabah || (h.fractionNum > 0 && h.fractionDen > 1));
    const ashabahHeirs = activeNonMahjub.filter((h) => h.isAshabah);

    const denominators = furudhHeirs.map((h) => h.fractionDen);
    initialAsalMasalah = denominators.length > 0 ? lcmArray(denominators) : 1;

    // Standard valid asal masalah in Fiqh: 2, 3, 4, 6, 8, 12, 24
    if (initialAsalMasalah === 1 && ashabahHeirs.length > 0) {
      // Only Ashabah: Asal masalah = total heads weight
      const totalWeight = ashabahHeirs.reduce(
        (sum, h) => sum + (h.ashabahWeight || 1) * h.count,
        0
      );
      initialAsalMasalah = totalWeight > 0 ? totalWeight : 1;
    }

    // Step a: calculate preliminary saham for furudh
    let allocatedSaham = 0;
    const furudhSahamMap = new Map<HeirRole, number>();

    furudhHeirs.forEach((h) => {
      const share = (initialAsalMasalah / h.fractionDen) * h.fractionNum;
      furudhSahamMap.set(h.role, share);
      allocatedSaham += share;
    });

    const remainderSaham = initialAsalMasalah - allocatedSaham;

    // Check Case: 'AUL (Allocated > Asal Masalah)
    if (allocatedSaham > initialAsalMasalah) {
      caseType = 'Aul';
      finalAsalMasalah = allocatedSaham;
      caseDescription = `Terjadi 'Aul: Jumlah saham seluruh Ashabul Furudh (${allocatedSaham}) melebihi Asal Masalah semula (${initialAsalMasalah}). Sesuai kaidah Fiqh (mulai diputuskan oleh Khalifah Umar bin Khattab ra.), Asal Masalah dinaikkan menjadi ${allocatedSaham} sehingga setiap ahli waris berkurang porsinya secara proporsional dan adil.`;

      furudhHeirs.forEach((h) => {
        const saham = furudhSahamMap.get(h.role) || 0;
        const pct = (saham / finalAsalMasalah) * 100;
        const groupAmt = (netEstate * saham) / finalAsalMasalah;
        finalHeirResults.push({
          role: h.role,
          nameIndo: h.nameIndo,
          nameArabic: h.nameArabic,
          count: h.count,
          category: h.category,
          isMahjub: false,
          furudhShare: h.furudhLabel as CalculatedHeir['furudhShare'],
          fractionNum: h.fractionNum,
          fractionDen: h.fractionDen,
          initialSaham: saham,
          adjustedSaham: saham,
          percentage: pct,
          totalAmount: groupAmt,
          amountPerPerson: groupAmt / h.count,
          dalilDescription: h.dalil,
          explanation: `${h.explanation} Mengalami penyesuaian 'Aul dari ${initialAsalMasalah} menjadi ${finalAsalMasalah}.`,
        });
      });

      // Ashabah get zero in 'Aul because no remainder is left
      ashabahHeirs.forEach((h) => {
        // If father had 1/6 + Ashabah, he already received his 1/6 in furudhHeirs!
        if (h.fractionNum === 0) {
          finalHeirResults.push({
            role: h.role,
            nameIndo: h.nameIndo,
            nameArabic: h.nameArabic,
            count: h.count,
            category: h.category,
            isMahjub: false,
            furudhShare: h.furudhLabel as CalculatedHeir['furudhShare'],
            fractionNum: 0,
            fractionDen: 1,
            initialSaham: 0,
            adjustedSaham: 0,
            percentage: 0,
            totalAmount: 0,
            amountPerPerson: 0,
            dalilDescription: h.dalil,
            explanation:
              'Tidak mendapat bagian sisa karena seluruh saham telah habis terdistribusi kepada Ashabul Furudh yang mengalami \'Aul.',
          });
        }
      });
    } else if (remainderSaham > 0 && ashabahHeirs.length > 0) {
      // CASE ASHABAH TAKES THE REMAINDER (Normal 'Adil)
      caseType = 'Adil (Normal)';
      finalAsalMasalah = initialAsalMasalah;
      caseDescription = `Pembagian Normal ('Adil): Sisa ${remainderSaham} bagian saham dari Asal Masalah ${initialAsalMasalah} diberikan kepada Ashabah.`;

      // 1. Add Furudh results
      furudhHeirs.forEach((h) => {
        const saham = furudhSahamMap.get(h.role) || 0;
        // If it's father having 1/6 + ashabah, his ashabah share will be added below
        if (h.role !== 'father' || numDaughters === 0) {
          const pct = (saham / finalAsalMasalah) * 100;
          const groupAmt = (netEstate * saham) / finalAsalMasalah;
          finalHeirResults.push({
            role: h.role,
            nameIndo: h.nameIndo,
            nameArabic: h.nameArabic,
            count: h.count,
            category: h.category,
            isMahjub: false,
            furudhShare: h.furudhLabel as CalculatedHeir['furudhShare'],
            fractionNum: h.fractionNum,
            fractionDen: h.fractionDen,
            initialSaham: saham,
            adjustedSaham: saham,
            percentage: pct,
            totalAmount: groupAmt,
            amountPerPerson: groupAmt / h.count,
            dalilDescription: h.dalil,
            explanation: h.explanation,
          });
        }
      });

      // 2. Allocate remainder to Ashabah
      // Distribute by weights
      const totalAshabahWeight = ashabahHeirs.reduce(
        (acc, curr) => acc + (curr.ashabahWeight || 1) * curr.count,
        0
      );

      ashabahHeirs.forEach((h) => {
        const weight = (h.ashabahWeight || 1) * h.count;
        const ashabahPortionOfRemainder = remainderSaham * (weight / totalAshabahWeight);
        
        let initialS = ashabahPortionOfRemainder;
        let adjustedS = ashabahPortionOfRemainder;
        let desc = h.explanation;

        // If father gets 1/6 + remainder:
        if (h.role === 'father' && (numDaughters > 0 || numGranddaughters > 0)) {
          const fardhSaham = furudhSahamMap.get('father') || 0;
          initialS = fardhSaham + ashabahPortionOfRemainder;
          adjustedS = initialS;
          desc += ` Mengambil 1/6 (${fardhSaham} saham) ditambah sisa ashabah (${ashabahPortionOfRemainder.toFixed(2)} saham).`;
        }

        const pct = (adjustedS / finalAsalMasalah) * 100;
        const groupAmt = (netEstate * adjustedS) / finalAsalMasalah;

        finalHeirResults.push({
          role: h.role,
          nameIndo: h.nameIndo,
          nameArabic: h.nameArabic,
          count: h.count,
          category: h.category,
          isMahjub: false,
          furudhShare: h.furudhLabel as CalculatedHeir['furudhShare'],
          fractionNum: 0,
          fractionDen: 1,
          initialSaham: initialS,
          adjustedSaham: adjustedS,
          percentage: pct,
          totalAmount: groupAmt,
          amountPerPerson: groupAmt / h.count,
          dalilDescription: h.dalil,
          explanation: desc,
        });
      });
    } else if (remainderSaham > 0 && ashabahHeirs.length === 0) {
      // CASE RADD (Surplus returned to Ashabul Furudh other than spouse)
      caseType = 'Radd';
      const hasSpouse = furudhHeirs.some((h) => h.role === 'husband' || h.role === 'wives');
      const raddEligibleHeirs = furudhHeirs.filter(
        (h) => h.role !== 'husband' && h.role !== 'wives'
      );

      if (raddEligibleHeirs.length === 0) {
        // Only spouse remains (rare, Baitul Mal receives remainder in classic fiqh, or spouse in KHI)
        caseDescription =
          'Hanya ada suami/istri tanpa kerabat lain. Menurut sebagian ulama kontemporer / KHI pasal 186, seluruh sisa diberikan kepada pasangan.';
        furudhHeirs.forEach((h) => {
          finalHeirResults.push({
            role: h.role,
            nameIndo: h.nameIndo,
            nameArabic: h.nameArabic,
            count: h.count,
            category: h.category,
            isMahjub: false,
            furudhShare: h.furudhLabel as CalculatedHeir['furudhShare'],
            fractionNum: 1,
            fractionDen: 1,
            initialSaham: 1,
            adjustedSaham: 1,
            percentage: 100,
            totalAmount: netEstate,
            amountPerPerson: netEstate / h.count,
            dalilDescription: h.dalil,
            explanation: `${h.explanation} Menerima sisa harta karena tidak ada ahli waris lainnya.`,
          });
        });
        finalAsalMasalah = 1;
      } else if (!hasSpouse) {
        // Radd without spouse: Just sum the initial shares of eligible heirs
        const sumRaddSaham = raddEligibleHeirs.reduce(
          (sum, h) => sum + (furudhSahamMap.get(h.role) || 0),
          0
        );
        finalAsalMasalah = sumRaddSaham;
        caseDescription = `Terjadi Radd (tanpa pasangan): Saham furudh (${sumRaddSaham}) lebih kecil dari Asal Masalah (${initialAsalMasalah}) dan tidak ada Ashabah. Sisa harta dikembalikan secara proporsional kepada seluruh Ashabul Furudh yang ada, sehingga Asal Masalah disederhanakan menjadi ${sumRaddSaham}.`;

        raddEligibleHeirs.forEach((h) => {
          const saham = furudhSahamMap.get(h.role) || 0;
          const pct = (saham / finalAsalMasalah) * 100;
          const groupAmt = (netEstate * saham) / finalAsalMasalah;
          finalHeirResults.push({
            role: h.role,
            nameIndo: h.nameIndo,
            nameArabic: h.nameArabic,
            count: h.count,
            category: h.category,
            isMahjub: false,
            furudhShare: h.furudhLabel as CalculatedHeir['furudhShare'],
            fractionNum: h.fractionNum,
            fractionDen: h.fractionDen,
            initialSaham: saham,
            adjustedSaham: saham,
            percentage: pct,
            totalAmount: groupAmt,
            amountPerPerson: groupAmt / h.count,
            dalilDescription: h.dalil,
            explanation: `${h.explanation} Mendapat tambahan pengembalian sisa harta (Radd) secara proporsional.`,
          });
        });
      } else {
        // Radd with spouse:
        // Spouse gets their fixed share (1/2, 1/4, or 1/8) from their denominator.
        // Remainder of estate is distributed among non-spouse heirs according to their relative ratio.
        const spouseHeir = furudhHeirs.find((h) => h.role === 'husband' || h.role === 'wives')!;
        const spouseDen = spouseHeir.fractionDen;
        const spouseAmount = netEstate / spouseDen;
        const remainderForRadd = netEstate - spouseAmount;

        const sumNonSpouseSaham = raddEligibleHeirs.reduce(
          (sum, h) => sum + (furudhSahamMap.get(h.role) || 0),
          0
        );

        finalAsalMasalah = spouseDen * sumNonSpouseSaham;
        caseDescription = `Terjadi Radd (dengan pasangan): Pasangan menerima fardh murni (${spouseHeir.furudhLabel}), dan sisa harta dikembalikan sepenuhnya secara proporsional kepada kerabat nasab (Ashabul Furudh non-pasangan) sesuai kesepakatan Jumhur Ulama.`;

        // Add spouse
        finalHeirResults.push({
          role: spouseHeir.role,
          nameIndo: spouseHeir.nameIndo,
          nameArabic: spouseHeir.nameArabic,
          count: spouseHeir.count,
          category: spouseHeir.category,
          isMahjub: false,
          furudhShare: spouseHeir.furudhLabel as CalculatedHeir['furudhShare'],
          fractionNum: 1,
          fractionDen: spouseDen,
          initialSaham: sumNonSpouseSaham,
          adjustedSaham: sumNonSpouseSaham,
          percentage: (1 / spouseDen) * 100,
          totalAmount: spouseAmount,
          amountPerPerson: spouseAmount / spouseHeir.count,
          dalilDescription: spouseHeir.dalil,
          explanation: `${spouseHeir.explanation} Menurut Jumhur Ulama, pasangan tidak berhak atas tambahan Radd bila ada kerabat nasab.`,
        });

        // Add eligible heirs
        raddEligibleHeirs.forEach((h) => {
          const saham = furudhSahamMap.get(h.role) || 0;
          const ratio = saham / sumNonSpouseSaham;
          const groupAmt = remainderForRadd * ratio;
          const adjustedS = saham * (spouseDen - 1);
          finalHeirResults.push({
            role: h.role,
            nameIndo: h.nameIndo,
            nameArabic: h.nameArabic,
            count: h.count,
            category: h.category,
            isMahjub: false,
            furudhShare: h.furudhLabel as CalculatedHeir['furudhShare'],
            fractionNum: h.fractionNum,
            fractionDen: h.fractionDen,
            initialSaham: saham,
            adjustedSaham: adjustedS,
            percentage: (groupAmt / netEstate) * 100,
            totalAmount: groupAmt,
            amountPerPerson: groupAmt / h.count,
            dalilDescription: h.dalil,
            explanation: `${h.explanation} Menerima tambahan sisa (Radd) proporsional setelah bagian pasangan dikeluarkan.`,
          });
        });
      }
    } else {
      // Exactly equals Asal Masalah (Adil without remainder)
      caseType = 'Adil (Normal)';
      finalAsalMasalah = initialAsalMasalah;
      caseDescription = `Pembagian Normal ('Adil): Seluruh saham pas (${allocatedSaham} dari ${initialAsalMasalah}) habis dibagikan kepada Ashabul Furudh.`;

      furudhHeirs.forEach((h) => {
        const saham = furudhSahamMap.get(h.role) || 0;
        const pct = (saham / finalAsalMasalah) * 100;
        const groupAmt = (netEstate * saham) / finalAsalMasalah;
        finalHeirResults.push({
          role: h.role,
          nameIndo: h.nameIndo,
          nameArabic: h.nameArabic,
          count: h.count,
          category: h.category,
          isMahjub: false,
          furudhShare: h.furudhLabel as CalculatedHeir['furudhShare'],
          fractionNum: h.fractionNum,
          fractionDen: h.fractionDen,
          initialSaham: saham,
          adjustedSaham: saham,
          percentage: pct,
          totalAmount: groupAmt,
          amountPerPerson: groupAmt / h.count,
          dalilDescription: h.dalil,
          explanation: h.explanation,
        });
      });
    }
  }

  // Check Tashih (Pecahan per kepala)
  // If in any group, adjustedSaham % count != 0 when adjustedSaham is integer
  let needsTashih = false;
  const multipliers: number[] = [];

  finalHeirResults.forEach((h) => {
    if (h.count > 1 && Number.isInteger(h.adjustedSaham)) {
      const g = gcd(Math.round(h.adjustedSaham), h.count);
      const m = h.count / g;
      if (m > 1) {
        needsTashih = true;
        multipliers.push(m);
      }
    }
  });

  if (needsTashih && multipliers.length > 0) {
    hasTashih = true;
    tashihMultiplier = lcmArray(multipliers);
  }

  // Add mahjub heirs to results for complete transparency
  calculatedList
    .filter((h) => h.isMahjub)
    .forEach((h) => {
      finalHeirResults.push({
        role: h.role,
        nameIndo: h.nameIndo,
        nameArabic: h.nameArabic,
        count: h.count,
        category: h.category,
        isMahjub: true,
        furudhShare: 'Mahjub Hirman',
        fractionNum: 0,
        fractionDen: 1,
        initialSaham: 0,
        adjustedSaham: 0,
        percentage: 0,
        totalAmount: 0,
        amountPerPerson: 0,
        dalilDescription: h.dalil,
        explanation: h.explanation,
      });
    });

  // Steps documentation
  steps.push({
    title: 'Langkah 2: Pemeriksaan Status Hijab (Hirman & Nuqshan)',
    description: 'Menyeleksi ahli waris yang berhak dan mengidentifikasi yang terhalang (Mahjub):',
    details: [
      `Ahli Waris Berhak: ${finalHeirResults.filter((h) => !h.isMahjub).map((h) => `${h.nameIndo} (${h.count} org)`).join(', ') || 'Tidak ada'}`,
      ...(mahjubReasons.size > 0
        ? Array.from(mahjubReasons.entries()).map(
            ([role, reasons]) =>
              `❌ ${INITIAL_HEIRS_LIST.find((x) => x.role === role)?.nameIndo}: ${reasons.join(', ')}`
          )
        : ['Tidak ada ahli waris yang mengalami Hijab Hirman (seluruhnya berhak mendapatkan warisan).']),
    ],
  });

  steps.push({
    title: 'Langkah 3: Penetapan Porsi Furudh Muqaddarah & Ashabah',
    description: 'Menentukan bagian pasti berdasarkan ayat-ayat Al-Qur\'an dan hadits:',
    details: finalHeirResults
      .filter((h) => !h.isMahjub)
      .map(
        (h) =>
          `• ${h.nameIndo} (${h.count} org): ${h.furudhShare} ➔ ${h.explanation} (${h.dalilDescription})`
      ),
  });

  steps.push({
    title: `Langkah 4: Penentuan Asal Masalah & Kasus (${caseType})`,
    description: caseDescription,
    details: [
      `Asal Masalah Awal: ${initialAsalMasalah}`,
      `Asal Masalah Akhir (setelah penyesuaian): ${finalAsalMasalah}`,
      hasTashih
        ? `Tashih: Saham dikalikan ${tashihMultiplier} agar setiap individu mendapatkan bilangan bulat tanpa pecahan.`
        : 'Tidak memerlukan Tashih tambahan karena saham dapat terbagi secara proporsional.',
    ],
  });

  steps.push({
    title: 'Langkah 5: Konversi Nilai Rupiah Terinci',
    description: `Mengalikan persentase saham tiap ahli waris dengan Tirkah Bersih (${formatRupiah(netEstate)}):`,
    details: finalHeirResults
      .filter((h) => !h.isMahjub)
      .map(
        (h) =>
          `• ${h.nameIndo}: Total ${formatRupiah(h.totalAmount)} (${h.percentage.toFixed(2)}%) ${
            h.count > 1 ? `➔ @ ${formatRupiah(h.amountPerPerson)} / orang` : ''
          }`
      ),
  });

  const calculatedHeirs: CalculatedHeir[] = finalHeirResults.map((h) => ({
    role: h.role,
    nameIndo: h.nameIndo,
    nameArabic: h.nameArabic,
    count: h.count,
    category: h.category,
    isMahjub: h.isMahjub,
    mahjubBy: h.isMahjub ? mahjubReasons.get(h.role) : undefined,
    furudhShare: h.furudhShare,
    shareFractionNum: h.fractionNum,
    shareFractionDen: h.fractionDen,
    initialSaham: h.initialSaham,
    adjustedSaham: h.adjustedSaham,
    percentage: h.percentage,
    totalAmount: h.totalAmount,
    amountPerPerson: h.amountPerPerson,
    dalilDescription: h.dalilDescription,
    explanation: h.explanation,
  }));

  return {
    deceasedGender,
    grossEstate: deductions.grossEstate,
    totalDeductions,
    netEstate,
    bequestWarning,
    heirs: calculatedHeirs,
    activeHeirs: calculatedHeirs.filter((h) => !h.isMahjub),
    mahjubHeirs: calculatedHeirs.filter((h) => h.isMahjub),
    initialAsalMasalah,
    finalAsalMasalah,
    caseType,
    caseDescription,
    hasTashih,
    tashihMultiplier,
    steps,
  };
}
