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

// BAB 4: Jama'ah, Jum'at & Musafir Components
import { JamaahOverview } from './components/jamaahJumat/JamaahOverview';
import { JumatGuide } from './components/jamaahJumat/JumatGuide';
import { MusafirVehicleGuide } from './components/jamaahJumat/MusafirVehicleGuide';
import { JamaahJumatQuiz } from './components/jamaahJumat/JamaahJumatQuiz';

// BAB 5: Pemulasaran Jenazah Components
import { JenazahOverview } from './components/jenazah/JenazahOverview';
import { ShalatJenazahSimulator } from './components/jenazah/ShalatJenazahSimulator';
import { KuburTalqinGuide } from './components/jenazah/KuburTalqinGuide';
import { JenazahQuiz } from './components/jenazah/JenazahQuiz';

// BAB 6: Zakat Components
import { ZakatOverview } from './components/zakat/ZakatOverview';
import { ZakatCalculator } from './components/zakat/ZakatCalculator';
import { AshnafGuide } from './components/zakat/AshnafGuide';
import { ZakatQuiz } from './components/zakat/ZakatQuiz';

// BAB 7: Puasa Components
import { PuasaOverview } from './components/puasa/PuasaOverview';
import { FidyahQadhaCalculator } from './components/puasa/FidyahQadhaCalculator';
import { PuasaSunnahGuide } from './components/puasa/PuasaSunnahGuide';
import { PuasaQuiz } from './components/puasa/PuasaQuiz';

// BAB 8: Haji & Umrah Components
import { HajiOverview } from './components/haji/HajiOverview';
import { ManasikSimulator } from './components/haji/ManasikSimulator';
import { LaranganDamGuide } from './components/haji/LaranganDamGuide';
import { HajiQuiz } from './components/haji/HajiQuiz';

// BAB 9: Qurban & Aqiqah Components
import { QurbanOverview } from './components/qurban/QurbanOverview';
import { QurbanCalculator } from './components/qurban/QurbanCalculator';
import { AqiqahGuide } from './components/qurban/AqiqahGuide';
import { QurbanQuiz } from './components/qurban/QurbanQuiz';

// BAB 10: Sembelihan, Berburu & Makanan Halal Components
import { SembelihOverview } from './components/sembelih/SembelihOverview';
import { BerburuGuide } from './components/sembelih/BerburuGuide';
import { HalalFoodChecker } from './components/sembelih/HalalFoodChecker';
import { SembelihQuiz } from './components/sembelih/SembelihQuiz';

// BAB 11: Kepemilikan Harta Components
import { MilkiyyahOverview } from './components/milkiyyah/MilkiyyahOverview';
import { SebabKepemilikanGuide } from './components/milkiyyah/SebabKepemilikanGuide';
import { IhyaMawatSimulator } from './components/milkiyyah/IhyaMawatSimulator';
import { MilkiyyahQuiz } from './components/milkiyyah/MilkiyyahQuiz';

// BAB 12: Jual Beli Components
import { JualBeliOverview } from './components/jualbeli/JualBeliOverview';
import { KhiyarGuide } from './components/jualbeli/KhiyarGuide';
import { ObjekJualBeliGuide } from './components/jualbeli/ObjekJualBeliGuide';
import { JualBeliQuiz } from './components/jualbeli/JualBeliQuiz';

// BAB 13: Muamalah Components
import { MuamalahOverview } from './components/muamalah/MuamalahOverview';
import { AkadCatalog } from './components/muamalah/AkadCatalog';
import { MuamalahSimulator } from './components/muamalah/MuamalahSimulator';
import { MuamalahQuiz } from './components/muamalah/MuamalahQuiz';

