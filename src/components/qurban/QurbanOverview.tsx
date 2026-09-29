import React, { useState } from 'react';
import { ANIMAL_REQUIREMENTS, DEFECTS_LIST } from '../../data/qurbanData';
import { AnimalType } from '../../types/qurban';
import { Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, Heart, Info, Clock, AlertOctagon } from 'lucide-react';

export function QurbanOverview() {
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalType>('kambing');
  const [defectFilter, setDefectFilter] = useState<'all' | 'membatalkan' | 'makruh' | 'dimaafkan'>('all');

  const activeAnimalData = ANIMAL_REQUIREMENTS.find((a) => a.type === selectedAnimal);

  const filteredDefects =
    defectFilter === 'all' ? DEFECTS_LIST : DEFECTS_LIST.filter((d) => d.status === defectFilter);

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Heart className="w-4 h-4 text-emerald-700" />
          <span>BAB 9: Fiqih Ibadah Qurban (Udh-hiyah) & Aqiqah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hukum, Syarat Hewan, Cacat Penggugur, & Ketentuan Penyembelihan
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Ibadah Qurban (*Udh-hiyah*) adalah menyembelih hewan ternak tertentu (*Bahimatul An'am*) pada hari raya
          Idul Adha (10 Dzulhijjah) dan hari-hari Tasyriq (11, 12, 13 Dzulhijjah) dengan niat mendekatkan diri kepada Allah SWT.
          Hukumnya adalah <strong>Sunnah Muakkadah Kifayah</strong> bagi sebuah keluarga, dan menjadi <strong>Wajib</strong> jika dinadzarkan.
        </p>
      </div>

      {/* Syarat 4 Jenis Hewan Ternak */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="w-4 h-4" />
            <span>Kriteria Usia & Kuota Pekurban</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            4 Jenis Hewan Ternak (Bahīmatul An'ām) yang Sah untuk Qurban
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Hanya 4 jenis hewan ternak ini yang sah dijadikan qurban. Hewan liar atau unggas tidak sah menurut kesepakatan ulama:
          </p>
        </div>

        {/* Animal Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {ANIMAL_REQUIREMENTS.map((animal) => {
            const isSelected = selectedAnimal === animal.type;
            return (
              <button
                key={animal.type}
                type="button"
                onClick={() => setSelectedAnimal(animal.type)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[11px] block font-arabic opacity-90">{animal.nameArabic}</span>
                <span className="text-sm font-bold block mt-0.5">{animal.name}</span>
                <span
                  className={`text-[10px] inline-block mt-1 px-1.5 py-0.5 rounded font-medium ${
                    isSelected ? 'bg-emerald-800 text-white' : 'bg-stone-200 text-stone-700'
                  }`}
                >
                  {animal.quotaPersons === 1 ? '1 Orang Pekurban' : 'Maks 7 Orang Patungan'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animal Detail Card */}
        {activeAnimalData && (
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                  <span>{activeAnimalData.name}</span>
                  <span className="text-xs font-arabic text-emerald-800 font-normal">
                    ({activeAnimalData.nameArabic})
                  </span>
                </h3>
                <span className="text-xs text-stone-500">
                  Istilah Usia Syar'i: <strong>{activeAnimalData.ageArabicTerm}</strong>
                </span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
                Kuota: {activeAnimalData.quotaPersons} Orang
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                <span className="text-[11px] uppercase font-bold text-stone-500">
                  Batas Usia Minimal Syar'i:
                </span>
                <p className="text-stone-900 font-medium leading-relaxed">
                  {activeAnimalData.minAge}
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                <span className="text-[11px] uppercase font-bold text-stone-500">
                  Ketentuan Kuota & Penjelasan Fiqih:
                </span>
                <p className="text-stone-700 leading-relaxed">
                  {activeAnimalData.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4 Cacat Fatal Penggugur Sah Qurban */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <AlertOctagon className="w-4 h-4 text-rose-600" />
            <span>Kaidah Al-'Uyub al-Mani'ah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Katalog Cacat Fisik: Membatalkan vs Dimaafkan
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Rasulullah SAW secara tegas melarang 4 cacat utama. Madzhab Syafi'i mengqiyaskan setiap cacat yang mengurangi kualitas atau kuantitas daging konsumsi:
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => setDefectFilter('all')}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
              defectFilter === 'all'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
            }`}
          >
            Semua Cacat ({DEFECTS_LIST.length})
          </button>
          <button
            type="button"
            onClick={() => setDefectFilter('membatalkan')}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
              defectFilter === 'membatalkan'
                ? 'bg-rose-700 text-white border-rose-700'
                : 'bg-white text-rose-700 border-rose-200 hover:bg-rose-50'
            }`}
          >
            Cacat yang Membatalkan (Tidak Sah)
          </button>
          <button
            type="button"
            onClick={() => setDefectFilter('makruh')}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
              defectFilter === 'makruh'
                ? 'bg-amber-600 text-white border-amber-600'
                : 'bg-white text-amber-700 border-amber-200 hover:bg-amber-50'
            }`}
          >
            Sah Namun Makruh
          </button>
          <button
            type="button"
            onClick={() => setDefectFilter('dimaafkan')}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
              defectFilter === 'dimaafkan'
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50'
            }`}
          >
            Sah & Dimaafkan (Kebiri)
          </button>
        </div>

        {/* Defect Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {filteredDefects.map((defect) => {
            const isFatal = defect.status === 'membatalkan';
            const isMakruh = defect.status === 'makruh';
            const isExcused = defect.status === 'dimaafkan';

            return (
              <div
                key={defect.id}
                className={`p-4 rounded-xl border space-y-2 ${
                  isFatal
                    ? 'bg-rose-50/50 border-rose-200'
                    : isMakruh
                    ? 'bg-amber-50/40 border-amber-200'
                    : 'bg-emerald-50/40 border-emerald-200'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">{defect.name}</h3>
                    <span className="text-[11px] font-arabic text-stone-500">{defect.nameArabic}</span>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ${
                      isFatal
                        ? 'bg-rose-100 text-rose-800 border-rose-300'
                        : isMakruh
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    }`}
                  >
                    {isFatal ? 'TIDAK SAH' : isMakruh ? 'SAH (MAKRUH)' : 'SAH & BOLEH'}
                  </span>
                </div>

                <p className="text-stone-700 leading-relaxed text-[11px]">{defect.description}</p>

                <div className="p-2 bg-white/80 rounded border border-stone-200/80 text-[10px] text-stone-600 font-mono">
                  <strong>Dalil: </strong>
                  {defect.dalil}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Perbedaan Krusial: Qurban Sunnah vs Qurban Nadzar */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Kaidah Distribusi Daging & Hak Konsumsi</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Perbedaan Qurban Sunnah (*Tathawwu'*) vs Qurban Nadzar (*Wajib*)
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Banyak pekurban belum menyadari konsekuensi nadzar terhadap hak memakan daging qurban:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Qurban Sunnah */}
          <div className="p-5 bg-emerald-50/40 rounded-xl border border-emerald-200 space-y-3">
            <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
              <h3 className="font-bold text-sm text-emerald-950">Qurban Sunnah (Tathawwu')</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                Pekurban Boleh Makan
              </span>
            </div>
            <ul className="space-y-2 text-stone-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Hak Makan Pekurban:</strong> Disunnahkan memakan 1/3 bagian atau beberapa suap/sebuku untuk mengambil berkah (*tabarruk*).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Distribusi Ideal:</strong> 1/3 untuk fakir miskin (wajib dalam kondisi daging mentah), 1/3 dihadiahkan kepada kerabat/tetangga (boleh yang kaya), 1/3 untuk keluarga pekurban.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Bentuk Daging:</strong> Wajib dibagikan sebagiannya kepada fakir miskin dalam keadaan <strong>MENTAH SEGAR</strong>, bukan matang.
                </span>
              </li>
            </ul>
          </div>

          {/* Qurban Nadzar */}
          <div className="p-5 bg-rose-50/40 rounded-xl border border-rose-200 space-y-3">
            <div className="flex items-center justify-between border-b border-rose-200 pb-2">
              <h3 className="font-bold text-sm text-rose-950">Qurban Nadzar / Wajib</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-300">
                Pekurban HARAM Makan
              </span>
            </div>
            <ul className="space-y-2 text-stone-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Haram Daging Dimakan Pekurban:</strong> Pekurban dan orang yang berada di bawah nafkah wajibnya <strong>HARAM</strong> memakan sedikit pun daging, hati, atau lemaknya!
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  <strong>100% Wajib Disedekahkan:</strong> Seluruh karkas daging, kulit, dan jeroan wajib diserahkan utuh kepada fakir miskin.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Ganti Rugi jika Termakan:</strong> Jika pekurban terlanjur memakannya, wajib mengganti nilai rupiah dari daging yang dimakan untuk disedekahkan ke fakir miskin.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Larangan Mutlak Upah Jagal */}
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-300 flex items-start gap-3 text-xs">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 text-amber-950">
            <strong className="block font-bold">
              Larangan Keras Menjual Daging/Kulit & Memberikannya Sebagai Upah Jagal:
            </strong>
            <p className="leading-relaxed">
              Dilarang keras memperjualbelikan kulit, kepala, bulu, atau daging qurban. Dilarang pula memberikan kulit atau daging sebagai <strong>upah jasa penyembelihan (ujrah)</strong> bagi jagal atau panitia. Biaya potong harus dibayar terpisah dari uang saku pekurban. Namun, panitia atau tukang jagal boleh menerima daging qurban atas nama hadiah atau sedekah jika mereka fakir. (HR. Bukhari no. 1717 & Muslim no. 1317).
            </p>
          </div>
        </div>
      </div>

      {/* Adab & Doa Menyembelih */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <Clock className="w-4 h-4 text-emerald-700" />
          <span>Tata Cara & Sunnah Penyembelihan</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          5 Adab Ihsan & Bacaan Doa Penyembelihan Qurban
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
            <span className="font-bold text-stone-900 block">1. Menajamkan Golok/Pisau</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Wajib menajamkan pisau di luar pandangan hewan kurban agar proses sembelih cepat dan tidak menyiksa binatang (*ihsān fī adz-dzabh*).
            </p>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
            <span className="font-bold text-stone-900 block">2. Merebahkan ke Sisi Kiri & Kiblat</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Hewan direbahkan perlahan ke sisi lambung kirinya dengan lembut, menghadapkan leher dan wajahnya ke arah kiblat.
            </p>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
            <span className="font-bold text-stone-900 block">3. Memutus Hulqum & Mari'</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Sayatan harus memutus saluran pernapasan (*hulqum*), saluran makanan (*mari'*), dan disunnahkan memutus dua urat leher kanan-kiri (*wadajain*).
            </p>
          </div>
        </div>

        {/* Teks Doa Sembelih */}
        <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 space-y-2 text-xs">
          <span className="font-bold text-emerald-950 block">Bacaan Doa saat Menyembelih Qurban:</span>
          <div className="p-3 bg-white rounded-lg border border-emerald-200 font-arabic text-right text-base text-stone-800 leading-loose">
            بِسْمِ اللهِ، وَاللهُ أَكْبَرُ، اَللّٰهُمَّ هٰذَا مِنْكَ وَلَكَ، فَتَقَبَّلْ مِنِّيْ (مِنْ فُلَانٍ)
          </div>
          <p className="text-[11px] text-stone-600 font-mono">
            <em>"Bismillāhi wallāhu akbar, Allāhumma hādzā minka wa laka, fataqabbal minnī (min fulān)..."</em>
          </p>
          <p className="text-[11px] text-stone-700">
            Artinya: "Dengan nama Allah, dan Allah Maha Besar. Ya Allah, qurban ini bersumber dari-Mu dan dipersembahkan kepada-Mu, maka terimalah qurban ini dariku (atau sebutkan nama orang yang berkurban)."
          </p>
        </div>
      </div>
    </div>
  );
}
