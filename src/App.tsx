import React, { useState } from 'react';
import { Header, MainChapter } from './components/Header';
// BAB I: Faraidh Components
import { CalculatorTab } from './components/CalculatorTab';
import { TheoryTab } from './components/TheoryTab';
import { HijabTreeTab } from './components/HijabTreeTab';
import { SpecialCasesTab } from './components/SpecialCasesTab';
import { QuizTab } from './components/QuizTab';
import { TajhizGuideTab } from './components/TajhizGuideTab';
// BAB II: Munakahat Components
import { MunakahatOverview } from './components/munakahat/MunakahatOverview';
import { MahramChecker } from './components/munakahat/MahramChecker';
import { WaliNikahTree } from './components/munakahat/WaliNikahTree';
import { IddahCalculator } from './components/munakahat/IddahCalculator';
import { MunakahatQuiz } from './components/munakahat/MunakahatQuiz';

import { DeceasedGender, HeirRole } from './types/faraidh';

export default function App() {
  const [currentChapter, setCurrentChapter] = useState<MainChapter>('faraidh');
  const [activeTab, setActiveTab] = useState<string>('calculator');
  const [calculatorKey, setCalculatorKey] = useState<number>(0);
  const [initialDeceasedGender, setInitialDeceasedGender] = useState<DeceasedGender>('male');
  const [initialPresetHeirs, setInitialPresetHeirs] = useState<
    { role: HeirRole; count: number }[] | undefined
  >(undefined);

  const safeScrollToTop = () => {
    try {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      try {
        window.scrollTo(0, 0);
      } catch {
        // fallback
      }
    }
  };

  const handleSelectChapter = (chapter: MainChapter) => {
    setCurrentChapter(chapter);
    if (chapter === 'faraidh') {
      setActiveTab('calculator');
    } else {
      setActiveTab('overview');
    }
    safeScrollToTop();
  };

  const handleResetCalculator = () => {
    setInitialDeceasedGender('male');
    setInitialPresetHeirs(undefined);
    setCalculatorKey((prev) => prev + 1);
  };

  const handleLoadCaseToCalculator = (
    deceasedGender: DeceasedGender,
    presetHeirs: { role: HeirRole; count: number }[]
  ) => {
    setCurrentChapter('faraidh');
    setInitialDeceasedGender(deceasedGender);
    setInitialPresetHeirs(presetHeirs);
    setCalculatorKey((prev) => prev + 1);
    setActiveTab('calculator');
    safeScrollToTop();
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans">
      {/* 3-zone Header Navigation with Chapter Switcher */}
      <Header
        currentChapter={currentChapter}
        onSelectChapter={handleSelectChapter}
        activeTab={activeTab}
        onSelectTab={(tabId) => {
          setActiveTab(tabId);
          safeScrollToTop();
        }}
        onResetCalculator={
          currentChapter === 'faraidh' && activeTab === 'calculator'
            ? handleResetCalculator
            : undefined
        }
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* BAB I: FARAIDH (WARIS) */}
        {currentChapter === 'faraidh' && (
          <>
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
          </>
        )}

        {/* BAB II: MUNAKAHAT (PERNIKAHAN) */}
        {currentChapter === 'munakahat' && (
          <>
            {activeTab === 'overview' && (
              <MunakahatOverview
                onGoToFaraidh={() => {
                  setCurrentChapter('faraidh');
                  setActiveTab('calculator');
                  safeScrollToTop();
                }}
              />
            )}

            {activeTab === 'mahram' && <MahramChecker />}

            {activeTab === 'wali' && <WaliNikahTree />}

            {activeTab === 'iddah' && <IddahCalculator />}

            {activeTab === 'munakahat-quiz' && <MunakahatQuiz />}
          </>
        )}
      </main>

      {/* Editorial Footer */}
      <footer className="bg-white border-t border-stone-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-stone-800 text-sm">FiqihEdu</span>
              <span>·</span>
              <span>
                {currentChapter === 'faraidh'
                  ? 'BAB I: Fiqih Mawarith & Hitungan Waris'
                  : 'BAB II: Fiqih Munakahat & Hukum Keluarga Islam'}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-stone-600">
              <span>Al-Qur\'an & As-Sunnah</span>
              <span>·</span>
              <span>Madzhab Syafi\'i & Jumhur Ulama</span>
              <span>·</span>
              <span>Kompilasi Hukum Islam (KHI)</span>
            </div>

            <div className="text-stone-400">
              Hak Cipta © {new Date().getFullYear()} FiqihEdu
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
