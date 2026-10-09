import React, { useState } from 'react';
import { Scale, CheckCircle2, AlertOctagon, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface CommodityItem {
  id: string;
  name: string;
  category: 'mata_uang' | 'pangan' | 'non_ribawi';
  categoryLabel: string;
}

const COMMODITIES: CommodityItem[] = [
  { id: 'emas', name: 'Emas (Logam Mulia)', category: 'mata_uang', categoryLabel: 'Tsamaniyyah (Uang/Emas)' },
  { id: 'perak', name: 'Perak (Logam Mulia)', category: 'mata_uang', categoryLabel: 'Tsamaniyyah (Uang/Emas)' },
  { id: 'rupiah', name: 'Uang Rupiah (IDR)', category: 'mata_uang', categoryLabel: 'Tsamaniyyah (Uang/Emas)' },
  { id: 'usd', name: 'Uang Dollar AS (USD)', category: 'mata_uang', categoryLabel: 'Tsamaniyyah (Uang/Emas)' },
  { id: 'beras_super', name: 'Beras Premium (Pandanwangi)', category: 'pangan', categoryLabel: 'Tha\'ām (Bahan Pangan)' },
  { id: 'beras_biasa', name: 'Beras IR64 (Biasa)', category: 'pangan', categoryLabel: 'Tha\'ām (Bahan Pangan)' },
  { id: 'gandum', name: 'Gandum / Terigu', category: 'pangan', categoryLabel: 'Tha\'ām (Bahan Pangan)' },
  { id: 'kurma', name: 'Kurma (Ajwah/Sukari)', category: 'pangan', categoryLabel: 'Tha\'ām (Bahan Pangan)' },
  { id: 'mobil', name: 'Mobil / Motor (Aset Non-Ribawi)', category: 'non_ribawi', categoryLabel: 'Sil\'ah (Non-Ribawi)' },
  { id: 'hp', name: 'Smartphone (Elektronik Non-Ribawi)', category: 'non_ribawi', categoryLabel: 'Sil\'ah (Non-Ribawi)' },
];

export function RibaBarterSimulator() {
  const [itemAId, setItemAId] = useState<string>('emas');
  const [itemBId, setItemBId] = useState<string>('emas');
  const [isSamaTakaran, setIsSamaTakaran] = useState<boolean>(false); // default beda bobot
  const [isTunai, setIsTunai] = useState<boolean>(true); // default tunai
  const [isTuntasSerahTerima, setIsTuntasSerahTerima] = useState<boolean>(true); // default di majelis

  const itemA = COMMODITIES.find((c) => c.id === itemAId) || COMMODITIES[0];
  const itemB = COMMODITIES.find((c) => c.id === itemBId) || COMMODITIES[0];

  // Evaluator Fiqih Barter
  const evaluateBarter = () => {
    // 1. Jika salah satu atau keduanya adalah barang Non-Ribawi (seperti Mobil, HP)
    if (itemA.category === 'non_ribawi' || itemB.category === 'non_ribawi') {
      return {
        status: 'HALAL',
        statusTitle: 'SAH & HALAL (JUAL BELI BIASA)',
        color: 'emerald',
        reason: 'Pertukaran melibatkan komoditas non-ribawi (barang manufaktur / kendaraan / elektronik). Dalam syariat Islam, barang non-ribawi bebas dari syarat kesamaan kuantitas dan boleh dicicil/kredit.',
        kaidah: 'Bebas dari aturan barter ribawi.',
      };
    }

    // 2. Jika Beda Rumpun / Beda 'Illat (Mata Uang vs Pangan, misal Uang beli Beras atau Emas beli Kurma)
    if (itemA.category !== itemB.category) {
      return {
        status: 'HALAL',
        statusTitle: 'SAH & HALAL (JUAL BELI MAKANAN DENGAN UANG)',
        color: 'emerald',
        reason: 'Kedua komoditas memiliki \'illat yang berbeda (Tsamaniyyah ditukar dengan Tha\'ām). Diperbolehkan berbeda kuantitas dan diperbolehkan tempo / hutang.',
        kaidah: 'Kaidah 3: Beda \'Illat -> Bebas takaran & bebas tempo.',
      };
    }

    // 3. Jika Satu Rumpun:
    // Cek apakah SEJENIS (misal Emas dgn Emas, Rupiah dgn Rupiah, Beras dgn Beras)
    const isSejenis =
      itemA.id === itemB.id ||
      (itemA.id.startsWith('beras') && itemB.id.startsWith('beras'));

    if (isSejenis) {
      // Wajib Tamatsul & Wajib Taqabudh
      if (!isSamaTakaran) {
        return {
          status: 'RIBA_FADHL',
          statusTitle: 'HARAM! TERINDIKASI RIBA FADHL',
          color: 'rose',
          reason: 'Komoditas yang ditukar adalah SEJENIS (emas dengan emas, atau beras dengan beras). Syariat mewajibkan TAMĀTSUL (sama persis bobot/timbangannya). Perbedaan kuantitas atau penambahan uang selisih melahirkan Riba Fadhl.',
          kaidah: 'Kaidah 1: Sejenis Ribawi -> Wajib Sama Takaran & Wajib Tunai di Tempat.',
        };
      }

      if (!isTunai) {
        return {
          status: 'RIBA_NASIAH',
          statusTitle: 'HARAM! TERINDIKASI RIBA NASI\'AH',
          color: 'rose',
          reason: 'Penundaan serah terima waktu (tempo) pada barter komoditas sejenis melahirkan Riba Nasi\'ah, meskipun bobot timbangannya sama.',
          kaidah: 'Kaidah 1: Sejenis Ribawi -> Wajib Sama Takaran & Wajib Tunai di Tempat.',
        };
      }

      if (!isTuntasSerahTerima) {
        return {
          status: 'RIBA_YAD',
          statusTitle: 'HARAM! TERINDIKASI RIBA YAD',
          color: 'rose',
          reason: 'Salah satu pihak telah berpisah fisik dari tempat transaksi sebelum serah terima fisik tuntas di majelis akad.',
          kaidah: 'Kaidah 1: Wajib serah terima sebelum berpisah majelis.',
        };
      }

      return {
        status: 'HALAL',
        statusTitle: 'SAH & HALAL (MEMENUHI SYARAT TAMATSUL & TAQABUDH)',
        color: 'emerald',
        reason: 'Barter komoditas sejenis sah karena sama persis takarannya dan diserahterimakan secara tunai kontan seketika di majelis akad.',
        kaidah: 'Kaidah 1 Terpenuhi Sempurna.',
      };
    } else {
      // Beda Jenis tapi SATU 'ILLAT (misal Emas dgn Perak, Rupiah dgn USD, Beras dgn Gandum)
      if (!isTunai) {
        return {
          status: 'RIBA_NASIAH',
          statusTitle: 'HARAM! TERINDIKASI RIBA NASI\'AH',
          color: 'rose',
          reason: 'Pertukaran komoditas satu \'illat beda jenis (seperti valas Rupiah dengan USD, atau emas dengan perak) BOLEH berbeda kurs/kuantitas, namun WAJIB TUNAI KONSTAN di tempat. Penundaan tempo melahirkan Riba Nasi\'ah.',
          kaidah: 'Kaidah 2: Beda Jenis Satu \'Illat -> Boleh Beda Kurs, WAJIB Tunai di Tempat.',
        };
      }

      if (!isTuntasSerahTerima) {
        return {
          status: 'RIBA_YAD',
          statusTitle: 'HARAM! TERINDIKASI RIBA YAD',
          color: 'rose',
          reason: 'Para pihak berpisah badan sebelum barang/uang diserahterimakan secara tuntas di tempat akad.',
          kaidah: 'Kaidah 2: Wajib Yadan bi Yadin (tangan ke tangan sebelum berpisah).',
        };
      }

      return {
        status: 'HALAL',
        statusTitle: 'SAH & HALAL (ASH-SHARF / BARTER BEDA JENIS TUNAI)',
        color: 'emerald',
        reason: 'Boleh berbeda kurs/timbangan asalkan diserahterimakan secara tunai tangan ke tangan (*Yadan bi Yadin*) saat itu juga.',
        kaidah: 'Kaidah 2 Terpenuhi Sempurna.',
      };
    }
  };

  const result = evaluateBarter();

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <Scale className="w-4 h-4 text-rose-700" />
          <span>Laboratorium & Simulator Fiqih Barter Ribawi</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Simulator Detektor Barter: Uji Keabsahan & Deteksi Riba Seketika
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Pilih dua komoditas yang hendak dipertukarkan, tentukan kesamaan takaran dan cara serah terima.
          Sistem kecerdasan fiqih ini akan mengevaluasi apakah transaksi tersebut <strong>SAH & HALAL</strong>,
          atau terindikasi <strong>RIBA FADHL</strong>, <strong>RIBA NASI'AH</strong>, atau <strong>RIBA YAD</strong>.
        </p>
      </div>

      {/* Simulator Inputs & Result */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Komoditas A */}
          <div className="space-y-3 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block text-xs uppercase tracking-wider">
              Komoditas Pertama (Pihak 1):
            </span>
            <select
              value={itemAId}
              onChange={(e) => setItemAId(e.target.value)}
              className="w-full p-2.5 border border-stone-300 rounded bg-white text-xs font-medium focus:ring-2 focus:ring-rose-700 focus:outline-none"
            >
              {COMMODITIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.categoryLabel})
                </option>
              ))}
            </select>
            <span className="text-[11px] text-stone-500 block">
              Kategori 'Illat: <strong>{itemA.categoryLabel}</strong>
            </span>
          </div>

          {/* Komoditas B */}
          <div className="space-y-3 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block text-xs uppercase tracking-wider">
              Komoditas Kedua (Pihak 2):
            </span>
            <select
              value={itemBId}
              onChange={(e) => setItemBId(e.target.value)}
              className="w-full p-2.5 border border-stone-300 rounded bg-white text-xs font-medium focus:ring-2 focus:ring-rose-700 focus:outline-none"
            >
              {COMMODITIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.categoryLabel})
                </option>
              ))}
            </select>
            <span className="text-[11px] text-stone-500 block">
              Kategori 'Illat: <strong>{itemB.categoryLabel}</strong>
            </span>
          </div>
        </div>

        {/* Parameter Transaksi */}
        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
          <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px]">
            Kondisi Akad Pertukaran:
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Kuantitas */}
            <div className="space-y-1.5 p-3 bg-white rounded-lg border border-stone-200">
              <span className="font-bold text-stone-800 block text-xs">Kuantitas / Bobot Timbangan:</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="takaran"
                  checked={isSamaTakaran}
                  onChange={() => setIsSamaTakaran(true)}
                  className="accent-rose-700"
                />
                <span className="text-[11px] text-stone-700">Sama Persis (Tamātsul)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="takaran"
                  checked={!isSamaTakaran}
                  onChange={() => setIsSamaTakaran(false)}
                  className="accent-rose-700"
                />
                <span className="text-[11px] text-stone-700">Berbeda Kuantitas / Ada Selisih</span>
              </label>
            </div>

            {/* Waktu Pembayaran */}
            <div className="space-y-1.5 p-3 bg-white rounded-lg border border-stone-200">
              <span className="font-bold text-stone-800 block text-xs">Waktu Serah Terima:</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="waktu"
                  checked={isTunai}
                  onChange={() => setIsTunai(true)}
                  className="accent-rose-700"
                />
                <span className="text-[11px] text-stone-700">Tunai Langsung Saat Itu Juga</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="waktu"
                  checked={!isTunai}
                  onChange={() => setIsTunai(false)}
                  className="accent-rose-700"
                />
                <span className="text-[11px] text-stone-700">Ditunda / Tempo / Cicilan (Kredit)</span>
              </label>
            </div>

            {/* Serah Terima di Majelis */}
            <div className="space-y-1.5 p-3 bg-white rounded-lg border border-stone-200">
              <span className="font-bold text-stone-800 block text-xs">Keberadaan di Majelis:</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="majelis"
                  checked={isTuntasSerahTerima}
                  onChange={() => setIsTuntasSerahTerima(true)}
                  className="accent-rose-700"
                />
                <span className="text-[11px] text-stone-700">Tuntas serah terima sebelum pisah</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="majelis"
                  checked={!isTuntasSerahTerima}
                  onChange={() => setIsTuntasSerahTerima(false)}
                  className="accent-rose-700"
                />
                <span className="text-[11px] text-stone-700">Berpisah sebelum serah terima fisik</span>
              </label>
            </div>
          </div>
        </div>

        {/* Output Hasil Evaluasi */}
        <div
          className={`p-5 rounded-xl border space-y-3 ${
            result.color === 'emerald'
              ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
              : 'bg-rose-50/80 border-rose-300 text-rose-950'
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/10 pb-2">
            <span className="font-bold text-xs uppercase tracking-wider">Hasil Analisis Fiqih Barter:</span>
            <span
              className={`px-2.5 py-1 rounded text-xs font-bold ${
                result.color === 'emerald' ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'
              }`}
            >
              {result.statusTitle}
            </span>
          </div>

          <p className="text-xs leading-relaxed">{result.reason}</p>

          <div className="p-2.5 bg-white/70 rounded border border-black/10 text-[11px] font-mono">
            <strong>Rujukan Kaidah Syar'i: </strong>
            {result.kaidah}
          </div>
        </div>
      </div>

      {/* 3 Kaidah Barter Syar'i Cheatsheet */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-stone-900 font-serif">
          Tiga Kaidah Emas Barter Komoditas Syariah
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <strong className="text-stone-900 block font-bold text-xs">Kaidah 1: Sejenis Ribawi</strong>
            <span className="text-[10px] text-rose-800 font-mono block">Emas dgn Emas / Beras dgn Beras</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Wajib <strong>Tamātsul</strong> (sama timbangan) dan <strong>Taqābudh</strong> (tunai seketika di majelis). Haram tempo dan haram selisih.
            </p>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <strong className="text-stone-900 block font-bold text-xs">Kaidah 2: Beda Jenis Satu 'Illat</strong>
            <span className="text-[10px] text-sky-800 font-mono block">Emas dgn Perak / Rupiah dgn USD</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Boleh <strong>Tafādhul</strong> (beda kurs/takaran), namun <strong>WAJIB Taqābudh</strong> (tunai seketika tangan ke tangan). Haram tempo (*Nasi'ah*).
            </p>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <strong className="text-stone-900 block font-bold text-xs">Kaidah 3: Beda 'Illat & Beda Rumpun</strong>
            <span className="text-[10px] text-emerald-800 font-mono block">Uang beli Beras / Mobil beli Rumah</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Bebas takaran dan bebas tempo/kredit. Masuk ke dalam kategori jual beli biasa yang halal (*Ahallallāhul bai'*).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
