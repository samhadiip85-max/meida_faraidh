import React, { useState } from 'react';
import { VEHICLE_PRAYERS } from '../../data/jamaahJumatData';
import { Plane, Train, Ship, Bus, CheckCircle2, AlertTriangle, Compass, Info } from 'lucide-react';

export function MusafirVehicleGuide() {
  const [selectedVehicle, setSelectedVehicle] = useState<'pesawat' | 'kereta' | 'kapal' | 'bus_mobil'>('pesawat');

  const activeGuide = VEHICLE_PRAYERS.find((v) => v.vehicleType === selectedVehicle)!;

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Plane className="w-4 h-4 text-emerald-700" />
          <span>Pedoman Shalat Musafir & Kendaraan Modern</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Tata Cara Shalat di Pesawat, Kereta, Kapal & Bus
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Bepergian dengan sarana transportasi modern menuntut pemahaman fiqih praktis mengenai
          kemampuan menghadap kiblat, thaharah (wudhu/tayammum), dan rukun berdiri tegak.
          Pahami kapan shalat dihukumi sah sempurna dan kapan berstatus <em>Shalat Li Hurmatil Waqti</em> yang wajib diqadha'.
        </p>
      </div>

      {/* Batas Hari Mukim Musafir */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <Compass className="w-4 h-4" />
          <span>Kaidah Batas Hari Menetap bagi Musafir</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Kapan Hak Keringanan Jamak & Qashar Berakhir di Kota Tujuan?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 space-y-2">
            <span className="font-bold text-emerald-950 block text-sm">
              Niat Tinggal Maksimal 3 Hari:
            </span>
            <p className="text-stone-700 leading-relaxed">
              Jika seorang musafir berniat tinggal di kota tujuan selama <strong>maksimal 3 hari 3 malam</strong> (di luar hari masuk kedatangan dan hari keluar kepulangan), maka ia <strong>tetap berstatus musafir</strong> dan sah melakukan Jamak dan Qashar selama berada di sana.
            </p>
          </div>

          <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-200 space-y-2">
            <span className="font-bold text-rose-950 block text-sm">
              Niat Tinggal 4 Hari Penuh atau Lebih:
            </span>
            <p className="text-stone-700 leading-relaxed">
              Jika sejak awal keberangkatan atau setibanya di tujuan ia berniat tinggal selama <strong>4 hari penuh atau lebih</strong>, maka seketika saat ia memasuki batas kota tujuan, <strong>status musafirnya gugur</strong> dan ia dihukumi sebagai orang muqim (wajib shalat sempurna 4 rakaat dan shalat tepat pada waktunya).
            </p>
          </div>
        </div>
      </div>

      {/* Shalat di Berbagai Kendaraan */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Panduan Rinci Shalat Berdasarkan Moda Transportasi
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih jenis kendaraan di bawah ini untuk melihat panduan thaharah, kiblat, posisi shalat, dan status qadha':
          </p>
        </div>

        {/* Buttons of Vehicles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'pesawat', label: 'Pesawat Terbang', icon: Plane },
            { id: 'kereta', label: 'Kereta Api', icon: Train },
            { id: 'kapal', label: 'Kapal Laut / Feri', icon: Ship },
            { id: 'bus_mobil', label: 'Bus / Mobil', icon: Bus },
          ].map((item) => {
            const isSelected = selectedVehicle === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedVehicle(item.id as any)}
                className={`p-3.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs font-bold'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Vehicle Card */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/80 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                Moda Transportasi
              </span>
              <h3 className="text-base font-bold text-stone-900 mt-0.5">
                {activeGuide.title}
              </h3>
            </div>
            <span
              className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 self-start sm:self-auto ${
                activeGuide.qadhaRequired
                  ? 'bg-amber-100 text-amber-950 border border-amber-300'
                  : 'bg-emerald-100 text-emerald-950 border border-emerald-300'
              }`}
            >
              {activeGuide.qadhaRequired ? (
                <>
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  <span>Li Hurmatil Waqti (Wajib Qadha' Nanti)</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Sah Sempurna (Tidak Perlu Qadha')</span>
                </>
              )}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <strong className="text-stone-900 block font-semibold">1. Cara Bersuci (Thaharah):</strong>
              <p className="text-stone-600 leading-relaxed">{activeGuide.wudhuOption}</p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <strong className="text-stone-900 block font-semibold">2. Arah Kiblat:</strong>
              <p className="text-stone-600 leading-relaxed">{activeGuide.qiblatRule}</p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <strong className="text-stone-900 block font-semibold">3. Posisi Berdiri / Duduk:</strong>
              <p className="text-stone-600 leading-relaxed">{activeGuide.standingRule}</p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <strong className="text-stone-900 block font-semibold">4. Status Hukum Syar'i:</strong>
              <p className="text-stone-600 leading-relaxed">{activeGuide.statusHukum}</p>
            </div>
          </div>

          <div className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-200 text-stone-800 space-y-1">
            <strong className="text-emerald-950 block font-semibold">Tips Praktis Perjalanan:</strong>
            <ul className="space-y-1 list-disc list-inside text-stone-700">
              {activeGuide.practicalTips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
