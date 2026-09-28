import React, { useState } from 'react';
import { Header, MainChapter } from './components/Header';

// BAB 1: Thaharah Components
import { ThaharahOverview } from './components/thaharah/ThaharahOverview';
import { NajisGuide } from './components/thaharah/NajisGuide';
import { WudhuGhuslGuide } from './components/thaharah/WudhuGhuslGuide';
import { ThaharahQuiz } from './components/thaharah/ThaharahQuiz';

// BAB 2: Haid, Istihadhah, & Nifas Components
import { HaidOverview } from './components/haid/HaidOverview';
import { BloodSimulator } from './components/haid/BloodSimulator';
import { IstihadhahGuide } from './components/haid/IstihadhahGuide';
import { HaidQuiz } from './components/haid/HaidQuiz';

// BAB 3: Shalat Components
import { ShalatOverview } from './components/shalat/ShalatOverview';
import { AbadhHaiahGuide } from './components/shalat/AbadhHaiahGuide';
import { JamakQasharCalculator } from './components/shalat/JamakQasharCalculator';
import { ShalatQuiz } from './components/shalat/ShalatQuiz';

// BAB 19: Munakahat Components
import { MunakahatOverview } from './components/munakahat/MunakahatOverview';
import { MahramChecker } from './components/munakahat/MahramChecker';
import { WaliNikahTree } from './components/munakahat/WaliNikahTree';
import { IddahCalculator } from './components/munakahat/IddahCalculator';
import { MunakahatQuiz } from './components/munakahat/MunakahatQuiz';

// BAB 21: Faraidh Components
import { CalculatorTab } from './components/CalculatorTab';
import { TheoryTab } from './components/TheoryTab';
import { HijabTreeTab } from './components/HijabTreeTab';
import { SpecialCasesTab } from './components/SpecialCasesTab';
import { QuizTab } from './components/QuizTab';
import { TajhizGuideTab } from './components/TajhizGuideTab';

import { DeceasedGender, HeirRole } from './types/faraidh';

export default function App() {
  const [currentChapter, setCurrentChapter] = useState<MainChapter>('shalat');
  const [activeTab, setActiveTab] = useState<string>('shalat-overview');
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
    if (chapter === 'thaharah') {
      setActiveTab('thaharah-overview');
    } else if (chapter === 'haid') {
      setActiveTab('haid-overview');
    } else if (chapter === 'shalat') {
      setActiveTab('shalat-overview');
    } else if (chapter === 'munakahat') {
      setActiveTab('overview');
    } else {
      setActiveTab('calculator');
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
      {/* 3-zone Header Navigation with 5-Chapter Switcher */}
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
        {/* BAB 1: THAHARAH (BERSUCI) */}
        {currentChapter === 'thaharah' && (
          <>
            {activeTab === 'thaharah-overview' && <ThaharahOverview />}
            {activeTab === 'najis' && <NajisGuide />}
            {activeTab === 'wudhu-ghusl' && <WudhuGhuslGuide />}
            {activeTab === 'thaharah-quiz' && <ThaharahQuiz />}
          </>
        )}

        {/* BAB 2: HAID, ISTIHADHAH & NIFAS */}
        {currentChapter === 'haid' && (
          <>
            {activeTab === 'haid-overview' && <HaidOverview />}
            {activeTab === 'blood-simulator' && <BloodSimulator />}
            {activeTab === 'istihadhah' && <IstihadhahGuide />}
            {activeTab === 'haid-quiz' && <HaidQuiz />}
          </>
        )}

        {/* BAB 3: SHALAT (TIANG AGAMA) */}
        {currentChapter === 'shalat' && (
          <>
            {activeTab === 'shalat-overview' && <ShalatOverview />}
            {activeTab === 'sunnah-sahwi' && <AbadhHaiahGuide />}
            {activeTab === 'jamak-qashar' && <JamakQasharCalculator />}
            {activeTab === 'shalat-quiz' && <ShalatQuiz />}
          </>
        )}

        {/* BAB 19: MUNAKAHAT (PERNIKAHAN) */}
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

        {/* BAB 21: FARAIDH (WARIS) */}
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
      </main>

      {/* Editorial Footer */}
      <footer className="bg-white border-t border-stone-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-stone-800 text-sm">FiqihEdu</span>
              <span>·</span>
              <span>
                {currentChapter === 'thaharah' && 'BAB 1: Fiqih Thaharah (Bersuci dalam Islam)'}
                {currentChapter === 'haid' && 'BAB 2: Fiqih Haid, Istihadhah & Nifas'}
                {currentChapter === 'shalat' && 'BAB 3: Fiqih Shalat (Tiang Agama Islam)'}
                {currentChapter === 'munakahat' && 'BAB 19: Fiqih Munakahat (Pernikahan dalam Islam)'}
                {currentChapter === 'faraidh' && 'BAB 21: Fiqih Mawarith (Kewarisan & Hitungan Waris)'}
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
