import React from 'react';
import { ZAKAT_FITRAH_TIMES } from '../../data/zakatData';
import { Coins, Sparkles, CheckCircle2, ShieldCheck, Clock, Info, HeartHandshake } from 'lucide-react';

export function ZakatOverview() {
  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Coins className="w-4 h-4 text-emerald-700" />
          <span>BAB 6: Fiqih Zakat (Rukun Islam Ketiga)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kewajiban Zakat: Pensucian Jiwa (*Fitrah*) & Pembersihan Harta (*Mal*)
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Zakat secara bahasa bermakna suci, tumbuh, berkembang, dan berkah ("خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا").
          Dalam syariat Islam, zakat adalah kadar harta tertentu yang wajib dikeluarkan oleh seorang muslim
          untuk diberikan kepada golongan yang berhak menerimanya (8 Asnaf) dengan persyaratan tertentu.
        </p>
      </div>

      {/* Matriks Perbandingan: Zakat Fitrah vs Zakat Mal */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="w-4 h-4" />
            <span>Dua Pilar Utama Zakat</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Perbandingan Zakat Fitrah (Badan) dan Zakat Mal (Harta)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Zakat Fitrah */}
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
              <h3 className="font-bold text-sm text-stone-900">1. Zakat Fitrah (Zakat Jiwa)</h3>
              <span className="font-arabic text-emerald-800 text-sm">زكاة الفطر</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Zakat yang diwajibkan atas setiap jiwa (pribadi muslim) yang menemui akhir Ramadhan dan awal Syawal,
              sebagai penyuci orang yang berpuasa dari perkataan sia-sia dan kotor, serta makanan bagi kaum miskin.
            </p>
            <div className="space-y-1.5 pt-2 border-t border-stone-200/80">
              <div className="flex justify-between">
                <span className="text-stone-500">Waktu:</span>
                <span className="font-semibold text-stone-900">Bulan Ramadhan s.d Sebelum Shalat Id</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Kadar:</span>
                <span className="font-semibold text-stone-900">1 Sha' (± 2.5 kg / 3.5 L Beras) per Jiwa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Sasaran:</span>
                <span className="font-semibold text-stone-900">Diutamakan Fakir & Miskin</span>
              </div>
            </div>
          </div>

          {/* Zakat Mal */}
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
              <h3 className="font-bold text-sm text-stone-900">2. Zakat Mal (Zakat Harta)</h3>
              <span className="font-arabic text-emerald-800 text-sm">زكاة المال</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Zakat yang diwajibkan atas jenis harta tertentu (emas, perak, tabungan, perniagaan, hasil pertanian, peternakan, dan profesi)
              yang telah mencapai batas minimal kepemilikan (Nisab) dan batas waktu simpan (Haul).
            </p>
            <div className="space-y-1.5 pt-2 border-t border-stone-200/80">
              <div className="flex justify-between">
                <span className="text-stone-500">Syarat:</span>
                <span className="font-semibold text-stone-900">Milik Penuh, Mencapai Nisab & Haul 1 Tahun</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Kadar:</span>
                <span className="font-semibold text-stone-900">2.5% (Emas/Uang/Dagang), 5%-10% (Tani)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Sasaran:</span>
                <span className="font-semibold text-stone-900">8 Golongan (Asnaf Tsamaniyah)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Waktu Pembayaran Zakat Fitrah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Clock className="w-4 h-4" />
            <span>Kaidah Waktu Pelaksanaan Zakat Fitrah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            5 Tingkatan Waktu Pembayaran Zakat Fitrah
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Syariat membagi waktu pengeluaran zakat fitrah dari yang mubah hingga yang diharamkan:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          {ZAKAT_FITRAH_TIMES.map((t, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border space-y-2 ${
                idx === 2
                  ? 'bg-emerald-50 border-emerald-300 ring-1 ring-emerald-300'
                  : idx === 4
                  ? 'bg-rose-50 border-rose-300'
                  : 'bg-stone-50 border-stone-200'
              }`}
            >
              <span className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                {idx + 1}
              </span>
              <h3 className="font-bold text-stone-900 text-sm">{t.name}</h3>
              <p className="text-stone-600 leading-relaxed text-[11px]">{t.desc}</p>
              <div className="pt-2 border-t border-stone-200/80 font-semibold text-[10px] text-stone-700">
                {t.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Syarat Wajib Zakat Mal */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Syarat Wajib Zakat Harta (Zakat Mal)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-xs">
          {[
            { title: '1. Islam', desc: 'Pemilik harta adalah seorang muslim yang mukallaf.' },
            { title: '2. Milik Sempurna', desc: 'Harta berada dalam kendali penuh (Milk Tam), bukan harta sengketa atau milik umum.' },
            { title: '3. Mencapai Nisab', desc: 'Jumlah harta telah mencapai batas minimal yang ditetapkan syariat (misal setara 85 gr emas).' },
            { title: '4. Genap Haul', desc: 'Harta telah dimiliki selama genap satu tahun hijriyah (kecuali pertanian & rikaz).' },
            { title: '5. Melebihi Kebutuhan', desc: 'Harta berada di luar kebutuhan pokok primer diri dan tanggungan serta bebas hutang jatuh tempo.' },
          ].map((s) => (
            <div key={s.title} className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
              <strong className="text-stone-900 block font-semibold">{s.title}</strong>
              <p className="text-stone-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
