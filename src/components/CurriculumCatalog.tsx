import { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  Star, 
  Filter,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ChevronsDown,
  ChevronsUp,
  Laptop,
  Layers,
  Wrench,
  Gift,
  Search,
  Check
} from 'lucide-react';
import { ENTERPRISE_CURRICULUMS } from '../data/curriculums';
import { CurriculumItem, JobDepartment, TrainingFormat } from '../types';

interface CurriculumCatalogProps {
  onSelectCurriculum: (curriculumTitle: string) => void;
  onViewSyllabus: (curriculumId: string) => void;
}

export default function CurriculumCatalog({
  onSelectCurriculum,
  onViewSyllabus
}: CurriculumCatalogProps) {
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  
  // Track expanded curriculum IDs (set first item open by default for clear immediate visibility)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set([ENTERPRISE_CURRICULUMS[0]?.id || 'curriculum-all-01'])
  );

  const toggleItem = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = (itemsToExpand: CurriculumItem[]) => {
    setExpandedIds(new Set(itemsToExpand.map(i => i.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  const departments: { key: string; label: string }[] = [
    { key: 'all', label: '전체 직무' },
    { key: 'all_staff', label: '전사 공통' },
    { key: 'planning', label: '전략·기획' },
    { key: 'marketing', label: '마케팅·영업' },
    { key: 'hr', label: 'HR·인재개발' },
    { key: 'dev', label: 'IT·개발' },
    { key: 'rnd', label: 'R&D·제조' },
    { key: 'executive', label: '경영진·임원' },
  ];

  const formats = [
    { key: 'all', label: '전체 형태' },
    { key: 'hybrid', label: '온·오프라인 융합' },
    { key: 'offline', label: '오프라인 실습 100%' },
    { key: 'online', label: '온라인 VOD' },
    { key: 'consulting', label: '임원 컨설팅' }
  ];

  const filteredList = ENTERPRISE_CURRICULUMS.filter(item => {
    const matchesFormat = selectedFormat === 'all' || item.format === selectedFormat;
    const matchesDept = selectedDept === 'all' || 
      (selectedDept === 'all_staff' && item.department === 'all') ||
      item.department === selectedDept;
    const matchesSearch = searchKeyword === '' || 
      item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.targetAudience.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.tools.some(t => t.toLowerCase().includes(searchKeyword.toLowerCase()));
    return matchesFormat && matchesDept && matchesSearch;
  });

  const allExpanded = filteredList.length > 0 && filteredList.every(item => expandedIds.has(item.id));

  return (
    <section id="curriculum-catalog" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#0056D2] text-xs font-bold border border-blue-200">
              <BookOpen className="w-3.5 h-3.5 text-[#0056D2]" />
              <span>전체 AX 교육 커리큘럼 카탈로그</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              직무별 세부 커리큘럼 <span className="text-[#0056D2]">둘러보기</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              각 교육 과정의 카드를 클릭하여 세부 모듈 구성, 실습 내용, 사용 AI 도구, 실무 산출물을 손쉽게 확인하세요.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full lg:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="직무, 도구, 키워드 검색 (예: 마케팅, Copilot)"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0056D2] bg-white shadow-2xs"
            />
            {searchKeyword && (
              <button
                onClick={() => setSearchKeyword('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-6 space-y-4">
          
          {/* Department Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-slate-700 shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#0056D2]" /> 직무별:
            </span>
            {departments.map(dept => (
              <button
                key={dept.key}
                onClick={() => setSelectedDept(dept.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDept === dept.key
                    ? 'bg-[#0056D2] text-white font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* Format Filter & Master Toggle Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            
            {/* Format chips */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-500 font-medium mr-1">진행 형태:</span>
              {formats.map(fmt => (
                <button
                  key={fmt.key}
                  onClick={() => setSelectedFormat(fmt.key)}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    selectedFormat === fmt.key
                      ? 'bg-slate-900 text-white font-bold'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {fmt.label}
                </button>
              ))}
            </div>

            {/* Master Expand / Collapse Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 mr-1 hidden sm:inline">
                {expandedIds.size} / {filteredList.length}개 펼쳐짐
              </span>

              <button
                id="curriculum-expand-all-btn"
                onClick={() => expandAll(filteredList)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 shadow-2xs transition-colors"
                title="모든 세부 커리큘럼 펼치기"
              >
                <ChevronsDown className="w-3.5 h-3.5 text-blue-600" />
                <span>모두 펼치기</span>
              </button>

              <button
                id="curriculum-collapse-all-btn"
                onClick={collapseAll}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 shadow-2xs transition-colors"
                title="모든 세부 커리큘럼 접기"
              >
                <ChevronsUp className="w-3.5 h-3.5 text-slate-500" />
                <span>모두 접기</span>
              </button>
            </div>

          </div>

        </div>

        {/* Empty State */}
        {filteredList.length === 0 && (
          <div className="mt-12 p-12 bg-white rounded-2xl border border-slate-200 text-center space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-800 text-base">검색 조건에 일치하는 커리큘럼이 없습니다.</h3>
            <p className="text-xs text-slate-500">직무 필터나 검색어를 변경해보시거나 전체 보기를 클릭해 보세요.</p>
            <button
              onClick={() => {
                setSelectedDept('all');
                setSelectedFormat('all');
                setSearchKeyword('');
              }}
              className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              필터 초기화
            </button>
          </div>
        )}

        {/* Accordion / Toggle List */}
        <div className="mt-8 space-y-4">
          {filteredList.map((item) => {
            const isExpanded = expandedIds.has(item.id);

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded 
                    ? 'border-[#0056D2]/60 shadow-md ring-1 ring-blue-100' 
                    : 'border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Accordion Header Row (Clickable to toggle) */}
                <div
                  onClick={() => toggleItem(item.id)}
                  className="p-5 sm:p-6 cursor-pointer select-none hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleItem(item.id);
                    }
                  }}
                >
                  {/* Left info: Tag, Title, Subtitle */}
                  <div className="space-y-1.5 flex-1 pr-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-[#0056D2] border border-blue-200">
                        {item.tag}
                      </span>

                      {item.isPopular && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-600" />
                          <span>인기 추천</span>
                        </span>
                      )}

                      <span className="text-xs text-slate-500 font-medium">
                        {item.format === 'hybrid' ? '온·오프라인 융합' : item.format === 'offline' ? '오프라인 실습' : item.format === 'online' ? '온라인 VOD' : '임원 컨설팅'}
                      </span>

                      <div className="flex items-center gap-1 text-xs font-bold text-amber-500 ml-auto md:ml-2">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{item.satisfactionScore}</span>
                        <span className="text-slate-400 font-normal">({item.completionRate}% 이수)</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 group-hover:text-[#0056D2] transition-colors">
                      <span>{item.title}</span>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-1">
                      {item.subtitle}
                    </p>

                    {/* Metadata chips */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <strong className="text-slate-700 font-medium">{item.duration}</strong>
                      </span>
                      <span>•</span>
                      <span>대상: <strong className="text-slate-700 font-medium">{item.targetAudience}</strong></span>
                      <span>•</span>
                      <span>모듈 수: <strong className="text-blue-700 font-bold">{item.modules?.length || 4}개 세부 모듈</strong></span>
                    </div>
                  </div>

                  {/* Right side: Toggle button and Quick Action */}
                  <div className="flex items-center gap-2.5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 justify-between md:justify-end">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleItem(item.id);
                      }}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                        isExpanded
                          ? 'bg-[#0056D2] text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <span>{isExpanded ? '세부 커리큘럼 접기' : '세부 커리큘럼 펼치기'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Content (구체적인 커리큘럼 토글 패널) */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-6 animate-in slide-in-from-top-2 duration-200">
                    
                    {/* Overview Grid: Highlights, Tools, Deliverables */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-3">
                      
                      {/* Left: Highlights & Tools (7 cols) */}
                      <div className="lg:col-span-7 space-y-4">
                        
                        {/* Highlights checklist */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2.5">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>핵심 역량 체득 & 교육 특징</span>
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                            {item.highlights.map((hl, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tools used */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                            <Wrench className="w-4 h-4 text-blue-600" />
                            <span>실습에 활용하는 엔터프라이즈 AI 도구</span>
                          </h4>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {item.tools.map((tool, idx) => (
                              <span 
                                key={idx} 
                                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* Right: Deliverables & Training Setup (5 cols) */}
                      <div className="lg:col-span-5 space-y-4">
                        
                        {/* Deliverables box */}
                        <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200/80 shadow-2xs space-y-2">
                          <h4 className="text-xs font-bold text-[#0056D2] uppercase tracking-wider flex items-center gap-1.5">
                            <Gift className="w-4 h-4 text-[#0056D2]" />
                            <span>교육 수료 시 실무 기대 산출물</span>
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                            {item.expectedOutput}
                          </p>
                        </div>

                        {/* Hours breakdown card */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2 text-xs text-slate-600">
                          <div className="flex justify-between items-center">
                            <span>온라인 사전 마이크로러닝:</span>
                            <span className="font-bold text-slate-900">{item.onlineHours}시간</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>오프라인 집중 핸즈온 랩:</span>
                            <span className="font-bold text-slate-900">{item.offlineHours}시간</span>
                          </div>
                          <div className="pt-2 border-t border-slate-100 flex justify-between items-center font-bold text-slate-900">
                            <span>총 교육 시간:</span>
                            <span className="text-[#0056D2]">{item.duration}</span>
                          </div>
                        </div>

                      </div>

                    </div>

                    {/* Step-by-Step Modules Accordion (세부 모듈별 토글) */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                          <Layers className="w-4 h-4 text-[#0056D2]" />
                          <span>세부 모듈별 커리큘럼 구성 ({item.modules.length}개 모듈)</span>
                        </h4>
                        <span className="text-xs text-slate-500 font-medium">실습 85% + 이론 15%</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {item.modules.map((mod, modIdx) => (
                          <div 
                            key={modIdx}
                            className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2 hover:border-blue-300 transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                                {mod.title.split(':')[0] || `모듈 ${modIdx + 1}`}
                              </span>
                              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                                <Clock className="w-3 h-3 text-slate-400" />
                                {mod.hours}시간
                              </span>
                            </div>

                            <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                              {mod.title.includes(':') ? mod.title.split(':')[1] : mod.title}
                            </h5>

                            <p className="text-xs text-slate-600 leading-relaxed">
                              {mod.description}
                            </p>

                            {/* Topics pills */}
                            <div className="flex flex-wrap gap-1 pt-1.5">
                              {mod.topics.map((topic, tIdx) => (
                                <span 
                                  key={tIdx}
                                  className="text-[11px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100"
                                >
                                  #{topic}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action CTAs for this curriculum */}
                    <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-slate-600 text-center sm:text-left">
                        <span>💡 귀사 인원 및 직무에 맞춰 커리큘럼 모듈의 추가/삭제 커스터마이징이 가능합니다.</span>
                      </div>

                      <div className="flex items-center gap-2.5 w-full sm:w-auto">
                        <button
                          onClick={() => onViewSyllabus(item.id)}
                          className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                        >
                          <FileText className="w-3.5 h-3.5 text-slate-500" />
                          <span>강의계획서 전체보기</span>
                        </button>

                        <button
                          onClick={() => onSelectCurriculum(item.title)}
                          className="flex-1 sm:flex-initial py-2.5 px-5 rounded-xl text-xs font-bold bg-[#0056D2] hover:bg-blue-700 text-white transition-colors shadow-xs flex items-center justify-center gap-1.5"
                        >
                          <span>이 과정으로 상담 신청</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-sm">
              찾으시는 특화 과정이나 사내 사설 AI 인프라 연동이 필요하신가요?
            </h4>
            <p className="text-xs text-slate-600">
              금융/의료/제조 특화 도메인, 사내 보안 망분리 환경, 고용보험 환급 서류 대행까지 전담 컨설턴트가 지원합니다.
            </p>
          </div>
          <button
            onClick={() => onSelectCurriculum('사내 특화 신규 커리큘럼 커스터마이징 문의')}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shrink-0 shadow-xs"
          >
            커스텀 과정 설계 요청
          </button>
        </div>

      </div>
    </section>
  );
}
