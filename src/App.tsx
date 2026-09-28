import React, { useState } from 'react';
import { Header } from './components/Header';
import { CalculatorTab } from './components/CalculatorTab';
import { TheoryTab } from './components/TheoryTab';
import { HijabTreeTab } from './components/HijabTreeTab';
import { SpecialCasesTab } from './components/SpecialCasesTab';
import { QuizTab } from './components/QuizTab';
import { TajhizGuideTab } from './components/TajhizGuideTab';
import { DeceasedGender, HeirRole } from './types/faraidh';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('calculator');
  const [calculatorKey, setCalculatorKey] = useState<number>(0);
  const [initialDeceasedGender, setInitialDeceasedGender] = useState<DeceasedGender>('male');
  const [initialPresetHeirs, setInitialPresetHeirs] = useState<
    { role: HeirRole; count: number }[] | undefined
  >(undefined);

  const handleResetCalculator = () => {
    setInitialDeceasedGender('male');
    setInitialPresetHeirs(undefined);
    setCalculatorKey((prev) => prev + 1);
  };

  const handleLoadCaseToCalculator = (
    deceasedGender: DeceasedGender,
    presetHeirs: { role: HeirRole; count: number }[]
  ) => {
    setInitialDeceasedGender(deceasedGender);
    setInitialPresetHeirs(presetHeirs);
    setCalculatorKey((prev) => prev + 1);
    setActiveTab('calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans">
      {/* 3-zone Header Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={(tabId) => {
          setActiveTab(tabId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onResetCalculator={activeTab === 'calculator' ? handleResetCalculator : undefined}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'calculator' && (
          <CalculatorTab
            key={calculatorKey}
            initialDeceasedGender={initialDeceasedGender}
            initialPresetHeirs={initialPresetHeirs}
          />
        )}

        {activeTab === 'theory' && <TheoryTab />}

        {activeTab === 'hijab-tree' && <HijabTreeTab />}

        {activeTab === 'special-cases' && (
          <SpecialCasesTab onLoadCaseToCalculator={handleLoadCaseToCalculator} />
        )}

        {activeTab === 'quiz' && <QuizTab />}

        {activeTab === 'tajhiz' && <TajhizGuideTab />}
      </main>

      {/* Editorial Footer */}
      <footer className="bg-white border-t border-stone-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-stone-800 text-sm">FaraidhEdu</span>
              <span>·</span>
              <span>Media Pembelajaran Fiqih Mawarith & Hitungan Waris Islam</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-stone-600">
              <span>QS. An-Nisa: 11, 12, 176</span>
              <span>·</span>
              <span>Madzhab Syafi'i & Jumhur Shahabat</span>
              <span>·</span>
              <span>Kompilasi Hukum Islam (KHI)</span>
            </div>

            <div className="text-stone-400">
              Hak Cipta © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
