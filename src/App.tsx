import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CurriculumDetailBundle from './components/CurriculumDetailBundle';
import EnterpriseCases from './components/EnterpriseCases';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import SyllabusModal from './components/SyllabusModal';
import { ENTERPRISE_CURRICULUMS } from './data/curriculums';
import { CurriculumItem, WorkshopItem } from './types';
import { MessageSquare, PhoneCall, Sparkles, FileText, X } from 'lucide-react';

export default function App() {
  // Curriculum Detail bundle state (starts closed / collapsed)
  const [isCurriculumDetailOpen, setIsCurriculumDetailOpen] = useState(false);

  // Modal states
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationTargetCurriculum, setConsultationTargetCurriculum] = useState<string>('');
  const [consultationTargetDetails, setConsultationTargetDetails] = useState<any>(null);

  // Syllabus drawer modal
  const [activeCurriculumSyllabus, setActiveCurriculumSyllabus] = useState<CurriculumItem | null>(null);
  const [activeWorkshopSyllabus, setActiveWorkshopSyllabus] = useState<WorkshopItem | null>(null);

  // Quick Brochure Modal State
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  // Open consultation with optional pre-filled title
  const handleOpenConsultation = (curriculumTitle?: string, details?: any) => {
    setConsultationTargetCurriculum(curriculumTitle || '전사 AX 실무 맞춤 교육 종합');
    setConsultationTargetDetails(details || null);
    setIsConsultationModalOpen(true);
  };

  // View syllabus for curriculum
  const handleViewCurriculumSyllabus = (curriculumId: string) => {
    const item = ENTERPRISE_CURRICULUMS.find(c => c.id === curriculumId) || ENTERPRISE_CURRICULUMS[0];
    setActiveCurriculumSyllabus(item);
    setActiveWorkshopSyllabus(null);
  };

  // View syllabus for workshop
  const handleViewWorkshopSyllabus = (workshop: WorkshopItem) => {
    setActiveWorkshopSyllabus(workshop);
    setActiveCurriculumSyllabus(null);
  };

  const closeSyllabusModal = () => {
    setActiveCurriculumSyllabus(null);
    setActiveWorkshopSyllabus(null);
  };

  const scrollToSection = (id: string) => {
    const bundleSections = [
      'curriculum-detail-bundle',
      'recommendation-engine',
      'workshops-section',
      'dashboard-section',
      'curriculum-catalog',
      'consulting-section'
    ];

    if (bundleSections.includes(id)) {
      setIsCurriculumDetailOpen(true);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* 1. Global Header */}
      <Header
        onOpenConsultation={(title) => handleOpenConsultation(title)}
        onOpenQuickGuide={() => setIsBrochureModalOpen(true)}
        onNavigateSection={(id) => scrollToSection(id)}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* 2. Enterprise Hero Section */}
        <Hero
          onStartDiagnosis={() => scrollToSection('recommendation-engine')}
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToWorkshops={() => scrollToSection('workshops-section')}
          onScrollToDashboard={() => scrollToSection('dashboard-section')}
          onExploreCurriculums={() => {
            setIsCurriculumDetailOpen(true);
            setTimeout(() => {
              const el = document.getElementById('curriculum-catalog') || document.getElementById('curriculum-detail-bundle');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 60);
          }}
        />

        {/* 3. Bundled '커리큘럼 상세' Section: Initially collapsed, expandable upon user click */}
        <CurriculumDetailBundle
          isOpen={isCurriculumDetailOpen}
          onToggle={() => setIsCurriculumDetailOpen(!isCurriculumDetailOpen)}
          onSelectCurriculumForProposal={(title, details) => handleOpenConsultation(title, details)}
          onViewCurriculumSyllabus={(curriculumId) => handleViewCurriculumSyllabus(curriculumId)}
          onSelectWorkshopForProposal={(workshopTitle) => handleOpenConsultation(workshopTitle)}
          onOpenWorkshopSyllabus={(workshop) => handleViewWorkshopSyllabus(workshop)}
          onOpenConsultation={(topic) => handleOpenConsultation(topic)}
        />

        {/* 4. Client References & Testimonials */}
        <EnterpriseCases
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Bottom Call to Action Strip */}
        <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white py-14 px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-blue-100 border border-white/20 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>대한민국 HRD 임직원 AX 역량 강화 솔루션</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              귀사에 꼭 맞는 전사 AX 교육 커리큘럼, <br className="hidden sm:inline" />
              지금 전문 컨설턴트와 상의하세요
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
              사전 현업 인터뷰를 통한 커스터마이징, 사내 데이터 보안 NDA 보장, 
              고용보험 환급 및 정부지원 바우처를 전담 매니저가 원스톱으로 지원합니다.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => handleOpenConsultation()}
                className="px-7 py-3.5 bg-white text-blue-700 font-extrabold text-sm rounded-xl hover:bg-blue-50 shadow-lg transition-all"
              >
                무료 맞춤 제안서 &amp; 견적 신청
              </button>
              <a
                href="tel:02-588-3490"
                className="px-6 py-3.5 bg-blue-800/80 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl border border-blue-400/30 transition-all inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>유선 전화 상담: 02-588-3490</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Global Enterprise Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* 10. Consultation Modal (맞춤형 교육 과정 제안 상담 신청) */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        selectedCurriculumTitle={consultationTargetCurriculum}
        initialDetails={consultationTargetDetails}
      />

      {/* 11. Detailed Syllabus Modal */}
      <SyllabusModal
        curriculum={activeCurriculumSyllabus}
        workshop={activeWorkshopSyllabus}
        onClose={closeSyllabusModal}
        onApplyProposal={(title) => handleOpenConsultation(title)}
      />

      {/* 12. Quick Brochure Download Modal */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-slate-200 text-slate-900 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="font-extrabold text-base">AX Campus 교육 안내서 (PDF)</h3>
              </div>
              <button 
                onClick={() => setIsBrochureModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              2026년 최신 전사 AX 직무별 교육 커리큘럼 요약표, 실무 워크숍 일정, 
              HRD 대시보드 데모 및 고용보험 환급 안내가 포함된 28페이지 소개서입니다.
            </p>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1">
              <div className="text-slate-700"><strong>파일명:</strong> [AX_Campus] 2026_기업_맞춤형_AX_교육_종합소개서.pdf</div>
              <div className="text-slate-700"><strong>용량:</strong> 4.8 MB</div>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  alert('안내서 PDF 다운로드가 시작되었습니다.');
                  setIsBrochureModalOpen(false);
                }}
                className="flex-1 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition-colors"
              >
                소개서 즉시 다운로드
              </button>
              <button
                onClick={() => {
                  setIsBrochureModalOpen(false);
                  handleOpenConsultation();
                }}
                className="py-2.5 px-3 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition-colors"
              >
                맞춤 견적 함께 신청
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Quick Consultation Action Pill */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2">
        <button
          id="floating-consult-pill"
          onClick={() => handleOpenConsultation()}
          className="group flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-blue-600/40 transition-all font-bold text-xs sm:text-sm active:scale-95"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <MessageSquare className="w-4 h-4 text-white" />
          <span>HRD 맞춤 교육 상담 신청</span>
        </button>
      </div>

    </div>
  );
}
