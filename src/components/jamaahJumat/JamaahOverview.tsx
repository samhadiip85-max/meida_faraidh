import React, { useState } from 'react';
import { MASBUQ_SCENARIOS } from '../../data/jamaahJumatData';
import { Users, CheckCircle2, AlertTriangle, ArrowRight, Info, Sparkles, UserCheck } from 'lucide-react';

export function JamaahOverview() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('ruku_tumaninah');
  const [totalPrayerRakaat, setTotalPrayerRakaat] = useState<number>(4); // default Dzuhur/Ashar/Isya (4)
  const [missedRakaats, setMissedRakaats] = useState<number>(1);

  const activeScenario = MASBUQ_SCENARIOS.find((s) => s.id === selectedScenarioId)!;

  // Calculate needed rakaat to add
  const rakaatGot = activeScenario.rakaatCounted ? 1 : 0;
  const remainingToAdd = Math.max(0, missedRakaats - rakaatGot);

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Users className="w-4 h-4 text-emerald-700" />
          <span>BAB 4: Fiqih Shalat Jama'ah, Shalat Jum'at & Shalat Musafir</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hukum Shalat Berjama'ah & Kaidah Makmum Masbuq
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Shalat berjama'ah memiliki keutamaan melipatgandakan pahala hingga 27 derajat dibanding shalat sendirian
          ("صَلَاةُ الْجَمَاعَةِ تَفْضُلُ صَلَاةَ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً").
          Hukumnya adalah Fardhu Kifayah bagi laki-laki mukim untuk shalat fardhu lima waktu menurut Mazhab Syafi'i.
        </p>
      </div>

      {/* Makmum Muwafiq vs Masbuq & Adab Shaf */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="w-4 h-4" />
            <span>Kategori Makmum & Pengaturan Shaf</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Muwafiq vs Masbuq dan Adab Mengingatkan Imam
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Muwafiq */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm">Makmum Muwafiq</span>
              <span className="font-arabic text-stone-500 text-xs">الموافق</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Makmum yang mendapati waktu yang cukup bersama imam saat berdiri tegak untuk membaca surat Al-Fatihah dengan bacaan standar normal sebelum imam ruku'.
            </p>
            <div className="p-2 bg-emerald-50 rounded text-emerald-950 font-medium">
              Wajib menyelesaikan Al-Fatihah sempurna meskipun imam sudah ruku'.
            </div>
          </div>

          {/* Masbuq */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm">Makmum Masbuq</span>
              <span className="font-arabic text-stone-500 text-xs">المسبوق</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Makmum yang terlambat datang sehingga tidak mendapati waktu yang cukup untuk membaca Al-Fatihah secara penuh bersama imam saat imam berdiri.
            </p>
            <div className="p-2 bg-amber-50 rounded text-amber-950 font-medium">
              Kewajiban Al-Fatihah gugur; wajib langsung ruku' mengikuti imam.
            </div>
          </div>

          {/* Mengingatkan Imam */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm">Mengingatkan Imam</span>
              <span className="font-arabic text-stone-500 text-xs">التنبيه</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Jika imam keliru dalam rakaat atau rukun shalat:
            </p>
            <ul className="space-y-1 list-disc list-inside text-stone-800 font-medium">
              <li><strong>Laki-laki:</strong> Membaca tasbih <em>"Subhanallah"</em> dengan niat dzikir.</li>
              <li><strong>Wanita:</strong> Bertepuk tangan (<em>Tashfiq</em>) dengan menepuk punggung telapak tangan.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Simulator Interaktif Makmum Masbuq */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <UserCheck className="w-4 h-4" />
            <span>Simulator Interaktif Hitungan Rakaat Masbuq</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Kapan Rakaat Terhitung Sah & Berapa Rakaat Harus Ditambah?
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih kondisi saat Anda bergabung ke dalam shalat berjama'ah untuk melihat apakah rakaat tersebut terhitung atau wajib ditambah:
          </p>
        </div>

        {/* Buttons of Scenario */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {MASBUQ_SCENARIOS.map((sc) => {
            const isSelected = selectedScenarioId === sc.id;
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => setSelectedScenarioId(sc.id)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-1 ring-emerald-600 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block mb-1">
                  Titik Masuk
                </span>
                <span className="text-xs block leading-snug">{sc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Result Card */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/80 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                Status Rakaat Makmum
              </span>
              <h3 className="text-base font-bold text-stone-900 mt-0.5">
                {activeScenario.name}
              </h3>
            </div>
            <span
              className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 self-start sm:self-auto ${
                activeScenario.rakaatCounted
                  ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                  : 'bg-rose-100 text-rose-950 border border-rose-300'
              }`}
            >
              {activeScenario.rakaatCounted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Rakaat Terhitung Sah (Dapat Rakaat)</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-4 h-4 text-rose-700" />
                  <span>Rakaat Tidak Terhitung (Wajib Nambah)</span>
                </>
              )}
            </span>
          </div>

          <div className="space-y-1.5">
            <strong className="text-stone-900 block font-semibold">Penjelasan Fiqih Syar'i:</strong>
            <p className="text-stone-700 leading-relaxed">{activeScenario.explanation}</p>
          </div>

          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2 text-stone-700">
            <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong>Kaidah Emas Masbuq:</strong> Selama makmum sempat merasakan diam tenang
              (thuma'ninah) saat kedua telapak tangannya memegang lutut bersama imam sebelum imam
              mengangkat punggungnya, maka rakaat tersebut terhitung sah.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
