import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Sparkles, 
  Layers, 
  Target, 
  Wrench, 
  BarChart3, 
  Building2 
} from 'lucide-react';
import RecommendationEngine from './RecommendationEngine';
import WorkshopSection from './WorkshopSection';
import DashboardPreview from './DashboardPreview';
import CurriculumCatalog from './CurriculumCatalog';
import ConsultingSection from './ConsultingSection';

interface CurriculumDetailBundleProps {
  isOpen: boolean;
  onToggle: () => void;
  onSelectCurriculumForProposal: (title: string, details?: any) => void;
  onViewCurriculumSyllabus: (curriculumId: string) => void;
  onSelectWorkshopForProposal: (workshopTitle: string) => void;
  onOpenWorkshopSyllabus: (workshop: any) => void;
  onOpenConsultation: (topic?: string) => void;
}

export default function CurriculumDetailBundle({
  isOpen,
  onToggle,
  onSelectCurriculumForProposal,
  onViewCurriculumSyllabus,
  onSelectWorkshopForProposal,
  onOpenWorkshopSyllabus,
  onOpenConsultation
}: CurriculumDetailBundleProps) {

  const scrollToSubSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCollapse = () => {
    onToggle();
    const container = document.getElementById('curriculum-detail-bundle');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="curriculum-detail-bundle" className="relative scroll-mt-14">
      
      {/* 1. Closed/Collapsed Teaser Card */}
      {!isOpen && (
        <div className="py-12 sm:py-16 bg-slate-100/80 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              onClick={onToggle}
              className="bg-white rounded-3xl border-2 border-blue-200 hover:border-[#0056D2] shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-10 cursor-pointer group select-none"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                
                {/* Left Information */}
                <div className="space-y-4 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0056D2] text-xs font-extrabold border border-blue-200">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>AX Campus 교육 체계도</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                    커리큘럼 상세 <span className="text-[#0056D2] text-xl sm:text-2xl font-bold">(접혀 있음)</span>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                    <strong>HRD 최적 매칭 제안(전사 임직원 AX 리터러시 & 업무 자동화)</strong>부터 실습 85% 프로젝트 랩, 임직원 역량 분석 대시보드, 직무별 7개 상세 트랙, <strong>기업 맞춤형 AX 전사 컨설팅</strong>까지 5대 상세 교육 체계를 한 번에 확인하세요.
                  </p>

                  {/* 5 Components Feature Badges */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200">
                      <Target className="w-3.5 h-3.5 text-blue-600" />
                      1. HRD 최적 매칭 진단
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200">
                      <Wrench className="w-3.5 h-3.5 text-emerald-600" />
                      2. 실습 85% 워크숍
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200">
                      <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
                      3. HRD 분석 대시보드
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200">
                      <Layers className="w-3.5 h-3.5 text-indigo-600" />
                      4. 직무별 세부 커리큘럼
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200">
                      <Building2 className="w-3.5 h-3.5 text-purple-600" />
                      5. 기업 맞춤형 전사 컨설팅
                    </span>
                  </div>
                </div>

                {/* Right Big Button */}
                <div className="shrink-0 w-full sm:w-auto text-center">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggle();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#0056D2] hover:bg-blue-700 text-white font-black text-base shadow-lg shadow-blue-600/30 group-hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>커리큘럼 상세</span>
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <ChevronDown className="w-4 h-4 text-white" />
                    </div>
                  </button>
                  <span className="text-[11px] text-slate-700 font-medium block mt-2">
                    클릭 시 5개 세부 교육 섹션이 펼쳐집니다
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Expanded Curriculum Content */}
      {isOpen && (
        <div className="relative">
          
          {/* Top Control Bar */}
          <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-blue-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
              
              {/* Title & Quick Jump Links */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                    커리큘럼 상세
                  </span>
                  <span className="text-xs text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100 hidden sm:inline">
                    5대 체계 펼쳐짐
                  </span>
                </div>

                {/* Quick Anchors */}
                <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-600 border-l border-slate-200 pl-3">
                  <button 
                    onClick={() => scrollToSubSection('recommendation-engine')}
                    className="px-2 py-1 rounded hover:bg-slate-100 hover:text-blue-600 transition-colors"
                  >
                    맞춤 진단
                  </button>
                  <span>•</span>
                  <button 
                    onClick={() => scrollToSubSection('workshops-section')}
                    className="px-2 py-1 rounded hover:bg-slate-100 hover:text-blue-600 transition-colors"
                  >
                    실습 워크숍
                  </button>
                  <span>•</span>
                  <button 
                    onClick={() => scrollToSubSection('dashboard-section')}
                    className="px-2 py-1 rounded hover:bg-slate-100 hover:text-blue-600 transition-colors"
                  >
                    HRD 대시보드
                  </button>
                  <span>•</span>
                  <button 
                    onClick={() => scrollToSubSection('curriculum-catalog')}
                    className="px-2 py-1 rounded hover:bg-slate-100 hover:text-blue-600 transition-colors"
                  >
                    직무별 커리큘럼
                  </button>
                  <span>•</span>
                  <button 
                    onClick={() => scrollToSubSection('consulting-section')}
                    className="px-2 py-1 rounded hover:bg-slate-100 hover:text-blue-600 transition-colors"
                  >
                    전사 컨설팅
                  </button>
                </div>
              </div>

              {/* Collapse Button */}
              <button
                type="button"
                onClick={handleCollapse}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors border border-slate-300 shadow-2xs"
              >
                <span>커리큘럼 상세 접기</span>
                <ChevronUp className="w-4 h-4 text-slate-600" />
              </button>

            </div>
          </div>

          {/* Bundled Sub-Components */}
          <div className="space-y-0">
            {/* 1. Interactive AX Curriculum Recommendation Engine */}
            <RecommendationEngine
              onSelectCurriculumForProposal={onSelectCurriculumForProposal}
              onViewSyllabus={onViewCurriculumSyllabus}
            />

            {/* 2. Emphasized Hands-on Workshop Section (실습 85% 프로젝트 랩) */}
            <WorkshopSection
              onSelectWorkshopForProposal={onSelectWorkshopForProposal}
              onOpenWorkshopSyllabus={onOpenWorkshopSyllabus}
            />

            {/* 3. Emphasized Enterprise HRD Analytics Dashboard */}
            <DashboardPreview
              onOpenConsultation={() => onOpenConsultation('HRD 맞춤 분석 대시보드 및 전사 교육 도입')}
            />

            {/* 4. Complete Curriculum Catalog */}
            <CurriculumCatalog
              onSelectCurriculum={onSelectCurriculumForProposal}
              onViewSyllabus={onViewCurriculumSyllabus}
            />

            {/* 5. Corporate AX Consulting & CoE Roadmap */}
            <ConsultingSection
              onOpenConsultation={() => onOpenConsultation('전사 AX 컨설팅 및 CoE 구축')}
            />
          </div>

          {/* Bottom Collapse Bar */}
          <div className="py-6 bg-slate-900 border-t border-slate-800 text-center">
            <button
              type="button"
              onClick={handleCollapse}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-colors shadow-sm"
            >
              <span>커리큘럼 상세 접기</span>
              <ChevronUp className="w-4 h-4 text-blue-400" />
            </button>
          </div>

        </div>
      )}

    </section>
  );
}
