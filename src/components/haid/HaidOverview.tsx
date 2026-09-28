import React, { useState } from 'react';
import { BLOOD_RULES, HAID_PROHIBITIONS } from '../../data/haidData';
import { BloodType } from '../../types/haid';
import { HeartPulse, CheckCircle2, XCircle, AlertCircle, Sparkles, Clock, ShieldX } from 'lucide-react';

export function HaidOverview() {
  const [selectedType, setSelectedType] = useState<BloodType>('haid');

  const activeRule = BLOOD_RULES.find((b) => b.type === selectedType)!;

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <HeartPulse className="w-4 h-4 text-emerald-700" />
          <span>BAB 2: Fiqih Haid, Istihadhah & Nifas (Dima'ul Mar'ah)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Karakteristik Darah Wanita, Batasan Masa & Hukum Syariat
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Dalam Fiqih Islam, darah yang keluar dari rahim wanita terbagi menjadi 3 jenis dengan konsekuensi
          hukum ibadah yang sangat berbeda: <strong>Haid</strong> (darah alami bulanan), <strong>Nifas</strong> (darah paska persalinan),
          dan <strong>Istihadhah</strong> (darah penyakit/pendarahan abnormal di luar siklus).
        </p>
      </div>

      {/* Perbandingan 3 Jenis Darah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="w-4 h-4" />
            <span>Tiga Jenis Darah Kewanitaan</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Pahami Perbedaan Sifat, Durasi & Hukumnya
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih jenis darah untuk melihat batasan waktu minimal, maksimal, serta status hukumnya:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {BLOOD_RULES.map((rule) => {
            const isSelected = selectedType === rule.type;
            return (
              <button
                key={rule.type}
                type="button"
                onClick={() => setSelectedType(rule.type)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-950 shadow-xs ring-1 ring-emerald-600'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block font-semibold">
                  {rule.type}
                </span>
                <span className="text-sm font-bold block mt-0.5 leading-snug">
                  {rule.title.split('(')[0]}
                </span>
                <span className="text-xs text-stone-500 font-arabic mt-1 block truncate">
                  {rule.arabicTerm}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Rule Card */}
        <div className="bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/80 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                Detail Ketentuan Fiqih
              </span>
              <h3 className="text-base font-bold text-stone-900 mt-0.5">
                {activeRule.title}
              </h3>
            </div>
            <span className="text-sm font-arabic text-stone-600 bg-white px-3 py-1 rounded border border-stone-200">
              {activeRule.arabicTerm}
            </span>
          </div>

          <div className="space-y-1.5">
            <strong className="text-stone-900 block font-semibold">Pengertian Syar'i:</strong>
            <p className="text-stone-700 leading-relaxed">{activeRule.definition}</p>
          </div>

          {/* 3 Duration Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-bold">
                Batas Minimal
              </span>
              <p className="font-semibold text-stone-800">{activeRule.minDuration}</p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-bold">
                Kebiasaan Umum (Ghalib)
              </span>
              <p className="font-semibold text-stone-800">{activeRule.habitualDuration}</p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-bold">
                Batas Maksimal
              </span>
              <p className="font-semibold text-stone-800">{activeRule.maxDuration}</p>
            </div>
          </div>

          {/* Status Hukum & Warna */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1.5">
              <strong className="text-stone-900 block font-semibold">Status Hukum Ibadah:</strong>
              <p className="text-stone-700 leading-relaxed">{activeRule.legalStatus}</p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1.5">
              <strong className="text-stone-900 block font-semibold">Karakteristik & Urutan Warna:</strong>
              <ul className="space-y-1 text-stone-600 list-disc list-inside">
                {activeRule.colorCharacteristics.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-200/80">
            <strong>Dasar Dalil: </strong>
            {activeRule.dalil}
          </div>
        </div>
      </div>

      {/* 7 Perkara yang Dilarang saat Haid & Nifas */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <ShieldX className="w-4 h-4 text-rose-600" />
            <span>Larangan Syariat</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Perkara yang Diharamkan Saat Haid & Nifas
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Perhatikan perbedaan antara ibadah yang wajib diqadha (seperti Puasa) dengan yang tidak perlu diqadha (seperti Shalat):
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {HAID_PROHIBITIONS.map((p) => (
            <div
              key={p.id}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm text-stone-900">{p.title}</h3>
                  {p.qadhaRule === 'wajib_qadha' && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-900 rounded border border-amber-300 shrink-0">
                      Wajib Qadha
                    </span>
                  )}
                  {p.qadhaRule === 'tidak_qadha' && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-900 rounded border border-emerald-300 shrink-0">
                      Gugur (Tanpa Qadha)
                    </span>
                  )}
                </div>
                <p className="text-stone-600 leading-relaxed">{p.desc}</p>
              </div>

              <div className="pt-2 border-t border-stone-200/80 space-y-1 text-[11px]">
                <div className="font-medium text-stone-800">
                  <strong>Aturan Qadha/Konsekuensi: </strong>
                  {p.qadhaText}
                </div>
                <div className="text-stone-400">
                  <strong>Dalil: </strong>
                  {p.dalil}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
