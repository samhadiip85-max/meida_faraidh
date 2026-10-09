import React, { useState } from 'react';
import { NAJIS_LIST } from '../../data/thaharahData';
import { NajisTier } from '../../types/thaharah';
import {
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  Droplets,
  Info,
  Footprints,
  Clock,
  AlertTriangle,
  Check,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

const COMMON_NAJIS_SCENARIOS = [
  {
    id: 'kencing_bayi_lk',
    title: 'Kencing Bayi Laki-laki (< 2 Tahun, ASI saja)',
    tier: 'mukhaffafah',
    tierLabel: 'Mukhaffafah (Ringan)',
    steps: [
      '1. Jika masih basah, serap cairan urin dengan kain atau tisu kering.',
      '2. Ambil air mutlak di telapak tangan atau semprotan.',
      '3. Percikkan air secara merata di atas seluruh area yang terkena air kencing hingga basah merata.',
      '4. Tidak disyaratkan air harus mengalir atau diperas. Setelah basah terpercik, pakaian suci kembali.',
    ],
    note: 'Jika bayi perempuan atau bayi laki-laki sudah makan selain ASI/obat, najisnya berstatus Mutawassithah (wajib disiram hingga air mengalir).',
  },
  {
    id: 'darah_kotoran',
    title: 'Kotoran Hewan / Darah / Muntah pada Pakaian',
    tier: 'mutawassithah',
    tierLabel: 'Mutawassithah (Sedang - \'Ainiyah)',
    steps: [
      '1. Buang dan bersihkan wujud benda najis (feses/darah/muntah) terlebih dahulu.',
      '2. Siram dan basuh dengan air mutlak yang mengalir.',
      '3. Cuci sampai HILANG 3 sifat najis: Bau, Rasa, dan Warnanya.',
      '4. Jika bau atau warna sangat membandel setelah digosok berulang kali, hukumnya dimaafkan (ma\'fu).',
    ],
    note: 'Air harus didatangkan/disiramkan ke pakaian najis, bukan pakaian najis yang dicelupkan ke dalam ember kecil berisi air sedikit.',
  },
  {
    id: 'jilatan_anjing',
    title: 'Jilatan Anjing / Babi pada Piring atau Pakaian',
    tier: 'mughallazhah',
    tierLabel: 'Mughallazhah (Berat)',
    steps: [
      '1. Bersihkan sisa air liur atau kotoran najis.',
      '2. Siapkan air mutlak dan debu/tanah yang suci.',
      '3. Basuh area yang terkena sebanyak 7 kali basuhan air mengalir.',
      '4. Wajib mencampurkan debu/tanah suci pada salah satu dari 7 basuhan tersebut (paling utama basuhan pertama/kedua).',
      '5. Bilas hingga bersih dan suci kembali.',
    ],
    note: 'Sabda Nabi SAW: "Menyucikan bejana salah seorang di antara kalian jika dijilat anjing adalah dengan membasuhnya 7 kali, yang pertamanya dicampur tanah" (HR. Muslim).',
  },
];

export function NajisGuide() {
  const [activeMainTab, setActiveMainTab] = useState<'najis' | 'istinja' | 'khuff'>('najis');
  const [selectedTier, setSelectedTier] = useState<NajisTier>('mukhaffafah');
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('kencing_bayi_lk');

  const currentNajis = NAJIS_LIST.find((n) => n.tier === selectedTier)!;
  const currentScenario = COMMON_NAJIS_SCENARIOS.find((s) => s.id === selectedScenarioId)!;

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <ShieldAlert className="w-4 h-4" />
          <span>BAB 1: Fiqih Thaharah · Kesucian Benda & Ibadah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Najis, Istinja' & Mengusap Khuff (Masah 'alal Khuffain)
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Pensucian badan, pakaian, dan tempat dari benda najis adalah syarat mutlak keabsahan shalat.
          Modul ini memuat 3 pembahasan esensial: <strong>Klasifikasi & Pensucian 3 Tingkatan Najis</strong>,
          <strong>Adab & Fiqih Istinjā'</strong>, serta <strong>Rukhsah Keringanan Mengusap Sepatu Khuff</strong>.
        </p>
      </div>

      {/* Main Switcher Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-3">
        {[
          { id: 'najis', label: '1. Tiga Tingkatan Najis & Cara Menyucikannya' },
          { id: 'istinja', label: '2. Fiqih Istinjā\' & Adab Buang Hajat' },
          { id: 'khuff', label: '3. Fiqih Mengusap Sepatu Khuff (Khuffain)' },
        ].map((tab) => {
          const isSelected = activeMainTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveMainTab(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                isSelected
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ============================================================ */}
      {/* TAB 1: TIGA TINGKATAN NAJIS */}
      {/* ============================================================ */}
      {activeMainTab === 'najis' && (
        <div className="space-y-6">
          {/* Simulator Interaktif Skenario Praktis */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Sparkles className="w-4 h-4" />
              <span>Praktik Kasus: Pilih Peristiwa Najis untuk Melihat Cara Pensuciannya</span>
            </div>
            <p className="text-xs text-stone-500">
              Klik salah satu contoh peristiwa najis di bawah ini untuk melihat prosedur pensucian yang sah menurut syariat:
            </p>

            <div className="flex flex-wrap gap-2">
              {COMMON_NAJIS_SCENARIOS.map((sc) => {
                const isSelected = selectedScenarioId === sc.id;
                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => setSelectedScenarioId(sc.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs font-semibold'
                        : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                    }`}
                  >
                    {sc.title}
                  </button>
                );
              })}
            </div>

            {/* Selected Scenario Box */}
            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
                <h3 className="font-bold text-sm text-stone-900">{currentScenario.title}</h3>
                <span
                  className={`px-2.5 py-0.5 rounded font-bold text-[11px] ${
                    currentScenario.tier === 'mukhaffafah'
                      ? 'bg-sky-100 text-sky-900 border border-sky-300'
                      : currentScenario.tier === 'mutawassithah'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-rose-100 text-rose-900 border border-rose-300'
                  }`}
                >
                  {currentScenario.tierLabel}
                </span>
              </div>

              <div className="space-y-1.5">
                <strong className="text-stone-900 block font-semibold">
                  Tata Cara Pensucian Syar'i:
                </strong>
                <ul className="space-y-1.5">
                  {currentScenario.steps.map((st, i) => (
                    <li key={i} className="p-2 bg-white rounded border border-stone-200 font-medium text-stone-800">
                      {st}
                    </li>
                  ))}
                </ul>
              </div>

              {currentScenario.note && (
                <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{currentScenario.note}</span>
                </div>
              )}
            </div>
          </div>

          {/* 3 Tingkatan Najis Ensiklopedia */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg font-bold text-stone-900 font-serif">
                Eksplorasi Rinci 3 Kategori Najis
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Pahami batasan benda najis dan dalil pensuciannya dalam Fiqih Mazhab Syafi'i:
              </p>
            </div>

            {/* Tier Tabs */}
            <div className="flex flex-wrap gap-2">
              {NAJIS_LIST.map((n) => {
                const isSelected = selectedTier === n.tier;
                return (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => setSelectedTier(n.tier)}
                    className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                    }`}
                  >
                    {n.name.split('(')[0]}
                  </button>
                );
              })}
            </div>

            {/* Selected Tier View */}
            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
              <div className="flex items-baseline justify-between border-b border-stone-200/80 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                    Kategori
                  </span>
                  <h3 className="text-base font-bold text-stone-900 mt-0.5">{currentNajis.name}</h3>
                </div>
                <span className="text-sm font-arabic text-stone-600 bg-white px-3 py-1 rounded border border-stone-200">
                  {currentNajis.tierArabic}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1.5">
                  <strong className="text-stone-900 block font-semibold">Contoh Benda Najis:</strong>
                  <ul className="space-y-1 text-stone-600 list-disc list-inside">
                    {currentNajis.examples.map((ex, i) => (
                      <li key={i}>{ex}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1.5">
                  <strong className="text-stone-900 block font-semibold">Cara Menyucikan:</strong>
                  <ul className="space-y-1 text-stone-600 list-disc list-inside">
                    {currentNajis.cleansingMethod.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-200/80">
                <strong>Dasar Dalil: </strong>
                {currentNajis.dalil}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 2: FIQIH ISTINJA' & ADAB BUANG HAJAT */}
      {/* ============================================================ */}
      {activeMainTab === 'istinja' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Hakekat & Alat Istinjā' (الِاسْتِنْجَاء)
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Istinjā' secara bahasa artinya memutus atau melepaskan diri. Secara syariat adalah membersihkan apa yang keluar dari qubul (saluran kemih) dan dubur (saluran kotoran) berupa air kencing atau tinja untuk mensucikan badan sebelum melaksanakan shalat.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2">
                <span className="font-bold text-emerald-950 block text-sm">
                  1. Istinja' Menggunakan Air Mutlak (Paling Utama)
                </span>
                <p className="text-stone-700 leading-relaxed">
                  Air adalah alat istinja' paling sempurna karena dapat menghilangkan wujud fisik najis (*'ain*) sekaligus bekas bau, rasa, dan warnanya. Cara terbaik menurut sunnah adalah menggabungkan batu/tisu terlebih dahulu untuk mengangkat wujud najis, kemudian disempurnakan dengan air.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 block text-sm">
                  2. Istinja' dengan Batu / Benda Padat Kering (Tisu)
                </span>
                <p className="text-stone-700 leading-relaxed">
                  Syariat membolehkan bersuci menggunakan batu atau benda padat kering yang suci (seperti tisu kering) meskipun air tersedia, dengan syarat terpenuhi ketentuan syar'i.
                </p>
              </div>
            </div>

            {/* Syarat Sah Istinja dengan Batu/Tisu */}
            <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2 text-xs">
              <span className="font-bold text-amber-950 block text-sm">
                5 Syarat Sah Istinjā' Menggunakan Batu atau Tisu Kering:
              </span>
              <ul className="space-y-1 list-disc list-inside text-stone-700">
                <li>Menggunakan minimal 3 kali usapan (3 buah batu, atau 1 batu/tisu yang memiliki 3 sisi bersih).</li>
                <li>Dapat membersihkan tempat najis hingga bersih.</li>
                <li>Najis yang keluar belum mengering (*lam yajiff*).</li>
                <li>Najis belum berpindah atau melampaui area kemaluan atau lipatan pantat (*lam yantaqil*).</li>
                <li>Najis tidak tercampur oleh najis lain atau cairan asing (seperti cipratan air kotor).</li>
                <li>Benda yang dipakai suci, padat, kesat, dan bukan benda yang dimuliakan (bukan tulang makanan jin, bukan makanan, bukan kertas bertuliskan ayat Al-Qur'an/ilmu).</li>
              </ul>
            </div>
          </div>

          {/* Adab Buang Hajat */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              10 Adab Buang Hajat & Etika Masuk Kamar Mandi (WC)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block">1. Mendahulukan Kaki Kiri saat Masuk</strong>
                <p className="text-stone-600">Disertai membaca doa perlindungan dari gangguan setan jin jantan dan betina.</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block">2. Doa Masuk WC</strong>
                <p className="font-arabic text-emerald-900 text-right">اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الخُبُثِ وَالخَبَائِثِ</p>
                <p className="text-stone-500 italic">"Allāhumma innī a'ūdzu bika minal khubutsi wal khabā'its."</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block">3. Mendahulukan Kaki Kanan saat Keluar</strong>
                <p className="text-stone-600">Disertai membaca doa mohon ampunan dan rasa syukur.</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block">4. Doa Keluar WC</strong>
                <p className="font-arabic text-emerald-900 text-right">غُفْرَانَكَ، الحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الأَذَى وَعَافَانِي</p>
                <p className="text-stone-500 italic">"Ghufrānaka, alhamdulillāhil-ladzī adzhaba 'annil adzā wa 'āfānī."</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block">5. Tidak Menghadap atau Membelakangi Kiblat</strong>
                <p className="text-stone-600">Terutama ketika buang hajat di tempat terbuka (tanpa dinding penutup).</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block">6. Larangan Menggunakan Tangan Kanan</strong>
                <p className="text-stone-600">Nabi SAW melarang memegang kemaluan atau beristinja menggunakan tangan kanan.</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block">7. Tidak Kencing di Air yang Tenang (Diam)</strong>
                <p className="text-stone-600">Seperti danau kecil atau kolam yang tidak mengalir agar air tidak tercemar najis.</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block">8. Tidak Kencing di Lubang Tanah</strong>
                <p className="text-stone-600">Karena lubang tanah sering kali menjadi sarang hewan melata atau tempat tinggal jin.</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block">9. Tidak Buang Hajat di Tempat Manusia Berteduh</strong>
                <p className="text-stone-600">Seperti di bawah pohon rindang yang berbuah atau di jalanan umum yang dilalui manusia.</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <strong className="text-stone-900 block">10. Menjaga Percikan Air Kencing (Istibra')</strong>
                <p className="text-stone-600">Memastikan sisa kotoran tuntas sebelum beranjak, karena kebanyakan siksa kubur disebabkan meremehkan percikan air kencing.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 3: MENGUSAP KHUFF (MASAH 'ALAL KHUFFAIN) */}
      {/* ============================================================ */}
      {activeMainTab === 'khuff' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Footprints className="w-4 h-4" />
              <span>Rukhsah Keringanan Bersuci</span>
            </div>
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Fiqih Mengusap Khuff (مَسْحُ الخُفَّيْنِ)
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Khuff adalah sepatu atau penutup kaki dari kulit yang menutupi seluruh bagian kaki hingga melewati kedua mata kaki. Mengusap khuff adalah rukhsah (keringanan) syariat yang sah berdasarkan hadits-hadits mutawatir Nabi SAW, di mana seorang muslim saat berwudhu <strong>cukup mengusap bagian atas khuff dengan tangan basah tanpa perlu melepas sepatu dan membasuh kaki</strong>.
            </p>

            {/* Masa Berlaku: Mukim vs Musafir */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-sky-50 rounded-xl border border-sky-200 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-700" />
                  <strong className="text-sky-950 text-sm">Bagi Orang Mukim (Tidak Bepergian)</strong>
                </div>
                <p className="text-stone-700 font-bold text-base">1 Hari 1 Malam (24 Jam)</p>
                <p className="text-stone-600">
                  Dihitung mulai dari saat hadats pertama terjadi setelah memakai khuff dalam keadaan suci.
                </p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  <strong className="text-emerald-950 text-sm">Bagi Orang Musafir (Perjalanan Syar'i)</strong>
                </div>
                <p className="text-stone-700 font-bold text-base">3 Hari 3 Malam (72 Jam)</p>
                <p className="text-stone-600">
                  Keringanan yang sangat besar bagi musafir dalam perjalanan musim dingin atau cuaca ekstrem.
                </p>
              </div>
            </div>

            {/* 5 Syarat Sah Mengusap Khuff */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs">
              <span className="font-bold text-stone-900 block text-sm">
                5 Syarat Sah Boleh Mengusap Khuff:
              </span>
              <ol className="space-y-1.5 list-decimal list-inside text-stone-700">
                <li><strong>Dipakai Setelah Suci Sempurna:</strong> Khuff harus dipakai setelah seseorang berwudhu sempurna dengan membasuh kedua kaki.</li>
                <li><strong>Menutupi Bagian Wajib Basuh:</strong> Khuff harus menutupi seluruh telapak, punggung kaki, hingga melewati kedua mata kaki (*ka'bain*).</li>
                <li><strong>Kuat Dibawa Berjalan:</strong> Terbuat dari bahan yang kokoh (kulit tebal) yang tahan digunakan berjalan kaki biasa tanpa mudah robek.</li>
                <li><strong>Suci dari Najis:</strong> Khuff terbuat dari bahan yang suci dan tidak terkena kotoran najis.</li>
                <li><strong>Kedap Air (Tahan Air):</strong> Air tidak tembus langsung membasahi kulit kaki saat diusap.</li>
              </ol>
            </div>

            {/* Bagian Mana yang Diusap? */}
            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2 text-xs">
              <span className="font-bold text-emerald-950 block text-sm">
                Bagian Mana yang Wajib Diusap?
              </span>
              <p className="text-stone-700 leading-relaxed">
                Yang wajib diusap adalah <strong>bagian atas (punggung) khuff</strong>, bukan bagian telapak bawahnya! Cukup membasahi kedua telapak tangan lalu menyapukannya di atas punggung kedua khuff secara memanjang.
              </p>
              <div className="p-3 bg-white rounded border border-emerald-200 text-stone-800 italic">
                Sayyidina 'Ali bin Abi Thalib RA berkata: <br />
                <em>"Seandainya agama itu berdasarkan akal semata, niscaya bagian bawah khuff lebih pantas untuk diusap daripada bagian atasnya. Namun sungguh aku telah melihat Rasulullah SAW mengusap bagian atas kedua khuff-nya."</em> (HR. Abu Dawud No. 162).
              </div>
            </div>

            {/* 3 Hal Pembatal Khuff */}
            <div className="p-4 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2 text-xs">
              <span className="font-bold text-rose-950 block text-sm">
                3 Hal yang Membatalkan Berlakunya Usapan Khuff:
              </span>
              <ul className="space-y-1 list-disc list-inside text-rose-900">
                <li><strong>Habisnya Masa Waktu:</strong> Lewatnya 24 jam bagi mukim atau 72 jam bagi musafir. Jika wudhu masih ada, ia cukup melepas khuff dan membasuh kedua kakinya.</li>
                <li><strong>Melepas Khuff:</strong> Terlepasnya salah satu atau kedua khuff dari kaki.</li>
                <li><strong>Terkena Hadats Besar (Junub):</strong> Mengusap khuff hanya berlaku untuk hadats kecil. Jika junub, wajib melepas khuff dan mandi besar seluruh tubuh.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
