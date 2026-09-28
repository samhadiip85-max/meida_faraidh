import React, { useState } from 'react';
import { WUDHU_STEPS } from '../../data/thaharahData';
import { Sparkles, CheckCircle2, AlertCircle, Wind, UserCheck } from 'lucide-react';

export function WudhuGhuslGuide() {
  const [activeSubTab, setActiveSubTab] = useState<'wudhu' | 'ghusl' | 'tayammum'>('wudhu');

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Sparkles className="w-4 h-4" />
          <span>Tata Cara Mengangkat Hadats</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Wudhu, Mandi Wajib (Ghusl) & Tayammum
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Hadats adalah keadaan tidak suci pada diri seorang muslim yang menghalangi keabsahan shalat.
          Hadats kecil disucikan dengan wudhu, hadats besar disucikan dengan mandi wajib, dan keduanya
          dapat digantikan oleh tayammum bila berhalangan air.
        </p>
      </div>

      {/* Switcher Tabs */}
      <div className="flex gap-2 border-b border-stone-200 pb-3">
        {[
          { id: 'wudhu', label: '1. Fiqih Wudhu (Hadats Kecil)' },
          { id: 'ghusl', label: '2. Mandi Wajib (Hadats Besar)' },
          { id: 'tayammum', label: '3. Fiqih Tayammum (Darurat Air)' },
        ].map((tab) => {
          const isSelected = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSubTab(tab.id as any)}
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

      {/* SUBTAB 1: WUDHU */}
      {activeSubTab === 'wudhu' && (
        <div className="space-y-6">
          {/* 6 Rukun Wudhu */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-stone-900 font-serif">
                6 Rukun Fardhu Wudhu (QS. Al-Maidah: 6)
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Bila salah satu rukun ini terlewat atau tidak terpenuhi, maka wudhu tidak sah:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {WUDHU_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-md bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                      {step.stepNumber}
                    </span>
                    <span className="font-arabic text-stone-500 text-[11px]">{step.nameArabic}</span>
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm">{step.name}</h3>
                  <p className="text-stone-600 leading-relaxed">{step.description}</p>
                  {step.dalilText && (
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block font-mono">
                      {step.dalilText}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4 Pembatal Wudhu */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm uppercase tracking-wide">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>4 Perkara yang Membatalkan Wudhu (Mazhab Syafi'i)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-200 space-y-1">
                <strong className="text-rose-950 block font-semibold">1. Keluarnya Sesuatu dari Dua Jalan</strong>
                <p className="text-rose-900">
                  Keluarnya angin (kentut), air kencing, feses, madzi, wadi, atau darah dari kubul atau dubur.
                </p>
              </div>

              <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-200 space-y-1">
                <strong className="text-rose-950 block font-semibold">2. Hilang Akal</strong>
                <p className="text-rose-900">
                  Hilangnya kesadaran karena tidur, gila, mabuk, pingsan, atau obat bius (kecuali tidur duduk dengan posisi pantat mantap menempel di lantai).
                </p>
              </div>

              <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-200 space-y-1">
                <strong className="text-rose-950 block font-semibold">3. Bersentuhan Kulit Lawan Jenis Non-Mahram</strong>
                <p className="text-rose-900">
                  Persentuhan kulit antara laki-laki dan perempuan dewasa yang bukan mahram tanpa adanya penghalang (kain), termasuk sentuhan suami-istri menurut Mazhab Syafi'i.
                </p>
              </div>

              <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-200 space-y-1">
                <strong className="text-rose-950 block font-semibold">4. Menyentuh Kemaluan</strong>
                <p className="text-rose-900">
                  Menyentuh kemaluan (qubul) atau lingkaran dubur manusia dengan bagian dalam telapak tangan atau jari-jemari tanpa alas.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: MANDI WAJIB (GHUSL) */}
      {activeSubTab === 'ghusl' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              6 Hal yang Mewajibkan Mandi Besar (Ghusl Janabah)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {[
                { title: '1. Keluarnya Sperma (Mani)', desc: 'Keluarnya air mani baik dalam kondisi terjaga (syahwat) maupun saat tidur (mimpi basah).' },
                { title: '2. Bersetubuh (Dukhul)', desc: 'Bertemunya dua kemaluan (masuknya hasyafah ke dalam farji) meskipun tanpa disertai keluarnya air mani.' },
                { title: '3. Berhentinya Darah Haid', desc: 'Selesainya masa siklus menstruasi bulanan bagi seorang wanita muslimah.' },
                { title: '4. Berhentinya Darah Nifas', desc: 'Selesainya masa darah yang keluar setelah proses persalinan/melahirkan.' },
                { title: '5. Melahirkan (Wiladah)', desc: 'Keluarnya bayi dari rahim, meskipun proses kelahiran tersebut tanpa mengeluarkan darah.' },
                { title: '6. Meninggal Dunia', desc: 'Wafatnya seorang muslim (kecuali orang yang mati syahid di medan perang fi sabilillah).' },
              ].map((item) => (
                <div key={item.title} className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                  <strong className="text-stone-900 block font-semibold">{item.title}</strong>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2 Rukun Mandi Wajib */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
              Hanya Ada 2 Rukun Fardhu Mandi Wajib
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 space-y-1">
                <span className="font-bold text-emerald-900 block text-sm">Rukun 1: Niat Mandi Wajib</span>
                <p className="text-stone-700 leading-relaxed">
                  Berniat di dalam hati saat air pertama kali mengenai salah satu bagian tubuh: <em>"Nawaitul ghusla li raf'il hadatsil akbari fardhan lillaahi ta'aalaa"</em>.
                </p>
              </div>

              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 space-y-1">
                <span className="font-bold text-emerald-900 block text-sm">Rukun 2: Meratakan Air ke Seluruh Tubuh</span>
                <p className="text-stone-700 leading-relaxed">
                  Mengalirkan air mutlak secara merata ke seluruh permukaan kulit dan helai rambut (termasuk pangkal rambut, lipatan tubuh, dan bawah kuku) tanpa ada yang terlewat.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: TAYAMMUM */}
      {activeSubTab === 'tayammum' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-stone-900 font-serif">
              Fiqih Tayammum: Keringanan Bersuci dengan Debu Suci
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Tayammum adalah rukhsah (keringanan) syariat sebagai pengganti wudhu dan mandi wajib ketika tidak ada air atau berhalangan menggunakannya:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <span className="font-bold text-stone-900 block text-sm">Sebab Diperbolehkannya Tayammum:</span>
              <ul className="space-y-1 list-disc list-inside text-stone-700">
                <li>Ketiadaan air mutlak setelah berusaha mencari setelah masuk waktu shalat.</li>
                <li>Sakit atau luka parah yang dikhawatirkan bertambah parah jika terkena air berdasarkan rekomendasi medis.</li>
                <li>Suhu dingin yang teramat ekstrem yang dapat membahayakan keselamatan jiwa.</li>
                <li>Air yang tersedia hanya cukup untuk kebutuhan minum manusia atau hewan ternak.</li>
              </ul>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <span className="font-bold text-stone-900 block text-sm">4 Rukun Fardhu Tayammum:</span>
              <ol className="space-y-1.5 list-decimal list-inside text-stone-700">
                <li><strong>Niat:</strong> Niat untuk membolehkan shalat (bukan menghilangkan hadats).</li>
                <li><strong>Mengusap Wajah:</strong> Dengan debu suci yang bersih tanpa kerikil/najis.</li>
                <li><strong>Mengusap Kedua Tangan sampai Siku:</strong> Dengan tepukan debu suci kedua.</li>
                <li><strong>Tertib:</strong> Mendahulukan usapan wajah sebelum usapan kedua tangan.</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