// BAB 14: Hibah & Wakaf Components
import { HibahWakafOverview } from './components/hibahwakaf/HibahWakafOverview';
import { HibahGuide } from './components/hibahwakaf/HibahGuide';
import { WakafGuide } from './components/hibahwakaf/WakafGuide';
import { HibahWakafSimulator } from './components/hibahwakaf/HibahWakafSimulator';
import { HibahWakafQuiz } from './components/hibahwakaf/HibahWakafQuiz';

// BAB 15: Riba Components
import { RibaOverview } from './components/riba/RibaOverview';
import { MacamRibaGuide } from './components/riba/MacamRibaGuide';
import { RibaBarterSimulator } from './components/riba/RibaBarterSimulator';
import { RibaDetectorCases } from './components/riba/RibaDetectorCases';
import { RibaQuiz } from './components/riba/RibaQuiz';

// BAB 16: Jinayat Components
import { JinayatOverview } from './components/jinayat/JinayatOverview';
import { QishashGuide } from './components/jinayat/QishashGuide';
import { DiyatCalculator } from './components/jinayat/DiyatCalculator';
import { JinayatQuiz } from './components/jinayat/JinayatQuiz';

// BAB 17: Hudud Components
import { HududOverview } from './components/hudud/HududOverview';
import { MateriHududGuide } from './components/hudud/MateriHududGuide';
import { HududSimulator } from './components/hudud/HududSimulator';
import { HududQuiz } from './components/hudud/HududQuiz';

// BAB 18: Peradilan Islam Components
import { PeradilanOverview } from './components/peradilan/PeradilanOverview';
import { HakimAdabGuide } from './components/peradilan/HakimAdabGuide';
import { PeradilanSimulator } from './components/peradilan/PeradilanSimulator';
import { PeradilanQuiz } from './components/peradilan/PeradilanQuiz';

// BAB 19: Munakahat Components
import { MunakahatOverview } from './components/munakahat/MunakahatOverview';
import { MahramChecker } from './components/munakahat/MahramChecker';
import { WaliNikahTree } from './components/munakahat/WaliNikahTree';
import { IddahCalculator } from './components/munakahat/IddahCalculator';
import { MunakahatQuiz } from './components/munakahat/MunakahatQuiz';

// BAB 20: Perceraian Components
import { PerceraianOverview } from './components/perceraian/PerceraianOverview';
import { KlasifikasiThalaqGuide } from './components/perceraian/KlasifikasiThalaqGuide';
import { ThalaqHadhanahSimulator } from './components/perceraian/ThalaqHadhanahSimulator';
import { PerceraianQuiz } from './components/perceraian/PerceraianQuiz';

// BAB 21: Faraidh Components
import { CalculatorTab } from './components/CalculatorTab';
import { TheoryTab } from './components/TheoryTab';
import { HijabTreeTab } from './components/HijabTreeTab';
import { SpecialCasesTab } from './components/SpecialCasesTab';
import { QuizTab } from './components/QuizTab';
import { TajhizGuideTab } from './components/TajhizGuideTab';

// BAB 22: Wasiat Components
import { WasiatOverview } from './components/wasiat/WasiatOverview';
import { PanduanWasiatGuide } from './components/wasiat/PanduanWasiatGuide';
import { WasiatSimulator } from './components/wasiat/WasiatSimulator';
import { WasiatQuiz } from './components/wasiat/WasiatQuiz';

// Daftar Pustaka Component
import { DaftarPustakaView } from './components/pustaka/DaftarPustakaView';

// Bottom Navigation Component
import { ChapterBottomNav } from './components/ChapterBottomNav';

// Sidebar & User Management Components
import { Sidebar } from './components/Sidebar';
import { UserAccessManagement } from './components/userManagement/UserAccessManagement';
import { AppUser, INITIAL_USERS } from './types/userAccess';
import { getChapterTabs } from './utils/chapterTabs';

import { DeceasedGender, HeirRole } from './types/faraidh';

