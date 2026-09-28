export interface HeaderProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onResetCalculator?: () => void;
}

export function Header({ activeTab, onSelectTab, onResetCalculator }: HeaderProps) {
  const navItems = [
    { id: 'calculator', label: 'Kalkulator' },
    { id: 'theory', label: 'Materi Furudh' },
    { id: 'hijab-tree', label: 'Pohon Hijab' },
    { id: 'special-cases', label: 'Kasus Khusus' },
    { id: 'quiz', label: 'Latihan Soal' },
    { id: 'tajhiz', label: 'Panduan Tajhiz' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element Brand Title */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectTab('calculator')}
            className="text-left group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
              ف
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-stone-900 font-serif">
                FaraidhEdu
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-stone-500 font-sans">
                Fiqih Mawarith & Hitungan Waris
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: 4-6 nav links, single-line */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-900 font-semibold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2">
          {onResetCalculator && (
            <button
              onClick={onResetCalculator}
              className="px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-300 rounded-md hover:bg-stone-50 transition-colors whitespace-nowrap"
            >
              Reset Data
            </button>
          )}
          <button
            onClick={() => onSelectTab('calculator')}
            className="px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-700 rounded-md hover:bg-emerald-800 transition-colors whitespace-nowrap shadow-xs"
          >
            Hitung Waris
          </button>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="lg:hidden flex items-center overflow-x-auto px-4 py-2 border-t border-stone-100 gap-1 scrollbar-none">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded whitespace-nowrap shrink-0 transition-colors ${
                isActive
                  ? 'bg-emerald-100 text-emerald-900 font-semibold'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
