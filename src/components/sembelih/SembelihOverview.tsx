import React, { useState } from 'react';
import { SEMBELIH_PILLARS } from '../../data/sembelihData';
import { Sparkles, CheckCircle2, AlertOctagon, Heart, ShieldAlert, Zap, Info, ShieldCheck, ChevronRight } from 'lucide-react';

export function SembelihOverview() {
  const [selectedPillarIdx, setSelectedPillarIdx] = useState<number>(0);
  const [activeMethod, setActiveMethod] = useState<'dhabh' | 'nahr' | 'aqr'>('dhabh');

  const activePillar = SEMBELIH_PILLARS[selectedPillarIdx];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Sparkles className="w-4 h-4 text-emerald-700" />
          <span>BAB 10: Fiqih Penyembelihan Hewan Ternak (Adz-Dzabā'ih)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Rukun, Syarat Sah, Anatomi Urat Leher, & Kaidah Penyembelihan Syar'i
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Penyembelihan syar'i (*Adz-Dzakāh*) adalah mematikan hewan darat yang halal dengan cara melukai lehernya
          menggunakan alat tajam untuk mengalirkan darah secara tuntas dan melenyapkan nyawanya sesuai tuntunan syariat Islam.
          Tanpa penyembelihan yang sah, hewan darat halal berubah status menjadi <strong>Bangkai (Maitah) yang haram dan najis</strong>.
        </p>
      </div>

      {/* 4 Rukun Penyembelihan Interaktif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Empat Pilar Keabsahan Sembelihan</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            4 Rukun & Syarat Mutlak Penyembelihan Hewan
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Klik setiap rukun di bawah untuk mempelajari rincian syarat sah dan dalil fiqihnya:
          </p>
        </div>

        {/* Pillar Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {SEMBELIH_PILLARS.map((pillar, idx) => {
            const isSelected = selectedPillarIdx === idx;
            return (
              <button
                key={pillar.name}
                type="button"
                onClick={() => setSelectedPillarIdx(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] block font-arabic opacity-85">{pillar.nameArabic}</span>
                <span className="text-xs font-bold block mt-0.5">{pillar.name}</span>
                <span className="text-[10px] block opacity-75 mt-1">{pillar.syarat.length} Syarat Fiqih</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detail Card */}
        {activePillar && (
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                  <span>{activePillar.name}</span>
                  <span className="text-xs font-arabic text-emerald-800 font-normal">
                    ({activePillar.nameArabic})
                  </span>
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">{activePillar.description}</p>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] uppercase font-bold text-stone-700 block">
                Syarat-Syarat Fiqih yang Wajib Dipenuhi:
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                {activePillar.syarat.map((item, sIdx) => (
                  <li
                    key={sIdx}
                    className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2 text-stone-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 font-mono">
              <strong className="text-emerald-950">Landasan Syar'i: </strong>
              {activePillar.dalil}
            </div>
          </div>
        )}
      </div>

      {/* Diagram Anatomi Leher Hewan: Hulqum, Mari', Wadajain */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <AlertOctagon className="w-4 h-4 text-emerald-700" />
            <span>Kaidah Anatomi & Biologi Leher</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Anatomi 4 Saluran Leher: Hulqum, Mari', & 2 Wadajain
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Kehalalan daging hewan sembelihan berpusat pada pemutusan urat dan saluran vital di leher:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Hulqum */}
          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-300 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-emerald-950">1. Al-Hulqūm (الحُلْقُوم)</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-700 text-white">
                WAJIB PUTUS
              </span>
            </div>
            <strong className="text-emerald-900 block text-xs">Saluran Pernapasan (Tenggorokan/Trakea)</strong>
            <p className="text-stone-700 leading-relaxed text-[11px]">
              Saluran pernapasan yang tersusun dari cincin tulang rawan. Wajib putus sempurna dari sisi kanan ke kiri agar hewan tidak menderita kehabisan nafas perlahan.
            </p>
          </div>

          {/* Mari' */}
          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-300 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-emerald-950">2. Al-Marī' (المَرِيء)</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-700 text-white">
                WAJIB PUTUS
              </span>
            </div>
            <strong className="text-emerald-900 block text-xs">Saluran Pencernaan (Kerongkongan/Esofagus)</strong>
            <p className="text-stone-700 leading-relaxed text-[11px]">
              Saluran jalan masuknya makanan dan minuman yang terletak tepat di belakang saluran pernapasan. Keduanya wajib terputus dalam madzhab Syafi'i.
            </p>
          </div>

          {/* Wadajain */}
          <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-300 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-sky-950">3. Al-Wadajān (الوَدَجَان)</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-700 text-white">
                SUNNAH MUAKKADAH
              </span>
            </div>
            <strong className="text-sky-900 block text-xs">Dua Pembuluh Darah Leher (Karotis & Jugularis)</strong>
            <p className="text-stone-700 leading-relaxed text-[11px]">
              Dua pembuluh darah besar di kanan dan kiri leher. Memutusnya membuat tekanan darah otak langsung drop instan, hewan pingsan tanpa rasa sakit, dan darah keluar tuntas.
            </p>
          </div>
        </div>

        {/* Larangan Mutlak Gigi & Kuku */}
        <div className="p-4 bg-rose-50 rounded-xl border border-rose-300 flex items-start gap-3 text-xs">
          <ShieldAlert className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
          <div className="space-y-1 text-rose-950">
            <strong className="block font-bold">
              Larangan Mutlak Menyembelih dengan Gigi/Taring dan Kuku/Tulang:
            </strong>
            <p className="leading-relaxed">
              Rasulullah SAW bersabda: <em>"Semua yang dapat mengalirkan darah dan disebut nama Allah atasnya, makanlah! Selama tidak menggunakan gigi dan kuku. Adapun gigi itu adalah tulang, dan kuku adalah pisau bangsa Habasyah (non-muslim)."</em> (HR. Bukhari no. 5498 & Muslim no. 1968). Hewan yang disembelih dengan kuku atau taring otomatis dihukumi <strong>Bangkai Haram</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Teknik Penyembelihan: Dhabh vs Nahr vs 'Aqr */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Heart className="w-4 h-4 text-emerald-700" />
            <span>Variasi Metode Sembelih Syar'i</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            3 Teknik Penyembelihan: Adz-Dzabh, An-Nahr, dan Al-'Aqr
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Syariat membedakan teknik pemotongan berdasarkan anatomi fisik hewan atau kondisi hewan yang terkendali vs tidak:
          </p>
        </div>

        {/* Switcher Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setActiveMethod('dhabh')}
            className={`p-3 rounded-xl border text-center transition-all ${
              activeMethod === 'dhabh'
                ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
                : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span className="text-xs font-arabic block">الذَّبْح</span>
            <span className="text-xs block mt-0.5">1. Adz-Dzabh</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMethod('nahr')}
            className={`p-3 rounded-xl border text-center transition-all ${
              activeMethod === 'nahr'
                ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
                : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span className="text-xs font-arabic block">النَّحْر</span>
            <span className="text-xs block mt-0.5">2. An-Nahr</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMethod('aqr')}
            className={`p-3 rounded-xl border text-center transition-all ${
              activeMethod === 'aqr'
                ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
                : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span className="text-xs font-arabic block">العَقْر</span>
            <span className="text-xs block mt-0.5">3. Al-'Aqr</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-3">
          {activeMethod === 'dhabh' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <strong className="text-sm font-bold text-stone-900">
                  Adz-Dzabh (Penyembelihan Leher Bagian Atas/Tengah)
                </strong>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                  Kambing, Sapi, Ayam, Unggas
                </span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                Pemotongan dilakukan pada leher bagian atas dekat pangkal kepala (di bawah jakun) pada hewan berleher pendek. Hewan direbahkan pada sisi lambung kiri, kaki diikat lembut, lalu pisau tajam ditarik sekali ayun memutus hulqum, mari', dan dua wadajain.
              </p>
            </div>
          )}

          {activeMethod === 'nahr' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <strong className="text-sm font-bold text-stone-900">
                  An-Nahr (Penyembelihan Pangkal Leher Dekat Dada)
                </strong>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                  Unta & Burung Unta
                </span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                Sunnah khusus untuk unta dan hewan berleher sangat panjang. Unta dibiarkan berdiri tegak dengan kaki kiri depan diikat, lalu pisau/tombak tajam ditusukkan ke lekukan pangkal leher yang bersambung dengan dada (*Al-Wahdah*). Darah memancar sangat deras dan unta roboh dengan cepat tanpa tersiksa.
              </p>
            </div>
          )}

          {activeMethod === 'aqr' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <strong className="text-sm font-bold text-stone-900">
                  Al-'Aqr (Penyembelihan Darurat Hewan Liar / Mengamuk)
                </strong>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-rose-100 text-rose-800 rounded">
                  Sapi Mengamuk / Masuk Jurang
                </span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                Jika hewan jinak (seperti sapi atau unta) mendadak mengamuk, lepas lari liar, atau terjatuh ke dalam sumur/jurang sempit sehingga mustahil lehernya dijangkau untuk disembelih, maka statusnya sama seperti hewan buruan liar: boleh dipanah atau ditombak di bagian tubuh mana pun yang mematikan dan mengeluarkan darah dengan niat sembelih darurat dan membaca bismillah.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Isu Fiqih Modern: Stunning & Mekanisasi RPH */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <Zap className="w-4 h-4 text-emerald-700" />
          <span>Isu Fiqih Kontemporer</span>
        </div>
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Fatwa Stunning (Pemingsanan) & Mekanisasi Pisau Rotary RPH
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <strong className="text-stone-900 block font-bold text-sm">
              1. Fatwa Pemingsanan Hewan (Stunning)
            </strong>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Menurut Fatwa MUI No. 12 Tahun 2009, *stunning* (arus listrik voltase rendah atau *captive bolt*) pada sapi/ayam hukumnya <strong>BOLEH</strong> dengan syarat ketat:
            </p>
            <ul className="space-y-1 text-stone-700 text-[11px]">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Hanya membuat hewan pingsan sementara untuk mempermudah pemotongan.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Tidak meremukkan tengkorak atau mematikan hewan sebelum pisau menyayat.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Jika hewan tidak disembelih, hewan tersebut masih dapat pulih sadar kembali.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <strong className="text-stone-900 block font-bold text-sm">
              2. Pisau Mekanis Otomatis Rumah Potong Unggas (RPH)
            </strong>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Penyembelihan ayam dengan ban berjalan dan pisau mekanik otomatis diperbolehkan oleh para ulama kontemporer (MUI & Rabithah Alam Islami) dengan syarat:
            </p>
            <ul className="space-y-1 text-stone-700 text-[11px]">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Operator yang menekan tombol mesin adalah seorang muslim berakal.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Operator membaca Basmalah saat menyalakan mesin pemotong.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Ada pengawas muslim yang menyembelih manual ayam yang lolos dari bilah pisau.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