export default function App() {
  const [currentChapter, setCurrentChapter] = useState<MainChapter>('thaharah');
  const [activeTab, setActiveTab] = useState<string>('thaharah-overview');
  const [calculatorKey, setCalculatorKey] = useState<number>(0);
  const [initialDeceasedGender, setInitialDeceasedGender] = useState<DeceasedGender>('male');
  const [initialPresetHeirs, setInitialPresetHeirs] = useState<
    { role: HeirRole; count: number }[] | undefined
  >(undefined);

  // Sidebar & User Access Management states
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isUserManagementOpen, setIsUserManagementOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<AppUser>(INITIAL_USERS[0]);

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
    } else if (chapter === 'jamaah_jumat') {
      setActiveTab('jamaah-overview');
    } else if (chapter === 'jenazah') {
      setActiveTab('jenazah-overview');
    } else if (chapter === 'zakat') {
      setActiveTab('zakat-overview');
    } else if (chapter === 'puasa') {
      setActiveTab('puasa-overview');
    } else if (chapter === 'haji') {
      setActiveTab('haji-overview');
    } else if (chapter === 'qurban') {
      setActiveTab('qurban-overview');
    } else if (chapter === 'sembelih') {
      setActiveTab('sembelih-overview');
    } else if (chapter === 'milkiyyah') {
      setActiveTab('milkiyyah-overview');
    } else if (chapter === 'jualbeli') {
      setActiveTab('jualbeli-overview');
    } else if (chapter === 'muamalah') {
      setActiveTab('muamalah-overview');
    } else if (chapter === 'hibah_wakaf') {
      setActiveTab('hibah-wakaf-overview');
    } else if (chapter === 'riba') {
      setActiveTab('riba-overview');
    } else if (chapter === 'jinayat') {
      setActiveTab('jinayat-overview');
    } else if (chapter === 'hudud') {
      setActiveTab('hudud-overview');
    } else if (chapter === 'peradilan') {
      setActiveTab('peradilan-overview');
    } else if (chapter === 'munakahat') {
      setActiveTab('overview');
    } else if (chapter === 'perceraian') {
      setActiveTab('perceraian-overview');
    } else if (chapter === 'faraidh') {
      setActiveTab('calculator');
    } else if (chapter === 'wasiat') {
      setActiveTab('wasiat-overview');
    } else if (chapter === 'pustaka') {
      setActiveTab('pustaka-overview');
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
      {/* 3-zone Header Navigation */}
      <Header
        currentChapter={currentChapter}
        onSelectChapter={(ch) => {
          setIsUserManagementOpen(false);
          handleSelectChapter(ch);
        }}
        activeTab={activeTab}
        onSelectTab={(tabId) => {
          setIsUserManagementOpen(false);
          setActiveTab(tabId);
          safeScrollToTop();
        }}
        onResetCalculator={
          currentChapter === 'faraidh' && activeTab === 'calculator'
            ? handleResetCalculator
            : undefined
        }
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        onOpenUserManagement={() => {
          setIsUserManagementOpen((prev) => !prev);
          safeScrollToTop();
        }}
        isUserManagementOpen={isUserManagementOpen}
      />

      {/* 2-Column Responsive Layout: Sidebar (Menu Materi) + Main Content */}
      <div className="flex-1 flex w-full max-w-7xl mx-auto">
        <Sidebar
          currentChapter={currentChapter}
          onSelectChapter={(ch) => {
            setIsUserManagementOpen(false);
            handleSelectChapter(ch);
          }}
          activeTab={activeTab}
          onSelectTab={(tabId) => {
            setIsUserManagementOpen(false);
            setActiveTab(tabId);
            safeScrollToTop();
          }}
          currentTabs={getChapterTabs(currentChapter)}
          isOpen={isSidebarOpen}
          onCloseMobile={() => setIsSidebarOpen(false)}
          currentUser={currentUser}
          onOpenUserManagement={() => {
            setIsUserManagementOpen(true);
            safeScrollToTop();
          }}
          isUserManagementOpen={isUserManagementOpen}
        />

        {/* Content Area */}
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {isUserManagementOpen ? (
            <UserAccessManagement
              currentUser={currentUser}
              onSwitchUser={(user) => setCurrentUser(user)}
              onClose={() => setIsUserManagementOpen(false)}
            />
          ) : (
            <>
              {/* BAB 1: THAHARAH (BERSUCI) */}
        {currentChapter === 'thaharah' && (
          <>
            {activeTab === 'thaharah-overview' && <ThaharahOverview />}
            {(activeTab === 'wudhu-simulator' || activeTab === 'wudhu-ghusl') && <WudhuGhuslGuide />}
            {(activeTab === 'najis-guide' || activeTab === 'najis') && <NajisGuide />}
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

        {/* BAB 4: JAMAAH, JUMAT & MUSAFIR */}
        {currentChapter === 'jamaah_jumat' && (
          <>
            {activeTab === 'jamaah-overview' && <JamaahOverview />}
            {activeTab === 'jumat-guide' && <JumatGuide />}
            {activeTab === 'musafir-guide' && <MusafirVehicleGuide />}
            {activeTab === 'jj-quiz' && <JamaahJumatQuiz />}
          </>
        )}

        {/* BAB 5: PEMULASARAN JENAZAH */}
        {currentChapter === 'jenazah' && (
          <>
            {activeTab === 'jenazah-overview' && <JenazahOverview />}
            {activeTab === 'shalat-jenazah' && <ShalatJenazahSimulator />}
            {(activeTab === 'kubur-ziarah' ||
              activeTab === 'kubur-talqin' ||
              activeTab === 'pemakaman' ||
              activeTab === 'takziyah' ||
              activeTab === 'ziarah' ||
              activeTab === 'pemakaman-takziyah' ||
              activeTab === 'pemakaman-takziyah-ziarah') && <KuburTalqinGuide />}
            {activeTab === 'jenazah-quiz' && <JenazahQuiz />}
          </>
        )}

        {/* BAB 6: ZAKAT */}
        {currentChapter === 'zakat' && (
          <>
            {activeTab === 'zakat-overview' && <ZakatOverview />}
            {(activeTab === 'zakat-calculator' ||
              activeTab === 'kalkulator-zakat' ||
              activeTab === 'kalkulator' ||
              activeTab === 'calculator') && <ZakatCalculator />}
            {(activeTab === 'ashnaf-guide' ||
              activeTab === 'mustahiq-guide' ||
              activeTab === 'asnaf-guide' ||
              activeTab === 'mustahik') && <AshnafGuide />}
            {activeTab === 'zakat-quiz' && <ZakatQuiz />}
          </>
        )}

        {/* BAB 7: PUASA */}
        {currentChapter === 'puasa' && (
          <>
            {activeTab === 'puasa-overview' && <PuasaOverview />}
            {(activeTab === 'fidyah-qadha' ||
              activeTab === 'pembatal-fidyah' ||
              activeTab === 'pembatal-puasa' ||
              activeTab === 'qadha-fidyah' ||
              activeTab === 'kalkulator-fidyah' ||
              activeTab === 'fidyah' ||
              activeTab === 'qadha') && (
              <FidyahQadhaCalculator />
            )}
            {activeTab === 'puasa-sunnah' && <PuasaSunnahGuide />}
            {activeTab === 'puasa-quiz' && <PuasaQuiz />}
          </>
        )}

        {/* BAB 8: HAJI & UMRAH */}
        {currentChapter === 'haji' && (
          <>
            {activeTab === 'haji-overview' && <HajiOverview />}
            {(activeTab === 'manasik-simulator' || activeTab === 'miqat-ihram') && (
              <ManasikSimulator />
            )}
            {(activeTab === 'larangan-dam' || activeTab === 'haji-tamattu') && (
              <LaranganDamGuide />
            )}
            {activeTab === 'haji-quiz' && <HajiQuiz />}
          </>
        )}

        {/* BAB 9: QURBAN & AQIQAH */}
        {currentChapter === 'qurban' && (
          <>
            {activeTab === 'qurban-overview' && <QurbanOverview />}
            {activeTab === 'qurban-calculator' && <QurbanCalculator />}
            {activeTab === 'aqiqah-guide' && <AqiqahGuide />}
            {activeTab === 'qurban-quiz' && <QurbanQuiz />}
          </>
        )}

        {/* BAB 10: SEMBELIHAN, BERBURU & MAKANAN HALAL */}
        {currentChapter === 'sembelih' && (
          <>
            {activeTab === 'sembelih-overview' && <SembelihOverview />}
            {activeTab === 'berburu-guide' && <BerburuGuide />}
            {(activeTab === 'halal-checker' || activeTab === 'halal-haram-makanan') && (
              <HalalFoodChecker />
            )}
            {activeTab === 'sembelih-quiz' && <SembelihQuiz />}
          </>
        )}

        {/* BAB 11: KEPEMILIKAN HARTA (AL-MILKIYYAH) */}
        {currentChapter === 'milkiyyah' && (
          <>
            {activeTab === 'milkiyyah-overview' && <MilkiyyahOverview />}
            {(activeTab === 'sebab-tamalluk' || activeTab === 'sebab-ihraz') && (
              <SebabKepemilikanGuide />
            )}
            {activeTab === 'ihya-mawat' && <IhyaMawatSimulator />}
            {activeTab === 'milkiyyah-quiz' && <MilkiyyahQuiz />}
          </>
        )}

        {/* BAB 12: JUAL BELI */}
        {currentChapter === 'jualbeli' && (
          <>
            {activeTab === 'jualbeli-overview' && <JualBeliOverview />}
            {(activeTab === 'khiyar-guide' || activeTab === 'khiyar-simulator') && (
              <KhiyarGuide />
            )}
            {activeTab === 'objek-jualbeli' && <ObjekJualBeliGuide />}
            {activeTab === 'jualbeli-quiz' && <JualBeliQuiz />}
          </>
        )}

        {/* BAB 13: MUAMALAH */}
        {currentChapter === 'muamalah' && (
          <>
            {activeTab === 'muamalah-overview' && <MuamalahOverview />}
            {(activeTab === 'akad-catalog' || activeTab === 'syirkah-calculator') && (
              <AkadCatalog />
            )}
            {(activeTab === 'skema-simulator' || activeTab === 'ijarah-rahn') && (
              <MuamalahSimulator />
            )}
            {activeTab === 'muamalah-quiz' && <MuamalahQuiz />}
          </>
        )}

        {/* BAB 14: HIBAH & WAKAF */}
        {currentChapter === 'hibah_wakaf' && (
          <>
            {activeTab === 'hibah-wakaf-overview' && <HibahWakafOverview />}
            {activeTab === 'hibah-guide' && <HibahGuide />}
            {(activeTab === 'wakaf-guide' || activeTab === 'wakaf-produktif') && <WakafGuide />}
            {activeTab === 'hibah-wakaf-simulator' && <HibahWakafSimulator />}
            {activeTab === 'hibah-wakaf-quiz' && <HibahWakafQuiz />}
          </>
        )}

        {/* BAB 15: RIBA */}
        {currentChapter === 'riba' && (
          <>
            {activeTab === 'riba-overview' && <RibaOverview />}
            {(activeTab === 'macam-riba' || activeTab === 'riba-types') && <MacamRibaGuide />}
            {(activeTab === 'barter-simulator' || activeTab === 'riba-simulator') && (
              <RibaBarterSimulator />
            )}
            {activeTab === 'riba-detector-cases' && <RibaDetectorCases />}
            {activeTab === 'riba-quiz' && <RibaQuiz />}
          </>
        )}

        {/* BAB 16: JINAYAT */}
        {currentChapter === 'jinayat' && (
          <>
            {activeTab === 'jinayat-overview' && <JinayatOverview />}
            {activeTab === 'qishash-guide' && <QishashGuide />}
            {activeTab === 'diyat-calculator' && <DiyatCalculator />}
            {activeTab === 'jinayat-quiz' && <JinayatQuiz />}
          </>
        )}

        {/* BAB 17: HUDUD */}
        {currentChapter === 'hudud' && (
          <>
            {activeTab === 'hudud-overview' && <HududOverview />}
            {(activeTab === 'materi-hudud' || activeTab === 'hudud-catalog') && (
              <MateriHududGuide />
            )}
            {activeTab === 'hudud-simulator' && <HududSimulator />}
            {activeTab === 'hudud-quiz' && <HududQuiz />}
          </>
        )}

        {/* BAB 18: PERADILAN ISLAM */}
        {currentChapter === 'peradilan' && (
          <>
            {activeTab === 'peradilan-overview' && <PeradilanOverview />}
            {(activeTab === 'hakim-adab' || activeTab === 'adab-hakim') && <HakimAdabGuide />}
            {(activeTab === 'peradilan-simulator' || activeTab === 'pembuktian-perkara') && (
              <PeradilanSimulator />
            )}
            {activeTab === 'peradilan-quiz' && <PeradilanQuiz />}
          </>
        )}

        {/* BAB 19: MUNAKAHAT (PERNIKAHAN) */}
        {currentChapter === 'munakahat' && (
          <>
            {(activeTab === 'overview' || activeTab === 'munakahat-overview' || activeTab === 'rukun-syarat-nikah') && (
              <MunakahatOverview
                onGoToFaraidh={() => {
                  setCurrentChapter('faraidh');
                  setActiveTab('calculator');
                  safeScrollToTop();
                }}
              />
            )}
            {(activeTab === 'mahram' || activeTab === 'mahram-wali') && <MahramChecker />}
            {activeTab === 'wali' && <WaliNikahTree />}
            {activeTab === 'iddah' && <IddahCalculator />}
            {activeTab === 'munakahat-quiz' && <MunakahatQuiz />}
          </>
        )}

        {/* BAB 20: PERCERAIAN */}
        {currentChapter === 'perceraian' && (
          <>
            {activeTab === 'perceraian-overview' && <PerceraianOverview />}
            {(activeTab === 'klasifikasi-thalaq' || activeTab === 'thalaq-types') && (
              <KlasifikasiThalaqGuide />
            )}
            {(activeTab === 'thalaq-simulator' || activeTab === 'iddah-rujuk') && (
              <ThalaqHadhanahSimulator />
            )}
            {activeTab === 'perceraian-quiz' && <PerceraianQuiz />}
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

        {/* BAB 22: WASIAT */}
        {currentChapter === 'wasiat' && (
          <>
            {activeTab === 'wasiat-overview' && <WasiatOverview />}
            {activeTab === 'panduan-wasiat' && <PanduanWasiatGuide />}
            {activeTab === 'wasiat-simulator' && (
              <WasiatSimulator
                onGoToFaraidh={() => {
                  setCurrentChapter('faraidh');
                  setActiveTab('calculator');
                  safeScrollToTop();
                }}
              />
            )}
            {activeTab === 'wasiat-quiz' && <WasiatQuiz />}
          </>
        )}

        {/* DAFTAR PUSTAKA */}
        {currentChapter === 'pustaka' && (
          <DaftarPustakaView
            onGoToChapter={(ch) => {
              handleSelectChapter(ch as MainChapter);
            }}
          />
        )}

              {/* Bottom Pagination & 1-Click Jump */}
              <ChapterBottomNav
                currentChapter={currentChapter}
                onSelectChapter={handleSelectChapter}
                onSelectTab={(tabId) => {
                  setActiveTab(tabId);
                  safeScrollToTop();
                }}
              />
            </>
          )}
        </main>
      </div>

      {/* Editorial Footer */}
      <footer className="bg-white border-t border-stone-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-stone-800 text-sm">FiqihMAPK</span>
              <span>·</span>
              <span>
                {currentChapter === 'thaharah' && 'BAB 1: Fiqih Thaharah (Bersuci dalam Islam)'}
                {currentChapter === 'haid' && 'BAB 2: Fiqih Haid, Istihadhah & Nifas'}
                {currentChapter === 'shalat' && 'BAB 3: Fiqih Shalat (Tiang Agama Islam)'}
                {currentChapter === 'jamaah_jumat' && 'BAB 4: Fiqih Shalat Jama\'ah, Jum\'at & Musafir'}
                {currentChapter === 'jenazah' && 'BAB 5: Fiqih Tajhizul Jana\'iz (Pemulasaran Jenazah)'}
                {currentChapter === 'zakat' && 'BAB 6: Fiqih Zakat (Fitrah, Mal & Profesi)'}
                {currentChapter === 'puasa' && 'BAB 7: Fiqih Puasa (Ramadhan, Fidyah & Puasa Sunnah)'}
                {currentChapter === 'haji' && 'BAB 8: Fiqih Ibadah Haji & Umrah'}
                {currentChapter === 'qurban' && 'BAB 9: Fiqih Qurban (Udh-hiyah) & Aqiqah'}
                {currentChapter === 'sembelih' && 'BAB 10: Fiqih Sembelihan, Berburu & Makanan Halal'}
                {currentChapter === 'milkiyyah' && 'BAB 11: Fiqih Kepemilikan Harta (Al-Milkiyyah)'}
                {currentChapter === 'jualbeli' && 'BAB 12: Fiqih Jual Beli (Musyahadah, Mausuf, Ghaib & Khiyar)'}
                {currentChapter === 'muamalah' && 'BAB 13: Fiqih Mu\'āmalah Māliyyah (Akad-Akad Ekonomi Islam)'}
                {currentChapter === 'hibah_wakaf' && 'BAB 14: Fiqih Hibah & Wakaf (Filantropi & Sedekah Jariyah)'}
                {currentChapter === 'riba' && 'BAB 15: Fiqih Riba (Hukum, Bahaya, Barter & Solusi Syariah)'}
                {currentChapter === 'jinayat' && 'BAB 16: Fiqih Jināyāt (Hukum Pidana, Qishash & Diyat)'}
                {currentChapter === 'hudud' && 'BAB 17: Fiqih Jināyāt (Hudūd - Sanksi Pidana Tertentu)'}
                {currentChapter === 'peradilan' && 'BAB 18: Fiqih Al-Qadhā\' (Lembaga Peradilan & Hukum Acara Islam)'}
                {currentChapter === 'munakahat' && 'BAB 19: Fiqih Munakahat (Pernikahan dalam Islam)'}
                {currentChapter === 'perceraian' && 'BAB 20: Fiqih Al-Firāq (Perceraian, Thalaq, Khulu\' & Rujuk)'}
                {currentChapter === 'faraidh' && 'BAB 21: Fiqih Mawarith (Kewarisan & Hitungan Waris)'}
                {currentChapter === 'wasiat' && 'BAB 22: Fiqih Al-Washiyyah (Hukum Wasiat Harta Peninggalan)'}
                {currentChapter === 'pustaka' && 'Daftar Pustaka & Bibliografi Ilmiah (Al-Marāji\' wal Mashādir)'}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-stone-600">
              <span>Kurikulum Merdeka Madrasah Aliyah Program Keagamaan</span>
              <span>·</span>
              <span>Fase E & Fase F</span>
            </div>

            <div className="text-stone-500 font-medium">
              Hak Cipta © {new Date().getFullYear()} FiqihMAPK · <span className="text-stone-800 font-semibold">Samhadi Ifriandi Putra</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
