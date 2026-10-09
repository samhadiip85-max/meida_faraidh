import React from 'react';
import { Briefcase, ShieldCheck, Scale, Sparkles, Sprout, Users, Handshake, ShieldAlert, BookOpen, Layers } from 'lucide-react';

export function MuamalahOverview() {
  const categories = [
    {
      title: '1. Sektor Riil & Pertanian',
      icon: Sprout,
      color: 'emerald',
      items: ['Musāqāh (Kebun Buah)', 'Muzāra\'ah (Benih Pemilik)', 'Mukhābarah (Benih Petani)'],
      desc: 'Kerja sama pengelolaan kebun dan lahan pertanian dengan sistem bagi hasil panen yang adil tanpa riba.',
    },
    {
      title: '2. Kemitraan Usaha & Investasi',
      icon: Handshake,
      color: 'sky',
      items: ['Qirādh / Mudhārabah (Modal & Tenaga)', 'Syirkah / Musyārakah (Kongsi Modal Bersama)'],
      desc: 'Kerja sama permodalan bisnis dengan prinsip profit-and-loss sharing seimbang sesuai kontribusi modal dan keahlian.',
    },
    {
      title: '3. Jual Beli Komersial & Jasa',
      icon: Briefcase,
      color: 'indigo',
      items: ['Murābahah (Cost-Plus Margin Terbuka)', 'Ijārah (Sewa Aset & Upah Tenaga Kerja)'],
      desc: 'Pertukaran barang dan sewa manfaat jasa secara transparan untuk memenuhi kebutuhan hidup masyarakat.',
    },
    {
      title: '4. Penjaminan, Proteksi & Sengketa',
      icon: ShieldCheck,
      color: 'amber',
      items: ['Syuf\'ah (Hak Opsi Sekutu)', 'Dhamān (Jaminan Utang)', 'Kafālah (Jaminan Kehadiran)', 'Shulūh (Damai Sengketa)', 'Rahn (Gadai)', 'Hawālah (Alih Utang)'],
      desc: 'Instrumen mitigasi risiko, penegakan keadilan antar-mitra usaha, dan penyelesaian sengketa hak finansial.',
    },
    {
      title: '5. Jasa Sosial & Penitipan Amanah',
      icon: Users,
      color: 'purple',
      items: ['Wakālah (Pendelegasian Kuasa)', 'Wadī\'ah (Titipan Murni)', 'Qardhul Hasan (Pinjaman Kebajikan)'],
      desc: 'Pelayanan tolong-menolong (*Ta\'āwun*) sosial tanpa mencari keuntungan riba komersial.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Briefcase className="w-4 h-4 text-emerald-700" />
          <span>BAB 13: Fiqih Mu'āmalah Māliyyah (Hukum Transaksi Ekonomi Islam)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kaidah Asas, Rumpun Akad Ekonomi, & Kemitraan Bisnis Syar'i
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Fiqih Muamalah adalah aturan hukum syariat yang mengatur hubungan keperdataan dan lalu lintas ekonomi antar-manusia
          untuk mewujudkan keadilan, kemakmuran, dan keberkahan.
          Kaidah ushul fiqih yang agung menetapkan: <em>"Al-Ashlu fīl-mu'āmalāti al-ibāhah illā mā dalla ad-dalīlu 'alā tahrīmihi"</em> (Hukum asal seluruh transaksi muamalah adalah <strong>BOLEH</strong>, sampai ada dalil shahih yang melarangnya).
        </p>
      </div>

      {/* 4 Pilar Larangan Pokok dalam Muamalah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <ShieldAlert className="w-4 h-4 text-rose-700" />
            <span>Kaidah Pembatal Keabsahan Akad</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            4 Rambu Larangan Utama dalam Transaksi Syariah
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Semua inovasi produk dan akad bisnis halal selama terbebas dari 4 unsur berikut:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 bg-rose-50/60 rounded-xl border border-rose-200 space-y-1">
            <strong className="text-rose-950 font-bold block text-xs">1. Ar-Ribā (الرِّبَا)</strong>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Kelebihan nominal atau denda tempo pada pinjaman utang serta ketidakseimbangan barter komoditas ribawi sejenis.
            </p>
          </div>

          <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200 space-y-1">
            <strong className="text-amber-950 font-bold block text-xs">2. Al-Gharar (الغَرَر)</strong>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Ketidakpastian spekulatif dan ketidakjelasan kuantitas, kualitas, atau kemampuan serah terima objek barang.
            </p>
          </div>

          <div className="p-3.5 bg-purple-50/60 rounded-xl border border-purple-200 space-y-1">
            <strong className="text-purple-950 font-bold block text-xs">3. Al-Maisir (المَيْسِر)</strong>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Perjudian atau spekulasi taruhan zero-sum game di mana satu pihak untung murni di atas kerugian mutlak pihak lain.
            </p>
          </div>

          <div className="p-3.5 bg-stone-100 rounded-xl border border-stone-300 space-y-1">
            <strong className="text-stone-950 font-bold block text-xs">4. Azh-Zhulm (الظُّلْم)</strong>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Kezaliman, penipuan (*tadlis*), pemaksaan sepihak, monopoli penimbunan sembako (*ihtikar*), atau merugikan masyarakat.
            </p>
          </div>
        </div>
      </div>

      {/* 5 Rumpun Besar Akad Muamalah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>Peta Sistematika Akad Syariah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            5 Rumpun Besar 16 Akad Muamalah Islam
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Berikut peta komprehensif akad-akad muamalah yang dipelajari pada bab ini:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                      <Icon className="w-4 h-4" />
                    </div>
                    <strong className="font-bold text-stone-900 text-sm">{cat.title}</strong>
                  </div>
                  <p className="text-stone-600 text-[11px] leading-relaxed">{cat.desc}</p>
                </div>

                <div className="border-t border-stone-200 pt-2 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-stone-500 block">Daftar Akad:</span>
                  <div className="flex flex-wrap gap-1">
                    {cat.items.map((item, itemIdx) => (
                      <span key={itemIdx} className="px-2 py-0.5 rounded bg-white border border-stone-200 text-[11px] text-stone-700 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
