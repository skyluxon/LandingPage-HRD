import { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  Download, 
  Clock, 
  Users, 
  Layers, 
  Shield, 
  Cpu, 
  Briefcase, 
  Loader2,
  FileSpreadsheet,
  AlertCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ENTERPRISE_CURRICULUMS } from '../data/curriculums';
import { ENTERPRISE_WORKSHOPS } from '../data/workshops';
import { JobDepartment, TrainingFormat } from '../types';

interface RecommendationEngineProps {
  onSelectCurriculumForProposal: (curriculumTitle: string, details?: any) => void;
  onViewSyllabus: (curriculumId: string) => void;
}

export default function RecommendationEngine({
  onSelectCurriculumForProposal,
  onViewSyllabus
}: RecommendationEngineProps) {
  // Simulator Filter State
  const [selectedIndustry, setSelectedIndustry] = useState('제조 / 전자 / 첨단소재');
  const [selectedDept, setSelectedDept] = useState<JobDepartment>('all');
  const [selectedMaturity, setSelectedMaturity] = useState('실무 활용 (자료 조사 & 문서 보조 단계)');
  const [selectedFormat, setSelectedFormat] = useState<TrainingFormat>('hybrid');
  const [participantCount, setParticipantCount] = useState('30~50명 (부서 집중)');
  const [isMatchedModulesOpen, setIsMatchedModulesOpen] = useState(false);

  // AI Custom Diagnostician State (Server Gemini API)
  const [isAiMode, setIsAiMode] = useState(false);
  const [aiCompanyName, setAiCompanyName] = useState('');
  const [aiCustomGoals, setAiCustomGoals] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  // Industry list
  const industries = [
    '제조 / 전자 / 첨단소재',
    '금융 / 핀테크 / 보험',
    'IT / 플랫폼 / 게임',
    '유통 / 물류 / 이커머스',
    '바이오 / 제약 / 헬스케어',
    '공공 / 공기업 / 교육기관'
  ];

  // Department tabs
  const deptList: { key: JobDepartment; label: string; icon: string }[] = [
    { key: 'all', label: '전사 공통 실무', icon: '🌐' },
    { key: 'planning', label: '전략기획·경영', icon: '📊' },
    { key: 'marketing', label: '마케팅·영업', icon: '🎯' },
    { key: 'hr', label: '인사·HRD', icon: '👥' },
    { key: 'finance', label: '재무·회계·구매', icon: '💰' },
    { key: 'it_dev', label: 'IT개발·데이터', icon: '💻' },
    { key: 'rnd', label: 'R&D·연구소', icon: '🔬' },
    { key: 'executive', label: '임원·경영진', icon: '👔' }
  ];

  // AI Maturity levels
  const maturityLevels = [
    {
      title: '1단계: 입문 & 보안 가이드라인',
      desc: '개인적 ChatGPT 단순 질문 수준, 사내 보안 규정 미정립'
    },
    {
      title: '2단계: 실무 활용 & 프롬프트 체이닝',
      desc: '문서 요약, 메일 작성 등 기본 업무에 활용하나 체계 부족'
    },
    {
      title: '3단계: 직무별 자동화 & AI 봇 구축',
      desc: '부서별 맞춤 프롬프트 및 노코드 도구로 반복 업무 자동화'
    },
    {
      title: '4단계: 전사 AI Agent & CoE 내재화',
      desc: '사내 RAG 지식 검색기 및 시스템 연동 자율 에이전트 구축'
    }
  ];

  // Formats
  const formats = [
    { key: 'hybrid', label: '온·오프라인 융합 (추천)', badge: '학습효과 극대화' },
    { key: 'offline', label: '오프라인 집중 워크숍', badge: '100% 실습 해커톤' },
    { key: 'online', label: '온라인 VOD 마이크로러닝', badge: '전사 자율학습' },
    { key: 'consulting', label: '전사 AX 컨설팅 & CoE', badge: '임원/체계 구축' }
  ];

  // Compute best matching curriculum
  const matchedCurriculum = ENTERPRISE_CURRICULUMS.find(
    c => (selectedDept === 'all' ? c.department === 'all' : c.department === selectedDept)
  ) || ENTERPRISE_CURRICULUMS[0];

  // Compute matched workshop
  const matchedWorkshop = ENTERPRISE_WORKSHOPS.find(
    w => (selectedDept === 'all' ? w.department === 'all' : w.department === selectedDept)
  ) || ENTERPRISE_WORKSHOPS[0];

  // Handle Gemini Server Diagnosis
  const handleRunAiDiagnosis = async () => {
    setIsAiLoading(true);
    setAiError(null);
    try {
      const response = await fetch('/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: aiCompanyName || `${selectedIndustry} 선도기업`,
          industry: selectedIndustry,
          targetDepartment: deptList.find(d => d.key === selectedDept)?.label,
          aiMaturity: selectedMaturity,
          participantCount: participantCount,
          goals: aiCustomGoals || '단순 이론을 넘어 실무 현업에서 주당 5시간 이상 절감할 수 있는 실습 프로젝트 중심 교육 구성'
        })
      });

      const data = await response.json();
      if (data.success) {
        setAiResult(data.data);
      } else {
        setAiError(data.error || '진단 생성에 실패했습니다.');
      }
    } catch (err) {
      console.error(err);
      setAiError('서버 연결 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <section id="recommendation-engine" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>스마트 HRD 커리큘럼 추천 엔진</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            귀사의 산업군과 직무에 최적화된 <br />
            <span className="text-blue-600">맞춤형 AX 교육 로드맵</span>을 진단해 드립니다
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            업종, 교육 대상 부서, 임직원의 현재 AI 활용도에 따라 즉시 적용 가능한 
            최적의 교육 과정과 워크숍 및 예상 산출물을 확인하세요.
          </p>
        </div>

        {/* Diagnosis Mode Selector Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              id="mode-instant-recommender"
              onClick={() => setIsAiMode(false)}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                !isAiMode 
                  ? 'bg-white text-blue-700 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              직무 & 조건별 빠른 커리큘럼 추천
            </button>
            <button
              id="mode-ai-custom-advisor"
              onClick={() => setIsAiMode(true)}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                isAiMode 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>AI 기반 맞춤형 제안서 실시간 생성</span>
              <span className="text-[10px] bg-blue-700/80 px-1.5 py-0.2 rounded text-white font-mono">Gemini</span>
            </button>
          </div>
        </div>

        {!isAiMode ? (
          /* Standard Interactive Selector */
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Filter Criteria */}
            <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-6">
              
              {/* 1. Industry Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  1. 귀사의 주요 산업군
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {industries.map(ind => (
                    <button
                      key={ind}
                      onClick={() => setSelectedIndustry(ind)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg text-left transition-all border ${
                        selectedIndustry === ind
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Target Department */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  2. 교육 대상 직무 / 부서
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {deptList.map(dept => (
                    <button
                      key={dept.key}
                      onClick={() => setSelectedDept(dept.key)}
                      className={`px-3 py-2.5 text-xs rounded-lg text-center transition-all border flex flex-col items-center gap-1 ${
                        selectedDept === dept.key
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold ring-2 ring-blue-200'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-base">{dept.icon}</span>
                      <span>{dept.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Current AI Maturity */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-600" />
                  3. 임직원의 현재 AI 활용 수준
                </label>
                <div className="space-y-2">
                  {maturityLevels.map((lvl) => (
                    <button
                      key={lvl.title}
                      onClick={() => setSelectedMaturity(lvl.title)}
                      className={`w-full p-2.5 rounded-lg text-left transition-all border flex items-start justify-between ${
                        selectedMaturity === lvl.title
                          ? 'bg-blue-50/80 border-blue-500 ring-1 ring-blue-400'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className={`text-xs font-bold ${selectedMaturity === lvl.title ? 'text-blue-900' : 'text-slate-900'}`}>
                          {lvl.title}
                        </div>
                        <div className="text-[11px] text-slate-700 mt-0.5">{lvl.desc}</div>
                      </div>
                      {selectedMaturity === lvl.title && (
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Preferred Format */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  4. 희망 교육 진행 방식
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {formats.map(fmt => (
                    <button
                      key={fmt.key}
                      onClick={() => setSelectedFormat(fmt.key as TrainingFormat)}
                      className={`p-2.5 text-left rounded-lg border transition-all ${
                        selectedFormat === fmt.key
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold">{fmt.label}</div>
                      <div className={`text-[10px] mt-0.5 ${selectedFormat === fmt.key ? 'text-blue-100' : 'text-blue-600'}`}>
                        {fmt.badge}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Instant Recommendation Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-2xl border-2 border-blue-500 shadow-xl overflow-hidden relative">
                
                {/* Ribbon Tag */}
                <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white px-6 py-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase bg-blue-800/80 px-2 py-0.5 rounded text-blue-200 font-semibold">
                      HRD 최적 매칭 제안
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold mt-1">
                      {matchedCurriculum.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-blue-200 block">만족도</span>
                    <span className="text-lg font-black text-amber-300">★ {matchedCurriculum.satisfactionScore}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-5">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {matchedCurriculum.subtitle}
                  </p>

                  {/* Key Info Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                    <div>
                      <span className="text-slate-700 block">권장 일정</span>
                      <span className="font-bold text-slate-900 mt-0.5 block">{matchedCurriculum.duration}</span>
                    </div>
                    <div>
                      <span className="text-slate-700 block">교육 방식</span>
                      <span className="font-bold text-blue-600 mt-0.5 block">
                        {matchedCurriculum.format === 'hybrid' ? '온·오프라인 융합' : 
                         matchedCurriculum.format === 'offline' ? '오프라인 집중' : 
                         matchedCurriculum.format === 'online' ? '온라인 VOD' : '컨설팅 연계'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-700 block">수료 기준</span>
                      <span className="font-bold text-slate-900 mt-0.5 block">과제 산출물 제출</span>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                      이 과정의 주요 차별점 & 실무 혜택
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {matchedCurriculum.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Output */}
                  <div className="bg-amber-50/70 border border-amber-200/80 p-3.5 rounded-xl text-xs">
                    <span className="font-bold text-amber-900 block mb-1">🎯 최종 실무 산출물 (Deliverables):</span>
                    <p className="text-amber-800 leading-relaxed font-medium">
                      {matchedCurriculum.expectedOutput}
                    </p>
                  </div>

                  {/* Toggleable Modules Breakdown */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/60">
                    <button
                      type="button"
                      onClick={() => setIsMatchedModulesOpen(!isMatchedModulesOpen)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-100 transition-colors text-xs font-bold text-slate-900"
                    >
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-blue-600" />
                        <span>세부 모듈별 커리큘럼 ({matchedCurriculum.modules.length}개 모듈)</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-600 font-semibold">
                        <span>{isMatchedModulesOpen ? '접기' : '펼쳐보기'}</span>
                        {isMatchedModulesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isMatchedModulesOpen && (
                      <div className="p-3.5 pt-1 space-y-2.5 border-t border-slate-200/80 bg-white">
                        {matchedCurriculum.modules.map((mod, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg border border-slate-100 bg-slate-50/70 text-xs space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-blue-700">{mod.title}</span>
                              <span className="text-slate-500 font-medium">{mod.hours}시간</span>
                            </div>
                            <p className="text-slate-600 text-[11px] leading-relaxed">{mod.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Linked Workshop Recommendation */}
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800">
                        🔗 추천 연계 실무 워크숍
                      </span>
                      <span className="text-[11px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                        실습 비중 {matchedWorkshop.handsOnRatio}%
                      </span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <p className="font-bold text-slate-900">{matchedWorkshop.title}</p>
                      <p className="text-[11px] text-slate-700 mt-1">{matchedWorkshop.subtitle}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      id="btn-proposal-request"
                      onClick={() => onSelectCurriculumForProposal(matchedCurriculum.title, {
                        industry: selectedIndustry,
                        dept: selectedDept,
                        format: selectedFormat,
                        curriculum: matchedCurriculum
                      })}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all text-sm"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>이 과정으로 맞춤 제안서·견적 신청</span>
                    </button>

                    <button
                      id="btn-view-syllabus"
                      onClick={() => onViewSyllabus(matchedCurriculum.id)}
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-sm transition-all"
                    >
                      <FileSpreadsheet className="w-4 h-4 text-slate-600" />
                      <span>세부 강의계획서 확인</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-700">
                    * 인원 수 및 사내 일정에 따라 온·오프라인 비중과 커리큘럼 모듈 커스터마이징이 가능합니다.
                  </p>

                </div>
              </div>
            </div>

          </div>
        ) : (
          /* Gemini AI Custom Diagnosis Mode */
          <div className="mt-10 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">
                  AI 기반 기업 맞춤 AX 교육 제안서 실시간 생성기
                </h3>
                <p className="text-xs text-slate-600">
                  사내 특수 상황, 현업 부서의 페인포인트(Pain-point)를 입력하시면 즉시 전문 컨설턴트 수준의 기획안 초안을 생성합니다.
                </p>
              </div>
            </div>

            {/* Input Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">기업/기관명</label>
                <input
                  type="text"
                  placeholder="예: (주)한국제조기술, 넥스트금융"
                  value={aiCompanyName}
                  onChange={(e) => setAiCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">예상 교육 대상 인원</label>
                <select
                  value={participantCount}
                  onChange={(e) => setParticipantCount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="15~30명 (부서 핵심 인력 파일럿)">15~30명 (부서 핵심 인력 파일럿)</option>
                  <option value="30~60명 (팀장 및 실무자 집중 워크숍)">30~60명 (팀장 및 실무자 집중 워크숍)</option>
                  <option value="100~300명 (사업본부 전체 하이브리드)">100~300명 (사업본부 전체 하이브리드)</option>
                  <option value="500명 이상 (전사 온·오프라인 대규모)">500명 이상 (전사 온·오프라인 대규모)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                사내 주요 고민 및 해결하고 싶은 과제 (자유 서술)
              </label>
              <textarea
                rows={3}
                placeholder="예: 금융 보안 규정 때문에 사외 AI 툴 사용에 제약이 있습니다. 안전한 사내 환경에서 마케팅과 리스크 관리 부서 50명이 반복 보고서와 영수증 전표 검토 시간을 줄일 수 있는 실습 프로젝트 중심 교육을 제안받고 싶습니다."
                value={aiCustomGoals}
                onChange={(e) => setAiCustomGoals(e.target.value)}
                className="w-full p-3 rounded-lg border border-slate-300 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-700">
                ⚡ 최신 Gemini 3.8 Flash 모델 기반 엔터프라이즈 교육 진단 엔진 탑재
              </span>
              <button
                id="btn-run-ai-diagnosis"
                onClick={handleRunAiDiagnosis}
                disabled={isAiLoading}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all disabled:opacity-50"
              >
                {isAiLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>AI 맞춤 제안서 분석 중...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>맞춤 커리큘럼 기획안 실시간 생성</span>
                  </>
                )}
              </button>
            </div>

            {aiError && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{aiError}</span>
              </div>
            )}

            {/* AI Generated Result Showcase */}
            {aiResult && (
              <div className="mt-6 bg-white p-6 rounded-xl border-2 border-blue-500 shadow-md space-y-5">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-800 rounded">
                      AI 맞춤 제안서 초안 완성
                    </span>
                    <h4 className="text-lg font-extrabold text-slate-900 mt-1">
                      {aiResult.curriculumTitle}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {aiResult.programSummary}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-700 block">추천 형태</span>
                    <span className="font-bold text-slate-900">{aiResult.recommendedFormat}</span>
                  </div>
                  <div>
                    <span className="text-slate-700 block">권장 교육 시간</span>
                    <span className="font-bold text-slate-900">{aiResult.recommendedDuration}</span>
                  </div>
                  <div>
                    <span className="text-slate-700 block">예상 ROI 성과</span>
                    <span className="font-bold text-blue-600">{aiResult.expectedRoi}</span>
                  </div>
                </div>

                {/* Modules breakdown */}
                <div>
                  <h5 className="text-xs font-bold text-slate-900 mb-2">추천 교육 모듈 구성</h5>
                  <div className="space-y-2">
                    {aiResult.modules?.map((mod: any, idx: number) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                        <div className="flex justify-between items-center font-bold text-slate-900">
                          <span>{mod.step ? `Step ${mod.step}: ` : ''}{mod.title}</span>
                          <span className="text-[11px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">{mod.hours}h ({mod.type})</span>
                        </div>
                        <p className="text-[11px] text-slate-700 mt-1">{mod.summary}</p>
                        {mod.deliverable && (
                          <p className="text-[11px] text-emerald-800 font-semibold mt-1">
                            🎯 산출물: {mod.deliverable}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* HRD Advice */}
                {aiResult.consultingAdvice && (
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-xs text-blue-900">
                    <span className="font-bold block mb-0.5">💡 HRD 담당자를 위한 성공 제언:</span>
                    <span>{aiResult.consultingAdvice}</span>
                  </div>
                )}

                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => onSelectCurriculumForProposal(aiResult.curriculumTitle, {
                      aiCustom: true,
                      details: aiResult
                    })}
                    className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md text-sm transition-all"
                  >
                    이 AI 맞춤 기획안으로 정식 제안서 & 출강 견적 신청하기
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
